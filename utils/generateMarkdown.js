// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ## License
    ${data.license}

    ## Description
    ${data.description}

    ## Table of Content
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license-1)
        - [Contributing](#contributing)
        - [Tests](#test)
        - [Questions](#questions)

    ## Installation
    To install necessary dependencies, run the following

    ${data.install}

    ## Usage
    ${data.usage}

    ## License
    The project is under ${data.license} license

    ### Contributing

    ${data.contribution}

    ### Test 
    To run the test, use the following command

    ${data.test}

    ### Questions

    For question about the repo, reach me at <${data.email}>, for work check out my GitHub [${data.github}](https://github.com/${data.github}) 


`;
}

module.exports = generateMarkdown;
