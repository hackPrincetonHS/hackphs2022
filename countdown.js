let end = new Date('11/5/2022 12:00 AM');
let hackathon_end = new Date('11/6/2022 6:00 PM');

// how many ms each unit is
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;

    if (distance < 0) {
        if (now > hackathon_end) {
            document.getElementById('countdown-timer').innerHTML = "hackPHS 2022 is over!";
            return;
        }
        distance = hackathon_end - now;
    }

    let days = Math.floor(distance / day).toString().padStart(2, '0');
    let hours = Math.floor((distance % day) / hour).toString().padStart(2, '0');
    let minutes = Math.floor((distance % hour) / minute).toString().padStart(2, '0');
    let seconds = Math.floor((distance % minute) / second).toString().padStart(2, '0');

    document.getElementById('countdown-timer').innerHTML = `
        <text x="30" y="70">${days}</text>
        <text x="49" y="70">${hours}</text>
        <text x="70" y="70">${minutes}</text>
        <text x="90" y="70">${seconds}</text>

        <text x="45" y="70">:</text>
        <text x="65" y="70">:</text>
        <text x="86" y="70">:</text>

        <text x="28" y="80" style="font-size:5pt">DAYS</text>
        <text x="53" y="80" style="font-size:5pt">HR</text>
        <text x="73" y="80" style="font-size:5pt">MIN</text>
        <text x="92" y="80" style="font-size:5pt">SEC</text>
    `;
}

setInterval(showRemaining, 1000);
showRemaining();