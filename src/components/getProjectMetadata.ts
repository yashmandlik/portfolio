import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "@/components/ProjectMetadata";

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "data/projects/"
  const files = fs.readdirSync(folder)
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const projects = mdxFiles.map((fileName) => {
    const contents = fs.readFileSync(`data/projects/${fileName}`, "utf-8");
    const contentMatter = matter(contents);
    return {
      project: contentMatter.data.project,
      date: contentMatter.data.date,
      desc: contentMatter.data.desc,
      tags: contentMatter.data.tags,
      slug: fileName.replace(".mdx", ""),
    }
  });

  return projects;
};

export default getProjectMetadata;