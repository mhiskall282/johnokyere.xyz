import { Metadata } from 'next'

export const metadata: Metadata = {
  // Focuses on your hard engineering skills
  title: "Projects - Rust, Zero-Knowledge & Decentralized Systems",
  
  // Highlights specific tech (Circom, Rust) and ecosystems (ICP, Sui, Eth)
  description: "Explore a portfolio of high-security decentralized infrastructure. Featuring Zero-Knowledge (ZK) circuits, Rust-based automation, and secure smart contracts on Ethereum, ICP, and Sui.",
  
  keywords: [
    // Core Tech
    "Rust engineering projects",
    "Zero-Knowledge Proofs portfolio",
    "Circom circuits",
    "cryptography projects",
    "decentralized infrastructure",
    "secure smart contracts",
    "ZK rollups",
    "Rust automation",
    
    // Professional Branding
    "blockchain engineer portfolio",
    "cyber operations engineer",
    "web3 developer Africa",
    "decentralized systems architect",
    "crypto protocol developer",
    "hackathon winner",
    "blockchain infrastructure engineer",
    "blockchain security specialist",
    "cybersecurity projects",
    "AI & blockchain integration",
    "high-performance blockchain systems",
    "decentralized application developer",
    "secure systems architect",
    "open source blockchain contributions",
    "blockchain scalability solutions",
    "cloud & blockchain projects",
    
    // Ecosystems & Specifics
    "Sui Move smart contracts",
    "ICP blockchain development",
    "Ethereum infrastructure",
    "GhostBounties", // Your ETHGlobal project
    
    // Role Definitions
    "cyber operations projects",
    "backend web3 engineer",
    "smart contract auditing",
    "blockchain builder Africa"
  ],
  
  openGraph: {
    title: "Projects - Rust & Cryptography Portfolio",
    description: "Building the math and science with the server behind the chain. Explore ZK circuits, secure smart contracts, and decentralized infrastructure projects.",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}