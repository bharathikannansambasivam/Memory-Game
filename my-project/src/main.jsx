import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const updateServiceWorker = (registration) => {
  if (registration.waiting) {
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
    registration.waiting.addEventListener("statechange", (event) => {
      if (event.target.state === "activated") {
        // Reload the page when the new Service Worker activates
        window.location.reload();
      }
    });
  }
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const registration = await navigator.serviceWorker.register("/sw.js");
    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // Notify user of the available update
            const userAcceptsUpdate = confirm(
              "A new version of this app is available. Would you like to update now?"
            );
            if (userAcceptsUpdate) {
              updateServiceWorker(registration);
            }
          }
        });
      }
    });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
