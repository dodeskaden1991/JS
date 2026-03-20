// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5o7SGaQySOU9l-9TDIMLmTPgVmSWxxgI",
  authDomain: "mushrooms-f524a.firebaseapp.com",
  projectId: "mushrooms-f524a"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/* ---------- ПРОВЕРКА ЗА ВХОД ---------- */
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "admin.html";
  } else {
    loadMushrooms();
  }
});

/* ---------- ИЗХОД ---------- */
document.getElementById("logoutBtn").onclick = () => {
  auth.signOut().then(() => window.location.href = "admin.html");
};

/* ---------- ЗАРЕЖДАНЕ ---------- */
let allMushrooms = [];

function loadMushrooms() {
  db.collection("mushrooms").get().then(snapshot => {
    allMushrooms = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    renderList(allMushrooms);
  });
}

/* ---------- РЕНДЕРИРАНЕ НА СПИСЪКА ---------- */
function renderList(list) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  list.forEach(m => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <strong>${m.name}</strong>
      <button class="edit-btn" onclick="editMushroom('${m.id}')">Редактирай</button>
      <button class="delete-btn" onclick="deleteMushroom('${m.id}')">Изтрий</button>
    `;

    container.appendChild(div);
  });
}

/* ---------- ТЪРСАЧКА ---------- */
document.getElementById("adminSearch").addEventListener("input", e => {
  const text = e.target.value.toLowerCase();
  const filtered = allMushrooms.filter(m => m.name.toLowerCase().includes(text));
  renderList(filtered);
});

/* ---------- ДОБАВЯНЕ ---------- */
document.getElementById("addBtn").onclick = () => {
  const name = document.getElementById("name").value.trim();
  const img = document.getElementById("img").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!name || !img || !description) {
    alert("Попълни всички полета");
    return;
  }

  db.collection("mushrooms").add({ name, img, description })
    .then(() => {
      alert("Гъбата е добавена!");
      loadMushrooms();
    });
};

/* ---------- ТРИЕНЕ ---------- */
function deleteMushroom(id) {
  db.collection("mushrooms").doc(id).delete().then(loadMushrooms);
}

/* ---------- РЕДАКТИРАНЕ ---------- */
function editMushroom(id) {
  const m = allMushrooms.find(x => x.id === id);

  const newName = prompt("Ново име:", m.name);
  const newImg = prompt("Нов URL на снимка:", m.img);
  const newDesc = prompt("Ново описание:", m.description);

  if (!newName || !newImg || !newDesc) return;

  db.collection("mushrooms").doc(id).update({
    name: newName,
    img: newImg,
    description: newDesc
  }).then(loadMushrooms);
}
