import React from 'react'
import './Home.css';
import Navigationbar from './Navigationbar';
import WebFooter from './WebFooter';

function Contact() {
  return (
    <div>
    <Navigationbar/>
    <div >
      <h2 className='cont'>Contact US</h2>
      <div className='contwhole'>
      <p className='contpara'>You can send us an email on ajithajith17581@gmail.com or call us on +91 8610022751</p>
    </div>
    <div className='contdetails'>
    <form>
  <label>
    <input type="text" placeholder="Your name" />
  </label>
  <label>
    <input type="text" placeholder="Your email" />
  </label>
  
</form>
<form>
  <label >
    <input type="text"className='contphone' placeholder="Your phone(Optional)" />
  </label>
</form>
<form>
  <label>
    <input type="text" className='contmessage' placeholder="Your message"/>
  </label>
</form>
<label>
  <form>
  <button type="button" class="btn btn-success">Submit                                                                                                                                          </button>
  </form>
</label>
    </div>
    </div>
    <footer>
      <WebFooter/>
    </footer>
    </div>
  )
}

export default Contact;