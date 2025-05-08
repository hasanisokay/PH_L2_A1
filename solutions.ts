//problem 1
function formatString(inputString: string, toUpperCase?: boolean): string {
  if (toUpperCase === undefined || toUpperCase) {
    return inputString.toUpperCase();
  }
  return inputString.toLowerCase();
}

// problem 2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item?.rating >= 4);
}

// problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((accumulator, array) => accumulator.concat(array), []);
}

//problem 4

class Vehicle {
  private _year: number;
  private _make: string;
  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }
  getModel(): string {
    return `Model: ${this._model}`;
  }
}

// problem 5
function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.length;
}

// problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const sortedArray = products.sort((a, b) => b.price - a.price);
  return sortedArray[0];
}

// problem 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

// problem 8
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        resolve(n * n);
      } else {
        reject("Negative number not allowed");
      }
    },1000);
  });
}
