import { loadChibi } from "./chibi.js";

Telegram.WebApp.ready();

document.getElementById("start-btn").addEventListener("click", () => {
  Telegram.WebApp.showAlert("Ku Tí ! Chào bé mình chơi với nào"a);
});

loadChibi();