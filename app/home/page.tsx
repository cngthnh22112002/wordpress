import { FeaturesSection } from '@/components/layout/sections/features';
import { HeroSection } from '@/components/layout/sections/hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Green Solutions for a Sustainable Future</title>
        <meta name="description" content="Eco-friendly services providing green materials to protect the environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection/>
      <FeaturesSection/>
    </>
  );
}