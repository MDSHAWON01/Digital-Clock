let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dots = document.querySelector('.hr_dots');
let min_dots = document.querySelector('.min_dots');
let sec_dots = document.querySelector('.sec_dots');

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    // Convert 24 hour clock to 12 hour clock
    if (h > 12) {
        h = h - 12;
    }

    // add zero before single digit number
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hour.innerHTML = h + '<br/> <span>Hour</span>';
    minute.innerHTML = m + '<br/> <span>Minute</span>';
    second.innerHTML = s + '<br/> <span>Second</span>';
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dots.style.transform = ` rotate(${h * 30}deg)`;
    // 360/12=30
    min_dots.style.transform = ` rotate(${m * 6}deg)`;
    // 360/60=6
    sec_dots.style.transform = ` rotate(${s * 6}deg)`;
    // 360/60=6

});

