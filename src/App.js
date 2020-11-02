import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


const HomePage = props => {
  console.log(props);
  return (
    <div>
    <button onClick={() => props.history.push('/topics')}>Topics Page</button>
    <h1>HomePage</h1>
    </div>
  );
};

const TopicsList = props => {
  console.log(props);
  return (
    <div> <h1>TopicsList Page</h1></div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div><h1>Topic Detail Page: {props.match.params.topicId}</h1></div>
  );
};

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </div>
  );
}

export default App;
