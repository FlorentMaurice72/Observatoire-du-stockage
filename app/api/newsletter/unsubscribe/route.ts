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

  // Remove from list if BREVO_LIST_ID is set
  if (process.env.BREVO_LIST_ID) {
    await fetch(
      `https://api.brevo.com/v3/contacts/lists/${process.env.BREVO_LIST_ID}/contacts/remove`,
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ emails: [email] }),
      }
    ).catch(() => null);
  }

  // Blacklist the contact so no further emails are sent
  const res = await fetch(
    `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
    {
      method: "PUT",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ emailBlacklisted: true }),
    }
  );

  if (res.ok || res.status === 204) {
    return NextResponse.json({ success: true });
  }

  if (res.status === 404) {
    // Contact doesn't exist — treat as success
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Une erreur est survenue. Réessayez." }, { status: 502 });
}
