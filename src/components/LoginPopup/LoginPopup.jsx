

// import React, { useState } from 'react'
// import './LoginPopup.css'
// import { useForm } from "react-hook-form";
// //import { assets } from '../../assets/assets/admin_assets/assets'
// import {axiosInstance} from "../../config/axiosInstance";
// import { useNavigate } from 'react-router-dom';


// const LoginPopUp = ({setShowLogin}) => {

// const [currState,setCurrState] = useState("Login")
// // const { register, handleSubmit } = useForm();
// // const navigate = useNavigate();

// // const onSubmit = async (data) => {
// //    try{
// //     const response = await axiosInstance({
// //       method : "PUT",
// //       url: "/user/login",
// //       data : data,
// //     })
// //     console.log("response====", response)
// //     navigate('/user/profile')

// //    }catch(error){
// //       console.log(error)
// //    }
// //     }

// //onSubmit={handleSubmit(onSubmit)}
  

//   return (
//     <div className='login-popup'>
//        <form className='login-popup-container'  >
//         <div className='login-popup-title'>
//             <h2>{currState}</h2>
//             <img onClick={()=>setShowLogin(false)}src="\public\close.png" alt="" />
//         </div>

//        <div className='login-popup-inputs'>
//            {currState==="Login"?<></>:<input type="text" placeholder='Name' required />}
          
//            <input type="email" placeholder='Email' required />
//            <input type="password" placeholder='Password' required />

//        </div>
//           <button>{currState==="Sign Up"?"Create account":"Login"}</button>
//           <div className='login-popup-condition'>
//               <input type='checkbox' required/>
//               <p>By continuing, I agree to the terms of use & privacy policy. </p>
//           </div>
//           {currState==="Login"
//           ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
//           :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
//           }

//        </form>
//     </div>
//   )
// }

// export default LoginPopUp

 123456


import React, { useState } from 'react';
import './LoginPopup.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    if (currState === "Login") {
      // Simulating a login action
      console.log("Logging in...");
      // navigate('/user/restaurant'); // Redirecting after login
      navigate('/user/all-restaurants');
    } else {
      console.log("Signing up...");
      // navigate('/user/restaurant'); // Redirecting after sign-up
      navigate('/user/all-restaurants');
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit(onSubmit)}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src="/public/close.png" alt="Close" />
        </div>

        <div className='login-popup-inputs'>
          {currState === "Sign Up" && <input type="text" placeholder='Name' {...register("name")} required />}
          <input type="email" placeholder='Email' {...register("email")} required />
          <input type="password" placeholder='Password' {...register("password")} required />
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;



//@22@@2@@


// import React, { useState, useEffect } from 'react';
// import './LoginPopup.css';
// import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';

// const LoginPopUp = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Login");
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   // Check if user is already logged in and redirect
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate('/user/restaurants'); // Redirect to restaurants if already logged in
//     }
//   }, [navigate]);


//   const onSubmit = async (data) => {
//     setError(""); // Clear previous errors
  
//     const endpoint = currState === "Login"
//       ? "http://localhost:3000/api/v1/user/login"
//       : "http://localhost:3000/api/v1/user/signup";
  
//     const requestBody = currState === "Login"
//       ? { email: data.email, password: data.password }
//       : { name: data.name, email: data.email, password: data.password, phone: data.phone || "0000000000" };
  
//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestBody),
//       });
  
//       const result = await response.json();
//       console.log("Response from server:", result); // Debugging
  
//       // Check where token is located in the response
//       const token = result.token || result.data?.token;
  
//       if (response.ok && token) {
//         localStorage.setItem("token", token);
//         console.log("Token saved:", token);
//         navigate('/user/restaurants'); // Redirect after login/signup
//       } else {
//         setError(result.message || "Authentication failed");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//       console.error(err);
//     }
//   };


//         // ✅ Redirect to /user/restaurants after login/signup
//         navigate('/user/restaurants'); 
     
//   return (
//     <div className='login-popup'>
//       <form className='login-popup-container' onSubmit={handleSubmit(onSubmit)}>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src="/public/close.png" alt="Close" />
//         </div>

//         <div className='login-popup-inputs'>
//           {currState === "Sign Up" && <input type="text" placeholder='Name' {...register("name")} required />}
//           <input type="email" placeholder='Email' {...register("email")} required />
//           <input type="password" placeholder='Password' {...register("password")} required />
//           {currState === "Sign Up" && <input type="tel" placeholder='Phone Number' {...register("phone")} required />}
//         </div>

//         {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//         <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

//         <div className='login-popup-condition'>
//           <input type='checkbox' required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === "Login" ? (
//           <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//         ) : (
//           <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopUp;
