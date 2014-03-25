---
layout: default
title: Confessions of a UI Designer
date: 2014-03-25
---
If you're building software, in my case SaaS, you should be using some form of rapid prototyping. Skip redundant steps and figure out the interactions later. Spend time making pretty pictures after validating your idea. Your first goal: get a working prototype.

“Designer” is in my job title, but I don't recall the last time I opened Photoshop or Illustrator. I spend my time sketching, reading specs, deciphering user data and writing javascript and CSS. UI design is more than a fancy paint job. It’s organizing content in meaningful ways. It’s crafting effective interactions, something that is cumbersome in Photoshop. It’s asking yourself, “Am I adding value, or am I just putting chrome rims on a tractor?” Sure, 40 inch chrome spinners will make the tractor look sweet, but will the farmer care? As a UI Designer I advocate for the user, solving their problems before they know they exist.

Once you have a prototype you can determine look and feel, colour palette and what animations to use where. At this point rapid prototyping becomes a lot more powerful, but to take full advantage of that power you should be using a modular code base.

As a UI designer many of my modules are CSS based. It’s one of the best ways to maintain a cohesive look and feel across various components. When you decide to create your modules there are many methodologies available to you. Scalable Modular Architecture (SMACSS), Object Oriented (OOCSS), Don’t Repeat Yourself (DRY CSS), and Block, Element, Modifier (BEM). A recent post on <a href="http://www.creativebloq.com/css3/create-modular-and-scalable-css-9134351">Creative Bloq</a> gives you a good breakdown of each. It doesn't matter which you pick. Just find the one that makes the most sense to you and stick with it.

Modular CSS, and programming in general, will add a learning curve for new team members. In this situation good documentation while building your modules is invaluable. In the end, modular coding reduces development time, aids in rapid prototyping and allows for more thoughtful design. If you decide to use existing libraries, I recommend namespacing and extending just the rules you need (you’re using a preprocessor, right?). This can reduce bloat, save bandwidth and improve load times.

*TL;DR* - As a UI designer, your job is to look at problems and determine the best solutions, not the prettiest.

