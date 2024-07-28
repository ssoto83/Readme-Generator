// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)';
      case 'Apache License 2.0':
        return '![License Apache](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
      case 'GPL 3.0':
        return '![License GPL](https://img.shields.io/badge/license-GPLv3-blue.svg)';
      case 'BSD-3-Clause':
        return  '![License: BSD](https://img.shields.io/badge/license-BSD%203--Clause-oranage.svg)';    
      default:
        return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/license/MIT';
    case 'Apache License 2.0':
      return 'https://opensource.org/license/apache-2-0';
    case 'GPL 3.0':
      return 'https://opensource.org/license/gpl-3-0';
    case 'BSD-3-Clause':
      return  'https://opensource.org/license/bsd-3-clause'; 
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  return `
 This project is licensed under the ${license} License.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me at ${data.email} with any questions about this repo. Review more of my work at (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;

