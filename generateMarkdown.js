function generateMarkdown(data) {
    return `# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}%20-blue.svg)

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

 ## Description

>${data.description}
![screenshot before](./assets/ScreenshotBefore.jpg)
![screenshot after](./assets/ScreenshotAfter.jpg)

 ## Instructions

>${data.instructions}

## Usage

>${data.usage}

## Contribution

>${data.contribution}

## Test

>${data.test}


## License
>This project is covered under the ${data.license} license.
  
## Questions
>My GitHub name is ${data.username}.
If you have any questions you may reach
me at ${data.email} .

![Markdown Logo](https://markdown-here.com/img/icon256.png)

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    `;
  }
  
  module.exports = generateMarkdown;