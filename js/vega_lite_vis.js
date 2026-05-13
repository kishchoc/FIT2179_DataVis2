var spec1 = "js/map.vg.json";
var spec6 = "js/vis6_chart.vg.json";

vegaEmbed('#vis1', spec1, { "config": { "background": "transparent" } }).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

vegaEmbed('#vis6', spec6, { "config": { "background": "transparent" } }).then(function(result) {
}).catch(console.error);