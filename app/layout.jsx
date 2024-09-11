import { Nunito } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Pizzayo - The best pizza shop in town",
  description: "Very tasty pizzas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <NextTopLoader />
          {children}
        <Toaster />
      </body>
    </html>
  );
}
