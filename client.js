"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const meineform = document.getElementById("meineform");
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    console.log(meineform, sendButton);
    async function sendForm() {
        let formData = new FormData(meineform);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseDate);
    }
})(Client || (Client = {}));