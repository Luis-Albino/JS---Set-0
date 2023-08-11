"use strict";

///// Convert to brazilian format /////

function brDate (usDate) {
    let hollidays = BrasilianHollidays();
    let validFormat = true;
    let month, day, year;
    let dateFormat =  usDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{1,4})$/);

    /* US format validation */
    if (!dateFormat) {
        validFormat = false
    }
    else {
        month = dateFormat[1];
        day = dateFormat[2];
        year = dateFormat[3];
        /* Checks valid month */
        if (month < 1 || month > 12) {
            validFormat = false;
        }
        /* Checks valid days */
        else if (day < 1 ) {
            validFormat = false;
        }
        else {
            /* Checks valid days for Jan, Mar, May, Jul, Aug, Oct, Dec */
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                if (day > 31) {
                    validFormat = false;
                }
            }
            /* Checks valid days for Apr, Jun, Sep, Nov */
            else if (month == 4 || month == 6 || month == 9 || month == 11) {
                if (day > 30) {
                    validFormat = false;
                }
            }
            /* Checks valid days for Feb (non-leap year) */
            else if (year%4) {
                if (day > 28) {
                    validFormat = false;
                }
            }
            /* leap-year */
            else {
                if (day > 29) {
                    validFormat = false;
                }
            };
        };
    };


    if (!validFormat) return undefined;

    let date = day+"/"+month+"/"+year;
    let monthList = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    let monthName = monthList[Number(month)-1];
    let celebration = hollidays[monthName][Number(day)];
    if (!!celebration) {
        date = date + " (" + celebration + ")";
    };
    
    return date;
};

///// Brazilian Hollidays ////

function BrasilianHollidays () {
    return {
        jan : {
            1 : "Ano Novo",
            6 : "Dia de Reis",
            30 : "Dia da Saudade",
            31 : "Dia Mundial dos Mágicos"
        },
        feb : {
            2 : "Dia de Nossa Senhora dos Navegantes",
            24 : "Promulgação da primeira Constituição da República do Brasil"
        },
        mar : {
            8 : "Dia Internacional da Mulher",
            17 : "Dia de São Patrício",
            25 : "Dia da Constituição"
        },
        apr : {
            13 : "Dia do Hino Nacional Brasileiro",
            19 : "Dia do Índio",
            21 : "Dia de Tiradentes",
            22 : "Descobrimento do Brasil"
        },
        may : {
            1 : "Dia do Trabalhador",
            5 : "Dia Mundial da Língua Portuguesa",
            13 : "Abolição da Escravatura"
        },
        jun : {
            5 : "Dia Mundial do Meio Ambiente",
            12 : "Dia dos Namorados",
            13 : "Dia de Santo Antônio - Festas Juninas"
        },
        jul : {
            2 :  "Independência da Bahia",
            26 : "Dia dos Avós"
        },
        aug : {
            9 : "Dia Internacional dos Povos Indígenas",
            11 : "Dia do Estudante"
        },
        sep : {
            5 : "Dia da Amazônia",
            7 : "Dia da Independência do Brasil",
            21 : "Dia da Árvore"
        },
        oct : {
            4 : "Dia da Natureza",
            12 : "Dia das Crianças"
        },
        nov : {
            14 : "Dia do Bandeirante",
            15 : "Dia da Proclamação da República",
            19 : "dia da Bandeira"
        },
        dec : {
            25 : "Natal",
            31 : "Réveillon, Virada do ano"
        }
    }
}


console.log(brDate("1/1/2023"));
console.log(brDate("06/12/2023"));
