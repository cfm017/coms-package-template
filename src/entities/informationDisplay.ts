module app.infrastructure.entities {

    export interface IInformationDisplay {
        Label: string,
        Fields: Array<IFieldDef>,
        Data: any
    }

    export class InformationDisplay implements IInformationDisplay {
        constructor(
            public Label: string,
            public Fields: Array<IFieldDef>,
            public Data: any
        ) {
        }
    }
}