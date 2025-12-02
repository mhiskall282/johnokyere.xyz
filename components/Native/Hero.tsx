"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Code2,
  Cpu,
  Network,
  GitBranch,
  ArrowRight,
  Rocket,
  Award,
  Building2,
  FolderKanban,
  ExternalLink,
  Image as ImageIcon,} from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState({
    projects: 0,
    pullRequests: 0,
    ecosystems: 0,
  });

  const stats = {
    projects: 38,
    pullRequests: 116,
    ecosystems: 4,
  };

  useEffect(() => {
    setIsVisible(true);
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targetProjects = stats.projects;
    const targetPullRequests = stats.pullRequests;
    const targetEcosystems = stats.ecosystems;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCountedStats({
        projects: Math.floor(targetProjects * progress),
        pullRequests: Math.floor(targetPullRequests * progress),
        ecosystems: Math.floor(targetEcosystems * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountedStats({
          projects: targetProjects,
          pullRequests: targetPullRequests,
          ecosystems: targetEcosystems,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // const expertiseAreas = [
  //   {
  //     icon: Code2,
  //     title: "DevOps & Backend Engineering",
  //     description: "Building and architecturing scalable, reliable, backend experiences",
  //     tech: ["React", "Next.js", "Node.js", "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
  //     color: "text-primary",
  //     gradient: "from-blue-500/10 to-cyan-500/10",
  //   },
  //   {
  //     icon: Network,
  //     title: "Blockchain Engineering & ZKP",
  //     description: "Decentralized solutions on Sui & Ethereum",
  //     tech: ["Move", "Motoko", "Solidity", "Rust", "Circom", "Hailo", "ZKP", "Hardhat", "Foundry"],
  //     color: "text-foreground",
  //     gradient: "from-purple-500/10 to-pink-500/10",
  //   },
  //   {
  //     icon: Cpu,
  //     title: "AI Development",
  //     description: "End-to-end AI applications that feel natural",
  //     tech: ["Vercel AI SDK", "OpenAI", "LangChain", "Google PaLM", "TensorFlow"],
  //     color: "text-foreground",
  //     gradient: "from-orange-500/10 to-yellow-500/10",
  //   },
  // ];

  const expertiseAreas = [
  {
    icon: Network, // Represents Cloud/Infrastructure
    title: "Cloud Architecture & DevOps",
    description: "Architecting high-availability, multi-cloud infrastructure (AWS, GCP, Azure) with secure Rust-based systems.",
    // Added your Cloud Certs + Hard Engineering tools. Removed "React".
    tech: ["Rust", "AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD", "Linux"],
    color: "text-blue-500", // Changed to blue to match Cloud/Azure/AWS vibes
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Cpu, // Represents Processing/Math/ZK
    title: "Zero-Knowledge & Cryptography",
    description: "Engineering privacy-preserving circuits and verifiable computation systems using advanced mathematical proofs.",
    // Fixed "Hailo" to "Halo2", added SnarkJS. Focus on the Math stack.
    tech: ["Circom", "Halo2", "Rust", "ZK-SNARKs", "SnarkJS", "Noir", "StarkNet", "Algebra"],
    color: "text-purple-500", // Purple often represents ZK/Magic/Math
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code2, // Represents Code/Security
    title: "Web3 Security & Protocol Engineering",
    description: "Developing and auditing secure smart contracts on Sui, ICP, and Ethereum with a focus on gas optimization and safety.",
    // Focus on "Move" and Security tools (Foundry/Hardhat)
    tech: ["Sui Move", "Rust", "Solidity", "Motoko", "Foundry", "Hardhat", "Smart Contract Auditing", "Cyber Ops"],
    color: "text-orange-500", // Orange/Red warning colors fit Security/Rust
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

  const achievements = [
    {
      icon: Award,
      text: "Ethereum Devconnect Volunteer(2025) & ETHGlobal Hacker",
      link: "https://github.com/mhiskall282/the-ghost-operator",
      description: "View project",
    },
    {
      icon: Building2,
      text: "Dev3pack ZK Fellow - Zero-Knowledge Proofs & Cryptography",
      link: "https://github.com/mhiskall282",
      description: "View Contributions",
    },
    {
      icon: GitBranch,
      text: "Co Founder - Kayaba Labs: Web3 Incubator & Accelerator",
      link: "https://kayabalabs.com",
      description: "View platform details",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-6 pb-6 sm:pb-8 md:py-8 h-full flex flex-col md:justify-center overflow-y-auto">
      {/* Introduction Section */}
      <div
        className={`mb-6 sm:mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-border backdrop-blur-sm w-fit">
              <Rocket className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-medium text-foreground/70">
                Available for Opportunities
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-primary font-[var(--font-gloria)] relative inline-block">
                  John Okyere
                  <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-primary/20 rounded-full blur-sm"></div>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground/90 mb-3 sm:mb-4">
               Software Engineer (DevOps, Blockchain, AI/ZK).
              </p>

              <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">
                I specialize in building robust, scalable backend systems and secure smart contracts. With a passion for decentralized zero knowledge proof technologies, I help businesses architect innovative solutions that leverage the power of blockchain and cloud computing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => router.push("/projects")}
                className="group relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-background border-2 border-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 font-semibold text-xs sm:text-sm">
                  View My Work
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <a
                href="https://github.com/mhiskall282/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary/10 border-2 border-primary hover:bg-primary/20 transition-all duration-300 font-semibold text-xs sm:text-sm inline-block text-center"
              >
                View My Resume
              </a>
            </div>
          </div>


          <div className="space-y-2 sm:space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer block"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(30px)",
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm font-medium text-foreground/80 block break-words">
                        {achievement.text}
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/60 flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs text-primary/60 font-medium">
                          {achievement.description}
                        </span>
                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/60 ml-1 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Opensource Section - Hidden on Mobile, Visible on Desktop */}
      <div
        className={`mb-6 transition-all duration-1000 delay-200 hidden md:block ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
            Open Source Contributions Across Web3 Ecosystems
          </h2>
          <div className="h-px flex-1 bg-border/50 ml-4 hidden sm:block"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            {
              icon: FolderKanban,
              value: countedStats.projects,
              label: "Projects",
              color: "text-primary",
              bg: "bg-primary/10",
            },
            {
              icon: GitBranch,
              value: countedStats.pullRequests,
              label: "Pull Requests Merged",
              color: "text-foreground",
              bg: "bg-background/50",
            },
            {
              icon: Network,
              value: countedStats.ecosystems,
              label: "Ecosystems",
              color: "text-foreground",
              bg: "bg-background/50",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative p-3 sm:p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${stat.color}`} />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                  {stat.label === "Pull Requests Merged"
                    ? ""
                    : stat.label === "Ecosystems"
                    ? ""
                    : "+"}
                </div>
                <div className="text-[10px] sm:text-xs text-foreground/60 font-medium">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
            What I{" "}
            <span className="font-[var(--font-gloria)] text-primary">Do</span>
          </h2>
          <div className="h-px flex-1 bg-border/50 ml-4 hidden sm:block"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group relative p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${area.color}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">
                    {area.title}
                  </h3>
                  <p className="text-foreground/70 text-[11px] sm:text-xs mb-3 sm:mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {area.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-background/50 border border-border/50 text-[10px] sm:text-xs font-semibold text-foreground/80 hover:bg-background hover:border-border transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
