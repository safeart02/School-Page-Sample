import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner"; // Assuming you have a Spinner component

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/courses/${id}`);
        const data = await res.json();
        console.log(data); 
        setCourse(data); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id])

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-80">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          {course.courses || "No Course Name Available"}
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          {course.description || "No Description Available"}
        </p>
        <p className="text-xl font-semibold text-green-700">
          ${course.price || "Price not available"}
        </p>
      </div>
    </div>
  );
};

export default CoursePage;
