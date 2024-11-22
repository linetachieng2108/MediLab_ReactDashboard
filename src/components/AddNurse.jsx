import { useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";
import axiosInstanceToken from "../helpers/axiosInstanceToken";

const AddNurse = () => {
    const [surname, setSurname] = useState(null);
    const [othernames, setOthernames] = useState(null);
    const [gender, setGender] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);

    const Submit = (e) => {
        
        e.preventDefault(); 
        setLoading(true);
        console.log("Submitting");

        axiosInstanceToken.post("/add_nurse",{
            surname,
            othernames,
            gender,
            email,
            password
        }
        ).then(function(response) {
            console.log(response.data);
            setLoading(false);
            setSuccess(response.data.message);
            setSurname('');
            setOthernames('');
            setGender('');
            setEmail('');

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
                            placeholder="Enter Othernames" 
                            className="form-control" 
                            value={othernames} 
                            onChange={(e)=> setOthernames(e.target.value)} 
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

                        <button className="btn btn-dark">Add Nurse</button>
                    </div>
                </form>
            </Main>
        </div>
     );
}
 
export default AddNurse;