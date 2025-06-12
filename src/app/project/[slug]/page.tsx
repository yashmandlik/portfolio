import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import getProjectMetadata from "@/components/getProjectMetadata";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { ThemeToggle } from "@/app/themeToggle";
import nextConfig from "@config";
import { mdxComponents } from "@/components/mdxComponents";

// const getProjectContent = (slug: string) => {
//     const folder = "data/projects/";
//     const file = `${folder}${slug}.mdx`;
//     let content = fs.readFileSync(file, "utf-8");
//     content = content.replaceAll(/\$\{basePath\}/gi, nextConfig.basePath ?? "");
//     const contentMatter = matter(content);
//     return contentMatter;
// };

export const generateStaticParams = async () => {
    const projects = getProjectMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }))
};

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>
};

const projectPage = async (props: ProjectPageProps) => {
    const resolvedParams = await props.params;
    const slug = resolvedParams.slug;
    // const content = getProjectContent(slug)

    const folder = "data/projects/";
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
            <div className="max-w-2xl mx-auto">
                <article className="prose prose-neutral prose-sm dark:prose-invert
                                    prose-headings:font-normal
                                    prose-a:font-normal prose-a:no-underline prose-a:text-blue-500 prose-a:hover:underline
                                    prose-blockquote:not-italic prose-blockquote:font-normal
                                    prose-code:text-xs prose-code:font-geist-mono
                                    prose-pre:bg-neutral-800 prose-pre:rounded-md
                                    prose-img:rounded-2xl">
                    {content}
                </article>
            </div>
        </div>
    )
};

export default projectPage;