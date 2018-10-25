install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npx eslint .
even:
	npx babel-node -- src/bin/brain-even.js
brain:
	npx babel-node -- src/bin/brain-games.js
calc:
	npx babel-node -- src/bin/brain-calc.js
gcd:
	npx babel-node -- src/bin/brain-gcd.js
