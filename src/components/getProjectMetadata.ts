import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "@/components/ProjectMetadata";

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "data/projects/"
  const files = fs.readdirSync(folder)
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  const projects = mdFiles.map((fileName) => {
    const contents = fs.readFileSync(`data/projects/${fileName}`, "utf-8");
    const contentMatter = matter(contents);
    return {
      project: contentMatter.data.project,
      date: contentMatter.data.date,
      desc: contentMatter.data.desc,
      tags: contentMatter.data.tags,
      slug: fileName.replace(".md", ""),
    }
  });

  return projects;
};

export default getProjectMetadata;