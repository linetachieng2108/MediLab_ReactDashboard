import { useEffect, useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";
import CheckSession from "../helpers/CheckSession";
import axiosInstanceToken from "../helpers/axiosInstanceToken";

const AddBooking = () => {
    const {username, admin_id, token} = CheckSession();


    const [patients, setPatients] = useState([]);
    const [tests, setTests] = useState([]);
    useEffect(()=>{
        getPatients();
        getTests();
    }, []);

    const [patient_id, setPatientId] = useState(null);
    const [test_id, setTestId] = useState(null);
    const [appointment_date, setDate] = useState(null);
    const [appointment_time, setTime] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);
    console.log(patient_id);
    console.log(test_id);

    const getPatients = () =>{
        axiosInstanceToken
        .get("/patients")
        .then(function(response){
            console.log(response.data)
            setPatients(response.data)
        })
        .catch(function(error){
            console.log(error.message);
        })
        
    }

    const getTests = () =>{
        axiosInstanceToken
        .get("/tests")
        .then(function(response){
            console.log(response.data)
            setTests(response.data)
        })
        .catch(function(error){
            console.log(error.message);
        })
        
    }

    const Submit = (e) => {
        
        e.preventDefault(); 
        setLoading(true);
        console.log("Submitting");

        axiosInstanceToken.post("/add_booking",{
            patient_id,
            test_id,
            appointment_date,
            appointment_time
        }
        ).then(function(response) {
            console.log(response.data);
            setLoading(false);
            setSuccess(response.data.message);
            setPatientId('');
            setTestId('');
            setDate('');
            setTime('');

        }).catch(function (error){
            console.log(error.message);
            setLoading(false);
            setFailure(error.message);
            setSuccess(null);
        }
        );
    }
    return ( 
        <div>
            <Layout/>
            <Main>

                <form className="card shadow p-4" onSubmit={Submit}>
                    <div className="card-body">
                        {loading && <div className="text_warning">Loading...</div>}
                        {success && <div className="text_success">{success}</div>}
                        {failure && <div className="text_danger">{failure}</div>}
                        {patients && 
                        <select name="patient_id" id="" className="form-control" onChange={(e)=> setPatientId(e.target.value)}><br />
                        <option value=""> select</option>
                        {patients.map(patient => (
                            <option key={patient._id} value={patient._id} >{patient.firstname}</option>
                        ))}
                        
                        </select>}<br /><br />
                        {tests && 
                        <select name="test_name" id="" className="form-control" onChange={(e)=> setTestId(e.target.value)}><br />
                        <option value=""> select</option>
                        {tests.map(test => (
                            <option key={test._id} value={test._id}>{test.test_name}</option>
                        ))}
                        
                        </select>}<br /><br />
                         
                        <input 
                            type="date" 
                            placeholder="Enter Appointment Date" 
                            className="form-control" 
                            value={appointment_date} 
                            onChange={(e)=> setDate(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="time" 
                            placeholder="Enter Appointment Time" 
                            className="form-control" 
                            value={appointment_time} 
                            onChange={(e)=> setTime(e.target.value)} 
                            required
                        /><br/><br/> 
                        <button className="btn btn-dark">Add Booking</button>
                    </div>
                </form>
            </Main>
        </div>
     );
}
 
export default AddBooking;