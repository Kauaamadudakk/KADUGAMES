import React, { useState } from 'react';
import QuemSomos from './components/QuemSomos';
import Produtos from './components/Produtos';
import Parcerias from './components/Parcerias';
import Contato from './components/Contato';
import FormCadastro from './components/FormCadastro';
import './App.css'; // Importando os estilos

function App() {
  // Estado para controlar a exibição de QuemSomos
  const [showQuemSomos, setShowQuemSomos] = useState(false);
  // Estado para controlar a exibição do FormCadastro
  const [showFormCadastro, setShowFormCadastro] = useState(false);

  const handleShowQuemSomos = () => {
    setShowQuemSomos(true);
  };

  const handleHideQuemSomos = () => {
    setShowQuemSomos(false);
  };

  const handleShowFormCadastro = () => {
    setShowFormCadastro(true);
  };

  const handleHideFormCadastro = () => {
    setShowFormCadastro(false);
  };

  return (
    <div className="container">
      {/* Adicionando o Header */}
      <header className="header" >
        <h1 className="header-title">KADUGAMES</h1>
      </header>

      {/* Botão Quem Somos */}
      {!showQuemSomos && (
        <button className="btn btn-primary" onClick={handleShowQuemSomos}>
          Quem somos?
        </button>
      )}

      {showQuemSomos && (
        <div id="quemSomos" className="form-container">
          <section className="section">
            <QuemSomos />
          </section>
          <button className="btn btn-secondary" onClick={handleHideQuemSomos}>
            Fechar
          </button>
        </div>
      )}

      {/* Seções de Produtos, Parcerias, Contato */}
      <section className="section">
        <Produtos />
      </section>

      <section className="section">
        <Parcerias />
      </section>

      <section className="section">
        <Contato />
      </section>

      {/* Botão Cadastro */}
      {!showFormCadastro && (
        <button className="btn btn-primary" onClick={handleShowFormCadastro}>
          Cadastre-se
        </button>
      )}

      {showFormCadastro && (
        <div id="cadastro" className="form-container">
          <FormCadastro />
          <button className="btn btn-secondary" onClick={handleHideFormCadastro}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;