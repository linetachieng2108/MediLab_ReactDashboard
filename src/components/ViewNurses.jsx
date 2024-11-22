import { useEffect, useState } from "react";
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstanceToken from "../helpers/axiosInstanceToken";

const ViewNurses = () => {
    
        const {username, admin_id, token} = CheckSession();
        const [loading, setLoading] = useState(true)
        const[error,setError] = useState(null)
        const [nurses, setNurses] = useState([])
    
        useEffect(()=>{
        axiosInstanceToken.get("/view_nurses")
        .then(function(response){
            console.log(response.data);
            setNurses(response.data)
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
                <table className = "table tanle-striped bg-light p-5 m-1">
                    {loading && <div className="text-warning">Loading...</div>}
                    {error && <div className="text-danger">{error}</div>}
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Registration date</th>
                        <th>Email</th>
                        
                    </tr>
                    {nurses && nurses.length > 0 ?(
                        nurses.map((booking)=>(
                            <tr className="mt-5" key={nurse._id}>
                                <td>{nurse.surname} {nurse.othernames}</td>
                                <td>{nurse.gender}</td>
                                <td>{nurse.reg_date}</td>
                                <td>{nurse.email}</td>
                            </tr>

                        ))
                    ):
                    (
                        !loading &&  <tr><td colSpan="5">Nurse Not Found</td></tr>)
                    }
                </table>
            </Main>
        </div>
    );
}
 
export default ViewNurses;