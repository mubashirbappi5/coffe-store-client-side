import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleloginuser} = useContext(AuthContext)
    const handlegoogle = ()=>{
        googleloginuser()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className=' flex flex-col justify-center items-center'>
            <button onClick={handlegoogle} className="btn">Login With Google</button>
           
        </div>
    );
};

export default SocialLogin;