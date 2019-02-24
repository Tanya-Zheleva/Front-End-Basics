'use strict';

function solve() {
    return function (selector) {
       let data = {
           headers: ['Vendor', 'Model', 'OS'],
           items: [{
               col1: 'Nokia',
               col2: 'Lumia 920',
               col3: 'Windows Phone'
           }, {
               col1: 'LG',
               col2: 'Nexus 5',
               col3: 'Android'
           }, {
               col1: 'Apple',
               col2: 'iPhone 6',
               col3: 'iOS'
           }]
       };

        let templateStr = '<table class="items-table">' +
            '                   <thead>' +
                                    '<tr>' +
                                        '<th>#</th>' +
                                        '{{#each headers}}' +
                                            '<th>{{this}}</th>' +
                                        '{{/each}}' +
                                    '</tr>' +    
                                '</thead>' +
                                '<tbody>' +
                                    '{{#each items}}' +
                                        '<tr>' +
                                            '<td>{{@index}}</td>' +
                                            '{{#this}}' + 
                                                '<td>{{col1}}</td>' +
                                                '<td>{{col2}}</td>' +
                                                '<td>{{col3}}</td>' +
                                            '{{/this}}' +
                                        '</tr>' +
                                    '{{/each}}' +
                                '</tbody>' +
                            '</table>';


        let template = Handlebars.compile(templateStr);
        $(selector).html(template(data));
    };
};

module.exports = solve;