

//***** BAI 1 *****//

// let i = 0;
// for(let i = 1; i <= 500;i++){
//     console.log(i)
// }

//***** BAI 2 *****//
// let i = 0;
// for(let i = 1; i <= 300; i++){
//     if(i%2===0 && i%3===0){
//         console.log(i);
//     }
// }
//***** BAI 3 *****//

// let cont = 0;
// for(let i = -30; i <= 50; i=i + 2){
//      cont = cont+i;
//  }console.log(cont);


//***** BAI 4 *****//
// let n = Number(prompt('nhap n'));
// let giaithua = 1;
// for(let i = 1; i <= n ; i++){
//     giaithua = giaithua * i;
//     }
//     console.log(giaithua);

//***** BAI 5 *****//
// let a = Number(prompt('nhap a'));
// let b = Number(prompt('nhap b'));
// let x = Number(prompt('nhap x'));
// if(a < b - 1){
// for(let i = a; i<=b ;i++){
//     if(i % x === 0 ){
//     console.log(i);
//     break;
// }
// }
// }else{
//     console.log('khong co so chia het cho x trong khoang tu a den b');
// }


//***** BAI 6 *****//
// let n = Number(prompt('nhap n'));
// if(n>=2){
//     let s = 0;
//     for(let i = 1; i <= n ;i++){
//     s += 1 / (i*(i + 1))
//         s = s + i
//     }console.log(s)
// }else{
//     console.log('n phai lon hon 2')
// }


//***** BAI 7 *****//
// let n = Number(prompt('nhap n'));
// let uoc = 0;

// if (n >= 1) {
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             uoc++;
//              console.log(i);
//         }
//     }console.log('so uoc cua n',uoc)   
    
// } else {
//     console.log('nhap so nguyen duong');
// }

//***** BAI 8 *****//
// let n = Number(prompt('nhap n'));
// if(n >= 2){
// let songuyento = true;
// for(let i = 2;i* i <= n ;i++){
//     if(n % i === 0 ){
//         songuyento = false;
//         break;
//     }
    
// }if(songuyento){
//     console.log(n,'la so nguyen to')
// }else{
//     console.log(n,' khong phai la so nguyen to')
// }
// }else{
//     console.log('phai nhap so lon hon hoac bang 2')
// }

//***** BAI 9 *****//

// let s = Number(prompt('nhap chuoi s'));
// if(s>0){
//     for(let i = 0; i <= s ; i++){
//             s = '0' + s
//             console.log(s);
//             break;
//     }
// } else{
//         console.log('s phai la so nguyen duong')
// }

//***** BAI 10 *****//
// let m = Number(prompt('nhap so nguyen duong m'));
// let n = Number(prompt('nhap so nguyen duong n'));
// if(m>0 && n>0 && n>m){
//         for(let i = m; i <= n; i--){
//                 if(m%i===0 && n%i===0){
//                         console.log('uoc chung lon nhat cua m va n la:',i)
//                         break;
//                 }
//         }
// }else if(m>0 && n>0){
//         for(let i = n; i <= m; i--){
//                 if(m%i===0 && n%i===0){
//                         console.log('uoc chung lon nhat cua m va n la:',i)
//                         break;
//                 }
// }
// }else{
//         console.log('m va n phai la so nguyen duong')
// }

//***** BAI 11 *****//
// let m = Number(prompt('nhap so nguyen duong m'));
// let n = Number(prompt('nhap so nguyen duong n'));
// if(m>0 && n>0 && n>m){
//         for(let i = m; i <= n*m; i++){
//                 if(i%m===0 && i%n===0){
//                         console.log('boi chung nho nhat cua m va n la:',i)
//                         break;
//                 }
//         }
// }else if(m>0 && n>0){
//         for(let i = n; i <= m*n; i++){
//                 if(i%m===0 && i%n===0){
//                         console.log('boi chung nho nhat cua m va n la:',i)
//                         break;
//                 }
// }
// }else{
//         console.log('m va n phai la so nguyen duong')
// }

//***** BAI 12 *****//

//  const randomNumber = Math.ceil(Math.random() * 99);
 
// let numberOfTries = 0;
//     for(let i = 1; i <=5 ; i++){
//         let n = Number(prompt('nhap so ban du doan'));
//         numberOfTries++;
//         if(n>=0&&n<=99){
//             if(n === randomNumber){
//                 console.log(i,'doan dung');
//                 break;
//             }else{
//                 console.log(i,'doan sai')
//                 if(numberOfTries >= 5){
//                     console.log('ban da thua');
//                 }
//             }
//         }else{
//             console.log('ban phai nhap so trong khoang tu 0 den 99')
//         }
//     }console.log('ket qua la:',randomNumber);
// ***** BAI 13 *****//
//  let n = Number(prompt('nhap 1 so trong khong tu 2 den 10'));

//  if(n>=2 && n<=10){
//     for(let i = 1; i <= 10; i++){
//       let ketqua = n*i;
//       console.log(`${n} x ${i} = ${ketqua}`);
//     }
// }else{
//     console.log('nhap so trong khoang tu 2 den 10')
// }
//***** BAI 14 + 15 *****//
// let m = Number(prompt('Nhập vào chiều rộng (m >= 2): '));
// let n = Number(prompt('Nhập vào chiều cao (n >= 2): '));

// if (m >= 2 && n >= 2) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= m; j++) {
//             row += '* ';
            
//         }
//         console.log(row,i);
//     }
// } else {
//     console.log('Vui lòng nhập m và n lớn hơn hoặc bằng 2.');
// }
// let n = Number(prompt('Nhập vào số n (n >= 3): '));


//***** BAI 16 *****//
// if (n >= 3) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += '* ';
//         }
//         console.log(row);
//     }
// } else {
//     console.log('Vui lòng nhập n lớn hơn hoặc bằng 3.');
// }

//***** BAI 17 *****//
// let width = prompt("hay nhap can nang cua ban:");
// let height = prompt("hay nhap chieu cao cua ban:");
// let BMI = width/height**2; 
// if(BMI < 18.5){
//     console.log('nhe can');
// }else if(BMI >= 18.5 && BMI < 23){
//     console.log('binh thuong');
// }else if(BMI >= 23 && BMI <25){
//     console.log('thua can');
// }else{
//     console.log('beo phi');
// };



