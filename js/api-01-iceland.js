//========================================================================
// (1) How many births were there in Iceland's national hospital today?


const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body
    console.log(apiJsonData)
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
  })

//========================================================================
// (2) What is the next concert event in Iceland?
const answerElement_iceland_2 = document.getElementById('iceland-2')

//const request = superagent;
var url = 'http://apis.is/concerts';
var list = document.querySelector('.users-list');
//var button = document.getElementById('user');

request.get(url).then(function (names) {
	var elements = names.body.results;
    //console.log(elements)
    var arr = Object.keys(elements).map(function(k) { return elements[k] });
    //console.log(arr);
    var arr1 = Object.values(elements);
    //console.log(arr1)
    name = [];
    var output = {}, item;
    for (var i = 0; i < arr1.length; i++) {
    	item = arr1[i];
    	for (var prop in item) {
    		if (item.hasOwnProperty(prop)) {
    			if (!(prop in output)) {
    				output[prop] = [];
    			}
    			output[prop].push(item[prop]);
    		}
    	}
    }
    //console.log(output.dateOfShow);
    min = min_date(output.dateOfShow);
    console.log(min)
    var next;
    elements.forEach(function (element) {
    	if(element.dateOfShow == min){
        next = element.eventDateName;
      //console.log(next);
      answerElement_iceland_2.innerHTML += next+'<br>';
      }
    });
});

function min_date(all_dates) {
	var min_dt = all_dates[0],
	min_dtObj = new Date(all_dates[0]);
	all_dates.forEach(function(dt, index)
	{
		if ( new Date( dt ) < min_dtObj)
		{
			min_dt = dt;
			min_dtObj = new Date(dt);
		}
	});
	return min_dt;
}

//========================================================================
// (3) How many **arrival** flights are scheduled for today?
const answerElement_iceland_3 = document.getElementById('iceland-3');

var urlFlights = 'http://apis.is/flight?language=en&type=arrivals';

request.get(urlFlights).then(function (names) {
	var elements = names.body.results;
  //console.log(elements);
    var arr1 = Object.values(elements);
    var output = {}, item;
    for (var i = 0; i < arr1.length; i++) {
    	item = arr1[i];
    	for (var prop in item) {
    		if (item.hasOwnProperty(prop)) {
    			if (!(prop in output)) {
    				output[prop] = [];
    			}
    			output[prop].push(item[prop]);
    		}
    	}
    }

    var str = '\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-rounded btn-orange show-departed\"><span>Show</span> arrived flights <i class=\"icon-right-open-big\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t';
    var str2 = '\r\n\t\t\t\t\t\t\t\t\t\t\tNo flights found\r\n\t\t\t\t\t\t\t\t\t\t';
    var count  = countInArray(output.date, str);
    var count2  = countInArray(output.date, str2);
    console.log(output.date);
    numberOfFlights = output.date.length - count - count2;
    //console.log(numberOfFlights);
    answerElement_iceland_3.textContent = numberOfFlights;
});

function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
