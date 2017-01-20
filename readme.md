# BoilerPlate
> Boilerplate for simple front-end projects

## How to Install

Make sure you have [GulpJS](http://gulpjs.com/) installed.

To install gulp-cli run:
```sh
$ npm install gulp-cli -g
```

Install Boilerplate dependencies:

```sh
$ npm install
```

Serve files:
```sh
$ gulp serve
```

## The Stack
- [GulpJS](http://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Pug](https://pugjs.org/api/getting-started.html)

## Folders Structure:
```
.
├── app
│   ├── scripts
│   │   ├── app.js
│   │   ├── modules
│   │   └── pages
│   ├── styles
│   │   ├── helpers
│   │   ├── layout
│   │   ├── pages
│   │   └── main.scss
│   └── templates
│       ├── includes
│       └── index.pug
├── gulpfile.js
├── package.json
└── readme.md
```

Build should be like this:

```
├── build
│   ├── css
│   │   └── main.css
│   ├── includes
│   └── js
│   │   ├── main.js
│   │   └── main.js.map
│   └── index.html
```


## Problems & Contribution
If you found some problem please open an issue.
Feel Free to use and contribute =)

License: MIT
