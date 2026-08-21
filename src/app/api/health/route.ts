export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ ok: true, service: "yuva-rojgar-abhiyan", storage: "local-mock-data" });
}
