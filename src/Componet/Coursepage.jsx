import React, { useState, useEffect } from 'react';
import './Coursepage.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ScrollBox from './ScrollBox';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useCourse } from './CourseContext.jsx';// Import the useCourse hook
import { useMediaQuery } from 'react-responsive';
// import './Popup/Font1.css';

const Coursepage = ({ disabled, onGoBack, targetRef }) => {
  const [isMobile, setIsMobile] = useState(false);
  // Use react-responsive to determine the screen width
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    // Update state based on screen width
    setIsMobile(isMobileScreen);
  }, [isMobileScreen]);

  const { selectedCourse, imageSrc } = useCourse(); // Use the useCourse hook to access context

  const [showCoursePage, setShowCoursePage] = useState(false);

 
 





  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array means it runs once after initial render


  const initialDropdowns = {
    "01: introduction Java": false,
    "02: First step towrds java": false,
    "03: JVM archtiteure view": false,
    "04: Data Types,Opreator &  Variables": false,
    "05: Control Statements": false,
    "06: Input Output": false,
    "07: Array & Strings": false,
    "08: Classes & Objects": false,
    "09: Inheritance": false,
    "10: Polymorphism": false,

  };

  const [chapters, setChapters] = useState(initialDropdowns);

  const toggleChapter = (chapterName) => {
    setChapters({
      ...chapters,
      [chapterName]: !chapters[chapterName],
    });
  };

  const subChaptersData = {
    "01: introduction Java": [
      "01: Overview of programing",
      "02: Java Overview-01",
    ],
    "02: First step towrds java": [
      "03: Java Overview-02",
      "04: Java Overview-03",
    ],
    "03: JVM archtiteure view": [
      "05: JVM Overview ",
      "06: JVM Archtiture-01",
      "07: JVM Archtiture-02",
      "08: JVM Archtiture-03",
    ],
    "04: Data Types,Opreator &  Variables": [
      "09: Main Method In Java",
      "10: Intrdocution java-02",
      "11: Data Types-01",
      "12: Data Types-02",
      "13: Data Types-03",
    ],
    "05: Control Statements": [
      "14: While loop, For Loop, Do while loop",
      "15: If else",
      "16: If else Basic",
      "17: If else Statement",
      "18: For Loop",
      "19: While Loop",
      "20: Do while Loop",
    ],
    "06: Input Output": [
      "21: I/O Scanner-01",
      "22: I/O Scanner-02",
      "23: I/O Scanner-03",
      "24: Nested for-01",
      "25:  Nested for-02",
    ],
    "07: Array & Strings": [
      "26: Array -01",
      "27: Array -02",
      "28: Array -03",
      "29: Commond Line Argument",
    ],
    "08: Classes & Objects": [
      "30: Intrdocution OOps",
      "31: Inheitance",
      "32: Abstraction",
      "33: Polymorphism",
      "34: Encapsultion",
    ],
    "09: Inheritance": [
      "35: Inheritance-01",
      "36: Inheritance-02",
      "37: Inheritance-03",
      "38: Inheritance-04",
    ],
    "10: Polymorphism": [
      "39: Polymorphism-01",
      "40: Polymorphism-02",
    ],
  };
  return (
    <>
      <ScrollBox />

      <div ref={targetRef} className={`ide`}>
        <div className="final_image">
          <div className="f_img">
            <img src={imageSrc} alt="error" />
          </div>
          <div className="Course_content">
            <h1>{selectedCourse?.title || 'Course Title'} </h1>
            <h6>{selectedCourse?.description || 'description'}</h6>
            <div className="content_left">
              <label>Duration : <span>{selectedCourse?.duration || 'Duration'}</span></label>
              <label>Starts From : <span>1 Jan 2024</span></label>
              <label>Lectures : <span>123</span></label>
            </div>

            <div className="cont_button">
              <h5>₹{selectedCourse?.price || 'Price'}/-</h5>
              <button>Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="cc">
          <p className='cc-1'>Course Content</p>
          {/* <p className='cc-12'>23 sections • 281 lectures • 14h 57m total length</p> */}
        </div>

        <div className="cbx">
          {Object.keys(initialDropdowns).map((chapterName) => (
            <div className="dd" key={chapterName}>
              <div className="dd-1" onClick={() => toggleChapter(chapterName)} >
                <button className="chpt-btn" >
                  <div className="top-down">
                    {chapters[chapterName] ? (
                      <FaChevronUp size={13} className="ChevronUp" />
                    ) : (
                      <FaChevronDown size={13} className="ChevronDown" />
                    )}
                  </div>
                </button>
                <span id='chapterName'>{chapterName}</span>

                {chapters[chapterName] && (
                  <div className={`dd-2 ${chapters[chapterName] ? 'opn' : ''}`}>
                    {subChaptersData[chapterName] &&
                      subChaptersData[chapterName].map((subChapter, index) => (
                        <div key={index} className="subchtp-btn">
                          <span className='playcircle'><PlayCircleOutlineIcon />
                          </span>
                          <span className='subChapter_txt'>{subChapter}</span></div>
                      ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>



        <br /><br />

      </div>
    </>
  );
}

export default Coursepage;
