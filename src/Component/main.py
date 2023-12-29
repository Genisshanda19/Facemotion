from flask import Flask, render_template, Response
import cv2
import numpy as np
from keras.models import model_from_json
from keras.preprocessing import image

app = Flask(__name__)


#load model
model = model_from_json(open("C:/Users/Lenovo/Desktop/frontend/faceemotion/src/Detection/model.json", "r").read())

#load weights
model.load_weights('C:/Users/Lenovo/Desktop/frontend/faceemotion/src/Detection/model.h5')


face_haar_cascade = cv2.CascadeClassifier('C:/Users/Lenovo/Desktop/frontend/faceemotion/src/Detection/haarcascade_frontalface_default.xml')


camera = cv2.VideoCapture(0)

def gen_frames():                                       
    while True:
        # Capture frame by frame
        success, frame = camera.read()
        if not success:
            break
        else:
            gray_img= cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)  
        
            faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)  
            
        
            for (x,y,w,h) in faces_detected:
                
                cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),thickness=7)  
                roi_gray=gray_img[y:y+w,x:x+h]           
                roi_gray=cv2.resize(roi_gray,(48,48))  
                img_pixels = image.img_to_array(roi_gray)  
                img_pixels = np.expand_dims(img_pixels, axis = 0)  
                img_pixels /= 255  
        
                predictions = model.predict(img_pixels)  
        
                max_index = np.argmax(predictions[0])
                emotions = ('Marah', 'Jijik', 'Takut', 'Bahagia', 'Sedih', 'Terkejut', 'netral')
                predicted_emotion = emotions[max_index]

                cv2.putText(frame, f"Emotion: {predicted_emotion}", (int(x), int(y)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, ), 2)

                    
            resized_img = cv2.resize(frame, (1000, 700))  
                        
            ret, buffer = cv2.imencode('.jpg', frame)
                        
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  


@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/Detection')
def index():
    return render_template('Detection.tsx')


if __name__ == '__main__':
    app.run(debug=True)
	
	