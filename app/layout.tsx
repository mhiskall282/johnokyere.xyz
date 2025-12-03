import type { Metadata } from "next";
import { Source_Code_Pro, Inter, Gloria_Hallelujah } from "next/font/google";
import { AI } from "./action";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const gloriaFont = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://johnokyere.vercel.app'),
  title: {
    // Broad high-level title + Specific Cloud Certifications + SEO Location
    default: "John Okyere - Software & Blockchain Engineer & Cloud Architect in Ghana & Africa | AWS Certified",
    
    // Short version for inner pages
    template: "%s | John Okyere - Software & Blockchain Engineer & Cloud Expert"
  },
  description: "Hire the best blockchain and software engineer in Ghana and Africa. John Okyere is a software and blockchain engineer specializing in Web3, AI development, and smart contracts. Expert in React, Next.js, TypeScript, Starknet, and Ethereum. Best engineers in blockchain and web3. Best portfolio showcasing innovative projects. Available for hire.",
  keywords: [
    // --- Core Professional Titles ---
    "Software Engineer Ghana",
    "Software Engineer Africa",
    "Cloud Architect Ghana",
    "Cloud Architect Africa",
    "Best Software Engineer Ghana",
    "Top Cloud Architect Africa",
    "Cyber Operations Specialist",
    "Cryptography Expert",
    "Systems Engineer Ghana",
    "Systems Engineer Africa",
    "Blockchain Engineer Ghana",
    "Blockchain Engineer Africa",
    "Web3 Developer Ghana",
    "Web3 Developer Africa",
    "AI Developer Ghana",
    "AI Developer Africa",
    "Smart Contract Auditor Ghana",
    "Smart Contract Auditor Africa",
    "Full-Stack Developer Ghana",
    "Full-Stack Developer Africa",

    // --- Cloud & DevOps (Your Certifications) ---
    "AWS Certified Solutions Architect",
    "GCP Certified Engineer",
    "Azure Certified Developer",
    "Multi-Cloud Expert",
    "DevOps Engineer Africa",
    "Cloud Infrastructure Engineer",
    "Serverless Architecture Expert",

    // --- Web3, Rust & Security (Your Stack) ---
    "Rust Engineer Ghana",
    "Rust Engineer Africa",
    "Smart Contract Auditor",
    "Zero Knowledge Proof Developer",
    "ZK Circuit Engineer",
    "Sui Move Developer",
    "ICP Blockchain Developer",
    "Web3 Security Expert",
    "Backend Blockchain Engineer",

    // --- Hiring Keywords ---
    "hire software engineer",
    "hire cloud architect",
    "hire rust developer",
    "hire cryptography expert",
    "remote backend developer",
    "hire devops engineer",
    "freelance blockchain developer",
    "contract software engineer",
    "blockchain developer for hire",
    "web3 developer for hire",
    "AI developer for hire",
    "smart contract auditor for hire",

    // --- Identity & Achievements (Masculine/Neutral) ---
    "African tech builder",
    "African blockchain leader",
    "top engineer portfolio",
    "expert systems architect",
    "accomplished software engineer",
    "accomplished cloud architect",
    "accomplished blockchain developer",
    "accomplished rust engineer",
    "accomplished systems engineer",
    "technical leader Africa",
    
    // --- Personal Branding (Replace these with your actual details) ---
    "John Okyere",
    "0xMhiskall",
    "0xmhiskall@gmail.com",
    "johnokyere.vercel.app",
    "https://johnokyere.vercel.app",
    "best developer portfolio",
    "award winning portfolio"
  ],
  authors: [{ name: "John Okyere" }],
  creator: "John Okyere",
  publisher: "John Okyere",
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://johnokyere.vercel.app',
    siteName: "John Okyere Portfolio",
    title: "John Okyere - Best Smart Contract and Software Engineer in Ghana & Africa | Web3 & AI Developer",
    description: "Hire the best blockchain engineer in Ghana and Africa. Smart contract software engineer specializing in Web3, AI development, and smart contracts. Expert in React, Next.js, TypeScript, Starknet, and Ethereum. Women in blockchain and web3.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Okyere - Best Smart Contract and Software Engineer in Ghana & Africa | Web3 & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Okyere - Best Smart Contract and Software Engineer in Ghana & Africa | Web3 & AI Developer",
    description: "Smart contract software engineer specializing in Web3, AI development, and smart contracts. Available for hire.",
    creator: "@mhiskall",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://johnokyere.vercel.app',
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${sourceCodePro.variable} ${gloriaFont.variable} antialiased`}
      >
        <AI>{children}</AI>
      </body>
    </html>
  );
}
