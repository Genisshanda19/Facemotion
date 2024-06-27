import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  Box,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import './App.css';
import Home from  "../src/Pages/Home";
import Navbar from "../src/Component/Navbar";
import Detection from '../src/Pages/Detection';
import About from './Pages/About';
import Footer from '../src/Component/Footer';
import Pricing from '../src/Component/pricing';
import { ChakraProvider } from '@chakra-ui/react';
import Member from './Pages/Member';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ChakraProvider>
      <Router>
        <Frame isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
          <Routes>
            <Route path="/" element={<Navigate replace to={"/Home"} />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Detection" element={<Detection />} />
            <Route path="/Member" element={<Member />} />
          </Routes>
        </Frame>
      </Router>
    </ChakraProvider>
  );
};

type FrameProps = {
  children: React.ReactNode;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

function Frame({ children, isAuthenticated, setIsAuthenticated }: FrameProps) {
  const screenSize = useBreakpointValue({
    base: "container.xl",
    xl: "container.xl",
    "2xl": "container.2xl",
  }, {
    fallback: "xl",
  });

  const layoutSize = useBreakpointValue({
    base: "0rem",
    xl: "0rem",
    "2xl": "8rem",
  }, {
    fallback: "2rem",
  });

  const canAccessPage = (path: string) => {
    if (isAuthenticated) {
      return true;
    } else {
      return path !== '/About' && path !== '/Detection';
    }
  };

  return (
    <Box bg="#F9F6EE" position="relative" overflow="hidden" display={"block"} minH="100vh">
      <Navbar isAuthenticated={isAuthenticated} canAccessPage={canAccessPage} setIsAuthenticated={setIsAuthenticated} />
      <br />
      <br />
      <Container maxW={screenSize} mb={["0rem", "0rem", "0rem", "0rem"]} px={["0rem", "0rem", "0rem", "0rem"]}>
        <Box minH={"lg"} mx={layoutSize}>
          {React.Children.map(children, (child) => (
            React.cloneElement(child as React.ReactElement, {
              isAuthenticated,
              canAccessPage,
              setIsAuthenticated,
            })
          ))}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
