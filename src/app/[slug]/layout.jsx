export const metadata = {
    title: "Blog - Book Writing",
    description: "Explore expert blogs from Book Writing team.",
    openGraph: {
        title: "Blog - Book Writing",
        description: "Explore expert blogs from Book Writing team.",
        url: "https://www.bookwriting.us/blog",
        siteName: "Book Writing",
        locale: "en_US",
        type: "website",
        images: ["https://www.bookwriting.us/logo.png"],
    },
    alternates: {
        canonical: "https://www.bookwriting.us/blog",
    },

};

export default function BlogLayout({ children }) {
    return <>{children}</>;
}
