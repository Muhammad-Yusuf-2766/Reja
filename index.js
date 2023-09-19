// External Modullar. Bu modullarni core moduldan farqi, ularni ishlatish uchun j.son package ga instal qilib olishimiz kerak. Uning uchun terminalda "npm install modulname --save" commandasini beramiz va uni chaqirib olamiz.
const moment = require("moment");
const time = moment().format();
console.log("Hozirgi vaqt: ", time);



// inquirer modulini ko'ramiz.
const inquirer = require("inquirer");
  inquirer
  .prompt([{type: 'input', name: 'son', message: 'raqamni kiriting..'}])
  .then(answer =>{
    console.log("Siz kiritgan raqam: ", answer.son);
  })
  .catch(err => console.log(err));




  // Validator modulni ko'ramiz: bu turli malumot turlarini tekshiradi. Email. number.string. IP address
  const validator = require("validator");
  const email = validator.isEmail("strangerbellimo@gmail.com");
  console.log("Email qiymati: ", email);

  const ip = validator.isIP('14.42.86.31');
  console.log("Sizning ip manzilingiz:", ip);



  // uuid: moduli. bu bizga random stringlarni qaytarishi mumkin. 
  const { v4: uuidv4 } = require('uuid');
  const random = uuidv4();
  console.log("random string: ", random);




  // chalk: moduli. bu modul orqali natijani turli ko'rinishda ko'rishimiz mumkin.
  const chalk = require('chalk');
  const log = console.log;
  log(chalk.bgGreen.white("Your password:") + chalk.blue("",random) + chalk.redBright(" !"));
  
  console.log("=================== C-TASK =====================");






// C-Task. 2 ta stringni tekshirish. 
function checkString(str1, str2) {
  str1 = str1.replace('').toLowerCase();
  str2 = str2.replace('').toLowerCase();

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const result = checkString("internation", "ntieraontin");
console.log("stringlar qiymati:", result); 