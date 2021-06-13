var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
	//your code here
	let newArray = [];
    
    for(i=0; i<people.length; i++){
        let element = people[i];
        if(element != personName) newArray.push(element);
    }
    return newArray;
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));


