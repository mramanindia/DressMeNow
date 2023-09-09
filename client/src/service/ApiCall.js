var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('personImage', fs.createReadStream('Ygh54fgIL/Women_21.jpg'));
data.append('clothImage', fs.createReadStream('0s7W1Tbb2/25082023141312_4995.jpg'));

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://cvapi.datatobiz.com/clothes-vtryon-ai',
  headers: { 
    'clientId': '7K_ngaytrpzYTRESNBVCPOY19874&lpo@1bvc', 
    'clientSecret': '123BNGTSHKOPLSgahayayaABCXYUR4590QMBD', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
