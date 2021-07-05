------------

># EMB5637 - Projeto Integrador II
>## Etapa 1 - Especificação dos Requisitos
>### Danilo José da Silva (16150413)

------------

### 1. Introdução

> #### Objetivo
> Na industria há uma grande necessidade no monitoramento dos seus equipamentos afim de evitar paradas em sua linha de produção e consequêntemente evitar eventuais prejuízos. Com base nisso, será implementado uma aplicação em ReactJs que mostre ao usuário de forma intuitiva os status dos seus ativos nas suas respectivas unidades, nele será possível verificar os ativos que estão operando, em alerta ou inativos. Além disso, é necessário ter que os dados sejam apresentados de forma gráfica, afim de ajudar nas tomadas de decisões.

------------

>#### Público-alvo e uso pretendido
> Nesta especificação de requisitos de software (SRS) o principal objetivo é promover um entendimento para o avaliador do projeto (Professor) e ao desenvolvedor de como será estruturada a aplicação.

------------

>#### Escopo
> A aplicação a ser desenvolvida será um facilitador no monitoramento dos ativos da empresa interessada, onde o intuito do seu uso se dará com o fim de evitar paradas inesperadas em seus equipamentos. Com a solução já implantada, haverá usuários cadastrados que serão responsáveis por determinadas unidades, onde eles terão acesso ao status de seus ativos em tempo real. A aplicação também será uma ferramenta útil nos planejamentos de manuteções preventivas e preditivas pois será disponibilizado um histórico da operação de cada ativo desde a sua implantação.

------------

>#### Definições e acrônimos
> Os riscos envolvidos na falha da aplicação se encontra no sistema embracado que coleta os dados das maquinas e o disponibiliza a um API que é consumida pelo software. Já que o foco principal desse trabalho esta apenas no desenvolvimento de sofware o único risco a ser considerado estará em sua programação.

------------

### 2. Descrição geral

------------


>#### Necessidades do usuário
> A utilização da aplicação se dará por um usuário primário, sendo que esse é o responsável pela unidade em que esta implantada a aplicação. Esse usuário possui uma necessidade de estar atento a possiveis falhas e paradas de equipamentos não programadas, e com esse intuito o software desenvolvido irá facilitar não só na sua tomada de decisão mas como irá evitar deslocamentos desnecessarios aos equipamentos visto que tudo pode ser acompanhado pelo seu dispositivo móvel. Por todo histórico de cada ativo estar em um banco de dados e disponivel para consulta no sofware será evitado a utilização de anotações em papel.

------------


>#### Dependências
> O software esta intrisicamente ligado ao hardware que alimenta a API da aplicação, a fatores de compatibilidade e conexão com a internet visto que o software só poderá ser utilizado online.

------------


### 3. Recursos e requisitos do sistema

>#### Requisitos Funcionais
> Como os requisitos funcionais foca **no que será feito**, então esses requisitos são todos os problemas e necessidades que devem ser atendidos e resolvidos pelo software, sendo que podemos listar as funcionalidades que:
> - é responsável pelo consumo dos dados da API;
> - gera Cards e Botões contendo as ações relevantes a cada página;
> - oculta os itens que não estão sendo utilizadas na página;
> - gera os gráficos.

------------

>#### Requisitos não funcionais
> Nos requisitos não funcionais o foco se dá em **como será feito**, ou seja, são as características técnicas. As quais podemos listar:
> - tipos de dispositivos em que o software será utilizado;
> - navegadores web compátiveis com a aplicação;
> - processamento demandado;
> - consumo de memória exigido pelos recursos;
> - conexão com a internet.

------------