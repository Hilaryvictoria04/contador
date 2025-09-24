self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-tempo-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icone-512.png",
                "icone-192.png",
                "src/imagem",



            ]);


        })


    );

});

self.addEventListener("fetch", event => {
    event.respondwith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});