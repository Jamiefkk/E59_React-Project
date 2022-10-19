# Financial Gains House
<b> Contributors: [Ethan](https://github.com/ethanBaird), [Andrew](https://github.com/andrewswise27) & 
[Jamie](https://github.com/Jamiefkk)</b>

A full-stack application allowing a user to view the current value of different stocks, and manage their own personal profile.

This application was built as a week long project whilst studying at CodeClan.


## Contents 

* [Video](#video)
* [Technologies](#technologies)
* [Brief](#brief)
* [Challenges](#challenges)
* [Installation](#installation)

<br>


## Video




<br>


## Technologies

These are the main technologies we used to contruct the project.

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br>


## Brief

A local trader has come to you with a portfolio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a Minimum Viable Product that uses the data to display her portfolio so that she can make better decisions.

**MVP**

A user should be able to:

- [x] view total current value.
- [x] view individual and total performance trends.
- [x] retrieve a list of share prices from an external API and allow the user to add shares to her portfolio.
- [x] View a chart of the current values in her portfolio.


**Extensions**

- [x] Show a history of how stock buying options have changed in the last x timepoints.
- [x] The ability to make it a multi-user app
- [x] Increase number of symbols being used within the application past 5

<br>

## Challenges

Here are some of the things we've found difficult:

* Handling lots of data from an external API with a request limit 
* Asynchronicity! Rendering components with all the relevant information loaded


<br>


## Installation

To run the app open your CLI and run the follwoing in both the 'server' and 'client' directory

```bash
npm i 
```

then in 'server'

```bash
npm run seeds
npm run server:dev
```

then in 'client' 

```bash
npm start
```

which should then launch the app. We recommend using Chrome as your browser.




