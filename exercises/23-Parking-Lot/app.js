let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const getParkingLotState = (n) => {
    let state = {
      totalSlots: 0,
      availableSlots: 0,
      occupiedSlots: 0
    }

    for(i=0; i<n.length; i++){
      for(x=0; x<n.length; x++){
        if(n[i][x] == 2){
          state.availableSlots += 1
          state.totalSlots +=1
        } else if(n[i][x] == 1) {
          state.occupiedSlots += 1
          state.totalSlots += 1
        }
      }  
    }
    return state;
}
console.log(getParkingLotState(parking_state));