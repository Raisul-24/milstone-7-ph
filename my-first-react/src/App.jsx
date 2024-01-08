import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)
  const actors =['Raisul','Hridoy','Safwan','Sahir']
  const singers =[
    {id:1,name: "RIH", age:23},
    {id:2,name: "SAhir", age:4},
    {id:3, name: "RAISUL", age:20}
  ]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Actor name={"Raisul Islam"}></Actor>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      
      {/* <Todo task="Learn css" isDone={true}></Todo>
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Learn Js" isDone={false}></Todo>
      <Todo task="Learn html" isDone={true}></Todo> */}
      {/* <Person></Person>
      <Device name="Laptop" price='100000'></Device>
      <Device name="Mobile" price='20k'></Device>
      <Student grade="3.71" name="Hridoy" age='23'></Student>
      <Student name={'Raisul'} grade={4} age='21'></Student>
      <Student></Student>
      <Developer></Developer> */}
      
    </>
  )
}
function Device(props){
  // console.log(props) like object
  return <h2>This device: {props.name} & Price: {props.price} </h2>
}
function Person(){
  const person ={
    name : 'Raisul', age :23
  }
  const age =23;
  const money =100;
  return <h3>This is {person.name} with age: {person.age} and have money: {age+money}</h3>
}
const {name,age,grade} ={name:'Raisul',age: '23', grade: '3'}
function Student({name,age,grade =0}){
  // console.log(name,age,grade)
  return (<div className="student">
    <h3>This is a student</h3>
    <p>Name:{name} </p>
    <p>Age:{age} </p>
    <p>Result: {grade} </p>
  </div>
  )
}

function Developer(){
  const developerStyle ={
    margin :'2px',
    border : '2px solid yellow',
    padding : '5px'

  }
  return (
    <div style={developerStyle}>
    <h5>Developer</h5>
    <p>Coding</p>
    </div>
  )
}
export default App
