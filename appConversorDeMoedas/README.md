# appConversorDeMoedas 🚀

**Conversor de moedas (React Native)** — pequeno aplicativo que lista moedas e permite selecionar uma para conversão. Projeto de estudo/faculdade com interface simples, carregamento via API pública e registro de erros com Sentry.

---

## 🔎 Visão geral
- Nome: **appConversorDeMoedas**
- Plataforma: Android / iOS (React Native)
- API usada: https://economia.awesomeapi.com.br/json/ (arquivo `src/services/api.js`)

---

## 🧰 Tecnologias e dependências principais
- **React Native** v0.83.1
- **@react-native-picker/picker** (Picker UI)
- **axios** (requisições HTTP)
- **@sentry/react-native** (report de erros)
- **react-native-safe-area-context** (SafeAreaView)

Consulte `package.json` para versões completas.

---

## ✅ Recursos implementados
- Busca de moedas via API pública e listagem em um `Picker` (`src/Components/Picker`).
- Tratamento de estados de carregamento (`ActivityIndicator`) e erro (envio ao Sentry e `Alert`).
- Uso de `SafeAreaView` para compatibilidade com dispositivos modernos.

---

## Estrutura do projeto (resumo)
- `App.js` — lógica principal, carregamento de moedas e integração com Sentry.
- `src/components/Picker` — componente de seleção de moeda.
- `src/services/api.js` — configuração do axios com a baseURL da API.
- `android/` e `ios/` — projetos nativos gerados.

---

## 🚀 Como rodar localmente
1. Instale as dependências

```sh
# npm
npm install
# ou
yarn install
```

2. Inicie o Metro Bundler

```sh
npm start
# ou
yarn start
```

3. Rode no Android

```sh
npm run android
# ou
yarn android
```

4. Rode no iOS (macOS)

```sh
bundle install
bundle exec pod install
npm run ios
# ou
yarn ios
```

> Observação: é necessário ter o ambiente React Native configurado (Android Studio/Xcode, variáveis de ambiente etc.). Veja o guia oficial: https://reactnative.dev/docs/environment-setup

---

## 🧪 Testes e lint
- Testes: `npm test` (Jest)
- Lint: `npm run lint` (ESLint)

---

## ⚙️ Configurações/Notas
- O projeto já integra o Sentry dentro de `App.js`. Para usar seu próprio projeto Sentry, substitua o DSN no arquivo por uma variável de ambiente ou sua chave DSN.
- `package.json` exige Node >= 20.

---

## 💡 Contribuições
Contribuições são bem-vindas. Abra issues ou pull requests com melhorias (ex.: UI, testes, tratamento de erro com retry/tentar novamente).

---

## 📄 Licença
Este projeto está disponível sob a licença do repositório (adapte se necessário).


---

Se quiser, posso adicionar uma seção com instruções de como configurar o Sentry com variáveis de ambiente ou criar um botão "Tentar novamente" na tela de erro. Quer que eu implemente isso? ✨

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
