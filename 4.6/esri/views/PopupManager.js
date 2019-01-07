// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require ../core/promiseUtils dojo/_base/array dojo/on dojo/Deferred dojo/promise/all ../layers/support/layerUtils ../geometry/support/scaleUtils ../geometry/Extent ../tasks/support/Query ../layers/GroupLayer ../core/Accessor".split(" "),function(H,x,m,D,z,I,E,F,J,K,G,L){var A;return L.createSubclass({declaredClass:"esri.views.PopupManager",properties:{map:{dependsOn:["view.map"],readOnly:!0}},constructor:function(){this._featureLayersCache={}},destroy:function(){this._featureLayersCache={};
this.view=null},_clickHandle:null,_featureLayersCache:null,enabled:!1,_enabledSetter:function(b){this._clickHandle&&(b?this._clickHandle.resume():this._clickHandle.pause());this._set("enabled",b)},_mapGetter:function(){return this.get("view.map")||null},view:null,_viewSetter:function(b){this._clickHandle&&(this._clickHandle.remove(),this._clickHandle=null);b&&(this._clickHandle=D.pausable(b,"click",this._clickHandler.bind(this)),this.enabled||this._clickHandle.pause());this._set("view",b)},getMapLayer:function(b){var c;
if(b&&(c=b.findLayerById())&&(b=c.id,this._featureLayersCache[b])){var a=b.lastIndexOf("_");-1<a&&(b=b.substring(0,a),c=this.map.findLayerById(b))}return c},_closePopup:function(){var b=this.get("view.popup");b&&(b.clear(),b.close())},_showPopup:function(b,c,a){function g(u){return k.allLayerViews.find(function(a){return a.layer===u})}function p(a){if(null==a)return!1;var b=g(a);return null==b?!1:a.loaded&&!b.suspended&&(a.popupEnabled&&a.popupTemplate||"graphics"===a.type||"geo-rss"===a.type||"map-notes"===
a.type||"kml"===a.type||b.getPopupData)}function w(a){return(a=g(a))&&a.hasDraped}var k=this.view;b=k.popup;var r=this,h=[],d="3d"===k.type;m.forEach(this.map.layers.toArray(),function(a){a.isInstanceOf(G)?m.forEach(a.layers.toArray(),function(a){!p(a)||d&&!w(a)||h.push(a)}):!p(a)||d&&!w(a)||h.push(a)});0<k.graphics.length&&h.push(k.graphics);(a&&k.graphics.includes(a)?a.popupTemplate:!a||p(a.layer))||(a=null);if(h.length||a){var l=[],t=!!a,n=r._calculateClickTolerance(h);if(c){var y=1;"2d"===k.type&&
(y=k.state.resolution);var f=k.basemapTerrain;f&&f.overlayManager&&(y=f.overlayManager.overlayPixelSizeInMapUnits(c));n*=y;f&&!f.spatialReference.equals(k.spatialReference)&&(n*=F.getMetersPerUnitForSR(f.spatialReference)/F.getMetersPerUnitForSR(k.spatialReference));var f=c.clone().offset(-n,-n),n=c.clone().offset(n,n),v=new J(Math.min(f.x,n.x),Math.min(f.y,n.y),Math.max(f.x,n.x),Math.max(f.y,n.y),k.spatialReference),f=function(b){var h;if("imagery"===b.type){h=new K;h.geometry=c;var e=g(b),d={rasterAttributeTableFieldPrefix:"Raster.",
returnDomainValues:!0};d.layerView=e;h=b.queryVisibleRasters(h,d).then(function(a){t=t||0<a.length;return a})}else if("csv"===b.type||"scene"===b.type||!r._featureLayersCache[b.id]&&"function"!==typeof b.queryFeatures){if("map-image"===b.type||"wms"===b.type)return e=g(b),e.getPopupData(v);var d=[],f;"esri.core.Collection\x3cesri.Graphic\x3e"===b.declaredClass?(e=b,f=!0):"graphics"===b.type?(e=b.graphics,f=!0):(e=(e=g(b))&&e.loadedGraphics,f=!1);e&&(d=e.filter(function(a){return a&&(!f||a.popupTemplate)&&
a.visible&&v.intersects(a.geometry)}).toArray());0<d.length&&(t=!0,h="scene"===b.type?r._fetchSceneAttributes(b,d):x.resolve(d))}else e=b.createQuery(),e.geometry=v,h=b.queryFeatures(e).then(function(c){c=c.features;if(a&&a.layer===b&&b.objectIdField){var e=b.objectIdField,h=a.attributes[e];c=c.filter(function(a){return a.attributes[e]!==h})}if(!a&&"function"===typeof g(b).getGraphics3DGraphics){var d=[],r=g(b).getGraphics3DGraphics(),f;for(f in r)d.push(r[f].graphic.attributes[b.objectIdField]);
c=c.filter(function(a){return-1!==d.indexOf(a.attributes[b.objectIdField])})}t=t||0<c.length;return c});return h};if(d&&!a||!d)var l=h.map(f).filter(function(a){return!!a}),q=function(a){return a.reduce(function(a,b){return a.concat(b.items?q(b.items):b)},[])},l=q(l);a&&(a.layer&&"scene"===a.layer.type?l.unshift(this._fetchSceneAttributes(a.layer,[a])):a.popupTemplate&&(f=new z,l.unshift(f.resolve([a]))));m.some(l,function(a){return!a.isFulfilled()})||t?l.length&&b.open({promises:l,location:c}):r._closePopup()}else r._closePopup()}else r._closePopup()},
_fetchSceneAttributes:function(b,c){return this.view.whenLayerView(b).then(function(a){var g=this._getOutFields(b.popupTemplate),p=c.map(function(b){return a.whenGraphicAttributes(b,g).otherwise(function(){return b})});return x.eachAlways(p)}.bind(this)).then(function(a){return a.map(function(a){return a.value})})},_getSubLayerFeatureLayers:function(b,c){var a=c||new z,g=[];c=b.length;var p=Math.floor(this.view.extent.width/this.view.width),w=this.view.scale,k=!1,r=this,h=0;a:for(;h<c;h++){var d=
b[h],l=d.dynamicLayerInfos||d.layerInfos;if(l){var t=null;d._params&&(d._params.layers||d._params.dynamicLayers)&&(t=d.visibleLayers);for(var t=E._getVisibleLayers(l,t),n=E._getLayersForScale(w,l),y=l.length,f=0;f<y;f++){var v=l[f],q=v.id,u=d.popupTemplates[q];if(!v.subLayerIds&&u&&u.popupTemplate&&-1<m.indexOf(t,q)&&-1<m.indexOf(n,q)){if(!A){k=!0;break a}var B=d.id+"_"+q,e=this._featureLayersCache[B];e&&e.loadError||(e||((e=u.layerUrl)||(e=v.source?this._getLayerUrl(d.url,"/dynamicLayer"):this._getLayerUrl(d.url,
q)),e=new A(e,{id:B,drawMode:!1,mode:A.MODE_SELECTION,outFields:this._getOutFields(u.popupTemplate),resourceInfo:u.resourceInfo,source:v.source}),this._featureLayersCache[B]=e),e.setDefinitionExpression(d.layerDefinitions&&d.layerDefinitions[q]),e.setGDBVersion(d.gdbVersion),e.popupTemplate=u.popupTemplate,e.setMaxAllowableOffset(p),e.setUseMapTime(!!d.useMapTime),d.layerDrawingOptions&&d.layerDrawingOptions[q]&&d.layerDrawingOptions[q].renderer&&e.setRenderer(d.layerDrawingOptions[q].renderer),g.push(e))}}}}if(k){var x=
new z;H(["../layers/FeatureLayer"],function(a){A=a;x.resolve()});x.then(function(){r._getSubLayerFeatureLayers(b,a)})}else{var C=[];m.forEach(g,function(a){if(!a.loaded){var b=new z;D.once(a,"load, error",function(){b.resolve()});C.push(b.promise)}});C.length?I(C).then(function(){g=m.filter(g,function(a){return!a.loadError&&a.isVisibleAtScale(w)});a.resolve(g)}):(g=m.filter(g,function(a){return a.isVisibleAtScale(w)}),a.resolve(g))}return a.promise},_getLayerUrl:function(b,c){var a=b.indexOf("?");
return-1===a?b+"/"+c:b.substring(0,a)+"/"+c+b.substring(a)},_getOutFields:function(b){var c=["*"];if("esri.PopupTemplate"===b.declaredClass){var a=null==b.content||Array.isArray(b.content)&&b.content.every(function(a){return"attachments"===a.type||"fields"===a.type&&null==a.fieldInfos||"text"===a.type&&-1===a.text.indexOf("{")});b.fieldInfos&&!b.expressionInfos&&a&&(c=[],m.forEach(b.fieldInfos,function(a){var b=a.fieldName&&a.fieldName.toLowerCase();b&&"shape"!==b&&0!==b.indexOf("relationships/")&&
c.push(a.fieldName)}))}return c},_calculateClickTolerance:function(b){var c=6;m.forEach(b,function(a){if(a=a.renderer)"simple"===a.type?((a=a.symbol)&&a.xoffset&&(c=Math.max(c,Math.abs(a.xoffset))),a&&a.yoffset&&(c=Math.max(c,Math.abs(a.yoffset)))):"unique-value"!==a.type&&"class-breaks"!==a.type||m.forEach(a.uniqueValueInfos||a.classBreakInfos,function(a){(a=a.symbol)&&a.xoffset&&(c=Math.max(c,Math.abs(a.xoffset)));a&&a.yoffset&&(c=Math.max(c,Math.abs(a.yoffset)))})});return c},_clickHandler:function(b){function c(b){return a.allLayerViews.find(function(a){return a.layer===
b})}var a=this.view,g=b.screenPoint,p=this;if(0===b.button&&a.popup&&a.ready){var m="3d"===a.type,k=a.map.allLayers.some(function(a){if(a.isInstanceOf(G))return!1;var b;null==a?b=!1:(b=c(a),b=null==b?!1:a.loaded&&!b.suspended&&(a.popupEnabled&&a.popupTemplate||"graphics"===a.type||b.getPopupData));b&&!(b=!m)&&(b=(a=c(a))&&a.hasDraped);return b?!0:!1});null!=g?this.view.hitTest(g.x,g.y).then(function(a){k||0<a.results.length?0<a.results.length?(a=a.results[0],p._showPopup(b,a.mapPoint,a.graphic)):
p._showPopup(b,b.mapPoint,null):p._closePopup()}):p._showPopup(b,b.mapPoint)}}})});