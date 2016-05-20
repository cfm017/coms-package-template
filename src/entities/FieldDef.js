var app;
(function (app) {
    var infrastructure;
    (function (infrastructure) {
        var entities;
        (function (entities) {
            var FieldDef = (function () {
                function FieldDef(Label, Field, Datatype) {
                    this.Label = Label;
                    this.Field = Field;
                    this.Datatype = Datatype;
                }
                return FieldDef;
            }());
            entities.FieldDef = FieldDef;
        })(entities = infrastructure.entities || (infrastructure.entities = {}));
    })(infrastructure = app.infrastructure || (app.infrastructure = {}));
})(app || (app = {}));
