from flask import Flask, render_template, Response
import os
import cv2
import numpy as np
import datetime 
from keras.models import model_from_json
from keras.preprocessing import image
from datetime import datetime

app = Flask(__name__, template_folder='templates')

model_path = r"C:\Users\Lenovo\Desktop\Facemotion\frontend\src\Detection\model.json"
model = model_from_json(open(model_path, "r").read())

model.load_weights('C:\\Users\\Lenovo\\Desktop\\Facemotion\\frontend\\src\\Detection\\model.h5')
face_haar_cascade = cv2.CascadeClassifier('C:\\Users\\Lenovo\\Desktop\\Facemotion\\frontend\\src\\Detection\\haarcascade_frontalface_default.xml')

camera = cv2.VideoCapture(0)


detected_emotions_list = []
recorded_emotions = []

def gen_frames(camera):
    while True:
      
        success, frame = camera.read()
        if not success:
            break
        else:
            gray_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)  
        
            faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)  
            
            for (x, y, w, h) in faces_detected:
                
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), thickness=7)  
                roi_gray = gray_img[y:y + w, x:x + h]
                roi_gray = cv2.resize(roi_gray, (48, 48))  
                img_pixels = image.img_to_array(roi_gray)  
                img_pixels = np.expand_dims(img_pixels, axis=0)  
                img_pixels /= 255  
        
                predictions = model.predict(img_pixels)  
        
                max_index = np.argmax(predictions[0])
                emotions = ('Marah', 'Jijik', 'Takut', 'Bahagia', 'Sedih', 'Terkejut', 'netral')
                predicted_emotion = emotions[max_index]

                cv2.putText(frame, f"Emotion: {predicted_emotion}", (int(x), int(y)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, ), 2)

                timestamp = datetime.now()
                detected_emotions_list.append({'emotion': predicted_emotion, 'timestamp': timestamp})

                if len(detected_emotions_list) > 1:
                    duration = detected_emotions_list[-1]['timestamp'] - detected_emotions_list[-2]['timestamp']
                    detected_emotions_list[-2]['duration'] = duration.total_seconds()

                    if detected_emotions_list[-2]['duration'] != 0:
                         detected_emotions_list[-2]['speed'] = 1 / detected_emotions_list[-2]['duration']
                    else:
                        detected_emotions_list[-2]['speed'] = float('inf') 


            resized_img = cv2.resize(frame, (1000, 700))  
                        
            ret, buffer = cv2.imencode('.jpg', frame)

            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/')
def index():
    return render_template('detection.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(camera), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/recorded_emotions')
def recorded_emotions_page():
    return render_template('recorded_emotions.html', emotions=detected_emotions_list)

if __name__ == '__main__':
    app.run(debug=True)
    camera.release()