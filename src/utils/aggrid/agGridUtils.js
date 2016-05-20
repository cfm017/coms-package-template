var app;
(function (app) {
    var infrastructure;
    (function (infrastructure) {
        var services;
        (function (services) {
            angular.module("app.infrastructure.components.comsUtilsMdl", []);
        })(services = infrastructure.services || (infrastructure.services = {}));
    })(infrastructure = app.infrastructure || (app.infrastructure = {}));
})(app || (app = {}));
var app;
(function (app) {
    var infrastructure;
    (function (infrastructure) {
        var components;
        (function (components) {
            var comsUtils;
            (function (comsUtils) {
                'use strict';
                var AgGridUtils = (function () {
                    function AgGridUtils() {
                    }
                    AgGridUtils.prototype.getGridColumnDefinitions = function (tableFields) {
                        var self = this;
                        var columnDefs = [];
                        //var data: Array<app.entities.ICall> = data;
                        var tableFields = tableFields;
                        var i = 0;
                        if (tableFields != null && tableFields.length > 0) {
                            angular.forEach(tableFields, function (field) {
                                if (field.Datatype == "string") {
                                    var column = {
                                        headerName: field.Label,
                                        field: field.Field
                                    };
                                    columnDefs.push(column);
                                }
                                else {
                                    var column = {
                                        headerName: field.Label,
                                        field: field.Field
                                    };
                                    columnDefs.push(column);
                                }
                            });
                        }
                        return columnDefs;
                    };
                    AgGridUtils.prototype.tempGetTableFields = function () {
                        var res = [];
                        var temp = new app.infrastructure.entities.FieldDef("Vessel Code", "vessel.vesselCode", "string");
                        res.push(temp);
                        return res;
                    };
                    AgGridUtils.prototype.$get = function () {
                        return this;
                    };
                    return AgGridUtils;
                }());
                comsUtils.AgGridUtils = AgGridUtils;
                angular
                    .module('app.infrastructure.components.comsUtilsMdl')
                    .service('app.infrastructure.components.comsUtils.agGridUtils', AgGridUtils);
            })(comsUtils = components.comsUtils || (components.comsUtils = {}));
        })(components = infrastructure.components || (infrastructure.components = {}));
    })(infrastructure = app.infrastructure || (app.infrastructure = {}));
})(app || (app = {}));
