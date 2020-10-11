const EventEmitter = require('events');
const events = new EventEmitter();
const path = require('path');

const IOService = require('./io.service');

events.on('read', (fileIndex) => {
    try {
        const readData = IOService.readFile(`file${fileIndex}.txt`);
        if (readData) {
            events.emit('write', { data: readData, fileIndex: fileIndex });
        }
    } catch (error) {
        console.log(error);
    }
})

events.on('write', ({ data, fileIndex }) => {
    try {
        const writeData = IOService.writeFile(data);
        if (fileIndex != 10) {
            events.emit('read', ++fileIndex)
        }
    } catch (error) {
        console.log(error)
    }
})

const manageEvents = () => {
    try {
        // Starting the events
        events.emit('read', 1);
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    // eventEmition,
    manageEvents
}