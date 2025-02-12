import React from 'react';
import { motion } from 'framer-motion'; // import motion from framer-motion
import Hero from '../components/hero';
import HomeCards from '../components/homeCards';
import DashboardItems from '../components/dashboardItems';
import ViewAll from '../components/viewAllCourses';

const HomePage = () => {
  return (
    <>
      <motion.div
        initial = {{ opacity: 0, y: -100 }}
        whileInView = {{ opacity: 1, y: 0}}
        exit = {{ opacity: 0, y: 0}}
        transition = {{ duration: 0.8 }}
        viewport = {{ once: true }}
      >
        <Hero 
          title='"Unlock Your Potential, One Lesson at a Time"' 
          subtitle='This academy conveys the idea of growth, learning, and personal development. If you want something more specific to the subject or focus of Mint Academy, let me know and I can tailor it further!' />
      </motion.div>
      
      {/* Add whileInView to trigger animation when the element comes into view */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and y-axis transformation
        whileInView={{ opacity: 1, y: 0 }}  // Animate to opacity 1 and y: 0 when in view
        exit={{ opacity: 0, y: 50 }}     // When exiting, fade and move down
        transition={{ duration: 0.8 }}   // Duration of the animation
        viewport={{ once: true }}        // Ensures animation triggers only once when entering view
      >
        <DashboardItems isHome={true} />
      </motion.div>

      <ViewAll />
      <HomeCards />
    </>
  );
}

export default HomePage;
