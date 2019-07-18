const fs = require('fs');
module.exports = {


    friendlyName: 'Process',


    description: 'Process something.',


    inputs: {
        seconds: {
            type: 'number',
            require: true
        }
    },


    exits: {
        success: {
            statusCode: 200
        }

    },


    fn: async function (inputs, exits) {

        let argument = [];
        process.argv.forEach(function (val, index, array) {
            argument.push(val);
        });

        let TSwsStart = Date.now().toString();

        let chars = [];
        function parseFile(buffer) {
            var fileString = buffer.toString();
            for (var i = 0; i < fileString.length; i++) {
                chars.push(fileString.charAt(i));
            }

            for (var i = 0; i < inputs.seconds * 1000; i++) {
                console.log(chars[i]);
            }

        }

        // Source: https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
        var data = fs.readFileSync(__dirname + '/text.txt', 'utf-8');
        parseFile(data);

        let TSwsEnd = Date.now().toString();
        return exits.success({ 'TSwsStart': TSwsStart, 'TSwsEnd': TSwsEnd, 'arguments': argument });
    }


};
