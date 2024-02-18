import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
 
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp(
    { "projectId": "angauth-e501b", 
      "appId": "1:328130651933:web:41c2720ef76c2a4c5223f4", 
      "storageBucket": "angauth-e501b.appspot.com", 
      "apiKey": "AIzaSyAXY4xn6eyNAvoBWMSZH4wTpyBL0a-rIZ8", 
      "authDomain": "angauth-e501b.firebaseapp.com", 
      "messagingSenderId": "328130651933" 
    })
  )), importProvidersFrom(provideAuth(() => getAuth()))]
};
