import React from 'react';
import { useNavigate } from "react-router-dom";
import { 
    Box, Flex, Heading,Text,IconButton,





} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Aboutus from '../Component/Aboutus';
type Props = {};
function About({}: Props) {  
  
  const navigate = useNavigate(); 

  
  const handleBackToHome = () => {
    navigate("/Home"); 
};
    return (
      <>

            <IconButton
                        icon={<ArrowBackIcon />}
                        aria-label="Kembali ke Home"
                        onClick={handleBackToHome}
                        />
                        
                    <br></br>
                    <br></br>


        <Box 
            maxW={"container.2xl"}
            bgGradient='linear(to-l, #E0FFFF, #F5F5DC, #E6E6FA)'
            borderRadius={50}
        >
             <br></br>
             <br></br>

         <Flex justify={'center'} align={'center'} direction={'column'}>
            <Heading  bgGradient='linear(to-l, #800000, #84DCAE, #B284DC, #FF6347)' bgClip='text' fontSize='6xl'fontWeight='extrabold'>
                 <h1> 7 Ekspresi Emosi Manusia</h1>
            </Heading>
            <br></br>
            <br></br>
             <Aboutus></Aboutus>
             <br></br>
             <br></br>

            </Flex>
        </Box>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </>
    );

              
}
export default About;