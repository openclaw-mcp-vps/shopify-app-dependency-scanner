import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify App Dependency Scanner — Find Breaking Conflicts Before Customers Do",
  description: "Scan your Shopify store for app compatibility issues, version conflicts, and performance impacts between installed apps. Real-time monitoring and actionable reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="51d0ae73-22ba-451d-988a-e37fa9a1ad6c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
