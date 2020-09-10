import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faMailBulk, faSms } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function AppContact() {
    return (
      <div className="App-contact">
        <FontAwesomeIcon icon={faCodeBranch}/>
        <FontAwesomeIcon icon={faLinkedin}/>
        <FontAwesomeIcon icon={faMailBulk}/>
        <FontAwesomeIcon icon={faSms}/>
      </div>
    )
}

export default AppContact;