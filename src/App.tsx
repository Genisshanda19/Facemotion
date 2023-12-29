import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  IconButton,
  Stack,
  Heading,
  useBreakpointValue
} from "@chakra-ui/react";
import './App.css';
import Home from  "../src/Pages/Home";
import Navbar from "../src/Component/Navbar";
import Detection from './Pages/Detection';

export const App = () => (
  <>
    <Router>
      <Frame>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/Home"} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Detection" element={<Detection />} />
        </Routes>
      </Frame>
    </Router>
  </>
);

type FrameProps = {
  children: any;
};

function Frame({ children }: FrameProps) {
  const screenSize = useBreakpointValue(
    {
      base: "container.xl",
      xl: "container.xl",
      "2xl": "container.2xl ",
    },
    {
      fallback: "xl",
    }
  );
  const layoutSize = useBreakpointValue(
    {
      base: "0rem",
      xl: "0rem",
      "2xl": "8rem",
    },
    {
      fallback: "2rem",
    }
  );


  return (
    <>
      <Box bg="#F9F6EE" position="relative" overflow="hidden" display={"block"} minH="100vh">
        <Navbar/>
        <Container
          maxW={screenSize}
          mb={["0rem", "0rem", "0rem", "0rem"]}
          px={["0rem", "0rem", "0rem", "0rem"]}
        >
          <Box minH={"lg"} mx={layoutSize}>
            {children}
          </Box>
        </Container>
      </Box>
      {/* <Footbar screen={screenSize} layoutSize={layoutSize} /> */}
    </>
  );


  
}

export default App;