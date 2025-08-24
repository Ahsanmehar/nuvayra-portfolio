// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import about_images from "@/assets/Images/about";
import { useRef } from "react";

const AboutSectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: -70, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center dark:border-white/[.15] border-t border-body-color/[.15] pt-16 md:pt-20 lg:pt-28">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src={about_images.about_image_2}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <img
                src={about_images.about_image_2_dark}
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-[470px]">
              <motion.div variants={itemVariants} className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Bug-Free Integration
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  At Nuvayra, we build robust software solutions with flawless
                  integrations. From web apps to enterprise systems and SaaS
                  platforms, our development process ensures smooth performance
                  with minimal bugs—delivering consistency and reliability at
                  scale.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Dedicated Support
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  We know how important technology is for your business. That's
                  why our expert team at Nuvayra provides 24/7 dedicated
                  support—whether it's technical assistance, deployment
                  guidance, or optimizing software for better efficiency.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Scalable Tech Solutions
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  From custom web and mobile apps to enterprise software and
                  game development, Nuvayra creates solutions that scale with
                  your growth. Leveraging modern frameworks like Next.js and
                  React, we build fast, secure, and future-ready applications
                  tailored to your needs.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
