// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,m){return function(){function c(a,b,f){this._glName=this._context=null;this._id=-1;this._desc=void 0;this._wrapModeDirty=this._samplingModeDirty=!1;this._boundToUnits=new Set;this._context=a;this._desc={pixelFormat:b.pixelFormat,internalFormat:b.internalFormat,dataType:b.dataType,target:b.target?b.target:3553,samplingMode:b.samplingMode?b.samplingMode:9729,wrapMode:b.wrapMode?b.wrapMode:10497,maxAnisotropy:b.maxAnisotropy,flipped:void 0!==b.flipped?b.flipped:
!1,hasMipmap:void 0!==b.hasMipmap?b.hasMipmap:!1,level:void 0!==b.level?b.level:0,unpackAlignment:b.unpackAlignment?b.unpackAlignment:4,width:b.width,height:b.height,preMultiplyAlpha:void 0!==b.preMultiplyAlpha?b.preMultiplyAlpha:!1};this._id=++c._nextId;this.setData(f)}Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0});c.prototype.dispose=function(){var a=this;if(this._context){if(this._glName){var b=this._context.gl;this._boundToUnits.forEach(function(b){a._context.bindTexture(null,b)});b.deleteTexture(this._glName);this._glName=null}this._context=null}};c.prototype.resize=function(a,b){var c=this._desc;if(c.width!==a||c.height!==b)c.width=a,c.height=b,this.setData(null)};c.prototype.setData=function(a){var b=this._context.gl;this._glName||
(this._glName=b.createTexture());void 0===a&&(a=null);null===a&&(this._desc.width=this._desc.width||4,this._desc.height=this._desc.height||4);var f=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var d=this._desc;c._validateTexture(d);b.pixelStorei(b.UNPACK_ALIGNMENT,d.unpackAlignment);b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,d.flipped?1:0);b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.preMultiplyAlpha);a instanceof ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||
a instanceof HTMLVideoElement?(d.width&&d.height&&console.assert(a.width===d.width&&a.height===d.height),b.texImage2D(b.TEXTURE_2D,d.level,d.internalFormat?d.internalFormat:d.pixelFormat,d.pixelFormat,d.dataType,a),void 0===this._desc.width&&(this._desc.width=a.width),void 0===this._desc.height&&(this._desc.height=a.height)):(null!=d.width&&null!=d.height||console.error("Width and height must be specified!"),b.texImage2D(b.TEXTURE_2D,d.level,d.internalFormat?d.internalFormat:d.pixelFormat,d.width,
d.height,0,d.pixelFormat,d.dataType,a));d.hasMipmap&&this.generateMipmap();c._applySamplingMode(b,this._desc);c._applyWrapMode(b,this._desc);c._applyAnisotropicFilteringParameters(this._context,this._desc);this._context.bindTexture(f,0)};c.prototype.updateData=function(a,b,c,d,h,e){e||console.error("An attempt to use uninitialized data!");this._glName||console.error("An attempt to update uninitialized texture!");var f=this._context.gl,g=this._desc,k=this._context.getBoundTexture(0);this._context.bindTexture(this,
0);(0>b||0>c||d>g.width||h>g.height||b+d>g.width||c+h>g.height)&&console.error("An attempt to update out of bounds of the texture!");e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?(console.assert(e.width===d&&e.height===h),f.texSubImage2D(f.TEXTURE_2D,a,b,c,g.pixelFormat,g.dataType,e)):f.texSubImage2D(f.TEXTURE_2D,a,b,c,d,h,g.pixelFormat,g.dataType,e);this._context.bindTexture(k,0)};c.prototype.generateMipmap=function(){var a=this._desc;
a.hasMipmap||(a.hasMipmap=!0,c._validateTexture(a));9729===a.samplingMode?(this._samplingModeDirty=!0,a.samplingMode=9985):9728===a.samplingMode&&(this._samplingModeDirty=!0,a.samplingMode=9984);a=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var b=this._context.gl;b.generateMipmap(b.TEXTURE_2D);this._context.bindTexture(a,0)};c.prototype.setSamplingMode=function(a){a!==this._desc.samplingMode&&(this._desc.samplingMode=a,c._validateTexture(this._desc),this._samplingModeDirty=
!0)};c.prototype.setWrapMode=function(a){a!==this._desc.wrapMode&&(this._desc.wrapMode=a,c._validateTexture(this._desc),this._wrapModeDirty=!0)};c.prototype.applyChanges=function(){var a=this._context.gl,b=this._desc;this._samplingModeDirty&&(c._applySamplingMode(a,b),this._samplingModeDirty=!1);this._wrapModeDirty&&(c._applyWrapMode(a,b),this._wrapModeDirty=!1)};c.prototype.setBoundToUnit=function(a,b){b?this._boundToUnits.add(a):this._boundToUnits.delete(a)};c._isPowerOfTwo=function(a){return 0===
(a&a-1)};c._validateTexture=function(a){(0>a.width||0>a.height)&&console.error("Negative dimension parameters are not allowed!");c._isPowerOfTwo(a.width)&&c._isPowerOfTwo(a.height)||(33071!==a.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),a.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))};c._applySamplingMode=function(a,b){var c=b.samplingMode;if(9985===c||9987===c)c=9729;else if(9984===c||9986===c)c=9728;a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_MAG_FILTER,c);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,b.samplingMode)};c._applyWrapMode=function(a,b){a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,b.wrapMode);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,b.wrapMode)};c._applyAnisotropicFilteringParameters=function(a,b){if(null!=b.maxAnisotropy){var c=a.extensions.textureFilterAnisotropic;c&&(a=a.gl,a.texParameterf(a.TEXTURE_2D,c.TEXTURE_MAX_ANISOTROPY_EXT,b.maxAnisotropy))}};c._nextId=0;return c}()});