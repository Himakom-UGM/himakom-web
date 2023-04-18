import { initializeApp } from 'firebase/app';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';
import { getFirestore, collection, getDocs, Firestore, addDoc } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyAwMD2d94qz1EABrqjx90YtxqYUqD6sKkY",
    authDomain: "web-himakom-dfde2.firebaseapp.com",
    projectId: "web-himakom-dfde2",
    storageBucket: "web-himakom-dfde2.appspot.com",
    messagingSenderId: "129993327833",
    appId: "1:129993327833:web:192143ef190e57b299aac8"
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
        createdAt: new Date(),
    };
    await addDoc(aspirationCol, newAspiration);

}