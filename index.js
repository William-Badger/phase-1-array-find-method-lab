function superbowlWin(myArray) {
  let yearWin = myArray.find(element => element.result === "W")
  if (yearWin)
    return yearWin.year
}
superbowlWin(record)

/*
function superbowlWin(array){
  let record = array.find((season)=>{
    return (season.result === "W")
  })
  if (record){
    return record.year
  }
}
*/