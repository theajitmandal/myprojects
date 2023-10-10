{/* <div id="joke" class="joke">Awesome Joke is loading...</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */}


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

//using fetch promise
// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }

//using async await for fetch api              
//async for trandional functions
// async function generateJokes() {

// }

//async await for fat arrow function
const generateJokes = async () => {
    try{
        const setHeader = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    }catch(err){
        console.log(`The error is ${err}`);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();