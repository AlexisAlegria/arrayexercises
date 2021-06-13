let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

const mergeTwoList = (arrNumbers) => {
    let oddNumbers = [];
    let evenNumbers = [];
    for(i=0; i<list_of_numbers.length; i++){
        let element = list_of_numbers[i];
        if(element % 2 != 0) oddNumbers.push(element)
        else evenNumbers.push(element);
    }
    var newArray = oddNumbers.concat(evenNumbers);
    return newArray;
}
console.log(mergeTwoList(list_of_numbers))