import * as http from "http"; // http-Modul importieren

namespace Server.ts {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3000; //Port

    const server: http.server= http.createServer
         (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200;
            response.setHeader("Content-Type", "date/plain")
            response.setHeader("Access-Control-Allow-Origin", "*");
         
            
            let url: URL = new URL(request.url || "", 'http://${reqeust.headers.host}'); //Routing


            // Welcher Pfad vom Server verarbeitet wird
            switch (url.pathname) {
                case "/": //default pfad
                  response.write("Tag Leute");
                  break;
                case "/convertDate":
                let date: string=url.searchParams.get("DatumEingabe")
                  
                  console.log(date);
                  response.write("Heute ist der " + date + ", schoen euch zu sehen!"); 
                  break;
                default:
                  response.statusCode = 404;
              }
              response.end();
            }
          );

            server.listen(port, hostname, () =>{
                console.log('Server runnig at http://${hostname}:${port}');
            });
         }     
}