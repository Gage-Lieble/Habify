import { useState, useEffect, useContext } from "react"
import axios from "axios"
import UserContext from "../../../context/user-context"
const DayActivityForm = (props) => {

    const user = useContext(UserContext)

    const [formContent, setFormContent] = useState(true)
   
    let date = new Date()
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000)).toISOString().split('T')[0]
    console.log(date)


    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
        axios.get('api/log/').then(res => {
            console.log(res)
            for(let i=0; i < res.data.length; i++){
                if(res.data[i].user === user.user && res.data[i].day === date){
                    setFormContent(false)
                }
                
            }
        })
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
        <div>
        {formContent ? (

        <form onSubmit={formHandler} id="daily-form">
            <h2 id="form-date">{new Date().toLocaleDateString()}</h2>
            <span id="daily-btn-wrap">
                <button onClick={() => setSober(5)} type="button" className="form-opt">Pass</button>
                <button onClick={() => setSober(1)} type="button" className="form-opt">Fail</button>
            </span>
            <textarea id="notes" placeholder="Notes:"></textarea>
            <input type="submit" />
        </form>
        ) : (
            <h2 class='completed-form-msg'>You've already submitted today!</h2>
        )
    }
        </div>
    )
}

export default DayActivityForm