const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
const APICALL = "https://icanhazdadjoke.com/";

button.addEventListener('click', getJoke);


async function getJoke() {
    const config = {
        headers: {
            "Accept": 'application/json'
        }
    }
    const jokedata = await fetch(APICALL, config);
    const data = await jokedata.json();
    jokeText.innerHTML = data.joke;


}

