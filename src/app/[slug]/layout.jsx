export const metadata = {
    title: "Blog - Book Writing",
    description: "Explore expert blogs from Book Writing team.",
    openGraph: {
        title: "Blog - Book Writing",
        description: "Explore expert blogs from Book Writing team.",
        url: "https://www.circadianbrokers.com/blog",
        siteName: "Book Writing",
        locale: "en_US",
        type: "website",
        images: ["https://www.circadianbrokers.com/logo.webp"],
    },
    alternates: {
        canonical: "https://www.circadianbrokers.com/blog",
    },

};

export default function BlogLayout({ children }) {
    return <>{children}</>;
}
