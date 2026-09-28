function goToPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');

    if (num === 4) startSurprise();
}

document.getElementById("volleyball").onclick = () => goToPage(2);

function startSurprise() {
    let music = document.getElementById("music");
    music.play();

    for (let i = 0; i < 100; i++) {
        let span = document.createElement("span");
        span.innerHTML = "🎀⭐✨🎊";
        span.style.position = "absolute";
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.top = "-50px";
        span.style.fontSize = "30px";
        span.style.animation = `fall ${3 + Math.random()*3}s linear`;
        document.body.appendChild(span);
    }

    setTimeout(() => {
        document.getElementById("page4").innerHTML += `
            <!-- اینجا لینک عکس کیک رو می‌تونی عوض کنی -->
            <img src="https://pngimg.com/uploads/birthday_cake/birthday_cake_PNG13190.png" width="300">
            <h2>تولدت مبارک عزیزم! 🥹 🎂🤍</h2>
            <button onclick="goToPage(5)">ادامه</button>
        `;
    }, 6000);
}