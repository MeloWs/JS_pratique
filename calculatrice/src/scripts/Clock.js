const root =  document.querySelector('#root')
const title = document.createElement('h1') // create H1
title.textContent = 'Clock'; 
root.appendChild(title)
const clock = document.createElement('div')
const time = document.createElement('p')

/*const date = new Date();
const clock = document.createElement('p')

clock.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

//console.log('HIHI')
//const interval = setInterval(() => clock.textContent, 1000)

root.appendChild(clock)
//window.onload = setTimeout("location.reload(true);", 1000);
*/


function myTimer() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    const timeC = h + ':' + m + ':' + s;
    //const time = date.toLocaleTimeString();
    time.innerHTML = timeC;
    if(s % 10) {
        time.style.color = '';
    }
    else {
        time.style.color = 'blue';
    }
    
}
myTimer();
const timeInterval = setInterval(myTimer, 1000);

const timezoneList = ['UTC', 'Asia/Tokyo', 'America/Anchorage'];
const timeZone = document.createElement('p');
let currentTimezoneIndex = 0;
timeZone.textContent = timezoneList[currentTimezoneIndex];

// pour changer la time zone
const next = document.createElement('button');
next.textContent = 'next';
next.addEventListener('click', () => {
    currentTimezoneIndex = (currentTimezoneIndex + 1) % timezoneList.length;
    timeZone.textContent = timezoneList[currentTimezoneIndex];
})


// pour changer la time zone
const previous = document.createElement('button');
previous.textContent = 'previous';
previous.addEventListener('click', () => {
    (currentTimezoneIndex <= 0 ? timezoneList.length : currentTimezoneIndex) -1;
    timeZone.textContent = timezoneList[currentTimezoneIndex];
})

// pour stopper le temps
const stopp = document.createElement('button');
stopp.textContent = 'stop';
stopp.addEventListener('click', () => clearInterval(timeInterval));


const controlButtons = document.createElement('div');
controlButtons.append(next, previous, stopp);


clock.appendChild(time);
clock.appendChild(timeZone);
clock.appendChild(controlButtons)
root.appendChild(clock);
