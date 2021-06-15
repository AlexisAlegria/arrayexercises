const lyricsGenerator = (newArray) => {
    let string = "";
      for(i=0; i<newArray.length; i++){
          if(newArray[i] === 0){
            string += 'Boom '
          } else if(newArray[i] === 1) {
            string += 'Drop the Base '
              if(newArray[i-1] === 1 && newArray[i-2] === 1)
              string += '!!!Break the Base!!! '
          } 
      }
      return string;  
  }
  
  // test Data
  console.log(lyricsGenerator([0,0,1,1,0,0,0]))
  console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
  console.log(lyricsGenerator([0,0,0]))
  console.log(lyricsGenerator([1,0,1]))
  console.log(lyricsGenerator([1,1,1]))