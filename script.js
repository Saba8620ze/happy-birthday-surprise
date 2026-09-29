function goToPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');

    if (num === 4) startSurprise();
}

document.getElementById("volleyball").onclick = () => goToPage(2);

یعنی **هیچ فاصله‌ای بین true و " نباشه**.

---

# ⭐ دوم مشکل پاپیون‌ها روی لپ‌تاپ  
چون لپ‌تاپ صفحه بزرگه، پاپیون‌ها خیلی پراکنده و بد دیده می‌شن.

من نسخهٔ جدید رو این‌جوری درست کردم:

### ✔ اندازهٔ پاپیون‌ها روی لپ‌تاپ کمی بزرگ‌تر  
### ✔ روی موبایل کوچک‌تر  
### ✔ تعداد روی لپ‌تاپ بیشتر  
### ✔ روی موبایل کمتر  
### ✔ جای افتادن دقیق‌تر  
### ✔ سرعت افتادن طبیعی‌تر  
### ✔ ایموجی‌ها واضح‌تر و قشنگ‌تر

---

# ⭐ نسخهٔ نهایی و کامل (فقط Copy–Paste کن)

این نسخهٔ کامل و اصلاح‌شدهٔ `startSurprise()` هست:

```js
function startSurprise() {
    let music = document.getElementById("music");
    music.play();

    // تعداد پاپیون‌ها برای موبایل و لپ‌تاپ
    let count = window.innerWidth < 600 ? 40 : 120;

    for (let i = 0; i < count; i++) {
        let span = document.createElement("span");
        span.innerHTML = "🎀✨⭐🎊";

        span.style.position = "absolute";

        // جلوگیری از رفتن به گوشه‌ها
        span.style.left = Math.random() * (window.innerWidth - 60) + "px";

        // شروع از بالای صفحه
        span.style.top = "-60px";

        // اندازهٔ مناسب برای موبایل و لپ‌تاپ
        span.style.fontSize = window.innerWidth < 600 ? "18px" : "32px";

        // سرعت افتادن طبیعی‌تر
        span.style.animation = `fall ${2.5 + Math.random() * 3.5}s linear`;

        document.body.appendChild(span);
    }

    // نمایش عکس و متن بعد از 6 ثانیه
    setTimeout(() => {
        document.getElementById("page4").innerHTML += `
            <img src="https://github.com/Saba8620ze/happy-birthday-surprise/blob/main/IMG_20260929_141015_890.jpg?raw=true" width="300">
            <h2>تولدت مبارک عزیزم! 🥹 🎂🤍</h2>
            <button onclick="goToPage(5)">ادامه</button>
        `;
    }, 6000);
}
