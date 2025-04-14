import Head from 'next/head';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react'; // For filtering

// Placeholder for ALL projects - Replace with actual data
const allProjects = [
  // Include featured projects again or list all projects
   { id: 1, title: "Project Alpha", description: "A cutting-edge web application built with React and Node.js...", imageUrl: "/images/project-alpha.jpg", projectUrl: "#", tags: ["React", "Node.js", "Web Dev", "Featured"], category: "Web Development" },
   { id: 2, title: "SysAdmin Dashboard", description: "An intuitive dashboard for monitoring server health...", imageUrl: "/images/project-beta.jpg", projectUrl: "#", tags: ["Python", "Flask", "System Admin", "Featured"], category: "System Administration" },
   { id: 3, title: "E-commerce Platform", description: "Scalable e-commerce site featuring secure payments...", imageUrl: "/images/project-gamma.jpg", projectUrl: "#", tags: ["Next.js", "Stripe", "Web Dev", "Featured"], category: "Web Development" },
   { id: 4, title: "Network Automation Tool", description: "CLI tool for automating network device configuration...", imageUrl: "/images/project-delta.jpg", projectUrl: "#", tags: ["Python", "Networking", "System Admin"], category: "System Administration" },
   { id: 5, title: "Personal Blog", description: "A blog built with Next.js and Markdown...", imageUrl: "/images/project-epsilon.jpg", projectUrl: "#", tags: ["Next.js", "Markdown", "Web Dev"], category: "Web Development" },
   // Add many more projects...
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Stagger animation of children
    }
  }
};

const WorkPage = () => {
  const [filter, setFilter] = useState('All'); // State for filtering

  const categories = ['All', 'Web Development', 'System Administration', 'Featured']; // Example categories

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === filter || (filter === 'Featured' && p.tags.includes('Featured')));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Work - Matthew Price Portfolio</title>
        <meta name="description" content="Explore projects by Matthew Price, including web development and system administration work." />
      </Head>

      <section className="py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent"
        >
          My Work
        </motion.h1>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        filter === category
                            ? 'bg-accent text-primary-dark'
                            : 'bg-secondary-dark text-text-medium hover:bg-gray-700'
                    }`}
                >
                    {category}
                </button>
            ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Animate container to stagger children
        >
          {filteredProjects.map((project) => (
            // Use project.id if available and unique, otherwise title is fallback key
            // Removed delay prop as staggerChildren handles it
            <ProjectCard
              key={project.id || project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              tags={project.tags}
            />
          ))}
        </motion.div>

         {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-text-medium mt-12"
            >
              No projects found for this category.
            </motion.p>
         )}
      </section>
    </motion.div>
  );
};

export default WorkPage;
