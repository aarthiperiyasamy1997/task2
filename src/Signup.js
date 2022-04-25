import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useState } from 'react';
import { adding } from './connect';

export const NewAccount=()=>
{
    const[validate,setvalidate]=useState({
        "pass1":"",
        "pass2":""
    })

    const[account,setaccount]=useState({
        "accountHolder":"",
        "accountBalance":0.0,
        "contact":0,
        "password":"",
        "email":"",
        "customerId":0
    })

    const fun1=(prop)=>{
        const{name,value}=prop.target;
        setaccount((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const fun2=(prop)=>{
        const{name,value}=prop.target;
        setvalidate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const sweety=async()=>{
        alert(JSON.stringify(validate))
        if(validate.pass1===validate.pass2)
        {
            account.password=validate.pass1;

            alert(JSON.stringify(account))
            const t=await adding(account)
            alert(t.data)
            candy()

        }
        else
        {
            alert("Invalid Value")
        }

    }

    const candy=()=>{
        setaccount(()=>{
            return{
                "accountHolder":"",
                "accountBalance":0.0,
                "contact":0,
                "email":"",
                "customerId":0
            }
        })

        setvalidate(()=>{
            return{
                "pass1":"",
                "pass2":""
            }
        })
    }
    return(
        <>
        <div className="container-fluid">
        <Typography className='text-center text-success' variant="h4" component="div" gutterBottom>
                     Account Openning Form
                </Typography>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-4">
                <TextField
                            name="accountHolder"
                            value={account.accountHolder}
                            onChange={fun1}
                            id="input-with-icon-textfield"
                            label="Account Holder"
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
                        <div className='row mt-3'>
                            <div className='col-lg-6 col-sm-12'>
                            <TextField
                                    name="contact"
                                    value={account.contact}
                                    onChange={fun1}
                                    id="input-with-icon-textfield"
                                    label="Account Contact"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneAndroidIcon/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                    className='form-control'
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                            <TextField
                                    name="email"
                                    value={account.email}
                                    onChange={fun1}
                                    id="input-with-icon-textfield"
                                    label="Account Email"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <TextField
                            name="accountBalance"
                            value={account.accountBalance}
                            onChange={fun1}
                            id="input-with-icon-textfield"
                            label="Account Openning balance"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        ₹
                                    </InputAdornment>
                                ),
                                }}
                            variant="outlined"
                            className='form-control mt-3'
                        />
                        <TextField
                            name="customerId"
                            value={account.customerId}
                            onChange={fun1}
                            id="input-with-icon-textfield"
                            label="Customer Id"
                            variant="outlined"
                            className='form-control mt-3'
                        />
                        <div className='row mt-3'>
                            <div className='col-lg-6 col-sm-12'>
                                <input onChange={fun2} value={validate.pass1} name="pass1" type="password" placeholder='password' className='form-control'/>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input onChange={fun2} value={validate.pass2} name="pass2" type="password" placeholder='conform password' className='form-control'/>
                            </div>
                        </div>
                        <div className='row justify-content-around mt-3'>
                        <Button className='col-3' variant="outlined" color="primary" onClick={sweety}>
                                <AccountBalanceIcon/>Open
                            </Button>
                            <Button className='col-3' variant="outlined" color="error" onClick={candy}>
                                <CancelPresentationIcon/>Cancel
                            </Button>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}