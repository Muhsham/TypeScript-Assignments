//Exercise 45 Cars
function create_car(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}
const myCar = create_car("Audi", "A6", ["color", "Silver"], ["year", 2024]);

console.log(myCar);
