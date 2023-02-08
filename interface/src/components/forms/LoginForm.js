import axios from 'axios'
import React, {useEffect, useState} from 'react'


const LoginForm = () => {

    let usernameHtml = document.getElementById('username').value
    const [csrfToken, setCsrfToken] = useState()
    const [username, setUsername] = useState()

    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
        setUsername(usernameHtml)
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
            usernameHtml = e.target.user.value
            setUsername(usernameHtml)
        
        }
        ).catch(function(err){
            console.log(err)

        }
        )
    }
    
    return (
        <>
        <h3>Login</h3>
        <form onSubmit={LogSubHandler}>
            <input type="text" placeholder="username" id="user"/>
            <input type="text" placeholder="password" id="pass"/>
            <input type="submit" />
        </form>
        </>
    )
}

export default LoginForm