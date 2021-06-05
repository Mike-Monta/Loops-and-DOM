function countdown(){
    for (let i=10; i>=0;i--){
        const output = document.querySelector('.container');
        const para = document.createElement("p");
        output.append(para);
      
        if (i=== 10){
        para.textContent = "Countdown start: "+ i ;
        }else if( i===0){
            para.textContent = "Blast off!!!";
        }else para.textContent = i;
        
   }
 }
 //Guest lists
function getSorted(){
    const people = ['Crhis','Anne','Colin','Terri','Phil','Lola','Sam','Kay',
    'Bruce'];
    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';
    for (let i=0; i < people.length; i++){
        if (people[i] === "Phil" || people[i]=== "Lola"){
            refused.textContent += (people[i]+ ", ");
        }else{
            admitted.textContent += (people[i] + ", ");
        }
    }
}

// list items on ul
function showUnorderedList(){
    const people = ['Crhis','Anne','Colin','Terri','Phil','Lola','Sam','Kay',
    'Bruce'];
    const aqui = document.querySelector('.unorderedList');
    const unorderedList = document.createElement('ul');
    aqui.appendChild(unorderedList);
    const dentro  = document.querySelector('ul');
    for (let i=0; i<people.length;i++){
       const cosa = document.createElement('li');
        cosa.textContent= people[i];
        dentro.appendChild(cosa);
    }
}
// find and list in 'p' if a name is in an array of objects
function findOnPhonebook(user){
    const para = document.createElement('p');
    const section= document.querySelector('section');
    for (let i=0;i<phonebook.length;i++){
        console.log(i);
        if (user === phonebook[i].name){
            section.appendChild(para);
            para.textContent= user + "  " +phonebook[i].number;
            break;
        }else {
            section.appendChild(para);
            para.textContent= "Name not found on phonebook";
        }
    }

}
// is number prime?
function isPrime(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }

// list the prime numbers through 500 and 2 
function listPrimeNumbers(number){
    const aqui = document.querySelector('.primos');
    const para = document.createElement('p');
    aqui.appendChild(para);
    const dentro = document.querySelector('p');
    dentro.id = "dentro";
    for(let i= number; i>1 ; i--){
       
            //const dentro= document.querySelector('.pimos);
         if (isPrime(i)){
            console.log(i);
           
            dentro.textContent += " "+i;
                      
        
        }
    }  
}

const listOfFunctions = ['countDown() ','getSorted() ','showUnorderedList() ',
    'findOnPhonebook(name) ', 'listPrimeNumbers() '];
let phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
  ]

const showHeader = document.createElement('header');
const body = document.body;
body.prepend(showHeader);
showHeader.textContent = "Type on the console:    "+listOfFunctions;