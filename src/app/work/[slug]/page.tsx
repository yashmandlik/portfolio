import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getWorkMetadata from "@/components/getWorkMetadata";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { ThemeToggle } from "@/app/themeToggle";
import Link from "next/link";
import nextConfig from "@config";

const getWorkContent = (slug: string) => {
    const folder = "data/work/";
    const file = `${folder}${slug}.md`;
    let content = fs.readFileSync(file, "utf-8");
    content = content.replaceAll(/\$\{basePath\}/gi, nextConfig.basePath ?? "");
    const contentMatter = matter(content);
    return contentMatter;
};

export const generateStaticParams = async () => {
    const work = getWorkMetadata();
    return work.map((work) => ({
        slug: work.slug,
    }))
};

interface WorkPageProps {
    params: Promise<{
        slug: string;
    }>
};

const workPage = async (props: WorkPageProps) => {
    const resolvedParams = await props.params;
    const slug = resolvedParams.slug;
    const content = getWorkContent(slug)
    return (
        <div className="max-w-4xl mx-auto px-10 lg:px-0
                        mb-20
                        transition-[padding] duration-1000 ease-in-out
                        animate-fade-in">
            <div className="flex items-center justify-between py-20">
                <Link href={"/"} className="flex items-center hover:bg-stone-500/30 rounded transition duration-700 ease-in-out">
                    <IoArrowBackCircleSharp className="mr-2 text-orange-400"/>
                    home
                </Link>
                <div className="text-xl text-orange-400 hover:animate-pulse">
                    <ThemeToggle />
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                <article className="prose prose-neutral prose-sm dark:prose-invert
                                    prose-headings:font-normal
                                    prose-a:font-normal prose-a:no-underline prose-a:text-blue-500 prose-a:hover:underline
                                    prose-blockquote:not-italic prose-blockquote:font-normal
                                    prose-code:text-xs prose-code:font-geist-mono
                                    prose-pre:bg-neutral-800 prose-pre:rounded-md
                                    prose-img:rounded-2xl">
                    <Markdown>{content.content}</Markdown>
                </article>
            </div>
        </div>
    )
};

export default workPage;