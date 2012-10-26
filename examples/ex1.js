var verify = require("../")();

verify.register("email2").is("email").len(10)


var success = verify.check({
	email: "me@email.com"
}).has("email2").
success;

console.log(success)
