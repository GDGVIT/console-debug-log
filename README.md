<p align="center">
	<img src="https://user-images.githubusercontent.com/30529572/72455010-fb38d400-37e7-11ea-9c1e-8cdeb5f5906e.png" />
	<h2 align="center"> Debug logger </h2>
	<h4 align="center"> Node.js tooling to log only in debugging environments <h4>
</p>

--- 

# Functionalities
- [x] Log entries only when DEBUG environment variable is set.
- [ ] Customizable environment variable name for debugging.

<br>


# Instructions to run

* Pre-requisites:
	- Node.js
    - NPM

* Directions to install: 
    - Navigate to your project directory. 
	- Run `npm i -s console-debug-log`

<br>

# Usage instructions
Usage is very straightforward after installation.

## Require in the package
```js
const log = require('console-debug-log');
```

## Log wherever needed
```js
log.debug('Sample Text');
// will print out "Sample Text" to stdout if the DEBUG environment variable is set
```

# Contributors

* [ Pragati ](https://github.com/Pragati1610)

<br>
<br>

<p align="center">
	Made with :heart: by DSC VIT
</p>
