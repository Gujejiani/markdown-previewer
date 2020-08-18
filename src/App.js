import React, {Component}  from 'react';
//import logo from './logo.svg';
import './App.css';

const marked = require('marked'); 





const initialState = `
<h1>Welcome to my React Markdown Previewer!</h1>
<hr>

<h2>This is a sub-heading...</h2>

this is paragraph

**This is bolded text**

# Heading

## Heading 2

<hr>


> Block Quotes!

<p><b>visit my portfolio <b></p>



 [visit my portfolio](https://codepen.io/kakha-gujejiani/full/rNxyBma)





- list item 1
- list item 2
- list item 3

this is a inline  \`<div></div>\`

this is a block of code

\`\`\`
let x = 1
let y = 2
let z = x + y;
\`\`\`

<img src="https://i.ibb.co/pQsCBPN/React.webp" alt="React" border="0" width=100px>

![React Logo w/ Text](https://goo.gl/Umyytc)

`;









class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    markdown: initialState

    };
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event){
   this.setState({
   markdown: event.target.value
   });

  }



  render(){

const {markdown} = this.state

console.log(markdown)
  return (

    <div className="App">


<div>
        <h5 className="name" >Editor</h5>
         <textarea  id = 'editor' value ={markdown}  onChange={this.handleChange}  >
      {<h1>Hello</h1>}
           {this.state.text}
           </textarea>
</div>  

<h6 id='mark' >Markdown</h6>

<div className="box" id = 'preview' dangerouslySetInnerHTML={{__html: marked(markdown)}}>
  
{/* <p >{this.state.text}</p> */}
  </div>

    </div>
  );
}

}
export default App;
