import React , {useState} from 'react'
import { TextField, Grid , FormControl, InputLabel, OutlinedInput , InputAdornment , IconButton , Button } from '@mui/material'
import {VisibilityOff , Visibility} from '@mui/icons-material';
import {Link} from 'react-router-dom'
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [name, setName] = useState("")
  const [nameErr, setNameErr] = useState("")
  const [password, setPassword] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("")
  const [passwordLengthErr, setPasswordLengthErr] = useState("")
  const [passwordMatchErr, setPasswordMatchErr] = useState("")

  const handleSubmit = ()=>{
      if(!email){
        setEmailErr("please enter your email")
      }else if(!name){
        setNameErr("please enter yout full name")
        setEmailErr("")
      }else if(!password){
        setPasswordErr("please enter your password")
        setNameErr("")
      }else if(password.length < 8){
        setPasswordLengthErr("please enter password greater than 8")
        setPasswordErr("")
      }else if(!confirmPassword){
        setConfirmPasswordErr("please enter your confirm password")
        setPasswordErr("")
        setPasswordLengthErr("")
      }else if(password!=confirmPassword){
        setPasswordMatchErr("please your password don't match")
        setConfirmPasswordErr("")
      }

      else{
        setPasswordMatchErr("")
      }
  }


  return (
    <>

      <section className="registration-part">
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <div className="box">
              <div className="left">
                <h1>Get started with easily register</h1>
                <p>Free register and you can enjoy it</p>



                <TextField
                  helperText={emailErr}
                  id="demo-helper-text-misaligned"
                  label="Email"
                  style={{ width: "350px" }}
                  onChange={(e)=> setEmail(e.target.value )}
                /> <br></br>
              
                <FormControl sx={{ width: '350px' , marginTop:"20px" }} variant="outlined"
                onChange={(e)=> setPassword(e.target.value )}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <p className='passErr'>{passwordErr ? passwordErr : passwordLengthErr}</p>
                </FormControl> <br></br>
                <p style={{marginTop:"-5px"}}>Foget password?</p>

                <Button onClick={ handleSubmit} style={{width:"350px" , marginTop:"20px" , background:"blue" , color:"white", padding:"9px 0"}}>Signin to Continue</Button>
                <div>
                    <p style={{textAlign:"center" , color:"#03014C"}}>Have an accounyt? <span><Link to={'/'}>Sign up</Link></span></p>
                </div>

              </div>
            </div>
          </Grid>


          <Grid item xs={6}>
            <img style={{ width: "100%", height: "100vh" }} src="./asset/images/registrationbg.png"></img>
          </Grid>

        </Grid>
      </section>


    </>
  )
}

export default Login