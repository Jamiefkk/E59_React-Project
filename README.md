# Shares Portfolio Application

A local trader has come to you with a portfolio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a Minimum Viable Product that uses the data to display her portfolio so that she can make better decisions.

## Project Background

We (Ethan Baird, Andrew Scott Wise, Jamie Fogarty) completed this project as part of a week long sprint and presented our project as part of our CodeClan JavaScript/React module. We're still maintaining the project/refactoring it over time and below are instructions on how to run the project.

## MVP

A user should be able to:
- view total current value.
- view individual and total performance trends.
- retrieve a list of share prices from an external API and allow the user to add shares to her portfolio.
- View a chart of the current values in her portfolio.

## Extensions

Extensions
- Show a history of how stock buying options have changed in the last x timepoints.
- The ability to make it a multi-user app
- Increase number of symbols being used within the application past 5 (limitation created as a result of api fetch limits)

## API, Libraries, Resources

- https://www.alphavantage.co/
- https://www.highcharts.com/ HighCharts is an open-source library for rendering responsive charts.

### Getting Started

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

## System Requirements

- MongoDB Compass
