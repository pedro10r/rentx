## RentX

### App construído com React Native (Expo bare workflow)

#### Como instalar:
Depois de clonar o repo na sua máquina, na pasta do projeto rode: `npm install`, depois disso, se estiver no mac rode: `cd ios && pod install && cd ..`, esse comando vai baixar as dependencias nativas do ios pelo `cocoapods`.

#### Como usar: 
Como o app tem "api local" com json.server, vai precisar instalar globalmente o json.server na sua máquina, então rode: `npm install -g json-server`, se já tiver instalado, não precisa, depois de instalar, adicione um arquivo `.env` na raiz do projeto pegando como exemplo o `.env.example`, coloque na *BASE_URL* seu endereço de internet, ex: 192.168.0.0, pro json.server conseguir ficar no ar, depois de tudo isso, no terminal rode: `npm run dev:server`, assim a api do json.server fica disponível para o app consumir. Para rodar o app, abra outra aba no terminal e rode: `npx expo start`.