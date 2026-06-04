import React from 'react';

const LOGOS = [
  { src: '/logos/logo_FCF.png', alt: 'Logo FCF' },
  { src: '/logos/logo_EAE.png', alt: 'Logo EAE' },
  { src: '/logos/logo_raom.png', alt: 'Logo RAOM' },
  { src: '/logos/logo_SAAE.jpg', alt: 'Logo SAAE' },
];

function FooterLogos() {
  return (
    <div className="footer-logos">
      {LOGOS.map((logo) => (
        <img key={logo.src} src={logo.src} alt={logo.alt} className="footer-logo" />
      ))}
    </div>
  );
}

export default FooterLogos;
