import React, { useState } from 'react';

const FormCadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    sexo: '',
    cpf: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: 'Brasil',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cep });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData({
            ...formData,
            endereco: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  return (
    <section>
      <h2>Cadastro de Cliente</h2>
      <form>
        <label>Nome Completo:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />

        <label>Idade:</label>
        <input type="number" name="idade" value={formData.idade} onChange={handleInputChange} required />

        <label>Sexo:</label>
        <select name="sexo" value={formData.sexo} onChange={handleInputChange} required>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>

        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} required />

        <label>CEP:</label>
        <input type="text" name="cep" value={formData.cep} onChange={handleCepChange} required />

        <label>Endereço:</label>
        <input type="text" name="endereco" value={formData.endereco} readOnly />

        <label>Número:</label>
        <input type="text" name="numero" value={formData.numero} onChange={handleInputChange} required />

        <label>Complemento:</label>
        <input type="text" name="complemento" value={formData.complemento} onChange={handleInputChange} />

        <label>Bairro:</label>
        <input type="text" name="bairro" value={formData.bairro} readOnly />

        <label>Cidade:</label>
        <input type="text" name="cidade" value={formData.cidade} readOnly />

        <label>Estado:</label>
        <input type="text" name="estado" value={formData.estado} readOnly />

        <label>País:</label>
        <input type="text" name="pais" value={formData.pais} readOnly />
      </form>
    </section>
  );
};

export default FormCadastro;
