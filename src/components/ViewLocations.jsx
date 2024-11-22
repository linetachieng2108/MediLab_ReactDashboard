import { useEffect, useState } from "react";
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstanceToken from "../helpers/axiosInstanceToken";

const ViewLocations = () => {
    
        const {username, admin_id, token} = CheckSession();
        const [loading, setLoading] = useState(true)
        const[error,setError] = useState(null)
        const [locations, setLocation] = useState([])
    
        useEffect(()=>{
        axiosInstanceToken.get("/locations")
        .then(function(response){
            console.log(response.data);
            setLocations(response.data)
            setLoading(false)
        })
        .catch(function(error){
            console.log(error)
            setError(error.message)
            setLoading(false)
        })
        },[admin_id])
    return(
        <div>
            <Layout/>
            <Main>
                <table className = "table table-striped bg-light p-5 m-1">
                    {loading && <div className="text-warning">Loading...</div>}
                    {error && <div className="text-danger">{error}</div>}
                    <tr>
                        <th>Name</th>
                        
                    </tr>
                    {locations && locations.length > 0 ?(
                        locations.map((booking)=>(
                            <tr className="mt-5" key={location._id}>
                                <td>{location.name}</td>
                            </tr>

                        ))
                    ):
                    (
                        !loading &&  <tr><td colSpan="5">Location Not Found</td></tr>)
                    }
                </table>
            </Main>
        </div>
    );
}
 
export default ViewLocations;