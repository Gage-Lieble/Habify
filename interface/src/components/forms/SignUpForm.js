import axios from 'axios'

const SignUpForm = () => {

    const formSubHandler = (e) =>{
        e.preventDefault()
        console.log(e.target.user.value)
        axios.post('api/new/', {
            username: e.target.user.value,
            password: e.target.pass.value,
            first_name: e.target.fname.value,
            last_name: e.target.lname.value,
        }).then(function(res){
            console.log(res)
        }
        ).catch(function(err){
            console.log(err)

        }
        )
    }
    return (
        <form onSubmit={formSubHandler}>
            
            <input type="text" placeholder="username" id="user"/>
            <input type="text" placeholder="first name" id="fname"/>
            <input type="text" placeholder="last name" id="lname"/>
            <input type="text" placeholder="password" id="pass"/>
            <input type="submit"/>
        </form>
    )
}

export default SignUpForm