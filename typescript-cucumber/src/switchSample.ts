class SwitchSample
{
  grade: string;
  select(grade: string)
  {
    this.grade = grade;
    switch (grade)
    {
      case 'a':
        {
          console.log("Excellent");
          break;
        }
      case 'b':
        {
          console.log("Good");
          break;
        }
      case 'c':
        {
          console.log("Poor");
          break;
        }
      default:
        {
          console.log("Failed");
          break;
        }
    }

  }

  }
let ss = new SwitchSample();
ss.select('x');



// interface Square
// {
//   kind: "square";
//   size: number;
// }

// interface Rectangle
// {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }

// interface Circle
// {
//   kind: "circle";
//   radius: number;
// }

// type Shape1 = Square | Rectangle | Circle;

// function area(s: Shape1)
// {
//   switch (s.kind)
//   {
//     case "square": return s.size * s.size;
//     case "rectangle": return s.height * s.width;
//     case "circle": return Math.PI * s.radius ** 2;
    
//   }
// }