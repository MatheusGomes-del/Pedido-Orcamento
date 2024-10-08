# Pedidos/Orçamentos

O projeto foi desenvolvido internamente para agilizar um processo de trabalho para vendedores na empresa LDF(Lojão DuFerro)
onde o vendedor busca por pedidos ou orçamentos feitos pelo cliente e imprime na hora da venda a nota fiscal com items
do pedido/orçamento.

## Índice

- [Sobre](#sobre)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Instalação](#instalação)
- [Licença](#licença)

## Sobre

Este projeto foi desenvolvido para resolver um problema comum enfrentado por vendedores durante o processo de montagem de pedidos. Anteriormente, havia dificuldades na impressão de notas fiscais que detalhavam os itens dos pedidos realizados pelos clientes no momento da compra. Com este sistema, os vendedores agora têm uma solução ágil e eficiente para gerar notas fiscais que exibem claramente todos os itens dos pedidos e orçamentos.

![Demonstração](./front-end/src/assets/2024-10-05%2023-43-29.gif)

## Funcionalidades Principais:
  ### Busca Rápida de Pedidos: Os vendedores podem facilmente localizar pedidos ou orçamentos anteriores, garantindo que as     informações estejam sempre à mão. <br>
  ### Impressão de Notas Fiscais: O projeto permite a impressão direta de notas fiscais com todos os itens do pedido,              facilitando o processo de finalização da venda. <br>
  ### Agilidade no Atendimento: Com a automação da impressão de notas, o tempo de espera do cliente é reduzido, melhorando a       experiência de compra. <br>
### Este sistema não apenas simplifica o trabalho dos vendedores, mas também contribui para um atendimento mais rápido e eficiente, garantindo que os clientes recebam suas notas fiscais de maneira clara e organizada.

## Tecnologias Usadas

- React
- Redux
- Bootstrap
- Node.js
- Express (API)
- MySQL
- <a href="https://www.npmjs.com/package/react-to-print">react-to-print</a>
- <a href="https://www.npmjs.com/package/reactjs-popup">reactjs-popup</a>

## Instalação

Instruções para instalação e configuração do projeto:

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu_usuario/seu_projeto.git

2. **Crie o Banco de Dados no SGBD(Usando o arquivo .sql de exemplo)**
   ```bash
    db.example.sql
3. **Crie variáveis globais em um arquivo .env e coloque no arquivo abaixo para conectar com seu Banco de Dados:**
   ```bash
   /models/connection
    
4. **Na pasta Front-end, ative a Aplicação**
   ```bash
   npm run dev
5. **Na pasta Back-end, ative a API**
   ```bash
   npm run dev
6. **Pesquise na aplicação informações fictícias de acordo com o que foi registrado no arquivo de exemplo do Banco de Dados**
   ```bash
   ex: codigoCliente: 1; nomeCliente: MARCOS RODRIGO DA SILVA...
## Futuras Implementações

-Testes Automatizados <br>
-Simular a Impressão dos Items <br>
-Melhorar Front-end para telas de PC(projeto foi desenvolvido para rodar em telas de celular e tablets) <br>
