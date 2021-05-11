import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const Cotenedor = styled.div`
  max-width: 600px;
  margin: auto;
`;

const CotenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  return (
    <Cotenedor className="App">
      <Header 
        titulo='Cotizador de seguros'
      />
      
      <CotenedorFormulario>
        <Formulario />
      </CotenedorFormulario>
    </Cotenedor>
  );
}

export default App;
