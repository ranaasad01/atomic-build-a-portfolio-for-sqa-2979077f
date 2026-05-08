import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Rao Muhammad Ali | Senior SQA Engineer",
  description:
    "Professional portfolio of Rao Muhammad Ali — Senior Software Quality Assurance Engineer specializing in test automation, API testing, performance engineering, and CI/CD quality gates. ISTQB Certified.",
  keywords: [
    "SQA Engineer",
    "Software Quality Assurance",
    "Test Automation",
    "Selenium",
    "Cypress",
    "ISTQB",
    "QA Portfolio",
    "Software Testing",
    "Postman",
    "Performance Testing",
  ],
  authors: [{ name: "Rao Muhammad Ali" }],
  creator: "Rao Muhammad Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson-sqa.dev",
    title: "Rao Muhammad Ali | Senior SQA Engineer",
    description:
      "Professional portfolio showcasing 6+ years of QA engineering expertise in test automation, API testing, and quality strategy.",
    siteName: "Rao Muhammad Ali SQA Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rao Muhammad Ali | Senior SQA Engineer",
    description: "Professional SQA Engineer portfolio — test automation, API testing, performance engineering.",
    creator: "@alexjohnson_qa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}