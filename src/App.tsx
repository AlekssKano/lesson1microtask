import React, {useState} from 'react';
import {NewComponent, topCars} from "./NewComponent";
import {MouseEvent} from 'react';
import Button from "./components/Button";
import {FilteredComponents} from "./components/FilteredComponents";
import {Hook} from "./components/HookUseStateUseEffect";
import {LessonInput} from "./components/LessonInput";


function App() {

    return <LessonInput/>

}

export default App;

//<FilteredComponents/>



// <NewComponent students={students}/>
// <NewComponent cars = {topCars}/>

// let [a, setA] = useState(1);
// const onClickHandler = () => {
//     setA(++a)
//     console.log(a)
// }
// const onClickHandlerZero = () => {
//     setA(a = 0)
//     console.log(a)
// }
// <h1>{a}</h1>
// <button onClick={onClickHandler}>number</button>
// <button onClick={onClickHandlerZero}>0</button>

// let currentMoney = money.filter((filteredMoney)=>filteredMoney.banknote ==='ruble ')
// return (
//
// );

//     const myFirstSubscriber =(event:MouseEvent<HTMLButtonElement>)=> {
// console.log('Hello I am Lola');
//     }
//     const mySecondSubscriber =()=> {
//         console.log('Hello I am Ivan');
//     }

//...................1 part of lesson
{/*<button onClick={(event:MouseEvent<HTMLButtonElement> )=>onClickHandler("Ivan")}>My Youtube Channel-1</button>*/
}
{/*<button onClick={() => onClickHandler("Vasya ")}>My Youtube Channel-2</button>*/
}
{/*<button onClick={foo1}>1</button>*/
}
{/*<button onClick={()=>foo2(100200)}>2</button>*/
}
//  const myFirstSubscriber =(event:MouseEvent<HTMLButtonElement> )=>{
//      console.log("Hello! I am Vasya")
//  }
// const mySecondSubscriber =(event:MouseEvent<HTMLButtonElement> )=>{
//     console.log("Hello! I am Ivan")
// }
// const onClickHandler =(name:string)=>{
//     console.log(name);
// }
//
// const foo1 =()=>{
//     console.log(100200);
// }
// const foo2 =(num: number)=>{
//     console.log(num);
// }
//..........Button 2 part
// const Button1Foo= (subscriber:string, age:number)=>{
//     console.log(subscriber, age)
// }
// const Button2Foo= (subscriber:string, age:number)=>{
//     console.log(subscriber,age)
// }
// const ButtonStupid = ()=>{
//     console.log("I am stupid Button")
// }
{/*<button>MyYoutubeChannel-1</button>*/
}
// {/*<button>MyYoutubeChannel-2</button>*/}
// <Button name={"MyYoutubeChannel-1"} callBack={()=>Button1Foo('I am Vasya', 21)}/>
// <Button name={"MyYoutubeChannel-2 "} callBack={()=>Button2Foo("I am Ivan", 31 )}/>
// <Button name={"Stupid Button"} callBack={ButtonStupid}/>