/* eslint-disable no-unused-vars */
'use strict';




const GA = 'Guten Abend';

alert(GA);

let yourName = prompt('what is your name?');
console.log(yourName);

let age = prompt('what is your age?');

console.log(age);

alert('Your name and age are written this way in the German language, Mein Name ist ' + yourName + '  Ich bin ' + age + ' Jahre alt');

/*let book=prompt('What do you want to read fields of environment or economy?');

console.log(book);

book=book.toLowerCase();

console.log('Correct Case',book);

if(book=== 'environment'){
    console.log('Climate change');
    alert('Climate change');
}else if(book==='economy'){
    console.log('Stock market');
    alert('Stock market');
}else{
   console.log('Please select economy or environment');
   alert('Please select economy or environment');
}

let SMP=prompt('What is your favorite social media platform (LINKEDIN,TWITTER)?');

console.log(SMP);

SMP=SMP.toUpperCase();

console.log('Correct Case',SMP);


if(SMP=== 'LINKEDIN'){
    console.log('The most professional Socialmedia platform')
    alert('The most professional Socialmedia platform')
}
else if(SMP==='TWITTER'){
    console.log('The most reliable Socialmedia platform');
    alert('The most reliable Socialmedia platform')

}else{

   console.log('Please check the major entry next time');
   alert('Please check the major entry next time');
}

let music=confirm('Do you like music?');

if (music===true){
console.log('Calms nerves');
alert('Calms nerves')
}else{     console.log('Try to hear it');
alert('Try to hear it')
}

let Party = prompt('Which British party are you voting for(conservative party,labour party)?');
console.log(Party);

switch (Party.toLowerCase()) {
case 'conservative party':
console.log('It is the ruling party');
alert('It is the ruling party');
break;

case 'labour party':
console.log('It is the opposition party');
alert( 'It is the opposition party');
break;

default:
console.log('You should select one of them');
alert('You should select one of them');
break;
}

let A= prompt('What is the best technical university (MIT, California-BERKELEY,STANFORD)?');

console.log(A);

switch (A.toUpperCase()) {
case 'MIT':
console.log('It is on the east coast');
alert('It is on the east coast');
break;

case 'California-BERKELEY':
case 'STANFORD':
console.log('It is on the west coast');
alert('It is on the west coast');

break;

default:
console.log('You should select one of them');
alert('You should select one of them');
break;
}*/

let Grade;

Grade = 0;

function q1 (){
  let book = prompt('Do you like books? (yes/no)');

  book = book.toLocaleLowerCase();

  if (book === 'yes' || book === 'y') {
    //console.log('Good Choice');
    alert('Good Choice');

    Grade++;

  } else if (book === 'no' || book === 'n') {
    //console.log('You need a second chance');
    alert('You need a second chance');

  } else {
    //console.log('Does not exist');
    alert('Your answer not exist');
  }
}
q1();

// Q2
function q2(){
  let SMP = prompt('Do you like twitter?(YES/NO)');

  SMP = SMP.toUpperCase();

  if (SMP === 'YES' || SMP === 'Y') {
    //console.log('The most reliable Socialmedia platform');
    alert('The most reliable Socialmedia platform');

    Grade++;

  } else if (SMP === 'NO' || SMP === 'N') {
    //console.log('Try the latest update');
    alert('Try the latest update');

  } else {
    //console.log('Does not exist');
    alert('You should select(YES/NO)');
  }
}
q2();

function q3 (){
  let music = prompt('Do you like music?(y/n)');

  switch (music = music.toLowerCase()) {
  case 'y':
  case 'yes':
    //console.log('Calms nerves');
    alert('Calms nerves');
    Grade++;
    break;
  case 'no':
  case 'n':
    //console.log('Try to hear it');
    alert('Try to hear it');
    break;

  default:
    console.log('Please check the major entry next time');
    alert('Please check the major entry next time');
    break;
  }
}
q3 ();

function q4(){
  let party = prompt('Is the Conservative Party is the ruling party in Britain?(Y/N)');
  switch (party = party.toUpperCase()) {
  case 'Y':
  case 'YES':
    //console.log('It is the correct answer');
    alert('It is the correct answer');
    Grade++;
    break;

  case 'N':
  case 'NO':
    //console.log('It/s the wrong answer');
    alert('It Is the wrong answer');
    break;

  default:
    //cosole.log(' It is not the labour Party');
    alert(' It is not the labour Party');
    break;
  }
}
q4();

function q5(){
  let UNI = prompt('Is MIT University the best technical university in the world?(yes/no)');
  UNI = UNI.toLowerCase();

  if (UNI === 'yes' || UNI === 'y') {
  //console.log('Depending on the latest answer classification is correct');
    alert('Depending on the latest answer classification is correct');
    Grade++;
  } else if (UNI === 'no' || UNI === 'n') {
  //console.log('Depending on the latest answer classification is wrong');
    alert('Depending on the latest answer classification is wrong');

  }

  else {
  //console.log('Review your information');
    alert('Review your information');


  }
}
q5();



//let READ = prompt('How excited is I reading Obamas diary? ');
<<<<<<< HEAD
let YG;
YG = 7;
let gr = '';
=======
function q6 (){
  let YG;
  YG = 7;
  let gr='';
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3

  for (let i = 0; i < 4; i++) {
    gr = Number(prompt('How excited is I reading Obamas diary? '));

<<<<<<< HEAD
  if (gr === YG) {
    console.log('Your answer is correect');
    alert('Your answer is correect');
    Grade++;
    break;
  } else if (gr < YG) {
=======
    if (gr=== YG) {
      console.log('Your answer is correect');
      alert('Your answer is correect');
      Grade++;
      break;
    } else if (gr < YG) {
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3

      //console.log('Your answer is wrong, it is more than that');
      alert('Your answer is wrong, it is more than that ');
      //let READ = prompt('How excited is I reading Obamas diary? ');

    } else if (gr > YG) {

      //console.log('Your answer is wrong, it is less than that');
      alert('Your answer is wrong, it is less than that ');
      //let READ = prompt('How excited is I reading Obamas diary? ');

    } else if (gr === 6 || gr === 8) {

      console.log('Your answer is wrong,but you are close correct answer');
      alert('Your answer is wrong, but you are close correct answer ');
    //let READ = prompt('How excited is I reading Obamas diary? ');
    } else {

      alert('plz enter only from 1-10');
      //let READ = prompt('How excited is I reading Obamas diary? ');

    }
    if (i===3){
      alert('The corect answer is 7');
    }

<<<<<<< HEAD
  }
  if (i === 3) {
    alert('The corect answer is 7');
=======
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3
  }

}
q6();



function q7(){
  let note;
  note=false;
  let ASP=['JINKO','CANNADIAN','LONGI','TRINA','PHILADELPHIA','QCELL'];
  //let bestSB=prompt('What is my fav solar panel?');

  let itriation=6;

<<<<<<< HEAD
let note;
note = false;
let ASP = ['JINKO', 'CANNADIAN', 'LONGI', 'TRINA', 'PHILADELPHIA', 'QCELL'];
//let bestSB=prompt('What is my fav solar panel?');

let itriation = 6;

while (itriation) {
  note = prompt('What is my fav solar panel?');
  itriation -= 1;
=======
  while (itriation){
    note=prompt('What is my fav solar panel?');
    itriation-=1;


    for (let i = 0; i <ASP.length; i++) {
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3

      console.log(ASP[i]);

<<<<<<< HEAD
  for (let i = 0; i < ASP.length; i++) {
=======
      if (note===ASP[i]) {
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3

        alert(`Great answer, ${ASP[i]} is my best solar panel`);
        console.log(`Great answer, ${ASP[i]} is my best solar panel`);

<<<<<<< HEAD
    if (note === ASP[i]) {
=======
        Grade++;
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3

        break;

      }
    } if(itriation<6){
      alert('Try agin & read more about solar panels');


<<<<<<< HEAD
    }
  } if (itriation < 6) {
    alert('Try agin & read more about solar panels');
=======
    }if(!itriation){
>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3

      alert(' here are The truth answers'+ASP);

<<<<<<< HEAD
  } if (!itriation) {

    alert(' here are The truth answers' + ASP);


  }



=======

    }



>>>>>>> 8d088deff82e8211f3e346a5ab74df3cab37c3a3



  }
}
q7();




alert(`your grade is ${Grade}`);





