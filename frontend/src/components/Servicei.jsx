import React, { useState,useRef,useEffect } from 'react'
import './services.css'
import { motion,useScroll } from 'framer-motion'
import Servicecard from './Servicecard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Car from './Car.jsx';
import { backarrow, frontarrow } from '../assets/Assets.jsx';


const Servicei = () => {
  // const[width,setWidth]=useState(300)
 
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVerySmallScreen,setIsVerySmallScreen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",height:'250px',width:'250px',zIndex:2 }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",height:'250px',width:'250px' }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    // Function to handle media query change
    const handleResize = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Initial check and event listener
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsSmallScreen(mediaQuery.matches);
    const mediaquery2 = window.matchMedia('(max-width: 385px)');
    setIsVerySmallScreen(mediaquery2.matches);
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);
  
 

  const box = document.querySelector('.service_cards')
  console.log(box)
  console.log(isSmallScreen)
  console.log(isVerySmallScreen)
  
    
    const handleNext = () => {
        let width = 330;
        if(isSmallScreen && !isVerySmallScreen){
          width=ref.current.clientWidth 
          console.log(width)
        }
        else if(isVerySmallScreen){
            width=ref.current.clientWidth
            console.log(width)
        }
        ref.current.scrollLeft = ref.current.scrollLeft - width;
    };

  
    
    const handlePrev = () => {

        let width = 330;
        if(isSmallScreen && !isVerySmallScreen){
          width=ref.current.clientWidth 
        }
        else if(isVerySmallScreen){
          width=ref.current.clientWidth 
      }
          ref.current.scrollLeft = ref.current.scrollLeft + width;
    };


  return (
   
    <>
    <div className='services_container' id='about'>
        <div className="service_text">
        
              
                <motion.div className="services"  whileInView={{x :[-70,0],opacity : [0,0.5,1]}} transition={{duration : 0.4}} >services</motion.div>
                <motion.div className="i_provide_a_wide_range" whileInView={{x :[-50,0],opacity : [0,0.5,1]}} transition={{duration : 0.7}}  >
                 I provide a wide range of digital services
            </motion.div>
            <div className="scrollcontrol">
            <div className="ar" onClick={handleNext} ><img src={backarrow} alt="" /></div>
            <div className="scrollout">
            <motion.div className="scrollline" style={{scaleX:scrollXProgress}}> </motion.div>
            </div>
            <div className="ar1" onClick={handlePrev}><img src={frontarrow} alt="" /></div>
            </div> 
        </div>

       
       
        
        <div className="service_cards" ref={ref} id='service_cards_section'  >
        
           
           <Servicecard/>
           <Servicecard/>
           <Servicecard/>
           <Servicecard/>
           <Servicecard/>
           <Servicecard/>
         
       
           

        </div> 
        
        
        
        
    </div>
   
    </>
  )
}

export default Servicei