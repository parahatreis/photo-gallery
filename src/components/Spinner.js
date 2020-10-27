import React from 'react'
import loading from '../img/loading.gif'

const Spinner = () =>
      <div style={{width: '100%',height: '100vh', display:'flex', alignItems: 'center'}}>
         <img src={loading} alt="spinner" style={{width: '200px',margin : 'auto' ,display : 'block'}} />
      </div>

export default Spinner
