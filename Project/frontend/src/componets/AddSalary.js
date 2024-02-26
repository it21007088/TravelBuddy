import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
// import "./styles/App.css";




function AddSalary (){
//ondelete funcition///
    // Delete Function
    

    //addsalary function//
    const [emp_ID,setemp_ID] = useState("");
    const [basicSalary,setBasicSalary] = useState(0);
    const [otRate,setotRate] = useState(0);
    const [otTime,setotTime] = useState(0);
    const [bonusSalary,setbonusSalary] = useState(0);
    const [paidID,setPaidID] =useState([])


 // Delete Function
    const onDelete = (id) =>{

        // axios.all([
        //     axios.post(`/my-url`, {
        //       myVar: 'myValue'
        //     }), 
        //     axios.post(`/my-url2`, {
        //       myVar: 'myValue'
        //     })
        //   ])






        axios.get(`http://localhost:8070/salary/get/${id}`).then((res) =>{
            setPaidID(res.data)
           
          })
          
        axios.post ( "http://localhost:8070/alreadypaidsalary/add",paidID).then(()=>{
            alert("salary Added")
            console.log(paidID)
            

        }).catch((err)=>{
            alert(err)
        })
          
        
        // const newPaidSalary = {
        //     emp_ID,
        //     basicSalary,
        //     otRate,
        //     otTime,
            
        //     bonusSalary
            
            
        // }


        axios.delete(`http://localhost:8070/salary/paid/${id}`).then((res) =>{
          alert("Salary Paid successfully!");
          this.retrievePosts();
        })
      }

    // const [totalSalary,settotalSalary] = useState(0);
    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newSalary = {
            emp_ID,
            basicSalary,
            otRate,
            otTime,
            
            bonusSalary
            
            
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/salary/add",newSalary).then(()=>{
            alert("salary Added")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(newSalary); //printing the sent form data on console.log f12
        
    }

    //view all salarys function//
    const [salarys,setSalarys] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getSalarys () {
           axios.get("http://localhost:8070/salary/")
           .then((res)=>{

            
           
           
            
            
            setSalarys(res.data); //using setSalarys function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getSalarys();
    },[salarys]) //[salarys] to update the array instantly when changed rather than refresh page.





    return (

        <div>
        {/* // -------------------------------------------------------------------------------Top Navigation Start----------------------------------------------------------------------------------------------- */}
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/AdminPanel">Travel Buddy</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
         
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item ">
              <a class="nav-link" href="/AdminPanel">Home</a>
            </li>
            
            <li class="nav-item active">
              <a class="nav-link" href="/addsalary">Add Salary<span class="sr-only">(current)</span></a>
            </li>
            {/* <li class="nav-item ">
              <a class="nav-link" href="/locationview">View Locations</a>
            </li> */}
            
           
          </ul>
          
      
          <div>
      
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           
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
      </div>
{/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}
    
        <div className="container" >

        <form onSubmit={sendData}>

        <div className="form-row" >
        <div className="form-group col-md-6">
            <label for="inputempid">employees ID</label>
            <input type="Text" className="form-control" id="inputempID" placeholder="EMP ID.." 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setemp_ID(e.target.value); //save the target values in name variable
            }} />
        </div>
        </div>

        <div className="form-row" >
        <div className="form-group col-md-6">
            <label for="inputbasicsalary">Basic Salary</label>
            <input type="Number" className="form-control" id="inputbasicsalary" placeholder="basicsalary" 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setBasicSalary(e.target.value); //save the target values in name variable
            }} />
        </div>
        </div>

        <div className="form-row" >
        <div className="form-group col-md-6">
            <label for="inputOThoursy">OThours</label>
            <input type="Number" className="form-control" id="inputOThours" placeholder="OThours" 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setotTime(e.target.value); //save the target values in name variable
            }} />
        </div>
        </div>
        <div className="form-row" >
        <div className="form-group col-md-6">
            <label for="inputOTrate">OT-rate</label>
            <input type="Number" className="form-control" id="inputOTrate" placeholder="OTrate" 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setotRate(e.target.value); //save the target values in name variable
            }} />
        </div>
        </div>

        <div className="form-row" >
        <div className="form-group col-md-6">
            <label for="inputbonusSalary">Bonus salary</label>
            <input type="Number" className="form-control" id="inputbonusSalaryy" placeholder="bonusSalary" 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setbonusSalary(e.target.value); //save the target values in name variable
            }} />
        </div>
        </div>

        

        

        

        

        
        <button type="submit" className="btn btn-primary">Add a Salary</button>
    </form> 
   <br></br><br></br>               
       <br></br><br></br>


{/* ////////////////////////// View salarys on a table//////////////////// */}

<h3> salary List </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
      <th>emp ID</th>
      <th>Basic Salary</th>
      <th>OT Salary</th>
      <th>Bonus Salary</th>
      <th>Total Salary</th>
      <th>Edit</th>
      <th>Paid</th>
      
    </tr>
    </thead>
      <tbody>
      {
        salarys.map((salary)=>(
          <tr>
            <td>{salary.emp_ID}</td>
            <td>{salary.basicSalary}</td>
            <td>{salary.otRate * salary.otTime}</td>
            <td>{salary.bonusSalary}</td>


            <td>{salary.totalSalary}</td>
            <td> <a href={`/editsalary/${salary._id}`}><button type="/editsalary" className="btn btn-primary">UPDATE</button> </a> </td>
            {/* <td> <a href={`/paidsalary`}> <button type="/paidsalary" className="btn btn-primary">  DELETE  </button> </a> </td> */}
           <button> <a className="btn btn-danger"  onClick={() =>onDelete(salary._id)}> <i className="far fa-trash-alt"></i>paid</a></button>
            
          </tr>

        ))
      }
      </tbody>
      


  
 
  </table>


  </div></div>


)

}
export default AddSalary;