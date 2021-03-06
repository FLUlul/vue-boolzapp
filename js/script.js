/* 
Milestone 1
OK● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.
OK● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.

Milestone2
OK● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione 
OK● Click sul contatto mostra la conversazione del contatto cliccato

Milestone3
OK● Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde 
OK● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone4
OK● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone5-opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato 
OK● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

*/

var app = new Vue (
    {
        el: "#container",
        data: {
            activeContact: 0,
            newMessage: "",
            searchedValue: "",
            dispBlock: false,
            activeMessage: 0,
            contacts: [
                { 
                    name:   'Michele',
                    avatar:   '_1',
                    visible:   true,
                    messages: [
                            {
                                date:   '10/01/2020   15:30:55',
                                text:   'Hai portato a spasso il cane?',
                                status:   'sent'
                            },
                            { 
                                date:   '10/01/2020   15:50:00',
                                text:   'Ricordati di dargli da mangiare',
                                status:   'sent'
                            },
                            { 
                                date:   '10/01/2020   16:15:22',
                                text:   'Tutto fatto!',
                                status:   'received'
                            }
                    ],
                },
                {
                    name:   'Fabio',
                    avatar:   '_2',
                    visible:   true,
                    messages:   [ 
                        { 
                            date:   '20/03/2020   16:30:00',
                            text:   'Ciao come stai?',
                            status:   'sent'
                        },
                        { 
                            date:   '20/03/2020   16:30:55', 
                            text:   'Bene grazie! Stasera ci vediamo?', 
                            status:   'received' 
                        },   
                        { 
                            date:   '20/03/2020   16:35:00', 
                            text:   'Mi piacerebbe ma devo andare a fare la spesa.', 
                            status:   'sent' 
                        } 
                    ], 
                }, 
                { 
                    name:   'Samuele', 
                    avatar:   '_3', 
                    visible:   true, 
                    messages:   [ 
                        { 
                            date:   '28/03/2020   10:10:40', 
                            text:   'La Marianna va in campagna', 
                            status:   'received' 
                        }, 
                        { 
                            date:   '28/03/2020   10:20:10', 
                            text:   'Sicuro di non aver sbagliato chat?', 
                            status:   'sent' 
                        }, 
                        { 
                            date:   '28/03/2020   16:15:22', 
                            text:   'Ah scusa!', 
                            status:   'received' 
                        } 
                    ], 
                }, 
                { 
                    name:   'Luisa', 
                    avatar:   '_4', 
                    visible:   true, 
                    messages:   [ 
                        { 
                            date:   '10/01/2020   15:30:55', 
                            text:   'Lo sai che ha aperto una nuova pizzeria?', 
                            status:   'sent' 
                        }, 
                        { 
                            date:   '10/01/2020   15:50:00', 
                            text:   'Si, ma preferirei andare al cinema', 
                            status:   'received' 
                        } 
                    ], 
                }, 
            ] 
        },
        methods: {
            pushNewMessage(){
                /* creo questa variabile per evitare il bug di far scrivere la risposta su un'altra chat se cambio velocemente contatto */
                let target = this.contacts[this.activeContact].messages

                let newMsg = {

                    date:   dayjs().format('DD/MM/YYYY   hh:mm:ss'), 
                    text:   this.newMessage, 
                    status:   'sent'

                }
        
                target.push(newMsg);

                this.newMessage = "";

                setTimeout(() => {
                    let newMsgAnsw = {

                        date:   dayjs().format('DD/MM/YYYY   hh:mm:ss'), 
                        text:   "ok",
                        status: 'received'
    
                    }
                    target.push(newMsgAnsw);
                }, 1000);
            },
            displayBlockNone(){
                if (this.dispBlock === true) {
                    this.dispBlock = false
                } else {
                    this.dispBlock = true
                }
            },
            deleteMessage(index){
                this.contacts[this.activeContact].messages.splice(index, 1);
                this.dispBlock = false;
            },
        }
    }
)
