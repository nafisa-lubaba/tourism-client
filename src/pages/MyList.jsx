import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyList = () => {
    const {user} = useContext(AuthContext)
    const [item , setItem] = useState([])
    // console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res => res.json())
        .then (data =>{
           setItem(data)
        })

    },[user]);

    const handleDelete = (_id) => {
        console.log(_id)
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
                
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                 "Deleted!",
                                 "Your file has been deleted.",
                              "success"

                            );
                            setItem(item.filter(p => p._id !== _id));
                        }
                    })
            }
        });

    }

   
    
    return (
        <div>
             <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-[#682018] font-bold">
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>country_Name</th>
                            <th>tourist_spot_name</th>
                            <th>average_cost</th>
                            <th>travel_time</th>
                            <th>seasonality</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#682018]">
                        {
                            item.map(list => <tr key={user._id}>
                               
                                <td>{list._id}</td>
                                <td>{list.email}</td>
                                <td>{list.country_Name}</td>

                                <td>{list.tourist_spot_name}</td>

                                <td>{list.average_cost}</td>
                                <td>{list.travel_time}</td>
                                <td>{list.seasonality}</td>
                               

                                
                                
                                {/* <td>{user.lastLoggedAt}</td> */}
                                <td><Link to={`/updatespot/${list._id}`}
                                className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
                                    Update</Link></td>

                                    <td><button onClick={() =>handleDelete (list._id)} className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
                                    Delete</button></td>
                            </tr>)
                               
                               
                            
                        }
                    
                          
                               
                            
                      
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MyList;