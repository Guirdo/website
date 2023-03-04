---
title: "APOD App"
date: 2022-12-09 13:59:00 -06:00
tags: [ReactJS,TechnicalTest]
description: "This a nice front-end app for the Astronomical Picture Of the Day API from Nasa."
featuredImage: 'https://res.cloudinary.com/dyuo7wfyi/image/upload/v1677338686/website/projects/apod-app_i8d5c5.webp'
promoted: true
repoUrl: 'https://github.com/Guirdo/apod-app'
demoUrl: 'https://apod-app-guirdo.vercel.app/'
stack: [JavaScript, ReactJS, SASS ]
---

I created this project for a company that I applied to. They asked me to choose a public API and then make a the front-end app to show and manage this API data.

I chose the Astronomical Picture of the Day api, because it was the simplest one and I wanted to focused on showing my front-end skills. 

## Tech stack

The technologies I used in this project and the reasons I chose them:

  - **ReactJS:** Under a component architecture I used ReactJS library for taking advantage of the reusability of the components.
  - **SASS** Alongside the **BEMIT** methodology, I decided to use this technology because it allows me to use nested styles.

## Features

The main features of this project are: 

- **Shows the astronomical picture of the day:** The first thing you see is the today's astronomical picture with its title, description and credits.
- **You can enter a different date:** Right above the picture, there is an date input where you can enter a different date, as long as that date is from 1995-06-16 to the current day.
- **Quality of the picture:** In the top right corner there is a switch which you can select the quality of the images that are displayed.
- **Play the Astronomical Video of the Day:** There also are days when there is a video instead of a image, so below the thumbnail will be a button to open a modal for watching it.
- **Random picture:** Every time you open this page it gives you a picture from a random date.
- **Share with friends:** There is a sharing button which you can share the current picture with just a link.

## What I learned from this project

The most important things I learned from this project are:

- To implement my own modals and their styles.
- To implement a custom switch with a checkbox input. 
- To customize the scrollbar.
