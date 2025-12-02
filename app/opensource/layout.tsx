import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Open Source Contributions - Rust, ZK Circuits, & Smart Contracts",
  description: "Explore my technical contributions to decentralized infrastructure. Building secure systems with Rust, implementing Zero-Knowledge proofs with Circom, and developing on ICP, Sui, and Ethereum ecosystems.",
  keywords: [
    // Core Engineering
    "Rust open source contributions",
    "cryptography engineering",
    "ZK circuit development",
    "Circom contributions",
    
    // Ecosystems you work with
    "ICP developer Africa",
    "Sui Move contributions",
    "Ethereum smart contracts",
    "Scroll Catalyst projects",
    "Lisk blockchain developer",
    
    // Professional Branding
    "cyber operations specialist",
    "blockchain infrastructure engineer",
    "African web3 builder",
    "hackathon winner", 
    "secure systems architect"
  ],
  openGraph: {
    title: "Open Source Engineering - Rust & Cryptography",
    description: "Contributions to secure decentralized infrastructure, ZK protocols, and high-performance blockchain systems.",
  },
}

export default function OpensourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}