import { AiFillAccountBook, AiFillAlert, AiFillAlipayCircle, AiFillAliwangwang, AiFillProfile, AiOutlineAppstore, AiOutlineBank, AiOutlineLogout, AiOutlinePlusCircle, AiOutlineUserAdd, AiTwotoneCopy, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";



const SideBar = () => {
    return(
        <Section>
            <div className="top">
                <div className="brand">
                    <AiOutlineBank />
                        <span>Medilab</span>
                    
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/"><AiOutlinePlusCircle />Dashboard</Link>
                        </li>
                        <li>
                            <Link><AiOutlineAppstore/>My Profile</Link>
                        </li>
                        <li>
                            <Link to="/add_test"><AiTwotoneCopy/>Add Tests</Link>
                        </li>
                        <li>
                            <Link><AiFillAccountBook/>View Tests</Link>
                        </li>
                        <li>
                            <Link to="/add_patient"><AiOutlineUserAdd/>Add Patient</Link>
                        </li>
                        <li>
                            <Link><AiOutlineUser/>View Patients</Link>
                        </li>
                        <li>
                            <Link to="/add_nurse"><AiFillProfile/>Add Nurse</Link>
                        </li>
                        <li>
                            <Link to="/view_nurses"><AiFillAliwangwang/> View Nurse</Link>
                        </li>
                        <li>
                            <Link to="/add_booking"><AiFillAlipayCircle/>Booking</Link>
                        </li>
                        <li>
                            <Link to="/appointments"><AiFillAlert/>View Bookings</Link>
                        </li>
                        <li>
                            <Link to="/add_location"><AiTwotoneCopy/>Add Location</Link>
                        </li>
                        <li>
                            <Link><AiFillAccountBook/>View Locations</Link>
                        </li>
                        
                    </ul>
                </div>

            </div>

            <div className="bottom">
                <AiOutlineAppstore/>
                <span>Great UI  <button>Go Pro</button></span><br/><br/>
                <span><strong>Upgrade Now</strong></span>
            </div>

            <div className="p-4">
                <Link to="/logout" className="btn btn-dark btn-sm"><AiOutlineLogout/>Logout</Link>
            </div>


        </Section>
    );
}


export default SideBar;
const Section = styled.section`
     background-color: #00a6ff;
     display: flex;
     position: fixed;
     overflow: auto;
     z-index: 1;
     flex-direction: column;
     width: 25vw;
     left: 0;
     height: 100%;
     align-items: center;
     padding-top:10px;
     .top{
        display:flex ;
        flex-direction: column;
        width: 100%;
        .brand{
             width: 100%;
             display: flex;
             justify-content:center;
             align-items: center;
             span{
                font-size: 1.5rem;
                color: white;
                font-weight:bold;
             }  
            svg{
                color: aliceblue;
                font-size: 2rem;
                2px;
            }
        }//end brand
       
        .links{
            display: flex;
            flex-direction: column;
            ul{
                list-style-type: none;
                padding: 1rem;
                li {
                  padding: 0.5rem;
                  5px;
                  border-radius: 0.5rem;
                  text-align: left;
                  &:hover{
                    background-color: black;
                    a{
                         color: white;
                         text-decoration: none  ;
                    }
                  }//end hover
                  a{
                    color:#fafcfd;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    svg{
                        fill: #f76c8a;
                        font-size: 1.5rem;
                        10px;
                    } 
                  }
                }//end li
            }//end ul     
        
            
        }//end links
     } //end top 

     .bottom{
        width: 90%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: center;
        background-color: #f76c8a;
        align-items: center;
        border-radius : 10px;
            svg{
                fill: #fafcfd;
                font-size: 3rem;
            }
            span{
                color: white;
            }
        }//end bottom
        .logout{
            display:flex;
            background-color: white;
            padding: 5px; width: 6em; display: inline;
            10px; 10px;
            a{
                text-decoration: none;   
            }
        }
`
