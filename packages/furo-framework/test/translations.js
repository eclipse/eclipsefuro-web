export const Translations = {
    "en-US": {
        "greeting": "Hello Furo",
        "visits": {
            "none": function (n) {
                return "never visited";
            }, "one": function (n) {
                return "" + n + " visit";
            }, "many": function (n) {
                return "" + n + " visits";
            }, "toString": function () {
                return "visits";
            }
        }
    },
    "de-DE": {
        "greeting": "Guten Tag Furo",
        "visits": {
            "none": function (n) {
                return "nie besucht";
            }, "one": function (n) {
                return "" + n + " Besuch";
            }, "many": function (n) {
                return "" + n + " Besuche";
            }, "toString": function () {
                return "Besuche";
            }
        }
    }
};