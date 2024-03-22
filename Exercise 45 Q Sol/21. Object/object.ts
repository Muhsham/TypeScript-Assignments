let carinfo: { [key: string]: { Model: string, Year: number, Engine: string } } = {"Honda": { Model: "Civic", Year: 2024, Engine: "1500cc" },
"Toyota": { Model: "Corolla", Year: 2023, Engine: "1300cc" },
"Kia": { Model: "Sportage", Year: 2024, Engine: "1500cc" } };
console.log("Detail of Available Cars:", carinfo["Honda"]);
console.log("Detail of Available Cars:", carinfo["Toyota"]);
console.log("Detail of Available Cars:", carinfo["Kia"]);