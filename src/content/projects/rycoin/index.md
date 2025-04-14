---
title: "RyCoin: Aprendendo Blockchain com um projeto completo em Solidity, React e Besu"
summary: "Desenvolvimento prático de um DApp completo para interagir com o token RyCoin — criado com Solidity, deploy em rede privada Besu, frontend em React e integração com MetaMask."
date: "Nov 13 2024"
draft: false
tags:
- Blockchain
- Solidity
- ReactJs
- MetaMask
- Besu
- Hardhat
repoUrl: https://github.com/Ryrden/RyCoin
---

![Capa](https://i.imgur.com/uNAjgSV.png)

## 🌐 Sobre o projeto

Este projeto marca minha primeira imersão prática no ecossistema de **blockchain**. O objetivo era construir um **DApp completo** para criação e interação com o token **RyCoin**, utilizando **Solidity** para o contrato inteligente, **React** no frontend, **Hardhat** para automação do deploy e uma rede blockchain privada com **Hyperledger Besu**.

O RyCoin permite funcionalidades como:

- Mint de novos tokens
- Transferência entre contas
- Visualização de saldo conectado à carteira
- Integração com MetaMask e uso de conta local

---

## 📊 Arquitetura e funcionamento

O DApp foi dividido em dois domínios principais:

- **Frontend**: Desenvolvido em React com `ethers.js`, responsável por conectar o usuário à blockchain e exibir os dados do contrato.
- **Blockchain**: Implementado com Solidity, executado em uma rede privada baseada no **Besu P2P Network** com múltiplos nós conectados via genesis.json.

O diagrama abaixo resume a arquitetura de comunicação entre os componentes:

![Diagrama do projeto](/image.png)

---

## 🛠️ Como foi desenvolvido

### 🔹 Smart Contract

O contrato RyCoin foi construído utilizando **OpenZeppelin** como base padrão ERC20. Isso garantiu segurança e compatibilidade com ferramentas como MetaMask e Hardhat. O contrato permite mint e transferência de tokens de forma controlada:

```solidity
function mint(address to, uint256 amount) public {
    _mint(to, amount);
}
```

### 🔹 Backend/Deploy

Utilizei Hardhat para compilar, testar e realizar o deploy do contrato em uma rede Besu local. O deploy foi totalmente scriptado com ethers.js, e a conexão à rede exigiu configuração manual da infraestrutura (nós, genesis file, miner etc).

### 🔹 Rede Blockchain

Implementei três nós utilizando Hyperledger Besu. Os nós foram conectados em rede ponto-a-ponto (P2P), simulando uma blockchain privada descentralizada. O Node1 atuou como bootnode.

### 🔹 Frontend React + ethers.js

O frontend foi criado com Vite + React + TypeScript. A integração com o contrato foi feita com ethers.js, incluindo conexão com a MetaMask, leitura de saldo e chamadas para mint e transfer.

---

## 🧠 Aprendizados

Esse projeto me proporcionou aprendizados valiosos sobre o ecossistema de blockchain moderno:

- Como funciona a arquitetura cliente/contrato/blockchain
- Criação de tokens ERC20 seguindo boas práticas com OpenZeppelin
- Deploy e testes com Hardhat + Besu
- Conexão com carteiras como MetaMask e interação com o frontend via ethers.js
- Conceitos práticos de redes P2P, mineração e persistência com Genesis blocks

---

## 💡 Desafios enfrentados

Alguns dos principais desafios:

- Configurar a rede Besu corretamente com múltiplos nós e manter a sincronização
- Gerenciar a comunicação entre os nós com enode e arquivos de configuração
- Depurar erros de conexão entre frontend e contrato
- Ajustar o contrato e o frontend para uso com carteiras reais (MetaMask)
