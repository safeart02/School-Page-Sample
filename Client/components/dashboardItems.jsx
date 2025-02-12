import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Items from "../dashboardItems.json";
import CourseListing from "./courseListing";

const DashboardItems = ({ isHome = false }) => {
  const itemListings = isHome ? Items.slice(0, 3) : Items;

  // Values for scroll-driven animation
  const initialValue = 140;
  const finalValue = 88;
  const thresholdY = 170; // Scroll position where state change occurs

  const speed = 1;
  const scrollDistance = (initialValue - finalValue) / speed;

  const startY = 0; // Scroll position when transition starts
  const endY = startY + scrollDistance;

  const { scrollY } = useScroll();
  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    {
      clamp: false,
    }
  );

  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isSticky, setIsSticky] = useState(true); // Track sticky state
  const lastItemRef = useRef(null); // Ref for last course item

  useEffect(() => {
    // Scroll listener to toggle sticky state
    const onScroll = () => {
      const lastItemBottom = lastItemRef.current?.getBoundingClientRect().bottom;
      if (lastItemBottom < window.innerHeight) {
        setIsSticky(false); // Unstick header when last item is out of view
      } else {
        setIsSticky(true); // Keep header sticky if the last item is still in view
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setIsPastThreshold(latest > thresholdY);
    });
  }, [scrollY]);

  return (
    <section>
      {/* Header with scroll-triggered animation and sticky positioning */}
      <header
  className={`bg-gray-800 p-8 pb-0 z-10 ${isSticky ? 'sticky top-0' : 'relative'} flex items-center justify-center`}
>
  <motion.h1
    className="text-4xl font-extrabold text-white text-center"
    style={{
      height: scrollOutput, // Apply height animation
    }}
    initial={{ opacity: 1, scale: 1 }} // Start fully visible and normal scale
    animate={{
      opacity: isPastThreshold ? 1 : 1, // Change opacity based on scroll position
      scale: isPastThreshold ? 1 : 1.2,  // Change scale based on scroll position
    }}
    transition={{ duration: 0.3 }} // Add a smooth transition
  >
    {isHome ? "Most Popular Courses" : "All Available Courses"}
  </motion.h1>
</header>


      {/* Course Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-20">
        {itemListings.map((course, index) => (
          <div
            key={course.id}
            ref={index === itemListings.length - 1 ? lastItemRef : null} // Attach ref to the last item
          >
            <CourseListing course={course} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardItems;
