**Note: Work-in-progress, nothing much to see here...**

# SassBase

> A simple Sass base for web projects

Includes an example Grunt workflow. Assumes you already have Node/NPM, Grunt and Bower installed.

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

Includes [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin).

```bash
grunt prod
```

**Styles reporting:**

Includes [scsslint](https://github.com/ahmednuaman/grunt-scss-lint), [stylestats](https://github.com/tvooo/grunt-stylestats) and [csscss](https://github.com/peterkeating/grunt-csscss).

```bash
grunt report
```

## How to use in your own projects

Just copy the `src/styles` directory into your own project and 'hook' it up to your own Grunt/Gulp/Broccoli/Whatever workflow. Or use the Grunt workflow here as the starting point for your own.

---

Created by [Matt Bailey](http://mattbailey.io/).
