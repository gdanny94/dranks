function peopleWithAgeDrink(age) {
  
    if(age < 14) {
      return 'drink toddy'
    } else if ( age < 18 ) {
      return 'drink coke'
    } else if (age >= 18 && age <= 20){
      return 'drink beer' 
  
    } else {
      return 'drink whisky'
    }
    
  };
  
  
  
  
  
  console.log( peopleWithAgeDrink (45))