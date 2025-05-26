import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
// Font import for Inter is removed. Using system Japanese fonts.
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: '事前登録 | Yamet AI - 世界初の退職代行 AIエージェント', // Updated title
  description: '「辞めたい」けど言い出せないあなたへ。AIが退職の意思伝達を代行する「Yamet AI」で、スムーズな退職を。事前登録受付中。',
  keywords: ['退職代行', 'AI', 'チャット', 'LLM', 'Yamet AI', 'やめたい', '事前登録', 'AIエージェント', '退職'],
  alternates: { // ← ここに追加
    canonical: 'https://lp.yametai.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Start cookieyes banner */}
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/22c9d981a2c976cbef7f48d5/script.js"></script>
        {/* End cookieyes banner */}

        {/* Google Analytics 4 Scripts */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SD6TFVBXS5"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SD6TFVBXS5');
          `}
        </Script>
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
        {/* Tally.so Embed Script for popups */}
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}
        `}} />
        <SpeedInsights />
      </body>
    </html>
  );
}