# Frontend Mentor - Chat app CSS illustration solution

This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size

### Screenshot

- [mobile view 1](./public/images/mobile-view-1.jpg)
- [mobile view 2](./public/images/mobile-view-2.jpg)
- [desktop view ](./public/images/desktop-view.jpg)

### Links

- [Solution URL:](https://github.com/eseodiase/chat-app)
- [Live Site URL:](https://eseodiase.github.io/chat-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow (developed entirely on my mobile device)
- [React](https://reactjs.org/) – JavaScript library for building user interfaces  
- [SASS](https://sass-lang.com/) – CSS preprocessor for writing cleaner, modular styles  
- [Vite](https://vitejs.dev/) – Next-generation frontend tooling for fast development  

### What I learned

This challenge significantly leveled up my coding skills. As my first experience with Sass, I discovered simpler variables compared to plain CSS.

```css before
:root{
  --primary: hsl(273, 101%, 55%);
}

.container{
  background: var(--primary);
}
```

```scss after
  $primary: hsl(273, 101%, 55%);

.container{
  background: $primary;
}
```

### Useful resources

- [Codespaces React Template](https://github.com/codespaces/new) – GitHub Codespaces starter template for React projects
- [Spck Editor Documentation](https://spck.io/docs) - Essential for mobile development setup and React SystemJS practice
- [Screenfly](https://screenfly.org) - Useful for responsive testing without multiple devices
- [Responsive Design Checker](https://www.responsivedesignchecker.com) - Also useful for responsive testing

## Author

- Frontend Mentor - [@eseodiase](https://www.frontendmentor.io/profile/eseodiase)

