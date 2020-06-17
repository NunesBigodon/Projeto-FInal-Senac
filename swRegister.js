if ('ServiceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(function() {
            console.log("Service Worker registrado com sucesso");
        })
        .catch(function() {
            console.log("Falha ao registrar o service Worker");
        });
}