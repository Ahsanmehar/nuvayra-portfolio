// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/Components/SectionTitle";
import { servicesData } from "@/pages/services/servicesData";
import SingleServiceItem from "./SingleServiceItem";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const titleContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const servicesContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleItem = {
    hidden: { y: -30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.7,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div ref={ref}>
          <motion.div
            variants={titleContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div variants={titleItem}>
              <SectionTitle
                title=" Our Services"
                paragraph=" We provide comprehensive software solutions to help your business thrive in the digital world.From concept to deployment, our expert team delivers exceptional results."
                center
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={servicesContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12"
          >
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={item}>
                <SingleServiceItem service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
