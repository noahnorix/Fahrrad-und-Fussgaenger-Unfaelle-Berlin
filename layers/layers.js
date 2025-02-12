var wms_layers = [];


        var lyr_Satelit_0 = new ol.layer.Tile({
            'title': 'Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FugngerUnfall_2 = new ol.format.GeoJSON();
var features_FugngerUnfall_2 = format_FugngerUnfall_2.readFeatures(json_FugngerUnfall_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FugngerUnfall_2 = new ol.source.Vector({
    attributions: ' &nbsp &middot; <a href="https://www.govdata.de/dl-de/by-2-0">© Statistische Ämter des Bundes und der Länder</a>',
});
jsonSource_FugngerUnfall_2.addFeatures(features_FugngerUnfall_2);
cluster_FugngerUnfall_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FugngerUnfall_2
});
var lyr_FugngerUnfall_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FugngerUnfall_2,
maxResolution:14.00223307613098,
 
                style: style_FugngerUnfall_2,
                popuplayertitle: 'Fußgänger Unfall',
                interactive: true,
                title: '<img src="styles/legend/FugngerUnfall_2.png" /> Fußgänger Unfall'
            });
var format_FahrradUnfall_3 = new ol.format.GeoJSON();
var features_FahrradUnfall_3 = format_FahrradUnfall_3.readFeatures(json_FahrradUnfall_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FahrradUnfall_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FahrradUnfall_3.addFeatures(features_FahrradUnfall_3);
cluster_FahrradUnfall_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FahrradUnfall_3
});
var lyr_FahrradUnfall_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FahrradUnfall_3,
maxResolution:14.00223307613098,
 
                style: style_FahrradUnfall_3,
                popuplayertitle: 'Fahrrad Unfall',
                interactive: true,
                title: '<img src="styles/legend/FahrradUnfall_3.png" /> Fahrrad Unfall'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' &nbsp &middot; <a href="">© Statistische Ämter des Bundes und der Länder</a>',
});
jsonSource__4.addFeatures(features__4);
cluster__4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__4
});
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:cluster__4,
maxResolution:28004.466152261964,
 minResolution:14.00223307613098,

                style: style__4,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> '
            });
var group_Unflle150000 = new ol.layer.Group({
                                layers: [lyr_FugngerUnfall_2,lyr_FahrradUnfall_3,],
                                fold: "open",
                                title: 'Unfälle 1:50000'});
var group_Grundkarten = new ol.layer.Group({
                                layers: [lyr_Satelit_0,lyr_OSMStandard_1,],
                                fold: "open",
                                title: 'Grundkarten'});

lyr_Satelit_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_FugngerUnfall_2.setVisible(true);lyr_FahrradUnfall_3.setVisible(true);lyr__4.setVisible(true);
var layersList = [group_Grundkarten,group_Unflle150000,lyr__4];
lyr_FugngerUnfall_2.set('fieldAliases', {'fid': 'fid', 'UJAHR': 'Jahr', 'AGS': 'AGS', 'UMONAT': 'Monat', 'USTUNDE': 'Uhrzeit', 'UWOCHENTAG': 'Unfall Wochentag', 'UKATEGORIE': 'Verletzung', 'UART': 'Unfallart', 'UTYP1': 'Unfalltyp', 'ULICHTVERH': 'Lichtverhältnisse', 'IstRad': 'Radbeteiligung', 'IstPKW': 'PKW-Beteiligung', 'IstFuss': 'Fußgängerbeteiligung', 'IstKrad': 'Kraftradbeteiligung', 'IstGkfz': 'Güterkraftfahrzeugbeteiligung', 'IstSonstig': 'IstSonstig', 'STRZUSTAND': 'Straßenzustand', 'LON': 'LON', 'LAT': 'LAT', });
lyr_FahrradUnfall_3.set('fieldAliases', {'fid': 'fid', 'UJAHR': 'Jahr', 'AGS': 'AGS', 'UMONAT': 'Monat', 'USTUNDE': 'Uhrzeit', 'UWOCHENTAG': 'Unfall Wochentag', 'UKATEGORIE': 'Verletzung', 'UART': 'Unfallart', 'UTYP1': 'Unfalltyp', 'ULICHTVERH': 'Lichtverhältnisse', 'IstRad': 'Radbeteiligung', 'IstPKW': 'PKW-Beteiligung', 'IstFuss': 'Fußgängerbeteiligung', 'IstKrad': 'Kraftradbeteiligung', 'IstGkfz': 'Güterkraftfahrzeugbeteiligung', 'IstSonstig': 'IstSonstig', 'STRZUSTAND': 'Straßenzustand', 'LON': 'LON', 'LAT': 'LAT', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'UJAHR': 'UJAHR', 'AGS': 'AGS', 'UMONAT': 'UMONAT', 'USTUNDE': 'USTUNDE', 'UWOCHENTAG': 'UWOCHENTAG', 'UKATEGORIE': 'UKATEGORIE', 'UART': 'UART', 'UTYP1': 'UTYP1', 'ULICHTVERH': 'ULICHTVERH', 'IstRad': 'IstRad', 'IstPKW': 'IstPKW', 'IstFuss': 'IstFuss', 'IstKrad': 'IstKrad', 'IstGkfz': 'IstGkfz', 'IstSonstig': 'IstSonstig', 'STRZUSTAND': 'STRZUSTAND', 'LON': 'LON', 'LAT': 'LAT', });
lyr_FugngerUnfall_2.set('fieldImages', {'fid': 'TextEdit', 'UJAHR': 'Range', 'AGS': 'TextEdit', 'UMONAT': 'Range', 'USTUNDE': 'Range', 'UWOCHENTAG': 'Range', 'UKATEGORIE': 'Range', 'UART': 'Range', 'UTYP1': 'Range', 'ULICHTVERH': 'Range', 'IstRad': 'CheckBox', 'IstPKW': 'CheckBox', 'IstFuss': 'CheckBox', 'IstKrad': 'CheckBox', 'IstGkfz': 'CheckBox', 'IstSonstig': 'CheckBox', 'STRZUSTAND': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_FahrradUnfall_3.set('fieldImages', {'fid': 'TextEdit', 'UJAHR': 'Range', 'AGS': 'TextEdit', 'UMONAT': 'Range', 'USTUNDE': 'Range', 'UWOCHENTAG': 'Range', 'UKATEGORIE': 'Range', 'UART': 'Range', 'UTYP1': 'Range', 'ULICHTVERH': 'Range', 'IstRad': 'CheckBox', 'IstPKW': 'CheckBox', 'IstFuss': 'CheckBox', 'IstKrad': 'CheckBox', 'IstGkfz': 'CheckBox', 'IstSonstig': 'CheckBox', 'STRZUSTAND': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'UJAHR': 'Range', 'AGS': 'TextEdit', 'UMONAT': 'Range', 'USTUNDE': 'Range', 'UWOCHENTAG': 'Range', 'UKATEGORIE': 'Range', 'UART': 'Range', 'UTYP1': 'Range', 'ULICHTVERH': 'Range', 'IstRad': 'CheckBox', 'IstPKW': 'CheckBox', 'IstFuss': 'CheckBox', 'IstKrad': 'CheckBox', 'IstGkfz': 'CheckBox', 'IstSonstig': 'CheckBox', 'STRZUSTAND': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_FugngerUnfall_2.set('fieldLabels', {'fid': 'hidden field', 'UJAHR': 'inline label - visible with data', 'AGS': 'hidden field', 'UMONAT': 'hidden field', 'USTUNDE': 'inline label - visible with data', 'UWOCHENTAG': 'hidden field', 'UKATEGORIE': 'inline label - visible with data', 'UART': 'inline label - visible with data', 'UTYP1': 'inline label - visible with data', 'ULICHTVERH': 'inline label - visible with data', 'IstRad': 'inline label - visible with data', 'IstPKW': 'inline label - visible with data', 'IstFuss': 'inline label - visible with data', 'IstKrad': 'inline label - visible with data', 'IstGkfz': 'inline label - visible with data', 'IstSonstig': 'hidden field', 'STRZUSTAND': 'hidden field', 'LON': 'hidden field', 'LAT': 'hidden field', });
lyr_FahrradUnfall_3.set('fieldLabels', {'fid': 'hidden field', 'UJAHR': 'inline label - visible with data', 'AGS': 'hidden field', 'UMONAT': 'hidden field', 'USTUNDE': 'inline label - visible with data', 'UWOCHENTAG': 'hidden field', 'UKATEGORIE': 'inline label - visible with data', 'UART': 'inline label - visible with data', 'UTYP1': 'inline label - visible with data', 'ULICHTVERH': 'inline label - visible with data', 'IstRad': 'inline label - visible with data', 'IstPKW': 'inline label - visible with data', 'IstFuss': 'inline label - visible with data', 'IstKrad': 'inline label - visible with data', 'IstGkfz': 'inline label - visible with data', 'IstSonstig': 'hidden field', 'STRZUSTAND': 'hidden field', 'LON': 'hidden field', 'LAT': 'hidden field', });
lyr__4.set('fieldLabels', {'fid': 'hidden field', 'UJAHR': 'hidden field', 'AGS': 'hidden field', 'UMONAT': 'hidden field', 'USTUNDE': 'hidden field', 'UWOCHENTAG': 'hidden field', 'UKATEGORIE': 'hidden field', 'UART': 'hidden field', 'UTYP1': 'hidden field', 'ULICHTVERH': 'hidden field', 'IstRad': 'hidden field', 'IstPKW': 'hidden field', 'IstFuss': 'hidden field', 'IstKrad': 'hidden field', 'IstGkfz': 'hidden field', 'IstSonstig': 'hidden field', 'STRZUSTAND': 'hidden field', 'LON': 'hidden field', 'LAT': 'hidden field', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});