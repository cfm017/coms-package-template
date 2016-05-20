var app;
(function (app) {
    var infrastructure;
    (function (infrastructure) {
        var entities;
        (function (entities) {
            var InformationDisplay = (function () {
                function InformationDisplay(Label, Fields, Data) {
                    this.Label = Label;
                    this.Fields = Fields;
                    this.Data = Data;
                }
                return InformationDisplay;
            }());
            entities.InformationDisplay = InformationDisplay;
        })(entities = infrastructure.entities || (infrastructure.entities = {}));
    })(infrastructure = app.infrastructure || (app.infrastructure = {}));
})(app || (app = {}));
