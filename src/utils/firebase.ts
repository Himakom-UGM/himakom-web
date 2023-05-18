import { initializeApp } from 'firebase/app';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';
import { getFirestore, collection, getDocs, Firestore, addDoc } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



export async function getAspirations(db: Firestore) {
    try {
      const aspirationCol = collection(db, 'aspirations');
      const aspirationSnapshot = await getDocs(aspirationCol);
      const aspirationList = aspirationSnapshot.docs.map(doc => doc.data());
      const sortedList = aspirationList.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      return sortedList;
    } catch (error) {
      console.error("Error getting aspirations:", error);
      throw error;
    }
  }
  

export async function writeAspiration(db:Firestore, {
    subject,
    message,
    from,
    to,
}: {
    subject: string,
    message: string,
    from: string,
    to: string,
}) {
    // write aspirations to firestore
    
    const aspirationCol = collection(db, 'aspirations');
    const newAspiration = {
        subject: subject,
        message: message,
        from: from,
        to: to,
        createdAt: Date.now(),
    };
    await addDoc(aspirationCol, newAspiration);

}