// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![GitHub license](RETURN LINK TO LICENSE BADGE HERE)](RETURN LINK TO LICENSE HERE)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed using the ${data.license} license. For details look here: 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  [GitHub](https://github.com/${data.github})
  email: ${data.email}

`;
}

module.exports = generateMarkdown;
