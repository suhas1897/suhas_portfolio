import React from 'react'
import { certificate } from '../../portfolio'
import CertificateContainer from '../CertificateContainer/CertificateContainer'
import './Certificate.css'
const Certificate = () => {
  if (!certificate.length) return null
  return (
    <section id='certificate' className='section certificate'>
      <h2 className='section__title'>Certificates</h2>
      <div className='certificate__container'>
        {certificate.map((certificate) => (
          <CertificateContainer key={certificate.name} certificate={certificate} />
        ))}
      </div>
    </section>
  )
}

export default Certificate
