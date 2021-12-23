import {Reproductor} from './reproductor.js';

function dibujarIframe(url, id) {
    $(`#${id}`).html(`<iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
   // usar jQuery para dibujar el iFrame
}

// Paso 1: Buscar 3 videos (max 8 mins) y ponerlos directo en HTML

// Paso 2: Crear la función dibujarFrame, y ejecutarla 3 veces (Query)

// Paso 3: Crear las clases

// Paso 4: Crear las instancias

// Paso 5: Hacer que las instancias de la clase "Reproductor" llame a la función dibujarIframe


// Instanciar classe reproductor
const musica = new Reproductor ("https://www.youtube.com/embed/QqtHBNLWfew?start=15", 'musica');
const peliculas = new Reproductor ("https://www.youtube.com/embed/6Hhckwi_w5g?start=15", "peliculas");
const series = new Reproductor ("https://www.youtube.com/embed/tSY3CWbH7mk?start=15" , "series");

// 
musica.playMultimedia(dibujarIframe)
peliculas.playMultimedia(dibujarIframe)
series.playMultimedia(dibujarIframe)

console.log("cree las instancias")
