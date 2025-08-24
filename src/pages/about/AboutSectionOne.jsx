// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import about_images from "@/assets/Images/about";
import SectionTitle from "@/components/SectionTitle";
import { useRef } from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      },
    },
  };

  const imageVariants = {
    hidden: { x: 70, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const List = ({ text }) => (
    <motion.p 
      variants={itemVariants}
      className="text-body-color mb-5 flex items-center text-lg font-medium"
    >
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </motion.p>
  );

  return (
    <section id="about" ref={ref} className="pt-16 md:pt-20 lg:pt-28 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <motion.div variants={itemVariants}>
              <SectionTitle
                title="Crafted for Startup, SaaS and Business Sites."
                paragraph="Our main focus is to help businesses protect and optimize their digital applications. We provide expert guidance, secure solutions, and interactive consultations to ensure highly vulnerable business systems are safe, scalable, and efficient."
                mb="44px"
              />
            </motion.div>

            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Premium quality" />
                  <List text="Tailwind CSS" />
                  <List text="Use for lifetime" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Next.js" />
                  <List text="Rich documentation" />
                  <List text="Developer friendly" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
              <img
                src={about_images.about_image}
                alt="about-image"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <img
                src={about_images.about_image_dark}
                alt="about-image"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;