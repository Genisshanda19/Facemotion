import { ReactNode, useState, useMemo, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  Spacer,
  ButtonGroup
} from "@chakra-ui/react";
import Logo2 from "../Asset/Logo2.png";

const activePage = {
    //fontWeight: "500",
    color: 'blue',
    //backgroundColor: bgColor,
    padding:"20px",
    //borderRadius: "1px",
    textDecoration: "none",
    // borderBottom: '0.2em solid #0672cb',
  };

type Props = {};
function Navbar({}: Props) {   
    
    const Pages = useMemo(
        () => [
          {
            path: "/Home",
            text: "Home",
          },
          {
            path: "/Detection",
            text: "Detection",
          },
          {
            path: "/Report",
            text: "Report",
          },
        ],
        []
      );

      const [contoh, setContoh] = useState("Kelinci")

      function loginHandler()
      {
        if(contoh == "Kelinci")
            setContoh("Kucing")
        else
            setContoh("Kelinci")
      }

    return (
      <>
        <Box 
            maxW={"container.2xl"}
            h='calc(101vh)'
        >
           <Flex justify={'center'} align={'center'} px={'4rem'}>
                <Image src={Logo2} alt='Face Motions'/>
                
                <Spacer></Spacer>
                {Pages.map((data, index) => {
                    return (
                      <Box
                        key={index}
                        as={NavLink}
                        to={data.path}
                        _activeLink={activePage}
                        // mt={5}
                      >
                        <Button colorScheme='teal'>{data.text}</Button>
                        
                      </Box>
                      );
                    })}

                <Button onClick={() => (loginHandler())} colorScheme='teal'>login</Button>
                <Text>{contoh}</Text>
                
           </Flex>
        </Box>
      </>
    );
}
export default Navbar;