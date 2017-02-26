(function() {
  var submitBtn = document.getElementById('rsvp-btn')
  submitBtn.onclick = sendFormData

  var submitAnotherBtn = document.getElementById('submit-another-btn')
  submitAnotherBtn.onclick = showForm

  function sendFormData() {
    console.log('here')
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSeO_eVjzGy0XvPM-jnjmzG7vbz1i8ulAaqZU_CPI3Pmm_d26w/formResponse'
    var data = {}
    data.name = encodeURIComponent(document.getElementById('fullname').value)
    data.email = encodeURIComponent(document.getElementById('email').value)
    data.avec = encodeURIComponent(document.getElementById('avec').value)
    data.allergy = encodeURIComponent(document.getElementById('allergy').value)
    data.table = encodeURIComponent(document.getElementById('table').value)
    data.brunssi = encodeURIComponent(document.getElementById('brunssi').checked)
    data.transport = encodeURIComponent(document.getElementById('transport').checked)
    data.ohjelma = encodeURIComponent(document.getElementById('ohjelma').checked)
    data.ohjelmakuvaus = encodeURIComponent(document.getElementById('ohjelmakuvaus').value)
    data.requests = encodeURIComponent(document.getElementById('requests').value)
    httpPost(url, data, callback)
  }

  function httpPost(url, data, callback) {
    var http = new XMLHttpRequest()
    http.onreadystatechange = function() {
      if (http.readyState == 4) {
          callback(http.status)
        }
    }
    http.open("POST", url, true)
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    http.send('entry.449670622=' + data.name +
              '&entry.1246131532=' + data.email +
              '&entry.1127637306=' + data.avec +
              '&entry.867591003=' + data.allergy +
              '&entry.71336670=' + data.table +
              '&entry.1041545297=' + data.brunssi +
              '&entry.1868512826=' + data.transport +
              '&entry.160942182=' + data.ohjelma +
              '&entry.2009704124=' + data.ohjelmakuvaus +
              '&entry.353073816=' + data.requests)
  }

  function callback(statusCode) {
    var form = document.getElementById('rsvp-form')
    form.style.display = 'none'
    var submitAnother = document.getElementById('submitted')
    submitAnother.style.display = 'block'
  }

  function showForm() {
    var form = document.getElementById('rsvp-form')
    form.style.display = 'block'
    var submitAnother = document.getElementById('submitted')
    submitAnother.style.display = 'none'
  }

})()
