export default function PortfolioLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className='min-h-screen'>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    );
}
