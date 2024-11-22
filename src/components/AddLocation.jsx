import { useState } from "react";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";
import CheckSession from "../helpers/CheckSession";

const AddLocation = () => {
    const {username, admin_id, token} = CheckSession();

    const [name, setName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);

    const Submit = (e) => {
        
        e.preventDefault(); 
        setLoading(true);
        console.log("Submitting");

        axiosInstance.post("/add_location",{
            name
            
        }
        ).then(function(response) {
            console.log(response.data);
            setLoading(false);
            setSuccess(response.data.message);
            setName('');

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
                            placeholder="Enter Location Name" 
                            className="form-control" 
                            value={name} 
                            onChange={(e)=> setName(e.target.value)} 
                            required
                        /><br/><br/>
                        <button className="btn btn-dark">Add Location</button>
                    </div>
                </form>
            </Main>
        </div>
     );
}
 
export default AddLocation;