// a package used to read and write file systems
const fs = require('fs');

const addGrade = (name, subject, grade, comment) =>{

    // Read records

    // Check names using filter
    // return an empty array if no duplication
    // return an array 
    const duplicateName = name.filter((name)=>{

        return name.name === name
    })


    console.log(duplicateName);



}