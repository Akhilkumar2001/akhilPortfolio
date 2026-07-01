import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";
import { sendFormEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      communication,
      requirements,
    } = parsed.data;

    const result = await sendFormEmail({
      subject: `New project request from ${name}`,
      replyTo: email,
      rows: [
        ["Name", name],
        ["Email", email],
        ["Company", company],
        ["Project Type", projectType],
        ["Budget", budget],
        ["Timeline", timeline],
        ["Preferred Contact", communication],
        ["Requirements", requirements],
      ],
    });

    if (!result.ok && !result.skipped) {
      return NextResponse.json(
        { ok: false, error: "Failed to send" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
