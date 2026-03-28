// 1. Ma'lumotlarni yig'ish (Prompt & Object)
let ism = prompt("Ismingizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");
let id = prompt("Space ID kiriting:");

// 2. Tasodifiy avatar tanlash (Array & Math.random)
const avatarlar = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Buddy"
];
let randomAvatar = avatarlar[Math.floor(Math.random() * avatarlar.length)];

// 3. Foydalanuvchi ob'ektini yaratish
const user = {
    userName: ism || "Noma'lum",
    userAge: yosh || "??",
    userId: id || "0000",
    img: randomAvatar
};

// 4. DOM bilan ishlash (Brauzerga chiqarish)
const container = document.getElementById("displayArea");

if (ism) {
    container.innerHTML = `
        <div class="user-card">
            <img src="${user.img}" alt="Avatar" class="avatar">
            <h2>${user.userName}</h2>
            <p>ID: ${user.userId}</p>
            <p>Yosh: ${user.userAge}</p>
            <span class="status">Faol (Active)</span>
        </div>
    `;
    console.log("Muvaffaqiyatli yakunlandi, shef!", user);
} else {
    alert("Shef, ism kiritilmagani uchun karta yaratilmadi.");
}