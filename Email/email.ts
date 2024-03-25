const email:string = "hasilibra@gmail.com";
const password:string = "abcdefghi";
if(password.length < 8){
    console.log("Password should be 8 character long" );
}

else if(email == "hasilibra@gmail.com" && password == "12345678" ){
    console.log("Successfully logged in" );
}
else{console.log("Invalid Credentials" );
}