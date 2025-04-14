import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for sections/elements
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } } // Stagger children animations
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};


const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>About Matthew Price - Web Developer & System Administrator</title>
        <meta name="description" content="Learn more about Matthew Price, his background, skills, and passion for technology." />
      </Head>

      <motion.section
        className="py-12 md:py-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible" // Changed from whileInView
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">About Me</motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="md:col-span-1 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-accent">
              <Image
                src="/images/matthew-price-headshot.jpg" // Replace with actual headshot path in /public/images
                alt="Matthew Price Headshot"
                layout="fill"
                objectFit="cover"
                 onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/256x256/2a2a2a/f0f0f0?text=MP`; }} // Basic fallback
                 unoptimized={true} // Assuming placeholder or local image
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            className="md:col-span-2 space-y-6 text-text-medium leading-relaxed"
            variants={itemVariants} // Apply item animation here too
          >
            <p>
              Hello! I'm Matthew Price, a passionate <strong>Web Developer</strong> and <strong>System Administrator</strong> dedicated to building robust, efficient, and user-friendly digital solutions. With a strong foundation in both front-end and back-end technologies, coupled with extensive experience in managing and optimizing IT infrastructure, I bring a holistic perspective to every project.
            </p>
            <p>
              My journey in technology started with curiosity about how websites worked. Since then, I've honed my skills in JavaScript, React, Python, Linux, AWS, always eager to learn and adapt to the ever-evolving tech landscape.
            </p>
            <p>
              Whether I'm crafting elegant user interfaces, architecting scalable server solutions, or automating complex administrative tasks, my goal is always the same: to deliver high-quality results that solve real-world problems and exceed expectations. I thrive in collaborative environments and enjoy tackling challenging technical puzzles.
            </p>
             <p>
              When I'm not coding or managing servers, you can find me exploring the outdoors or contributing to open-source projects.
            </p>
            {/* Add more paragraphs as needed to tell the story */}
          </motion.div>
        </div>
      </motion.section>

      {/* Optional: Add Skills or Experience sections here if desired */}

    </motion.div>
  );
};

export default AboutPage;
