# black-jack

This is a solution to the [Blackjack game project on Scrimba](https://scrimba.com/learn/learnjavascript/). Scrimba helps you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
 
 
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Start a Blackjack game with first 2 cards
- Draw additional cards as long as they have sum < 20
- Can't draw a new card if they have Blackjack or a sum > 2

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

With this project I improved my JS skills. The newest things I learnt are:

- How to generate a random number and floor it to eliminate the decimal part with Math.floor() and Math.random() methods

```js
let randomNumber = Math.floor(Math.random() * 13) + 1;
```

- How to add new items to the end of an array usign push() method

```js
cards.push(card);
```
