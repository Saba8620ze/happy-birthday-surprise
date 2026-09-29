function goToPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');

    if (num === 4) startSurprise();
}

document.getElementById("volleyball").onclick = () => goToPage(2);

function startSurprise() {
    let music = document.getElementById("music");
    music.play();

    let count = window.innerWidth < 600 ? 30 : 120;

    for (let i = 0; i < count; i++) {
        let span = document.createElement("span");
        span.innerHTML = "🎀✨⭐🎊";
        span.style.position = "absolute";
        span.style.left = Math.random() * (window.innerWidth - 60) + "px";
        span.style.top = "-60px";
        span.style.fontSize = window.innerWidth < 600 ? "18px" : "32px";
        span.style.animation = `fall ${2.5 + Math.random() * 3.5}s linear`;
        document.body.appendChild(span);
    }

    setTimeout(() => {
        document.getElementById("page4").innerHTML += `
            <img src="https://github.com/Saba8620ze/happy-birthday-surprise/blob/main/IMG_20260929_141015_890.jpg?raw=true" width="300">
            <h2>تولدت مبارک عزیزم! 🥹 🎂🤍</h2>
            <button onclick="goToPage(5)">ادامه</button>
        `;
    }, 6000);
}
