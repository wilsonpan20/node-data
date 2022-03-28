const express = require("express");
const moment = require("moment");
const lodash = require('lodash')
const app = express();
const nodemon = require('nodemon')

app.listen(3000, () => {
  //data padrão e formatações
   let data = moment().format();
   console.log(data);

  let databrasil = moment().format("DD/MM/YYYY");
  console.log(databrasil);

   let databrasilminutos = moment().format("DD/MM/YYYY hh:mm:ss");
   console.log(databrasilminutos);

  //criar data
   let dataantiga = moment("2020-11-20").format("DD/MM/YYYY hh:mm:ss");
   console.log(dataantiga);

   //subtrair data
   let subtrair = moment().subtract(10, "days").format("DD/MM/YYYY hh:mm:ss");
   console.log(subtrair);

   //adicioanar dias
   let adicionar = moment().add(10, "days").format("DD/MM/YYYY hh:mm:ss");
   console.log(adicionar);
});
