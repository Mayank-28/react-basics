import React from 'react';
  
function DefaultProps() {
  return (
    <div >
      <Person name="kapil" eyeColor="blue" age="23"></Person>
      <Person name="Sachin" eyeColor="blue" ></Person>
      <Person name="Nikhil" age="23"></Person>
      <Person />
    </div>
  );
}
  
function Person(props) {
  return (
    <div>
      <p> Name: {props.name} </p>
      <p>EyeColor: {props.eyeColor}</p>
      <p>Age : {props.age} </p>
      <hr/>
    </div>
  )
}
  
Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45"
}
  
export default DefaultProps;