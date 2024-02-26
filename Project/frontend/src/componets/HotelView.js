import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

function HotelView (){

    // Delete Function

    const onDelete = (id) =>{

   

      let ans = window.confirm("Are you sure want to delete your Hotel?");
  
      if(ans){  
  
        axios.delete(`http://localhost:8070/Hotel/delete/${id}`).then((res) =>{
          alert("Deleted successfully!");
  
          }).catch((err)=>{
  
          alert(err.message);
  
         })
  
      }    
  
  
  
  }
    // const onDelete = (id) =>{

    //     axios.delete(`http://localhost:8070/Hotel/delete/${id}`).then((res) =>{
    //       alert("Deleted successfully!");
    //       this.retrievePosts();
    //     })
    //   }


    const [Hotel,setHotels] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getHotel () {
           axios.get("http://localhost:8070/Hotel/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setHotels(res.data); //using setLocation function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getHotel();
    },[Hotel]) //[Hotel] to update the array instantly when changed rather than refresh page.

    return (
    <div className="container" >

        {/* ////////////////////////// View Hotel on a table//////////////////// */}
<br/><br/><br/>
<center><h3> H O T E L  S &nbsp;&nbsp;   L I S T </h3></center>
<br/>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
    <th>RegNum</th>
      <th>Hotel Name</th>
      <th>Description</th>
      <th>District</th>
      {/* <th>Location photo</th> */}
      <th>update</th>
      <th>Delete</th>

    </tr>
    </thead>
      <tbody>
      {
        Hotel.map((hotel)=>(
          <tr>
            <td>{hotel.regNum}</td>
            <td>{hotel.hotelName}</td>
            <td>{hotel.description}</td>
            <td>{hotel.district}</td>
            <td> <a href={`/edithotel/${hotel._id}`}><button type="/edithotel" className="btn btn-primary">UPDATE</button> </a> </td>
            <td> <a className="btn btn-danger" href="#" onClick={() =>onDelete(hotel._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
 </td>
          </tr>

        ))
      }
      </tbody>
      


 
  </table>

  <br/><br/><center>
            <div style={{marginLeft:'250px',marginRight:'350px'}}><button type="button" class="btn btn-outline-dark btn-lg btn-block"><a href="/hotel">
                Add Hotel</a></button>
            </div>
        </center>
        <br/><br/><br/><br/><br/><br/>

    </div>

)

}
export default HotelView;