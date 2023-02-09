
import axios from "axios"
import { useEffect, useState, useContext, useRef } from "react"
import UserContext from "../../../context/user-context"
import { ActivityCalendar } from 'activity-calendar-react'
import DayActivityForm from "../Forms/DayActivityForm"
const Calendar = () => {

    const user = useContext(UserContext)

    // Api
    const [days, setDays] = useState([])
    const getUserDays = () => {
        axios.get('api/log/').then(res => {
            for(let day of res.data){
                if (day.user === user){
                    setDays((prev) => { return [day, ...prev]})
                } 
            }

        })
    }
    useEffect(() => {
        getUserDays()
    }, [])

    // Calendar package
    const colorCustomization = {
        activity0: '#dadada',
        activity1: '#ED2939',
        activity2: '#006d32',
        activity3: '#26a641',
        activity4: '#50C878',
      }
    const didMount = useRef(false)
    const [actCal, setActCal] = useState()
    useEffect(() => {
        if(didMount.current){
            setActCal(<ActivityCalendar sampleData={days} showMonth={true} colorCustomization={colorCustomization} />)

        }else{
            didMount.current = true
        }
    },[days])

    return (
        <>
        {actCal}
        <DayActivityForm resetform={getUserDays}/>
        </>
    )
}

export default Calendar