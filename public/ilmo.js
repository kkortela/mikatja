(function() {
  var submitBtn = document.getElementById('rsvp-btn')
  submitBtn.onclick = sendFormData

  function sendFormData() {
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSeO_eVjzGy0XvPM-jnjmzG7vbz1i8ulAaqZU_CPI3Pmm_d26w/formResponse'
    var data = {}
    data.name = encodeURIComponent(document.getElementById('fullname').value)
    httpPost(url, data)
  }

  function httpPost(url, data, callback) {
    var http = new XMLHttpRequest()
    http.open("POST", url, true)
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    http.send('entry.449670622=' + data.name)
  }

})()
