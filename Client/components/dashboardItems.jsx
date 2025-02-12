import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CourseListing from "./courseListing";
import Spinner from "./spinner";

const DashboardItems = ({ isHome = false }) => {
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(0); // 0 for not scrolled, 1 for scrolled

  useEffect(() => {
    const apiUrl = isHome ? "/api/courses?_limit=3" : "/api/courses";
    const fetchCourses = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.log("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [isHome]);

  const thresholdY = 20; // Scroll threshold to trigger animation

  const [isSticky, setIsSticky] = useState(true);
  const lastItemRef = useRef(null);

  // Handle scroll event
  const onScroll = () => {
    const scrollY = window.scrollY;

    // Update isScrolled based on the scroll position
    if (scrollY > thresholdY) {
      setIsScrolled(1); // Set to 1 when scrolled past threshold
    } else {
      setIsScrolled(0); // Set to 0 when above the threshold
    }

    // Handle sticky logic
    const lastItemBottom = lastItemRef.current?.getBoundingClientRect().bottom;
    if (lastItemBottom < window.innerHeight) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section>
      {/* Header with scroll-triggered animation and sticky positioning */}
      <header
        className={`bg-gray-800 pt-8 pb-8 z-10 ${
          isSticky ? "sticky top-20" : ""
        } flex items-center justify-center`}
      >
        <motion.h1
          className="text-4xl font-extrabold text-white text-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isScrolled ? 0.5 : 1, // Opacity will be either full (1) or slightly less (0.8)
            scale: isScrolled ? 1 : 1.2, // Scale down slightly after scroll
          }}
          transition={{ duration: 0.3 }}
        >
          {isHome ? "Most Popular Courses" : "All Available Courses"}
        </motion.h1>
      </header>

      {/* Course Listings */}
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-20">
            {courses.map((course, index) => (
              <div
                key={course.id}
                ref={index === courses.length - 1 ? lastItemRef : null} // Attach ref to the last item
              >
                <CourseListing course={course} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default DashboardItems;
