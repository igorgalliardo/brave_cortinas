# Publicar o MVP no GitHub Pages

O projeto exporta HTML, CSS, JavaScript e imagens para `out/`. O GitHub Pages serve esses arquivos; o formulário usa WhatsApp e não depende de servidor Node na hospedagem.

## Publicação automática (recomendada)

1. Crie ou use o repositório GitHub desejado e envie os arquivos do projeto, incluindo `.github/workflows/pages.yml`, `package.json`, `package-lock.json`, `next.config.mjs`, `app`, `components`, `lib` e `public`. Não envie `node_modules`, `.next`, `out` ou arquivos `.env`.
2. No repositório: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Faça push para `main` ou `master`, ou execute **Actions → Publicar MVP no GitHub Pages → Run workflow**.
4. Ao concluir, o job `deploy` apresenta o link público. Compartilhe esse link com o cliente.

O workflow lê a URL e o subdiretório reais do Pages, configura `NEXT_PUBLIC_BASE_PATH` e `NEXT_PUBLIC_SITE_URL`, compila com `npm ci` e publica `out/`. Funciona para URLs com `/nome-do-repositorio/`, domínio raiz e domínio personalizado configurado no Pages. A configuração de Pages precisa estar habilitada no repositório antes do workflow.

## Executar e testar

```powershell
npm install
npm run dev
```

Desenvolvimento: http://localhost:3000.

```powershell
npm run build
npm run preview
```

Prévia estática: http://localhost:3001. `npm start` também serve `out/` localmente. GitHub Pages não executa esse servidor: recebe somente os arquivos exportados.

Para reproduzir uma URL com subdiretório:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/nome-do-repositorio'
$env:NEXT_PUBLIC_SITE_URL='https://SEU-USUARIO.github.io/nome-do-repositorio'
npm run build
npm run preview
```

Abra http://localhost:3001/nome-do-repositorio/. Essas variáveis são incorporadas durante o build. Para voltar ao modo raiz, remova as duas variáveis e gere novamente.

## Estado desta entrega

Exportação com subdiretório testada localmente: fontes, fotos, logo, menu mobile e galeria funcionando. Nenhuma publicação remota foi feita até informar/conectar o repositório de destino. O domínio usado na validação local é apenas um exemplo, sem site remoto associado.
