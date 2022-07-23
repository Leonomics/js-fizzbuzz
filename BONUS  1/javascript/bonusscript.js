const grigliaElement = document.querySelector('.griglia');
grigliaElement.innerHTML = '';


for (let i=1; i < 101; i++) {
    
    let number = i;
    const divElement = document.createElement('div');
    //divElement.append(number);
    divElement.classList.add('cella');
    console.log(divElement);
    grigliaElement.append(divElement);

    
    if  (number%3==0 && number%5!=0) {
        divElement.classList.add('fizz');
        //let fizz = document.querySelector(".fizz");
        //fizz.innerHTML = "Fizz";
        divElement.append("Fizz");
        console.log('Fizz');
        //grigliaElement.innerHTML = grigliaElement.innerHTML + `<div class="fizz"> ${"Fizz"}</div>`
        
        }
    else if (number%5==0 && number%3!=0)   {
        divElement.classList.add('buzz');
        divElement.append("Buzz");
        console.log('Buzz')
        
        
    }else if ((number%3==0) && (number%5==0)) {
        divElement.classList.add('fizz_buzz');
        divElement.append("FizzBuzz");
        console.log('FizzBuzz');
        
        
    }else   {
        console.log(number);
        divElement.append(number);
        
    }
    
}