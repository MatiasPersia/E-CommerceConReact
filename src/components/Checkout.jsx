import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function Checkout() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleFinalizar = async (event) => { 
    event.preventDefault();
    try {
      const clientesRef = collection(db, 'clientes');
      await addDoc(clientesRef, { 
        nombre: nombre,
        email: email,
        telefono: telefono
      });
      alert('Cliente guardado correctamente!');
      setNombre('');
      setEmail('');
      setTelefono(''); 
    } catch (error) {
      console.error("Error al guardar el cliente: ", error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form 
          className="formulario flex flex-col gap-4"
          onSubmit={handleFinalizar} 
        >
          <input 
            type="text" 
            placeholder="Ingresá tu nombre" 
            value={nombre} 
            onChange={handleNombreChange} 
            name="nombre" 
          />
          <input 
            type="email" 
            placeholder="Ingresá tu e-mail" 
            value={email} 
            onChange={handleEmailChange} 
            name="email" 
          />
          <input 
            type="text" 
            placeholder="Ingresá tu teléfono" 
            value={telefono} 
            onChange={handleTelefonoChange} 
            name="telefono" 
          />
          <button 
            className="enviar btn btn-warning m-2" 
            type="button" 
          >
            Finalizar 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;