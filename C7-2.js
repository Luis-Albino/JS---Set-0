///// Convert to brazilian format /////

function brDate (usDate) {
    let bool = true;
    let month, day, year;
    /* US format validation */
    if (usDate.search(/^\d{1,2}\/\d{1,2}\/\d{1,4}$/) < 0) {
        bool = false
    }
    else {
        let firstSlashPosition = usDate.search(/\/\d{1,2}\/\d{1,4}$/);
        let secondSlashPosition = usDate.search(/\/\d{1,4}$/);
        month = usDate.slice(0,firstSlashPosition);
        day = usDate.slice(firstSlashPosition+1,secondSlashPosition);
        year = usDate.slice(secondSlashPosition+1);
        /* Checks valid month */
        if (month < 1 || month > 12) {
            bool = false;
        }
        /* Checks valid days */
        else if (day < 1 ) {
            bool = false;
        }
        else {
            /* Checks valid days for Jan, Mar, May, Jul, Aug, Oct, Dec */
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                if (day > 31) {
                    bool = false;
                }
            }
            /* Checks valid days for Apr, Jun, Sep, Nov */
            else if (month == 4 || month == 6 || month == 9 || month == 11) {
                if (day > 30) {
                    bool = false;
                }
            }
            /* Checks valid days for Feb (non-leap year) */
            else if (year%4) {
                if (day > 28) {
                    bool = false;
                }
            }
            /* leap-year */
            else {
                if (day > 29) {
                    bool = false;
                }
            };
        };
    };
    if (bool) {
        let date = day+"/"+month+"/"+year;
        let monthList = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
        let monthName = monthList[Number(month)-1];
        let celebration = hollidaysBR[monthName][Number(day)];
        if (!!celebration) {
            date = date + " (" + celebration + ")";
        };
        console.log(date);
    }
    else {
        console.log("Invalid date");
    };
};

///// Brazilian Hollidays ////

let hollidaysBR = {
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
};


brDate("1/1/2023");
brDate("06/12/2023");