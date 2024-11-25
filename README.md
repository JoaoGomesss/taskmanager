# Task Manager

Bem-vindo ao repositório do **Task Manager**! Este é um projeto completo de gerenciamento de tarefas, desenvolvido com **Node.js**, **MongoDB** e **React**, que permite criar, atualizar, listar e excluir tarefas.

## 📝 Descrição

O **Task Manager** é uma aplicação web que combina um backend robusto em **Node.js** com um banco de dados **MongoDB** e um frontend dinâmico criado em **React**. Ele foi projetado para ajudar os usuários a organizar tarefas de maneira eficiente, com suporte para CRUD completo (Create, Read, Update, Delete).

## 🚀 Tecnologias Utilizadas

- **Backend**:
  - **Node.js** - Plataforma para executar código JavaScript no servidor.
  - **Express.js** - Framework web rápido e minimalista para Node.js.
  - **MongoDB** - Banco de dados NoSQL para armazenamento de tarefas.

- **Frontend**:
  - **React** - Biblioteca JavaScript para construção de interfaces de usuário.

- **Outras Ferramentas**:
  - **Prettier** - Para padronização e formatação de código.
  - **GitHub Actions** - Para integração contínua.

---

```bash

## 🛠️ Configuração do Ambiente de Desenvolvimento

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de que você possui as ferramentas abaixo instaladas:

- **Node.js** (versão 18 ou superior)
- **MongoDB** (instância local ou hospedada)
- Um gerenciador de pacotes, como **npm** ou **yarn**

### Passo 1: Clonar o Repositório

Clone este repositório para o seu ambiente local:

git clone https://github.com/JoaoGomesss/taskmanager.git
cd taskmanager

### Passo 2: Instalar Dependências
Instale as dependências do projeto com npm ou yarn:

npm install
# ou
yarn install

### Passo 3: Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Use o exemplo abaixo como referência:

PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
Certifique-se de substituir MONGO_URI pela URL correta do seu banco de dados MongoDB.

### Passo 4: Executar a Aplicação
Inicie o servidor backend com o comando:

npm start
# ou
yarn start
A aplicação estará disponível em http://localhost:5000 para requisições da API.

Se você também configurar o frontend (React), ele pode ser iniciado separadamente.

📦 Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

taskmanager/
├── .github/               # Configurações de workflows do GitHub Actions
├── src/                   # Código-fonte principal
│   ├── controllers/       # Lógica dos controladores
│   ├── models/            # Modelos do banco de dados MongoDB
│   ├── routes/            # Definições de rotas da API
│   └── utils/             # Funções utilitárias
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── .prettierrc            # Configuração do Prettier
├── index.js               # Arquivo principal de inicialização do servidor
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto

🌐 Endpoints Disponíveis
Aqui estão alguns dos principais endpoints disponíveis na API:

Método	Endpoint	Descrição
GET	/tasks	Lista todas as tarefas
POST	/tasks	Cria uma nova tarefa
GET	/tasks/:id	Retorna uma tarefa específica
PUT	/tasks/:id	Atualiza uma tarefa existente
DELETE	/tasks/:id	Remove uma tarefa

🤝 Contribuições
Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

Faça um fork do repositório.
Crie uma branch para sua feature ou correção (git checkout -b feature/nova-feature).
Faça os commits das suas alterações (git commit -m 'Adiciona nova feature').
Suba sua branch (git push origin feature/nova-feature).
Abra um Pull Request.

🛡️ Licença
Este projeto não possui uma licença definida no momento.

📬 Contato
Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:
Email: jowgomes3@gmail.com
