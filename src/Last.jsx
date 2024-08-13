import { Component } from 'react';

class Exercise3 extends Component {
    constructor(props){
        super(props)
    
    this.state = { 

        Name:"",
        Email:"",
        Address:"",
     } }
     handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value 

        });
     }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>

      <div>
        <div className="border  border-red-900 grid place-content-center  h-60 w-60 mx-10">
      <label className="text-lg font-bold" >Name</label>
      
            <input type="text" 
            id="Name"
            name="Name"
            value={this.state.Name}
            onChange={this.handleChange}
            className="Input"
            />

       
      <label className="text-lg font-bold" >Email</label>
     
            <input type="Email" 
            id="Email"
            name="Email"
            value={this.state.Email}
            onChange={this.handleChange}
            className="Input"
            />

          
      <label className="text-lg font-bold" >Address</label>
     
            <input type="text" 
            id="Address"
            name="Address"
            value={this.state.Address}
            onChange={this.handleChange}
            className="Input"
            />


</div>
      </div>

      <form className="p-4 rounded-30">
        <div className="border  border-red-900 grid place-content-center  h-60 w-60 mx-10">
    <h1 className='text-lg font-bold mb-4'> <strong/> Submitted Information</h1>
    
    <p1>Name={this.state.Name}</p1>
 
    <p1>Email={this.state.Email}</p1>
   
    <p1>Address={this.state.Address}</p1>
    </div>

      </form>

      </form>
        );
    }
}
export default Exercise3 ;
