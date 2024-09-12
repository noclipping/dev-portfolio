"use client"
import Image from "next/image";
import ParticlesBackground from './components/ParticlesBackground';
export default function Home() {
  return (
  <div className="text-white border-solid jacquard-12-regular text-4xl" >
    Devon Selvaggi
    <p className="text-red-600">
    Software Engineer
    </p>
    <p className="text-white">
    Pennsylvania
    </p>
    <p className="text-sm md:text-2xl pt-4 max-w-full text-nowrap">
      📂 Projects 📄 Blog  🕸️ Github 🔎 About
    </p>

  </div>
  );
}
