import React ,{useState} from "react";
import axios from "axios";

export default function TravelerReg(){

    const[Full_name, setName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email, setEmail] = useState("");
    const[Contact_Number, setCoNumber] = useState("");
    const[NIC_or_Passport_Number, setNicNum] = useState("");
    const[Password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");


    function sendData(e){
        e.preventDefault();

        const newTraveler ={

            Full_name,
            Address,
            Email,
            Contact_Number,
            NIC_or_Passport_Number,
            Password

        }
        
        if(Password===confirmPassword){
            
        axios.post("http://localhost:8070/Traveler/add",newTraveler).then(()=>{
            alert("Traveler Added")
        }).catch((err)=>{
            alert(err.response.data.msg)
        })

        }
        else{
            alert("Please confirm your password")
        }

    }


    return(

        
<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Travel Buddy</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/viewpost">Community<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/eventspage">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>
    <button type="button" class="btn btn-warning">Plan Your Trip</button>

    <div>

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">LogIn </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">|</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/trv">Register </a>
      </li>
    </ul>
      
      
      {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Name
              </a>
            
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">My Account</a>
              <a class="dropdown-item" href="#">Log Out</a>
              </div>
          </li>
      </ul> */}
    </div>
  </div>
</nav>
    


        <center>
        <div className= "container1">
        <form onSubmit={sendData}  class="row g-3">
            <div class="col-12">
                <label for="inputAddress" class="form-label">Full Name</label>
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setName(e.target.value);

                }}></input>
            </div>

            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setAddress(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" 
                onChange={(e)=>{
        
                    setEmail(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">
                <label for="inputNum" class="form-label">Contact Number</label>
                <input type="tel"
                          name="phone"
                          className="form-control"
                          id="phone"
                          required
                        
                          pattern="07[1,2,5,6,7,8][0-9]{7}"
                          maxLength="10"
                          placeholder="07xxxxxxxx"
                onChange={(e)=>{
        
                    setCoNumber(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6"><br/>
            
                <label for="inputNum" class="form-label">NIC/Passport Number</label>
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setNicNum(e.target.value);

                }}></input><br></br>
            </div>

            {/* <div> 
            <hr style={{size:"4"}}/>
            </div> */}

<div class="col-md-6"><br/></div>
           
            <div class="col-md-6">
            <br></br>
            Create your Password
            </div>

            <div class="col-md-6"><br/></div>
            
            <div class="col-md-6">
            
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" 
                onChange={(e)=>{
        
                    setPassword(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">

            <label for="inputPassword4" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" 
            onChange={(e)=>{
        
                     setConfirmPassword(e.target.value);

            }}></input>
            </div>

           <br/><br></br>

            <div className="col-md-6">
              <br></br>
                <button type="submit" class="btn btn-primary">Register</button>
                &nbsp;&nbsp;&nbsp;
            </div>

            

        </form>
        </div>
        </center></div>
    )
}