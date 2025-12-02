"use client"
import React from "react";
import ProfileCard from "../ProfileCard";

export default function Contact() {
  return (
    <div className="py-40">
      <ProfileCard
        name="John Okyere"
        title="Software Engineer(0xmhiskall@gmail.com)"
        showBehindGradient={true}
        handle="0xmhiskall"
        contactText="Contact Me"
        avatarUrl="/path/to/avatar.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => window.open("https://x.com/0xmhiskall", "_blank")}
      />
    </div>
  );
}
