import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "Macnis",
  description: "builder",
  openGraph: {
    title: "Macnis",
    description: "builder",
    url: "https://builder.in/",
    images: [
      {
        url: "/website-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "KSA",
      },
    ],
    siteName: "macnis",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session} refetchInterval={5 * 60}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
