var dt = new Date();
export let DateString = dt.getFullYear() + '년 ' + (dt.getMonth() + 1) + '월 ' + dt.getDate() + '일';


var arrDayStr = ['일','월', '화', '수', '목', '금', '토'];
export let DayName = arrDayStr[dt.getDay()] + '요일';
