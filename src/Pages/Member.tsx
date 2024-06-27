import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Box, Flex,Text, Heading,Card, CardBody, CardHeader, IconButton,


} from '@chakra-ui/react';

import { ArrowBackIcon } from '@chakra-ui/icons';
import Pricing from '../Component/pricing';

type Props = {};
function Member({}: Props) {    
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate('/Home'); 
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
           
                <Pricing></Pricing>

             <br></br>
             <br></br>
            </Flex>
        </Box>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
        <Box>
        <Card>
        <CardHeader>
            <Heading size='md'>Catatan:</Heading>
        </CardHeader>
        <CardBody>
            <Text style={{fontFamily: 'Garamond', fontSize: 20 }}>Mohon maaf atas ketidaknyamanannya. Saat ini, paket yang tersedia adalah "Matahari".  Untuk sementara waktu, Dikarena Face Motions saat ini masih dalam tahap pengembangan, aplikasi ini hanya dapat mengakses deteksi emosi melalui ekspresi wajah, 
            Kami berusaha meningkatkan fungsionalitas aplikasi ini agar dapat memberikan layanan yang lebih komprehensif di masa mendatang.
            Terima kasih atas pengertian dan dukungan Anda. <br></br> <br></br> -Shanda </Text>
        </CardBody>
        </Card>

        </Box>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </>
    );

              
}
export default Member;