# BDSM App: client

## Scopo del repository
Questo package contiene la struttura del front-end dell'applicazione.

Per la veste grafica si è preso spunto dal template [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/)

Si è scelto però di utilizzare [Free Angular Themes at StartAngular.com](http://www.startangular.com/) come struttura di base, in quanto è già stato fatto un porting del template precedentemente citato in AngularJS.

## Installazione
1. Clone this project or Download that ZIP file
2. Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
3. On the command prompt run the following commands
- cd `project-directory`
- `npm install` - bower install is ran from the postinstall
- `npm start` - a shortcut for `grunt serve`
- `npm run dist` - a shortcut for `grunt serve:dist` to minify the files for deployment

**Nota**: qualora non si riuscisse a configurare l'ambiente di lavoro, problema riscontrato da qualche membro del team in ambiente Ubuntu/Mint 14.10, si potranno seguire queste istruzioni:

1. installare node.js con:

	sudo add-apt-repository ppa:rwky/nodejs
	sudo apt-get update
	sudo apt-get install nodejs
2. installare npm con:

	sudo apt-get install npm
3. aggiornatelo all'ultima versione

	sudo npm update -g npm
4. installate bower e grunt:

	sudo npm install -g bower
	sudo npm install -g grunt-cli
5. ora potrete caricare il progetto sul vostro computer scaricandolo dal repository;
6. da terminale, posizionandosi nella directory client, digitare:

	sudo npm install
7. aggiornare bower e i pacchetti che mancano con:

	bower update
8. scegliete quindi le versioni delle componenti che vi servono ed eseguite il tutto con i comandi visti nella prima lista per l'installazione.


## Linee guida codice
- [angular-styleguide, johnpapa](https://github.com/johnpapa/angular-styleguide)

## Moduli esterni utilizzati

- [ng-token-auth](https://github.com/lynndylanhurley/ng-token-auth)
- [angular-chartjs](https://github.com/jtblin/angular-chart.js)

### Strumenti di automazione

- [Grunt](http://gruntjs.com/)
