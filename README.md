# BDSM App: codice sorgente client
[![wercker status](https://app.wercker.com/status/01066e918fb09394e3063dcc9edcbca6/m "wercker status")](https://app.wercker.com/project/bykey/01066e918fb09394e3063dcc9edcbca6)

## Scopo del repository

Questo repository ha lo scopo di gestire il versionamento della codice sorgente relativo al front-end del prodotto **BDSM App** (Big Data Social Monitoring) proposto da [Zing Srl](http://www.zing-store.com/it/#index). Per il lato back-end fare riferimento alla repository [src_BDSM_App_server](https://github.com/MashUp-UniPD/src_BDSM_App_server).

Per la veste grafica si è preso spunto dal template [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/)

Si è scelto però di utilizzare [Free Angular Themes at StartAngular.com](http://www.startangular.com/) come struttura di base, in quanto è già stato fatto un porting del template precedentemente citato in AngularJS.


## Struttura del repository

- **app**: directory che contiene tutti i package contenete il codice sorgente e le configurazioni per il front-end;
- **test**: directory che contiene i test e2e del front-end dell'applicativo;
- **script_repo**: serve per gestire gli script che automatizzano parte del lavoro e dei controlli sul repository. Per maggiori informazioni ci si rifà al README presente nella cartella precedentemente citata.


## Gestione del repository

### Installazione
1. Clone this project or Download that ZIP file
2. Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
3. On the command prompt run the following commands
- `cd project-directory`
- `npm install` - bower install is ran from the postinstall
- `npm start` - a shortcut for `grunt serve`
- `npm run dist` - a shortcut for `grunt serve:dist` to minify the files for deployment

**Nota**: qualora non si riuscisse a configurare l'ambiente di lavoro, problema riscontrato da qualche membro del team in ambiente Ubuntu/Mint 14.10, si potranno seguire queste istruzioni:

1. installare node.js con:

	`sudo add-apt-repository ppa:rwky/nodejs`

	`sudo apt-get update`

	`sudo apt-get install nodejs`
2. installare npm con:

	`sudo apt-get install npm`
3. aggiornatelo all'ultima versione

	`sudo npm update -g npm`
4. installate bower e grunt:

	`sudo npm install -g bower`

	`sudo npm install -g grunt-cli`
5. ora potrete caricare il progetto sul vostro computer scaricandolo dal repository;
6. da terminale, posizionandosi nella directory client, digitare:

	`sudo npm install`
7. aggiornare bower e i pacchetti che mancano con:

	`bower update`
8. scegliete quindi le versioni delle componenti che vi servono ed eseguite il tutto con i comandi visti nella prima lista per l'installazione.

### Testing

[![wercker status](https://app.wercker.com/status/01066e918fb09394e3063dcc9edcbca6/s "wercker status")](https://app.wercker.com/project/bykey/01066e918fb09394e3063dcc9edcbca6)

I test vengono effettuati in automatico ad ogni push tramite Wercker ma è possibile eseguirli localmente tramite il comando `grunt test` dalla root del progetto.

### Messaggio di commit

Il messaggio di commit conterrà la seguente classificazione all'inizio del titolo subito dopo la dicitura in accordo con il ticket per la quale quella operazione è fatta: "Title: ":

- [doc]: se la commit riguarda la documentazione del codice;
- [css]: se la commit riguarda modifiche/aggiunte/cancellazioni agli stili grafici del front-end;
- [src]: se la commit riguarda modifiche/aggiunte/cancellazioni al codice sorgente dell'applicativo
- [test]: se la commit riguarda modifiche/aggiunte/cancellazioni al codice riguardante i test dell'applicativo;
- [repo]: se la commit riguarda modifiche/aggiunte/cancellazioni alla struttura generale del repository;
- [bug]: se la commit riguarda la correzione di qualche bug riscontrato dai Verificatori.



## Norme
- [angular-styleguide, johnpapa](https://github.com/johnpapa/angular-styleguide)

## Moduli esterni

- [ng-token-auth](https://github.com/lynndylanhurley/ng-token-auth)
- [angular-chartjs](https://github.com/jtblin/angular-chart.js)
- [Protractor](https://angular.github.io/protractor/#/)

## Strumenti di automazione

- [Grunt](http://gruntjs.com/)
