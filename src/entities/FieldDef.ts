module app.infrastructure.entities {

    export interface IFieldDef {
        Label: string,
        Field: string,
        Datatype: string
    }


    export class FieldDef implements IFieldDef {
        constructor(
            public Label: string,
            public Field: string,
            public Datatype: string
        ) {
        }
    }
}