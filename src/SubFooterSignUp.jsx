
import React from 'react'
import { Input, Button } from 'semantic-ui-react'

function SubFooterSignUp(){

    return (
        <div className='subfooter'>

        <div className='subfooterContent'>

        <div style={{float: "left", margin: "auto"}}><h3>Sign Up to our Daily Insider</h3></div>
        

        <Input className="emailInput"  placeholder='Enter your email...' />
             



          <Button className="submitButton">Subscribe</Button>
        
          </div>
        </div>
    
    )
   
}
export default SubFooterSignUp