// Code your solution here
let drivers = ["Bobby", "Sammy","Annette", "Sarah", "Bobby"];

  function findMatching (drivers, searchName) {
    return drivers.filter((driver)=>{
        return driver.toLowerCase().includes(searchName.toLowerCase())
    });

  
  }

  function fuzzyMatch (drivers, searchString){
    return drivers.filter((matchNames)=>{
        return matchNames.toLowerCase().startsWith(searchString.toLowerCase())
    });
  }

  function matchName (driverObj, nameInput){
    return driverObj.filter((driverNames)=>{
        return driverNames.name === nameInput
    });
  }
  