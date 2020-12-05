var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_PercentofPretermBirths_1 = new ol.format.GeoJSON();
var features_PercentofPretermBirths_1 = format_PercentofPretermBirths_1.readFeatures(json_PercentofPretermBirths_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentofPretermBirths_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentofPretermBirths_1.addFeatures(features_PercentofPretermBirths_1);
var lyr_PercentofPretermBirths_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentofPretermBirths_1, 
                style: style_PercentofPretermBirths_1,
                interactive: true,
    title: 'Percent of Preterm Births<br />\
    <img src="styles/legend/PercentofPretermBirths_1_0.png" /> 4.5 - 7.6 <br />\
    <img src="styles/legend/PercentofPretermBirths_1_1.png" /> 7.6 - 8.5 <br />\
    <img src="styles/legend/PercentofPretermBirths_1_2.png" /> 8.5 - 9.5 <br />\
    <img src="styles/legend/PercentofPretermBirths_1_3.png" /> 9.5 - 10.86 <br />\
    <img src="styles/legend/PercentofPretermBirths_1_4.png" /> 10.86 - 15.1 <br />'
        });
var format_CrudeRateofGonorrheaCase_2 = new ol.format.GeoJSON();
var features_CrudeRateofGonorrheaCase_2 = format_CrudeRateofGonorrheaCase_2.readFeatures(json_CrudeRateofGonorrheaCase_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrudeRateofGonorrheaCase_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrudeRateofGonorrheaCase_2.addFeatures(features_CrudeRateofGonorrheaCase_2);
var lyr_CrudeRateofGonorrheaCase_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CrudeRateofGonorrheaCase_2, 
                style: style_CrudeRateofGonorrheaCase_2,
                interactive: true,
    title: 'Crude Rate of Gonorrhea Case <br />\
    <img src="styles/legend/CrudeRateofGonorrheaCase_2_0.png" /> 12 - 36 <br />\
    <img src="styles/legend/CrudeRateofGonorrheaCase_2_1.png" /> 36 - 99 <br />\
    <img src="styles/legend/CrudeRateofGonorrheaCase_2_2.png" /> 99 - 169 <br />\
    <img src="styles/legend/CrudeRateofGonorrheaCase_2_3.png" /> 169 - 254 <br />\
    <img src="styles/legend/CrudeRateofGonorrheaCase_2_4.png" /> 254 - 1150 <br />'
        });
var format_SevereMaternalMorbidity_3 = new ol.format.GeoJSON();
var features_SevereMaternalMorbidity_3 = format_SevereMaternalMorbidity_3.readFeatures(json_SevereMaternalMorbidity_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SevereMaternalMorbidity_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SevereMaternalMorbidity_3.addFeatures(features_SevereMaternalMorbidity_3);
var lyr_SevereMaternalMorbidity_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SevereMaternalMorbidity_3, 
                style: style_SevereMaternalMorbidity_3,
                interactive: true,
    title: 'Severe Maternal Morbidity<br />\
    <img src="styles/legend/SevereMaternalMorbidity_3_0.png" /> 79 - 143 <br />\
    <img src="styles/legend/SevereMaternalMorbidity_3_1.png" /> 143 - 183 <br />\
    <img src="styles/legend/SevereMaternalMorbidity_3_2.png" /> 183 - 237 <br />\
    <img src="styles/legend/SevereMaternalMorbidity_3_3.png" /> 237 - 306 <br />\
    <img src="styles/legend/SevereMaternalMorbidity_3_4.png" /> 306 - 532 <br />'
        });
var format_NeighborhoodTabulationArea_4 = new ol.format.GeoJSON();
var features_NeighborhoodTabulationArea_4 = format_NeighborhoodTabulationArea_4.readFeatures(json_NeighborhoodTabulationArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeighborhoodTabulationArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighborhoodTabulationArea_4.addFeatures(features_NeighborhoodTabulationArea_4);
var lyr_NeighborhoodTabulationArea_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NeighborhoodTabulationArea_4, 
                style: style_NeighborhoodTabulationArea_4,
                interactive: true,
                title: '<img src="styles/legend/NeighborhoodTabulationArea_4.png" /> Neighborhood Tabulation Area'
            });

lyr_Positronretina_0.setVisible(true);lyr_PercentofPretermBirths_1.setVisible(true);lyr_CrudeRateofGonorrheaCase_2.setVisible(true);lyr_SevereMaternalMorbidity_3.setVisible(true);lyr_NeighborhoodTabulationArea_4.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_PercentofPretermBirths_1,lyr_CrudeRateofGonorrheaCase_2,lyr_SevereMaternalMorbidity_3,lyr_NeighborhoodTabulationArea_4];
lyr_PercentofPretermBirths_1.set('fieldAliases', {'BoroName': 'BoroName', 'NTAName': 'NTAName', 'Percent of Preterm Births': 'Percent of Preterm Births', });
lyr_CrudeRateofGonorrheaCase_2.set('fieldAliases', {'BoroName': 'BoroName', 'NTAName': 'NTAName', 'Gonorrhea Cases ': 'Gonorrhea Cases ', });
lyr_SevereMaternalMorbidity_3.set('fieldAliases', {'BoroName': 'BoroName', 'NTAName': 'NTAName', 'Crude Rate SMM': 'Crude Rate SMM', });
lyr_NeighborhoodTabulationArea_4.set('fieldAliases', {'Borough Name': 'Borough Name', 'NTA Name': 'NTA Name', 'Percent of Black Population': 'Percent of Black Population', 'Percent in Poverty': 'Percent in Poverty', 'Severe Maternal Morbidity Rate': 'Severe Maternal Morbidity Rate', });
lyr_PercentofPretermBirths_1.set('fieldImages', {'BoroName': 'TextEdit', 'NTAName': 'TextEdit', 'Percent of Preterm Births': '', });
lyr_CrudeRateofGonorrheaCase_2.set('fieldImages', {'BoroName': 'TextEdit', 'NTAName': 'TextEdit', 'Gonorrhea Cases ': 'TextEdit', });
lyr_SevereMaternalMorbidity_3.set('fieldImages', {'BoroName': 'TextEdit', 'NTAName': 'TextEdit', 'Crude Rate SMM': 'TextEdit', });
lyr_NeighborhoodTabulationArea_4.set('fieldImages', {'Borough Name': 'TextEdit', 'NTA Name': 'TextEdit', 'Percent of Black Population': 'TextEdit', 'Percent in Poverty': 'TextEdit', 'Severe Maternal Morbidity Rate': 'TextEdit', });
lyr_PercentofPretermBirths_1.set('fieldLabels', {'BoroName': 'inline label', 'NTAName': 'inline label', 'Percent of Preterm Births': 'header label', });
lyr_CrudeRateofGonorrheaCase_2.set('fieldLabels', {'BoroName': 'inline label', 'NTAName': 'inline label', 'Gonorrhea Cases ': 'header label', });
lyr_SevereMaternalMorbidity_3.set('fieldLabels', {'BoroName': 'inline label', 'NTAName': 'inline label', 'Crude Rate SMM': 'header label', });
lyr_NeighborhoodTabulationArea_4.set('fieldLabels', {'Borough Name': 'header label', 'NTA Name': 'header label', 'Percent of Black Population': 'header label', 'Percent in Poverty': 'header label', 'Severe Maternal Morbidity Rate': 'header label', });
lyr_NeighborhoodTabulationArea_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});