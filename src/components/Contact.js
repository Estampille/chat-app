import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';




class Contact extends React.Component{
    constructor (props) {
        super(props);
        this.state ={
            online:false};}
        




render(){
    return(
        <div className='Contact'>
            <img className="avatar" alt="profil" src={this.props.avatar} />
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status" onClick={event=> {
                        const newStat =!this.state.online;
                        this.setState({ online :newStat});
                    }}>
                    <status className={this.state.online ? "status-online":"status-offline"} ></status>
                    <p className= 'status-text'>{this.state.online ? "online" : "offline"} </p>
                    
                </div>
            </div>

        </div>
    )
        }

    }







Contact.propTypes ={
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,

}
export default Contact;