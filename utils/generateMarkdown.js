
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  if (license === 'Apache 2.0'){
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  }
  if (license === 'Mozilla Public License'){
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  }
  if (license === 'GNU GPL v3'){
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  }
  if (license === 'Eclipse'){
    return 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
  }
  if (license === 'Boost'){
    return 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
  }
  if (license === 'Perl'){
    return 'https://img.shields.io/badge/License-Perl-0298c3.svg'
  }
  if (license === 'SIL'){
    return 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg'
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'Mozilla Public License'){
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  if (license === 'GNU GPL v3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (license === 'Eclipse'){
    return 'https://opensource.org/licenses/EPL-1.0'
  }
  if (license === 'Boost'){
    return 'https://www.boost.org/LICENSE_1_0.txt'
  }
  if (license === 'Perl'){
    return 'https://opensource.org/licenses/Artistic-2.0'
  }
  if (license === 'SIL'){
    return 'https://opensource.org/licenses/OFL-1.1'
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  [![GitHub license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

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
  This project is licensed using the ${data.license} license. For details look here: ${renderLicenseLink(data.license)}

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
