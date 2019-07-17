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

        function waitforseconds(seconds) {
            console.log('Waiting');
            return new Promise(resolve => {
                setTimeout(resolve, seconds);
            })

        }

        await waitforseconds(inputs.seconds * 1000);

        let TSwsEnd = Date.now().toString();
        return exits.success({ 'TSwsStart': TSwsStart, 'TSwsEnd': TSwsEnd });
    }


};
