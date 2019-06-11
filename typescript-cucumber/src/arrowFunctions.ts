class ArrowFunctions
{
  sum = (x: number, y: number): number =>
  {
    return x + y;
  }
  
  print = () =>
  {
    console.log("Print for anonymous function");
    }

  addSum = (x: number, y: number): number =>
      x + y;
}

let af = new ArrowFunctions();
let z = af.sum(10, 20);
let a = af.addSum(15, 25);
af.print();
console.log(z);
console.log(a);
