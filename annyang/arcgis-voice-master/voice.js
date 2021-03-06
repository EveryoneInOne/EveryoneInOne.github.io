require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/widgets/Search",
  "esri/widgets/Zoom",
  "esri/widgets/BasemapToggle",
  "dojo/domReady!",
    "esri/layers/FeatureLayer",
   
    
], function(
  Map,
  SceneView,
  Search,
  Zoom,
  BasemapToggle,FeatureLayer) {

  window.map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation"
  });

  window.view = new SceneView({
    scale: 123456789,
    container: "viewDiv",
    map: map
  });
  view.popup.set('dockEnabled', true);

  window.zoom = new Zoom({
    view: view
  });

  window.basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "hybrid"
  });
    window.basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "streets"
  });

       window.basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
  });
     var PPTR_A = new FeatureLayer({
            url:"https://services5.arcgis.com/uID8wkC2Vn7MxK6S/arcgis/rest/services/WARSTWY/FeatureServer/22"
        });
    
Map.add(PPTR_A);
    
    
    
  window.searchWidget = new Search({
    view: view
  });

  // Add the search widget to the very top left corner of the view
  view.ui.add(searchWidget, {
    position: "top-left",
    index: 0
  });
    
    


  // Add Voice Recognition
  if (annyang) {
    const commands = {
      'go to *words': (words) => {
        console.log(words);
        searchWidget.search(words);
      },
      'zoom in': () => {
        zoom.zoomIn();
      },
      'zoomin': () => {
        zoom.zoomIn();
      },
      'zoom out': () => {
        zoom.zoomOut();
      },
      'zoomout': () => {
        zoom.zoomOut();
      },
      'show imagery': () => {
        if (basemapToggle.nextBasemap.resourceInfo.id === 'hybrid') {
          basemapToggle.toggle();
        }
      },
      'show map':() =>{
        if (basemapToggle.nextBasemap.resourceInfo.id === 'topo-vector') {
          basemapToggle.toggle();
        }
      },
     'dream' : () => {
         if (basemapToggle.nextBasemap.resourceInfo.id === 'streets'){
             basemapToggle.toggle();
         }
     },
       'Asia' : () => {
         if (basemapToggle.nextBasemap.resourceInfo.id === 'satellite'){
             basemapToggle.toggle();
         }
     }, 
        
        
        
    };

    annyang.addCommands(commands);

    // Log possible phrases
    annyang.addCallback('result', (possiblePhrases) => {
      console.log(possiblePhrases);
    });

    annyang.start();
  }
    
    
    
});
