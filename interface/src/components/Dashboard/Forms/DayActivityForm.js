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
            window.location.reload()
        )

    }
    return (
        <form onSubmit={formHandler} id="daily-form">
            <h2 id="form-date">{new Date().toLocaleDateString()}</h2>
            <span id="daily-btn-wrap">
                <button onClick={() => setSober(5)} type="button" className="form-opt">Pass</button>
                <button onClick={() => setSober(1)} type="button" className="form-opt">Fail</button>
            </span>
            <textarea id="notes" placeholder="Notes:"></textarea>
            <input type="submit" />
        </form>
    )
}

export default DayActivityForm