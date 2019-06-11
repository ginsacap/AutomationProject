class Shape
{
  area: number;
  constructor(a: number)
  {
    this.area = a;
  }
}

class Circle extends Shape
{
  disp(): void{
    console.log("Area of the circle is:" + this.area);
  }
}

let sh = new Circle(234);
sh.disp();