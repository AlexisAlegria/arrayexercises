let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here
let newArray = names.map(function(value){
    return 'My name is: ' + value;
})
console.log(newArray);

