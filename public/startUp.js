if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("serviceWorker.js").then(
      (registration) => {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (err) => console.log("ServiceWorker registration failed: ", err)
    )
  );
}
