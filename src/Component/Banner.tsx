import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
} from "@chakra-ui/react";
import bannerIMG from '../Asset/Banner1.jpg';

type Props = {};
function Banner({}: Props) {    
    return (
      <>
        <Box
            maxW={"container.2xl"}
            h='calc(101vh)'
            bgImage={bannerIMG}
            bgAttachment={'center'}
            bgPosition={'center'}
            height="300px"
            display="flex"
            
            
        >  
        </Box>      
    </>
    );

              
}
export default Banner;