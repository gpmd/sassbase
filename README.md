# SassBase

> A simple Sass base for web projects

Follows a [BEM 'style'](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) methodology. Assumes you already have Node/NPM, Grunt and Bower installed.

## Clone the repo

```bash
git clone https://github.com/gpmd/sassbase.git sassbase
```

## Install the project dependencies

```bash
bower install
npm install
```

## Run the build

**Dev mode:**

```bash
grunt dev
```

**Production mode:**

```bash
grunt prod
```

**Styles reporting (SCSS lint / CSS stats):**

```bash
grunt report
```

## How to use in your own projects

Just copy the `src/styles` directory into your own project and 'hook' it up to your own Grunt/Gulp/Broccoli/Whatever workflow. Alternatively you could use the Grunt workflow here as a starting point, or checkout another of our projects, a simple grunt workflow starting point, [Gruntbase](https://github.com/gpmd/gruntbase).

---

Created by [Matt Bailey](http://mattbailey.io/).
