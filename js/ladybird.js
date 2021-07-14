
var map;

  function initMap() {

  
    var osm;
    var myview;
    var other_1972_2005;
    var other_2006_2019;
    var harlq_1972_2005;
    var harlq_2006_2019;
    var getStyle;


    getStyle= function(feature){
        var lenght;
        var mycolor;
        var com_name;
        lenght= feature.get('features').length;
        com_name= feature.get('features')[0].get('com_name');
        if (com_name.includes("Harlequin Ladybird")) {
            mycolor =[255, 0, 0, 0.6];
        } 
        else{
            mycolor =[0, 204, 0, 0.6];
        }
        return[
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: Math.min(Math.max(lenght*3, 40),10),
                    fill: new ol.style.Fill({
                        color: mycolor
                    })}),
                    text: new ol.style.Text({
                         text: length.toString(),
                         fill: new ol.style.Fill({
                         color: 'white'
                         }),
                         font: '10px Verdana, Arial'
                         })})
                         ];};
                    
    osm = new ol.layer.Tile ({
        source: new ol.source.OSM(),
        title:'Open Street Map',
        type:'base'
    });

    other_1972_2005 = new ol.layer.Vector({
           source: new ol.source.Cluster({
           distance: 50,
           source: new ol.source.Vector({
               format: new ol.format.GeoJSON(),
               url: 'data/other_1972_2005.geojson'
              })}),
            title: 'Ladybirds (other) 1972-2005',
            visible: false,
            style: getStyle
          });

        other_2006_2019 = new ol.layer.Vector({
               source: new ol.source.Cluster({
               distance: 50,    
               source: new ol.source.Vector({
                   format: new ol.format.GeoJSON(),
                   url: 'data/other_2006_2019.geojson'
                  })}),
               title: 'Ladybirds (other) 2006-2019',
               visible: false,
                style: getStyle
              });

        harlq_1972_2005 = new ol.layer.Vector({
               source: new ol.source.Cluster({
               distance: 50,
               source: new ol.source.Vector({
                   format: new ol.format.GeoJSON(),
                   url: 'data/harlq_1972_2005.geojson'
                  })}),
               title: 'Harlequin Ladybird 1972-2005',
               visible: false,
                style: getStyle
                });

        harlq_2006_2019 = new ol.layer.Vector({
               source: new ol.source.Cluster({
               distance: 50,
               source: new ol.source.Vector({
                   format: new ol.format.GeoJSON(),
                   url: 'data/harlq_2006_2019.geojson'
                  })}),
               title: 'Harlequin Ladybird 2006-2019',
               visible: false,
               style: getStyle
              });

    myview = new ol.View({  
        center: ol.proj.fromLonLat([-2.89479, 54.093409], "EPSG:3857"),    
        zoom: 5.5
    });


    map = new ol.Map({ 
    target:'mymap',    
    layers:[osm, other_1972_2005, other_2006_2019, harlq_1972_2005, harlq_2006_2019],
    view: myview,   
    controls:[
        new ol.control.Zoom(),
        new ol.control.ZoomSlider(),
        new ol.control.ScaleLine(),
        new ol.control.LayerSwitcher()
    ]});
    }

    
        
  


