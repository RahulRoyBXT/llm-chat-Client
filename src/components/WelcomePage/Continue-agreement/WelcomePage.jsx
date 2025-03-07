import { Link } from "react-router-dom"
import {Button} from "./Button"
import { createPortal } from "react-dom";
import { AgreementModal } from "./AgreementModal";
import { useState } from "react";
import LoginPage from "../LoginPage";

export const WelcomePage = () => {
  const [ContinuePop, setContinuePop] = useState(false);
  const [AgreementStatus, setAgreementStatus] = useState(false);
  const handleAgreement = () =>{
    setContinuePop(true);
  }
  if(AgreementStatus){
    return <><LoginPage /></>
  }

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
