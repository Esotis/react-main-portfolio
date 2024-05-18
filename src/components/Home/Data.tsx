import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useLayoutEffect, useRef } from "react";
import sendSVG from "../../assets/send";

// register the plugins use into GSAP
gsap.registerPlugin(TextPlugin);

// text for typing text animation
const texts = ["Jovan 🖐", "Web Developer", "Unisbank Student"];

function Data({ dataMotion }: any) {
  const headingTyping = useRef<HTMLHeadingElement>(null);
  const timelineTyping = useRef<any>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // Animation Cursor
      gsap.to(".typing-heading-cursor", {
        opacity: 0,
        repeat: -1,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // Timeline animation for heading static
      const timelineStatic = gsap
        .timeline()
        .to(".typing-heading-static-background", {
          scale: 1,
          duration: 1,
          delay: 2,
        })
        .to(".typing-heading-static-background", {
          height: "100%",
          duration: 1,
        });

      // animation for change color text heading static when background scale height
      gsap.to(".typing-heading-static", {
        delay: 3,
        color: "white",
        duration: 1,
      });

      // timeline animation for typing text
      timelineTyping.current = gsap.timeline({ repeat: -1, delay: 2 }).pause();

      texts.forEach((item) => {
        const typingText = gsap.to(".typing-heading-text", {
          duration: 1,
          text: { value: item, delimiter: "" },
          repeat: 1,
          yoyo: true,
          repeatDelay: 1,
        });
        timelineTyping.current.add(typingText);
      });
    }, headingTyping);

    return () => context.revert();
  }, []);

  return (
    <motion.div
      variants={dataMotion}
      initial="hidden"
      animate="visible"
      className="home-data"
      onViewportEnter={() => timelineTyping.current.play()}
      onViewportLeave={() => timelineTyping.current.pause()}
    >
      {/* Heading for Typing Text Animation */}
      <h1 className="home-title" ref={headingTyping}>
        <span className="typing-heading-static">
          Hi I'm
          <div className="typing-heading-static-background"></div>
        </span>
        <span className="typing-heading-text"></span>
        <span className="typing-heading-cursor"></span>
      </h1>

      <h3 className="home-subtitle">Web Developer</h3>
      <p className="home-description">
        I'm very excited about web and computer network, and I will always
        improve my skill all days
      </p>

      <a href="#contact" className="button button-flex">
        Say Hello {sendSVG}
      </a>
    </motion.div>
  );
}

export default Data;
