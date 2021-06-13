var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for(i=0; i<chunk_one.length; i++){
        let element = chunk_one[i];
        newArray.push(element);
    }
    for(j=0; j<chunk_two.length; j++){
        let element2 = chunk_two[j];
        newArray.push(element2);
    }

    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));