module app.infrastructure.services {
    angular.module("app.infrastructure.components.comsUtilsMdl", []);
}

module app.infrastructure.components.comsUtils {
    'use strict';

    import IFieldDef = app.infrastructure.entities.IFieldDef;

    export interface IAgGridUtils {
        getGridColumnDefinitions: (tableFields: Array<IFieldDef>) => Array<ag.grid.ColDef>;
        tempGetTableFields: () => Array<IFieldDef>;
    }

    export class AgGridUtils implements IAgGridUtils {


        getGridColumnDefinitions(tableFields: Array<IFieldDef>) {
            var self = this;

            var columnDefs: Array<ag.grid.ColDef> = [];
            //var data: Array<app.entities.ICall> = data;
            var tableFields: Array<IFieldDef> = tableFields;

            var i = 0;

            if (tableFields != null && tableFields.length > 0) {

                angular.forEach(tableFields, function (field) {
                    if (field.Datatype == "string") {
                        let column = {
                            headerName: field.Label,
                            field: field.Field
                        };

                        columnDefs.push(column);
                    }
                    else {
                        let column = {
                            headerName: field.Label,
                            field: field.Field
                        };
                        columnDefs.push(column);
                    }
                });
            }

            return columnDefs;
        }
        tempGetTableFields(): IFieldDef[] {
            var res = [];

            var temp = new app.infrastructure.entities.FieldDef("Vessel Code", "vessel.vesselCode", "string");
            res.push(temp);

            return res;
        }

        $get(): IAgGridUtils {
            return this;
        }
    }

    angular
        .module('app.infrastructure.components.comsUtilsMdl')
        .service('app.infrastructure.components.comsUtils.agGridUtils', AgGridUtils);
}