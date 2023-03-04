---
title: "Mustalk"
date: 2022-04-08 10:03:00 -06:00
tags: [ReactJS,Personal]
description: "A place where you can share your taste in music and talk about it with more details"
featuredImage: 'https://res.cloudinary.com/dyuo7wfyi/image/upload/v1677594695/website/projects/mustalk_ormvre.webp'
promoted: true
repoUrl: 'https://github.com/Guirdo/mustalk'
demoUrl: 'https://mustalk.vercel.app/home'
stack: [JavaScript, SASS, NextJS,Redux,Supabase]
---

This was personal project that is still on. The idea came to me because I was thinking about a lot about social networks and I wanted to know how to build one. This was a very exciting and amusing project to do.

## Tech stack

The technologies I used in this project and the reasons I chose them:

- **SASS:** I implemented the styles of this project with this technology with the BEMIT methodology, because I was learning them.
- **NextJS:** As the previous one, I was learning this framework of **ReactJS**.
- **Redux:** I used it for the general state management among the components.
- **Supabase:** I used this one because I was looking for an alternative for firebase, and I loved it. Supabase helps to manage the authorization process with its API.

## Features

The main features of this project are: 

- **Log in with a magic link:** Forget about creating a new password, just enter you email and you'll receive a magic link.
- **Post a song you like:** Share to world what you are listening to right now and what you think about that song.
- **Like, bookmark and share a post from another user**
- **Edit your profile:** Add a profile photo, edit your bio and add a link to your website.

## Pain points

- The process of verification of a new user is poorly implemented and I got a lot of spam when I shared it in a facebook group. I'll improve it in the future.
- Likes and bookmarks seen pretty easy when you just use them, but in the technical side they are complex. 

## What I learned from this project

The most important things I learned from this project are:

- How a Like and Bookmark processes work internally.
- How the verification email process work.
- How to implement my styles with SASS and the BEMIT methodology with a specific file and folder structure.
- How to implement reducers and dispatchers in Redux.