// C-Task. 2 ta stringni tekshirish.
console.log("=================== C-TASK =====================");
 
function checkString(str1, str2) {
    str1 = str1.replace('').toLowerCase();
    str2 = str2.replace('').toLowerCase();
  
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  const result = checkString("internation", "ntieraontin");
  console.log("stringlar qiymati:", result); 
  