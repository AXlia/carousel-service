
# AXlia similar homes carousel

This repo is part of a service-oriented architecture project focused on creating a home realty listing site.

The service contains two image carousels containing a list of homes similar to the current listing and also new homes. Service allows user to control carousel using trackpad or with clickable arrows utilizing styled-components. When scrolling with trackpad utilizes predictive function for arrows to disappear to allow the user to better view listings. Carousel cards display information about listing. User is able to hover over card image to zoom in and can like a listing with the ability to add listing to a list.


## Getting Started

### Requirements
  - Node 6.13.0
  - Express
  - Axios
  - MongoDB with Mongoose
  - React 16
  - Styled-Components with Styled-Icons
  - Webpack
  - Babel
  - Enzyme / Jest

### Installing

A step by step series of examples that tell you how to get a development env running

Install dependencies

```
  npm install
```
Run Webpack using Babel to compile bundle.js

```
  npm run build
```
Start server

```
  npm start
```
Seed database with placeholder data

```
  npm run seed
```


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

To run tests found in _tests_ directory use:

```
  npm run test

```

## Deployment

When deploying service, run docker compose in Docker directory. To start a container utilize:

```
  npm run start-container
```
instead of commands in Installation section


## Authors

* **Michelle Ward** - *Initial work* - [Michelle-Ward](https://github.com/Michelle-Ward)

## Related Projects
