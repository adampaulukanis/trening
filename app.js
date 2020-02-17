if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => {
      console.log('Registration succeeded.', reg);
    })
    .catch((error) => {
      console.log('Registration failed with ' + error);
    });
}
