// Frases aleatorias
const box = document.getElementById("phraseBox");

const frases = [
    "Amosh mimirs",
    "Me gustas de gustar",
    "Tepi amo demaciado",
    "Me encantas amorcito",
    "Mi nena mosa",
    "Mi osita bella",
    "GRRRRRRR🐯",
    "Mi pedacito de chicharrón",
    "Quere uno bechito?",
    "Mi tortuga jamás llegará a la luna",
    "Felices 8 meses mi amor",
    "Acepto 💍",
    "Cada vez quepi veo un Snoopy, me acuerdo de ti",
    "Añañaaaaaaa",
    "Mi princesa mosa",
    "Me encantas amor, me encantas",
    "Bésame, bésame",
    "MUUUUUUUUUUAKK (bechito)",
    "WAAAAARRR🐻",
    "Muchísimas gracias amor",
    "Espero tepi guste esta página dedicada para nosotos amor",
    "Mi molacha mosa",
    "Mi niña linda",
    "Tepi mando 1,000 bechtios, atrápalos amor",
    "Quere otro bechito?",
    "Eres mi lugar seguro amor. Me siento muy bien contigo",
    "Jamás me bajdaré del barco",
    "Tupi y yopi 🦆da la vida",
    "TEPI AMO MUUUUUUUUUUUUUUU🐮CHOOO",
    "Yapi añañaste amor? por sipi acaso, ten más añaña bb 🍔🍟",
    "El día de hoy desayunaste amor? 🥐☕ tenga, por sipi acaso",
    "🎫 válido para 1 hora completa de muak muak ",
    "🎫 válido para quepi se me pase cualquier enojo",
    "🎫 válido para arreglar las cosas en ese momento",
    "Amorcish, todas las frases son aleatorias. Sipi tepi salen los boletos, debes mandarme una captura para canjear",
    "🎫 válido para un abacho muy juerte y cálido",
    "TEPI AMO MUCHO MUCHO MUCHO MÁS",
    "Tepi amo con todo mi 🥥razón mi amocito"
];

box.addEventListener("click", () => {
    const random = Math.floor(Math.random() * frases.length);
    box.textContent = frases[random];
});

// Música
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        musicBtn.textContent = "⏸ Pausar";
    } else {
        song.pause();
        musicBtn.textContent = "🎵 Reproducir";
    }
});

// Contador de días desde 4 de abril de 2025
const daysElem = document.getElementById("days");
function updateDays() {
    const startDate = new Date(2025, 3, 4); // Mes 3 = abril (0 indexado)
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    daysElem.textContent = diffDays;
}
updateDays();
setInterval(updateDays, 1000 * 60 * 60); // actualiza cada hora
