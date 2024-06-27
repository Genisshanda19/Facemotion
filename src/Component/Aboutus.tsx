import { ReactNode, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Button,
  Heading,
  SimpleGrid, 
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Box,
  Highlight 


} from "@chakra-ui/react";
import Anggry from '../Asset/Anggry.jpg';
import Happy from '../Asset/Happy.jpg';
import Sad from'../Asset/sad.png';
import Neutral from '../Asset/Netral.png';
import Disgust from '../Asset/Jijik.png';
import Supprise from'../Asset/Kaget.jpg';
import Fear from'../Asset/Takut.jpg';
type Props = {};
function Aboutus({}: Props) {    
    const navigate = useNavigate(); 

  
  const goBackToHome = () => {
    navigate("/Home"); 
};

    return (
      <>

        <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                <Card>
                    <br></br>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    src={Anggry}
                    alt='Green double couch with wooden legs'
                    borderRadius='md'
                    width='80px'
                    height='auto'
                />
                </Box>
                     <br></br>
                    <CardHeader>
                    <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                    <Highlight
                            query='Marah'
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        > Marah
                    </Highlight>
                    </Heading>

                    </CardHeader>
                    <CardBody>
                    <Text style={{ textAlign: 'justify' , fontFamily:'Garamond', fontSize:'18px'  }}> Marah adalah reaksi emosional yang timbul karena sejumlah situasi yang merangsang, termasuk ancaman, agresi lahiriyah, pengekangan diri, serangan lisan,
                         kekecewaan, atau frustasi.</Text>
                    </CardBody>
                    
                </Card>


                <Card>
                <br></br>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Happy}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        width='110px'
                        height='auto'
                    />
                    </Box>
                    <br></br>

                    <CardHeader>
                    <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                    <Highlight
                            query='Bahagia'
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.100' }}
                        > Bahagia
                    </Highlight>
                    </Heading>

                    </CardHeader>
                    <CardBody>
                    <Text style={{ textAlign: 'justify' , fontFamily:'Garamond', fontSize:'18px'  }}>Bahagia adalah kondisi psikologis yang positif, 
                    yang ditandai oleh tingginya kepuasan terhadap masa lalu, tingginya tingkat emosi positif, 
                    dan rendahnya tingkat emosi negatif. </Text>
                    </CardBody>
                    
                </Card>


                <Card>
                <br></br>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Sad}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        width='70px'
                        height='auto'
                    />
                    </Box>
                    <br></br>

                    <CardHeader>
                    <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                    <Highlight
                            query='Sedih'
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                        > Sedih
                    </Highlight>
                    </Heading>
                    </CardHeader>

                    <CardBody>
                    <Text style={{ textAlign: 'justify', fontFamily:'Garamond' , fontSize:'18px'  }} >Sedih adalah emosi yang tidak menyenangkan yang dapat memengaruhi 
                        kesehatan jiwa, raga, dan psikis seseorang. </Text>
                    </CardBody>
                    
                </Card>

                <Card>
                <br></br>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Fear}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        width='100px'
                        height='auto'
                    />
                    </Box>
                    <br></br>

                    <CardHeader>
                    <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                    <Highlight
                            query='Takut'
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'gray.200' }}
                        > Takut
                    </Highlight>
                    </Heading>
                    </CardHeader>

                    <CardBody>
                    <Text style={{ textAlign: 'justify' , fontFamily:'Garamond' , fontSize:'18px'  }}>Takut adalah kondisi emosional yang bersifat sementara pada individu, 
                        yang muncul dengan perasaan yang tegang serta rasa khawatir yang bersifat sadar dan subjektif.</Text>
                    </CardBody>
                    
                    </Card>
                    <Card>


                    <br></br>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Supprise}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        width='120px'
                        height='auto'
                    />
                    </Box>
                        <CardHeader>
                        <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                        <Highlight
                                query='Terkejut'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}
                            > Terkejut
                        </Highlight>
                        </Heading>
                        </CardHeader>

                        <CardBody>
                        <Text style={{ textAlign: 'justify', fontFamily:'Garamond' , fontSize:'18px' }}> Terkejut merupakan emosi singkat dan ditandai dengan respon kejutan fisiologis saat mengalami sesuatu yang tidak terduga.</Text>
                        </CardBody>
                   
                </Card>

                <Card>
                    <br></br>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Neutral}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        width='120px'
                        height='auto'
                    />
                    </Box>

                    <CardHeader>
                    <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                        <Highlight
                                query='Netral'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'lightblue.100' }}
                            > Netral
                        </Highlight>
                        </Heading>
                    </CardHeader>

                    <CardBody>
                    <Text style={{ textAlign: 'justify', fontFamily:'Garamond' , fontSize:'18px'   }}> Netral merupakan emosi yang tidak tidak merasakan apa pun secara khusus 
                    atau perasaan yang tidak dapat direspon dengan emosi. </Text>
                    </CardBody>
                   
                </Card>

                <Card>
                    <br></br>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Disgust}
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        width='120px'
                        height='auto'
                    />
                    </Box>
                    
                    <CardHeader>
                    <Heading size='md'style={{ textAlign: 'center'}} lineHeight='tall'> 
                        <Highlight
                                query='Jijik'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'pink.200' }}
                            > Jijik
                        </Highlight>
                        </Heading>
                    </CardHeader>


                    <CardBody>
                    <Text style={{ textAlign: 'justify', fontFamily:'Garamond', fontSize:'18px' }}> Jijik adalah emosi yang muncul saat kita tidak menyukai aroma, rasa, suara, 
                    atau penampilan dari suatu hal sehingga kita berusaha keras untuk menghindarinya.</Text>
                    </CardBody>
                    
                </Card>

         </SimpleGrid> 

    </>
    );

              
}
export default Aboutus;