self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("xaironx").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js"
      ]);
    })
  );
});
