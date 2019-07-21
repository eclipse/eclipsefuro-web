
### Commit style
We have activated **conventionalCommits** in the lerna config. 
[ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) is a specification for adding human and machine readable meaning to commit messages. 


## Quick start

> Note: This guide assumes you have npm installed locally.


First run `npm run bootstrap`

Then run `npm run serve`, this will start a server  http://127.0.0.1:7777

> Warning **! do never run** `npm install`

## Commands

### `npm run bootstrap`
Bootstraps the project (lerna,...) and links the packages

### `npm run doc`
rebuilds the documentation (analysis files)

### `npm run serve`
Starts the documentation server on port 7777

### `npm run build`
Builds the documentation

### `npm run lint:imports`
Check the imports

### `npm run test`
Runs the tests. There is an issue with the coverage at the moment. If you want to have the coverage, just run `polymer test` directly
