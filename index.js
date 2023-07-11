//alert('ok')






const jokeBtn = document.getElementById('joke-btn')
const jokeS = document.getElementById('joke');


function generateJoke () {

const xhr = new XMLHttpRequest();
 

xhr.open('GET',  'https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200){
              
        jokeS.innerHTML = JSON.parse(this.responseText).value;
         
    } else {
        jokeS.innerHTML = 'something went wrong'
    }

  };
}


xhr.send();

}

jokeBtn.addEventListener('click',  generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);


