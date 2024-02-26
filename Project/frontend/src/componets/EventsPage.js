import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// import log from "../images/wallpaper.jpg";
// import Button from 'react-bootstrap/Button';

import React,{useState,useEffect} from 'react';
import axios from "axios";


//npm install these dependancies
// import Button from 'react-bootstrap/Button';
// import { CFormSelect } from '@coreui/react';
// import {BrowserRouter as Router, Route} from "react-router-dom";

function EventsPage() {

////////////////get all events from the database via backend//////////////////////////////
const [events,setEvents] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getEvents () {
           axios.get("http://localhost:8070/event/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setEvents(res.data); //using setEvents function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getEvents();
    },[events]) //[events] to update the array instantly when changed rather than refresh page.








    return (
        <div>
          <Card>
            <Card.Header>Search events</Card.Header>
            <Card.Body>
            <Card.Text>search for events that are on your route.</Card.Text>
            
            
                  {/* form for event search */}
              <div className = "container">
              <form>
                  
                  {/*------------------------------------------------------------------ */}
                  {/* category choosing dropdown menu */}
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Search by event category</label>
                    <select class="form-control" id="exampleFormControlSelect1">

                          <option>traditonal</option>
                          <option value="1">musical</option>
                          <option value="2">religious</option>
                          <option value="3">cultural</option>
                    </select>
                  </div>

                  {/* date range picker */}
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Search by given date range</label>
                    <br></br><label> date ranger  component not found</label>
                        
                  </div>

                  <Form.Group className="mb-3" controlId="formlocation">
                      <Form.Label>Search by location</Form.Label>
                      <Form.Control type="location" placeholder="Enter location" />
                      <Form.Text className="text-muted">
                        
                      </Form.Text>
                  </Form.Group>
              </form>
            </div>






            
            </Card.Body>
          </Card>
              {/* ////////////////////////////////// view all events by table /////////////////////////////////////////  */ }

            <h3>Event List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                
                  <th>Event Name</th>
                  <th>Event description</th>
                  <th>Event Website</th>
                  
                </tr>
                </thead>
                  <tbody>
                  {
                    events.map((event)=>(
                      <tr>
                        <td>{event.name}</td>
                        <td>{event.description}</td>
                        <td> <a href={event.eventLink}><button type="/eventwebsite" className="btn btn-primary">Go To Event Website</button> </a> </td>
                        
                        
                      </tr>

                    ))
                  }
                  </tbody>
                  

          
              
             
              </table>








              {/* ////////////////////////////////// view all events by cards /////////////////////////////////////////  */ }
          
              
          


    </div>



                


        

        
      );
    }
        
        export default EventsPage;



        






       