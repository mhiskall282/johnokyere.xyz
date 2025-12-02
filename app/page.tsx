"use client";
import LightRays from "@/components/LightRays";
import Hero from "@/components/Native/Hero";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "John Okyere",
      jobTitle: "Software Engineer, Blockchain Engineer, Cryptographer, Rust Developer",
      description:
        "Blockchain engineer in Ghana and Africa specializing in Web3, AI development, and smart contracts. Best portfolio showcasing innovative projects.",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://johnokyere.com",
      sameAs: [
        "https://www.linkedin.com/in/johnokyere/",
        "https://x.com/0xmhiskall",
        "https://t.me/mhiskall",
        "https://github.com/mhiskall282",
        "https://twitter.com/0xmhiskall",
        "mailto:0xmhiskall@gmail.com",
      ],
      knowsAbout: [
        "Frontend Development",
        "Web3 Development",
        "AI Development",
        "React",
        "Next.js",
        "TypeScript",
        "Starknet",
        "Ethereum",
        "Smart Contracts",
        "Cairo",
        "Solidity",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "Ghana",
        addressRegion: "Ghana",
      },
      alumniOf: {
        "@type": "Organization",
        name: "Dev3Pack",
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "Kayaba Labs",
        },
        {
          "@type": "Organization",
          name: "Develop for Good",
        },
        {
          "@type": "Organization",
          name: "ICP Hubs Ghana",
        },
      ],
      award: [
        "Africa Onchain Collective Devconnect Scholarship Recipient",
        "Dev3Pack- ZK Fellow",
        "Ethereum World Fair(Devconnect) Volunteer - Devconnect Argentina",
        "Hackathon Winner - ICP Hubs Ghana",
      ],
      offers: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          serviceType: "Solutions Architecture, Web3 Development, AI Development",
          description:
            "Professional blockchain and software engineering services specializing in Web3 and AI applications",
        },
        availability: "https://schema.org/InStock",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative bg-background h-screen ">
      <div className="fixed top-6 left-6 z-50 hidden md:block">
        <FloatingNav />
      </div>
      <MobileNav />

      <div className="relative bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat h-full ">
        <div className="absolute inset-0 bg-background/30"></div>

        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        <div className="absolute inset-0 z-10 w-full overflow-y-auto pt-0 md:pt-0">
          <Hero />
        </div>
      </div>
    </div>
  );
}
