import { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

const ToggleFormBtn = () => {

    const [formType, setFormType] = useState(<LoginForm log="log"/>)
    
    const changeForm = () => {
        console.log('entered func')
        console.log(formType.props)
        if (formType.props.log !== undefined){
            console.log('set to signup')
            setFormType(<SignUpForm />)
        }else{
            console.log('set to log')
            setFormType(<LoginForm log="log" />)
        }
    }
    return (
        <>
            {formType}
            <button onClick={changeForm}>toggle</button>
        </>
    )
}

export default ToggleFormBtn