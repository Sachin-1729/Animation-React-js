// import React from 'react'
// import { 
//     Box,
//     Grid,
//     styled,
//     Typography,
// } from '@mui/material'
// import Title from './Title'
// // img
// import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
// import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


// const GetStarted = () => {

//     const CustomGridItem = styled(Grid) ({
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//     })
    
//     const CustomTypography = styled(Typography) ({
//         fontSize: '1.1rem',
//         textAlign: 'start',
//         lineHeight: '1.5',
//         color: '#515151',
//         marginTop: '1.5rem',
//     })

//     return (
         
        
//         <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
//         sx={{
//             py: 10,
//             px: 2,
             
//         }}
//         >
//             <CustomGridItem item xs={12} sm={8} md={6} 
//             component = 'section'
           
//             >
//                 <Box component='article'
//                 sx={{
//                     px: 4,
//                 }}
//                 >
//                     <Title
//                     text={
//                         'We make it easy for tenants and landlords'
//                     }
//                     textAlign={'start'}
//                     />
//                     <CustomTypography>
//                         Listing are updated continuously so you<br />
//                         won't miss out on homes that just hit<br />
//                         market until you find your perfect home.
//                     </CustomTypography> 
//                 </Box>

//             </CustomGridItem>
            
//             <Grid item xs={12} sm={4} md={6}>
//                 <img src={imgDetail} alt="" 
//                 style={{
//                     width: '100%',
//                 }}
//                 />
//             </Grid>

//             <Grid item xs={12} sm={4} md={6}
//             sx={{
//                 order: {xs: 4, sm: 4, md: 3}
//             }}
//             >
//                 <img src={imgDetail2} alt="" 
//                 style={{ 
//                     width: "100%",
//                 }}
//                 />
//             </Grid>

//             <CustomGridItem item xs={12} sm={8} md={6}
//             sx={{
//                 order: {xs: 3, sm: 3, md: 4}
//             }}
//             >
//                 <Box component='article'
//                 sx={{
//                     px: 4,
//                 }}
//                 >
//                     <Title
//                     text={
//                         'Match with the best agent'
                        
//                     }
//                     textAlign={'start'}
//                     />
//                     <CustomTypography>
//                         Our verified partner Agents are local experts who<br /> 
//                         earn an average of 4.8/5 stars from buyers and sellers.
//                     </CustomTypography>
//                 </Box>
//             </CustomGridItem>
//         </Grid>
//     )
// }

// export default GetStarted;
import React, { useState, useEffect } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import Title from './Title';
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';
import { motion } from 'framer-motion';

const GetStarted = () => {
    // State to track scroll position
    const [scrollY, setScrollY] = useState(0);

    // Update scroll position on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if an element is in view based on scroll position
    const isInView = (offset) => scrollY > offset;

    return (
        <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 0 }}
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} component='section'>
                <Box component='article' sx={{ px: 4 }}>
                    <Title
                        text={'We make it easy for tenants and landlords'}
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        Listings are updated continuously so you<br />
                        won't miss out on homes that just hit<br />
                        the market until you find your perfect home.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            {/* Animated Image 1 */}
            <Grid item xs={12} sm={4} md={6}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}  // Start from left
                    animate={{ 
                        opacity: isInView(300) ? 1 : 0, 
                        x: isInView(300) ? 0 : -100 
                    }}  // Animate to original position
                    transition={{ duration: 3  , repeat: Infinity}}
                >
                    <img
                        src={imgDetail}
                        alt="Detail 1"
                        style={{
                            width: '100%',
                        }}
                    />
                </motion.div>
            </Grid>

            {/* Animated Image 2 */}
            <Grid
                item xs={12} sm={4} md={6}
                sx={{
                    order: { xs: 4, sm: 4, md: 3 }
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 100 }}  // Start from right
                    animate={{ 
                        opacity: isInView(500) ? 1 : 0, 
                        x: isInView(500) ? 0 : 100 
                    }}  // Animate to original position
                    transition={{ duration: 3  , repeat: Infinity}}
                >
                    <img
                        src={imgDetail2}
                        alt="Detail 2"
                        style={{
                            width: '100%',
                        }}
                    />
                </motion.div>
            </Grid>

            <CustomGridItem
                item xs={12} sm={8} md={6}
                sx={{
                    order: { xs: 3, sm: 3, md: 4 }
                }}
            >
                <Box component='article' sx={{ px: 4 }}>
                    <Title 
                        text={'Match with the best agent'}
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        Our verified partner Agents are local experts who<br />
                        earn an average of 4.8/5 stars from buyers and sellers.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    );
}

// Styled components
const CustomGridItem = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

const CustomTypography = styled(Typography)({
    fontSize: '1.1rem',
    textAlign: 'start',
    lineHeight: '1.5',
    color: '#515151',
    marginTop: '1.5rem',
});

export default GetStarted;

