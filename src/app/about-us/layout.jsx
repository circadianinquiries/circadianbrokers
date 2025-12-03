export const metadata = {
  title: "About Circadian Insurance Experts",
  description: "Learn about Circadian Insurance Brokers and our commitment to providing exceptional customer service and personalized insurance solutions for your your needs.",
  //===== OG Tags =====
  openGraph: {
    title: "About Circadian Insurance Experts",
    description: "Learn about Circadian Insurance Brokers and our commitment to providing exceptional customer service and personalized insurance solutions for your your needs.",
    url: "/about-us",
    siteName: " Circadian Insurance Brokers",
    locale: "en_US",
    type: "website",
    images: "https://www.circadianbrokers.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/about-us" },

};

export default function RootLayout({ children }) {
  return children;
}
