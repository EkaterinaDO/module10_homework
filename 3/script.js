
const wsUrl = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
    const infoOutput = document.querySelector(".info_output");
    const chatOutput = document.querySelector(".chat_output");
    const input = document.querySelector("input");
    const sendBtn = document.querySelector(".btn_send");
    const locationBtn = document.querySelector(".geo_location");

    let socket = new WebSocket(wsUrl);

    socket.onopen = () => {
        infoOutput.innerText = "Соединение установлено";
    }

    socket.onmessage = (event) => {
        writeToChat(event.data, true);
    }

    socket.onerror = () => {
        infoOutput.innerText = "При передаче данных произошла ошибка";
    }

    sendBtn.addEventListener("click", sendMessage);
    //////////////////////////////////////////////////определение местоположения 
    locationBtn.addEventListener("click", geoLocation);

    function geoLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        } else {
            infoOutput.innerText = "Ваш браузер не поддерживает определение местоположения";
        }
    }


    function locationSuccess(position) {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        sendMessageLocation(link);
    }

    function sendMessageLocation(link) {
        chatOutput.innerHTML += `<a class="link" href="${link}" target="_blank">Гео-локация</a>`;
    }

    function locationError() {
        infoOutput.innerText = "Произошла ошибка";
    }

/////////////////////////////////////////////////////////////////////////////////
function sendMessage() {
    if (input.value === "") return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
}

function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved ? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
}
}

document.addEventListener("DOMContentLoaded", pageLoaded);