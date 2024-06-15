import { Inter } from "next/font/google";
import "./globals.css";
import { RootLayoutProps } from "@/Type/RootLayoutProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js mysql example",
  description: "This project is a CRUD (Create, Read, Update, Delete) example using Next.js with MySQL database, integrated with Knex.js for SQL query building and Objection.js as the ORM (Object-Relational Mapping) on top of Knex.js.",
  author: "Murtaja", 
  keywords: ["Next.js", "MySQL", "CRUD example", "Knex.js", "Objection.js", "ORM", "SQL query builder"],
  image: "/next.svg",  // URL of an image relevant to the page content
  siteName: "Next.js mysql example",
  type: "website",
  url: "https://github.com/Muurtaja/nextjs-mysql-example",  // URL of the page
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
