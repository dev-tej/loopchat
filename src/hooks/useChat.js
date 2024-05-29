import { useState, useEffect } from "react";
import firebase from "firebase/app";
import { firestore, auth } from "services/firebase";

const useChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("messages")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messages);
      });

    return unsubscribe;
  }, []);

  const sendMessage = async (text) => {
    const { uid, photoURL } = auth.currentUser;

    await firestore.collection("messages").add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
