// Cloudflare Pages Function: handles POST /api/contact and emails the
// enquiry to lawrence@bailygroup.com via the Resend API.
//
// Setup required in Cloudflare Pages (Settings → Environment variables):
//   RESEND_API_KEY  — secret from https://resend.com (verify bailygroup.com)

interface Env {
  RESEND_API_KEY: string
}

type ContactContext = {
  request: Request
  env: Env
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function field(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value.join(', ').trim() : (value || '').trim()
}

export async function onRequestPost(context: ContactContext): Promise<Response> {
  const { request, env } = context

  let data: Record<string, string | string[]>
  try {
    data = (await request.json()) as Record<string, string>
  } catch {
    return json({ error: 'Invalid request.' }, 400)
  }

  const name = field(data.name)
  const email = field(data.email)
  const phone = field(data.phone)
  const budget = field(data.budget)
  const vehicleDetails = field(data.vehicleDetails)
  const vehicleUse = field(data.vehicleUse)
  const timeline = field(data.timeline)
  const message = field(data.message)

  if (!name || !email || !message) {
    return json({ error: 'Please fill in your name, email, and message.' }, 400)
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }
  if (!env.RESEND_API_KEY) {
    return json({ error: 'The contact form is not configured yet. Please email lawrence@bailygroup.com directly.' }, 500)
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'The Baily Group Website <noreply@bailygroup.com>',
      to: ['lawrence@bailygroup.com'],
      reply_to: email,
      subject: `New vehicle wishlist from ${name}`,
      text: [
        `Name:  ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '-'}`,
        `Budget: ${budget || '-'}`,
        `Vehicle details: ${vehicleDetails || '-'}`,
        `Vehicle use: ${vehicleUse || '-'}`,
        `Purchase timeline: ${timeline || '-'}`,
        '',
        'Additional notes / must-have features:',
        message,
      ].join('\n'),
    }),
  })

  if (!res.ok) {
    return json(
      { error: 'Sorry, your message could not be sent. Please email lawrence@bailygroup.com directly.' },
      502,
    )
  }

  return json({ ok: true }, 200)
}
