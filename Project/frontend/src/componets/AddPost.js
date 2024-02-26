import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";



function AddPost (){

  // Delete Function
  const onDelete = (id) =>{

    axios.delete(`http://localhost:8070/community/delete/${id}`).then((res) =>{
      alert("Deleted successfully!");
      this.retrievePosts();
    })
  }  

    const [description,setDescription] = useState("");
    const [name,setName] = useState("");

    

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newPost = {
            
           
            description,name
           
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/community/add",newPost).then(()=>{
            alert("Post Added")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(newPost); //printing the sent form data on console.log f12
        
     }


//added new...............
     //view all Community function//
    const [Community,setPost] = useState([]); //taking all the datas from mongoDB input into this array

    useEffect(()=>{
  
          function getPost () {
             axios.get("http://localhost:8070/Community/")
             .then((res)=>{
  
              
              console.log("your data has been received")
              console.log(res.data)
              
              
              setPost(res.data); //using setPost function to retrieve data and display on website
              
          
          }).catch((err)=>{
                  alert(err.message);
             })
          }
          getPost();
      },[Community]) //[Community] to update the array instantly when changed rather than refresh page.

//............................



    return (
        <div className="container" >

            <form onSubmit={sendData}>

              {/* getting name */}
            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputName">Name</label>
                <input type="Text" className="form-control" id="inputName" placeholder="write your Name" 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setName(e.target.value); //save the target values in name variable
                }} />
            </div>
            </div>
              {/* getting description              */}
            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputPostDescription">Description</label>
                <input type="Text" className="form-control" id="inputPostDescription" placeholder="write your experience.." 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setDescription(e.target.value); //save the target values in name variable
                }} />
            </div>
            </div>

            

            <button type="submit" className="btn btn-primary">Add a post</button>
        </form> 


        
        {/* ////////////////////////// View Community on a table//////////////////// */}

<h3> Posts </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
      <th>Name</th>    
      <th>Reviews</th>
      
      {/* <th>post Image</th> */}
      <th>update</th>
      <th>Delete</th>
      
    </tr>
    </thead>
      <tbody>
      {
        Community.map((Post)=>(
          <tr>
            <td>{Post.name}</td>
            <td>{Post.description}</td>

            <td> <a href={`/editpost/${Post._id}`}><button type="/editpost" className="btn btn-primary">UPDATE</button> </a> </td>
            <td> <a className="btn btn-danger" href="#" onClick={() =>onDelete(Post._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a> </td>
            
          </tr>

        ))
      }
      </tbody> </table>

      


        {/* <label for="formFileMultiple" class=""></label>
        <input class="btn btn-outline-primary" type="file" id="formFileMultiple" multiple /> */}




        </div>
    )
}
export default AddPost;