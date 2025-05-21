
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email({ message: "無効なメールアドレスです。" }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = emailSchema.safeParse(body);

    if (!parsed.success) {
      // Log conversion attempt failed - invalid data
      console.log('Tracking API: Subscription attempt failed - Invalid data', parsed.error.flatten().fieldErrors);
      return NextResponse.json({ error: parsed.error.flatten().fieldErrors.email?.[0] || "入力内容に誤りがあります。" }, { status: 400 });
    }

    const { email } = parsed.data;

    // Placeholder for SendGrid API call or other email service integration
    // Example: await sendgrid.addToContacts(email);
    console.log(`Email received for subscription: ${email}`);
    
    // Placeholder for actual duplicate check. 
    // This would typically be handled by the email marketing service (e.g., SendGrid, Mailchimp)
    // or by checking against a database.
    // For now, we assume it's a new subscription.

    // Log conversion successful
    console.log('Tracking API: Subscription successful', { email });
    
    return NextResponse.json({ message: "ご登録ありがとうございます！確認メールを送信しました。" }, { status: 200 });

  } catch (error) {
    console.error("Subscription error:", error);
    // Log conversion attempt failed - server error
    console.log('Tracking API: Subscription attempt failed - Server error');
    return NextResponse.json({ error: "登録中にエラーが発生しました。しばらくしてから再度お試しください。" }, { status: 500 });
  }
}
