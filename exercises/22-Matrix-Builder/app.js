const matrixBuilder = (matrix) => {

    let newMatrix = [];
    let newArray = [];

    for(x=0; x < matrix; x++){
        newMatrix.push(newArray)
    }
    for(i=0; i < matrix; i++){
        newArray.push(1)
    }
    return newMatrix;
}
console.log(matrixBuilder(5));