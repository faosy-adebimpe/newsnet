import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navs/Navbar';
import QueryProvider from './providers/query-provider';
import Footer from '@/components/footers/Footer';

export const metadata: Metadata = {
    title: 'NEWSNET',
    description: 'A simplified news platform',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <QueryProvider>
                    <>
                        <Navbar />
                        {children}
                        <Footer />
                    </>
                </QueryProvider>
            </body>
        </html>
    );
}
