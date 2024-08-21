// import React from 'react'
// import {  
//     Button,
//     Stack,
// } from '@mui/material'
// import Title from './Title'
// import Paragraph from './Paragraph'
// import { Link } from 'react-router-dom'

// const GetInTouch = () => {

//     return (
//         <Stack 
//         component='section'
//         direction="column"
//         justifyContent= 'center'
//         alignItems='center'
//         sx={{
//             py: 10,
//             mx: 6,
//         }}
//         >
//             <Title 
//             text={
//                 'Contact us to buy property'
//                 } 
//             textAlign={'center'}
//             />
            
//             <Paragraph 
//             text={
//                 'It is our commitment to ensure a professional and enjoyable \
//                 new home buying experience for you. \
//                 If you want to get a home to start living as a family in an \
//                 area that you love click the button below.'
//             }
//             maxWidth = {'sm'}
//             mx={0}
//             textAlign={'center'}
//             />
//             <Button component={Link} 
//             to={'/contact'}
//             variant="contained" 
//             type="submit"
//             size="medium"
//             sx= {{ 
//                 fontSize: '0.9rem',
//                 textTransform: 'capitalize', 
//                 py: 2,
//                 px: 4,
//                 mt: 3, 
//                 mb: 2,
//                 borderRadius: 0,
//                 backgroundColor: '#14192d',
//                 "&:hover": {
//                     backgroundColor: '#1e2a5a',
//                 }
//             }}
//             >
//                 get in touch
//             </Button>
 
//         </Stack>
//     )
// }

// export default GetInTouch;

import React, { useState, useRef, useEffect } from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Title from './Title';
import Paragraph from './Paragraph';

const GetInTouch = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Stack
      component={motion.section} // Use motion.section for animation
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
      ref={sectionRef} // Attach the ref
      initial={{ y: -100, opacity: 0 }} // Start off-screen and hidden
      animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }} // Animate based on visibility
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 100,
        duration: 1,
       repeat: Infinity
      }}
    >
      <Title
        text={'Contact us to buy property'}
        textAlign={'center'}
      />

      <Paragraph
        text={
          'It is our commitment to ensure a professional and enjoyable \
          new home buying experience for you. \
          If you want to get a home to start living as a family in an \
          area that you love click the button below.'
        }
        maxWidth={'sm'}
        mx={0}
        textAlign={'center'}
      />
      <Button
        component={Link}
        to={'/contact'}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: '0.9rem',
          textTransform: 'capitalize',
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0,
          backgroundColor: '#14192d',
          "&:hover": {
            backgroundColor: '#1e2a5a',
          }
        }}
      >
        Get in Touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
