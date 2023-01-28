import fs from "fs";
import matter from "gray-matter";

export type MatterType = {
    [key: string]: any;
};

export type Post = {
    frontmatter: MatterType;
    slug: string;
};

export type PostWithContent = Post & {
    content: string;
};

function readFiles(str: string) {
    const files = fs.readdirSync(str);
    const projects: Post[] = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`${str}/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });
    return projects;
}

export function getProjects(): Post[] {
    return readFiles("content/projects");
}

export function getWorks(): Post[] {
    return readFiles("content/work");
}

export function getAllTags(projects?: Post[], work?: Post[]) {
    const tags = new Set();
    if (projects) {
        projects.forEach((project: Post) => {
            project.frontmatter.tags.forEach((tag: string) => tags.add(tag));
        });
    }
    if (work) {
        work.forEach((work: Post) => {
            work.frontmatter.tags.forEach((tag: string) => tags.add(tag));
        });
    }
    return tags;
}
