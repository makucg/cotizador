import React, {useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen  from './components/Resumen';
import Resultado  from './components/Resultado';
import Spinner  from './components/Spinner';

const Cotenedor = styled.div`
  max-width: 600px;
  margin: auto;
`;

const CotenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Cotenedor className="App">
      <Header 
        titulo='Cotizador de seguros'
      />
      
      <CotenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        <Resumen 
          datos={datos}
        />
        {!cargando
          ? <Resultado 
              cotizacion={cotizacion}
            />
          : null
        }
      </CotenedorFormulario>
    </Cotenedor>
  );
}

export default App;
