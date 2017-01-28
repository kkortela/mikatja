var deadline = 'July 08 2017 14:00:00 GMT+0200';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
  clock.innerHTML = '<div class="counter-item">' +
                      '<span class="number">' + t.days + '</span>' +
                      '<span class="time">' + ' pvä' + '</span>' +
                    '</div>' +
                    '<div class="counter-item">' +
                      '<span class="number">' + t.seconds + '</span>' +
                      '<span class="time">' + ' s' + '</span>' +
                    '</div>' +
                    '<div class="counter-item">' +
                      '<span class="number">' + t.minutes + '</span>' +
                      '<span class="time">' + ' min' + '</span>' +
                    '</div>' +
                    '<div class="counter-item">' +
                      '<span class="number">' + t.hours + '</span>' +
                      '<span class="time">' + ' t' + '</span>' +
                    '</div>'
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock('counter', deadline);
