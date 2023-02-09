import UserContext from "../../../context/user-context"
import { useState, useEffect } from "react"
import axios from "axios"
const DayActivityForm = (props) => {

    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
    }, [])

    const [sober, setSober] = useState()
    const formHandler = (e) =>{
        e.preventDefault()
        console.log(e)
        console.log(sober)

        axios.post('api/daylog/',{
            activity: sober,
            notes: e.target.notes.value,
        },{
            headers: {'X-CSRFToken': csrfToken}
        }).then(
            props.resetform
        )

    }
    return (
        <form onSubmit={formHandler}>
            <button onClick={() => setSober(5)} type="button">Sober</button>
            <button onClick={() => setSober(1)} type="button">unSober</button>
            <textarea id="notes" placeholder="notes..."></textarea>
            <input type="submit" />
        </form>
    )
}

export default DayActivityForm