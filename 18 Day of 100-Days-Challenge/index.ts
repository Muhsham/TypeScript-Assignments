function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme" , "dark");
console.log(userPreference);