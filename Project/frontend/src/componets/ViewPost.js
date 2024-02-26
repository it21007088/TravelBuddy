

import React,{useState,useEffect} from 'react';
import axios from "axios";


//npm install these dependancies

// import {BrowserRouter as Router, Route} from "react-router-dom";

function ViewPost() {

////////////////get all communitys from the database via backend//////////////////////////////
const [communitys,setCommunitys] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getCommunitys () {
           axios.get("http://localhost:8070/community/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setCommunitys(res.data); //using setCommunitys function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getCommunitys();
    },[communitys]) //[communitys] to update the array instantly when changed rather than refresh page.


    return (
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
      <li class="nav-item active">
        <a class="nav-link" href="/viewpost">Community<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/eventspage">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/locationp">Locations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>
    <a href="/travelerForm"><button type="button"  class="btn btn-warning">Plan Your Trip</button></a>

    <div>

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">LogIn </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">|</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Register </a>
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
    

            
            <img src="../img/Hiriketiya.jpeg" class="rounded float-right" width="1500" height="400"  alt="Responsive image"></img>
            

        
    <div className='container'>

        <h3>Community Posts</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                
                  <th>Sri Lanka, General Reviews</th>
                  
                  
                </tr>
                </thead>
                  <tbody>
                  {
                    communitys.map((community)=>(
                      <tr>
                        <td>{community.name}</td>
                        <td>{community.description}</td>
                        
                      </tr>

                    ))
                  }
                  </tbody>
                  

          
              
             
              </table>
              </div>
              </div>
    );
                }
                
export default ViewPost;