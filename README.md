# SportSee

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of contents

-   [Description](#description)
    -   [Scenario](#cenario)
    -   [Highlights](#highlights)
-   [Live demo](#live-demo)
-   [Installation](#installation)
-   [How to use](#how-to-use)
    -   [Visualize and edit the project](#visualize-and-edit-the-project)
    -   [Use the tests](#use-the-tests)

## Description

### Scenario

SportSee is a sport coach app. For this project, I had to develop the profile page. This page is a dashboard that must display the user's data (fetched from an API).

### Highlights

-   This project was made with [React](https://reactjs.org/) and builded with [Vite](https://vitejs.dev/).
-   I had the choice between [D3.js](https://d3js.org/) and [Recharts](https://recharts.org/) to build the charts. After testing both, I sticked with Recharts for more convenience. A simple bar chart test and setup of D3 + React can be found on [this branch](https://github.com/leoncik/LeonardWojcik_12_18062022/tree/feat/graph-d3-version) (created very early in the development so most elements are not integrated and the graph itself is not completed. It just gives an idea about how to setup a D3 + React project and structure the code).
-   I used [TypeScript](https://www.typescriptlang.org/) in order to make the code more robust and prevent bugs while formatting data.
-   In order to ensure the code quality, I have used [Husky](https://typicode.github.io/husky), [lint-staged](https://www.npmjs.com/package/lint-staged), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to lint and format the code.
-   I have written and set up some tests using [Vitest](https://vitest.dev/). They will run before each "push" (through Husky) in order to prevent regressions.

## Live demo

Use this link to try the project (with mocked data) : https://leonard-wojcik-p12.netlify.app/

## Installation

1. Get this repository's content by [direct download](https://github.com/leoncik/LeonardWojcik_12_18062022/archive/refs/heads/main.zip) or by cloning It :

```sh
git clone https://github.com/leoncik/LeonardWojcik_12_18062022.git
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)). Then install the dependencies :

```sh
yarn install
```

3. You are ready to do !

## How to use

### Visualize and edit the project

1. Run the backend :
    - Make sure that you are in the right directory `cd API`.
    - Run `yarn dev`.
    - Magic will happen on port 3000.

For more information about this API, check the README inside of the API folder or directly on the source repository : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

2. Run the frontend :

    - Make sure that you are in the root directory of the project.
    - Run `yarn dev`.

3. You should be able to view the website on : http://localhost:3001/

### Use the tests

To run and watch the tests in the console, run : `yarn test`.

To get a coverage report while running the tests, run : `yarn coverage`. If you want to visualize the coverage report, you can run a live server (if you are using VSCode, I recommend using [this extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) and use this url : http://127.0.0.1:5500/coverage/index.html

[⬆ Back to top](#sportsee)
