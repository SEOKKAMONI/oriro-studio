"use client";

import ActivitySection from "@/components/ActivitySection";
import CardSection from "@/components/CardSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/common/Header";
import HeroSection from "@/components/HeroSection";
import WordSection from "@/components/WordSection";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw" margin={0} padding={0} backgroundColor="#f9fafb">
        {/* 히어로 섹션 */}
        <HeroSection />
        {/* 카드 섹션 */}
        <CardSection />
        {/* 활동 섹션 */}
        <ActivitySection />
        {/* 한 마디 섹션 */}
        <WordSection />
        {/* 컨택 섹션 */}
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
