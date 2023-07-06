"use client";

import HomeBanner from "./HomeComponents/HomeBanner";
import AboutSection from "./HomeComponents/AboutSection";
import { Container } from "@mui/material";

import MenuShowCase from "./HomeComponents/MenuShowCase";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Container>
        <AboutSection />
        <MenuShowCase />
      </Container>
    </main>
  );
}
