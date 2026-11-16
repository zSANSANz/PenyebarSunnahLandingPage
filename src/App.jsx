import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HadithCard from "./components/HadithCard";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HadithCard />
      </main>
      <Footer />
    </>
  );
}