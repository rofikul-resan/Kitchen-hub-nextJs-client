"use client";
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "./HomeComponents/HomeBanner";
import AboutSection from "./HomeComponents/AboutSection";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Container>
        <AboutSection />
      </Container>
    </main>
  );
}
