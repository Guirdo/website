---
title: "Cadaver exquisito"
date: 2023-01-18 09:48:00 -06:00
tags: [solidjs,personal]
description: "A wordplay where your friends and you write a story or poem together, but you just can see the result until the end of the game"
featuredImage: 'https://res.cloudinary.com/dyuo7wfyi/image/upload/v1716927203/website/projects/cadaver_exquisito_flghcn.web'
promoted: true
demoUrl: 'https://exquisito.guirdo.xyz/'
repoUrl: 'https://github.com/Guirdo/cadaver-exquisito'
stack: [JavaScript, SolidJS, CSS ]
---

Web version of the game created by surrealist artists of the 20th century. It consists of writing a story or poem together, but you can only see what the person on the previous turn wrote. At the end of the game you will see the result of the collective consciousness of your group.

## Technologies and methodologies used

- SolidJS
- ViteJS
- Supabase

## Features

- Private games: you can create a private room that you can invite your friends to with a link
- Public games: simply create your nickname and participate in the current public exquisite corpse
- Share your exquisite corpse: once you have finished playing, you can share it via a link or you can save it as an image.
- Game archive: enjoy the public exquisite corpses that others have written before.

## What I learned

- Real-time chat room: I experimented with Supabase's Realtime service to offer real-time games
- A new UI components library: with this project I put into practice this UI components library that has functionalities that I think ReactJS lacks.
- Measures against code injection: I added a filter for what the user writes in the chat, so that they don't inject malicious code
- HTML to image: I added the functionality to share an exquisite corpse as an image to facilitate the user's screenshot process
