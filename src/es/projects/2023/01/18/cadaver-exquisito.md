---
title: "Cadaver exquisito"
date: 2023-01-18 09:48:00 -06:00
tags: [solidjs,personal]
description: "Un juego de palabras donde tú y tus amigos escriben una historia o poema juntos, pero solo pueden ver el resultado al final del juego."
featuredImage: 'https://res.cloudinary.com/dyuo7wfyi/image/upload/v1716927203/website/projects/cadaver_exquisito_flghcn.webp'
promoted: true
demoUrl: 'https://exquisito.guirdo.xyz/'
repoUrl: 'https://github.com/Guirdo/cadaver-exquisito'
stack: [JavaScript, SolidJS, CSS ]
---

Versión web del juego creado por artistas surrealista del siglo XX. Consisten en escribir una historia o poema juntos, pero solo podrás ver lo que la persona del turno anterior escribió. Al final del juego veras el resultado del consciente costack: [JavaScript, ReactJS, SASS ]lectivo de tu grupo.

## Tecnologías y metodologias utilizadas

- SolidJS
- ViteJS
- Supabase

## Funcionalidades

- Partidas privadas: puedes crear una sala privada que con un link puedes invitar a tus amigos
- Partidas publicas: simplemente crea tu apodo y participa en el cadáver exquisito publico actual
- Comparte tu cadáver exquisito: una vez que hayas terminado de jugar, puedes compartirlo por medio de un link o puedes guardarlo como una imagen.
- Archivo de juegos: disfruta de los cadáveres exquisitos públicos que otros han escrito antes.

## Lo que aprendí

- Sala de chat en tiempo real: experimente con el servicio de Realtime de Supabase para ofrecer partidas en tiempo real
- Una nueva librería de componentes UI: con este proyecto puse en practica esta biblioteca de componentes UI que tiene funcionalidades que creo que a ReactJS le faltan.
- Medidas contra inyección de código: añadí un filtro para lo que escriba el usuario en el chat, para que así no inyecte código malicioso
- HTML a imagen: añadí la funcionalidad de compartir un cadaver exquisito como una imagen para facilitar al usuario el proceso de captura de pantalla
