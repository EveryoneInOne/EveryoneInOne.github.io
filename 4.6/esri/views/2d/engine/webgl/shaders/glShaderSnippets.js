// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/2d/engine/webgl/shaders/bitblit.vs.glsl":"attribute vec2 a_pos;\r\nattribute vec2 a_tex;\r\n\r\nvarying mediump vec2 v_uv;\r\n\r\nvoid main(void) {\r\n  gl_Position \x3d vec4(a_pos, 0.0, 1.0);\r\n  v_uv \x3d a_tex;\r\n}\r\n","url:esri/views/2d/engine/webgl/shaders/bitblit.fs.glsl":"\tuniform lowp sampler2D u_tex;\r\n\tuniform lowp float u_opacity;\r\n\r\n\tvarying mediump vec2 v_uv;\r\n\r\n\tvoid main() {\r\n\t\tlowp vec4 color \x3d texture2D(u_tex, v_uv);\r\n\r\n    // Note: output in pre-multiplied alpha for correct alpha compositing\r\n\t\tgl_FragColor \x3d color *  u_opacity;\r\n\t}\r\n",
"url:esri/views/2d/engine/webgl/shaders/stencil.vs.glsl":"attribute vec2 a_pos;\r\n\r\nvoid main() {\r\n  gl_Position \x3d vec4(a_pos, 0.0, 1.0);\r\n}\r\n","url:esri/views/2d/engine/webgl/shaders/stencil.fs.glsl":"void main() {\r\n  gl_FragColor \x3d vec4(1.0, 1.0, 1.0, 1.0);\r\n}\r\n","url:esri/views/2d/engine/webgl/shaders/background.vs.glsl":"attribute vec2 a_pos;\r\n\r\nuniform highp mat4 u_transformMatrix;\r\nuniform mediump vec2 u_normalized_origin;\r\nuniform mediump float u_coord_range;\r\nuniform mediump float u_depth;\r\n\r\nvoid main() {\r\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);\r\n}\r\n",
"url:esri/views/2d/engine/webgl/shaders/background.fs.glsl":"uniform lowp vec4 u_color;\r\nvoid main() {\r\n  gl_FragColor \x3d u_color;\r\n}","url:esri/views/2d/engine/webgl/shaders/tileInfo.vs.glsl":"attribute vec2 a_pos;\r\n\r\nuniform highp mat4 u_transformMatrix;\r\nuniform mediump vec2 u_normalized_origin;\r\nuniform mediump float u_depth;\r\nuniform mediump float u_coord_ratio;\r\nuniform mediump vec2 u_delta; // in tile coordinates\r\nuniform mediump vec2 u_dimensions; // in tile coordinates\r\n\r\nvarying mediump vec2 v_tex;\r\n\r\nvoid main() {\r\n  mediump vec2 offests \x3d u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\r\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(offests, 0.0, 1.0);\r\n\r\n  v_tex \x3d a_pos;\r\n}\r\n",
"url:esri/views/2d/engine/webgl/shaders/tileInfo.fs.glsl":"uniform mediump sampler2D u_texture;\r\nvarying mediump vec2 v_tex;\r\n\r\nvoid main(void) {\r\n  lowp vec4 color \x3d texture2D(u_texture, v_tex);\r\n  gl_FragColor \x3d 0.75 * color;\r\n}\r\n"}});
define("require exports ../../../../webgl/ShaderSnippets dojo/text!./bitblit.vs.glsl dojo/text!./bitblit.fs.glsl dojo/text!./stencil.vs.glsl dojo/text!./stencil.fs.glsl dojo/text!./background.vs.glsl dojo/text!./background.fs.glsl dojo/text!./tileInfo.vs.glsl dojo/text!./tileInfo.fs.glsl".split(" "),function(c,p,d,e,f,g,h,k,l,m,n){function a(a,c){b+='\x3csnippet name\x3d"'+a+'"\x3e\x3c![CDATA[';b+=c;b+="]]\x3e\x3c/snippet\x3e"}var b="",b=b+'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e',b=b+
"\x3csnippets\x3e";a("bitblitVS",e);a("bitblitFS",f);a("stencilVS",g);a("stencilFS",h);a("backgroundVS",k);a("backgroundFS",l);a("tileInfoVS",m);a("tileInfoFS",n);b+="\x3c/snippets\x3e";c=new d;d.parse(b,c);return c});