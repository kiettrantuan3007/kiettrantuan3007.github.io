function changeMiliSecondtoTime(miliSecond) {
    var seconds = Math.floor(miliSecond / 100);
    miliSecond = miliSecond - seconds * 100;
    var minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    if (seconds < 10) { seconds = '0' + seconds }
    if (miliSecond < 10) { miliSecond = '0' + miliSecond }
    if (minutes < 10) { minutes = '0' + minutes }

    return `${minutes}:${seconds}:${miliSecond}`
}
// document.querySelector('.start').onclick = start();

function start(i = 0) {

    var data = i;
    document.querySelector('.start').setAttribute('onclick', null);
    var clockDOM = document.querySelector('.clock');
    var startInterval = setInterval(
        function() {
            data++;
            clockDOM.innerText = changeMiliSecondtoTime(data);
        }, 10);

    document.querySelector('.pause').onclick = function() {
        clearInterval(startInterval);
        document.querySelector('.start').setAttribute('onclick', `start(${data})`);
    }

    document.querySelector('.stop').onclick = function() {
        data = 0;
        document.querySelector('.clock').innerText = '00:00:00';
        clearInterval(startInterval);
        document.querySelector('.start').setAttribute('onclick', `start(0)`);
    };
}