const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');
var buff = "" ;
csv()
.fromFile(path.join(__dirname,'/customer-data.csv'))
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
  buff += JSON.stringify(jsonObj)


  })
.on('done',(error)=>{
  //var realjson = JSON.parse(buff);

fs.writeFile(path.join(__dirname, '/customer-data.json') , buff , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })

  console.log('end')
})
