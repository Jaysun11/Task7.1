
import React from 'react'
import { Icon } from 'semantic-ui-react'

function Footer(){

    return (
        <div className='footerContainer'>

<div className="footer">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Explore</h3>
                        <ul>
                            <li>Home</li>
                            <li>Questions</li>
                            <li>Articles</li>
                            <li>Tutorials</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Support</h3>
                        <ul>
                        <li>FAQ's</li>
                        <li>Help</li>
                        <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item" >
                        <h3>Stay Connected</h3>
                        <Icon size='huge' name='facebook' style={{marginLeft: "43px"}} />
                        <Icon size='huge'  name='twitter' />
                        <Icon size='huge'  name='instagram' />
                    
                    </div>
                </div>
                
                <div style={{marginBottom: "10px", marginTop: "30px", textAlign: "center"}}><h2>Dev @ Deakin</h2></div>
                <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item" style={{marginBottom: "20px"}}>
                <ul style={{textAlign: "center", paddingLeft: "0px"}}>
                    <li>
                        Privacy Policy
                    </li>
                </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                <ul style={{textAlign: "center", paddingLeft: "0px"}}>
                    <li>
                        Terms
                    </li>
                </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                <ul style={{textAlign: "center", paddingLeft: "0px"}}>
                    <li>
                        Code of Conduct
                    </li>
                </ul>
                </div>
                </div>
                
            </div>
        </footer>
    </div>

        </div>
    
    )
   
}
export default Footer