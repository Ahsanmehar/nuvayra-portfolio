// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TechIcon from "@/components/TechIcon";

const SingleTestimonialItem = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{
        animationDuration: 3,
        boxShadow: "0 20px 25px -5px rgba(0, 180, 216, .3)",
      }}
      className="relative shadow-xl rounded-lg p-8 dark:bg-dark bg-white hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:rounded-lg hover:before:border-2 hover:before:border-primary hover:before:pointer-events-none tarnsition-all duration-500"
    >
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 0.1,
          background:
            "radial-gradient(circle at center, rgba(0, 180, 216, 1) 0%, transparent 70%)",
        }}
        transition={{ duration: 0.5 }}
      />

      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q250,50 500,100 L500,150 Q250,200 0,150 Z"
          fill="#00B4d8"
          opacity="0.3"
        />
        <circle cx="80" cy="300" r="8" fill="#00B4d8" opacity="0.3" />
        <circle cx="400" cy="200" r="5" fill="#00B4d8" opacity="0.3" />
      </svg>

      <motion.div
        className="absolute top-1/4 right-8 w-3 h-3 rounded-full bg-primary filter blur-[1px]"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-10 w-2 h-2 rounded-full bg-primary/90 filter blur-[1px]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="cursor-pointer text-[#FBB040]"
              whileHover={{
                scale: 1.3,
                rotate: 10,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <TechIcon
                name="star"
                className={`w-5 h-5 transition-all duration-200 ${
                  i < testimonial.rating ? "fill-current" : "opacity-40"
                }`}
              />
            </motion.span>
          ))}
        </div>

        <motion.div
          className="min-h-35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-soft-white mb-6 line-clamp-5 group-hover:text-primary/50 transition-colors duration-300">
            {testimonial.review}
          </p>
        </motion.div>

        <motion.a
          href="#"
          className="flex items-center gap-4 group"
          whileHover={{ x: 5 }}
        >
          <motion.div
            className="rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(0, 180, 216, 0.5)",
            }}
          >
            {testimonial.authorImg ? (
              <motion.img
                src={testimonial.authorImg}
                alt="author"
                className="w-12.5 h-12.5 rounded-full object-cover group-hover:ring-2 group-hover:ring-primary transition-all duration-300"
                width={50}
                height={50}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            ) : (
              <TechIcon
                name="user"
                className="w-16 h-16 text-dark/90 dark:group-hover:text-white p-4 bg-body-color/40 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary-500"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-medium text-soft-white group-hover:text-primary transition-colors duration-300">
              {testimonial.authorName}
            </h3>
            <p className="text-custom-sm text-body-color transition-colors duration-300">
              {testimonial.authorRole}
            </p>
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SingleTestimonialItem;
