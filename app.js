var userInput;
var userName;
userInput = 5;
userInput = 'string';
if (typeof userInput === 'string') { //unknown type forces to add a check for a type, it''l argue without it. 'any' type won't do such thing
    userInput = userName;
}
//define explicitly as never type is quite new in TS
// from a quality perspective it's better to use never to show intentions tht the function never supposed to return anyhting
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
