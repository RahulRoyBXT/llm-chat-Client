import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/authSlice.js";

const RegisterPage = ({setRegisterForm}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState('')
  const [profilePic, setProfilePic] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result); // Convert to Base64
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { userName, email, password, profilePic };
    dispatch(registerUser(newUser));
    alert("User Registered Successfully!");
  };

  return (
    <div className="h-1/2 w-screen bg-base-300 z-50 flex justify-center items-center transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2 p-4"> 
      <span className='absolute z-51 right-5 top-5 text-4xl p-3 border-1 bg-base-300 rounded-xl text-base-100' onClick={()=> setRegisterForm(false)}>x</span>
        <div className="h-full bg-base-100 flex flex-col p-4">  
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input className="h-10 border-2 border-base-content/10 w-4/5 p-2 focus:border-base-300 shadow-xl shadow-base-300 outline-0 focus:text-base-content/50" type="text" placeholder="name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            <input className="h-10 border-2 border-base-content/10 w-4/5 p-2 focus:border-base-300 shadow-xl shadow-base-300 outline-0 focus:text-base-content/50" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="h-10 border-2 border-base-content/10 w-4/5 p-2 focus:border-base-300 shadow-xl shadow-base-300 outline-0 focus:text-base-content/50" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input className="h-10 border-2 border-base-content/10 w-4/5 p-2 focus:border-base-300 shadow-xl shadow-base-300 outline-0 focus:text-base-content/50" type="file" accept="image/*"  onChange={handleFileChange} required />
            <button className="h-10 border-2 bg-base-300 rounded-xl shadow-xl shadow-base-300 text-base-content/60 border-base-content/10 w-2/5 p-2 focus:border-base-300 outline-0 focus:text-base-content/50" type="submit">Register</button>
            </form>
        </div> 
    </div>
  );
};

export default RegisterPage;
