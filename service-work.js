// Service Worker Básico para habilitar instalação PWA
const CACHE_NAME = 'master-control-v1';

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Instalando...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Ativado!');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Permite que todas as requisições (como o Firebase) passem direto pela rede
    event.respondWith(fetch(event.request).catch(() => {
        return new Response('Sem conexão com a internet');
    }));
});