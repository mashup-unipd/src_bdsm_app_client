# BDSM App: script

## Scopo della directory

Questa cartella ha lo scopo di gestire tutti gli script che consentono di automatizzare parte del lavoro svolto dal team per la realizzazione del prodotto BDSM App.

## Struttura della directory

- **asana_api**: contiene gli script python che controllano se sono presenti dei valori [option] nel messaggio di commit, e se si eseguono delle chiamate API al sistema di ticketing Asana per gestire i task presenti in esso. Questo script viene avviato in automatico dal git hooks **pre-push** quando si effettua l'operazione **git push**;
- **commit_msg**: contiene lo script che controlla se il formato del messaggio di commit è conforme a quanto specificato nelle norme. Questo script viene avviato in automatico dal git hooks **commit-msg** quando si effettua l'operazione **git commit**;
- **githooks**: contiene gli script che vengono collegati a quelli presenti in **hooks** e riposizionati secondo istruzioni seguenti. Sono gli script veri che andranno ad effettuare i controlli necessari a mantenere conforme la repo. Questi possono subire versionamento e vengono gestiti dagli amministratori addetti al mantenimento del repository in questione.
- **hooks**: contiene i git hooks reali che git va ad installare di default dentro la cartella **.git**. Questi script contengono solo un richiamo a quelli presenti nella cartella che verrà illustrata precedentemente.

## Installazione git hooks

1. dalla directory corrente digitare il comando **make hook**;

**Nota**: il funzionamento degli script precedenti è testato solo in ambiente Unix.

## Chi deve eseguire l'installazione

Tutti i collaboratori che andranno per la prima volta a clonare il repository **src_BDSM_App** o quando l'Amministratore di Progetto esegue delle modifiche alla cartella **hooks**.