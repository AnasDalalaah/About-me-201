'use strict';

const GA='Guten Abend'

alert(GA);

let yourName=prompt('what is your name?');
        console.log(yourName);

        let age=prompt('what is your age?');

        console.log(age);

        alert('Your name and age are written this way in the German language, Mein Name ist '   + yourName+ '  Ich bin '+ age +' Jahre alt');


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

let book=prompt('Do you like books? (yes/no)')

book=book.toLocaleLowerCase();
if (book==='yes') {
    //console.log('Good Choice');
    alert('Good Choice');
    
}else if(book==='no'){
    //console.log('You need a second chance');
    alert('You need a second chance');

}else{
    //console.log('Does not exist');
    alert('Your answer not exist');
}

let SMP=prompt("Do you like twitter?(YES/NO)")
SMP=SMP.toUpperCase();

if (SMP==='YES') {
    //console.log('The most reliable Socialmedia platform');
    alert('The most reliable Socialmedia platform');
    
}else if(SMP==='NO'){
    //console.log('Try the latest update');
    alert('Try the latest update');

}else{
    //console.log('Does not exist');
    alert('You should select(YES/NO)');
}

let music=prompt('Do you like music?(y/n)');

switch (music=music.toLowerCase()) {
    case 'y':
        //console.log('Calms nerves');
        alert('Calms nerves')
    
        break;
    case 'n':
    //console.log('Try to hear it');
    alert('Try to hear it');
        break;

    default:
        console.log('Please check the major entry next time');
           alert('Please check the major entry next time');
        break;
}

let party=prompt('Is the Conservative Party is the ruling party in Britain?(Y/N)');
switch (party=party.toUpperCase()) {
    case 'Y':
        //console.log('It is the correct answer');
        alert('It is the correct answer');
    
        break;

        case 'N':
            //console.log('It/s the wrong answer');
            alert('It Is the wrong answer');
        break;

    default:
        //cosole.log(' It is not the labour Party');
        alert(' It is not the labour Party');
        break;
}

let UNI=prompt('Is MIT University the best technical university in the world?(yes/no)');
 UNI=UNI.toLocaleLowerCase();

if (UNI==='yes') {
//console.log('Depending on the latest answer classification is correct');
alert('Depending on the latest answer classification is correct');    
}else if(UNI==='no'){
//console.log('Depending on the latest answer classification is wrong');
alert('Depending on the latest answer classification is wrong');

}

else {
    //console.log('Review your information');
    alert('Review your information');

    
}



    

