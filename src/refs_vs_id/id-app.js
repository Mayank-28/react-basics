import React from 'react'
  
class IdApp extends React.Component {
  
    constructor(props) {
        super(props);
      }
    onFocus() {
      document.getElementById('myinput').value = 'focus';
      //document.getElementsByClassName('myinputclass').value = 'focus';
    }
    
    onBlur() {
      document.getElementById('myinput').value = 'blur';
      //document.getElementsByClassName('myinputclass').value = 'blur';
    }
    
    render() {
      return (
        <div>
          <label>By Id</label><input
            id='myinput' className='myinputclass'
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />
        </div>
      );
    }
  }
  
  export default IdApp;