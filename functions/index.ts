export default function handler(request: Request): Response {
  if (request.method === 'GET') {
    return new Response(JSON.stringify({ message: 'Hello from Cloudflare Workers!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  return new Response('Method not allowed', { status: 405 })
}
