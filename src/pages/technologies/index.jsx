// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Code2, Cpu } from "lucide-react";
import { technologiesData } from "./technologiesData";

function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const statItemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.8,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.5,
      },
    },
  };
  return (
    <section id="technologies" ref={ref} className="overflow-hidden">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark rounded-full border border-primary/60 mb-6"
          >
            <Cpu className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-black dark:text-white tracking-wide">
              TECHNOLOGIES WE USE
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight"
          >
            Crafting Excellence with <br />
            <span className="text-primary">
              Cutting-Edge{" "}
              <span className="text-black dark:text-white">Tools</span>
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-body-color max-w-3xl mx-auto leading-relaxed"
          >
            We harness the power of industry-leading technologies to build
            exceptional digital experiences that drive innovation and deliver
            measurable results.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-80 h-80 rounded-full border border-dashed border-primary"></div>
              </div>
              <div className="absolute inset-4 animate-pulse">
                <div className="w-72 h-72 rounded-full border border-dashed border-primary"></div>
              </div>

              <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/25">
                  <Code2 className="w-16 h-16 text-white" />
                </div>
              </div>

              {technologiesData.map((tech, index) => {
                const IconComponent = tech.icon;
                const angle = index * 72 - 90;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={tech.id}
                    className="absolute z-20 group cursor-pointer"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className="absolute w-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                      style={{
                        height: `${radius}px`,
                        left: "50%",
                        top: "50%",
                        transformOrigin: "top center",
                        transform: `translateX(-50%) rotate(${angle + 180}deg)`,
                      }}
                    />

                    <div className="relative">
                      <div
                        className={`w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 group-hover:shadow-2xl group-hover:shadow-black/20 group-hover:scale-110 transition-all duration-500`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-white dark:bg-dark rounded-xl shadow-xl border border-primary p-4 min-w-48">
                          <h3 className="font-bold text-primary dark:text-white mb-1">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-body-color">
                            {tech.description}
                          </p>
                        </div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-primary rotate-45"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          ref={statsRef}
          variants={statsContainerVariants}
          initial="hidden"
          animate={isStatsInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <motion.div
            variants={statItemVariants}
            className="text-center p-6 bg-gray-light dark:bg-gray-dark text-white backdrop-blur-sm rounded-2xl border border-white/20 group hover:border-primary/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              variants={numberVariants}
              className="text-3xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-500"
            >
              5+
            </motion.div>
            <div className="text-body-color transition-colors duration-500">
              Core Technologies
            </div>
          </motion.div>

          <motion.div
            variants={statItemVariants}
            className="text-center p-6 bg-gray-light dark:bg-gray-dark text-white backdrop-blur-sm rounded-2xl border border-white/20 group hover:border-primary/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              variants={numberVariants}
              className="text-3xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-500"
            >
              100%
            </motion.div>
            <div className="text-body-color transition-colors duration-500">
              Modern Stack
            </div>
          </motion.div>

          <motion.div
            variants={statItemVariants}
            className="text-center p-6 bg-gray-light dark:bg-gray-dark text-white backdrop-blur-sm rounded-2xl border border-white/20 group hover:border-primary/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              variants={numberVariants}
              className="text-3xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-500"
            >
              ∞
            </motion.div>
            <div className="text-body-color transition-colors duration-500">
              Possibilities
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;
