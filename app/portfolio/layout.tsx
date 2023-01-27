export default function PortfolioLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className='min-h-screen p-4 px-8'>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    );
}
