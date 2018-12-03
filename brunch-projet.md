# Créer un projet React avec Brunch

## NPM

1. On lance `npm init` / `yarn init` pour créer un `package.json`.

2. On ajoute avec `npm install` / `yarn add` les dépendances du projet.


## Les modules à installer

### Développement

* Brunch
  + brunch
  + auto-reload-brunch
  + stylus-brunch
  + postcss-brunch@0.5.0
  + autoprefixer

```
yarn add --dev brunch auto-reload-brunch postcss-brunch@0.5.0 autoprefixer stylus-brunch
```

* Babel
  + babel-brunch (https://github.com/babel/babel-brunch.git)
  + babel-eslint
  + babel-plugin-transform-class-properties
  + babel-plugin-transform-object-rest-spread
  + babel-preset-env
  + babel-preset-react

```
yarn add --dev https://github.com/babel/babel-brunch.git babel-eslint babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react
```

* ESLint
  + eslint
  + eslint-config-airbnb
  + eslint-import-resolver-node
  + eslint-plugin-import
  + eslint-plugin-jsx-a11y
  + eslint-plugin-react

```
yarn add --dev eslint eslint-config-airbnb eslint-import-resolver-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

* Tests
  + mocha
  + chai
  + enzyme
  + react-test-renderer
  + jsdom
  + enzyme-adapter-react-16
  + babel-register
  + babel-resolver

```
yarn add --dev mocha chai enzyme react-test-renderer jsdom enzyme-adapter-react-16 babel-register babel-resolver
```


### Production

* React
  + react
  + react-dom
  + prop-types

```
yarn add react react-dom prop-types
```

* Babel
  + babel-polyfill

```
yarn add babel-polyfill
```

* Redux
  + redux
  + react-redux

```
yarn add redux react-redux
```

* Les bonus
  + axios : pour faire des requêtes (ajax ou http)
  + react-router-dom : pour faire un router front
  + classnames : pour faire des classes conditionnelles

```
yarn add axios react-router-dom classnames
```


## Scripts

* `start` : pour lancer le projet (compilation, watch, etc.)
  + `brunch watch --server`

* `build` : pour compiler le projet une seule fois
  + `brunch build --production`

* `lint` : pour lancer ESLint sur notre projet
  + `eslint --fix .`

* Test : pour lancer les tests du projet
  + `test` : `mocha tests/.setup.js tests/**/*.test.js`
  + `test:watch` : `mocha --watch tests/.setup.js tests/**/*.test.js`
  + `test:one` : `mocha --watch tests/.setup.js $1`

```json
"scripts": {
  "start": "brunch watch --server",
  "build": "brunch build --production",
  "lint": "eslint --fix .",
  "test": "mocha tests/.setup.js tests/**/*.test.js",
  "test:watch": "mocha --watch tests/.setup.js tests/**/*.test.js",
  "test:one": "mocha --watch tests/.setup.js $1"
}
```

## Créer les fichiers et dossiers

### L'arborescence

* `app` : le dossier de travail de Brunch
* `app/assets` : le dossier avec les assets, c'est-à-dire les fichiers qui ne doivent pas être compilés
* `app/src` : le dossier de nos fichiers js
* `app/src/components` : nos composants de présentations (et les fichiers css/stylus liés à ces composants)
* `app/src/containers` : nos containers redux (avec connect de react-redux)
* `app/src/store` : notre store redux, avec reducers, actions creators, middleware, etc.
* `app/styles` : le dossier pour nos fichiers css globaux
* `tests` : le dossier avec tous les tests, dedans on reprend l'arborescence de `app/src/`

### Les fichiers de config

* `.babelrc` : config de babel, pour dire ce qu'on va compiler (quel preset, quel plugin…)
* `.eslintrc` : pour se faire crier dessus :) la config d'ESLint
* `.eslintignore` : pour pas se faire crier dessus dans certains dossiers
* `.gitignore` : on ignore les fichiers que je ne veux pas commiter
* `.stylintrc` : pour se faire crier dessus aussi en Stylus
* `brunch-config.js` : config de brunch, qui nous permet d'indiquer à quel endroit on veut compiler + la config de modules…
* `tests/.setup.js` : le fichier qui permet d'utiliser babel (pour compiler le ES201x) et jsdom (pour simuler un navigateur)


## Compiler en Production

Permet de charger l'application plus rapidement :smiley:  
La ligne de commande à taper :

```
brunch build --production
```

ou avec le script :

```
yarn build
```

### CSS

* [Clean CSS](https://github.com/jakubpawlowicz/clean-css)
  + `yarn add --dev clean-css-brunch`


### JS

* [Uglify JS](https://github.com/mishoo/UglifyJS2)
  + `yarn add --dev uglify-js-brunch`


### Images

* [Imagemin](https://github.com/imagemin/imagemin)
  + `yarn add --dev imagemin-brunch`


## Autres options Brunch

* Pour changer le dossier de destination lorsqu'on compile

```js
exports.config = {
  // ...
  paths: {
    public: 'build',
  },
};
```

* Ajouter des modules automatiquement.  
Par exemple, ajouter automatiquement notre fichier racine.

```js
exports.config = {
  // ...
  modules: {
    autoRequire: {
      'js/app.js': ['src/index'],
    },
  },
};
```
