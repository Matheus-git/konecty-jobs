# Konecty Challenge - Product List Application

## Descrição

Este projeto é uma aplicação web de lista de produtos, desenvolvida como parte de um desafio técnico. A aplicação foi construída utilizando Next.js, TypeScript, TailwindCSS e Jest para testes unitários. A aplicação exibe uma lista de produtos, com filtragem por categoria e pesquisa por nome do produto.

## Funcionalidades

- Exibição de uma lista de produtos.
- Filtro por categoria.
- Pesquisa por nome de produto.
- Testes unitários com Jest.

## Requisitos

- Node.js (versão 16.x ou superior)
- npm (versão 7.x ou superior) ou Yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/konecty-challenge.git
   cd konecty-challenge

2. Instale as dependências:

      ```bash
      npm install
      ou
      yarn install

## Uso

1. Inicie o servidor de desenvolvimento:

      ````bash
      npm run dev
      ou
      yarn dev

2. Abra o navegador e acesse http://localhost:3000.

## Testes

1. Para rodar os testes unitários:

      ````bash
      npm run test
      ou
      yarn test

## Estrutura do projeto

         ├── src
         │   ├── app
         │   │   ├── api
         │   │   │   └── products
         │   │   │       └── route.ts      # API de produtos
         │   ├── components
         │   │   ├── ProductCard.tsx       # Componente de card de produto
         │   │   ├── ImageUpload.tsx       # Componente de upload de imagem
         │   │   └── __tests__             # Testes dos componentes
         │   ├── pages
         │   │   └── index.tsx             # Página principal da aplicação
         │   └── styles
         │       └── globals.css           # Estilos globais com TailwindCSS
         ├── jest.config.js                # Configuração do Jest
         ├── tailwind.config.js            # Configuração do TailwindCSS
         └── tsconfig.json                 # Configuração do TypeScript