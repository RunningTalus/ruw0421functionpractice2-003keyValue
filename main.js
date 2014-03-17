//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//3) Write a function called 'keyValue' which takes two arguments and returns an object with a key of the first argument and the value of the second argument.
//  keyValue('city', 'Denver') should return Object {city: "Denver"}

var keyValue = function(city, name){
	var cityObj = {city: name};
	var newObj = cityObj
	console.log("EXPECT: Object {city:'Denver'} on the following line.");
	//adding a plus in here was logging object object.
	//we had to break it into two console logs
	console.log(cityObj);
	return cityObj;
};

keyValue('city', 'Denver');