const fileReader = require('./fileReader');
const distanceCalculator = require('./distanceCalculator');



var sortCustomerListById = function(customers){
    return customers.sort(function(currentVal, nextVal){return currentVal.user_id - nextVal.user_id});
}


var getCustomersForInvitation = function(){
    let customers = fileReader.getCustomerData(); //gets customer data from txt file
    let eligibleCustomers = distanceCalculator.getEligibleCustomers(customers); //searches eligible customer
    eligibleCustomers = sortCustomerListById(eligibleCustomers); // sort users by user_id
    return eligibleCustomers;
}



module.exports={
    getCustomersForInvitation : getCustomersForInvitation
}