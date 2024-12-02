//Variables globales

let timer;
let seconds = 0;
let running = false;
//demarrer le chronomètre
//Cette partie ajoute un événement de clic au bouton "Démarrer". Si le chronomètre ne fonctionne pas déjà, il démarre un intervalle qui appelle la fonction updateTime chaque seconde (1000 millisecondes).

document.getElementById('start').addEventListener('click', function() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
    }
});
//arreter le chronomètre

document.getElementById('stop').addEventListener('click', function() {
    running = false;
    clearInterval(timer);
});
//reinitialiser le chronomètre
document.getElementById('reset').addEventListener('click', function() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    document.getElementById('time').textContent = formatTime(seconds);
});
//mettre à jour à temps
function updateTime() {
    seconds++;
    document.getElementById('time').textContent = formatTime(seconds);
}
//Formater le temps
//Cette fonction formate le nombre total de secondes en heures, minutes et secondes pour un affichage lisible.

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
