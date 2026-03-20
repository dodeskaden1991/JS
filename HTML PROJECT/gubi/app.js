// Тези елементи си остават същите
const gallery = document.getElementById("gallery");
const searchBox = document.getElementById("searchBox");
const pagination = document.getElementById("pagination");
const themeToggle = document.getElementById("themeToggle");

let currentPage = 1;
const itemsPerPage = 16;

// Тук ще дойдат данните от Firestore
let filteredList = [];

/* ---------- ГАЛЕРИЯ ---------- */

function renderGallery(list = filteredList) {
    gallery.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    list.slice(start, end).forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h4>${item.name}</h4>
            <img src="${item.img}" alt="${item.name}">
        `;

        card.addEventListener("click", () => togglePopup(item));

        gallery.appendChild(card);
    });

    renderPagination(list.length);
}

/* ---------- ПАГИНАЦИЯ ---------- */

function renderPagination(total) {
    pagination.innerHTML = "";

    const pages = Math.ceil(total / itemsPerPage);

    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
        endPage += (1 - startPage);
        startPage = 1;
    }

    if (endPage > pages) {
        startPage -= (endPage - pages);
        endPage = pages;
    }

    if (startPage < 1) startPage = 1;

    if (startPage > 1) {
        addPageButton(1);
        if (startPage > 2) addDots();
    }

    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i);
    }

    if (endPage < pages) {
        if (endPage < pages - 1) addDots();
        addPageButton(pages);
    }
}

function addPageButton(page) {
    const span = document.createElement("span");
    span.textContent = page;

    if (page === currentPage) span.classList.add("active");

    span.addEventListener("click", () => {
        currentPage = page;
        window.scrollTo({ top: 0, behavior: "smooth" });
        renderGallery(filteredList);
    });

    pagination.appendChild(span);
}

function addDots() {
    const span = document.createElement("span");
    span.textContent = "...";
    pagination.appendChild(span);
}

/* ---------- ТЪРСАЧКА ---------- */

function applySearch() {
    const text = searchBox.value.trim().toLowerCase();
    const regex = new RegExp(text, "i");

    filteredList = window.mushrooms.filter(m =>
        text.length < 3 ? true : regex.test(m.name)
    );

    currentPage = 1;
    renderGallery(filteredList);
}

searchBox.addEventListener("input", applySearch);

/* ---------- POPUP ---------- */

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupName = document.getElementById("popupName");
const popupDesc = document.getElementById("popupDesc");
const popupClose = document.getElementById("popupClose");

let popupOpen = false;

function togglePopup(item) {
    if (popupOpen) {
        popup.classList.add("hidden");
        popupOpen = false;
        return;
    }

    popupImg.src = item.img;
    popupName.textContent = item.name;
    popupDesc.textContent = item.description;

    popup.classList.remove("hidden");
    popupOpen = true;
}

popupClose.addEventListener("click", () => togglePopup());
popup.addEventListener("click", e => {
    if (e.target === popup) togglePopup();
});

/* ---------- TOUCH CLOSE ---------- */

let touchStartY = 0;

popup.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
});

popup.addEventListener("touchmove", (e) => {
    const currentY = e.touches[0].clientY;
    const diff = touchStartY - currentY;

    if (diff > 500) {
        togglePopup();
    }
});

/* ---------- ТЪМНА ТЕМА ---------- */

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ---------- СТАРТ СЛЕД FIRESTORE ---------- */

function startApp() {
    filteredList = window.mushrooms;
    renderGallery(filteredList);
}
