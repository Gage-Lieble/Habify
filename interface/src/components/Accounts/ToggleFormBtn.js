import { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

const ToggleFormBtn = () => {

    const [formType, setFormType] = useState(<LoginForm log="log"/>)
    
    const changeForm = () => {
        if (formType.props.log !== undefined){
            setFormType(<SignUpForm />)
        }else{
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