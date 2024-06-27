import { ButtonGroup, Box, IconButton, Stack, Text , Image, Flex} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from'../Asset/Logo2.png';


type Props = {};
function Footer({}: Props) {    
     return(
        <>
            <Box as="footer" role="contentinfo" py={{ base: '12', md: '16' }} padding='20px'
                maxW={"container.2xl"}
                bgColor='#F8F8FF'>
                <Flex justify="space-between" direction="row" align="left">
                    <Image src={Logo}  alt='Face Motions'/>
                    
                    <ButtonGroup variant="tertiary">
                    <IconButton as="a" href="https://www.instagram.com/genisshanda?igsh=bmpnbTR1OXNnMWtz&utm_source=qr" aria-label="Instagram" icon={<FaInstagram  />} />
                    <IconButton as="a" href="https://github.com/Genisshanda19" aria-label="GitHub" icon={<FaGithub />} />
                    <IconButton as="a" href="https://www.linkedin.com/in/shanda-genis/" aria-label="Linkedin" icon={<FaLinkedin />} />
                    </ButtonGroup>
                </Flex>

                    <Text fontSize="sm" color="fg.subtle">
                        &copy; {new Date().getFullYear()} Shand, V.1 . All rights reserved.
                    </Text>
      </Box>
      </>
    );

}
export default Footer;