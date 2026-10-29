import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Configuration manquante." }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email,
      updateEnabled: true,
      listIds: process.env.BREVO_LIST_ID ? [Number(process.env.BREVO_LIST_ID)] : undefined,
    }),
  });

  if (res.status === 204 || res.status === 201 || res.status === 200) {
    return NextResponse.json({ success: true });
  }

  if (res.status === 400) {
    const body = await res.json().catch(() => ({}));
    if (body?.code === "duplicate_parameter") {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Email invalide ou déjà inscrit." }, { status: 400 });
  }

  return NextResponse.json({ error: "Une erreur est survenue. Réessayez." }, { status: 502 });
}
