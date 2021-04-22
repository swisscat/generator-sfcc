# Contributing to this repository

Please follow the below contribution rules.

## Branch Names

Branches should be created as follows: `category/branch`

Where category is one of the following:

* feature
* bugfix
* hotfix

## Commit messages

The following shall be followed: https://www.conventionalcommits.org/en/v1.0.0/

## Commit authors

All contributors are expected to properly author their commits with their work credentials.

## Submitting a pull request

  1. In your pull request, include:
       * A brief description of the problem and your solution
       * (optional) Screen shots
       * (optional) Error logs
       * (optional) Steps to reproduce

  2. Indicate if there is any data that needs to be included with your code submission.

  3. Your code should pass the automation process (if applicable).
       * Lint your code:
         `npm run lint`
       * Run and pass the unit test:
         `npm run test`
       * Run and pass the unit/intergration test:
         `npm run test:integration`
