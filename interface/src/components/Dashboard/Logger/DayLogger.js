import axios from "axios"
import { useEffect, useState, useContext } from "react"
import UserContext from "../../../context/user-context"
const DayLogger = () => {
    const user = useContext(UserContext)
    const [days, setDays] = useState([])
    useEffect(() => {
        axios.get('api/log/').then(res => {
            for(let day of res.data){
                if (day.user === user){
                    setDays((prev) => { return [day, ...prev]})
                } 
            }
        })

    }, [setDays])
    return (
        <>
        {days.map(days => <div>{days.user}, {days.date}, {days.result.toString()}, {days.notes}</div>)}
        </>
    )
}

export default DayLogger