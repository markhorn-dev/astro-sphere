---
title: "Formula 1"
summary: "Sistema completo com consultas e manipulação de dados reais da Fórmula 1, incluindo corridas, pilotos, equipes e estatísticas."
date: "Jun 14 2023"
draft: false
tags:
- Python
- Flask 
- PostgreSQL
- Docker
- HTML
- CSS
- Javascript
repoUrl: https://github.com/Ryrden/SCC0541-Formula1
---

![Capa](https://i.imgur.com/aA9UWdE.png)

## 🏁 Sobre o projeto

**Formula 1** é um sistema web desenvolvido como parte da disciplina **SCC0541 - Laboratório de Banco de Dados**, com o objetivo de facilitar a **visualização e manipulação de dados reais da Fórmula 1**. Diante do grande volume de informações sobre corridas, pilotos e equipes, criamos uma solução acessível, dinâmica e interativa para análise desses dados.

---

## 🔧 Como foi desenvolvido

O projeto foi realizado em cerca de **uma semana e meia**, com foco principal no backend e na modelagem relacional. Utilizamos:

- **Python com Flask** no backend
- **PostgreSQL** como banco de dados
- **Docker** para simular e isolar o ambiente
- **HTML5 + CSS3** com templates Jinja2 no frontend

O frontend foi propositalmente simples, sem frameworks modernos, pois o foco da disciplina era o domínio do banco de dados.

---

## ⚙️ Tecnologias e decisões

As escolhas tecnológicas foram feitas com base na **praticidade e no foco acadêmico**:

- **Flask + Python**: leveza e agilidade para prototipação e integração com o banco
- **PostgreSQL**: banco robusto, amplamente utilizado em ambiente acadêmico e corporativo
- **Docker**: agilidade para simular o ambiente sem complicações
- **Jinja2**: integração simples com Flask para renderização de páginas dinâmicas

Optamos por **não utilizar frameworks modernos de frontend** como React ou Vue, para manter o foco total na lógica e nas consultas SQL.

---

## 📚 Aprendizados

Este projeto me permitiu aplicar e consolidar diversos conceitos avançados de banco de dados:

- Modelagem relacional eficiente
- Window Functions e consultas SQL complexas
- Views, Triggers, Functions e Stored Procedures
- Otimização com índices
- Integração backend com banco de dados real via Flask

Foi um exercício prático e direto ao ponto, focado na robustez e poder dos bancos relacionais.

---

## 🧠 Experiência de desenvolvimento

Sem dúvida, **foi o projeto mais intenso da graduação**. Tínhamos apenas uma semana para entregar tudo, e felizmente eu estava ao lado de pessoas em quem confio muito para codar. Desde o primeiro dia, já estávamos com a mão no código.

Com base nos requisitos da disciplina, identificamos dois pilares:

- **Banco de dados**: o centro de tudo
- **Interface**: poderia ser via terminal, mas optamos por um website completo com **SSR usando Flask e Jinja2**

A escolha de Flask veio da minha experiência pessoal tentando criar um site do zero em HTML/CSS puro (falei mais sobre isso no projeto [Website Antigo](/projects/old-website)). O conhecimento acumulado foi essencial para que conseguíssemos entregar algo funcional rapidamente.

Claro que, sob pressão, algumas práticas foram deixadas de lado. Por exemplo, utilizamos **classes estáticas** sem instanciamento para agilizar a lógica (exemplo [aqui](https://github.com/Ryrden/SCC0541-Formula1/blob/10868f7c8e76177398fc6c78c4c7d9474ce1550c/proj_labbd/interactor/racing_team.py#L5-L29)) e deixamos de implementar testes automatizados. Mas o foco era um só: **fazer funcionar**, e fizemos.

No fim, entregamos um sistema completo, funcional e que representou muito para mim em termos de aprendizado técnico e trabalho em equipe. Se tivéssemos mais tempo e maturidade técnica na época, tenho certeza de que conseguiríamos aplicar as boas práticas sem perder produtividade.

---

## 🔮 Próximos passos

Com mais tempo e refatoração, o sistema pode evoluir bastante. Algumas ideias de melhoria incluem:

- Modularização do backend com bons padrões como MVC ou outro que se aplique.
- Criação de um frontend moderno e interativo com foco em UX
- Implementação de testes automatizados
- Reforço na experiência de navegação e visualização de dados

---

Este projeto mostrou na prática como **um bom banco de dados, aliado a uma interface simples e eficaz, pode entregar muito valor**. Foi uma das experiências mais marcantes da minha formação como desenvolvedor.
