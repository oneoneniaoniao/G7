var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: 'World Map',
                interactive: false,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });
var format_AUG20_1 = new ol.format.GeoJSON();
var features_AUG20_1 = format_AUG20_1.readFeatures(json_AUG20_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUG20_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUG20_1.addFeatures(features_AUG20_1);
var lyr_AUG20_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AUG20_1, 
                style: style_AUG20_1,
                popuplayertitle: 'AU (G20)',
                interactive: true,
                title: '<img src="styles/legend/AUG20_1.png" /> AU (G20)'
            });
var format_EUG20_2 = new ol.format.GeoJSON();
var features_EUG20_2 = format_EUG20_2.readFeatures(json_EUG20_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUG20_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUG20_2.addFeatures(features_EUG20_2);
var lyr_EUG20_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUG20_2, 
                style: style_EUG20_2,
                popuplayertitle: 'EU (G20)',
                interactive: true,
                title: '<img src="styles/legend/EUG20_2.png" /> EU (G20)'
            });
var format_G20_3 = new ol.format.GeoJSON();
var features_G20_3 = format_G20_3.readFeatures(json_G20_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G20_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G20_3.addFeatures(features_G20_3);
var lyr_G20_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G20_3, 
                style: style_G20_3,
                popuplayertitle: 'G20',
                interactive: true,
                title: '<img src="styles/legend/G20_3.png" /> G20'
            });
var format_G7_4 = new ol.format.GeoJSON();
var features_G7_4 = format_G7_4.readFeatures(json_G7_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G7_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G7_4.addFeatures(features_G7_4);
var lyr_G7_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G7_4, 
                style: style_G7_4,
                popuplayertitle: 'G7',
                interactive: true,
                title: '<img src="styles/legend/G7_4.png" /> G7'
            });

lyr_WorldMap_0.setVisible(true);lyr_AUG20_1.setVisible(true);lyr_EUG20_2.setVisible(true);lyr_G20_3.setVisible(true);lyr_G7_4.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_AUG20_1,lyr_EUG20_2,lyr_G20_3,lyr_G7_4];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_AUG20_1.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_EUG20_2.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_G20_3.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_G7_4.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_WorldMap_0.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_AUG20_1.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', });
lyr_EUG20_2.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', });
lyr_G20_3.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_G7_4.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'hidden field', 'NAME_JA': 'hidden field', });
lyr_AUG20_1.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_EUG20_2.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_G20_3.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_G7_4.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_G7_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});