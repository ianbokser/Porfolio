import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header/Header';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Projects } from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Footer } from '../components/Footer/Footer';
import { Technologies } from '../components/Technologies/Technologies';
import { WorkTools } from '../components/WorkTools/WorkTools';
import './Main.css';

export const Main = () => {
  const sectionRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const scrollAccumulator = useRef(0);
  const scrollTimeout = useRef(null);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    if (!isScrolling.current) return;
    scrollToSection(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      scrollAccumulator.current += event.deltaY;

      clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        if (isScrolling.current) return;

        isScrolling.current = true;

        if (scrollAccumulator.current > 0 && currentIndex < sectionRefs.current.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (scrollAccumulator.current < 0 && currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        scrollAccumulator.current = 0;

        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }, 100);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((section) => section === entry.target);
            setCurrentIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center max-w-screen-lg mx-auto">
      <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-gray-200 min-h-screen w-full max-w-screen-lg">
        <section ref={(el) => (sectionRefs.current[0] = el)} id="Sobre Mí" className="section-about min-h-screen pl-5 pr-5 pb-5 flex-col justify-center transition-opacity duration-700">
          <Header />
          <div className="w-full my-6">
            <AboutMe />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Technologies />
            </div>
            <div className="w-1/2">
              <WorkTools />
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[1] = el)} id="Proyectos" className="section-projects min-h-screen flex items-center justify-center transition-opacity duration-700">
          <div className="w-full px-4">
            <Projects />
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[2] = el)} id="Skills" className="section-skills min-h-screen flex items-center justify-center transition-opacity duration-700">
          <div className="w-full px-4">
            <Skills />
          </div>
        </section>

        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          id="Contacto"
          className="section-contact min-h-screen flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="flex items-center justify-center w-full px-4 flex-1">
            <ContactForm />
          </div>
          <Footer className="mt-auto w-full" />
        </section>
      </div>
    </div>
  );
};

export default Main;
