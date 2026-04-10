# 📝 To-Do List FullStack App

Aplicação FullStack de gerenciamento de tarefas desenvolvida com foco em performance, escalabilidade e boas práticas modernas de desenvolvimento web.

O projeto permite ao usuário organizar suas atividades de forma simples e eficiente, contando com persistência em banco de dados e uma interface moderna e responsiva.

---

## 🚀 Demonstração
📂 Repositório: https://github.com/gabrielhas/projeto_to-do-list

---

## ⚙️ Funcionalidades

### 📋 Gestão de Tarefas

* Criar tarefas
* Editar tarefas
* Remover tarefas
* Marcar como concluída

### ⚡ Sistema

* Persistência em banco de dados (PostgreSQL)
* Atualização dinâmica da interface
* Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS
* Shadcn UI

### Backend

* API Routes (Next.js)
* Prisma ORM

### Banco de Dados

* PostgreSQL

---

## 🏗️ Arquitetura do Projeto

A aplicação utiliza arquitetura FullStack baseada em Next.js (App Router), integrando frontend e backend no mesmo ambiente.

* Renderização híbrida (SSR/CSR)
* API Routes para camada de backend
* Prisma ORM para acesso e manipulação de dados
* PostgreSQL como banco relacional
* Componentização reutilizável com React

---

## 🚀 Diferenciais do Projeto

* Aplicação FullStack unificada com Next.js
* Uso de ORM (Prisma) para abstração de banco de dados
* Estrutura escalável e organizada
* Interface moderna com foco em UX

---

## 📂 Estrutura do Projeto

```bash
📁 src
 ├── app/
 ├── components/
 ├── lib/
 ├── services/
 └── styles/

📁 prisma
 └── schema.prisma
```

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados e aprimorados conhecimentos em:

* Desenvolvimento FullStack com Next.js
* Tipagem estática com TypeScript
* Modelagem e manipulação de banco de dados com Prisma
* Integração entre frontend e backend
* Construção de interfaces modernas com Tailwind e Shadcn UI
* Organização e escalabilidade de código

---

## 📌 Melhorias Futuras

* 🔐 Sistema de autenticação de usuários
* 👥 Multiusuário com separação de tarefas
* ☁️ Deploy com integração contínua (CI/CD)
* 🌓 Modo escuro (Dark Mode)
* 📊 Dashboard com métricas de produtividade
* 🔔 Sistema de notificações

---

## ⚠️ Pré-requisitos

* Node.js 18+
* PostgreSQL instalado

---

## ▶️ Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/gabrielhas/projeto_to-do-list

# Acesse a pasta
cd projeto_to-do-list

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"

# Rode as migrations
npx prisma migrate dev

# Inicie o projeto
npm run dev
```

---

## 📚 Referência

Projeto inicialmente inspirado no vídeo "Projeto Fullstack com Next.js para Iniciantes" do canal Dev. Odair Michael.

A partir disso, foram implementadas adaptações e melhorias, incluindo:

* Estruturação completa como aplicação FullStack
* Integração com PostgreSQL via Prisma
* Customização da interface com Tailwind e Shadcn UI

---

## ⭐ Considerações

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em desenvolvimento FullStack utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.

LinkedIn: https://www.linkedin.com/in/gabrielhalvess/

Fique à vontade para contribuir, sugerir melhorias ou utilizar como base para novos projetos.
