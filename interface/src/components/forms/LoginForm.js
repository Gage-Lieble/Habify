import axios from 'axios'
import React, {useEffect, useState} from 'react'


const LoginForm = () => {

    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
    }, [])
    
    const LogSubHandler = (e) =>{
        
        e.preventDefault()
        axios.post('api/login/', {
            username: e.target.user.value,
            password: e.target.pass.value,
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
        <form onSubmit={LogSubHandler}>
            <input type="text" placeholder="username" id="user"/>
            <input type="text" placeholder="password" id="pass"/>
            <input type="submit" />
        </form>
    )
}

export default LoginForm