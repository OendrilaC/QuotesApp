import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50"> 
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
}
