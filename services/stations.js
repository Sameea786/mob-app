// import * as SecureStore from 'expo-secure-store';



export async function getEmptyStation(authData) {

  const response = await fetch('https://us-central1-cloud-function-learn-318812.cloudfunctions.net/get_started', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(authData) // body data type must match "Content-Type" header
  });
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    console.log("json")
    return response.json();
  } else {
    console.log(response.text())
    return response.text();
  }
  //return response.json(); // parses JSON response into native JavaScript objects
    // const response = await fetch('http://localhost:8761/services/employeeservice/employeeservice:3d0beb8cc748236fe3505fb3a2ae73cd/api/reservations', {
    //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'no-cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     headers: {
    //       "content-type": "application/json",
    //       'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyODE2OTU3Mn0.MhCpQak23FWLtZ9LSM4PaD_Bn6U3KGiCIRdWgZawRJIouBv51eiPg-_Dh0mQhXIF1cLcFUSaPWEmb_Y-nL9S9w'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     //body: JSON.stringify() // body data type must match "Content-Type" header
    //   });
    //   const contentType = response.headers.get("content-type");
    //   if (contentType && contentType.indexOf("application/json") !== -1) {
    //     console.log("json")
    //     return response.json();
    //   } else {
    //     console.log("text")
    //     console.log(response.text())
    //     return response.text();
    //   }
      //return response.text(); // parses JSON response into native JavaScript objects
};