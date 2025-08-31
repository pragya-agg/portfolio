import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pragya Aggarwal - Software Developer",
  description: "Software Developer specializing in full-stack web development, React, Node.js, and modern web technologies.",
  keywords: ["React", "Node.js", "JavaScript", "TypeScript", "Full-stack Developer", "Web Development", "MongoDB", "Express"],
  authors: [{ name: "Pragya Aggarwal" }],
  creator: "Pragya Aggarwal",
  openGraph: {
    title: "Pragya Aggarwal - Software Developer",
    description: "Software Developer specializing in full-stack web development and modern technologies",
    url: "https://pragya-portfolio.dev",
    siteName: "Pragya Aggarwal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragya Aggarwal - Software Developer",
    description: "Software Developer specializing in full-stack web development and modern technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
