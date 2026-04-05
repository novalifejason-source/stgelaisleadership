import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason St. Gelais | Leadership Coach, Trainer & Speaker",
  description: "Maxwell Leadership Certified Coach, Trainer, and Speaker. Helping leaders level up, communicate powerfully, and grow with purpose.",
  keywords: "leadership coach, leadership trainer, keynote speaker, Maxwell Leadership, Jason St Gelais, Phoenix Arizona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
