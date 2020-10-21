import React, { useState } from 'react';

// components
import Input from './components/Input/Input'

function App() {

  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')

  return (
    <>
      <h1>Input mask react</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <label htmlFor="cpf">cpf</label>
        <Input 
          id="cpf"
          name="cpf"
          placeholder="xxx.xxx.xxx-xx" 
          onChange={e => setCpf(e.target.value)}
          mask="cpf"
        />
      </div>
    

      <div style={{ display: 'flex', alignItems: 'center'}}>
        <label htmlFor="cep">cep</label>
        <Input 
          id="cep"
          name="cep"
          placeholder="xxxxx-xxxx" 
          onChange={e => setCep(e.target.value)}
          mask="cep"
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center'}}>
        <label htmlFor="telefone">telefone</label>
        <Input 
          id="telefone"
          name="telefone"
          placeholder="xx xxxxx-xxxx" 
          onChange={e => setTelefone(e.target.value)}
          mask="telefone"
        />
      </div>

      <pre>
        <h4>CPF: {`"${cpf}"`} </h4>
        <h4>CEP: {`"${cep}"`} </h4>
        <h4>Telefone: {`"${telefone}"`} </h4>
      </pre>
    </>
  );
}

export default App;
