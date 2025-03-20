---
title: "O que a série You pode te ensinar sobre segurança digital"
summary: "Um guia contextual sobre segurança digital pessoal"
draft: false
date: "20 dec 2020"
tags: 
- segurança digital 
---

#### (Atenção: Este texto pode conter _spoilers_ da primeira temporada de “You”)

![Joe Goldberg olhando com um semblante sério para frente, usando um boné sóbrio e segurano um smartphone no ouvido com a mão
](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2aprrb86xl6zlfos3hw6.jpg)

Neste texto eu finjo que tento te convencer a assistir à série “You”.

Narrada em primeira pessoa por Joe Goldberg, um gerente de livraria que se apaixona por uma mestranda em poesia, a trama não surpreende por sua qualidade enquanto obra cinematográfica, mas por mostrar alguns exemplos críveis sobre a importância da segurança digital.

Existem dois aspectos relevantes sobre a série e sua relação com o tema deste texto: o primeiro diz respeito ao fracasso em suspender a descrença do expectador em favor de algumas conveniências de roteiro. No mundo real, pessoas não costumam romper namoros à primeira demonstração de ciúme; tampouco costumam ficar ofendidos porque a festa-surpresa de aniversário tinha mais pessoas do que o esperado. Mais importante do que isso, não se espera que um psicopata atrapalhado continue se dando bem após sucessivos descuidos ao passo que se dá mal justamente quando se propõe a ser cuidadoso. Segundo os noticiários nos ensinam, esse perfil de criminoso está, em sua maioria, morto ou preso.

O que faz de “You” uma série medíocre é o fato dela não ser uma representação da realidade, e sim uma mera anedota, usada para justificar um enredo preguiçoso. Como seus personagens são anedóticos e anedotas não convencem o espectador, acreditar no que está sendo mostrado é uma tarefa árdua.

O segundo aspecto diz respeito à inevitável conexão com o real, presente ao longo de toda a drama, que jamais deve ser ignorada — e é através dela que podemos extrair o que You tem de melhor: os personagens vivem na cidade de Nova York, possuem smartphones, Instagram, Facebook; eles trabalham, estudam, saem com os amigos, têm encontros, saem para jantar, viajam. Ou seja, quando um autor quer evitar escrever ficção científica ou fantástica, ele precisa respeitar o conjunto total de regras lógicas que atuam no mundo real/atual; e partindo do pressuposto de que a série teve êxito nessa tarefa, há motivos suficientes para que ela seja útil enquanto fonte de exemplos de como a exploração de vulnerabilidades na ficção pode ser idêntica à exploração de vulnerabilidades no mundo factual.

Portanto, com base em acontecimentos da primeira temporada, elaborei um compilado de dicas que você pode implementar no dia a dia e que podem te ajudar a manter distância de pessoas potencialmente mal-intencionadas.

### Smartphones, tablets e computadores

![A Windows 10 lock screen saying that the fingerprint couldn’t be recognised.](https://cdn-images-1.medium.com/max/1024/1*KLBdTNnCpbzbaWbPU3xXag.jpeg)<figcaption>Photo by <a href="https://unsplash.com/@meymigrou?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Panos Sakalakis</a> on <a href="https://unsplash.com/s/photos/lock-screen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></figcaption>

#### Utilize Boas Senhas de Desbloqueio

Na série, um laptop é facilmente invadido, numa mistura de conveniência para os roteiristas e uma legítima ingenuidade da personagem dona do device. É aconselhável que você proteja o seu _device_ com ao menos algum tipo de senha, seja ela biométrica (no leitor de impressões digitais), numérica ou um desenho (o chamado “padrão de desbloqueio”, do inglês _pattern lock_). A ideia é que, se não estiver utilizando um leitor de digitais, você se previna dessa possibilidade de invasão. O leitor biométrico não é à prova de falhas, mas, se ele estiver disponível, é melhor que esteja ativado.

#### Remova Conteúdos Pessoais do Armazenamento Local

Prefira salvar cópias dos seus dados na nuvem, seja para fins de backup, seja para sua segurança.

Se um dia você perder seu dispositivo ou ele for furtado/roubado, é importante ter ativado o recurso Encontrar Dispositivo (Android) ou o Find My (iOS/macOS). Ele permite não apenas que o rastreamento, mas também a remoção do acesso à conta e a limpeza dos dados do aparelho roubado/perdido.

Como esse recurso é uma medida de último caso e só funciona enquanto houver conexão com a internet, a melhor dica é: não armazene no seu smartphone conteúdos pessoais ou sensíveis, tanto aqueles pertencentes a você quanto a seus familiares e outras pessoas próximas. Tenha o costume de salvar em outro local — de preferência na nuvem — arquivos pessoais, como fotos, vídeos, endereços, números de documentos, senhas etc. Evite fazer backup **apenas** em HDs externos e pendrives, pois, por mais versáteis que eles sejam, sempre há a chance deles se corromperem a qualquer momento, tornando os dados salvos inacessíveis permanentemente.

(Saiba mais sobre o Find My [aqui](https://www.apple.com/br/icloud/find-my/) (site da Apple) e sobre o Encontrar Dispositivo [aqui](https://myaccount.google.com/find-your-phone) (Dashboard do Google))

#### Criptografe Seus Dados

![A german Enigma Machine, exposed at a museum.](https://cdn-images-1.medium.com/max/1024/1*VkS8agGt5schHU1KWRIlTw.jpeg)<figcaption>Enigma Machine. (Photo by <a href="https://unsplash.com/@maurosbicego?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mauro Sbicego</a> on <a href="https://unsplash.com/s/photos/cryptography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>)</figcaption>

Como já sabemos, manter o armazenamento local livre de dados pessoais é um ideal difícil de ser cumprido. Então, certificar-se de que seu smartphone/tablet está criptografado é uma forma de impedir que dados sejam extraídos do seu _device_ caso ele seja acessado por alguém indesejado.

De maneira simples, a criptografia é um processo de codificação de dados. As informações neles contidas passam por um algoritmo que os “embaralha” para que, caso sejam acessados, eles se tornem ininteligíveis para quem vê. A única forma de desencriptá-los é através de uma chave correspondente, que reverte o processo disparado pelo algoritmo. Quando, por exemplo, o WhatsApp diz que habilitou a criptografia de ponta a ponta, na prática significa que você e a pessoa do outro lado possuem um código de segurança idêntico para a conversa entre vocês, possibilitando a troca de mensagens.

Para saber mais, assista ao incrível “O Jogo da Imitação” (2014), filme baseado em fatos reais que narra a importância do trabalho do matemático e cientista da computação inglês Alan Turing como _code breaker_ durante a 2ª Guerra Mundial.

Mais informações sobre a importância da criptografia e como habilitá-la (caso já não esteja por padrão): artigo [mantendo seus dados seguros](https://ssd.eff.org/pt-br/module/mantendo-seus-dados-seguros) (_Surveillance Self-Defense_).

### Redes Sociais e Outros Sites

![A smartphone grabbed by a causasian left hand. Is shows an iPhone homescreen with 6 rows and 4 columns of a miriad of apps.](https://cdn-images-1.medium.com/max/1024/1*xf5RufT-nExF_kiaIwTUkw.jpeg)<figcaption>Photo by <a href="https://unsplash.com/@saulomohana?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Saulo Mohana</a> on <a href="https://unsplash.com/s/photos/apps-social?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></figcaption>

#### Facebook

O Facebook provavelmente é a rede social que centraliza num só lugar a maior quantidade de informações sobre você. Felizmente, a própria rede social possui um a ferramenta chamada Verificação de Privacidade. Entre outros tópicos, você pode controlar o nível de informações pessoais às quais visitantes do seu perfil têm acesso, sejam eles seus amigos, amigos de amigos ou desconhecidos. Saiba quais informações você deixa públicas e impeça que terceiros descubram, através de detecção de padrões e triangulação, o horário em que chega ou sai dos seus lugares frequentes. Ainda mais importante que isso é evitar que descubram **através de**  **você** esse tipo de informação sobre os seus entes queridos ou amigos próximos. Seja um vetor de proteção, não de vulnerabilidade e **jamais** confie na aparente boa intenção das pessoas.

De tempos em tempos faça um **checkup de privacidade** na sua conta do Facebook. Analise a lista de _devices_ com os quais você fez login na plataforma. Essa opção está na seção [Segurança e Login](https://www.facebook.com/settings?tab=security) das configurações. Aproveite para entender quais informações o Facebook coleta sobre você e o que faz com essas informações.

#### Instagram, Snapchat e TikTok

Em apps cuja mídia principal é a audiovisual, a dica é parecida: evite expor publicamente locais sensíveis, como sua casa, os lugares que você costuma frequentar regularmente, nem os horários em que você chega e sai de casa. O método que eu uso nas raras vezes em que publico algo Instagram é optar por postar fotos em lugares que visito pela primeira vez, em lugares que eu frequento sem regularidade ou cuja localização seja difícil de discernir/triangular. O próprio Instagram possui o recurso “melhores amigos” para o compartilhamento de stories visíveis somente por um subconjunto de perfis escolhidos manualmente por você.

### Serviços do Dia a Dia (Google, E-mail Etc.)

#### Google

Faça um _egosearch_. Ele consiste em simplesmente pesquisar quem é você no Google, seja através do seu nome e sobrenome, seja através dos _usernames_ que você utiliza internet afora. O intuito disso é o mesmo que vem sendo repetido ao longo deste texto: diminuir a área de alcance de um stalker ao tentar encontrar informações que apontem para você na internet.

Caso haja conteúdos sobre você que possam te causar algum dano, você pode solicitar a remoção diretamente com o Google. É uma medida drástica, pois tudo o que foi dito até aqui serve justamente para evitar que você chegue nessa situação; mas o Google — neste caso — pode ser seu amigo:

- [Remover Informações do Google](https://support.google.com/websearch/troubleshooter/3111061?hl=en)

E por falar em Google, já que infelizmente não é possível viver completamente fora do alcance dessa megacorp, tenha sempre ao alcance estas três páginas que te permitirão ter mais consciência dos dados armazenados por ele.

1. Painel do Google ([https://myaccount.google.com/dashboard](https://myaccount.google.com/dashboard)): é um panorama geral de como você interage com os serviços e apps do Google, desde suas agendas até suas localizações salvas, apps instalados, seus contatos, e por aí vai.
2. Verificação de segurança ([https://myaccount.google.com/security-checkup](https://myaccount.google.com/security-checkup)): informações sobre seus dispositivos logados na sua conta Google, lista de apps que possuem acesso à sua conta e um log de ocorrências recentes na sua conta. Sempre bom ter essa página ao alcance de um clique/toque de distância.
3. Check-up de Privacidade ([https://myaccount.google.com/privacycheckup](https://myaccount.google.com/privacycheckup)): uma série de configurações sobre o quão exposta você deixa sua conta em troca de recomendações mais detalhadas ao utilizar os serviços do Google.
4. Bônus: acesse a seção de permissões ([https://myaccount.google.com/permissions](https://myaccount.google.com/permissions)) e certifique-se de que todos os apps listados são aqueles para os quais você se lembra de ter dado acesso de login usando sua conta do Google

Novamente, já que [DeGoogle](https://en.wikipedia.org/wiki/DeGoogle) não é uma realidade, pelo menos tenha em suas mãos o poder de decidir como vai pesar essa balança na qual de um lado estão os seus dados e do outro estão os algoritmos de recomendação do Google. O tópico “privacidade versus Google e Facebook” mereceria um texto inteiro — ou talvez uma série de textos, livros, teses de mestrado e doutorado, guilhotinas prontas e afiadas — que aborde o tamanho do problema com o qual estamos lidando. Mas os passos listados já são um começo de um caminho em direção ao _awareness_ que todos deveremos ter para pararmos de acreditar que as empresas bonitinhas da internet ligam pro bem-estar dos seus usuários.

![Black screen and a quote: “There are only two industries that call their customers ‘users’: illegal drugs and software.”](https://cdn-images-1.medium.com/max/739/1*8bxeGdGAduXbJQYtzn9FGA.jpeg)

Por fim, verifique se o seu e-mail já foi comprometido em alguma brecha de segurança através do [Have I Been Pwned](https://haveibeenpwned.com/). Basta digitar seu e-mail para obter uma lista de sites nos quais você utilizou esse e-mail para logar e que tiveram alguma falha de segurança tornada pública e tiveram dados de clientes expostos. Você pode estar entre os perfis expostos, então, ou troque sua senha imediatamente, ou exclua sua conta nesse serviço, caso não o utilize mais.

#### Gerenciadores de Senha

Outro ponto importante é como você salva suas senhas. Antes de mais nada, certifique-se de que elas não estejam armazenadas no seu cérebro. Como você já sabe, o cérebro é um péssimo local para fazer e acessar backups. Outro lugar onde você não deveria armazenar suas senhas é no seu navegador, pois você não é capaz de levá-las para fora dele, caso necessário. Você se torna dependente do bom funcionamento de apenas um navegador para fazer o gerenciamento de todas as suas credenciais, o que não é nada prático.

Dito isto, há soluções pagas e gratuitas, proprietárias e de código aberto, para geração e armazenamento de senhas, como o [LastPass](https://www.lastpass.com/pricing), o [Dashlane](https://www.dashlane.com/plans), o [BitWarden](https://bitwarden.com/pricing/), o [Keeper](https://www.keepersecurity.com/pricing.html?t=b), o [1Password](https://1password.com/sign-up/), entre outros. Além de fazerem tudo o que os gerenciadores presentes nos navegadores não fazem, ainda possuem outras ferramentas, como a funcionalidade de avisar quando uma mesma senha é utilizada em serviços diferentes, medir a força de uma senha, e permitem que, além de senhas, você salve outros tipos de informações sigilosas, como senhas de Wi-Fi, informações de cartão de crédito, notas seguras etc.

#### Autenticação em Dois Fatores (2FA)

É possível adicionar uma camada adicional muito importante na segurança dos logins. O nome dessa camada é Autenticação em Dois Fatores (ou _Two-Factor Authentication_). Quando alguém insere um usuário e uma senha corretos, ela faz com que, em vez de obter acesso à conta (dela própria ou da vítima), é necessário que seja inserida também uma informação que — presume-se — apenas o usuário verdadeiro possui.

Hoje em dia a solução mais segura que seja ao mesmo tempo relativamente simples de ser implementada é utilizar um aplicativo para smartphone que gera uma sequência de 6 números que expiram a cada 30 segundos. Você sincroniza esse aplicativo com o serviço no qual deseja ativar essa proteção adicional e, toda vez que fizer login a partir de um novo _device_, o serviço irá requerir que você insira os dígitos atuais mostrados pelo app.

Os gratuitos mais utilizados atualmente são o Google Authenticator e o Authy. O último, inclusive, possui versões para Android, Windows, iOS e macOS.

Esse tipo de autenticação em dois fatores via token aleatório é capaz de impedir os ataques menos sofisticados e, por isso, é recomendável que todas as pessoas o utilizem para salvaguardar suas senhas mais importantes. No entanto, se um atacante possuir o seu smartphone desbloqueado em mãos, o sucesso da invasão estará garantido. Por isso, o próximo tópico são as senhas de telas de bloqueio.

#### Senhas e Telas de Bloqueio

![A vault with a variety of secure shelves, some of them opened.](https://cdn-images-1.medium.com/max/1024/1*VyiQ-H8tkOXiBDk681iChQ.jpeg)<figcaption>Photo by <a href="https://unsplash.com/@jankolar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jan Antonin Kolar</a> on <a href="https://unsplash.com/s/photos/vault?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></figcaption>

Sendo a tela de bloqueio a porta de entrada dos seus _devices_, é desnecessário salientar a importância de senhas seguras e difíceis de serem adivinhadas ou reproduzidas. Para isso, as dicas são:

- Não utilize a **inicial do seu nome** como padrão de desbloqueio (ou qualquer outro desenho de letra);
- Não utilize **os dígitos do seu aniversário** como pin de segurança na tela de bloqueio;
- Não utilize os dígitos **do aniversário de pessoas próximas** como senha. Esse tipo de informação pode ser facilmente encontrado no Facebook, no Twitter e no Instagram dessas pessoas. Até mesmo uma busca no Google minimamente aprimorada dá conta de revelá-lo.

Se seu smartphone não tem autenticação por biometria, crie um padrão de desbloqueio cujo desenho não remeta a nada óbvio — e decore-o. Fazendo isso, você irá dificultar que pessoas reproduzam o seu desenho. Mesma coisa para o computador: elabore uma senha que seja impossível de ser reproduzida ou adivinhada mesmo se um terceiro estiver te vendo desbloquear a tela.

Em suma, descarte quaisquer senhas baseadas em informações que apontem para você ou a coisas que você gosta, em especial informações facilmente encontráveis no Google. A ideia é que, por exemplo, fãs de Star Wars evitem senhas como “_m4y\_th3\_f0rc3_” e por aí vai.

É possível adicionar ainda mais proteção no pós-desbloqueio. Imagine que alguém acessou o seu smartphone sem necessariamente precisar saber sua senha, ou seja, o aparelho foi desbloqueado por você e caiu em mãos erradas antes da tela apagar. Há alguns apps que — através de uma simples configuração — pedem novamente a senha de desbloqueio para serem abertos, tais como o WhatsApp, apps de galeria de fotos e apps de banco.

Para os que não possuem essa opção de forma nativa, é possível ativar a funcionalidade através do [Norton App Lock](https://play.google.com/store/apps/details?id=com.symantec.applock). A NortonLifeLock (antiga Symantec) é uma das empresas mais tradicionais de segurança na internet.

#### Senhas Fortes

Mais especificamente sobre senhas, a melhor dica que eu tenho é: utilize um gerenciador de senhas que faça por você o trabalho de gerar e guardar senhas seguras e aleatórias. Com apenas uma senha-mestra, você terá acesso a todas as outras através do gerenciador. Apenas certifique-se de que essa senha-mestra seja impossível de adivinhar utilizando dicas como este da [Kaspersky](https://www.kaspersky.com/resource-center/threats/how-to-create-a-strong-password) (em inglês), esta dica do [canal BPV](https://www.youtube.com/watch?v=uq8-nzdyjtw) e este site chamado [How Secure Is My Password](https://www.security.org/how-secure-is-my-password/), que estima quanto tempo a sua senha levaria para ser quebrada.

O resumo das dicas é que os algoritmos usados para quebrar senhas já não são mais enganados por substituições de letras por números, tais como “L_4dy\_g4g4_”. Opte por sequências de palavras não relacionadas, com letras maiúsculas e minúsculas e caracteres especiais em ordem espontânea.

### Outros pontos

#### Antivírus

Existe uma máxima sobre antivírus que diz que “ **o melhor antivírus que existe é você** ”. Eu adicionaria uma segunda que diz que “ **um antivírus ativado nunca é demais** ”. Não sei qual está mais correta, então levo ambas a sério. No Linux e no Mac eu tento ser meu próprio antivírus. No Windows, o Windows Defender está sempre atualizado e ativado. Há vários antivírus disponíveis no mercado; escolha um deles e mantenha-o atualizado e ativado.

Fica também a recomendação do [software anti-malware da Malwarebytes](https://www.malwarebytes.com/).

#### Backup e Dados

Mais sobre segurança de dados, tenho uma pequena anedota para ilustrar um ponto importante. Quando eu era adolescente, eu gostava muito de poesia, de ler e de escrever. Eu tinha cadernos digitais de poemas escritos, em centenas e centenas de blocos de notas salvos em várias pastas do meu disco rígido, todas organizadas por tema.

Um belo dia, meus pais e eu decidimos atualizar a máquina do Windows 98 para o Windows XP e o levamos até um técnico em informática para o qual pedimos **com todas as letras** que **fizesse o backup** do disco rígido, pois eu não queria perder aqueles textos tão importantes para mim. Claro que ele ignorou o backup e fez um _fresh install_ do Windows XP por cima do OS antigo.

Aquele incidente mudou a minha vida. Daquele dia em diante eu nunca mais permiti que qualquer terceiro encostasse um dedo em qualquer máquina minha, decidi que nunca mais iria depender de qualquer outra pessoa para formatar, instalar e configurar meus sistemas operacionais. Aprendi a instalar todas as versões do Windows, todas famílias de distribuições Linux e até a fazer um hackintosh. Aprendi a fazer backup local utilizando discos particionados e backup em nuvem. Aprendi a formatar computadores com diferentes tipos de BIOS, a montar e desmontar desktops e notebooks. Aprendi a fazer instalações _single-boot_ (Windows, Linux ou macOS), _dual-boot_ (Windows + Linux) e _triple-boot_ (Windows + Linux + Linux).

Os seus dados são **sua** responsabilidade, então reivindique seu poderio sobre eles. Não seja o Guilherme de 14 anos, não terceirize a segurança dos seus próprios dados e jamais confie nas boas intenções das pessoas, sobretudo de técnicos em informática.

### Conclusões

Espero que este texto tenha te ajudado a se conscientizar sobre a importância digital e tenha servido como uma introdução ao assunto. É, afinal, o propósito deste guia: ser uma introdução. A partir daqui, você pode consultar os links nas referências, procurar livros, perfis de pesquisadores da área, ouvir podcasts, assistir vídeos e documentários. Dentro da academia há diversos pesquisadores desenvolvendo trabalhos sobre segurança da informação, na polícia há agentes fazendo contrainteligência e investigando cybercrimes, no mercado de trabalho vem aumentando a procura por hackers éticos, _bounty hunters_ etc.

Espero também que, ao tomar consciência do controle que você é capaz de ter sobre os seus dados e a sua responsabilidade sobre eles, você possa diminuir a ansiedade e/ou insegurança com relação ao quão vulneráveis estamos quando não fazemos nada a respeito. A luta por uma internet e uma vida mais seguras nunca é e nunca será uma missão cumprida; é uma batalha sem final e também sem vencedores. O que espero que você tenha em mente após ter lido este guia é a ideia de que, quanto mais trabalho você der ao atacante, menor a chance dele persistir na tentativa de achar uma brecha na sua segurança. Hackers geralmente preferem vítimas fáceis, que requeiram pouco ou nenhum esforço para serem atacadas. Já que, na internet e na vida, todos somos vidraças, não meça esforços para que sua janela seja mais forte que a pedra.

### Referências

#### YouTube

Canal no YouTube do hacker ético Gabriel Pato: [https://www.youtube.com/gabrielpato](https://www.youtube.com/gabrielpato)

Entendendo Conceitos Básicos de Criptografia 1/2 (Fábio Akita): [https://www.youtube.com/watch?v=CcU5Kc\_FN\_4](https://www.youtube.com/watch?v=CcU5Kc_FN_4)

Entendendo Conceitos Básicos de Criptografia 2/2 (Fábio Akita): [https://www.youtube.com/watch?v=HCHqtpipwu4](https://www.youtube.com/watch?v=HCHqtpipwu4)

#### Documentários

The Great Hack (disponível na Netflix e no serviço de streaming Give Your Jumps): [https://www.imdb.com/title/tt4736550/](https://www.imdb.com/title/tt4736550/)

The Social Dilemma (disponível na Netflix e no serviço de streaming Give Your Jumps): [https://www.imdb.com/title/tt11464826/](https://www.imdb.com/title/tt11464826/)

#### Filmes

Immitation Game (disponível na Amazon Prime e no serviço de streaming Give Your Jumps): [https://www.imdb.com/title/tt2084970/](https://www.imdb.com/title/tt2084970/)

#### Podcasts

Podcast Segurança Legal: [https://www.segurancalegal.com/](https://www.segurancalegal.com/)

Podcast Tecnocracia: [https://manualdousuario.net/feed/podcast/tecnocracia](https://manualdousuario.net/feed/podcast/tecnocracia)

#### Subreddits

r/cybersecurity: [https://www.reddit.com/r/cybersecurity/](https://www.reddit.com/r/cybersecurity/)

r/hacking: [https://www.reddit.com/r/hacking/](https://www.reddit.com/r/hacking/)

r/Intelligence: [https://www.reddit.com/r/Intelligence/](https://www.reddit.com/r/Intelligence/)

r/PrivacyTools: [https://www.reddit.com/r/privacytoolsIO/](https://www.reddit.com/r/privacytoolsIO/)

r/privacy: [https://www.reddit.com/r/privacy/](https://www.reddit.com/r/privacy/)

r/SocialEngineering: [https://www.reddit.com/r/SocialEngineering/](https://www.reddit.com/r/SocialEngineering/)

r/DeGoogle: [https://www.reddit.com/r/degoogle/](https://www.reddit.com/r/degoogle/)

#### Artigos

Texto do Authy sobre Two-Factor Authentication (em inglês): [https://authy.com/what-is-2fa/](https://authy.com/what-is-2fa/)

Texto da Kaspersky sobre Autenticação em Dois Fatores: [https://www.kaspersky.com.br/blog/o-que-e-a-autenticacao-de-dois-fatores-e-como-usa-la/3226/](https://www.kaspersky.com.br/blog/o-que-e-a-autenticacao-de-dois-fatores-e-como-usa-la/3226/)

Texto da Kaspersky sobre como criar uma senha forte (em inglês): [https://www.kaspersky.com/resource-center/threats/how-to-create-a-strong-password](https://www.kaspersky.com/resource-center/threats/how-to-create-a-strong-password)

Texto sobre como criptografar dispositivos (Gizmodo Brasil): [https://gizmodo.uol.com.br/como-criptografar-dispositivos/](https://gizmodo.uol.com.br/como-criptografar-dispositivos/)

Mantendo seus dados seguros: [https://ssd.eff.org/pt-br/module/mantendo-seus-dados-seguros](https://ssd.eff.org/pt-br/module/mantendo-seus-dados-seguros)

Seção de Segurança do Painel do Google: [https://myaccount.google.com/security](https://myaccount.google.com/security)

Por que você não deveria usar o gerenciador de senhas do seu navegador (How To Geek, em inglês): [https://www.howtogeek.com/447345/why-you-shouldnt-use-your-web-browsers-password-manager/](https://www.howtogeek.com/447345/why-you-shouldnt-use-your-web-browsers-password-manager/)

O que é criptografia: [https://www.kaspersky.com.br/resource-center/definitions/encryption](https://www.kaspersky.com.br/resource-center/definitions/encryption)

Artigo “Mantendo seus dados seguros” (ssd.eef.org): [https://ssd.eff.org/pt-br/module/mantendo-seus-dados-seguros](https://ssd.eff.org/pt-br/module/mantendo-seus-dados-seguros)

Artigo de ajuda “Remover informações do Google”: [https://support.google.com/websearch/troubleshooter/3111061?hl=pt-BR](https://support.google.com/websearch/troubleshooter/3111061?hl=pt-BR)

Painel do Google: [https://myaccount.google.com/dashboard](https://myaccount.google.com/dashboard)

Verificação de segurança do Google: [https://myaccount.google.com/security-checkup](https://myaccount.google.com/security-checkup)

Checkup de Privacidade: [https://myaccount.google.com/privacycheckup](https://myaccount.google.com/privacycheckup)

Apps com acesso à sua conta Google: [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions)

#### Livros

Dez argumentos para você deletar agora suas redes sociais (Jaron Lanier): [https://www.intrinseca.com.br/livro/857/](https://www.intrinseca.com.br/livro/857/)

#### Outros Sites e Blogs

Trend Micro: [https://blog.trendmicro.com/](https://blog.trendmicro.com/)

threatpost: [https://threatpost.com/](https://threatpost.com/)

Hacker News: [https://thehackernews.com/](https://thehackernews.com/)

Security Affairs: [https://securityaffairs.co/wordpress/](https://securityaffairs.co/wordpress/)

packet storm: [https://packetstormsecurity.com/](https://packetstormsecurity.com/)

It Security Guru: [https://www.itsecurityguru.org/](https://www.itsecurityguru.org/)

Graham Cluley: [https://grahamcluley.com/](https://grahamcluley.com/)

Dark Reading: [https://www.darkreading.com/](https://www.darkreading.com/)

cyberscoop: [https://www.cyberscoop.com/](https://www.cyberscoop.com/)

Have I Been Pwned: [https://haveibeenpwned.com/](https://haveibeenpwned.com/)

How Secure Is My Password: [https://www.security.org/how-secure-is-my-password/](https://www.security.org/how-secure-is-my-password/)

Malwarebites (Software Anti-Malware): [https://www.malwarebytes.com/](https://www.malwarebytes.com/)

#### Apps

LastPass: [https://www.lastpass.com/pricing](https://www.lastpass.com/pricing)

Dashlane: [https://www.dashlane.com/plans](https://www.dashlane.com/plans)

BitWarden: [https://bitwarden.com/pricing/](https://bitwarden.com/pricing/)

Keeper: [https://www.keepersecurity.com/pricing.html?t=b](https://www.keepersecurity.com/pricing.html?t=b)

1Password: [https://1password.com/sign-up/](https://1password.com/sign-up/)

Norton App Lock (Android): [https://play.google.com/store/apps/details?id=com.symantec.applock&hl=en&gl=US](https://play.google.com/store/apps/details?id=com.symantec.applock&hl=en&gl=US)

Find My (iOS, iPadOS, macOS): [https://www.apple.com/br/icloud/find-my/](https://www.apple.com/br/icloud/find-my/)

Encontrar Dispositivo (Android): [https://myaccount.google.com/find-your-phone](https://myaccount.google.com/find-your-phone)

* * *
