// Create a Staff Directory

const PEOPLE= [{
    firstName: "Deborah",
    lastName: "Morton",
    
  },
  {
    firstName: "Patrick",
    lastName: "Myers",
    
  },
  {
    firstName: "James",
    lastName: "Davidson",
    
  },
  {
    firstName: "Margaret",
    lastName: "Maxwell",
    
  },
  {
    firstName: "Tyler",
    lastName: "Reed",
    
  }
];
// Compare Staff Member details with a Query 

function searchPerson(person, query) {	
  let standardQuery = query.toLowerCase();    

	
  if (person.firstName.toLowerCase().startsWith(standardQuery) ||
    person.lastName.toLowerCase().startsWith(standardQuery)) {
    
    return true;
  }
  
  return false;
}

function personToString(person) {
  return person.firstName + " " + person.lastName;
}
// Search the Directory

function searchPeople(PEOPLE, standardQuery) {
	
	let matchedPeople = PEOPLE.filter( function(person) {
  		return searchPerson(person, standardQuery);
  });

	
  let matchedPeopleStr = matchedPeople.map( function(person) {
  	return personToString(person);
  });
  
  return matchedPeopleStr;
}

// Create a Search Box

// Event handler for the search box
function displayMatchedPeople() {
  // Clean previous matches
  $("#results").empty();

  // Obtain the search query
  let query = $("#search").val();

  // Obtain the matched names
  let matchedNames = [];
  if(query.length > 0){
  matchedNames = searchPeople(PEOPLE, query);
  }

  // Display results
	for(let name of matchedNames) {
  	let nameItem = $('<li>' + name + '</li>');
    $("#results").append(nameItem);  
  }
}

$("#search").on("keyup", displayMatchedPeople);
