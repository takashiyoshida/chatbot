const RtmClient = require('@slack/client').RtmClient;
const MemoryDataStore = require('@slack/client').MemoryDataStore;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const token = process.env.SLACK_TOKEN || '';

const rtm = new RtmClient(token, {
    logLevel: 'error',
    // logLevel: 'debug', // Alternative log level
    // Initialize a datastore for our client, this will load additional
    // helper functions for storing and retrieving data
    dataStore: new MemoryDataStore(),
    // Boolean indicating whether Slack should automatically reconnect after
    // an error response
    autoReconnect: true,
    // Boolean indicating whether each message should be marked as read or
    // not after it is processed
    autoMark: true,
});

// Listen to all 'message' event from the team
rtm.on(RTM_EVENTS.MESSAGE, (message) => {
    rtm.sendMessage('Beep boop! Hello world', message.channel)
});

rtm.start();
