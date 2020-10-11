const fs = require('fs');
const path = require('path');

const readFile = (fileName) => {
    try {
        const data = fs.readFileSync(`${__dirname}/utils/${fileName}`, { encoding: 'utf-8', flag: 'r' });
        return { value: data }
    } catch (error) {
        return { error: error }
    }
}

const writeFile = (data) => {
    try {
        const writeData = fs.writeFileSync(`${__dirname}/utils/outputFile.txt`, data.value+'\n', { encoding: 'utf-8', flag: 'a+' });
        return { value: writeData }
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    readFile,
    writeFile
}