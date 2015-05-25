'use strict';

/**
 * @ngdoc service
 * @name wisePayApp.creditorService
 * @description
 * # creditorService
 * Service in the wisePayApp.
 */
angular.module('wisePayApp')
    .service('creditorService', function() {
        var self = this;

        var arrAllRecords = [{
            ID: 0,
            Name: 'Gas Natural',
            Logo: ''
        }, {
            ID: 1,
            Name: 'Agua',
            Logo: ''
        }, {
            ID: 2,
            Name: 'CFE',
            Logo: ''
        }, {
            ID: 3,
            Name: 'Telmex',
            Logo: ''
        }, {
            ID: 4,
            Name: 'Telcel',
            Logo: ''
        }, {
            ID: 5,
            Name: 'Cablemas',
            Logo: ''
        }, {
            ID: 6,
            Name: 'Predial',
            Logo: ''
        }, {
            ID: 7,
            Name: 'IUSACELL',
            Logo: ''
        }, {
            ID: 8,
            Name: 'SKI',
            Logo: ''
        }];

        this.getById = function(theId) {
            for (var i = 0; i < arrAllRecords.length; i++) {
                if (theId === arrAllRecords[i].ID) {
                    return arrAllRecords[i];
                }
            }
            return arrAllRecords[0];
        };

        this.getAll = function() {
            return arrAllRecords;
        };

        this.getCurrentUser = function() {
            return self.getById(1);
        };
    });
