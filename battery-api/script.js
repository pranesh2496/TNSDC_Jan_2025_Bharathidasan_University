/*
API (Application Programming Interface):
1) API stands for Application Programming Interface.

2) is a set of functions that allow you to access data 
from a server.

3) It allow many different kinds of application to access
data from a server.

4) API allow you to create your own application from a 
different application

5) It create a connection between two or more applications

6) API is like a waitress that waits for a request from
a client.

Types of API:
1) Browser API
2) Thirdparty API

Navigator:
The navigator object in JavaScript provides information about 
the user's browser and operating system.

here are some commonly used properties 
available in the navigator object:

navigator.appCodeName;
navigator.appName;
navigator.appVersion;
navigator.cookieEnabled;
navigator.language;
navigator.languages; // newer property
navigator.onLine;
navigator.platform;
navigator.product;
navigator.userAgent;
navigator.vendor;
navigator.hardwareConcurrency; // newer property
navigator.maxTouchPoints; // newer property
navigator.mediaDevices; // MediaDevices API (not supported 
by all browsers)
navigator.mediaSession; // Media Session API (not supported 
by all browsers)
navigator.serviceWorker; // Service Worker API (not supported
 by all browsers)
navigator.bluetooth; // Web Bluetooth API (not supported 
by all browsers)
navigator.credentials; // Credential Management API (not 
supported by all browsers)
navigator.permissions; // Permissions API (not supported by 
all browsers)

The commonly used properties related to battery information 
that can be found in the navigator object, specifically 
under navigator.getBattery() or navigator.battery:

navigator.getBattery; // Check if the getBattery() method is 
available

// Properties available under navigator.getBattery() or 
navigator.battery (deprecated)
navigator.battery;
navigator.getBattery;

// Properties available under battery or getBattery promise
battery.level;
battery.charging;
battery.chargingTime;
battery.dischargingTime;
battery.onchargingchange; // Event handler
battery.onchargingtimechange; // Event handler
battery.ondischargingtimechange; // Event handler

IN Operator:
The in operator returns true if the specified property is in
the specified object or it's prototype chain.
*/

const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);
// Battery API
const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateChargingTimeChangeInfo();
        updateDischargingTimeInfo();
        updateLevelChange();
      }
      updateAllBatteryDetails();

      // battery charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";

        batteryCharging.innerHTML = isCharging;
      }
      // battery charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeChangeInfo();
      });
      function updateChargingTimeChangeInfo() {
        // console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      // battery discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      // Battery Level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
    });
  }
};
battery();
