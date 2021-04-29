import './Signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = ({ onSignup, userdata }) => {

    const [firstname, setFirstname] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    
    let data = userdata;
    if (firstname && age && email) {
        data.user_info.firstname = firstname;
        data.user_info.age = age;
        data.user_info.email = email;
    }

    return (
        <div className='screen-signup'>
            <div className="card-login">
                <div className="header">
                    <img src="https://anima-uploads.s3.amazonaws.com/projects/606461ab10c4a1ed9cbe05dd/releases/606461c2925af94e34d26246/img/path-102@1x.png" alt="" className="icon" />
                    <h1 className="hello">Hello !</h1>
                    <p className="text-account">Enter Your Details</p>
                </div>
                <div className="form-container">
                    <form className="signup-form">
                        <div className="full-name">
                            <div className="label-input-margin">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" onChange={e => { setFirstname(e.target.value) }} />
                            </div>
                            <div className="label-input-margin">
                                <label htmlFor="" className="last-name">Last Name</label>
                                <input type="text" id="last-name" onChange={e => { data.user_info.lastname = e.target.value }} />
                            </div>
                        </div>
                        <div className="age-field">
                            <div className="label-input-margin">
                                <label htmlFor="age" className="age">Age</label>
                                <input type="number" id="age" onChange={e => { setAge(e.target.value) }} />
                            </div>
                        </div>
                        <div className="email-address">
                            <div className="label-input-margin">
                                <label htmlFor="email" className="email">Email Address</label>
                                <input type="email" id="email" onChange={e => { setEmail(e.target.value) }} />
                            </div>
                        </div>
                        {/* <div className="password-field">
                            <div className="label-input-margin">
                                <label htmlFor="password" className="password"> Password </label>
                                <input type="password" id="password" />
                            </div>
                            <div className="label-input-margin">
                                <label htmlFor="confirmPassword" className="password">Confirm Password</label>
                                <input type="password" id="confirmPassword" />
                            </div>
                        </div> */}
                        {
                            firstname && age && email ? <Link to='/experiment' onClick={onSignup(data)}>
                                <button className="submit">
                                    Submit &nbsp;&nbsp;&nbsp;<b>{`>`}</b>
                                </button>
                            </Link> : true
                        }
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Signup
