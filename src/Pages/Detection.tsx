import React from 'react';
import { Button, Text, Heading, Box, Card, SimpleGrid, CardHeader, CardFooter, Image, Stack, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Foto from '../Asset/bannerDetec.png';




import { ArrowBackIcon } from '@chakra-ui/icons';


type Props = {};
function Detection({ }: Props) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.location.href = "http://127.0.0.1:5000/";
  };

  const handleButtonReportClick = () => {
    window.location.href = "//127.0.0.1:5000/recorded_emotions";
  };

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



    <Box maxW={"container.2xl"}>

      <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(800px, 5fr))'>

        <Card bgGradient='linear(to-l, #FFFFFF,#FFFFFF, #F9EBEA, #E0FFFF,)'>
          <Stack mt='6' spacing='3'>
            <CardHeader>
              <Heading bgGradient='linear(to-l, #00008B, #FA8072, #4169E1, #FA8072, #8B0000)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>
                Laporan Deteksi
              </Heading>
            </CardHeader>
            <CardFooter>
              <Button onClick={handleButtonReportClick} style={{ color: 'blue', fontSize: '120%', cursor: 'pointer' }}>
                Lihat Report
              </Button>
            </CardFooter>
            <Box position='relative'>
              <br></br>
              <Image
                
                boxSize='160px'
                src='https://cdn.dribbble.com/users/1079204/screenshots/15845625/media/a8f2ea854fc402d02f54c7fb35b83c93.gif'
                position='absolute'
                right={40}
                bottom={20}

              />
            </Box>
          </Stack>
        </Card>

        <br></br>
        <br></br>

        <Card bgGradient='linear(to-l, #FFFFFF,#FFFFFF, #F5F5DC, #E6E6FA)'>
          <Stack mt='6' spacing='3'>
            <CardHeader>
              <Heading bgGradient='linear(to-l, #008080, #E9967A, #B284DC)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>
                Deteksi Emosi
              </Heading>
            </CardHeader>
            <CardFooter>
              <Button onClick={handleButtonClick} style={{ color: 'blue', fontSize: '120%', cursor: 'pointer' }}>
                Mulai Deteksi
              </Button>
            </CardFooter>
            <Box position='relative'>
              <br></br>
              <Image
                
                boxSize='160px'
                src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*11IZu1gHHnpYtHnns6ddew.gif'
                position='absolute'
                right={40}
                bottom={20}

              />
            </Box>
          </Stack>
        </Card>

      </SimpleGrid>

      <br></br>
      <br></br>

    </Box>
    </>
  );
  
}

export default Detection;
