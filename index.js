const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const apiKey = "wlHiUBzY+i0nI0sk7lC4fg==of9I5cRsT8aRCGc5";
const endpoint = "https://api.api-ninjas.com/v1/dadjokes?limit=";

const requestOptions = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};
async function getJoke() {
  try {
    jokeE1.innerText = "updating...";
    btnE1.innerText = "loading...";
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    jokeE1.innerText = data[0].joke;
    btnE1.innerText = "Tell Me a Joke";
  } catch (e) {
    jokeE1.innerText = "An error happened please try again";
    btnE1.innerText = "Tell Me a Joke";
  }
}

btnE1.addEventListener("click", getJoke);
