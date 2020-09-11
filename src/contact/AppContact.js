import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faMailBulk, faSms } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function AppContact() {
    return (
      <div className="App-contact">
        <div className="contact-git">
          <FontAwesomeIcon className="contact-git-icon" icon={faCodeBranch}/>
          <div className="contact-git-content">
            <a href="https://github.com/lenitpx">Github</a>
          </div>
        </div>
        <div  className="contact-li">
          <FontAwesomeIcon className="contact-li-icon" icon={faLinkedin}/>
        </div>
        <div className="contact-mail">
          <FontAwesomeIcon className="contact-mail-icon" icon={faMailBulk}/>
        </div>
        <div className="contact-sms">
          <FontAwesomeIcon className="contact-sms-icon" icon={faSms}/>
        </div>
      </div>
    )
}

export default AppContact;