// this function used to format hour minutes and second into 2 digits string
const formatTime = (time) => {
    // convert to string
    const stringTime = String(time);
    if (stringTime.length < 2) {
        return `0${stringTime}`;
    } 
    return stringTime;
};


const formatElapsedTime = (time) => {
    let remainingTime = time;
    // get the hour
    const hour = Math.floor(remainingTime/3600000);
    // calculate the remaining minute
    remainingTime = time%3600000;
    // get the minute
    const minute = Math.floor(remainingTime/60000);
    // calculate remaining second
    remainingTime = time%60000;
    // get the second
    const second = Math.floor(remainingTime/1000);
    // calculate the remaining milisecond
    remainingTime = remainingTime%1000;
    // get the milisecond
    const ms = Math.floor(remainingTime/10);

    return (hour > 0 ? formatTime(hour) + ':' : '') + `${formatTime(minute)}:${formatTime(second)}.${formatTime(ms)}`;
}

export default formatElapsedTime;