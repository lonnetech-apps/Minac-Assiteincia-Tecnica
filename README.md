# MINAC Equipamentos - Landing Page

Landing page moderna de alta conversão para assistência técnica e manutenção preventiva e corretiva de equipamentos de Pilates e Fitness.

---

## 🌐 Como Publicar no GitHub Pages (2 Maneiras Fáceis)

O projeto já está configurado com `base: './'` para nunca dar erro 404 de assets no GitHub Pages!

### Método 1: Automático via GitHub Actions (Recomendado)
Este projeto já inclui o fluxo automático em `.github/workflows/deploy.yml`.

1. Suba o código para o seu repositório no GitHub (`git push`).
2. No seu repositório no GitHub, clique em **Settings** (Configurações) no menu superior.
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment** > **Source**, mude de *"Deploy from a branch"* para:
   👉 **GitHub Actions**
5. Pronto! O GitHub irá compilar o Vite e publicar seu site automaticamente em menos de 1 minuto em `https://seu-usuario.github.io/seu-repositorio/`.

---

### Método 2: Pelo Terminal com o comando `npm run deploy`
Se preferir publicar diretamente do seu computador:

```bash
# 1. Instalar dependências
npm install

# 2. Executar o deploy
npm run deploy
```

O comando irá gerar o build de produção e criar/atualizar o branch `gh-pages` automaticamente no GitHub.

Depois, no seu repositório:
- Acesse **Settings** > **Pages**.
- Em **Source**, selecione **Deploy from a branch**.
- Selecione o branch **gh-pages** e pasta **/(root)** e clique em **Save**.

---

## ⚡ Como Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
2. Conecte com o seu GitHub e selecione este repositório.
3. A Vercel detectará automaticamente o Vite (`vercel.json` já está incluído).
4. Clique em **Deploy**!

---

## 🛠️ Comandos Locais

- `npm run dev`: Inicia o servidor de desenvolvimento local.
- `npm run build`: Compila para produção na pasta `dist/`.
- `npm run preview`: Testa o build de produção localmente.
