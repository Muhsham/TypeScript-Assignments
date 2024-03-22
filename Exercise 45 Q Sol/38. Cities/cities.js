//Exercise 38 Cities
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Islamabad", "Pakistan");
describe_city("Delhi", "India");
describe_city("Kaulalampur");
