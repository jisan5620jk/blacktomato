import "./globals.css";

export const metadata = {
  title:
    "Luxury Travel, High End Tours &amp; Tailor Made Holidays | Black Tomato",
  description:
    "Luxury Travel, High End Tours &amp; Tailor Made Holidays | Black TomatoBlack Tomato: bespoke luxury travel and high-end, tailor-made holidays for adventurous, discerning travelers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
