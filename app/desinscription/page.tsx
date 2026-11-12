"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function DesinscriptionForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const e = searchParams.get("email");
    if (e) setEmail(decodeURIComponent(e));
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Réessayez.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Désabonnement confirmé</h2>
        <p className="text-sm text-slate-500 mb-6">
          L'adresse <strong>{email}</strong> ne recevra plus les publications de l'Observatoire du Stockage.
        </p>
        <Link
          href="/"
          className="inline-block text-sm text-blue-700 font-semibold hover:underline"
        >
          Retour à l'accueil →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
          Votre adresse email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.fr"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#1a1a2e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-slate-800 text-white font-semibold py-2.5 rounded-lg hover:bg-slate-700 transition-colors text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Traitement…" : "Confirmer le désabonnement"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Vous pouvez vous réinscrire à tout moment sur{" "}
        <Link href="/newsletter" className="underline hover:text-slate-600">
          la page newsletter
        </Link>
        .
      </p>
    </form>
  );
}

export default function DesinscriptionPage() {
  return (
    <section className="bg-[#f8f9fa] min-h-[70vh] py-16 md:py-24">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
              Observatoire du Stockage
            </span>
            <h1 className="mt-5 text-2xl font-bold text-[#1a1a2e]">Se désabonner</h1>
            <p className="mt-2 text-sm text-slate-500">
              Renseignez votre adresse email pour ne plus recevoir nos publications.
            </p>
          </div>

          <Suspense fallback={<div className="text-sm text-slate-400 text-center py-4">Chargement…</div>}>
            <DesinscriptionForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
