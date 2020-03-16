# [Frontend Assessment](https://docs.google.com/document/d/10pN8oEhspg-glIR4OzmivH5diAveAzO-ZEjQQckX0J0/edit#)

## Requirements
* Node.js
* NPM

## For run app follow this instructions
### Package installation

```bash
git clone https://github.com/Pavel1104/raisenow-assessment.git
cd raisenow-assessment
```

```bash
npm install
```
or
```bash
yarn install
```

 ### Start the React App
 Excute the following command:
```bash
npm run dev
```
or
```bash
yarn dev
```

### The application will start automatically in your browser on [http://localhost:3000](http://localhost:3000) to view it in the browser.

___

### Frontend Assessment
#### Task 1
Publish the provided design files to a responsive markup with a strong focus on visual appearance (margins, paddings, etc…). It is up to you, if you want to use an existing CSS Framework like Bootstrap 4 or an own solution. We recommend using Bootstrap 4 and including it from a Content Delivery Network. Provided are 2 Viewports - Desktop and Mobile. Come up with a solution for the missing viewports and handling of the visual on the left hand side.

##### Requirements
- [x] Header Bar and Step Indicator should be fixed.
- [x] Radio Buttons should be custom SVGs and are included as assets in the Zeplin project.
- [x] Use CSS Transitions for Button interactions like Hover. States are also included in the Zeplin project.

#### Task 2

Create a react app based on the produced html. When clicking on the “Next” button, the app should POST the data to a REST API.

POST Data in case of “Test” is ticked
```bash
{
  mode: test
}
```
POST Data in case of “Production” is ticked
```bash
{
  mode: production
}
```

##### Requirements

- [x] Commit your code to git repo
- [x] Write inline documentation and a readme how to setup.
- [x] Use axios to POST the data to the endpoint
- [x] Create a mock for the endpoint. If the data is valid send an HTTP response “Accepted” back otherwise a “Bad request”.

#### Ressources

You will get an Email invitation to join the project on Zeplin.
Designs and assets are all provided in Zeplin Project: https://zpl.io/aMjR837
Roboto Font: https://fonts.google.com/specimen/Roboto
