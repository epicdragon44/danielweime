import "./globals.css";

import { Hanken_Grotesk } from "@next/font/google";
import Navbar from "@/components/navigation/nav";

const font = Hanken_Grotesk({
    subsets: ["latin"],
    variable: "--font-hanken_grotesk",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head />
            <body>
                <div
                    className={`h-screen w-screen text-black ${font.variable} font-sans`}
                >
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
