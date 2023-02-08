import axios from 'axios'
import React, {useEffect, useState} from 'react'

const SignUpForm = () => {

    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
    }, [])
    
    const formSubHandler = (e) =>{
        e.preventDefault()
        console.log(e.target.user.value)
        axios.post('api/new/', {
            username: e.target.user.value,
            password: e.target.pass.value,
            first_name: e.target.fname.value,
            last_name: e.target.lname.value,
        },{
            headers: {'X-CSRFToken': csrfToken}
        }).then(function(res){
            console.log(res)
        }
        ).catch(function(err){
            console.log(err)

        }
        )
    }
    return (
        <>
        <h3>Signup</h3>
            <form onSubmit={formSubHandler}>
                
                <input type="text" placeholder="username" id="user"/>
                <input type="text" placeholder="first name" id="fname"/>
                <input type="text" placeholder="last name" id="lname"/>
                <input type="text" placeholder="password" id="pass"/>
                <input type="submit"/>
            </form>
        
        </>
    )
}

export default SignUpForm