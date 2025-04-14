import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component
import { ArrowRight } from 'lucide-react';

// Placeholder project data - Replace with actual data
const featuredProjects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge web application built with React and Node.js, focusing on real-time data visualization.",
    imageUrl: "/images/project-alpha.jpg", // Put images in /public/images
    projectUrl: "#", // Link to project demo or case study
    tags: ["React", "Node.js", "WebSockets", "Data Viz"],
  },
  {
    title: "SysAdmin Dashboard",
    description: "An intuitive dashboard for monitoring server health and performance metrics across multiple systems.",
    imageUrl: "/images/project-beta.jpg",
    projectUrl: "#",
    tags: ["Python", "Flask", "System Admin", "Monitoring"],
  },
    {
    title: "E-commerce Platform",
    description: "Scalable e-commerce site featuring secure payments and inventory management.",
    imageUrl: "/images/project-gamma.jpg",
    projectUrl: "#",
    tags: ["Next.js", "Stripe", "Database", "Web Dev"],
  },
];

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Matthew Price - Web Developer & System Administrator</title>
        <meta name="description" content="Portfolio of Matthew Price, showcasing web development and system administration projects." />
        <link rel="icon" href="/favicon.ico" /> {/* Place favicon in /public */}
      </Head>

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 md:py-32"
        variants={sectionVariants}
        initial="hidden"
        animate="visible" // Changed from whileInView to animate for initial load
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          Matthew Price
        </motion.h1>
        <motion.p
            className="text-xl md:text-2xl text-text-medium mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovative Web Developer & Experienced System Administrator
        </motion.p>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-accent text-primary-dark font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-accent-hover transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Get In Touch
            </a>
          </Link>
        </motion.div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        className="py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" // Animate when section scrolls into view
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              tags={project.tags}
              delay={index} // Pass delay for staggered animation
            />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/work" legacyBehavior>
                <a className="inline-flex items-center text-accent hover:text-accent-hover transition-colors duration-300 text-lg font-medium">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Link>
        </div>
      </motion.section>

      {/* Add other sections as needed (e.g., Skills, Testimonials) */}
      {/* Example Skills Section */}
       <motion.section
        className="py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Skills</h2>
         <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {/* Replace with actual skills */}
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'Linux', 'Docker', 'AWS'].map((skill, index) => (
                 <motion.div
                    key={skill}
                    className="bg-secondary-dark p-4 rounded-lg shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
                 >
                    <p className="font-medium text-text-light">{skill}</p>
                 </motion.div>
            ))}
         </div>
       </motion.section>

    </motion.div>
  );
};

export default HomePage;
