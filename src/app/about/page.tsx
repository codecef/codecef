import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About CodeCEF"
        description="At CodeCEF, we deliver innovative, scalable software solutions designed to drive business growth. Our expert team blends creativity with cutting-edge technology to provide high-quality, user-friendly products. We’re dedicated to helping businesses thrive in the digital era."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
