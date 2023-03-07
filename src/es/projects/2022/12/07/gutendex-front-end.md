---
title: "Gutendex library"
date: 2022-12-07 09:41:00 -06:00
tags: [JavaScript,TechnicalTest]
description: "Aplicación front-end para la API de Gutendex"
featuredImage: 'https://res.cloudinary.com/dyuo7wfyi/image/upload/v1678204000/website/projects/gutendex-library_f0sdnz.webp'
repoUrl: 'https://github.com/Guirdo/gutendex-front-end/'
demoUrl: 'https://gutendex-library.onrender.com/'
stack: [HTML, CSS, JavaScript ]
---

Este proyecto fue parte de mis sesiones de mentoría en <a href="https://www.codygos.com/" target="_blank">Codygos</a>. Mi mentor me presento la API de Gutendex, y para este reto me pidió que aplicara cosas que nunca había hecho y que todo lo hiciera con las tecnologías básicas sin ningún framework y tampoco librerías, a menos que fuera totalmente necesario por el lapso de 2 semanas para entregarlo.

Al finalizar la primera etapa me pidió que realizará un par de pruebas unitarias y End-to-end con cypress. 

## Diseño

Primero empece por la parte del diseño de la página para luego empezar con la maquetación.

<iframe class="border-primary" width="100%" height="400"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FF9Dt4CVQlpJrPkWut7pgoZ%2Fgutendex-front-end%3Fnode-id%3D0%253A1%26t%3DnJ2ZlFx0yMcgqdDI-1" allowfullscreen></iframe>

## Funcionalidades

* **Búsqueda de libros por autor, título, tema e idioma:** también se puede filtrar entre la fuente original que es en linea o la local.
*  **Paginación de los resultados:** los libros que resulten de la búsqueda se muestran en tarjetas con su información básica, así como un botón para leerlo en linea y otro para descargarlo en formato ```.epub```.
* **Registro del comportamiento del usuario:** en la página de Dashboard se encontrara la veces que el usuario ha realizado búsquedas, mostrando gráficas para búsquedas por autor y por tema, y cuantos libros ha añadido.
* **Biblioteca local:** el usuario puede añadir sus propios libros que serán guardados en el almacenamiento local del navegador.

## Lo qué aprendí en este proyecto

* Utilizar eslint y stylelint y configurarlos.
* Implementar paginación en los resultados de búsqueda.
* Realizar pruebas end-to-end con Cypress y configurarlo.
