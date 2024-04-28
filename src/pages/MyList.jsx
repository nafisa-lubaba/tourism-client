import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Provider/Provider";


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

    },[user])
    return (
        <div>
             <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>country_Name</th>
                            <th>tourist_spot_name</th>
                            <th>average_cost</th>
                            <th>travel_time</th>
                            <th>seasonality</th>
                        </tr>
                    </thead>
                    <tbody>
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
                                <td><button onClick={() => (user._id)}>
                                    Update</button></td>
                                    <td><button onClick={() => (user._id)}>
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