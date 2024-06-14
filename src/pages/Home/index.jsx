import React from "react";
import Hero from "../../components/Hero";
import ProjectsSection from "../../components/ProjectsSection";
import Skills from "../../components/Skills"; 
import ContactForm from "../../components/ContactForm";


export default function Home() {
  return (
    <main className="main">
      <Hero />
      <ProjectsSection />
      <Skills />
      <ContactForm />
    </main>
  );
}
