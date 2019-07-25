import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardTitle, Table } from 'reactstrap';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputArray: [
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 0],
      ], 
      outputArray:[]
    }
  }
  
  handleInputArray = (reset) => {
    let { inputArray } = this.state;
    let mainArray = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
      ] 
    if(reset){
      mainArray = []
    }else{
      inputArray.map((first, firstIndex) => {
         first && first.length > 0 && first.map((second, secondIndex) => {
            if(second === 1){
              mainArray[firstIndex][secondIndex] = 9;
            }else if(second === 0){
              let count=0
              if(first[secondIndex-1] && first[secondIndex-1] === (1 || 9)){
                count++;
              }
              if(first[secondIndex+1] === (1 || 9)){
                count++;
              }
              if(inputArray[firstIndex-1] && inputArray[firstIndex-1][secondIndex] && inputArray[firstIndex-1][secondIndex] === (1 || 9)){
                count++;
              }
              if(inputArray[firstIndex-1] && inputArray[firstIndex-1][secondIndex-1] && inputArray[firstIndex-1][secondIndex-1] === (1 || 9)){
                count++;
              }
              if(inputArray[firstIndex-1] && inputArray[firstIndex-1][secondIndex+1] && inputArray[firstIndex-1][secondIndex+1] === (1 || 9)){
                count++;
              }
              if(inputArray[firstIndex+1] && inputArray[firstIndex+1][secondIndex+1] && inputArray[firstIndex+1][secondIndex+1] === (1 || 9)){
                count++;
              }
              if(inputArray[firstIndex+1] && inputArray[firstIndex+1][secondIndex-1] && inputArray[firstIndex+1][secondIndex-1] === (1 || 9)){
                count++;
              }
              if(inputArray[firstIndex+1] && inputArray[firstIndex+1][secondIndex] && inputArray[firstIndex+1][secondIndex] === (1 || 9)){
                count++;
              }
              mainArray[firstIndex][secondIndex] = count;
            }
         })
      })
    }
      this.setState({
        outputArray: mainArray
      })
  }

  render(){
    let { inputArray, outputArray } = this.state;
    return (
      <div className="App">
        <Card>
          <CardBody>
            <CardTitle>Mine Sweeper</CardTitle>
            <Table>
              <tbody>
                {inputArray && inputArray.length > 0 && 
                   inputArray.map((first, index) => {
                    return <tr key={index}>{first && first.length > 0 && first.map((second, index) => {
                        return <td key={index}>{second}</td>
                      })}
                      </tr>
                  })
                }
              </tbody>
            </Table>
            {outputArray && outputArray.length > 0 && 
              <div>Output for Mine Sweeeper</div>}
            <Table>
              <tbody>
                {outputArray && outputArray.length > 0 && 
                   outputArray.map((first, index) => {
                    return <tr key={index}>{first && first.length > 0 && first.map((second, index) => {
                        return <td key={index}>{second}</td>
                      })}
                      </tr>
                  })
                }
              </tbody>
            </Table>
            <Button 
              onClick={() => this.handleInputArray(outputArray && outputArray.length > 0 ? true : false)}
              color="info"
            >
                {outputArray && outputArray.length > 0 ? "Reset" : "Get Mine sweeper"}
            </Button>
          </CardBody>
        </Card>
      </div>
    ); 
  }
}

export default App;
