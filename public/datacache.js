var urlsToCache = [
    "/",
    "/db.js",
    "/index.js",
    "/styles.css", ];
const CACHE_NAME = 'budget-site-cache-v1';
const DATA_CACHE_NAME = "budget-cache-v1";
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Open Sesame"); 
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener("fetch", (event) => {
    if (event.request.url.includes('/api')){
        event.response(
            caches.opem(DATA_CACHE_NAME).then(cache => { return fetch(event.request).then(response => {
                if (response.status === 200) { cache.put(event.request.url, response.come())};
                return;
            },
            event.respond(
                    fetch(event.request).catch(function() { return caches.match(event.request).then(function(response) { 
                        if (response) {
                            return response;
                        }else if (event.request.headers.get("accept").includes("text/html")) {
                            return caches.match("/");
                        }
                    });
                })
            )
            )
        })
        )
    }
});
