var spec1 = "js/map.vg.json";

vegaEmbed('#vis1', spec1, { "config": { "background": "transparent" } }).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);