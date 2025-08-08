export const metadata = {
  title: "Affordable Insurance Products for Every Need",
  description: "Looking for the best insurance in California? Circadian Insurance Brokers offers a range of tailored plans, from auto to home and beyond.",
  //===== OG Tags =====
  openGraph: {
    title: "Affordable Insurance Products for Every Need",
    description: "Looking for the best insurance in California? Circadian Insurance Brokers offers a range of tailored plans, from auto to home and beyond.",
    url: "/products",
    siteName: " Circadian Insurance Brokers",
    locale: "en_US",
    type: "website",
    images: "https://www.circadianbrokers.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/products" },

};

export default function RootLayout({ children }) {
  return children;
}
