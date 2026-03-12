🧠 MindEase - Gestão Cognitiva Acessível
O MindEase é uma plataforma desenvolvida para auxiliar pessoas com neurodivergências (TDAH, TEA e Dislexia) na organização de suas rotinas. O foco principal é a redução da carga cognitiva através de uma interface previsível, limpa e funcional.

🚀 O Projeto
Este projeto é o trabalho de conclusão da pós-graduação na FIAP, com foco em acessibilidade e experiência do usuário (UX).

Principais Funcionalidades:
Cronograma Visual: Planejamento de tarefas com interface simplificada.

Sincronização em Tempo Real: Dados salvos no Firebase para acesso multiplataforma.

Design Inclusivo: Cores, fontes e espaçamentos pensados para evitar a sobrecarga sensorial.

🛠️ Tecnologias Utilizadas
Front-end: React Native / Expo (Web & Mobile)

Estilização: SCSS (Sass)

Backend & Auth: Firebase (Firestore & Authentication)

CI/CD & Hosting: GitHub Actions & Firebase Hosting

⚙️ Configuração para Desenvolvimento
Se desejar rodar o projeto localmente:

Clone o repositório:

Bash
git clone https://github.com/anaclararemotto/mindease-app.git
Instale as dependências:

Bash
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz e adicione suas chaves do Firebase.

Inicie o projeto:

Bash
npx expo start

🤖 CI/CD e Deploy
O projeto utiliza GitHub Actions para automação. Cada push para a branch principal dispara uma esteira de:

Instalação de dependências.

Build de produção (Expo Export).

Deploy automático para o Firebase Hosting.
