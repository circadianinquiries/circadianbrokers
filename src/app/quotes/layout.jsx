export const metadata = {
  title: "Personalized Insurance Quotes for You",
  description: "Ready for an insurance quote? Circadian Insurance Brokers offers personalized insurance quotes to ensure you get the best coverage at the best price.",
  //===== OG Tags =====
  openGraph: {
    title: " Personalized Insurance Quotes for You",
    description: "Ready for an insurance quote? Circadian Insurance Brokers offers personalized insurance quotes to ensure you get the best coverage at the best price.",
    url: "/quotes",
    siteName: " Circadian Insurance Brokers",
    locale: "en_US",
    type: "website",
    images: "https://www.circadianbrokers.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/quotes" },

};

export default function RootLayout({ children }) {
  return children;
}
