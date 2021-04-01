// a package used to read and write file systems
const fs = require('fs');
// a package to get path
const path = require( "path" );

const addRecord = (name, subject, grade, comment) =>{

    // Read records
    const records = loadRecord();
    // console.log(fs.readFileSync());
    // console.log(record);

    // Check names using filter
    // return an empty array if no duplication
    // return an array 
    const duplicateName = records.filter((thisRecord)=>{
        return thisRecord.name === name
    })

    // console.log(duplicateName);

    if(duplicateName.length === 0) {

        record.push({
            name:name,
            subject,
            grade,
            comment
        });

        saveRecord(record);

        console.log('Saved Successfully');
        console.log('- Check Record in - \n'+path.join(__dirname+'/grade.json'));

    }else {
        console.log('-Error-: "'+duplicateName[0].name+'" is a Duplicated Name in '+duplicateName[0].subject+' Subject' );
        console.log('-Path to the file- \n'+path.resolve('./grade.json'));
    }

}

// Load Record

const loadRecord = () => {
    try {
        const data = fs.readFileSync('grade.json').toString();
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}


// Save Record

const saveRecord = (record) => {
    const data = JSON.stringify(record);
    fs.writeFileSync('grade.json', data)
}


// ////////////////////////////////////////


const removeRecord = (name) => {

    const records = loadRecord();

    // return array of records after removing the requested record
    const recordToKeep = records.filter((currentRecord)=>{
        return currentRecord.name != name
    })

    // console.log(record);
    // console.log(recordToKeep.length);

    // Check if Name exist
    if(records.length === recordToKeep.length) {
        console.log('The Name You Entered Does Not Exists');
    }else {
        console.log('Record Has been deleted successfully!');
    }

}


// List

const listAllRecords = () => {

    const records = loadRecord();

    console.log("These are list of all records");
    console.log(records);

}

// Read
const readRecord = (name) => {
    const records = loadRecord();

    const showRecord = records.filter((currentRecord)=>{
        return currentRecord.name == name
    })

    if(showRecord.length > 0) {
        console.log('These are the records of '+showRecord[0].name);
        console.log(showRecord);
    }else {
        console.log('No Record found, Please Try Again.');
    }

}


module.exports = {
    addRecord,
    removeRecord,
    listAllRecords,
    readRecord
}