import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/src/app/globals.scss";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";
import TopBar from "@/src/app/layout/topbar";
import { Toaster } from "react-hot-toast";
import GTM from "@/src/app/GTM";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.circadianbrokers.com/"),
  title: "Circadian Brokers, Insurance Broker in California.",
  description:
    "Expert Insurance Brokers in California serving Brentwood & Bay Area. We shop multiple carriers to find you the best rates on auto, home & business insurance.",
  //===== OG Tags =====
  openGraph: {
    title: "Circadian Brokers, Insurance Broker in California.",
    description:
      "Expert Insurance Brokers in California serving Brentwood & Bay Area. We shop multiple carriers to find you the best rates on auto, home & business insurance.",
    url: "/",
    siteName: " Circadian Insurance Brokers",
    locale: "en_US",
    type: "website",
    images: "https://www.circadianbrokers.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  other: {
    "google-site-verification": "P6qQozJzN0Mp-C5fGqj_koLTIb6sv43Shuc1upxK-wE",
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <TopBar />
        <Header />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2PDTJCJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* GTM/GA Scripts */}
        <GTM />
        {children}
        <Footer />
      </body>
    </html>
  );
}
