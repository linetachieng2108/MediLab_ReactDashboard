import { useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";

const AddPatient = () => {
    const [surname, setSurname] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);

    const Submit = (e) => {
        
        e.preventDefault(); 
        setLoading(true);
        console.log("Submitting");

        axiosInstance.post("/add_patient",{
            surname,
            firstname,
            gender,
            dob,
            phone,
            email,
            password,
            location
        }
        ).then(function(response) {
            console.log(response.data);
            setLoading(false);
            setSuccess(response.data.message);
            setSurname('');
            setFirstname('');
            setGender('');
            setDob('');
            setPhone('');
            setEmail('');
            setPassword('');
            setLocation('');

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
                            placeholder="Enter Surname" 
                            className="form-control" 
                            value={surname} 
                            onChange={(e)=> setSurname(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter firstname" 
                            className="form-control" 
                            value={firstname} 
                            onChange={(e)=> setFirstname(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter Gender" 
                            className="form-control" 
                            value={gender} 
                            onChange={(e)=> setGender(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="date" 
                            placeholder="Enter Date of Birth" 
                            className="form-control" 
                            value={dob} 
                            onChange={(e)=> setGender(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter Phone Number" 
                            className="form-control" 
                            value={phone} 
                            onChange={(e)=> setPhone(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)} 
                            required
                        /><br/><br/>
                        <input 
                            type="text" 
                            placeholder="Enter Your Location" 
                            className="form-control" 
                            value={location} 
                            onChange={(e)=> setLocation(e.target.value)} 
                            required
                        /><br/><br/>

                        <button className="btn btn-dark">Add Patient</button>
                    </div>
                </form>
            </Main>
        </div>
     );
}
 
export default AddPatient;