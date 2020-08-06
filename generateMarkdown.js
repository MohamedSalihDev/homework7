function generateMarkdown(data) {
    return `
    ![Markdown Logo](https://markdown-here.com/img/icon256.png)

    # ${data.title}
    [![License: ${data.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${data.license})

___
# Table of Contents

### Description

### Instructions

### Usage

### Contribution

### Test

### License

### Questions
___

> ## Description

${data.description}

> ## Instructions

${data.instructions}

> ## Usage

${data.usage}

> ## Contribution

${data.contribution}

> ## Test

${data.test}


> ## License
"This project is covered under the ${data.license} license"
  
## Questions
My GitH
If you have any questions you may reach
me at ${data.email} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    `;
  }
  
  module.exports = generateMarkdown;