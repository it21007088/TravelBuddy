import React,{useState} from "react";
import axios from "axios";

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hotel () {

   //add notify msg
   const notify = () => toast("Successfully Hotel Added");
      
  const [regNum, setregNum] = useState("");
  const [hotelName, setName] = useState("");
  const [description, setDiscription] = useState("");
  const [district, setDistric] = useState("");
  const [linkPlace, setLink] = useState("");


  function sendData(e){
    e.preventDefault();
    


    const newHotel ={
      regNum,
      hotelName,
      description,
      district,
      linkPlace
    }

    axios.post("http://localhost:8070/hotel/add",newHotel).then(()=>{
      
    //alert("Hotel Added")
    notify();

      setregNum("");
      setName("");
      setDiscription("");
      setDistric("");
      setLink("");


    }).catch((err)=>{
      alert(err)
    })

  }

    return (
        <div className="Tdy" style={{marginLeft:'320px',marginRight:'320px'}}>
            <br/><br/>

            <center><a className="navbar-bran"><h1 style={{color: "#193B4D"}}>Add New Hotel</h1></a></center>
        <br/>
        <form onSubmit={sendData}>
        <div class="form-group">
            <label for="inputCity">Reg No</label>
            <input type="text" class="form-control" id="inputCity" placeholder="1234..." onChange={(e)=>{
              setregNum(e.target.value);
            }} />
          </div>

          <div class="form-group">
            <label for="inputCity">Hotel Name</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Name..." onChange={(e)=>{
              setName(e.target.value);
            }}/>
          </div>

        <div class="form-group">
        <label for="exampleFormControlTextarea1">Discription</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type here..." onChange={(e)=>{
              setDiscription(e.target.value);
            }} > </textarea>
        </div>

        {/* <div class="mb-3">
        <label for="formFile" class="form-label" required>Upload Business Registration Certificate Photo</label>
        <input class="form-control" type="file" id="formFile"/>
        </div> */}

        {/* <div class="mb-3">
      <label for="formFileMultiple" class="form-label" required>Upload Hotel image (Select Maximum Three Photos)</label><br/>
      <input class="form-control" type="file" id="formFileMultiple" multiple/>
      </div> */}


         <div class="form-group">
            <label for="inputDistric">Select Your Distric</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Colombo</option>
              <option> Gampaha</option>
              <option>Kalutara</option>
              <option>Kandy</option>
              <option>Matale</option>
              <option>Nuwara Eliya</option>
              <option> Galle</option>
              <option>Matara</option>
              <option>Hambantota</option>
              <option>Jaffna</option>
              <option>Kilinochchi</option>
              <option>Mannar</option>
              <option>Vavuniya</option> <option>Mullaitivu</option> <option>Batticaloa</option> <option>Ampara</option> 
              <option>Trincomalee</option> <option>Kurunegala</option> <option>Puttalam</option>
              <option>Anuradhapura</option> <option>Polonnaruwa</option> <option>Badulla</option> <option>Moneragala</option> 
              <option>Ratnapura</option>
              <option>Kegalle</option>
              onChange={(e)=>{
          setDistric(e.target.value);
        }}
            </select>
          </div>

          <div class="form-group">
        <label for="exampleFormControlTextarea1">Location Link</label>
        <input type="text" class="form-control" id="inputCity" placeholder="Enter your location... " onChange={(e)=>{
              setLink(e.target.value);
            }} />
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" required />
            <label class="form-check-label" for="gridCheck">
              I agree with terms and conditions
            </label>
          </div>
        </div>
        <center><button type="submit" class="btn btn-outline-danger btn-lg">Submit</button></center>
        
      </form>
      <br/><br/>
      </div>

    )
}
export default Hotel;