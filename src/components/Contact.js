import React from 'react';
import './Contact.css';

function Contact(){
    return(
        <div className="Contact">
            
            <img className="avatar" src="https://randomuser.me/api/portraits/men/60.jpg"/>
            <div>
                <h4 className='name'>Andy Campbell</h4>
                <div className="status">
                     <status className="status-online"></status>
                  
                     <p className="status-text">online</p>
                </div>
                </div>
            
        </div>
    )

}
export default Contact;