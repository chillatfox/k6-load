import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 30,
  duration: "30s"
};

export default function() {
loginUser();
}

function loginUser() {
  let url = "https://load.api2.fox.com/v2.0/login"
  let payload = JSON.stringify({ email: "TestingEmailFox+1@gmail.com", password: "B@rcel0na" });

  let params =  { 
    headers: { 
      "Content-Type" : "application/json", 
      "apikey" : "X9FJYSR7gE7CwJ3GfsPcR2P757k2hAAu", 
      "x-api-key" : "K547X6dHM1XFUaTqPeDFG30Fz147NeCB",
      "Cache-Type" : "no-cache" 
      } 

    }

let httpResult = http.post(url, payload, params.headers);

check(httpResult, {
  "is status 200": (r) => r.status === 200
})

sleep(1);
console.log (httpResult.status)
return httpResult;
};
