import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://observatoire-du-stockage.fr";

const WELCOME_HTML = (email: string) => `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenue dans l'Observatoire du Stockage</title>
</head>
<body style="margin:0;padding:0;background:#f8f9fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">

        <!-- Header -->
        <tr>
          <td style="background:#1e3a5f;padding:32px 40px;text-align:center;">
            <p style="margin:0;color:#93c5fd;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Observatoire du Stockage</p>
            <h1 style="margin:12px 0 0;color:#ffffff;font-size:22px;font-weight:700;line-height:1.3;">Bienvenue dans l'Observatoire</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.6;">Bonjour,</p>
            <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.6;">
              Votre inscription est confirmée. Vous recevrez désormais les publications de l'Observatoire du Stockage — analyses de marché, guides pratiques, points réglementaires et nouveaux outils.
            </p>
            <p style="margin:0 0 28px;color:#374151;font-size:15px;line-height:1.6;">
              Pour commencer, voici quelques ressources utiles :
            </p>

            <!-- Cards -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:12px;">
                  <a href="https://observatoire-du-stockage.fr/investir" style="display:block;text-decoration:none;background:#f8f9fa;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <p style="margin:0 0 4px;color:#1e3a5f;font-size:14px;font-weight:700;">→ Guide investisseur</p>
                    <p style="margin:0;color:#6b7280;font-size:13px;">Les fondamentaux pour évaluer et acquérir des espaces de stockage.</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:12px;">
                  <a href="https://observatoire-du-stockage.fr/outils" style="display:block;text-decoration:none;background:#f8f9fa;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <p style="margin:0 0 4px;color:#1e3a5f;font-size:14px;font-weight:700;">→ Outils pratiques</p>
                    <p style="margin:0;color:#6b7280;font-size:13px;">Calculateur de rentabilité, checklist d'acquisition, modèle de contrat.</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:12px;">
                  <a href="https://observatoire-du-stockage.fr/marche" style="display:block;text-decoration:none;background:#f8f9fa;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;">
                    <p style="margin:0 0 4px;color:#1e3a5f;font-size:14px;font-weight:700;">→ Marché & analyses locales</p>
                    <p style="margin:0;color:#6b7280;font-size:13px;">411 villes analysées, indicateurs de demande et données de prix observés.</p>
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fa;border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 8px;color:#9ca3af;font-size:12px;line-height:1.5;">
              Vous recevez cet email car l'adresse <strong>${email}</strong> a été inscrite à la newsletter de l'Observatoire du Stockage.
            </p>
            <p style="margin:0;color:#9ca3af;font-size:12px;">
              <a href="${BASE_URL}/desinscription?email=${encodeURIComponent(email)}" style="color:#6b7280;text-decoration:underline;">Se désabonner</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

async function sendWelcomeEmail(apiKey: string, toEmail: string) {
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "newsletter@observatoire-du-stockage.fr";
  const senderName = process.env.BREVO_SENDER_NAME ?? "Observatoire du Stockage";

  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: toEmail }],
      subject: "Bienvenue dans l'Observatoire du Stockage",
      htmlContent: WELCOME_HTML(toEmail),
    }),
  });
  // Welcome email failure is non-blocking — subscription still succeeds
}

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
    // New subscriber — send welcome email (non-blocking)
    sendWelcomeEmail(apiKey, email).catch(() => null);
    return NextResponse.json({ success: true });
  }

  if (res.status === 400) {
    const body = await res.json().catch(() => ({}));
    if (body?.code === "duplicate_parameter") {
      // Already subscribed — no welcome email
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Email invalide ou déjà inscrit." }, { status: 400 });
  }

  return NextResponse.json({ error: "Une erreur est survenue. Réessayez." }, { status: 502 });
}
