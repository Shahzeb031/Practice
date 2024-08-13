import { Component } from "react";
 class Exercise2 extends Component{
constructor(props){
  super(props);
  this.state={count:0};
}
inc=() =>{
  this.setState({count:this.state.count+1});
}

dec=() =>{
  this.setState({ count:this.state.count-1})
}
render(){
  return(
    <div className="flex justify-center items-center h-screen">
    <button className="text-7x1 text-black-900" onClick={this.dec} >
      -
 </button>

<div className="border border-red-900 grid place-content-center text-7x1 h-40 w-40-mx-10">
  {
    this.state.count ===0 ? "zero":this.state.count
  }

</div>
<button className="text-5xl text-green-600" onClick={(this.inc)} >
+
</button>

    </div>
       );
   }
}
export default Exercise2;