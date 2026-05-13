var spec1 = "js/vis1_map.vg.json";
var spec2 = "js/vis2_line_chart.vg.json";
var spec3 = "js/vis3_emissions_stacked_area.vg.json";
var spec4 = "js/vis4_iea_emissions.vg.json";
var spec5 = "js/vis5_temp_line.vg.json";
var spec6 = "js/vis6_chart.vg.json";
var spec7 = "js/vis7_sector_horizontal_stacked_bar.vg.json";
var spec8 = "js/pressure_line.vg.json";
var spec9 = "js/sun_scatter.vg.json";
var spec10 = "js/min_temp_boxplot.vg.json";

// Embed calls with transparent background configuration
var embedOpt = { "config": { "background": "transparent" } };

vegaEmbed('#vis1', spec1, embedOpt).catch(console.error);
vegaEmbed('#vis2', spec2, embedOpt).catch(console.error);
vegaEmbed('#vis3', spec3, embedOpt).catch(console.error);
vegaEmbed('#vis4', spec4, embedOpt).catch(console.error);
vegaEmbed('#vis5', spec5, embedOpt).catch(console.error);
vegaEmbed('#vis6', spec6, embedOpt).catch(console.error);
vegaEmbed('#vis7', spec7, embedOpt).catch(console.error);
vegaEmbed('#vis8', spec8, embedOpt).catch(console.error);
vegaEmbed('#vis9', spec9, embedOpt).catch(console.error);
vegaEmbed('#vis10', spec10, embedOpt).catch(console.error);

