"use client";
import { Box, Stack, Typography } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// Your Firebase configuration object
/** 
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
*/
// Initialize Firebase
/** 
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
*/
const initialItems = [
  'tomato',
  'potato',
  'onion',
  'garlic',
  'ginger',
  'carrot',
  'lettuce',
  'kale',
  'cucumber'
];

export default function Home() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const updatePantry = async () => {
      const itemsCollection = collection(firestore, 'pantry');
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map(doc => doc.data().name);
      setItems(itemsList);
    };

    updatePantry();
  }, []);

  return (
    <Box 
      width="100vw" 
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box border="1px solid #333">
        <Box
          width="800px" 
          height="100px" 
          bgcolor="#f0f0f0"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" color="#333" textAlign="center">
            Pantry Items
          </Typography>
        </Box>
        <Stack 
          width="800px" 
          height="300px" 
          spacing={2}
          overflow="scroll"
        >
          {items.map((item) => (
            <Box
              key={item}
              width="100%"
              height="100px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#f0f0f0"
            >
              <Typography variant="h3" color="#333" textAlign="center">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}