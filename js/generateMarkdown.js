// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return 
    case 'Apache License 2.0':
      return 
    case 'GPL':
      return 
    case 'BSD':
      return     

    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://opensource.org/licenses/GPL-3.0';
    case 'BSD-3-Clause':
      return  'https://opensource.org/licenses/BSD-3-Clause';  

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
  return `##license
 This project is licensed under the ${license} License.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Descrition](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation})

  ## Usage
  ${data.usage}

  ${renderLicenseSection}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact ${data.email} with any questions about this repo. Review more of my work at [${data.github}](https://github.com/${data.github});
`;
}

module.exports = generateMarkdown;

