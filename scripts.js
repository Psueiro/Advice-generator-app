
const apiUrl = 'https://api.adviceslip.com/advice'


function fetchEvent()
{
    fetch(apiUrl, {cache: "no-store"})
    .then((response) =>  response.json())
    .then((data) => renderAdvice(data));
}


function clickEvent()
{
    button.addEventListener("click", fetchEvent())

}


function renderAdvice(data)
{
    const slipid = document.getElementById("adviceID");
    const advice = document.getElementById("advicetext");
    slipid.innerHTML = "ADVICE # " + data.slip.id;
    advice.innerHTML = '" '+ data.slip.advice + ' "';
}

window.onload = fetchEvent();