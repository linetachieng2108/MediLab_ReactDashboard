import CheckSession from "../helpers/CheckSession";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";

const Dasboard = () => {
    const {username, admin_id, token} = CheckSession();
    return ( 
        <div>
            <Layout/>
            <Main>
                <div className="main">
                    <h1>Dashboard</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow p-4">
                                Creative   
                                <div className="card-body">50</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow p-4">
                                Creative   
                                <div className="card-body">50</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow p-4">
                                Creative   
                                <div className="card-body">50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </div>
     );
}
 
export default Dasboard;