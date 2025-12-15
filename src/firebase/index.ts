'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, AppCheck } from 'firebase/app-check';

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  if (getApps().length) {
    return getSdks(getApp());
  }

  // When working locally, we must initialize with the config object.
  // In a deployed App Hosting environment, initializeApp() would be called without args.
  const firebaseApp = initializeApp(firebaseConfig);
  
  return getSdks(firebaseApp);
}

export function getSdks(firebaseApp: FirebaseApp) {
  let appCheck: AppCheck | undefined;
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_KEY) {
    appCheck = initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaEnterpriseProvider(
        process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_KEY as string
      ),
      isTokenAutoRefreshEnabled: true,
    });
  }

  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp),
    appCheck,
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
