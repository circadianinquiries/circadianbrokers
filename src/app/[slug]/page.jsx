import { BlogData } from "./data/data";
import style from "@/styles/blog/singlepage.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import TableOfContents from "./tablecontent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return BlogData.map((post) => ({
        slug: post.slug,
    }));
}

function getDaysAgo(dateString) {
    const postDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - postDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

export async function generateMetadata({ params }) {
    // unwrap params
    const { slug } = await params;
    const blog = BlogData.find((post) => post.slug === slug);
    if (!blog) return {};

    return {
        title: blog.tit,
        description: blog.description,
        openGraph: {
            title: blog.tit,
            description: blog.description,
            url: `https://www.circadianbrokers.com/${blog.slug}`,
            siteName: "Book Writing",
            locale: "en_US",
            type: "article",
            images: ["https://www.circadianbrokers.com/logo.webp"],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.tit,
            description: blog.description,
            images: ["https://www.circadianbrokers.com/logo.webp"],
        },
        alternates: {
            canonical: `https://www.circadianbrokers.com/${blog.slug}`,
        },
    };
}

export default async function BlogPost({ params }) {
    // unwrap params
    const { slug } = await params;

    const blog = BlogData.find((post) => post.slug === slug);

    if (!blog) return notFound();

    return (
        <div className={style.singleBlogSec}>
            <Container>
                <Row>
                    <Col md={12} lg={12} className="m-auto">
                        <div className={style.singleBlogBox}>
                            <h1>{blog.title}</h1>
                            <div className={style.blogInfo}>
                                {blog.date} · <span>{getDaysAgo(blog.date)} days ago</span>
                            </div>
                        </div>
                    </Col>

                    <Col md={12} lg={8} className="order-2 order-lg-1">
                        <div className={style.singleBlogImg}>
                            <Image src={blog.img} alt="Banner Blog" fill />
                        </div>
                        <div className={style.singleBlogBox}>
                            <div className={style.singleBlogContent}>
                                {blog.maintxt}
                            </div>
                        </div>
                    </Col>

                    <Col md={12} lg={4} className="order-1 order-lg-2">
                        <div className={style.blogsideBar}>
                            <TableOfContents tableContent={blog.tableContent} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
