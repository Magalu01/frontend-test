PARA TESTAR A APLICAÇÃO LOCALMENTE:

  # 1ª você precisar ir até a pasta origem do projeto e digitar "yarn install ou npm install ou yarn/npm i"
  # 2º após executado você digita yarn start ou npm start ambos funcionaram.
  # Após isso o você precisará acessar a url que será sugerida pelo terminal ou " http://localhost:3000/ "

Feito isso você poderá testar a aplicação completa em modo desenvolvimento.

PARA FAZER BUILD DE PRODUÇÃO

  # 1ª você precisar ir até a pasta origem do projeto e digitar "yarn build ou npm build"
  # 2º após executado você deve digitar logo em seguida "serve -s build", para hospedar a aplicação localmente mas em modo produção.
  # Após feito isso o terminal ira lhe sugerir uma url de acesso local ou "http://localhost:5000"

# Para finalizar ambos modos apertce CTRL+C para windows e linux e MacOS Control+C

PARA FAZER DEPLOY EM ALGUM DOMINIO É MUITO MAIS SIMPLES

  # 1ª você precisar ir até a pasta origem do projeto e digitar "yarn build"
  # 2º após executado você deve digitar outro comando " netlify deploy --prod"
  # Irá mostrar uma mensagem para você apontar qual é a pasta que gerou build do projeto você deve digitar "build"
  # Ele irá gerar automaticamente o deploy e um  DNS caso você já tenha conta o navegador irá abrir e autenticar automaticamente para você autorizar e gerar uma url
  # Caso não tenha você precisará criar conta e gerar novamente este mesmo processo a cima.

MAS A APLICAÇÃO JÁ SE ENCONTRA NA URL DEPLOYADA https://kelvinmusselliteste.netlify.app/
