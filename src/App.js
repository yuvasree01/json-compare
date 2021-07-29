
import './App.css';
import ReactJsonViewCompare from 'react-json-view-compare';
import ReactDOM from 'react-dom';
import {simple} from './sample-json/simple';
import {complex} from './sample-json/complex';


// const oldData = JSON.stringify(simple,null,3);
// const newData = JSON.stringify(complex,null,3);
const oldData = simple;
const newData = complex;

function jsonView(){
  return <ReactJsonViewCompare
      oldData={oldData}
      newData={newData}
      />
}
ReactDOM.render(<jsonView/>,document.getElementById('root'))

export default jsonView;

