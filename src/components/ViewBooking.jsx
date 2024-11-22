import { useEffect, useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstanceToken from "../helpers/axiosInstanceToken";
import CheckSession from "../helpers/CheckSession";

const ViewBooking = () =>{
    const {username, admin_id, token} = CheckSession();
    const [loading, setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [bookings, setBookings] = useState([])
    
    useEffect(()=>{
        axiosInstanceToken.get("/appointments")
        .then(function(response){
            console.log(response.data);
            setBookings(response.data)
            setLoading(false)
        })
        .catch(function(error){
            console.log(error)
            setError(error.message)
            setLoading(false)
        })
    },[admin_id])

    const initPayment = (id)=>{
        console.log(id)
    }
    return(
        <div>
            <Layout />
            <Main>
                <table className = "table tanle-striped bg-light p-5 m-1">
                    {loading && <div className="text-warning">Loading...</div>}
                    {error && <div className="text-danger">{error}</div>}
                    <tr>
                        <th>Patient Name</th>
                        <th>Test Name</th>
                        <th>Appointment date</th>
                        <th>Appointment Time</th>
                        <th>Invoice Number</th>
                        <th>Action</th>
                    </tr>
                    {bookings && bookings.length > 0 ?(
                        bookings.map((booking)=>(
                            <tr className="mt-5" key={booking._id}>
                                <td>{booking.patient_id.firstname} {booking.patient_id.surname}</td>
                                <td>{booking.test_id.test_name}</td>
                                <td>{booking.appointment_time}</td>
                                <td>{booking.appointment_date}</td>
                                <td>{booking.invoice_no}</td>
                                <td> <button className="btn btn-danger" onClick={()=> initPayment(booking._id)}>Pay</button></td>
                            </tr>

                        ))
                    ):
                    (
                        !loading &&  <tr><td colSpan="5">No Bookings Found</td></tr>)
                    }
                </table>
            </Main>
        </div>
    )

}
export default ViewBooking;