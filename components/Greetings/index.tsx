import React from "react"
import GreetingComp from "./GreetingComp"
import dayjs from 'dayjs'



const Greeting = () =>{
    const user = {firstName: "Nivas"}
    const date = dayjs(new Date()).format('dddd, MMM D, YYYY')

    return(
        <div>
            <GreetingComp name={user.firstName} date={date}/>
        </div>
    )
}

export default Greeting