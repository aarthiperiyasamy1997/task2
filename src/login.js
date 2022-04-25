import AccountCircle from "@mui/icons-material/AccountCircle"
import { Button, InputAdornment, TextField } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import CancelIcon from '@mui/icons-material/Cancel';
import { Carousel } from "react-bootstrap"
import { useState } from "react";



export const Login=()=>{

    const[log, setLog]=useState({
        "user":"",
        "pass":""
    })

    const observ=(prob)=>{
        const{name,value}=prob.target

        setLog((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const logging=()=>{

    }

     const cancel=()=>{
         setLog((old)=>{
             return{
                 "user":"",
                 "pass":""
             }
         })
     }
    return(
        <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 ">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/bank1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/bank2.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="bank3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 align-self-center  bg-primary shadow p-3">
                <TextField
                            name="user"
                            value={log.user}
                            onChange={observ}
                            id="input-with-icon-textfield"
                            label="Customer Id"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                            }}
                            variant="outlined"
                            className='form-control'
                        />
                        <input value={log.pass} onChange={observ} name="pass" type="password" placeholder="Password" className='mt-2 form-control'/>
                        <div className="mt-2 row justify-content-around">
                            <Button className='col-4' variant="outlined" color="primary" onClick={logging}>
                                <LoginIcon/>Open
                            </Button>
                            <Button className='col-4' variant="outlined" color="error" onClick={cancel}>
                                <CancelIcon/>Cancel
                            </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}