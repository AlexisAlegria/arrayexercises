let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

let output = []
for(let key in contact){
    output.push(key + " : " + contact[key])
}
for(let i=0; i<output.length; i++){
    let element = output[i];
    console.log(element);
}