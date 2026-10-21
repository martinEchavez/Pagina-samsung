// Mapa: el iframe de Google Maps (~400 KB de JS) se carga solo cuando lo tocan
document.querySelectorAll('[data-map-embed]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = link.dataset.mapEmbed;
        iframe.className = 'rounded';
        iframe.title = 'Ubicación en Google Maps';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        link.replaceWith(iframe);
    });
});

// Google tag (gtag.js): se descarga cuando la página terminó de cargar, para no competir con lo visible
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11489861567');
window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11489861567';
    document.head.appendChild(script);
});
