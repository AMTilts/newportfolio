import Image from 'next/image'; // Use Next.js Image for optimization
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation for card hover effect
const cardHover = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

// Animation for card entrance
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProjectCard = ({ title, description, imageUrl, projectUrl, tags = [], delay = 0 }) => {
  return (
    <motion.div
      className="bg-secondary-dark rounded-lg shadow-lg overflow-hidden flex flex-col h-full group" // Added group class
      whileHover={cardHover} // Apply hover animation
      variants={cardVariants} // Apply entrance animation
      initial="hidden"
      animate="visible" // Changed from whileInView to animate for container stagger
      transition={{ delay: delay * 0.1, duration: 0.5 }} // Staggered entrance (can be removed if parent uses staggerChildren)
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
    >
      {/* Project Image */}
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={imageUrl || `https://placehold.co/600x400/2a2a2a/f0f0f0?text=${title.replace(/\s+/g, '+')}`} // Placeholder if no image, URL encode title
          alt={`${title} screenshot`}
          layout="fill" // Fill the container
          objectFit="cover" // Cover the area, might crop
          className="transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover (applied via parent hover)
          onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/2a2a2a/f0f0f0?text=Image+Error`; }} // Basic fallback
          unoptimized={imageUrl?.startsWith('https://placehold.co')} // Avoid optimizing placeholder images
        />
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-text-light mb-2">{title}</h3>
        <p className="text-text-medium text-sm mb-4 flex-grow">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-text-medium mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link to Project */}
        {projectUrl && projectUrl !== "#" && ( // Only show if projectUrl is valid
          <Link href={projectUrl} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center bg-accent text-primary-dark font-semibold py-2 px-4 rounded hover:bg-accent-hover transition-colors duration-300">
              View Project
            </a>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
