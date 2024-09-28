import React from 'react'
import './CertificateContainer.css'
const CertificateContainer = ({ certificate }) => (
  
    <div className='certificate'>
      <h3>{certificate.name}</h3>
      
      <div className='certificate__img-container'>
      
      {certificate.image && (
        <img
          src={certificate.image}
          alt='certificate'
          className='certificate__img'
        />
      )}
      </div>
      <p className='certificate__desc'>{certificate.description}</p>
      
    </div>
  
)

export default CertificateContainer
