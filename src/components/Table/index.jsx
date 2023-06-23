import React from 'react';
import styles from './Table.module.css'

const Table = () => {
  const dadosIMC = [
    { faixa: 'Abaixo do Peso', inicio: ' 0 - 18.5' },
    { faixa: 'Peso Normal', inicio: '18.5 - 25' },
    { faixa: 'Sobrepeso', inicio: ' 25 - 30' },
    { faixa: 'Obesidade Grau I', inicio: '30 - 35' },
    { faixa: 'Obesidade Grau II', inicio: '35 - 40' },
    { faixa: 'Obesidade Grau III', inicio: '>40',}
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Faixa de IMC</th>
          <th>Início</th>
        </tr>
      </thead>
      <tbody>
        {dadosIMC.map((item, index) => (
          <tr key={index}>
            <td>{item.faixa}</td>
            <td>{item.inicio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table