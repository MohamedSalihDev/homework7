function generateMarkdown(data) {
    return `# ${data.title}
    [![License: ${data.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${data.license})

___
# Table of Contents

### [Description](#description)

### [Instructions](#instructions)

### [Usage](#usage)

### [Contribution](#contribution)

### [Test](#contribution)

### [License](#license)

### [Questions](#questions)
___

> ## Description

${data.description}

> ## Instructions

${data.instructions}

>## Usage

${data.usage}

>## Contribution

${data.contribution}

>## Test

${data.test}


>## License
"This project is covered under the ${data.license} license"
  
>## Questions
My GitHub name is ${data.username}
If you have any questions you may reach
me at ${data.email} 

![Markdown Logo](https://markdown-here.com/img/icon256.png)

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    `;
  }
  
  module.exports = generateMarkdown;