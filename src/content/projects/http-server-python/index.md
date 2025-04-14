---
title: "Servidor HTTP feito em Python"
summary: "Servidor HTTP construído do zero com Python puro, manipulando conexões TCP, headers HTTP e concorrência com threads."
date: "Jul 25 2024"
draft: false
tags:
- Python
- Network
- HTTP
- Build Your Own
repoUrl: https://github.com/Ryrden/http-server-python
---

## 🌐 Sobre o projeto

Este foi um projeto bem legal, construi um **servidor HTTP do zero** como parte do desafio do [CodeCrafters](https://app.codecrafters.io/courses/http-server/overview).

O objetivo era criar um servidor capaz de:

- Lidar com requisições **GET** e **POST**
- Servir arquivos diretamente do sistema de arquivos
- Gerenciar múltiplas conexões simultâneas via `threading`
- Implementar compressão de conteúdo com **gzip**
- Manter conexões persistentes entre cliente e servidor

Tudo isso utilizando apenas **Python puro**, sem frameworks ou bibliotecas externas — o que forçou um entendimento aprofundado do protocolo HTTP e do funcionamento da rede.

---

## 🛠️ Como foi desenvolvido

A stack foi minimalista e focada no aprendizado:

- **Python 3** como linguagem principal  
- **Sockets TCP** para comunicação de baixo nível  
- **Threading** para lidar com múltiplos clientes de forma paralela  
- Manipulação manual do protocolo HTTP (headers, body da mensagem)  

Cada etapa do projeto exigiu o domínio de conceitos fundamentais, desde o parsing das requisições até a geração das respostas byte a byte.

---

## 💡 Principais aprendizados

Ao longo do desenvolvimento, aprofundei meu conhecimento em diversas áreas importantes:

- **Recebimento incremental de dados com `recv()`**, entendendo que a rede pode entregar pacotes incompletos
- **Gzip e compressão de conteúdo**, respondendo corretamente de acordo com o header `Accept-Encoding`
- **Persistência de conexões HTTP/1.1**, mantendo o socket aberto para múltiplas requisições
- **Organização de um servidor multithread** com cuidado para evitar conflitos ou perdas de desempenho

Além disso, cada nova feature foi guiada por testes automatizados do próprio CodeCrafters.

---

## 🧱 Desafios superados

- Garantir que os **cabeçalhos HTTP fossem parseados corretamente**, mesmo com variações nos campos e formatos
- Cuidar da **sincronia entre requisições simultâneas**, utilizando threads sem travar o servidor
- Implementar **respostas apropriadas com status codes**, respeitando a semântica correta de cada verbo
- Gerenciar **escrita e leitura de arquivos** com segurança e validação adequada de paths

Cada um desses pontos exigiu testes e bastante tentativa e erro.

---

## 🔁 Próximos passos

Com a base pronta, tenho planos para expandir este servidor:

- Adicionar suporte a **HTTPS** com certificados TLS/SSL
- Criar **logs acessíveis e bem estruturados** para cada requisição
- Adicionar suporte a **rotas dinâmicas e middlewares**
- Explorar o uso de **WebSockets** para comunicação em tempo real