import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Unbox | Learn Digital Marketing, Tech & Career-Focused Courses Online",
  description: "Course Unbox offers industry-focused courses in digital marketing, technology, and career skills. Learn from experts, gain practical knowledge, and grow your career faster.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">

      <body
        className={`${roboto.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
