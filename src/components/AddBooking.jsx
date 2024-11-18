import { useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";

const AddTest = () => {
    const [patient_id, setPatientId] = useState(null);
    const [test_id, setTestId] = useState(null);
    const [appointment_date, setDate] = useState(null);
    const [appointment_time, setTime] = useState(null);
    const [invoice_no, setInvoiceNo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);

    const Submit = (e) => {
        
        e.preventDefault(); 
        setLoading(true);
        console.log("Submitting");

        axiosInstance.post("/add_booking",{
            patient_id,
            test_id,
            appointment_date,
            appointment_time,
            invoice_no
        }
        ).then(function(response) {
            console.log(response.data);
            setLoading(false);
            setSuccess(response.data.message);
            setPatientId('');
            setTestId('');
            setDate('');
            setTime('');
            setInvoiceNo('');

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
                        <input 
                            type="text" 
                            placeholder="Enter Patient Id" 
                            className="form-control" 
                            value={patient_id} 
                            onChange={(e)=> setPatientId(e.target.value)} 
                            required
                        /><br/><br/>
                        <input type="text" 
                            placeholder="Enter Test Id" 
                            className="form-control" 
                            value={test_id} 
                            onChange={(e)=> setTestId(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="date" 
                            placeholder="Enter Appointment Date" 
                            className="form-control" 
                            value={appointment_date} 
                            onChange={(e)=> setDate(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter Appointment Time" 
                            className="form-control" 
                            value={appointment_time} 
                            onChange={(e)=> setTime(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter Invoice No" 
                            className="form-control" 
                            value={invoice_no} 
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
 
export default AddTest;