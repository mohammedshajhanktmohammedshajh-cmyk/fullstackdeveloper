import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, TextField, InputAdornment, IconButton,} from '@mui/material'
import axios from 'axios';

import Visibility from    '@mui/icons-material/Visibility';
import VisibilityOff     from '@mui/icons-material/VisibilityOff';




const Login = () => {
    const navigate = useNavigate();
     const API_URL = import.meta.env.VITE_API_URL;
    const[showPassword, setShowPassword] = useState(false);
         const handleClickShowPassword = () => {
            setShowPassword(!showPassword);
         }
        
          
          
    const [count, setCount] = useState(0);
    const [disablebtn, setDisableButton] = useState(false);
    const [userDetails, setUserDetails] = useState({
      email: '',
      password: '',
    });
       
      

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
      if (!userDetails.email.trim() || !userDetails.password.trim()) {
        alert('All fields are required');
        return;
      }

      try {
              const response = await axios.post(`${API_URL}/auth/login`, {
                email: userDetails.email.trim(),
                password: userDetails.password,
              });
              alert(response.data?.message || 'Login successful.');
              navigate("/dashboard");
            } catch (error) {
              console.log("response error =>", error.response?.data?.message || error.message);
              alert(error.response?.data?.message || 'login failed!');
            }
    };




    useEffect(() => {
        console.log("login updating", count);
        if (count === 10) {
            setDisableButton(true);
        }
    }, [count]);

   // useEffect(() => {
       // console.log("login mounted");
       // return () => {
           // console.log("login unmounted");
       // };
   // }, []);



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
            <Typography  variant="h4">Login page</Typography>
            <Box sx={{mt: 2}}>
               <TextField
                 name="email"
                 label="email"
                 placeholder="enter your email"
                 value={userDetails.email}
                 onChange={handleChange}
               />
            </Box>
           
        <Box>                  
          <TextField
            name="password"
            label="password"
            placeholder="enter your password"
            type={showPassword ? 'text' : 'password'}
            value={userDetails.password}
            onChange={handleChange}
           
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: 'text.secondary' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
            
            <Box>
              <Button variant="contained" onClick={handleLogin}>Login</Button>
            </Box>
            <Box>
             <Button variant="outlined" onClick={() => navigate('/register')}>
                 create an account
              </Button>
            </Box>
            <Button onClick={() => setCount(count + 1)} disabled={disablebtn}>
                count {count}
            </Button>
        </Box>
    );
}



export default Login;



