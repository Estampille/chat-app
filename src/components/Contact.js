import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
import './ContactList';


function Contact(props){
    return(
        <div className='Contact'>
            <img className="avatar" alt="profil" src={props.avatar} />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <status className={props.online ? 'status-online' : 'status-offline'}></status>
                    <p className= 'status-text'>{props.online ? " online" : 'offline'}</p>
                </div>
            </div>

        </div>

    )
}


Contact.propTypes ={
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,

}
export default Contact;