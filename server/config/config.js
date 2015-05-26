/*jslint node:true*/
module.exports = {
    deployment: {
        port: 6061,
        repoUrl: "https://github.com/EJWN/cria-seed",
        user: "theo.theunissen0@gmail.com",
        to: "criaprojectgroep7@gmail.com",
        userName: "CRIA-testert",
        password: "topSecret!"
    },
    development: {
        db: 'mongodb://localhost/groep7-dev',    // change books with your database
        port: 6062,                             // change with your port number
        debug: true                             // set debug to true|false
    },
    test: {
        db: 'mongodb://localhost/groep7-tst',    // change books with your database
        port: 6063,                             // change with your port number
        debug: true                             // set debug to true|false
    },
    acceptance: {
        db: 'mongodb://localhost/groep7-acc',    // change books with your database
        port: 6064,                             // change with your port number
        debug: true                             // set debug to true|false
    },
    production: {
        db: 'mongodb://localhost/groep7-prd',    // change books with your database
        port: 6065,                             // change with your port number
        debug: false                            // set debug to true|false
    }
};
