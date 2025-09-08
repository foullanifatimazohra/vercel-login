import { type NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true if port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Weone Services Contact" <${process.env.SMTP_USER}>`, // l'expéditeur officiel
      replyTo: `"${name}" <${email}>`, // pour que le client puisse répondre directement
      to: process.env.SMTP_TO, // destinataire
      subject: `📩 Nouveau message: ${name}`,
      text: `
    Vous avez reçu un nouveau message via le formulaire de contact.

    Nom: ${name}
    Email: ${email}
    Sujet: ${subject}
    Message:
    ${message}
  `,
      html: `
    <h2>📩 Nouveau message reçu via le formulaire de contact</h2>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Sujet :</strong> ${subject}</p>
    <p><strong>Message :</strong></p>
    <blockquote style="border-left: 3px solid #ccc; margin: 10px 0; padding-left: 10px;">
      ${message}
    </blockquote>
    <hr/>
    <p style="font-size: 12px; color: #666;">Cet email a été envoyé automatiquement depuis le site Weone Services.</p>
  `,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
