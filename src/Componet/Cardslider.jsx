
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Coursepage from './Coursepage';
import Courses from './Courses.jsx';
import './Cardslider.css';
// import Contact from './Contact.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useCourse } from './CourseContext';
import axios from 'axios';
// import { Image } from '@mui/icons-material';

function Cardslider({ disabled, targetRef, onButtonClick }) {



  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');

    if (words.length <= maxWords) {
      return description;
    }

    const truncated = words.slice(0, maxWords).join(' ');
    return `${truncated}... More`;
  };


  const { setCourse, setImage } = useCourse();
  const navigate = useNavigate();
  const handleEnrollNowClick = (course, image) => {
    setCourse(course);
    setImage(image);
    navigate('/coursepage');
  };

  const [data, setData] = useState([]);
  const [imageSrc, setImageSrc] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchData = async () => {

      let cachedCourses = JSON.parse(localStorage.getItem("course"));
      if (cachedCourses != null && cachedCourses.length > 0) {
        setData([...cachedCourses]);
      } else {
        try {
          const response = await axios.get('http://192.168.0.138:8080/manage/course/getAllCourses/0/10');
          setData(response.data);
          localStorage.setItem("course", JSON.stringify(response.data));
          localStorage.setItem("size", JSON.stringify(response.data.length));
          console.log('Data from API:', response.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const timeout = setTimeout(() => {
      fetchImages();
    }, 1000);

    const fetchImages = async () => {

      let cachedImages = JSON.parse(localStorage.getItem("images"));

      if (cachedImages != null && cachedImages.length > 0) {
        // console.log("in if");
        setImageSrc([...cachedImages]);
      } else {
        let fetchedImages = [];
        const imgSize = JSON.parse(localStorage.getItem("size"));
        for (let i = 0; i < imgSize; i++) {
          await fetch('http://192.168.0.138:8080/manage /course/getImage/' + (i + 1))
            .then((response) => {
              console.log("hello2");
              return response.arrayBuffer();
            })
            .then((buffer) => {
              const base64Flag = 'data:image/jpeg;base64,';
              const imageStr = arrayBufferToBase64(buffer);
              fetchedImages.push(base64Flag + imageStr);
            })
            .catch((error) => {
              console.error('Error fetching the image:', error);
            });
        }
        setImageSrc([...fetchedImages]);

        localStorage.setItem("images", JSON.stringify(fetchedImages));
      }
    };
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const [showCoursePage, setShowCoursePage] = useState(false);

  const handleButtonClick = () => {
    if (disabled) {
      return;
    }

    setShowCoursePage(true);
  };

  const [swiperParams, setSwiperParams] = useState({
    spaceBetween: 30,
    slidesPerView: 3,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      let slidesPerView = 3;
      let spaceBetween = 30;

      if (screenWidth < 600) {
        slidesPerView = 1;
        spaceBetween = 4;
      } else if (screenWidth >= 601 && screenWidth < 1024) {
        slidesPerView = 3;
        spaceBetween = 7;
      } else {
        slidesPerView = 3;
        spaceBetween = 10;
      }
      setSwiperParams({ spaceBetween, slidesPerView });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (showCoursePage) {
      window.scrollTo(0, 0);
    }
  }, [showCoursePage]);

  const [active, setActive] = useState(0);

  return (
    <>
      {showCoursePage ? null : <Courses />}
      {showCoursePage ? (
        <Coursepage onGoBack={() => setShowCoursePage(false)} />
      ) : (
        <div ref={targetRef} className={`cls ${disabled ? 'disabled' : ''}`}>
          <div className='cour' id='Vital2'>
            <h1>Courses </h1>
          </div>
          <div className="max">
            <Swiper
              spaceBetween={swiperParams.spaceBetween}
              slidesPerView={swiperParams.slidesPerView}
              onSlideChange={(cur) => setActive(cur.realIndex)}
              loop={true}
              speed={850}
              autoplay={{
                delay: 2000,
              }}
              modules={[Autoplay]}
            >
              {data.map((course, i) => (
                <SwiperSlide key={i}>
                  <div className="cd" onClick={() => handleEnrollNowClick(course, imageSrc[i])}>
                    <div className="card">
                      <div className="imges">
                        <img key={i} src={imageSrc[i]} alt={`Image ${i}`} />
                      </div>
                      <div className="card_cont_n">
                        <h2 className='card-title'>{course?.title || 'N/A'}</h2>
                        <div className='cd-ctnt'>
                          <h6>Duration: {course?.duration || 'N/A'}</h6>
                          <h6>Lectures: {course?.lectures || 'N/A'}</h6>
                          <h6>Description:{truncateDescription(course?.description || 'N/A', 6)}</h6>
                        </div>
                        <div className='bottom-cd'>
                          <h4 className='price'>
                            {course?.price ? `₹${course.price}/-` : 'Price not available'}
                          </h4>
                          <Link to='/coursepage' onClick={() => handleEnrollNowClick(course, imageSrc[i])}>
                            <button className="button btn-1">Enroll Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default Cardslider;
