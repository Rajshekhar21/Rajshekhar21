import React from "react";
import type { AppProps } from "next/app";

import Layout from "@/layouts";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ContactIcon from "@/components/Chat";

const Home = ({ Component, ...props }: AppProps) => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <ContactIcon/>
      <Footer />
    </Layout>
  );
};

export default Home;
