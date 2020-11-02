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
    <div> <h1>TopicsList Page</h1>
    <Link to={`${props.match.url}/13`}>To Topic 13</Link>
    <Link to={`${props.match.url}/14`}>To Topic 14</Link>
    <Link to={`${props.match.url}/15`}>To Topic 15</Link>
    </div>
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
        <Route exact path='/blog/ml/topics' component={TopicsList} />
        <Route path='/blog/ml/topics/:topicId' component={TopicDetail} />
        <Route exact path='/blog/topics' component={TopicsList} />
        <Route path='/blog/topics/:topicId' component={TopicDetail} />
      </div>
  );
}

export default App;
