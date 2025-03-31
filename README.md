# ProConnect API - Back-end

Este repositório contém o back-end da plataforma **ProConnect**, um sistema que conecta profissionais autônomos a clientes de forma direta, sem intermediários. A proposta é facilitar o contato com clientes, apresentar os serviços, preços, e permitir avaliações — tudo de forma simples e acessível.


## 📌 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução para JavaScript no servidor  
- **TypeScript** – Superset do JavaScript com tipagem estática  
- **Express.js** – Framework para construção de APIs  
- **Prisma ORM** – ORM para comunicação com banco relacional  
- **Supabase (PostgreSQL)** – Banco de dados utilizado  
- **Prisma Studio** – Interface gráfica para visualização do banco  
- **Insomnia** – Ferramenta usada para testar as rotas da API  
- **Render** – Plataforma usada para o deploy do back-end  


## 🧩 Cadastro e Organização do Projeto

### 📁 Estrutura de Pastas
- **`/src/routes`** – Arquivos de rotas para cada tabela: `usuarioRoutes`, `servicoRoutes`, etc.  
- **`/src/useCase/<tabela>/create/`** – Contém o `Controller` e `Model` responsáveis por cada entidade  
- **`prisma/schema.prisma`** – Onde estão definidas as tabelas e seus relacionamentos  
- **`index.ts`** – Arquivo principal que configura o servidor e importa todas as rotas  


## 🧠 Funcionamento das Rotas 

### Controller
1. O controller recebe os dados da requisição (`req.body`)
2. Chama o model responsável para inserir os dados no banco
3. Retorna uma resposta JSON

Exemplo: `CreateUsuarioController.ts`

### Model
1. Recebe os dados do controller
2. Usa `prisma.<entidade>.create()` para inserir no banco
3. Retorna o objeto criado

Exemplo: `CreateUsuarioModel.ts`


## 🗃️ Banco de Dados

O banco foi modelado com as seguintes tabelas principais:

- **Usuario**  
- **Servico**  
- **Categoria**  
- **Localizacao**  
- **Preco**  
- **Avaliacao**

Essas tabelas possuem relações entre si (ex: um serviço pertence a um usuário, tem avaliações, possui preços e localização).


## ⚙️ Migrações com Prisma

Sempre que há alterações no banco, é criada uma migração com o comando:

```bash
npx prisma migrate dev --name nome_da_migracao
```

Para visualizar os dados graficamente:

```bash
npx prisma studio
```

E para atualizar o Prisma Client:

```bash
npx prisma generate
```

## 🚀 Iniciando o Servidor

Após instalar as dependências:

```bash
npm install
```

Crie um arquivo `.env` com sua conexão:
```env
DATABASE_URL=postgresql://usuario:senha@host:porta/banco
DIRECT_URL=postgresql://usuario:senha@host:porta/banco
```

Inicie o servidor localmente:
```bash
npm run dev
```

A API rodará em:
```
http://localhost:3333
```

## 🌐 Deploy

A API está hospedada na [Render](https://render.com), onde o sistema se mantém ativo para conexão com o front-end.


## 🖼️ Upload de Imagens

As imagens (como logo do serviço) são tratadas **exclusivamente pelo front-end**. O back-end não gerencia arquivos de mídia neste projeto.


## ✅ Conclusão

O projeto foi desenvolvido com foco em organização, separação de responsabilidades e boas práticas. Todas as funcionalidades foram testadas no Insomnia e estruturadas para manter o código limpo, reutilizável e fácil de manter.



