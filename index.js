const radioClickHandler = (e)=>{
    if(e.value === "Digital"){
        document.querySelector('.digital_clock').style.display = 'flex';
        document.querySelector('.clock').style.display = 'none';
    }
    else if(e.value === "Analog"){
        document.querySelector('.digital_clock').style.display = 'none';
        document.querySelector('.clock').style.display = 'flex';
    }
}

document.querySelector('.clock').style.display = 'none';
document.getElementById('digital').checked = true;

const displayTime = () => {
    const date = new Date();
    let hour, minute, second, hourRotation, minRotation, secRotation;
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    hourRotation = 30 * hour + minute / 2;
    minRotation = 6 * minute;
    secRotation = 6 * second;

    let todayDate = date.toLocaleDateString('en-GB').replace(/\//g,'-');
    document.querySelector('.today').innerHTML = todayDate;

    document.querySelector('.hour').innerHTML = hour > 12 ? `${(hour - 12).toString().padStart(2,'0')} : ` : `${hour.toString().padStart(2,'0')} : `;
    document.querySelector('.minute').innerHTML = `${minute.toString().padStart(2,'0')} : `;
    document.querySelector('.second').innerHTML = second.toString().padStart(2,'0');   
    document.querySelector('.session').innerHTML = hour > 12 ? 'PM' : 'AM';

    document.getElementById('hr').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('min').style.transform = `rotate(${minRotation}deg)`;
    document.getElementById('sec').style.transform = `rotate(${secRotation}deg)`;
}
// For initial update call
displayTime();
// For by a second update
setInterval(displayTime, 1000)