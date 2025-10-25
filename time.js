function showWorldTime() {

const now = new Date();
const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,           // change to false for 24-hour format
};

// Different Zone's Time :
const pakistan = now.toLocaleTimeString("en-US", {...options, timeZone: "Asia/Karachi"});
const america = now.toLocaleTimeString("en-US", {...options, timeZone: "America/New_York"});
const london = now.toLocaleTimeString("en-US", {...options, timeZone: "Europe/London"});
const japan = now.toLocaleTimeString("en-US", {...options, timeZone: "Asia/Tokyo"});

// Display in HTML :
document.getElementById("pakistan").textContent = pakistan;
document.getElementById("america").textContent = america;
document.getElementById("london").textContent = london;
document.getElementById("japan").textContent = japan;

}

// initial call :
showWorldTime(); 

// Runs every second :
setInterval(showWorldTime, 1000);
