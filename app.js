const dateElement = document.getElementById('date');

const digitalTimeElement = document.getElementById('digital-clock');	

let alarmTimes = [{alarmStart: ''}];
let isAlarm = true;

const getCurrentDate = () => moment().format('MMMM Do, YYYY');

const getCurrentTime = (type) => { 	
	if (type == 'sec') return moment().format('ss');	
	if (type == 'min') return moment().format('mm');
	if (type == 'hrs') return moment().format('H');	
	return moment().format('H:mm:ss');
}

const getCurrentTime1 = (type) => { 	
	if (type == 'min') return moment().format('mm');
	if (type == 'hrs') return moment().format('H');	
	return moment().format('H:mm');
}	
const displayDate = date => {
	dateElement.innerHTML = date;
}

const displayDigitalTime = time => {
	digitalTimeElement.innerHTML = time;
};

var setAlarm = () => {
	var alarmTimeElement = document.getElementById('alarmTime').value;
	console.log(alarmTimeElement);

	alarmTimes[0]['alarmStart'] = alarmTimeElement;
	console.log(alarmTimes);
	return alarmTimeElement;
}

const alarm = times => {
	times.filter(time => {
		// console.log('Alarstart', time.alarmStart);
		// console.log('current time', getCurrentTime());
		if (time.alarmStart == getCurrentTime1() && isAlarm) {
			console.log("Alarm");
		}
	});
};

const stop = () => {
	isAlarm = false
}

console.log("this is:"+ setAlarm());					 
const clock = () => {
	displayDate(getCurrentDate());
	displayDigitalTime(getCurrentTime());
	alarm(alarmTimes);
}

setInterval(clock, 1000);