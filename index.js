const text = document.querySelector("#joke");
const button = document.querySelector("#button");

const getJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const resp = await fetch("https://icanhazdadjoke.com/", config);
  try {
    const data = await resp.json();
    text.textContent = data.joke;
  } catch (error) {
    text.textContent = "Error Joke";
  }
};

button.addEventListener("click", getJoke);

getJoke();
