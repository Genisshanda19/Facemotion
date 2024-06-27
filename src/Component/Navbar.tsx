
import React, { useMemo, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";
import Logo2 from "../Asset/Logo2.png";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

type GoogleOAuthResponse = {
  accessToken: string;
  idToken: string;
};

const activePage = {
  color: 'blue',
  padding: "20px",
  textDecoration: "none",
};

const Pages = [
  {
    path: "/Home",
    text: "Home",
  },
  {
    path: "/About",
    text: "About",
  },
  {
    path: "/Detection",
    text: "Detection",
  },
];

type NavbarProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  canAccessPage: (path: string) => boolean;
};

function Navbar({ isAuthenticated, setIsAuthenticated, canAccessPage }: NavbarProps) {
  const [logoutTimeout, setLogoutTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const timeoutId = setTimeout(() => {
        setIsAuthenticated(false);
        setLogoutTimeout(null);

        const currentPath = window.location.pathname;
        if (currentPath === "/About" || currentPath === "/Detection" || currentPath === "/Member") {
          navigate("/Home");
        }
      }, 30 * 60 * 1000);

      setLogoutTimeout(timeoutId);
    } else {
      if (logoutTimeout) {
        clearTimeout(logoutTimeout);
        setLogoutTimeout(null);
        navigate("/Home");
      }
    }

    return () => {
      if (logoutTimeout) {
        clearTimeout(logoutTimeout);
      }
    };
  }, [isAuthenticated, setIsAuthenticated, logoutTimeout, navigate]);

  const handleLoginSuccess = (credentialResponse: any) => {
    const googleOAuthResponse: GoogleOAuthResponse = {
      accessToken: credentialResponse.accessToken,
      idToken: credentialResponse.idToken,
    };

    console.log(googleOAuthResponse);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Box maxW={"container.2xl"}>
        <Flex justify={"center"} align={"center"} px={"4rem"}>
          <Image src={Logo2} alt='Face Motions' />
          <Spacer />
          {Pages.map((data, index) => (
            (isAuthenticated || (data.path !== "/About" && data.path !== "/Detection" && data.path !== "/Member" )) && (
              <Box
                key={index}
                as={NavLink}
                to={data.path}
                _activeLink={activePage}
              >
                <Button
                  bgGradient="linear(to-r, purple.100, blue.100, yellow.100)"
                  disabled={!isAuthenticated && !canAccessPage(data.path)}
                >
                  {data.text}
                </Button>
              </Box>
            )
          ))}
          
          <GoogleOAuthProvider clientId="28549970024-kehde8mj5r29du135rnaldqds3m14mo2.apps.googleusercontent.com">
            {!isAuthenticated ? (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
            ) : (
              <Button onClick={handleLogout}>
                Logout
              </Button>
              
            )}
          </GoogleOAuthProvider>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
