'use strict';

const GA='Guten Abend'

alert(GA);

let yourName=prompt('what is your name?');
        console.log(yourName);

        let age=prompt('what is your age?');

        console.log(age);

        alert('Your name and age are written this way in the German language, Mein Name ist '   + yourName+ '  Ich bin '+ age +' Jahre alt');


        let book=prompt('What do you want to read fields of environment or economy?');

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
}

    

