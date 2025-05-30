import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || !TELEGRAM_GROUP_ID) {
      return NextResponse.json(
        { error: 'Telegram configuration is missing' },
        { status: 500 }
      );
    }

    const telegramMessage = `
🔔 *New Enquiry Form Submission*

👤 *Client Details:*
• Name: \`${name}\`
• Email: \`${email}\`
• Phone: \`${phone}\`
• Subject: \`${subject}\`

💬 *Message:*
\`\`\`
${message}
\`\`\`

⏰ Time: ${new Date().toLocaleString()}
    `.trim();

    // Send to individual chat
    const individualResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'MarkdownV2',
          disable_web_page_preview: true,
        }),
      }
    );

    // Send to group
    const groupResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_GROUP_ID}&text=${encodeURIComponent(
        telegramMessage
      )}&parse_mode=MarkdownV2&disable_web_page_preview=true`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!individualResponse.ok || !groupResponse.ok) {
      const individualError = await individualResponse.json();
      const groupError = await groupResponse.json();
      throw new Error(
        `Telegram API errors: Individual: ${
          individualError.description || 'Unknown error'
        }, Group: ${groupError.description || 'Unknown error'}`
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram notification error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Failed to send notification',
      },
      { status: 500 }
    );
  }
}
