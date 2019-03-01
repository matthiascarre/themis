# -*- coding: utf-8 -*-
"""
Created on Tue Feb 12 16:12:09 2019

@author: Matthias CARRE
"""

import speech_recognition as sr

import requests


r = sr.Recognizer()
mic = sr.Microphone()

with mic as source:
    r.adjust_for_ambient_noise(source)  # listen for 1 second to calibrate the energy threshold for ambient noise levels
    print("Say something!")
    audio = r.listen(source)    
    print("Finished listening")


try:
    reponse=r.recognize_google(audio, language='fr-FR', show_all=False)
    print('Transcription GOOGLE: ' + reponse)
except LookupError:
    print('Cannot understand audio!')
   
    
    
    


headers = {
    # Request headers
    'Ocp-Apim-Subscription-Key': '22a90d6588bb497a94c185f677c34236',
}
params ={
    # Query parameter
    'q': reponse,
    # Optional request parameters, set to default values
    'timezoneOffset': '0',
    'verbose': 'true',
    'spellCheck': 'false',
    'staging': 'false',
}
try:
    r = requests.get('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4423cbf4-70cc-4b45-bd88-ffcfb8c600a8?verbose=true&timezoneOffset=-360&subscription-key=22a90d6588bb497a94c185f677c34236&q=Ramene moi a la page acceuil',headers=headers, params=params)
    print(r.json())
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))
#https://<region>.api.cognitive.microsoft.com/luis/v2.0/apps/<appID>?subscription-key=<YOUR-KEY>&q=<user-utterance>