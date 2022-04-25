import { useParams } from "react-router-dom"

export const Step=()=>
{
    return(
        <>
        <h1>One by one move to technical steps and hr rounds.....** </h1>
        </>
    )
}

export const Goal=()=>
{
    const{sweet}=useParams()
    return(
        <>
        <h1>Goal is good mind of our mindset is{sweet}...! </h1>
        </>
    )
}

export const Commit=()=>
{
    return(
        <>
        <h1> i am committed.....? </h1>
        </>
    )
}