(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
        }, Math.random() * 20000 + 10000);
    }
})();

const messages = [
    "Kamu yakin?",
    "Beneran yakinnn nihhh ???",
    "Ga pengen berubah pikiran kah?",
    "Ayo dongg klik YES",
    "Masa gamau sihhh?",
    "Aku sedihh nihhhh",
    "Yahhh kamu beneran gamauuu?",
    "Beneran banget gamauuu?",
    "Baiklahh gapapa kok",
    "Tapi boong, ayo dong mau maksa nihhh! ❤️"
];

let messageIndex = 0;
let noClickCount = 0;
const MAX_NO_CLICKS = 10;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Update pesan pada tombol No
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Perbesar tombol Yes
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Tambah counter klik No
    noClickCount++;
    
    // Jika sudah mencapai batas maksimal, redirect ke halaman No
    if (noClickCount >= MAX_NO_CLICKS) {
        // Tambahkan efek visual sebelum redirect
        document.body.style.transition = "all 1s ease";
        document.body.style.opacity = "0.5";
        document.body.style.transform = "scale(0.95)";
        
        // Beri pesan terakhir
        noButton.textContent = "Baiklah... aku mengerti 💔";
        noButton.disabled = false;
        noButton.style.cursor = "not-allowed";
        
        // Redirect setelah jeda 1.5 detik
        setTimeout(() => {
            window.location.href = "no_page.html";
        }, 1500);
    }
    
    // Tampilkan counter di halaman
    updateNoClickCounter();
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function updateNoClickCounter() {
    let counterElement = document.getElementById('no-click-counter');
    
    if (!counterElement) {
        counterElement = document.createElement('div');
        counterElement.id = 'no-click-counter';
        counterElement.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(255, 0, 0, 0.1);
            padding: 5px 10px;
            border-radius: 10px;
            font-size: 14px;
            color: #ff4d4d;
            z-index: 1000;
            border: 1px solid #ff4d4d;
            opacity: 0.7;
            transition: all 0.3s;
        `;
        document.body.appendChild(counterElement);
    }
    
    counterElement.textContent = `Kesempatan tersisa: ${MAX_NO_CLICKS - noClickCount}`;
    
    if (noClickCount >= MAX_NO_CLICKS - 3) {
        counterElement.style.background = "rgba(255, 0, 0, 0.3)";
        counterElement.style.color = "#ff0000";
        counterElement.style.fontWeight = "bold";
        counterElement.style.animation = "pulse 0.5s infinite alternate";
        
        if (!document.querySelector('#pulse-animation')) {
            const style = document.createElement('style');
            style.id = 'pulse-animation';
            style.textContent = `
                @keyframes pulse {
                    from { opacity: 0.7; transform: scale(1); }
                    to { opacity: 1; transform: scale(1.05); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    if (noClickCount === MAX_NO_CLICKS - 2) {
        const warningElement = document.createElement('div');
        warningElement.textContent = "Hati-hati! Hanya 2 kesempatan lagi!";
        warningElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 0, 0, 0.8);
            color: white;
            padding: 15px 25px;
            border-radius: 15px;
            z-index: 1001;
            font-weight: bold;
            animation: fadeInOut 2s forwards;
        `;
        
        if (!document.querySelector('#fade-animation')) {
            const style = document.createElement('style');
            style.id = 'fade-animation';
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(warningElement);
        
        setTimeout(() => {
            warningElement.remove();
        }, 2000);
    }
}

// Inisialisasi event listener
document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (noButton) {
        noButton.addEventListener('click', handleNoClick);
    }
    
    if (yesButton) {
        yesButton.addEventListener('click', handleYesClick);
    }
    
    updateNoClickCounter();
});
