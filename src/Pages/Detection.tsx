import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const Detection: React.FC = () => {
  return (
    <ChakraProvider>
      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="parallax-content baner-content" id="home">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h3 className="mt-5" style={{ color: 'blue', fontFamily: 'verdana', fontSize: '400%' }}>
                  FACE MOTIONS
                </h3>
                <img src={urlForVideoFeed()} width="100%" alt="Video Feed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

const urlForVideoFeed = () => {
  // Assuming you have a function or variable to generate the video feed URL
  // Replace this with your actual logic
  return 'http://localhost:3000/Detection';
};

export default Detection;