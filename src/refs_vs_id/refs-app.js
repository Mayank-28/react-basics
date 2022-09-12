import React from 'react'
  
class RefsApp extends React.Component {
  
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
    onFocus() {
      this.myRef.current.value ="focus"
    }
    
    onBlur() {
      this.myRef.current.value = "blur"
    }
    
    render() {
      return (
        <div>
          <label>By Refs</label><input
            ref= {this.myRef}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />
        </div>
      );
    }
  }
  
  export default RefsApp;