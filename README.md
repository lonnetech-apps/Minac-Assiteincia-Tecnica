# MINAC Equipamentos - Landing Page

---

## 🛑 Por que deu TELA BRANCA no GitHub Pages?

Quando você comita o repositório no GitHub, a raiz contém o arquivo `src/main.tsx` (TypeScript). Os navegadores não conseguem ler arquivos `.tsx` diretamente — eles precisam da versão compilada (HTML + JavaScript puro).

Por isso criamos a pasta **/docs** já compilada e pronta para o GitHub Pages!

---

## 🚀 Como resolver a tela branca em 3 cliques no GitHub:

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações) no topo.
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment**:
   - **Source:** Selecione `Deploy from a branch`
   - **Branch:** Selecione `main` (ou `master`)
   - **Pasta (Folder):** Mude de `/ (root)` para 👉 **/docs**
4. Clique no botão **Save**!

Aguarde 30 segundos e atualize a página (`Ctrl + F5`). O site abrirá perfeitamente!

---

## ⚡ Alternativa Automática (GitHub Actions):
Se preferir que o próprio GitHub compile tudo sozinho sem precisar da pasta `docs`:
1. Em **Settings** > **Pages**.
2. Em **Source**, escolha **GitHub Actions**.
3. Ele usará o arquivo `.github/workflows/deploy.yml` que já deixamos configurado.

---

## 💻 Para rodar ou compilar localmente:
- `npm run dev`: Executa em modo de desenvolvimento local.
- `npm run build`: Atualiza as pastas `dist/` e `docs/` para commit.
