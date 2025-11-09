import Image from "next/image";
import Header from "./components/Header";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  ); 
}
