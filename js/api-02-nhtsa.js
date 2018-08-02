/*
##### National Highway Transit Safety Administration
https://vpic.nhtsa.dot.gov/api/

1. How many types of Chevrolet models are registered with the NHTSA?

2. What are the vehicle types that Nissan has?

3. What are the types of models that exist for Toyota trucks in 2017?

*/


//1. How many types of Chevrolet models are registered with the NHTSA?
const answerElement_nhtsa_1 = document.getElementById('nhtsa-1');

var chevrolet = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json';

request.get(chevrolet).then(function(names){
     elements = names.body;
     console.log(elements.Count)
    answerElement_nhtsa_1.innerHTML = elements.Count;
  })

//2. What are the vehicle types that Nissan has?
const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')
nissan = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/Nissan?format=json';
  request.get(nissan).then(function(names){
      elements = names.body.Results;
      console.log(elements);
      br = '<br>';
      elements.forEach(function(element){
        answerElement_nhtsa_2.innerHTML += element.VehicleTypeName+br ;
      });
    });

//3. What are the types of models that exist for Toyota trucks in 2017?
const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')
toyota = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json';
request.get(toyota).then(function(names){
    elements = names.body.Results;
    console.log(elements);
    br = '<br>';
    elements.forEach(function(element){
    	answerElement_nhtsa_3.innerHTML += element.Model_Name+br;
    });
  })
