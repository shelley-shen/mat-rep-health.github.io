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
var format_NeighborhoodTabulationArea_1 = new ol.format.GeoJSON();
var features_NeighborhoodTabulationArea_1 = format_NeighborhoodTabulationArea_1.readFeatures(json_NeighborhoodTabulationArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeighborhoodTabulationArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighborhoodTabulationArea_1.addFeatures(features_NeighborhoodTabulationArea_1);
var lyr_NeighborhoodTabulationArea_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NeighborhoodTabulationArea_1, 
                style: style_NeighborhoodTabulationArea_1,
                interactive: true,
                title: '<img src="styles/legend/NeighborhoodTabulationArea_1.png" /> Neighborhood Tabulation Area'
            });

lyr_Positronretina_0.setVisible(true);lyr_NeighborhoodTabulationArea_1.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_NeighborhoodTabulationArea_1];
lyr_NeighborhoodTabulationArea_1.set('fieldAliases', {'Borough Name': 'Borough Name', 'NTA Name': 'NTA Name', 'Percent of Black Population': 'Percent of Black Population', 'Percent in Poverty': 'Percent in Poverty', 'Severe Maternal Morbidity Rate': 'Severe Maternal Morbidity Rate', });
lyr_NeighborhoodTabulationArea_1.set('fieldImages', {'Borough Name': 'TextEdit', 'NTA Name': 'TextEdit', 'Percent of Black Population': 'TextEdit', 'Percent in Poverty': 'TextEdit', 'Severe Maternal Morbidity Rate': 'TextEdit', });
lyr_NeighborhoodTabulationArea_1.set('fieldLabels', {'Borough Name': 'header label', 'NTA Name': 'header label', 'Percent of Black Population': 'header label', 'Percent in Poverty': 'header label', 'Severe Maternal Morbidity Rate': 'header label', });
lyr_NeighborhoodTabulationArea_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});