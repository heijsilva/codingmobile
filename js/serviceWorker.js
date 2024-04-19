const SafeZone = 'v1';
const ativosEstaticos = [
  '/',
  '/index.html', 
  '/css/style.css',
  '/script/app.js'
];

self.addEventListener('install', async evento => {
  const cache = await caches.open(SafeZone);
  await cache.addAll(ativosEstaticos);
});

self.addEventListener('fetch', async evento => {
  const requisicao = evento.request; 
  const url = new URL(requisicao.url);

  if (url.origin === location.origin) {
    evento.respondWith(cachePrimeiro(requisicao));
  } else {  
    evento.respondWith(redeECache(requisicao));
  }
});

async function cachePrimeiro(requisicao) {
  const cached = await caches.match(requisicao);
  return cached || fetch(requisicao);
}

async function redeECache(requisicao) {
  const cache = await caches.open(stealdrink);

  try {
    const fresco = await fetch(requisicao);
    await cache.put(requisicao, fresco.clone());
    return fresco;

  } catch (e) {
    const cached = await cache.match(requisicao);  
    return cached;
  }
}

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/index.html')) {
    event.respondWith(
      new Response('<html><head><meta http-equiv="refresh" content="0;url=index.html"></head></html>', {
        headers: {'Content-Type': 'text/html'}
      })
    );
  }
});
