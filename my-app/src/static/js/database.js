const sqlite3 = require('sqlite3');
const path = require('path');

// Chemin vers la base de données
const dbPath = path.resolve(__dirname, 'database.db');

// Connexion à la base de données
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données', err);
    } else {
        console.log('Connecté à la base de données SQLite');
        initializeDatabase();
    }
});


function initializeDatabase(){
    db.run(`
            Create table if not exists MatierePremiere(
                id integer primary key autoincrement,
                nom varchar(50) not null,
                datecreation Date DEFAULT (DATE('now')) 
                ) 
        
        `,err=>{
        if(err){
            swal.fire("oups",`erreur: ${err} `,'warning')
            console.log(err)
        }
        
    })

    db.run(`
        Create table if not exists Produit(
            id integer primary key autoincrement,
            nom varchar(50) not null,
            datecreation Date DEFAULT (DATE('now'))  
            )
    
    `,err=>{
            if(err){
                swal.fire("oups",`erreur: ${err} `,'warning')
                console.log(err)
            }
})

    db.run(`
        Create table if not exists Transactions(
            id integer primary key autoincrement,
            operation varchar(50) not null,
            codeTransactions varchar(50) not null unique,
            datecreation Date DEFAULT (DATE('now')) 
    )

`,err=>{
    if(err){
        swal.fire("oups",`erreur: ${err} `,'warning')
        console.log(err)
    }
})

db.run(`
    Create table if not exists Charge(
        id integer primary key autoincrement,
        codeTransactions varchar(50) not null,
        charge varchar(50) not null,
        description varchar(50) null,
        montant float not null,
        datecreation Date DEFAULT (DATE('now'))  
        )
        `,err=>{
                if(err){
                        swal.fire("oups",`erreur: ${err} `,'warning')
                        console.log(err)
                    }
})




db.run(`
    Create table if not exists StockMatierePremiere(
        id integer primary key autoincrement,
        idMatierePremiere int not null,
        codeTransactions varchar(50) not null,
        dimension varchar(50) null, 
        quantite float not null, 
        prix float not null,
        datecreation Date DEFAULT (DATE('now'))
    )
    `,err=>{
            if(err){
                swal.fire("oups",` ${err} `,"warning")
                console.log(err)
                }
})



db.run(`
    Create table if not exists StockProduit(
        id integer primary key autoincrement,
        idProduit int not null,
        codeTransactions varchar(50) not null,
        dimension varchar(50) null, 
        quantite float not null, 
        prix float not null,
        datecreation Date DEFAULT (DATE('now'))
    )
    `,err=>{
            if(err){
                swal.fire("oups",` ${err} `,"warning")
                console.log(err)
            }
})


}

