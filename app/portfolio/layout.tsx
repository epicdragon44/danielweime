import fs from "fs";
import matter from "gray-matter";

export default function PortfolioLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            Lol
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    );
}
