import React,{useState} from 'react';
import countries from './countries';
//import { useForm } from "react-hook-form";

const FormValidator = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [country, setCountry] = useState("");
    const [acceptedTerm, setAcceptedTerm] =useState(false);
   

    const handleSubmit = (e) => {

        console.log(`Username:${username}, Email: ${email}, Password: ${password},Password2: ${password2}` )
        e.preventDefault();
    }
    return (
        <div className="container">
            <form id="form" className="form" onSubmit={handleSubmit}>
                <h2>Register With Us</h2>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} required /> 
                    
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                    
                </div>
                <div className="form-control">
                    <label htmlFor="password2">Confirm password</label>
                    <input type="password" id="password2" placeholder="Enter password again" value={password2} onChange={e => setPassword2(e.target.value)} required/>
                    
                </div>
                <div className='form-control'>
                    <label>Country  </label>
                        
                        <select value={country} onChange={e=>setCountry(e.target.value)} required>
                            <option key=""></option>
                            {countries.map(country => (
                            <option key={country}>{country}</option>
                             ))} 
                        </select>
                   
                </div>
                <div className="form-control">
                    <label >
                    <input name="acceptedTerms"
                         type="checkbox" value={acceptedTerm} onChange={e => setAcceptedTerm(e.target.value)} required/>
                         I accept the terms of service
                    </label>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default FormValidator;