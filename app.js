const yargs = require('yargs');

// Require Grade System Functionality
const gradeSystem = require('./grades');

// Add with yargs
// Add Cli
// node app.js Add --name='Ayman' --subject='Math' --grade=82 --comment="sdfsfs" 
yargs.command({
    command:'Add',
    describe:'Add Grade',
    builder:{
        name:{
            describe:'Add Student Name',
            // Must Enter
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:'Add Subject Name',
            // Must Enter
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'Add Grade',
            // Must Enter
            demandOption:true,
            type:'number'
        },
        comment:{
            describe:'Add Comment (Optional)',
            type:'string'
        }
    },

    // Code that will be executed
    handler:(argv)=> {
        
        gradeSystem.addRecord(argv.name, argv.subject, argv.grade, argv.comment)
    }
    
})

// Delete with yargs
// Delete Cli
// node app.js Delete --name='Ayman' 
yargs.command({
    command:'Delete',
    describe:'Delete Record',
    builder:{
        name:{
            describe:'Delete using name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        gradeSystem.removeRecord(argv.name);
    }
})
// Read with yargs
// Delete Cli
// node app.js Read --name='Ayman' 
yargs.command({
    command:'Read',
    describe:'Read Record',
    builder:{
        name:{
            describe:'Read using name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        gradeSystem.readRecord(argv.name)
    }
})


// List with yargs
// Delete Cli
// node app.js List

yargs.command({
    command:'List',
    describe:'List All Records',

    handler:()=>{
        gradeSystem.listAllRecords();
    }
})

// Run Yargs
yargs.parse();