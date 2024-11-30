import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffe,setcoffees,coffees}) => {
    console.log(coffe)
    const {name,category,chef,photo,_id,details} = coffe


    const handledelete = (_id)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              console.log(_id)
              fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                     const remaingscoffe= coffees.filter(cofee => cofee._id !== _id)
                     setcoffees(remaingscoffe)

                }          
            })
            }
          });

    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border flex justify-around">
  <div className='flex'>
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>    
  <div className='mt-10'>
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>{chef}</p>
    
    </div>
  </div>
  <div className=" flex ">

    
    <div className="join join-vertical">
  <button className="btn join-item">View</button>
 <Link to={`/updatecoffee/${_id}`}> <button  className="btn join-item">Update</button></Link>
  <button onClick={()=>handledelete(_id)} className="btn join-item">Delate</button>
</div>
    
  </div>
</div>
            
        </div>
    );
};

export default CoffeeCard;