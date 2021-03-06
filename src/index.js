const axios = require('axios').default;

function generateHtml(arr) {
  var html = '';
  for (var i = 0; i < arr.length; i++) {
    html += '<option value="' + arr[i].name + '">' + arr[i].name + '</option>';
  }
  return html;
}

function loadCityList() {
  axios.get('http://8.142.15.127:8888/city-service/city/findall')
    .then(res => {
      console.log(res)
      s1.innerHTML = generateHtml(res.data.data);
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
}

loadCityList();
