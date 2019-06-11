class StringMethods {
  firstName: string = 'Sankar';
  lastName: string = 'Ginjupalli';

  strMethods(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;

    console.log(firstName.charAt(1));
    console.log(lastName.charAt(0));
    console.log(firstName.charCodeAt(1));
    console.log(firstName.concat(lastName));
    console.log(firstName.indexOf('a'));
    console.log(firstName.lastIndexOf('k'));
    console.log(firstName.localeCompare(firstName));
    console.log(lastName.search('pallavi'));
    console.log(lastName.slice(2, -2));
    console.log(lastName.substr(1, 3));
    console.log(lastName.substr(-4, 1));
    console.log(lastName.substring(2, 5));
    console.log(firstName.toLocaleLowerCase());
    console.log(lastName.toLocaleUpperCase());
    console.log(firstName.toLowerCase());
    console.log(lastName.toUpperCase());

  }
}

let strm = new StringMethods();
strm.strMethods('Sankar', 'Ginjupalli');