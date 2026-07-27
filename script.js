// Task1:
// 1-dən 100-ədlər olan 3-ə, həm də 5-ə bölünmüş ekran çıxarın ve sonda onların sayını göstərin.

let count = 0;
console.log("3-ə və 5-ə bölünən ədədlər:");
for(let i = 1 ; i<=100 ; i ++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
        count++;
}    
}
console.log("Ümumi sayı:", count);



// Task2:
// İstifadəçi iki ədəd daxil edir.Birinci ədəd başlangıc,ikinci ədəd son qiymətdir.
// Bu aralıqda: cüt ədlərin cəmini ve tək ədədlərin sayını tapin.


// let start = Number(prompt("Başlanğıc ədədini daxil edin:"));
// let end = Number(prompt("Son ədədi daxil edin:"));

// let evenSum = 0;
// let oddCount = 0;
//                 // 1             5
// for (let i = start; i <= end; i++){
//     if (i % 2 === 0) {
//         evenSum += i;
//     } else{
//         oddCount ++;
//     }
// }

// console.log(`Cüt ədədlərin cəmi: ${evenSum}`);
// console.log(`Tək ədədlərin sayı: ${oddCount}`);