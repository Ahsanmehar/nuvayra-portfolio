// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import brandsData from "@/pages/brands/brandsData";

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-16 overflow-hidden" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
        >
          {brandsData.map((brand) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
            >
              <SingleBrand brand={brand} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
    >
      <img src={imageLight} alt={name} fill className="hidden dark:block" />
      <img src={image} alt={name} fill className="block dark:hidden" />
    </Link>
  );
};
