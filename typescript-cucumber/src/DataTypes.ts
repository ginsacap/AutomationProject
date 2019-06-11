class DataTpeSmaple
{
  j: any;
  x = 10;
  name: string = 'sankar';
  lastName = 'Ginjupalli';
  list: Array<string> = ['Sankar', 'Ginjupalli'];
  list1: number[] = [1, 2, 3];
  tup: [string, number] = ['Sankar',505];

constructor()
{
  let my_tup = ['sankar', 5];
  console.log(my_tup[0]);
  console.log(my_tup[1])
  console.log("Number declared is:" + this.x);
  console.log("String declared is:" + this.name + this.lastName);
  console.log("First element os Array is:" + this.list[0]);
  for (let i = 0; i < this.list1.length; i++)
  {
    console.log("Array elements are:" + this.list1[i]);
  }
  
  for (this.j in this.list)
  {
    console.log(this.list[this.j]);
  }
  
  let result = this.x > 10 ? "Greater" : "Lesser"
  console.log(result);
  console.log(typeof this.x);
  let k = 1;
  let count;
  while ( k <= 10)
  {
    console.log(k)
    if (k % 2 == 0)
    {
      console.log("printing.."+ k);
      break;
      }
      k++;
  }
  }
  addNumbers(...nums: number[]): void
  {
    let i = 0;
    let sum = 0;

    for (i = 0; i < nums.length; i++)
    {
      sum = sum + nums[i];
    }
    console.log(sum);
  }

  

    
}

let dataTypes = new DataTpeSmaple();
dataTypes.addNumbers(2, 3, 4, 5);
