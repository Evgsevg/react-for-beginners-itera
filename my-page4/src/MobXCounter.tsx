import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import appState from './ContextCounter';
/*
const Counter = observer(({ appState }) => {
  return (
    <div>
      <h2>{appState.count}</h2>
      <button onClick={appState.incCounter} >Inc Counter</button>
      <button onClick={appState.decCounter} >Dec Counter</button>
    </div>
  )
})
ReactDOM.render(<Counter appState={appState} />, document.getElementById('root'));
*/
@observer
class ExpenseListView extends React.Component {
  currDate = new Date();
  @observable currDateString = new Date().toLocaleDateString();

  handleClick = () => {
    this.currDate.setDate(this.currDate.getDate() - 1);
    this.currDateString = this.currDate.toLocaleDateString();
  };
  handleClickStop = () => {
    
  };


  render() {
    return (
      <div>
         <button onClick={this.handleClick}> {'start'} </button>
         { this.currDateString }
         <button onClick={this.handleClickStop}> {'stop'} </button>
      </div>
    );
  }
}