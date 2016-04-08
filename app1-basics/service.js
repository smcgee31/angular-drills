angular.module('app').service('mainSvc', function(){


this.renters = [
    {
        firstName: 'Tom',
        lastName: 'Jones',
        phone: '208-531-4685',
        unit: 'A1'
    },
    {
        firstName: 'Randy',
        lastName: 'Smith',
        phone: '208-431-8846',
        unit: 'A2'
    },
    {
        firstName: 'Sally',
        lastName: 'Struthers',
        phone: '208-888-1312',
        unit: 'A3'
    },
    {
        firstName: 'Ron',
        lastName: 'Thompson',
        phone: '208-641-4465',
        unit: 'A4'
    },
    {
        firstName: 'Ben',
        lastName: 'Flick',
        phone: '208-786-7865',
        unit: 'B1'
    },
    {
        firstName: 'Alice',
        lastName: 'Fonderland',
        phone: '208-456-6877',
        unit: 'B2'
    },
    {
        firstName: 'Rumple',
        lastName: 'Stiltskin',
        phone: '208-732-1533',
        unit: 'B3'
    },
    {
        firstName: 'Roger',
        lastName: 'Rabbit',
        phone: '208-368-7255',
        unit: 'B4'
    },
    {
        firstName: 'Mickey',
        lastName: 'Mouse',
        phone: '208-728-4853',
        unit: 'C1'
    },
    {
        firstName: 'Daffy',
        lastName: 'Duckinstein',
        phone: '208-787-3979',
        unit: 'C2'
    },
    {
        firstName: 'Tina',
        lastName: 'Fey',
        phone: '208-428-7141',
        unit: 'C3'
    },
    {
        firstName: 'Patrick',
        lastName: 'Swaze',
        phone: '208-484-4465',
        unit: 'C4'
    },
];

this.renterList = function() {
    return this.renters;
};




});
