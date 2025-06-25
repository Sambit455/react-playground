import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Sambit | sahu</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
}
const anotherUser = "Sam Sam"
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com',target: '_blank'},
  'Click me to visit Google',
  anotherUser
)
  


const anotherElement = (
  <a href="https://www.google.com" target="_blank">Please Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(

      // anotherElement 
      // 
      <App/>
    // <ReactElement /> 
    // MyApp()
    // <MyApp />
)
