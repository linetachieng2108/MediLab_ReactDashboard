import { useEffect, useState } from "react";
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstanceToken from "../helpers/axiosInstanceToken";

const ViewPatients = () => {
    
        const {username, admin_id, token} = CheckSession();
        const [loading, setLoading] = useState(true)
        const[error,setError] = useState(null)
        const [patients, setPatients] = useState([])
    
        useEffect(()=>{
        axiosInstanceToken.get("/patients")
        .then(function(response){
            console.log(response.data);
            setPatients(response.data)
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
                        <th>Patient Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Location</th>
                        <th>Registration date</th>
                    </tr>
                    {patients && patients.length > 0 ?(
                        patients.map((patient)=>(
                            <tr className="mt-5" key={patient._id}>
                                <td>{patient.surname} {patient.firstname}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.reg_date}</td>
                                <td>{patient.email}</td>
                            </tr>

                        ))
                    ):
                    (
                        !loading &&  <tr><td colSpan="5">patient Not Found</td></tr>)
                    }
                </table>
            </Main>
        </div>
    );
}
 
export default ViewPatients;