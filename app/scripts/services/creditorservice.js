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
            Logo: '',
            ParameterName: 'GasNatural',
            LogoURL: '../images/GNJ.png'
        }, {
            ID: 1,
            Name: 'Agua',
            Logo: '',
            ParameterName: 'Agua',
            LogoURL: ''
        }, {
            ID: 2,
            Name: 'CFE',
            Logo: '',
            ParameterName: 'CFE',
            LogoURL: ''
        }, {
            ID: 3,
            Name: 'Telmex',
            Logo: '',
            ParameterName: 'Telmex',
            LogoURL: ''
        }, {
            ID: 4,
            Name: 'Telcel',
            Logo: '',
            ParameterName: 'Telcel',
            LogoURL: ''
        }, {
            ID: 5,
            Name: 'Cablemas',
            Logo: '',
            ParameterName: 'Cablemas',
            LogoURL: ''
        }, {
            ID: 6,
            Name: 'Predial',
            Logo: '',
            ParameterName: 'Predial',
            LogoURL: ''
        }, {
            ID: 7,
            Name: 'IUSACELL',
            Logo: '',
            ParameterName: 'IUSACELL',
            LogoURL: ''
        }, {
            ID: 8,
            Name: 'SKI',
            Logo: '',
            ParameterName: 'SKI',
            LogoURL: ''
        }];

        this.getById = function(theId) {
            for (var i = 0; i < arrAllRecords.length; i++) {
                if (theId === arrAllRecords[i].ID) {
                    return arrAllRecords[i];
                }
            }
            return arrAllRecords[0];
        };

        this.getByParameterName = function(theParameterName) {
            for (var i = 0; i < arrAllRecords.length; i++) {
                if (theParameterName === arrAllRecords[i].ParameterName) {
                    return arrAllRecords[i];
                }
            }
            return null;
        };

        this.getAll = function() {
            return arrAllRecords;
        };

        this.getCurrentUser = function() {
            return self.getById(1);
        };
    });
