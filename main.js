$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [52.1, 21.0], 
                     zoom: 4,
                     zoomControl:true,
                     attributionControl:false
                    }
                    );
    var lyrORTO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer', {
        layers: "Raster", format:'image/png',transparent:"true",version: "1.1.1"
    }
                                  
);
    var LyrNMT = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                {layers: 'geotiff_coverage',format:'image/png',transparent:"true",version:"1.1.1"});
    
    
    var lyrSOZO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer', {
        layers: "Raster", format:'image/png',transparent:"true",version: "1.1.1",
    }
                               
     );
    
    var lyrPRGWOJ = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                {layers:'wojewodztwa', format: 'image/png',transparent:"true",version:"1.1.1",
        
        
    }                                
    
     );
    
    var lyrBUBDA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',{
        layers:'BUBDA', format:'image/png', transparent:"true",version:"1.1.1",}
    );
    var lyrPTLZA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'PTLZA',format:'image/png', transparent:"true",version:"1.1.1",}
    );
    
    var lyrKUIKA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'KUIKA',format:'image/png', transparent:"true",version:"1.1.1",}
    );
    var lyrPTTRA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'PTTR_A',format:'image/png', transparent:"true",version:"1.1.1",}
    );
    
    
    var lyrSKJZL = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'SKJZ_L',format:'image/png', transparent:"true",version:"1.1.1",}
    );
    var lyrSKDRL = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'SKDR_L',format:'image/png', transparent:"true",version:"1.1.1",});
                                   
    var lyrKUMNA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'KUMN_A',format:'image/png', transparent:"true",version:"1.1.1",});           
    
    var lyrKUOSA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'KUOS_A',format:'image/png', transparent:"true",version:"1.1.1",});                                    
    
    var lyrOIPRP = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'OIPR_P',format:'image/png', transparent:"true",version:"1.1.1",}); 
   
    var lyrOIPRL = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'OIPR_L',format:'image/png', transparent:"true",version:"1.1.1",});   
    
    var lyrOIKMP = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'OIKM_P',format:'image/png', transparent:"true",version:"1.1.1",});      
    
    var lyrKUSKA = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'KUSK_A',format:'image/png', transparent:"true",version:"1.1.1",});  
    var lyrBUIBL = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                  {
        layers:'BUIB_L',format:'image/png', transparent:"true",version:"1.1.1",});  
   
    //lista obiektów typu checkbox
    var overlays = {
        "wykaz wojewodztw":lyrPRGWOJ,"Powierzchnia terenu":LyrNMT,"PTLZ_A":lyrPTLZA,"KUIK_A":lyrKUIKA,"PTTR_A":lyrPTTRA,
    "SKJZ_L":lyrSKJZL,"SKDR_L":lyrSKDRL,"KUMN_A":lyrKUMNA,"KUOS_A":lyrKUOSA,"BUBD_A":lyrBUBDA,"OIPR_P":lyrOIPRP,"OIPR_L":lyrOIPRL,"OIKM_P":lyrOIKMP,"KUSK_A":lyrKUSKA,"BUIB_L":lyrBUIBL}
    ;
    
    
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
    var BaseMaps = {"OpenStreetMaps":lyrOSM,"ORTOFTOMAPA":lyrORTO,"Mapa Sozologiczna":lyrSOZO,};
    L.control.layers(BaseMaps,overlays).addTo(mymap);
    L.control.scale({imperial:false}).addTo(mymap);
});