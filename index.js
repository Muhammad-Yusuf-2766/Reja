// Node js modullari. Node js da modullar 3 turga bo'linadi. 1: Core Modul. 2: External moudl. 3:File Modul
// Coder Modulni ko'tib chiqamiz. Avval terminslda npm init -- yes burugini beramiz. bu bizga j.son package ni ochib beradi. bu pacge bizga dasturimiz haqida hamma malumotlarni beradi. Qaysi library, qaysi dastur va hokazolardan foydalanganimiz hammasi chiqadi. albata u malumotlarni avval o'zimiz kiritishimiz kerak.
// 1: Core Modul. bu asosiy modul hisoblanadi. SetTimeOut modulni ko'ramiz. bu modul o'ziga 2 ta parametrni oladi. biri function 2- si vaqt. kiriltilgan vaqt o'tgach 1 - parametrni ishga tushiradi. (functionni) M:
setTimeout(function() {
    console.log("Ishga tushirildi.")
  }, 3000);
  
  // SetInterval moduli. Bu Modul ham berilgan vaqtdan so'ng functionni ishga tushiradi. lekin functionni qayta qayta ishga tushiravedi. Yani Loop M:
  let number = 0;
  const IntervalId = setInterval(function () {
    console.log("sekund", number);
    number++
    
    if(number > 5){
      clearInterval(IntervalId); // Stop the interval when number reaches 6
    };
  },1000);
  
  
  // fs moduli. (File system), Bu modul dasturni ichidagi filelarni qo'lga olib berishda ishlatiladi. bu modulni ishlatish uchun require syntax si orqali chaqirib olsihimiz kerak.M:
  const fs = require ('fs');
  const { networkInterfaces } = require ('os')
  const data = fs.readFileSync('./input.txt', 'utf-8');
  console.log(data);
  
  // endi faylga o'zgartirish kiritamiz.
  // fs.writeFileSync('./input.txt', `${data} \n\t\t Qashqirlar Makoni:`);
  const new_data = fs.writeFileSync('./input.txt', `${data} \n\t\t Qashqirlar Makoni:`);
  console.log(new_data);
  
  
  // ##############  Task - B  ####################//
  // Functionda 1 parametr bo'lsin. u parametrda string ko'rinishida harflar va sonlar bo'lsin. consolega esa stringda nechta son qatnashgan bo'lsa shuni chiqarsin. 
  
  function getNumbers (malumot) {
    let number = 0;
    let raqamlar = "0123456789";
  
    for(i = 0; i < malumot.length; i++){
      const raqam = malumot.charAt(i);
      if(raqamlar.includes(raqam)){
        number++
      }
    }
    return number;
  }
  
  const result = getNumbers("ash3n1mk5llnhn65l4j309");
  console.log(result);
  
  
  