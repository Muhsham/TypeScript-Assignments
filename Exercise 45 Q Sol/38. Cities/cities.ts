//Exercise 38 Cities
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("Islamabad", "Pakistan");
describe_city("Delhi", "India");
describe_city("Kaulalampur");