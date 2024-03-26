let id:number=5;

let company:string="djjjf";

let isPublished:boolean=true;

let ids:number[]=[1,2,3,4,5];

// ids.push('hello');

let arr:any[]=[3,"fhjr", true];

// arr.push(fj);

// Tuple

let person:[number, string, boolean]=[2,"fdhfj", true];

// Tuple array

let employee:[number, string][]
employee=[
    [1,"fjfk"],
    [2,"rm"],
    [7, "rkgjkr"],


]


// Union

let pid:number | string

pid=6;

//Enum

enum Direction1{
    Up,
    Down,
    Left=7,
    Right
}

console.log(Direction1.Right);

// Objects
type User={
  name:string,
  id:number
}
const user:User=
{
    name:'hf',
    id: 22,
}

// Type assertion

let cid:any

let customerId=cid as number;

// function

function addNum(x:number, y:number):number
{
    return x+y
}

console.log(addNum(1,2));

// Interfaces

interface UserInterface {
    name:string,
    id:number,
  }
  const user1:UserInterface=
  {
      name:'hf',
      id: 5,
  }

//   Classes

class Person{
    id:number,
    name:string,

    constructor(id:number, name:string)
    this.id=id
    this.name=name;

}

const abc=new Person(1,"dfj");
