// import { useContext, useState } from "react";
// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from "../contexts/AuthProvider";

// const title = "Register";
// const socialTitle = "Login with Social Media";
// const btnText = "Signup Now";

// const Signup = () => {
//     const [errorMessage,setErrorMessage] = useState("");
//     const {signUpWithGmail,login} = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();
//     // location
//     const from = location.state?.from?.pathname || "/";
    
//     // handler func
//     const handleRegister = () => {
//         signUpWithGmail().then((result) => {
//             const user = result.user;
//             navigate(from , {replace:true})
//         }).catch((error) => {
//             const errorMsg = error.message;
//             setErrorMessage("Please provide valid email & password!")
//         })
//     const handleSignup = (event) => {};
//   return (
//     <div className='login-section padding-tb section-bg'>
//     <div className="container">
//     <div className="account-wrapper">
//     <h3 className="title">{title}</h3>
//     <form className='account-form' onSubmit={handleSignup}>
//     {/*  */}
//     <div className="form-group">
//     <input type="text" name='name' id='name' 
//     placeholder='Full Name' required/>
//     </div>
//     <div className="form-group">
//     <input type="email" name='email' id='email' 
//     placeholder='Email Address' required/>
//     </div>
//     {/*  */}
//     <div className="form-group">
//     <input type="password" name='password' id='password' 
//     placeholder='Password *' required/>
//     </div>
//     {/*  */}
//     <div className="form-group">
//     <input type="password" name='confirmPassword' id='confirmPassword' 
//     placeholder='Confirm Password *' required/>
//     </div>
//     {/*  */}
//     <div>
//         {
//         errorMessage && (
//             <div className='error-message text-danger mb-1'>
//                 {errorMessage}
//             </div>
//         )
//         }
//     </div>
//     {/*  */}
//     <div className="form-group">
//     <button className='d-block lab-btn' type='submit'>
//     <span>{btnText}</span>
//     </button>
//     </div>
//     </form>
//     {/*  */}
//     <div className="account-bottom">
//     <span className='d-block cate pt-10'>
//     Have an Account? <Link to="/login">Login</Link>
//     </span>
//     <span className='or'><span>or</span></span>
//     {/* icons */}
//     <h5 className="subtitle">{socialTitle}</h5>
//     <ul className='lab-ul social-icons justify-content-center'>
//         <li>
//         <button className='github' onClick={handleRegister}>
//             <i className='icofont-github'></i>
//         </button>
//         </li>
//         {/*  */}
//         <li>
//         <a href="/" className='facebook'>
//             <i className='icofont-facebook'></i>
//         </a>
//         </li>
//         {/*  */}
//         <li>
//         <a href="/" className='twitter'>
//             <i className='icofont-twitter'></i>
//         </a>
//         </li>
//         <li>
//         <a href="/" className='linkedin'>
//             <i className='icofont-linkedin'></i>
//         </a>
//         </li>
//         <li>
//         <a href="/" className='instagram'>
//             <i className='icofont-instagram'></i>
//         </a>
//         </li>
//     </ul>
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }
// }
// export default Signup;

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Redirect path after successful signup
    const from = location.state?.from?.pathname || "/";

    // Handle the signup form submission
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        // Assume a signUp function exists in the AuthContext for form-based signup
        login(email, password)
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    // Handle social login (e.g., Gmail)
    const handleRegister = () => {
        signUpWithGmail()
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage("Please provide a valid email & password!");
            });
    };

    return (
        <div className='login-section padding-tb section-bg'>
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">Register</h3>
                    <form className='account-form' onSubmit={handleSignup}>
                        <div className="form-group">
                            <input type="text" name='name' id='name' placeholder='Full Name' required />
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' id='email' placeholder='Email Address' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='password' id='password' placeholder='Password *' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required />
                        </div>
                        <div>
                            {errorMessage && (
                                <div className='error-message text-danger mb-1'>
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <button className='d-block lab-btn' type='submit'>
                                <span>Signup</span>
                            </button>
                        </div>
                    </form>
                    <div className="account-bottom">
                        <span className='d-block cate pt-10'>
                            Have an Account? <Link to="/login">Login</Link>
                        </span>
                        <span className='or'><span>or</span></span>
                        <h5 className="subtitle">Login with Social Media</h5>
                        <ul className='lab-ul social-icons justify-content-center'>
                            <li>
                                <button className='github' onClick={handleRegister}>
                                    <i className='icofont-github'></i>
                                </button>
                            </li>
                            <li>
                                <a href="/" className='facebook'>
                                    <i className='icofont-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='twitter'>
                                    <i className='icofont-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='linkedin'>
                                    <i className='icofont-linkedin'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='instagram'>
                                    <i className='icofont-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
