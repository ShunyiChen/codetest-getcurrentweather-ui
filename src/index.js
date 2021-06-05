const axios = require('axios').default;

function generateHtml(arr) {
  var html = ''; 
  for(var i=0;i<arr.length;i++){
    html += '<option value="'+arr[i].name+'">'+arr[i].name+'</option>';
  }
  return html;
}

function loadCityList() {
  axios.get('http://localhost:33472/city/findall')
     .then (res => {
        console.log(res)
        s1.innerHTML = generateHtml(res.data.data);
     }).catch(function (error) {
      // handle error
      console.log(error);
    })
}

loadCityList();
