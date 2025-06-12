import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import getWorkMetadata from "@/components/getWorkMetadata";
import { IoIosArrowBack } from "react-icons/io";
import { ThemeToggle } from "@/app/themeToggle";
import Link from "next/link";
import nextConfig from "@config";
import { mdxComponents } from "@/components/mdxComponents";

// const getWorkContent = (slug: string) => {
//     const folder = "data/work/";
//     const file = `${folder}${slug}.mdx`;
//     let content = fs.readFileSync(file, "utf-8");
//     content = content.replaceAll(/\$\{basePath\}/gi, nextConfig.basePath ?? "");
//     const contentMatter = matter(content);
//     return contentMatter;
// };

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
    // const content = getWorkContent(slug)

    const folder = "data/work/";
    const file = `${folder}${slug}.mdx`;
    let raw = fs.readFileSync(file, "utf-8");
    raw = raw.replaceAll(/\$\{basePath\}/gi, nextConfig.basePath ?? "");
    const { content } = await compileMDX({
        source: raw,
        options: { 
            parseFrontmatter: true,
            mdxOptions: {}, 
        },
        components: mdxComponents,
    });

    return (
        <div className="max-w-4xl mx-auto px-10 lg:px-0
                        mb-20
                        transition-[padding] duration-1000 ease-in-out
                        animate-fade-in">
            <div className="flex items-center justify-between py-20">
                <Link href={"/"} className="flex items-center hover:bg-stone-500/30 rounded transition duration-700 ease-in-out">
                    <IoIosArrowBack className="mr-1"/>
                    home
                </Link>
                <div className="text-xl cursor-pointer">
                    <ThemeToggle />
                </div>
            </div>
            <div className="max-w-3xl mx-auto">
                <article className="max-w-3xl 
                                    prose prose-neutral prose-sm dark:prose-invert
                                    prose-a:font-normal prose-a:no-underline
                                    prose-blockquote:not-italic prose-blockquote:font-normal
                                    prose-code:text-xs prose-code:font-geist-mono
                                    prose-pre:bg-neutral-800 prose-pre:rounded-md
                                    prose-img:rounded-xl">
                    {content}
                </article>
            </div>
        </div>
    )
};

export default workPage;