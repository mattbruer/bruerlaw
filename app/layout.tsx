import "./globals.css";
import { Inter } from "next/font/google";
import NavLinks from "./components/navLinks";
import Logo from "./components/logo";
import MobileNav from "./components/mobileNav";

//this is how you use Google Fonts
import { Playfair_Display, Quicksand, Source_Sans_Pro } from "next/font/google";

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: "300",
  subsets: ["latin"],
});

const source_Sans_Pro = Source_Sans_Pro({
  weight: "400",
  subsets: ["latin"],
});

// this was default font
// const inter = Inter({ subsets: ["latin"] });
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
      <body className={playfair.className}>
        <header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "fixed", left: 0 }}>
              <MobileNav />
            </div>

            <Logo />
          </div>

          <NavLinks />
        </header>

        {children}
      </body>
    </html>
  );
}
