document.addEventListener("DOMContentLoaded", function(){const jokeGenerator = document.getElementById('joke')
const btn = document.getElementById("btn")

const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () =>{
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((item)=>{
        jokeGenerator.textContent = item.joke
    })
}

btn.addEventListener("click", getJoke)

getJoke();
})