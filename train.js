//// C-Task. 2 ta stringni tekshirish.
// console.log("=================== C-TASK =====================");
 
// function checkString(str1, str2) {
//     str1 = str1.replace('').toLowerCase();
//     str2 = str2.replace('').toLowerCase();
  
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
  
//     return sortedStr1 === sortedStr2;
//   }
  
//   const result = checkString("internation", "ntieraontin");
//   console.log("stringlar qiymati:", result); 
const moment = require('moment');

class Shop {
  apple;
  banana;
  peach;
  constructor(apple, banana, peach){
    this.apple = apple;
    this.banana = banana;
    this.peach = peach;
  }

  remain(){
    console.log(`hozrgi vaqt: ${moment().format("YYY.MM.DD. HH:mm:ss")}`);
    console.log(`Hozr Do'konda ${this.apple}kg olma, ${this.banana}kg banan, ${this.peach}kg shaftoli bor.`)
    return this.apple, this.banana, this.peach;
  }


  selling(olma, banan, shaftoli){
    this.apple -= olma;
    this.banana -= banan;
    this.peach -= shaftoli;
    
    console.log(`Do'kondan ${olma}kg olma, ${banan}kg banan, ${shaftoli}kg shaftoli sotildi.`)
    console.log(this.remain());
  }

  plusFruit(olma, banan, shaftoli) {
    this.apple += olma;
    this.banana += banan;
    this.peach += shaftoli;
    
    console.log(`Do'konga ${olma}kg olma, ${banan}kg banan, ${shaftoli}kg shaftoli olib kelindi.`)
    console.log(this.remain());
  }


}


const myShop = new Shop(50, 60, 40);
myShop.remain();
myShop.plusFruit(23, 12, 34);
myShop.selling(11, 10, 13);
