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

This project was part of my mentoring sessions in <a href="https://www.codygos.com/" target="_blank">Codygos</a>. My mentor showed me the Gutendex API, y for this challenge he asked me to implement things I never tried before and with the basic technologies, without any framework or library, unless it was necessary for the 2-week period for handing it.

In the end of the first stage, he asked to do a couple of unit and end-to-end tests with cypress.

## Design

First, I started with design part of the page and then to start with the marking up.

<iframe class="border-primary" width="100%" height="400"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FF9Dt4CVQlpJrPkWut7pgoZ%2Fgutendex-front-end%3Fnode-id%3D0%253A1%26t%3DnJ2ZlFx0yMcgqdDI-1" allowfullscreen></iframe>

## Features

* **Searching of books by author, title, topic and language:** it also posible to filter between the original source that is online and the local one.
*  **Results' pagination:** resulted books from the searching are showed inside cards with their basic information, as well as with a button for reading it online and another one for downloading it in ```.epub``` format.
* **Record of user's behavior:** in the dashboard page it will be the times users have searched books, showing graphs for searchings by author and by topics, and how many books they have added.
* **Local library:** user can add their own books which will be save in the local storage of the browser.

## What I learned from this project

* To use and set eslint and stylelint.
* To implement pagination for the searching results.
* To implement end-to-end tests with Cypress, and to configure it.
