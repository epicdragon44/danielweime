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

export function getProjects(): Post[] {
    const files = fs.readdirSync("content/projects");
    const projects: Post[] = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(
            `content/projects/${fileName}`,
            "utf-8"
        );
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });
    return projects;
}
