// // ============================================= 22-DARS. MongoDB databasega connection quramiz =================================//

// console.log("======================= EXPRESS.JS AND WEB SERVER ========================");

console.log("Web serverni boshlaymiz.")
const  express = require('express');
const app = express();
const fs = require("fs");

// Mongo_DB chaqirish;
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if(err) {
    console.log("ERROR", err);
  }else{
    user = JSON.parse(data);
  }
})

// 1.Kirish Kodlar.
app.use(express.static('public'));
 // bu kod orqali biz shu folderga kiritlgan ma'lumotlarnigina user browersda ishlatishi mumkin. publicda bo'lmagan maumotlarni download qilib yoki copy qila olmaydi.
app.use(express.json()); // bu kod orqali kelayotgan ma'lumotlarni json malumot turiga aylantiradi.
app.use(express.urlencoded({extended: true}));

// 2. Session kodlar

// 3. Views kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing kodlar
app.post('/create-item', (req, res) =>  {
  console.log("user entered / create-item");
  console.log(req.body)
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
   res.json(data.ops[0]);
  });
});

// delete-item API qismi. post qismi
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
    res.json({state: "Success"});
  })
});

// update-item API post qismi
app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id) },
    { $set: {reja: data.new_input } },
    function(err, data) {
      res.json({state: "Success"});
    }
  );
});

// delete-all API post qismi
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
      db.collection("plans").deleteMany(function () {
          res.json({ state: "Hamma rejalar o'chirildi"});
      });
  }
});

app.get('/author',(req, res) => {
  res.render("author",{user: user})  
})

app.get('/', function (req, res) {
  console.log("user enterd / main_page");
  db.collection("plans").find().toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      console.log(data);
      res.render("reja", { items: data});
    }
  }) 
});

module.exports = app;







// //External Modullar. Bu modullarni core moduldan farqi, ularni ishlatish uchun j.son package ga instal qilib olishimiz kerak. Uning uchun terminalda "npm install modulname --save" commandasini beramiz va uni chaqirib olamiz.
// const moment = require("moment");
// const time = moment().format();
// console.log("Hozirgi vaqt: ", time);



// //inquirer modulini ko'ramiz.
// const inquirer = require("inquirer");
//   inquirer
//   .prompt([{type: 'input', name: 'son', message: 'raqamni kiriting..'}])
//   .then(answer =>{
//     console.log("Siz kiritgan raqam: ", answer.son);
//   })
//   .catch(err => console.log(err));




 // // Validator modulni ko'ramiz: bu turli malumot turlarini tekshiradi. Email. number.string. IP address
  // const validator = require("validator");
  // const email = validator.isEmail("strangerbellimogmail.com");
  // console.log("Email qiymati: ", email);

  // const ip = validator.isIP('14.42.86.31');
  // console.log("Sizning ip manzilingiz:", ip);



  //// uuid: moduli. bu bizga random stringlarni qaytarishi mumkin. 
  // const { v4: uuidv4 } = require('uuid');
  // const random = uuidv4();
  // console.log("random string: ", random);




 // // chalk: moduli. bu modul orqali natijani turli ko'rinishda ko'rishimiz mumkin.
  // const chalk = require('chalk');
  // const log = console.log;
  // log(chalk.bgGreen.white("Your password:") + chalk.blue("",random) + chalk.redBright(" !"));
  
  // console.log("================= File Modullar ================");


 // //================== File Modullar =====================//
 // // file modullar bu biz yaratgan fayl modullar hisoblanadi. va fayllar bilan ishlanadi.M:
  // const   calculate = require ('./hisob.js');

  // const natija = calculate.plus(200, 300);
  // console.log("Sonlar yig'indisi: ", natija);
  // console.log("=========================");

  // const natija2 = calculate.minus(500, 270);
  // console.log("Sonlar ayirmasi:", natija2);
  // console.log("==========================");

  // const natija3 = calculate.bolish(500, 10);
  // console.log("Sonlan bo'linmasi: ", natija3);
  // console.log("===========================");

  // const natija4 = calculate.kopaytirish(500, 2);
  // console.log("Sonlar ko'paytmasi: ", natija4);

//// endi account.js file dagi dasturni chaqirib ishga tushiramiz.
  // const Account = require('./account.js');
  // Account.tellMeTime();
  // Account.tellMeAboutClass();

  // const myAccount = new Account("Yusuf", 10000, 90343243872);
  // myAccount.showDetails();
  // myAccount.deposit(200);
  // myAccount.sendingMoney(450);
