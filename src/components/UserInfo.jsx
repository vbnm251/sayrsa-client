import React from 'react';
import '../styles/userInfo.css';
import cancel from '../assets/cancel.svg';

const UserInfo = ({closeInfo}) => {
    return ( 
        <div className='info'>
            <img
                src={cancel}
                alt=''
                onClick={closeInfo}
            />
        </div>
     );
}
 
export default UserInfo;