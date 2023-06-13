import "./globals.css";
import { Inter } from "next/font/google";
import NavLinks from "./components/navLinks";
import Logo from "./components/logo";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  //title is important for your SEO goals.
  title: "Kansas and Missouri Injury Attorney",
  //research best SEO keywords
  keywords: "attorney Kansas-City Lawrence",
  description:
    "Personal Injury Attorney servicing Lawrence, KS and Kansas City, MO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Logo />
          <NavLinks />
        </header>

        {children}
      </body>
    </html>
  );
}
