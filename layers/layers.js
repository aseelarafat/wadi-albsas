var wms_layers = [];

var format_Buildings_0 = new ol.format.GeoJSON();
var features_Buildings_0 = format_Buildings_0.readFeatures(json_Buildings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_0.addFeatures(features_Buildings_0);
var lyr_Buildings_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_0, 
                style: style_Buildings_0,
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_0_0.png" /> Commercial<br />\
    <img src="styles/legend/Buildings_0_1.png" /> Community Service<br />\
    <img src="styles/legend/Buildings_0_2.png" /> Educaional<br />\
    <img src="styles/legend/Buildings_0_3.png" /> house<br />\
    <img src="styles/legend/Buildings_0_4.png" /> Religous<br />'
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                interactive: true,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_1_0.png" /> Local<br />\
    <img src="styles/legend/Roads_1_1.png" /> Main<br />\
    <img src="styles/legend/Roads_1_2.png" /> Submain<br />'
        });
var format_Points_2 = new ol.format.GeoJSON();
var features_Points_2 = format_Points_2.readFeatures(json_Points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_2.addFeatures(features_Points_2);
var lyr_Points_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Points_2, 
                style: style_Points_2,
                interactive: true,
    title: 'Points<br />\
    <img src="styles/legend/Points_2_0.png" /> school<br />\
    <img src="styles/legend/Points_2_1.png" /> supermarket<br />\
    <img src="styles/legend/Points_2_2.png" /> mosque<br />\
    <img src="styles/legend/Points_2_3.png" /> divan<br />\
    <img src="styles/legend/Points_2_4.png" /> bakery<br />'
        });

lyr_Buildings_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_Points_2.setVisible(true);
var layersList = [lyr_Buildings_0,lyr_Roads_1,lyr_Points_2];
lyr_Buildings_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', });
lyr_Roads_1.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', });
lyr_Points_2.set('fieldAliases', {'id': 'id', 'type': 'type', 'name': 'name', });
lyr_Buildings_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roads_1.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', });
lyr_Points_2.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', });
lyr_Buildings_0.set('fieldLabels', {'id': 'no label', 'name': 'inline label', 'type': 'inline label', });
lyr_Roads_1.set('fieldLabels', {'id': 'no label', 'type': 'inline label', 'name': 'no label', });
lyr_Points_2.set('fieldLabels', {'id': 'no label', 'type': 'inline label', 'name': 'no label', });
lyr_Points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});