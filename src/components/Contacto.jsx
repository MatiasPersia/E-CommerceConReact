import React, { useEffect } from 'react';

function Contacto() {
  useEffect(() => {
    function initMap() {
      const location = { lat: -34.397, lng: 150.644 };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location,
      });
      new google.maps.Marker({
        position: location,
        map: map,
      });
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div className="contacto-container">
      <header>
        <h1 className="titulo centrado">Contáctanos</h1>
      </header>

      <section className="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form action="#" method="post">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Asunto:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button className="btn bg-primary text-white rounded-md " type="submit">Enviar</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Información de Contacto</h2>
        <p>Dirección: Calle San José , Mendoza, Argentina</p>
        <p>Teléfono: 261-502-1234</p>
        <p>Correo Electrónico: info@evotech.com</p>
      </section>

      <section className="map">
        <h2>Ubicación</h2>
        <div id="map" style={{ width: '100%', height: '400px', backgroundColor: '#eaeaea' }}></div>
      </section>
    </div>
  );
}

export default Contacto;
