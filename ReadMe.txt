This project is an installable npm package which helps us to search customers within given geo location range.
As per the requirement, searching algorith is an installable component.

How to use?
1. Create a node project. (npm init) Or Go to any existing node project.
2. From command prompt, type npm install <path_to_the_project>
3. Type -
   const assignment = require('assignment');

    let customers = assignment.getEligibleCustomerList();
    console.log(customers);

**NOTE : you need to provide a customers.txt file as provided in the mail. (The path and file name is configurable in constants .js)


Project Architecture
1. index.js - wrapper above the complete process that exposes getEligibleCustomerList
2. customer.js - gets Data and calls distance calculator to process desired result
3. distanceCalculator.js - performs searching algo on the basis of distance. Conversion of degrees to radians is done here.
4. constant.js - stores application constants
5. fileReader.js - reads customer data from provided txt file