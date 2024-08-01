
import { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Load selectedCourse and imageSrc from localStorage on component mount
    const storedCourse = JSON.parse(localStorage.getItem('selectedCourse'));
    const storedImageSrc = JSON.parse(localStorage.getItem('imageSrc'));

    if (storedCourse) {
      setSelectedCourse(storedCourse);
    }

    if (storedImageSrc) {
      setImageSrc(storedImageSrc);
    }
  }, []);

  const setCourse = (course) => {
    // Set selectedCourse in state and localStorage
    setSelectedCourse(course);
    localStorage.setItem('selectedCourse', JSON.stringify(course));
  };

  const setImage = (src) => {
    // Set imageSrc in state and localStorage
    setImageSrc(src);
    localStorage.setItem('imageSrc', JSON.stringify(src));
  };

  return (
    <CourseContext.Provider value={{ selectedCourse, setCourse, imageSrc, setImage }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  return useContext(CourseContext);
};
