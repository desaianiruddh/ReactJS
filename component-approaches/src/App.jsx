// eslint-disable-next-line
import React, { useState, useEffect, useMemo, useCallback, useRef, createContext } from 'react';
import './Css/App.css'
import CardsData from './CardsData';
import Card from './Card';
import CompA from './CompA';
//create context for useContext
export const ContextText = createContext();
// using functional component
const App = () => {
  const [counter, setCounter] = useState(0);
  const [dark, setDark] = useState(true);
  //useEffect hook
  useEffect(() => {
    console.log('Counter value changed to ' + counter);
    document.title = `(${counter}) Unread Messages`;
  }, [counter])
  let renderCount = useRef(0)
  useEffect(() => {
    renderCount.current =renderCount.current+1
    console.log(`Render Count :- ${renderCount.current}`);
  })
  //useMemo Hook
  const sumOfNumber = useMemo(() => {
    return complexFunction(counter);
  }, [counter]);
  //useCallback
  const numObj = useCallback(() => {
    console.log('callback run ' + counter);
    return counter;
  }, [counter])
  
  //stle object
  const theme = {
    backgroundColor: dark ? 'rgba(65, 65, 65, 0.652)' : 'white',
    color: dark ? 'white' : 'black'
  }
  return (
    <div className='App'>
      <div className='heading' style={theme}>
        <button id='theme-btn' onClick={() => setDark(dark => !dark)}>
          {dark ? `Light` : `Dark`}
        </button>
        <span className='head-text'>Web-Series</span>
        <div>
          {`Callback Counter: ${numObj()}`}
        </div>
      </div>
      <div className="container">
        {
          CardsData.map((val, key) => {
            return (
              <Card
                key={key}
                imgsrc={val.imgsrc}
                category={val.category}
                name={val.name}
              />
            )
          })
        }
      </div>
      <ContextText.Provider value={counter}>
        <CompA />
      </ContextText.Provider>
      <div className='footer' style={theme}>
        <button onClick={() => setCounter(counter - 5)}> <small>-5</small></button>
        <button onClick={() => setCounter(counter - 1)}> - </button>
        <div className='counter-text'>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}> + </button>
        <button onClick={() => setCounter(counter + 5)}> <small>+5</small></button>
        <div>
          {`Sum = ${sumOfNumber}`}
        </div>
        
      </div>
    </div>
  )
}
//using class component
// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={counter : 0};
//   }
//   updateState(props){ 
//     // Changing state 
//     this.setState((state)=>({counter:state.counter+props.increment})); 
//   }
//   render() {
//     return (
//       <div className='App'>
//       <h1 className='heading'>Web-Series</h1>
//       <div className="container">
//         {
//           CardsData.map((val, key) => {
//             return (
//               <Card
//                 key={key}
//                 imgsrc={val.imgsrc}
//                 category={val.category}
//                 // name={val.name}
//               />
//             )
//           })
//         }
//       </div>
//       <div className='footer'>
//         <button onClick={()=>this.updateState({increment:-5})}><small>-5</small></button>
//         <button onClick={()=>this.updateState({increment:-1})}> - </button>
//         <div className='counter-text'>{this.state.counter}</div>
//         <button onClick={()=>this.updateState({increment:1})}> + </button>
//         <button onClick={()=>this.updateState({increment:5})}><small>+5</small></button>
//       </div>
//     </div>
//     )
//   }
// }
// complex function
const complexFunction = (num) => {
  for (let i = 1; i < 10; i++) {
    num = num * i;
  }
  return num;
}

export default App;