export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const VTU_API_BASE = "https://vtu.ng/wp-json";
  const VTU_API_KEY = process.env.VTU_KEY;

  try {
    const { phone, amount, network } = req.body;
    const r = await fetch(`${VTU_API_BASE}/buy-data?token=${VTU_API_KEY}&network=${network}&phone=${phone}&amount=${amount}`);
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
