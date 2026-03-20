// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5o7SGaQySOU9l-9TDIMLmTPgVmSWxxgI",
  authDomain: "mushrooms-f524a.firebaseapp.com",
  projectId: "mushrooms-f524a",
  storageBucket: "mushrooms-f524a.firebasestorage.app",
  messagingSenderId: "630400770954",
  appId: "1:630400770954:web:ba9f0a11a7163364a4de73",
  measurementId: "G-ZCLN75C2MF"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Глобален масив, достъпен за app.js
window.mushrooms = [];

// Зареждане от Firestore
function loadMushroomsFromDB() {
  db.collection("mushrooms").get().then(snapshot => {
    window.mushrooms = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Извикваме твоята функция от app.js
    if (typeof renderGallery === "function") {
      renderGallery(window.mushrooms);
    }
  });
}

loadMushroomsFromDB();
