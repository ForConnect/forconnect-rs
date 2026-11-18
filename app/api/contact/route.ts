import { NextResponse } from "next/server";
import { Resend } from "resend";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY nije podešen");
      return NextResponse.json({ error: "Mail nije podešen" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await req.formData();
    const name = esc(String(formData.get("name") ?? ""));
    const company = esc(String(formData.get("company") ?? ""));
    const email = String(formData.get("email") ?? "");
    const phone = esc(String(formData.get("phone") ?? ""));
    const message = esc(String(formData.get("message") ?? ""));

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Neispravan mejl" }, { status: 400 });
    }

    // 1) Obaveštenje vama
    await resend.emails.send({
      from: "ForConnect <info@forconnect.nl>",
      to: "info@forconnect.nl",
      replyTo: email,
      subject: `Nova poruka sa forconnect.rs: ${name}`,
      html: `
        <h2>Nova poruka sa sajta forconnect.rs</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company}</p>
        <p><strong>Mejl:</strong> ${esc(email)}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Poruka:</strong><br>${message}</p>
      `,
    });

    // 2) Automatski odgovor posetiocu
    await resend.emails.send({
      from: "ForConnect <info@forconnect.nl>",
      to: email,
      subject: "Vaš zahtev za demo je primljen ✔",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px;">
          <p>Poštovani ${name || ""},</p>
          <p>Hvala na poruci! Vaš zahtev za demo je uspešno primljen.</p>
          <p>Javićemo vam se u najkraćem roku da dogovorimo demo.</p>
          <p>Srdačan pozdrav,<br/>ForConnect tim</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ error: "Slanje nije uspelo" }, { status: 500 });
  }
}
