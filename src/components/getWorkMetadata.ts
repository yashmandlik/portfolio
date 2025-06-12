import fs from "fs";
import matter from "gray-matter";
import { WorkMetadata } from "@/components/WorkMetadata";

const getWorkMetadata = (): WorkMetadata[] => {
  const folder = "data/work/"
  const files = fs.readdirSync(folder)
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const work = mdxFiles.map((fileName) => {
    const contents = fs.readFileSync(`data/work/${fileName}`, "utf-8");
    const contentMatter = matter(contents);
    return {
      company: contentMatter.data.company,
      role: contentMatter.data.role,
      desc: contentMatter.data.desc,
      date: contentMatter.data.date,
      website: contentMatter.data.website,
      slug: fileName.replace(".mdx", ""),
    }
  });

  return work;
};

export default getWorkMetadata;