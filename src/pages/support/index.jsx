// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NewsLatterBox from "./Newlatter";
import { useRef } from "react";

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -70 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const newsletterVariants = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row h-full gap-8">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-7/12 xl:w-8/12 shadow-three dark:bg-gray-dark rounded-xs bg-white px-5 sm:px-8 py-8 sm:py-11 "
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.h2
                variants={itemVariants}
                className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white"
              >
                Need Help? Open a Ticket
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-body-color mb-12 text-base font-medium"
              >
                Our support team will get back to you ASAP via email.
              </motion.p>

              <motion.form variants={itemVariants}>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    variants={itemVariants}
                    className="w-full md:w-[calc(50%-0.5rem)] mb-8"
                  >
                    <label htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="mt-2.5"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="w-full md:w-[calc(50%-0.5rem)] mb-8"
                  >
                    <label htmlFor="name">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2.5"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="w-full mb-8">
                    <label htmlFor="name">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Enter your Message"
                      className="mt-2.5"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="w-full">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full text-sm cursor-pointer rounded-none"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>

          <motion.div
            variants={newsletterVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full lg:w-5/12 xl:w-4/12"
          >
            <NewsLatterBox />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
