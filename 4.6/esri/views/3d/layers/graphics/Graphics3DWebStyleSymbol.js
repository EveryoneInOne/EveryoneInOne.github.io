// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/PromiseLightweight"],function(h,k,f,g){return function(e){function d(a,c){var b=e.call(this)||this;b.symbol=null;b.graphics3DSymbol=null;b.symbol=a;a.fetchSymbol().then(function(a){if(b.isRejected())throw Error();b.graphics3DSymbol=c(a)}).then(function(){if(b.isRejected())throw Error();b.graphics3DSymbol.then(function(){b.isRejected()||b.resolve()},function(a){b.isRejected()||b.reject(a)})}).otherwise(function(a){b.isRejected()||
b.reject(a)});return b}f(d,e);d.prototype.createGraphics3DGraphic=function(a,c){return this.graphics3DSymbol.createGraphics3DGraphic(a,c,this)};d.prototype.layerPropertyChanged=function(a,c){return this.graphics3DSymbol.layerPropertyChanged(a,c)};d.prototype.applyRendererDiff=function(a,c,b){return this.graphics3DSymbol.applyRendererDiff(a,c,b)};d.prototype.getFastUpdateStatus=function(){return this.graphics3DSymbol?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}};d.prototype.setDrawOrder=
function(a,c){return this.graphics3DSymbol.setDrawOrder(a,c)};d.prototype.destroy=function(){this.isFulfilled()||this.reject();this.graphics3DSymbol&&this.graphics3DSymbol.destroy()};return d}(g.Promise)});