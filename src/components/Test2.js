import { Component } from "react";
import React from "react";
import axios from "axios";
class Test2 extends Component{
    constructor(){
        super()
        this.state={var1:""}
          }
          async componentDidMount(){
              
           const response = await axios.get('http://192.168.29.163:8080/StockData');
           console.log(response.data);
           this.setState({var1:response.data});
          }
          render(){
              return (
                  <div>
                      <pre>Vishnu = {this.state.var1}</pre>
                  </div>
              )
          }
}
export default Test2;
