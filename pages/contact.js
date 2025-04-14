import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons
import { useState } from 'react';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // To show success/error messages

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Basic form submission handler (replace with actual backend logic or service like Formspree/Netlify Forms)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // --- Replace this with your actual form submission logic ---
        console.log("Form Data Submitted:", formData);
        // Example: Simulate API call using fetch to a non-existent endpoint for demo
        try {
            // Replace '/api/contact' with your actual endpoint if you create one
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            // });
             await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
             // const success = response.ok; // Check if the request was successful
             const success = Math.random() > 0.3; // Simulate success/failure randomly

            if (success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                 // const errorData = await response.json(); // Get error details if available
                 // setStatus(`Failed to send message: ${errorData.message || 'Please try again.'}`);
                 setStatus('Failed to send message. Please try again.'); // Simplified error
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('An error occurred. Please try again later.');
        }
        // --- End of placeholder logic ---


        // Optional: clear status message after a few seconds
         setTimeout(() => setStatus(''), 5000);
    };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Contact Matthew Price</title>
        <meta name="description" content="Get in touch with Matthew Price for web development or system administration inquiries." />
      </Head>

      <motion.section
        className="py-12 md:py-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible" // Changed from whileInView
      >
        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">Contact Me</motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-text-light mb-4">Get In Touch</h2>
            <p className="text-text-medium">
              Have a project in mind, a question, or just want to connect? Feel free to reach out!
            </p>
            <div className="flex items-center space-x-3">
              <Mail className="text-accent h-5 w-5" />
              {/* Replace with actual email */}
              <a href="mailto:matthew.price@example.com" className="text-text-medium hover:text-accent transition-colors">
                matthew.price@example.com
              </a>
            </div>
             <div className="flex items-center space-x-3">
              <Phone className="text-accent h-5 w-5" />
              {/* Replace with actual phone or remove if not desired */}
              <span className="text-text-medium">+1 (123) 456-7890</span>
            </div>
             <div className="flex items-start space-x-3">
              <MapPin className="text-accent h-5 w-5 mt-1" />
              {/* Replace with actual location or general area */}
              <span className="text-text-medium">Pueblo, Colorado, USA (or Remote)</span>
            </div>
             {/* Add links to GitHub/LinkedIn here if desired */}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
             <h2 className="text-2xl font-semibold text-text-light mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary-dark border border-gray-600 rounded-md focus:ring-accent focus:border-accent text-text-light"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary-dark border border-gray-600 rounded-md focus:ring-accent focus:border-accent text-text-light"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-medium mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary-dark border border-gray-600 rounded-md focus:ring-accent focus:border-accent text-text-light"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'Sending...'}
                  className="w-full bg-accent text-primary-dark font-semibold py-3 px-6 rounded-lg shadow hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status && (
                 <p className={`text-center text-sm mt-4 ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                    {status}
                 </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;
