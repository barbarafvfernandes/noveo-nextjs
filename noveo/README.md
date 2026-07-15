# Noveo

Aplicação web em Next.js para explorar filmes utilizando a API do TMDB. O projeto exibe conteúdos em destaque, filmes populares, em alta e melhor avaliados, além de páginas de detalhes para cada filme.

## Funcionalidades

- Listagem de filmes em destaque na página inicial
- Seções para filmes em alta, populares e top filmes
- Página de detalhes de cada filme
- Interface com cards e grid responsivos
- Consumo de dados via API do TMDB

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Axios
- CSS Modules

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação

1. Clone o repositório
2. Entre na pasta do projeto
3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo chamado `.env.local` na raiz do projeto com suas credenciais do TMDB:

```env
TMDB_API_URL=https://api.themoviedb.org/3
TMDB_API_KEY=sua_chave_aqui
```

## Como executar

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3000.

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - gera a build de produção
- `npm run start` - inicia a aplicação já buildada
- `npm run lint` - executa a análise de lint do projeto

## Estrutura do projeto

- `src/app` - páginas e rotas da aplicação
- `src/components` - componentes reutilizáveis
- `src/lib/api` - integração com a API do TMDB
- `src/styles` - estilos globais e módulos CSS
- `src/types` - tipos TypeScript usados no projeto

## Acessibilidade (A11Y)

Este projeto foi desenvolvido seguindo as boas práticas de acessibilidade na Web (**A11Y**) para garantir uma navegação inclusiva, fluida e sem barreiras.

### Implementações principais:
* **Navegação por Teclado:** Suporte total à navegação via tecla `Tab` com indicadores de foco (`:focus-visible`) customizados e nítidos.
* **Skip Link (Link de Salto):** Inclusão de atalho invisível no topo da página para permitir que usuários de teclado pulem o menu e vão direto ao conteúdo principal.
* **Semântica HTML5 Estrita:** Uso correto de tags estruturais (`<main>`, `<nav>`, `<article>`, `<figure>`, `<footer>`) como marcos de navegação (*landmarks*).
* **Atributos ARIA Dinâmicos:** Uso de `aria-label`, `aria-expanded` e `aria-labelledby` para contextualizar menus de navegação e componentes dinâmicos (como os cards e detalhes de filmes).
* **Acessibilidade Cognitiva e Visual:** Contraste de cores validado e títulos visíveis estruturados em hierarquia lógica (`<h1>`, `<h2>`, `<h3>`), evitando saltos incorretos na árvore de cabeçalhos.
* **Internacionalização:** Atributo `lang="pt-BR"` configurado na raiz do projeto para garantir a correta pronúncia por sintetizadores de voz.


## Observação

A aplicação depende das variáveis de ambiente `TMDB_API_URL` e `TMDB_API_KEY` para buscar os dados dos filmes.
