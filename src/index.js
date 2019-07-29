import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from './components/Routing/'
import styled from 'styled-components'
const { lazy, Suspense } = React;

const Lazy = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: () => <Routing /> });
  }, 3000);
}));
  
const LoadingBar = styled.div`
margin-top:20%;
margin-left:45%;
font-weight:bold;
font-size:30px;

`

const LazyApp=()=>{
return(
  <Suspense fallback={<LoadingBar>Loading...</LoadingBar>}>
    <Lazy/>
  </Suspense>
)
}

ReactDOM.render(<LazyApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
