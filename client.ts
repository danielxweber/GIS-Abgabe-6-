namespace client.ts {

    console.log("Client läuft");

    const url: string = "http://127.0.0.1:3000";
    const path: string = "/convertDate"; //Spezifischer Pfad, an den die Anfrage gehen soll.

    const meineform: HTMLFormElement = <HTMLFormElement>document.getElementById("meineform"); //Referenzieren des Formulars
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button"); //Referenzieren des Send-Buttons

    //EventListener für ein Click-Event auf den sendButton
    sendButton.addEventListener("click", function(evt: Event){
        evt.preventDefault(); //Vermeiden, dass Event wie gewöhlich ausgeführt wird
        sendForm(); // sendForm-Funktion aufrufen.
    });

    console.log(meineform, sendButton); //Konsole-Log zum testen der HTML-Referenzen

    async function sendForm(): Promise<void> {

        //Vorbereiten der Formulardaten zum Sende-Prozess
        let formData: FormData= new FormData(meineform);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlWithQuery: string = url + path + "?" + query.toString(); //Formatierung der URL zum Senden an den Server
        let response: Response = await fetch(urlWithQuery); // Senden der Anfrage und warten auf Antwort
        let responseDate: string = await response.text();
        console.log(responseDate);
    }
}