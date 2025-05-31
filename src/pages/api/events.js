export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const event = req.body;
  const ip =
    req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
    req.socket.remoteAddress;

  const enrichedEvent = {
    ...event,
    ip,
  };
  await fetch("http://localhost:3001/produce", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enrichedEvent),
  });

  res.status(200).end();
}
