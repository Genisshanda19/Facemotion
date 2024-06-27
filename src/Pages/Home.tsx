import { ReactNode, useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import 
{
  Box,
  Flex,
  Container,
  Text,
  Stack,
  Heading,
  Image,
  Spacer,
  Center,
  Button,
  Card, 
  CardBody, 
  CardFooter,

} from "@chakra-ui/react";
import Logo from "../Asset/logo.png";
import { CheckCircleIcon} from '@chakra-ui/icons'
import Banner from '../Component/Banner';
type Props = {};
function Home({}: Props) {    
    return (
      <>
        <Box 
            maxW={"container.2xl"}
        >
            <Banner></Banner>

            <Spacer>
            </Spacer>

            <Flex justify={'center'} align={'center'} direction={'column'}>
            <br></br>

            <Heading  bgGradient='linear(to-l, #9370DB, #191970, #DDA0DD, #ADD8E6)' bgClip='text' fontSize='6xl'fontWeight='extrabold'>
                 <h1> Selamat Datang Di Face Motions</h1>
            </Heading>
            <br></br>
            
            <Text style={{ textAlign: 'center' , fontFamily: 'Garamond', fontSize: 20 }}> Face Motion adalah aplikasi yang mampu mendeteksi ekspresi wajah. Face Motion dapat mengenali
                 berbagai macam ekspresi emosi, seperti Marah, Sedih, Bahagia, Netral, Jijik, Takut, dan Terkejut. 
                 Face Motion berkomitmen untuk memberikan pengalaman yang luar biasa dalam menggali lebih dalam tentang dunia ekspresi wajah. 
                 Selamat menikmati perjalanan emosional bersama Face Motion
            </Text>

                 <br></br>
                 <br></br>
            
                 <Link to="/Member">
                <Box
                    as="button"
                    p={4}
                    color="Black"
                    fontWeight="bold"
                    borderRadius="md"
                    paddingX="12"
                    minWidth="fit-content"
                    bgGradient="linear(to-tr, teal.100,purple.100, pink.100)"
                    _hover={{
                        bgGradient: "linear(to-r, blue.100, yellow.100, purple.100)",
                    }}
                    >
                    TRY ME
                </Box>
            </Link>
            </Flex>

        </Box>
          <br></br>
          <br></br>
       

      </>
    );

              
}
export default Home;