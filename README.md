# on-covid-19

An overly simplified COVID-19 infections spread estimator library. Think of this as a simple and intuitive programming interface that allows you to take in data and own estimating the impact of Covid-19 infections for a population, over a given period of time.

## Installation & Setup

TBD


## Usage

Here is how this library could be used :

```javascript

// src/estimator.js
const covid19ImpactEstimator = async data => {
  // this is where the estimation 
  // will happen, using all that is in 
  // the input data parameter object

  return {};
};

export default estimator;

// src/app.js
import onCovid19 from "on-covid-19";
import estimator from "path/to/estimator.js";

const lagosNG = {
  reportedCases: 50,
  population: 22000000
};

const run = async () => {
  const result = await onCovid19(lagosNG, estimator)
    .estimateImpactAfter(30)
    .days();

  console.dir(result);
};

run();

```

<!--- 
E.g There will be 79 beds left to treat 3,500 severe COVID-19 patients who require hospitalization to recover.

THIS IS THE BIG PROBLEM: Nigeria will only have 79 unfilled beds but without extreme social distancing 
will have 921 sever COVID-19 positive cases 30 days from now. 
HOW ARE WE GOING TO TREAT THE OTHER 842 PATIENTS THAT REQUIRE HOSPITALIZATION TO RECOVER? 
(We would need 3.7 more hospitals the size of UBTH, each with 226 beds, to handle this number of patients).

Nigeria has five hospital beds per 10,000 population cc page 13 of https://www.rvo.nl/sites/default/files/Market_Study_Health_Nigeria.pdf
-->
