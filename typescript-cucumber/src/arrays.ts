class ArraySample {
  
  disp(arrayString: number[]|string[]) {
    let i;
    console.log("array length is:" + arrayString.length);
    for (i = 0; i < arrayString.length; i++) {
      
      console.log("Array Element  " + i  + "--> is: "    + arrayString[i]);
    }
      
  }
}
  
let arr = new ArraySample();
arr.disp(['Sankar', "Jhani"]);
arr.disp([1, 2, 3, 4]);
        
      
  
