---
title: "Como Gerar e Adicionar uma Chave SSH ao GitHub"
summary: "Guia passo a passo para criar e configurar uma chave SSH no GitHub usando o algoritmo ED25519, com instruções para Linux e Windows."
date: "Apr 17 2023"
draft: false
tags:
- GitHub
- SSH
- Linux
- Windows
id: 1572979
---

![Capa](https://i.imgur.com/9GC9TvD.webp)

- [O que é uma chave SSH?](#o-que-é-uma-chave-ssh)
- [Gerando uma chave SSH](#gerando-uma-chave-ssh)
  - [Linux](#linux)
  - [Windows](#windows)
- [Referências](#referências)

## O que é uma chave SSH?

Uma chave <abbr title="Secure Shell">SSH</abbr> é um par de chaves que são usadas para autenticar um usuário em um servidor. A chave pública é usada para criptografar os dados e a chave privada é usada para descriptografar os dados. A chave pública é compartilhada com o servidor e a chave privada é mantida em segredo pelo usuário.

existem diversos tipos de algoritmos de criptografia para gerar chaves <abbr title="Secure Shell">SSH</abbr>, mas neste tutorial eu vou ensinar como gerar uma chave <abbr title="Secure Shell">SSH</abbr> usando o algoritmo <abbr title="Edwards-curve Digital Signature Algorithm 25519">ED25519</abbr>. O algoritmo <abbr title="Edwards-curve Digital Signature Algorithm 25519">ED25519</abbr> é um algoritmo de assinatura digital de curva elíptica que é considerado seguro e rápido.

para saber mais sobre o tema, eu indico esse artigo da Teleport: [Artigo](https://goteleport.com/blog/comparing-ssh-keys/) (em inglês)

## Gerando uma chave SSH

A partir de agora irei separar esse tutorial em duas partes, uma para Linux e outra para Windows.

Antes de começar, você precisa ter o git instalado em sua máquina. Se você não tem, indico a documentação oficial do git para instalar o git em sua máquina: [Documentação](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Linux

Para gerar uma chave <abbr title="Secure Shell">SSH</abbr> no Linux, você precisa abrir o terminal e digitar o seguinte comando:

```bash
ssh-keygen -t ed25519 -C <seu-email>
```

![ssh-keygen on linux](https://i.imgur.com/J56UKtq.webp)

Após digitar o comando, você vai ser solicitado a preencher alguns dados, como o nome da chave e a senha da chave. Você pode digitar o nome que quiser desde que não se esqueça dele, no meu caso, eu apenas apertei <kbd>Enter</kbd> para que o git gerasse o nome da chave automaticamente e que a chave não tenha senha.

Com a chave gerada você deve copiar a chave pública para a área de transferência. Para isso, navegue ate a pasta onde a chave foi gerada (por padrão ela fica na pasta `~/.ssh`, como mostrado na imagem anterior) e digite o seguinte comando:

```bash
cat id_ed25519.pub
```

e copie a chave que aparecer na tela.

![getting the key in linux](https://i.imgur.com/nT9OTKx.webp)

Agora você precisa ir até a página de configurações do github e adicionar a chave que você acabou de copiar.

aqui um atalho para você ir direto para a página de configurações de chaves <abbr title="Secure Shell">SSH</abbr> do github: [Página de configurações de chaves SSH](https://github.com/settings/keys)

aqui você deve ir em `New SSH key` e cole a chave que você copiou anteriormente.

![paste key on github - linux](https://i.imgur.com/5L6KrD8.webp)

Clicando em Add <abbr title="Secure Shell">SSH</abbr> key, você vai adicionar a chave <abbr title="Secure Shell">SSH</abbr> ao github.

Pronto, agora é só testar se a chave foi adicionada corretamente e fazer dar clone de qualquer repositório que você tenha acesso sempre utilizando o endereço SSH. Para testar se a cahve foi adicionada corretamente, você pode digitar o seguinte comando:

```bash
ssh git@github.com
```

se tudo der certo, você vai ver uma mensagem de sucesso e você já pode fazer o clone de qualquer repositório que você tenha acesso, no meu caso eu fiz o clone do meu próprio repositório.

![Testing ssh key - linux](https://i.imgur.com/eDKiWUy.webp)

### Windows

Mesmo processo do linux com a exceção de que aqui eu usei o powershell para criar a chave <abbr title="Secure Shell">SSH</abbr> e o git bash para testar a chave SSH.

Primeiro você precisa abrir o powershell e digitar o seguinte comando:

```powershell
ssh-keygen -t ed25519 -C <seu-email>
```

substitua `<seu-email>` pelo seu email do github.

![ssh-keygen on windows](https://i.imgur.com/bCSWptA.webp)

Após digitar o comando, você vai ser solicitado a preencher alguns dados, como o nome da chave e a senha da chave. Você pode digitar o nome que quiser desde que não se esqueça dele, no meu caso, eu apenas apertei <kbd>Enter</kbd> para que o git gerasse o nome da chave automaticamente e que a chave não tenha senha.

Com a chave gerada você deve copiar a chave pública para a área de transferência. Para isso, navegue ate a pasta onde a chave foi gerada (por padrão ela fica na pasta `C:\Users\ryans\.ssh`, como mostrado na imagem anterior) e digite o seguinte comando:

```powershell
type id_ed25519.pub
```

e copie a chave que aparecer na tela.

![getting ssh key in windows](https://i.imgur.com/XdeXkT1.webp)

Enfim, agora você precisa ir até a página de configurações do github e adicionar a chave que você acabou de copiar. aqui um atalho para você ir direto para a página de configurações de chaves <abbr title="Secure Shell">SSH</abbr> do github: [Página de configurações de chaves SSH](https://github.com/settings/keys)

aqui você deve ir em `New SSH key` e cole a chave que você copiou anteriormente.

![paste key on github - windows](https://i.imgur.com/fYitTGb.webp)

Clicando em Add <abbr title="Secure Shell">SSH</abbr> key, você vai adicionar a chave <abbr title="Secure Shell">SSH</abbr> ao github.

Agora basta verificar o funcionamento da chave SSH. Para isso, você precisa abrir o git bash e digitar o seguinte comando:

```bash
ssh git@github.com
```

se tudo der certo, você vai ver uma mensagem de sucesso e você já pode fazer o clone de qualquer repositório que você tenha acesso, no meu caso eu fiz o clone do meu próprio repositório.

![Testing ssh key - linux](https://i.imgur.com/OQaJNyj.webp)

## Referências

- [Documentação do Github](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh)

Espero que esse tutorial tenha ajudado você a configurar a sua chave <abbr title="Secure Shell">SSH</abbr> no github. Se tiver alguma dúvida ou sugestão, deixe um comentário abaixo ou entre em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/ryan25/).
