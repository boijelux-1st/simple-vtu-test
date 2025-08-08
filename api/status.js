export default async function handler(req, res) {
  const VTU_API_BASE = "https://vtu.ng/wp-json";
  const VTU_API_KEY = process.env.VTU_KEY; // saka a Vercel env

  try {
    const r = await fetch(`${VTU_API_BASE}/list-transactions?token=${VTU_API_KEY}`);
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
