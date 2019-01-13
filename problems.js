// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".





// var plaindrome = (str) => {
//   var newStr="";
//   for(var i=str.length-1 ;i > -1;i--){
//       newStr+=str[i];
//   }
//   if(str === newStr){
//     return true;
//   }
//   return false;
// }

//[^a-z0-9] => ""
//str.replace(/[^a-z0-9]/g,"");

var isPalindrome = (str) => {
	str = str.replace(/[^a-zA-Z0-9]+/g,'');
	str = str.toLowerCase();

	var reverseStr = '';
	for(var i=str.length-1 ;i > -1;i--){
	    reverseStr+=str[i];
	}

	if(reverseStr === str){
		return true;
	}
  	return false;
}







/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "({})"
Output: true

*/




//Input: is a string
//Output: is a boolean
var isValid = (str) => {

    var arr = [];

    for(var i=0 ;i <str.length;i++){
        var char = str[i];
        if(char == '(' || char == '{' || char == '['){
        	arr.push(char);
        }else{
        	//closing ')', '}', ']'
        	//')' !--> '[' --> false
			if(char == ')'){
				if(arr[arr.length-1] === '('){
					arr.pop();
				}else{
					return false;
				}
			}else if(char == '}'){
				if(arr[arr.length-1] === '{'){
					arr.pop();
				}else{
					return false;
				}
			}else if(char == ']'){
				if(arr[arr.length-1] === '['){
					arr.pop();
				}else{
					return false;
				}
			}
        }
    }

    if(arr.length === 0)
    	return true;
    else
     	return false;
};



Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

// telephoneCheck("555-555-5555") should return a boolean. //12
// telephoneCheck("1 555-555-5555") should return true.	//14
// telephoneCheck("1 (555) 555-5555") should return true.	//16
// telephoneCheck("5555555555") should return true.		//10
// telephoneCheck("555-555-5555") should return true.		//12
// telephoneCheck("(555)555-5555") should return true.		//13
// telephoneCheck("1(555)555-5555") should return true.	//14
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// at least 12 characters
// index 3 & 7 should be a dash
// group 3 numbers, group 3 numbers, and 4 numbers

var validPhoneNumber = (str) => {

	// must have at least 10 numbers
	if(str.length <= 10){
		return false;
	}

	// max size is 16
	if(str.length > 16){
		return false;
	}

	// valud US code
	if(str.length === 16 && str[0] !== '1'){
		return false;
	}



	// for the first example
	for(var i=0; i<str.length; i++){
		if(i !== 3 || i !== 7){
			if(/*if it is a number*/){
				// go to go
			}else{
				return false;
			}
		}else{
			if(str[i] !== '-')
				return false
		}
	}

	//for second example
	if(str[0] == '1'){
		if(str[1] === ' ' || str[1] === '('){
			// fun the for loop from first example
		}else{
			return false
		}
	}
}

  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
