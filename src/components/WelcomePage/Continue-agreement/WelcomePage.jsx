import { Link, useNavigate } from "react-router-dom"
import {Button} from "./Button"
import { createPortal } from "react-dom";
import { AgreementModal } from "./AgreementModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const WelcomePage = () => {
  const [ContinuePop, setContinuePop] = useState(false);
  const [AgreementStatus, setAgreementStatus] = useState(false);
  const selectUser = useSelector((state)=> state.auth?.user)

  const navigate = useNavigate()
  const handleAgreement = () =>{
    setContinuePop(true);
  }
  useEffect(()=>{
    if(AgreementStatus){
      navigate('/login')
    }
    if(selectUser) {
      navigate('/all-chats')
    }
  },[AgreementStatus,navigate, selectUser])


  return (
    <main className="welcome-main">
    <header className="App-header">
        <img src="welcomeImage.png"/>
    </header>
    <div className="welcome-content">
        <div className="welcome-text">
            <h1>Make your chatting fun again.</h1>
            <h1>Be yourself in every message.</h1>
        </div>
        <section className="user-section">
            <span>Terms & Privacy Policy</span>

            <Button className='Welcome-Button' onClick={handleAgreement}>Continue</Button>
            {ContinuePop && createPortal(<AgreementModal setAgreementStatus={setAgreementStatus} setContinuePop={setContinuePop}/>, document.body)}
        </section>
        <Link className="restoreLinkbtn" to='/'>Restore Account</Link>
    </div>
  </main>
  )
}
