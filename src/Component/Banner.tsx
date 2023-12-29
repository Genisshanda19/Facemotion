import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  IconButton,
  Stack,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
  Spacer
} from "@chakra-ui/react";
import { CheckCircleIcon} from '@chakra-ui/icons';
import React from "react";
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