"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useImageStore } from "@/lib/store/use-image";
import { FadeUp } from "@/components/ui/animate";
import { LinesBG } from "@/components/ui/grid-patterns";

const HIGHLIGHTS = [
  {
    title: "African Builder Stories — Ethiopia Feature",
    image: "/images/highlights/african-builder-eth.jpg",
  },
  {
    title: "Builder in Residence at ETHiopia Builder Residency",
    image: "/images/highlights/ETHiopia-residency.jpg",
  },
  {
    title: "Competing at ETHiopia Builder Hackathon",
    image: "/images/highlights/ETHiopia-hackathon.jpg",
  },
  {
    title: "Entrepreneurship & Innovation at WeVentures Ethiopia",
    image: "/images/highlights/weventures-1.jpg",
  },
  {
    title: "Keynote Pitch at UEW Innovation Hub — British Council",
    image: "/images/highlights/british-council-uew.jpg",
  },
  {
    title: "Roundtable Speaker at Sui Ghana × UEW Roadshow",
    image: "/images/highlights/roundtable-sui.jpg",
  },
  {
    title: "Lead Instructor — 3-Day ICP Smart Contracts Bootcamp at UCC",
    image: "/images/highlights/bootcamp-ucc.JPG",
  },
  {
    title: "ICP Community Meetup Facilitator at UCC",
    image: "/images/highlights/ucc-meetup.JPG",
  },
  {
    title: "Pitch Showcase at AyaHQ × UEW Roadshow",
    image: "/images/highlights/aya-roadshow-uew.jpg",
  },
  {
    title: "Instructor — Rust & Motoko Smart Contract Development at UEW",
    image: "/images/highlights/motoko-uew.jpg",
  },
  {
    title: "ICP Community Meetup Host at UEW",
    image: "/images/highlights/uew-meetup-icp.jpg",
  },
  {
    title: "Startup Incubation Workshop Facilitator at UEW Innovation Hub — British Council",
    image: "/images/highlights/incubation-workshop.jpg",
  },
  {
    title: "Speaker & Organizer at Sui Overflow UEW Summit",
    image: "/images/highlights/sui-overflow-meetup.jpg",
  },
  {
    title: "Sharing My Journey as a Dev3pack Fellow & AOC Scholar at Devconnect",
    image: "/images/highlights/devconnect-experience.jpg",
  },
  {
    title: "Speaking on ZK & Web3 Engineering at ETH Enugu",
    image: "/images/highlights/eth-enugu-1.jpg",
  },
  {
    title: "Web3 & Blockchain Education Session at GI-KACE",
    image: "/images/highlights/gi-kace.jpg",
  },
  {
    title: "Mentorship Dinner with Celo Founder Marek Olszewski — Buenos Aires",
    image: "/images/highlights/dinner-celo.jpg",
  },
  {
    title: "Demo Day — Hackathon Project Showcase at ETHGlobal Argentina",
    image: "/images/highlights/demo-day-ethglobal.jpg",
  },
  {
    title: "MOU Signing Ceremony — Aya × UEW Partnership with Prof. Dake & Eric Annan",
    image: "/images/highlights/aya-mou-1.jpg",
  },
  {
    title: "Networking with AyaHQ Founders Eric Annan & Michael Lawal at Devconnect Argentina",
    image: "/images/highlights/aya-founders-1.jpg",
  },
  {
    title: "Pitching SuiVerify at Sui 3-Day Developer Bootcamp at AyaHQ",
    image: "/images/highlights/pitch-suiverify.jpg",
  },
  {
    title: "Lisk Founders Hangout at Aleph Hub — Buenos Aires, Argentina",
    image: "/images/highlights/lisk-hangout.jpg",
  },
  {
    title: "ZK Summit & Governance Day at Universidad Católica Argentina",
    image: "/images/highlights/uca-visit.jpg",
  },
  {
    title: "Panelist at Africa Blockchain Summit — Engaging Government Leaders & Ministers in Johannesburg",
    image: "/images/highlights/africa-summit.jpg",
  },
  {
    title: "Keynote: Positioning African Builders to Create Impactful Solutions — ETH Enugu Nigeria",
    image: "/images/highlights/speaker-eth-enugu.jpg",
  },
  {
    title: "African Scholars Cohort at Devconnect Argentina",
    image: "/images/highlights/devcon-scholars.jpg",
  },
  {
    title: "Hacking & Building at ETH Enugu Hackathon — Nigeria",
    image: "/images/highlights/hack-ethenugu.jpg",
  },
  {
    title: "Representing Ghana at ETH Enugu Conference 2025",
    image: "/images/highlights/ghana-rep.jpg",
  },
  {
    title: "Networking with Kotani Pay Founders, VISA Executives & BlocksFi at Africa Blockchain Summit",
    image: "/images/highlights/ghana-rep.jpg",
  },
  {
    title: "Google Cloud Roadshow 2025 — Google Accra",
    image: "/images/highlights/cloud-roadshow.jpg",
  },
  {
    title: "Builders & Residents Hangout at ETHiopia",
    image: "/images/highlights/eth-hangout.jpg",
  },
  {
    title: "Technical Deep-Dive with Blockradar Founder Stanley Morgan on Blockchain Infrastructure",
    image: "/images/highlights/blockradar.jpg",
  },
];

function HighlightImage({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const { setSelectedImage, setDialogOpen } = useImageStore();

  function handleClick() {
    setSelectedImage(src);
    setDialogOpen(true);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  }

  return (
    <button
      type="button"
      className="w-full rounded-lg border border-border/50 overflow-hidden cursor-pointer hover:border-border transition-colors duration-200"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`View ${alt} in full screen`}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        sizes="(max-width: 768px) 85vw, 65vw"
        className="rounded-lg w-full h-auto aspect-[4/3] object-cover"
        style={{
          WebkitFilter: isLoading ? "blur(8px)" : "none",
          transition: "all 0.5s ease",
        }}
        onLoad={() => setIsLoading(false)}
      />
    </button>
  );
}

export function Highlights() {
  return (
    <FadeUp>
      <div className="flex flex-col">
        <LinesBG className="-mx-7 sm:-mx-6 mb-8 md:mb-16" />
        <h3 className="text-section-title font-title font-semibold text-muted-foreground mb-6">
          Highlights
        </h3>
        <div className="rounded-xl bg-muted/30 border border-dashed border-border p-4 sm:p-5">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent>
              {HIGHLIGHTS.map((item) => (
                <CarouselItem
                  key={item.image}
                  className="basis-[85%] sm:basis-[65%]"
                >
                  <HighlightImage src={item.image} alt={item.title} />
                  <p className="text-caption text-muted-foreground pt-2">
                    {item.title}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </FadeUp>
  );
}
