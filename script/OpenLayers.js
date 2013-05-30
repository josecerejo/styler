/*

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright 2005-2008 MetaCarta, Inc., released under the Clear BSD license.
  Please see http://svn.openlayers.org/trunk/openlayers/license.txt
  for the full text of the license.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used please see the
  OpenLayers SVN repository: <http://openlayers.org/>)

*/
/* Contains portions of Prototype.js:
 *
 * Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
 *--------------------------------------------------------------------------*/
/**  
 *
 *  Contains portions of Rico <http://openrico.org/>
 *
 *  Copyright 2005 Sabre Airline Solutions
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you
 *  may not use this file except in compliance with the License. You
 *  may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 *  implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 *
 **/
/**
 * Contains portions of GoogleGears <http://gears.google.com/>:
 *
 * Copyright 2007, Google Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *  3. Neither the name of Google Inc. nor the names of its contributors may be
 *     used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * Contains portions of Gears <http://code.google.com/apis/gears/>
 *
 * Copyright 2007, Google Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *  3. Neither the name of Google Inc. nor the names of its contributors may be
 *     used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Sets up google.gears.*, which is *the only* supported way to access Gears.
 *
 * Circumvent this file at your own risk!
 *
 * In the future, Gears may automatically define google.gears.* without this
 * file. Gears may use these objects to transparently fix bugs and compatibility
 * issues. Applications that use the code below will continue to work seamlessly
 * when that happens.
 */
var OpenLayers = {
    singleFile: true
};
(function () {
    var singleFile = (typeof OpenLayers == "object" && OpenLayers.singleFile);
    window.OpenLayers = {
        _scriptName: (!singleFile) ? "lib/OpenLayers.js" : "OpenLayers.js",
        _getScriptLocation: function () {
            var scriptLocation = "";
            var scriptName = OpenLayers._scriptName;
            var scripts = document.getElementsByTagName('script');
            for (var i = 0, len = scripts.length; i < len; i++) {
                var src = scripts[i].getAttribute('src');
                if (src) {
                    var index = src.lastIndexOf(scriptName);
                    var pathLength = src.lastIndexOf('?');
                    if (pathLength < 0) {
                        pathLength = src.length;
                    }
                    if ((index > -1) && (index + scriptName.length == pathLength)) {
                        scriptLocation = src.slice(0, pathLength - scriptName.length);
                        break;
                    }
                }
            }
            return scriptLocation;
        }
    };
    if (!singleFile) {
        var jsfiles = new Array("OpenLayers/Util.js", "OpenLayers/BaseTypes.js", "OpenLayers/BaseTypes/Class.js", "OpenLayers/BaseTypes/Bounds.js", "OpenLayers/BaseTypes/Element.js", "OpenLayers/BaseTypes/LonLat.js", "OpenLayers/BaseTypes/Pixel.js", "OpenLayers/BaseTypes/Size.js", "OpenLayers/Console.js", "OpenLayers/Tween.js", "Rico/Corner.js", "Rico/Color.js", "OpenLayers/Ajax.js", "OpenLayers/Request.js", "OpenLayers/Request/XMLHttpRequest.js", "OpenLayers/Events.js", "OpenLayers/Projection.js", "OpenLayers/Map.js", "OpenLayers/Layer.js", "OpenLayers/Icon.js", "OpenLayers/Marker.js", "OpenLayers/Marker/Box.js", "OpenLayers/Popup.js", "OpenLayers/Tile.js", "OpenLayers/Tile/Image.js", "OpenLayers/Tile/WFS.js", "OpenLayers/Layer/Image.js", "OpenLayers/Layer/SphericalMercator.js", "OpenLayers/Layer/EventPane.js", "OpenLayers/Layer/FixedZoomLevels.js", "OpenLayers/Layer/Google.js", "OpenLayers/Layer/VirtualEarth.js", "OpenLayers/Layer/Yahoo.js", "OpenLayers/Layer/HTTPRequest.js", "OpenLayers/Layer/Grid.js", "OpenLayers/Layer/MapGuide.js", "OpenLayers/Layer/MapServer.js", "OpenLayers/Layer/MapServer/Untiled.js", "OpenLayers/Layer/KaMap.js", "OpenLayers/Layer/KaMapCache.js", "OpenLayers/Layer/MultiMap.js", "OpenLayers/Layer/Markers.js", "OpenLayers/Layer/Text.js", "OpenLayers/Layer/WorldWind.js", "OpenLayers/Layer/WMS.js", "OpenLayers/Layer/WMS/Untiled.js", "OpenLayers/Layer/GeoRSS.js", "OpenLayers/Layer/Boxes.js", "OpenLayers/Layer/TMS.js", "OpenLayers/Layer/TileCache.js", "OpenLayers/Popup/Anchored.js", "OpenLayers/Popup/AnchoredBubble.js", "OpenLayers/Popup/Framed.js", "OpenLayers/Popup/FramedCloud.js", "OpenLayers/Feature.js", "OpenLayers/Feature/Vector.js", "OpenLayers/Feature/WFS.js", "OpenLayers/Handler.js", "OpenLayers/Handler/Click.js", "OpenLayers/Handler/Hover.js", "OpenLayers/Handler/Point.js", "OpenLayers/Handler/Path.js", "OpenLayers/Handler/Polygon.js", "OpenLayers/Handler/Feature.js", "OpenLayers/Handler/Drag.js", "OpenLayers/Handler/RegularPolygon.js", "OpenLayers/Handler/Box.js", "OpenLayers/Handler/MouseWheel.js", "OpenLayers/Handler/Keyboard.js", "OpenLayers/Control.js", "OpenLayers/Control/Attribution.js", "OpenLayers/Control/Button.js", "OpenLayers/Control/ZoomBox.js", "OpenLayers/Control/ZoomToMaxExtent.js", "OpenLayers/Control/DragPan.js", "OpenLayers/Control/Navigation.js", "OpenLayers/Control/MouseDefaults.js", "OpenLayers/Control/MousePosition.js", "OpenLayers/Control/OverviewMap.js", "OpenLayers/Control/KeyboardDefaults.js", "OpenLayers/Control/PanZoom.js", "OpenLayers/Control/PanZoomBar.js", "OpenLayers/Control/ArgParser.js", "OpenLayers/Control/Permalink.js", "OpenLayers/Control/Scale.js", "OpenLayers/Control/ScaleLine.js", "OpenLayers/Control/LayerSwitcher.js", "OpenLayers/Control/DrawFeature.js", "OpenLayers/Control/DragFeature.js", "OpenLayers/Control/ModifyFeature.js", "OpenLayers/Control/DeleteFeature.js", "OpenLayers/Control/Panel.js", "OpenLayers/Control/SelectFeature.js", "OpenLayers/Control/NavigationHistory.js", "OpenLayers/Control/Measure.js", "OpenLayers/Geometry.js", "OpenLayers/Geometry/Rectangle.js", "OpenLayers/Geometry/Collection.js", "OpenLayers/Geometry/Point.js", "OpenLayers/Geometry/MultiPoint.js", "OpenLayers/Geometry/Curve.js", "OpenLayers/Geometry/LineString.js", "OpenLayers/Geometry/LinearRing.js", "OpenLayers/Geometry/Polygon.js", "OpenLayers/Geometry/MultiLineString.js", "OpenLayers/Geometry/MultiPolygon.js", "OpenLayers/Geometry/Surface.js", "OpenLayers/Renderer.js", "OpenLayers/Renderer/Elements.js", "OpenLayers/Renderer/SVG.js", "OpenLayers/Renderer/Canvas.js", "OpenLayers/Renderer/VML.js", "OpenLayers/Layer/Vector.js", "OpenLayers/Strategy.js", "OpenLayers/Strategy/Fixed.js", "OpenLayers/Strategy/Cluster.js", "OpenLayers/Strategy/Paging.js", "OpenLayers/Strategy/BBOX.js", "OpenLayers/Strategy/Composer.js", "OpenLayers/Protocol.js", "OpenLayers/Protocol/HTTP.js", "OpenLayers/Protocol/SQL.js", "OpenLayers/Protocol/SQL/Gears.js", "OpenLayers/Protocol/WFS.js", "OpenLayers/Protocol/WFS/v1.js", "OpenLayers/Protocol/WFS/v1_0_0.js", "OpenLayers/Protocol/WFS/v1_1_0.js", "OpenLayers/Protocol/WFSV.js", "OpenLayers/Layer/PointTrack.js", "OpenLayers/Layer/GML.js", "OpenLayers/Style.js", "OpenLayers/StyleMap.js", "OpenLayers/Rule.js", "OpenLayers/Filter.js", "OpenLayers/Filter/FeatureId.js", "OpenLayers/Filter/Logical.js", "OpenLayers/Filter/Comparison.js", "OpenLayers/Filter/Spatial.js", "OpenLayers/Format.js", "OpenLayers/Format/XML.js", "OpenLayers/Format/GML.js", "OpenLayers/Format/GML/Base.js", "OpenLayers/Format/GML/Paged.js", "OpenLayers/Format/GML/v2.js", "OpenLayers/Format/GML/v3.js", "OpenLayers/Format/KML.js", "OpenLayers/Format/GeoRSS.js", "OpenLayers/Format/WFS.js", "OpenLayers/Format/WKT.js", "OpenLayers/Format/OSM.js", "OpenLayers/Format/GPX.js", "OpenLayers/Format/SLD.js", "OpenLayers/Format/SLD/v1.js", "OpenLayers/Format/SLD/v1_0_0.js", "OpenLayers/Format/SLD/v1.js", "OpenLayers/Format/Filter.js", "OpenLayers/Format/Filter/v1.js", "OpenLayers/Format/Filter/v1_0_0.js", "OpenLayers/Format/Filter/v1_1_0.js", "OpenLayers/Format/Text.js", "OpenLayers/Format/JSON.js", "OpenLayers/Format/GeoJSON.js", "OpenLayers/Format/WMC.js", "OpenLayers/Format/WMC/v1.js", "OpenLayers/Format/WMC/v1_0_0.js", "OpenLayers/Format/WMC/v1_1_0.js", "OpenLayers/Format/WMSCapabilities.js", "OpenLayers/Format/WMSCapabilities/v1_1.js", "OpenLayers/Format/WMSCapabilities/v1_1_0.js", "OpenLayers/Format/WMSCapabilities/v1_1_1.js", "OpenLayers/Format/WFSCapabilities.js", "OpenLayers/Format/WFSCapabilities/v1_1.js", "OpenLayers/Format/WFSCapabilities/v1_1_0.js", "OpenLayers/Format/WFSCapabilities/v1_1_1.js", "OpenLayers/Format/WFSDescribeFeatureType.js", "OpenLayers/Format/WFSDescribeFeatureType/v1_0.js", "OpenLayers/Format/WFST.js", "OpenLayers/Format/WFST/v1.js", "OpenLayers/Format/WFST/v1_1_0.js", "OpenLayers/Layer/WFS.js", "OpenLayers/Control/MouseToolbar.js", "OpenLayers/Control/NavToolbar.js", "OpenLayers/Control/PanPanel.js", "OpenLayers/Control/Pan.js", "OpenLayers/Control/ZoomIn.js", "OpenLayers/Control/ZoomOut.js", "OpenLayers/Control/ZoomPanel.js", "OpenLayers/Control/EditingToolbar.js", "OpenLayers/Control/WFSGetFeature.js", "OpenLayers/Lang.js", "OpenLayers/Lang/en.js");
        var agent = navigator.userAgent;
        var docWrite = (agent.match("MSIE") || agent.match("Safari"));
        if (docWrite) {
            var allScriptTags = new Array(jsfiles.length);
        }
        var host = OpenLayers._getScriptLocation() + "lib/";
        for (var i = 0, len = jsfiles.length; i < len; i++) {
            if (docWrite) {
                allScriptTags[i] = "<script src='" + host + jsfiles[i] + "'></script>";
            } else {
                var s = document.createElement("script");
                s.src = host + jsfiles[i];
                var h = document.getElementsByTagName("head").length ? document.getElementsByTagName("head")[0] : document.body;
                h.appendChild(s);
            }
        }
        if (docWrite) {
            document.write(allScriptTags.join(""));
        }
    }
})();
OpenLayers.VERSION_NUMBER = "$Revision: 8533 $";
OpenLayers.String = {
    startsWith: function (str, sub) {
        return (str.indexOf(sub) == 0);
    },
    contains: function (str, sub) {
        return (str.indexOf(sub) != -1);
    },
    trim: function (str) {
        return str.replace(/^\s*(.*?)\s*$/, "$1");
    },
    camelize: function (str) {
        var oStringList = str.split('-');
        var camelizedString = oStringList[0];
        for (var i = 1, len = oStringList.length; i < len; i++) {
            var s = oStringList[i];
            camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
        }
        return camelizedString;
    },
    format: function (template, context, args) {
        if (!context) {
            context = window;
        }
        var tokens = template.split("${");
        var item, last, replacement;
        for (var i = 1, len = tokens.length; i < len; i++) {
            item = tokens[i];
            last = item.indexOf("}");
            if (last > 0) {
                replacement = context[item.substring(0, last)];
                if (typeof replacement == "function") {
                    replacement = args ? replacement.apply(null, args) : replacement();
                }
                tokens[i] = replacement + item.substring(++last);
            } else {
                tokens[i] = "${" + item;
            }
        }
        return tokens.join("");
    },
    numberRegEx: /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,
    isNumeric: function (value) {
        return OpenLayers.String.numberRegEx.test(value);
    }
};
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (sStart) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.String.startsWith'
        }));
        return OpenLayers.String.startsWith(this, sStart);
    };
}
if (!String.prototype.contains) {
    String.prototype.contains = function (str) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.String.contains'
        }));
        return OpenLayers.String.contains(this, str);
    };
}
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.String.trim'
        }));
        return OpenLayers.String.trim(this);
    };
}
if (!String.prototype.camelize) {
    String.prototype.camelize = function () {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.String.camelize'
        }));
        return OpenLayers.String.camelize(this);
    };
}
OpenLayers.Number = {
    decimalSeparator: ".",
    thousandsSeparator: ",",
    limitSigDigs: function (num, sig) {
        var fig = 0;
        if (sig > 0) {
            fig = parseFloat(num.toPrecision(sig));
        }
        return fig;
    },
    format: function (num, dec, tsep, dsep) {
        dec = (typeof dec != "undefined") ? dec : 0;
        tsep = (typeof tsep != "undefined") ? tsep : OpenLayers.Number.thousandsSeparator;
        dsep = (typeof dsep != "undefined") ? dsep : OpenLayers.Number.decimalSeparator;
        if (dec != null) {
            num = parseFloat(num.toFixed(dec));
        }
        var parts = num.toString().split(".");
        if (parts.length == 1 && dec == null) {
            dec = 0;
        }
        var integer = parts[0];
        if (tsep) {
            var thousands = /(-?[0-9]+)([0-9]{3})/;
            while (thousands.test(integer)) {
                integer = integer.replace(thousands, "$1" + tsep + "$2");
            }
        }
        var str;
        if (dec == 0) {
            str = integer;
        } else {
            var rem = parts.length > 1 ? parts[1] : "0";
            if (dec != null) {
                rem = rem + new Array(dec - rem.length + 1).join("0");
            }
            str = integer + dsep + rem;
        }
        return str;
    }
};
if (!Number.prototype.limitSigDigs) {
    Number.prototype.limitSigDigs = function (sig) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.Number.limitSigDigs'
        }));
        return OpenLayers.Number.limitSigDigs(this, sig);
    };
}
OpenLayers.Function = {
    bind: function (func, object) {
        var args = Array.prototype.slice.apply(arguments, [2]);
        return function () {
            var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
            return func.apply(object, newArgs);
        };
    },
    bindAsEventListener: function (func, object) {
        return function (event) {
            return func.call(object, event || window.event);
        };
    }
};
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.Function.bind'
        }));
        Array.prototype.unshift.apply(arguments, [this]);
        return OpenLayers.Function.bind.apply(null, arguments);
    };
}
if (!Function.prototype.bindAsEventListener) {
    Function.prototype.bindAsEventListener = function (object) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
            'newMethod': 'OpenLayers.Function.bindAsEventListener'
        }));
        return OpenLayers.Function.bindAsEventListener(this, object);
    };
}
OpenLayers.Array = {
    filter: function (array, callback, caller) {
        var selected = [];
        if (Array.prototype.filter) {
            selected = array.filter(callback, caller);
        } else {
            var len = array.length;
            if (typeof callback != "function") {
                throw new TypeError();
            }
            for (var i = 0; i < len; i++) {
                if (i in array) {
                    var val = array[i];
                    if (callback.call(caller, val, i, array)) {
                        selected.push(val);
                    }
                }
            }
        }
        return selected;
    }
};
OpenLayers.Class = function () {
    var Class = function () {
        if (arguments && arguments[0] != OpenLayers.Class.isPrototype) {
            this.initialize.apply(this, arguments);
        }
    };
    var extended = {};
    var parent;
    for (var i = 0, len = arguments.length; i < len; ++i) {
        if (typeof arguments[i] == "function") {
            parent = arguments[i].prototype;
        } else {
            parent = arguments[i];
        }
        OpenLayers.Util.extend(extended, parent);
    }
    Class.prototype = extended;
    return Class;
};
OpenLayers.Class.isPrototype = function () {};
OpenLayers.Class.create = function () {
    return function () {
        if (arguments && arguments[0] != OpenLayers.Class.isPrototype) {
            this.initialize.apply(this, arguments);
        }
    };
};
OpenLayers.Class.inherit = function () {
    var superClass = arguments[0];
    var proto = new superClass(OpenLayers.Class.isPrototype);
    for (var i = 1, len = arguments.length; i < len; i++) {
        if (typeof arguments[i] == "function") {
            var mixin = arguments[i];
            arguments[i] = new mixin(OpenLayers.Class.isPrototype);
        }
        OpenLayers.Util.extend(proto, arguments[i]);
    }
    return proto;
};
OpenLayers.Util = {};
OpenLayers.Util.getElement = function () {
    var elements = [];
    for (var i = 0, len = arguments.length; i < len; i++) {
        var element = arguments[i];
        if (typeof element == 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length == 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
};
if ($ == null) {
    var $ = OpenLayers.Util.getElement;
}
OpenLayers.Util.extend = function (destination, source) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            var value = source[property];
            if (value !== undefined) {
                destination[property] = value;
            }
        }
        var sourceIsEvt = typeof window.Event == "function" && source instanceof window.Event;
        if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty('toString')) {
            destination.toString = source.toString;
        }
    }
    return destination;
};
OpenLayers.Util.removeItem = function (array, item) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == item) {
            array.splice(i, 1);
        }
    }
    return array;
};
OpenLayers.Util.clearArray = function (array) {
    OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
        'newMethod': 'array = []'
    }));
    array.length = 0;
};
OpenLayers.Util.indexOf = function (array, obj) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] == obj) {
            return i;
        }
    }
    return -1;
};
OpenLayers.Util.modifyDOMElement = function (element, id, px, sz, position, border, overflow, opacity) {
    if (id) {
        element.id = id;
    }
    if (px) {
        element.style.left = px.x + "px";
        element.style.top = px.y + "px";
    }
    if (sz) {
        element.style.width = sz.w + "px";
        element.style.height = sz.h + "px";
    }
    if (position) {
        element.style.position = position;
    }
    if (border) {
        element.style.border = border;
    }
    if (overflow) {
        element.style.overflow = overflow;
    }
    if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
        element.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
        element.style.opacity = opacity;
    } else if (parseFloat(opacity) == 1.0) {
        element.style.filter = '';
        element.style.opacity = '';
    }
};
OpenLayers.Util.createDiv = function (id, px, sz, imgURL, position, border, overflow, opacity) {
    var dom = document.createElement('div');
    if (imgURL) {
        dom.style.backgroundImage = 'url(' + imgURL + ')';
    }
    if (!id) {
        id = OpenLayers.Util.createUniqueID("OpenLayersDiv");
    }
    if (!position) {
        position = "absolute";
    }
    OpenLayers.Util.modifyDOMElement(dom, id, px, sz, position, border, overflow, opacity);
    return dom;
};
OpenLayers.Util.createImage = function (id, px, sz, imgURL, position, border, opacity, delayDisplay) {
    var image = document.createElement("img");
    if (!id) {
        id = OpenLayers.Util.createUniqueID("OpenLayersDiv");
    }
    if (!position) {
        position = "relative";
    }
    OpenLayers.Util.modifyDOMElement(image, id, px, sz, position, border, null, opacity);
    if (delayDisplay) {
        image.style.display = "none";
        OpenLayers.Event.observe(image, "load", OpenLayers.Function.bind(OpenLayers.Util.onImageLoad, image));
        OpenLayers.Event.observe(image, "error", OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError, image));
    }
    image.style.alt = id;
    image.galleryImg = "no";
    if (imgURL) {
        image.src = imgURL;
    }
    return image;
};
OpenLayers.Util.setOpacity = function (element, opacity) {
    OpenLayers.Util.modifyDOMElement(element, null, null, null, null, null, null, opacity);
};
OpenLayers.Util.onImageLoad = function () {
    if (!this.viewRequestID || (this.map && this.viewRequestID == this.map.viewRequestID)) {
        this.style.backgroundColor = null;
        this.style.display = "";
    }
};
OpenLayers.Util.onImageLoadErrorColor = "pink";
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 0;
OpenLayers.Util.onImageLoadError = function () {
    this._attempts = (this._attempts) ? (this._attempts + 1) : 1;
    if (this._attempts <= OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
        var urls = this.urls;
        if (urls && urls instanceof Array && urls.length > 1) {
            var src = this.src.toString();
            var current_url, k;
            for (k = 0; current_url = urls[k]; k++) {
                if (src.indexOf(current_url) != -1) {
                    break;
                }
            }
            var guess = Math.floor(urls.length * Math.random());
            var new_url = urls[guess];
            k = 0;
            while (new_url == current_url && k++ < 4) {
                guess = Math.floor(urls.length * Math.random());
                new_url = urls[guess];
            }
            this.src = src.replace(current_url, new_url);
        } else {
            this.src = this.src;
        }
    } else {
        this.style.backgroundColor = OpenLayers.Util.onImageLoadErrorColor;
    }
    this.style.display = "";
};
OpenLayers.Util.alphaHack = function () {
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
    var filter = false;
    try {
        filter = !! (document.body.filters);
    } catch (e) {}
    return (filter && (version >= 5.5) && (version < 7));
};
OpenLayers.Util.modifyAlphaImageDiv = function (div, id, px, sz, imgURL, position, border, sizing, opacity) {
    OpenLayers.Util.modifyDOMElement(div, id, px, sz, position, null, null, opacity);
    var img = div.childNodes[0];
    if (imgURL) {
        img.src = imgURL;
    }
    OpenLayers.Util.modifyDOMElement(img, div.id + "_innerImage", null, sz, "relative", border);
    if (OpenLayers.Util.alphaHack()) {
        if (div.style.display != "none") {
            div.style.display = "inline-block";
        }
        if (sizing == null) {
            sizing = "scale";
        }
        div.style.filter = "progid:DXImageTransform.Microsoft" + ".AlphaImageLoader(src='" + img.src + "', " + "sizingMethod='" + sizing + "')";
        if (parseFloat(div.style.opacity) >= 0.0 && parseFloat(div.style.opacity) < 1.0) {
            div.style.filter += " alpha(opacity=" + div.style.opacity * 100 + ")";
        }
        img.style.filter = "alpha(opacity=0)";
    }
};
OpenLayers.Util.createAlphaImageDiv = function (id, px, sz, imgURL, position, border, sizing, opacity, delayDisplay) {
    var div = OpenLayers.Util.createDiv();
    var img = OpenLayers.Util.createImage(null, null, null, null, null, null, null, false);
    div.appendChild(img);
    if (delayDisplay) {
        img.style.display = "none";
        OpenLayers.Event.observe(img, "load", OpenLayers.Function.bind(OpenLayers.Util.onImageLoad, div));
        OpenLayers.Event.observe(img, "error", OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError, div));
    }
    OpenLayers.Util.modifyAlphaImageDiv(div, id, px, sz, imgURL, position, border, sizing, opacity);
    return div;
};
OpenLayers.Util.upperCaseObject = function (object) {
    var uObject = {};
    for (var key in object) {
        uObject[key.toUpperCase()] = object[key];
    }
    return uObject;
};
OpenLayers.Util.applyDefaults = function (to, from) {
    to = to || {};
    var fromIsEvt = typeof window.Event == "function" && from instanceof window.Event;
    for (var key in from) {
        if (to[key] === undefined || (!fromIsEvt && from.hasOwnProperty && from.hasOwnProperty(key) && !to.hasOwnProperty(key))) {
            to[key] = from[key];
        }
    }
    if (!fromIsEvt && from && from.hasOwnProperty && from.hasOwnProperty('toString') && !to.hasOwnProperty('toString')) {
        to.toString = from.toString;
    }
    return to;
};
OpenLayers.Util.getParameterString = function (params) {
    var paramsArray = [];
    for (var key in params) {
        var value = params[key];
        if ((value != null) && (typeof value != 'function')) {
            var encodedValue;
            if (typeof value == 'object' && value.constructor == Array) {
                var encodedItemArray = [];
                for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                    encodedItemArray.push(encodeURIComponent(value[itemIndex]));
                }
                encodedValue = encodedItemArray.join(",");
            } else {
                encodedValue = encodeURIComponent(value);
            }
            paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
        }
    }
    return paramsArray.join("&");
};
OpenLayers.ImgPath = '';
OpenLayers.Util.getImagesLocation = function () {
    return OpenLayers.ImgPath || (OpenLayers._getScriptLocation() + "img/");
};
OpenLayers.Util.Try = function () {
    var returnValue = null;
    for (var i = 0, len = arguments.length; i < len; i++) {
        var lambda = arguments[i];
        try {
            returnValue = lambda();
            break;
        } catch (e) {}
    }
    return returnValue;
};
OpenLayers.Util.getNodes = function (p, tagName) {
    var nodes = OpenLayers.Util.Try(function () {
        return OpenLayers.Util._getNodes(p.documentElement.childNodes, tagName);
    }, function () {
        return OpenLayers.Util._getNodes(p.childNodes, tagName);
    });
    return nodes;
};
OpenLayers.Util._getNodes = function (nodes, tagName) {
    var retArray = [];
    for (var i = 0, len = nodes.length; i < len; i++) {
        if (nodes[i].nodeName == tagName) {
            retArray.push(nodes[i]);
        }
    }
    return retArray;
};
OpenLayers.Util.getTagText = function (parent, item, index) {
    var result = OpenLayers.Util.getNodes(parent, item);
    if (result && (result.length > 0)) {
        if (!index) {
            index = 0;
        }
        if (result[index].childNodes.length > 1) {
            return result.childNodes[1].nodeValue;
        } else if (result[index].childNodes.length == 1) {
            return result[index].firstChild.nodeValue;
        }
    } else {
        return "";
    }
};
OpenLayers.Util.getXmlNodeValue = function (node) {
    var val = null;
    OpenLayers.Util.Try(function () {
        val = node.text;
        if (!val) {
            val = node.textContent;
        }
        if (!val) {
            val = node.firstChild.nodeValue;
        }
    }, function () {
        val = node.textContent;
    });
    return val;
};
OpenLayers.Util.mouseLeft = function (evt, div) {
    var target = (evt.relatedTarget) ? evt.relatedTarget : evt.toElement;
    while (target != div && target != null) {
        target = target.parentNode;
    }
    return (target != div);
};
OpenLayers.Util.rad = function (x) {
    return x * Math.PI / 180;
};
OpenLayers.Util.distVincenty = function (p1, p2) {
    var a = 6378137,
        b = 6356752.3142,
        f = 1 / 298.257223563;
    var L = OpenLayers.Util.rad(p2.lon - p1.lon);
    var U1 = Math.atan((1 - f) * Math.tan(OpenLayers.Util.rad(p1.lat)));
    var U2 = Math.atan((1 - f) * Math.tan(OpenLayers.Util.rad(p2.lat)));
    var sinU1 = Math.sin(U1),
        cosU1 = Math.cos(U1);
    var sinU2 = Math.sin(U2),
        cosU2 = Math.cos(U2);
    var lambda = L,
        lambdaP = 2 * Math.PI;
    var iterLimit = 20;
    while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0) {
        var sinLambda = Math.sin(lambda),
            cosLambda = Math.cos(lambda);
        var sinSigma = Math.sqrt((cosU2 * sinLambda) * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
        if (sinSigma == 0) {
            return 0;
        }
        var cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        var sigma = Math.atan2(sinSigma, cosSigma);
        var alpha = Math.asin(cosU1 * cosU2 * sinLambda / sinSigma);
        var cosSqAlpha = Math.cos(alpha) * Math.cos(alpha);
        var cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
        var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        lambdaP = lambda;
        lambda = L + (1 - C) * f * Math.sin(alpha) * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    }
    if (iterLimit == 0) {
        return NaN;
    }
    var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    var s = b * A * (sigma - deltaSigma);
    var d = s.toFixed(3) / 1000;
    return d;
};
OpenLayers.Util.getParameters = function (url) {
    url = url || window.location.href;
    var paramsString = "";
    if (OpenLayers.String.contains(url, '?')) {
        var start = url.indexOf('?') + 1;
        var end = OpenLayers.String.contains(url, "#") ? url.indexOf('#') : url.length;
        paramsString = url.substring(start, end);
    }
    var parameters = {};
    var pairs = paramsString.split(/[&;]/);
    for (var i = 0, len = pairs.length; i < len; ++i) {
        var keyValue = pairs[i].split('=');
        if (keyValue[0]) {
            var key = decodeURIComponent(keyValue[0]);
            var value = keyValue[1] || '';
            value = value.split(",");
            for (var j = 0, jlen = value.length; j < jlen; j++) {
                value[j] = decodeURIComponent(value[j]);
            }
            if (value.length == 1) {
                value = value[0];
            }
            parameters[key] = value;
        }
    }
    return parameters;
};
OpenLayers.Util.getArgs = function (url) {
    OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", {
        'newMethod': 'OpenLayers.Util.getParameters'
    }));
    return OpenLayers.Util.getParameters(url);
};
OpenLayers.Util.lastSeqID = 0;
OpenLayers.Util.createUniqueID = function (prefix) {
    if (prefix == null) {
        prefix = "id_";
    }
    OpenLayers.Util.lastSeqID += 1;
    return prefix + OpenLayers.Util.lastSeqID;
};
OpenLayers.INCHES_PER_UNIT = {
    'inches': 1.0,
    'ft': 12.0,
    'mi': 63360.0,
    'm': 39.3701,
    'km': 39370.1,
    'dd': 4374754,
    'yd': 36
};
OpenLayers.INCHES_PER_UNIT["in"] = OpenLayers.INCHES_PER_UNIT.inches;
OpenLayers.INCHES_PER_UNIT["degrees"] = OpenLayers.INCHES_PER_UNIT.dd;
OpenLayers.INCHES_PER_UNIT["nmi"] = 1852 * OpenLayers.INCHES_PER_UNIT.m;
OpenLayers.DOTS_PER_INCH = 72;
OpenLayers.Util.normalizeScale = function (scale) {
    var normScale = (scale > 1.0) ? (1.0 / scale) : scale;
    return normScale;
};
OpenLayers.Util.getResolutionFromScale = function (scale, units) {
    if (units == null) {
        units = "degrees";
    }
    var normScale = OpenLayers.Util.normalizeScale(scale);
    var resolution = 1 / (normScale * OpenLayers.INCHES_PER_UNIT[units] * OpenLayers.DOTS_PER_INCH);
    return resolution;
};
OpenLayers.Util.getScaleFromResolution = function (resolution, units) {
    if (units == null) {
        units = "degrees";
    }
    var scale = resolution * OpenLayers.INCHES_PER_UNIT[units] * OpenLayers.DOTS_PER_INCH;
    return scale;
};
OpenLayers.Util.safeStopPropagation = function (evt) {
    OpenLayers.Event.stop(evt, true);
};
OpenLayers.Util.pagePosition = function (forElement) {
    var valueT = 0,
        valueL = 0;
    var element = forElement;
    var child = forElement;
    while (element) {
        if (element == document.body) {
            if (OpenLayers.Element.getStyle(child, 'position') == 'absolute') {
                break;
            }
        }
        valueT += element.offsetTop || 0;
        valueL += element.offsetLeft || 0;
        child = element;
        try {
            element = element.offsetParent;
        } catch (e) {
            OpenLayers.Console.error(OpenLayers.i18n("pagePositionFailed", {
                'elemId': element.id
            }));
            break;
        }
    }
    element = forElement;
    while (element) {
        valueT -= element.scrollTop || 0;
        valueL -= element.scrollLeft || 0;
        element = element.parentNode;
    }
    return [valueL, valueT];
};
OpenLayers.Util.isEquivalentUrl = function (url1, url2, options) {
    options = options || {};
    OpenLayers.Util.applyDefaults(options, {
        ignoreCase: true,
        ignorePort80: true,
        ignoreHash: true
    });
    var urlObj1 = OpenLayers.Util.createUrlObject(url1, options);
    var urlObj2 = OpenLayers.Util.createUrlObject(url2, options);
    for (var key in urlObj1) {
        if (options.test) {
            OpenLayers.Console.userError(key + "\n1:" + urlObj1[key] + "\n2:" + urlObj2[key]);
        }
        var val1 = urlObj1[key];
        var val2 = urlObj2[key];
        switch (key) {
        case "args":
            break;
        case "host":
        case "port":
        case "protocol":
            if ((val1 == "") || (val2 == "")) {
                break;
            }
        default:
            if ((key != "args") && (urlObj1[key] != urlObj2[key])) {
                return false;
            }
            break;
        }
    }
    for (var key in urlObj1.args) {
        if (urlObj1.args[key] != urlObj2.args[key]) {
            return false;
        }
        delete urlObj2.args[key];
    }
    for (var key in urlObj2.args) {
        return false;
    }
    return true;
};
OpenLayers.Util.createUrlObject = function (url, options) {
    options = options || {};
    var urlObject = {};
    if (options.ignoreCase) {
        url = url.toLowerCase();
    }
    var a = document.createElement('a');
    a.href = url;
    urlObject.host = a.host;
    var port = a.port;
    if (port.length <= 0) {
        var newHostLength = urlObject.host.length - (port.length);
        urlObject.host = urlObject.host.substring(0, newHostLength);
    }
    urlObject.protocol = a.protocol;
    urlObject.port = ((port == "80") && (options.ignorePort80)) ? "" : port;
    urlObject.hash = (options.ignoreHash) ? "" : a.hash;
    var queryString = a.search;
    if (!queryString) {
        var qMark = url.indexOf("?");
        queryString = (qMark != -1) ? url.substr(qMark) : "";
    }
    urlObject.args = OpenLayers.Util.getParameters(queryString);
    if (((urlObject.protocol == "file:") && (url.indexOf("file:") != -1)) || ((urlObject.protocol != "file:") && (urlObject.host != ""))) {
        urlObject.pathname = a.pathname;
        var qIndex = urlObject.pathname.indexOf("?");
        if (qIndex != -1) {
            urlObject.pathname = urlObject.pathname.substring(0, qIndex);
        }
    } else {
        var relStr = OpenLayers.Util.removeTail(url);
        var backs = 0;
        do {
            var index = relStr.indexOf("../");
            if (index == 0) {
                backs++;
                relStr = relStr.substr(3);
            } else if (index >= 0) {
                var prevChunk = relStr.substr(0, index - 1);
                var slash = prevChunk.indexOf("/");
                prevChunk = (slash != -1) ? prevChunk.substr(0, slash + 1) : "";
                var postChunk = relStr.substr(index + 3);
                relStr = prevChunk + postChunk;
            }
        } while (index != -1);
        var windowAnchor = document.createElement("a");
        var windowUrl = window.location.href;
        if (options.ignoreCase) {
            windowUrl = windowUrl.toLowerCase();
        }
        windowAnchor.href = windowUrl;
        urlObject.protocol = windowAnchor.protocol;
        var splitter = (windowAnchor.pathname.indexOf("/") != -1) ? "/" : "\\";
        var dirs = windowAnchor.pathname.split(splitter);
        dirs.pop();
        while ((backs > 0) && (dirs.length > 0)) {
            dirs.pop();
            backs--;
        }
        relStr = dirs.join("/") + "/" + relStr;
        urlObject.pathname = relStr;
    }
    if ((urlObject.protocol == "file:") || (urlObject.protocol == "")) {
        urlObject.host = "localhost";
    }
    return urlObject;
};
OpenLayers.Util.removeTail = function (url) {
    var head = null;
    var qMark = url.indexOf("?");
    var hashMark = url.indexOf("#");
    if (qMark == -1) {
        head = (hashMark != -1) ? url.substr(0, hashMark) : url;
    } else {
        head = (hashMark != -1) ? url.substr(0, Math.min(qMark, hashMark)) : url.substr(0, qMark);
    }
    return head;
};
OpenLayers.Util.getBrowserName = function () {
    var browserName = "";
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("opera") != -1) {
        browserName = "opera";
    } else if (ua.indexOf("msie") != -1) {
        browserName = "msie";
    } else if (ua.indexOf("safari") != -1) {
        browserName = "safari";
    } else if (ua.indexOf("mozilla") != -1) {
        if (ua.indexOf("firefox") != -1) {
            browserName = "firefox";
        } else {
            browserName = "mozilla";
        }
    }
    return browserName;
};
OpenLayers.Util.getRenderedDimensions = function (contentHTML, size, options) {
    var w, h;
    var container = document.createElement("div");
    container.style.overflow = "";
    container.style.position = "absolute";
    container.style.left = "-9999px";
    if (size) {
        if (size.w) {
            w = size.w;
            container.style.width = w + "px";
        } else if (size.h) {
            h = size.h;
            container.style.height = h + "px";
        }
    }
    if (options && options.displayClass) {
        container.className = options.displayClass;
    }
    var content = document.createElement("div");
    content.innerHTML = contentHTML;
    container.appendChild(content);
    document.body.appendChild(container);
    if (!w) {
        w = parseInt(content.scrollWidth);
        container.style.width = w + "px";
    }
    if (!h) {
        h = parseInt(content.scrollHeight);
    }
    container.removeChild(content);
    document.body.removeChild(container);
    return new OpenLayers.Size(w, h);
};
OpenLayers.Util.getScrollbarWidth = function () {
    var scrollbarWidth = OpenLayers.Util._scrollbarWidth;
    if (scrollbarWidth == null) {
        var scr = null;
        var inn = null;
        var wNoScroll = 0;
        var wScroll = 0;
        scr = document.createElement('div');
        scr.style.position = 'absolute';
        scr.style.top = '-1000px';
        scr.style.left = '-1000px';
        scr.style.width = '100px';
        scr.style.height = '50px';
        scr.style.overflow = 'hidden';
        inn = document.createElement('div');
        inn.style.width = '100%';
        inn.style.height = '200px';
        scr.appendChild(inn);
        document.body.appendChild(scr);
        wNoScroll = inn.offsetWidth;
        scr.style.overflow = 'scroll';
        wScroll = inn.offsetWidth;
        document.body.removeChild(document.body.lastChild);
        OpenLayers.Util._scrollbarWidth = (wNoScroll - wScroll);
        scrollbarWidth = OpenLayers.Util._scrollbarWidth;
    }
    return scrollbarWidth;
};
OpenLayers.Control = OpenLayers.Class({
    id: null,
    map: null,
    div: null,
    type: null,
    allowSelection: false,
    displayClass: "",
    title: "",
    active: null,
    handler: null,
    eventListeners: null,
    events: null,
    EVENT_TYPES: ["activate", "deactivate"],
    initialize: function (options) {
        this.displayClass = this.CLASS_NAME.replace("OpenLayers.", "ol").replace(/\./g, "");
        OpenLayers.Util.extend(this, options);
        this.events = new OpenLayers.Events(this, null, this.EVENT_TYPES);
        if (this.eventListeners instanceof Object) {
            this.events.on(this.eventListeners);
        }
        if (this.id == null) {
            this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
        }
    },
    destroy: function () {
        if (this.events) {
            if (this.eventListeners) {
                this.events.un(this.eventListeners);
            }
            this.events.destroy();
            this.events = null;
        }
        this.eventListeners = null;
        if (this.handler) {
            this.handler.destroy();
            this.handler = null;
        }
        if (this.handlers) {
            for (var key in this.handlers) {
                if (this.handlers.hasOwnProperty(key) && typeof this.handlers[key].destroy == "function") {
                    this.handlers[key].destroy();
                }
            }
            this.handlers = null;
        }
        if (this.map) {
            this.map.removeControl(this);
            this.map = null;
        }
    },
    setMap: function (map) {
        this.map = map;
        if (this.handler) {
            this.handler.setMap(map);
        }
    },
    draw: function (px) {
        if (this.div == null) {
            this.div = OpenLayers.Util.createDiv(this.id);
            this.div.className = this.displayClass;
            if (!this.allowSelection) {
                this.div.className += " olControlNoSelect";
                this.div.setAttribute("unselectable", "on", 0);
                this.div.onselectstart = function () {
                    return (false);
                };
            }
            if (this.title != "") {
                this.div.title = this.title;
            }
        }
        if (px != null) {
            this.position = px.clone();
        }
        this.moveTo(this.position);
        return this.div;
    },
    moveTo: function (px) {
        if ((px != null) && (this.div != null)) {
            this.div.style.left = px.x + "px";
            this.div.style.top = px.y + "px";
        }
    },
    activate: function () {
        if (this.active) {
            return false;
        }
        if (this.handler) {
            this.handler.activate();
        }
        this.active = true;
        this.events.triggerEvent("activate");
        return true;
    },
    deactivate: function () {
        if (this.active) {
            if (this.handler) {
                this.handler.deactivate();
            }
            this.active = false;
            this.events.triggerEvent("deactivate");
            return true;
        }
        return false;
    },
    CLASS_NAME: "OpenLayers.Control"
});
OpenLayers.Control.TYPE_BUTTON = 1;
OpenLayers.Control.TYPE_TOGGLE = 2;
OpenLayers.Control.TYPE_TOOL = 3;
OpenLayers.Event = {
    observers: false,
    KEY_BACKSPACE: 8,
    KEY_TAB: 9,
    KEY_RETURN: 13,
    KEY_ESC: 27,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    KEY_DELETE: 46,
    element: function (event) {
        return event.target || event.srcElement;
    },
    isLeftClick: function (event) {
        return (((event.which) && (event.which == 1)) || ((event.button) && (event.button == 1)));
    },
    isRightClick: function (event) {
        return (((event.which) && (event.which == 3)) || ((event.button) && (event.button == 2)));
    },
    stop: function (event, allowDefault) {
        if (!allowDefault) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    findElement: function (event, tagName) {
        var element = OpenLayers.Event.element(event);
        while (element.parentNode && (!element.tagName || (element.tagName.toUpperCase() != tagName.toUpperCase()))) {
            element = element.parentNode;
        }
        return element;
    },
    observe: function (elementParam, name, observer, useCapture) {
        var element = OpenLayers.Util.getElement(elementParam);
        useCapture = useCapture || false;
        if (name == 'keypress' && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || element.attachEvent)) {
            name = 'keydown';
        }
        if (!this.observers) {
            this.observers = {};
        }
        if (!element._eventCacheID) {
            var idPrefix = "eventCacheID_";
            if (element.id) {
                idPrefix = element.id + "_" + idPrefix;
            }
            element._eventCacheID = OpenLayers.Util.createUniqueID(idPrefix);
        }
        var cacheID = element._eventCacheID;
        if (!this.observers[cacheID]) {
            this.observers[cacheID] = [];
        }
        this.observers[cacheID].push({
            'element': element,
            'name': name,
            'observer': observer,
            'useCapture': useCapture
        });
        if (element.addEventListener) {
            element.addEventListener(name, observer, useCapture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + name, observer);
        }
    },
    stopObservingElement: function (elementParam) {
        var element = OpenLayers.Util.getElement(elementParam);
        var cacheID = element._eventCacheID;
        this._removeElementObservers(OpenLayers.Event.observers[cacheID]);
    },
    _removeElementObservers: function (elementObservers) {
        if (elementObservers) {
            for (var i = elementObservers.length - 1; i >= 0; i--) {
                var entry = elementObservers[i];
                var args = new Array(entry.element, entry.name, entry.observer, entry.useCapture);
                var removed = OpenLayers.Event.stopObserving.apply(this, args);
            }
        }
    },
    stopObserving: function (elementParam, name, observer, useCapture) {
        useCapture = useCapture || false;
        var element = OpenLayers.Util.getElement(elementParam);
        var cacheID = element._eventCacheID;
        if (name == 'keypress') {
            if (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || element.detachEvent) {
                name = 'keydown';
            }
        }
        var foundEntry = false;
        var elementObservers = OpenLayers.Event.observers[cacheID];
        if (elementObservers) {
            var i = 0;
            while (!foundEntry && i < elementObservers.length) {
                var cacheEntry = elementObservers[i];
                if ((cacheEntry.name == name) && (cacheEntry.observer == observer) && (cacheEntry.useCapture == useCapture)) {
                    elementObservers.splice(i, 1);
                    if (elementObservers.length == 0) {
                        delete OpenLayers.Event.observers[cacheID];
                    }
                    foundEntry = true;
                    break;
                }
                i++;
            }
        }
        if (foundEntry) {
            if (element.removeEventListener) {
                element.removeEventListener(name, observer, useCapture);
            } else if (element && element.detachEvent) {
                element.detachEvent('on' + name, observer);
            }
        }
        return foundEntry;
    },
    unloadCache: function () {
        if (OpenLayers.Event && OpenLayers.Event.observers) {
            for (var cacheID in OpenLayers.Event.observers) {
                var elementObservers = OpenLayers.Event.observers[cacheID];
                OpenLayers.Event._removeElementObservers.apply(this, [elementObservers]);
            }
            OpenLayers.Event.observers = false;
        }
    },
    CLASS_NAME: "OpenLayers.Event"
};
OpenLayers.Event.observe(window, 'unload', OpenLayers.Event.unloadCache, false);
if (window.Event) {
    OpenLayers.Util.applyDefaults(window.Event, OpenLayers.Event);
} else {
    var Event = OpenLayers.Event;
}
OpenLayers.Events = OpenLayers.Class({
    BROWSER_EVENTS: ["mouseover", "mouseout", "mousedown", "mouseup", "mousemove", "click", "dblclick", "rightclick", "dblrightclick", "resize", "focus", "blur"],
    listeners: null,
    object: null,
    element: null,
    eventTypes: null,
    eventHandler: null,
    fallThrough: null,
    includeXY: false,
    initialize: function (object, element, eventTypes, fallThrough, options) {
        OpenLayers.Util.extend(this, options);
        this.object = object;
        this.element = element;
        this.fallThrough = fallThrough;
        this.listeners = {};
        this.eventHandler = OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent, this);
        this.eventTypes = [];
        if (eventTypes != null) {
            for (var i = 0, len = eventTypes.length; i < len; i++) {
                this.addEventType(eventTypes[i]);
            }
        }
        if (this.element != null) {
            this.attachToElement(element);
        }
    },
    destroy: function () {
        if (this.element) {
            OpenLayers.Event.stopObservingElement(this.element);
        }
        this.element = null;
        this.listeners = null;
        this.object = null;
        this.eventTypes = null;
        this.fallThrough = null;
        this.eventHandler = null;
    },
    addEventType: function (eventName) {
        if (!this.listeners[eventName]) {
            this.eventTypes.push(eventName);
            this.listeners[eventName] = [];
        }
    },
    attachToElement: function (element) {
        for (var i = 0, len = this.BROWSER_EVENTS.length; i < len; i++) {
            var eventType = this.BROWSER_EVENTS[i];
            this.addEventType(eventType);
            OpenLayers.Event.observe(element, eventType, this.eventHandler);
        }
        OpenLayers.Event.observe(element, "dragstart", OpenLayers.Event.stop);
    },
    on: function (object) {
        for (var type in object) {
            if (type != "scope") {
                this.register(type, object.scope, object[type]);
            }
        }
    },
    register: function (type, obj, func) {
        if ((func != null) && (OpenLayers.Util.indexOf(this.eventTypes, type) != -1)) {
            if (obj == null) {
                obj = this.object;
            }
            var listeners = this.listeners[type];
            listeners.push({
                obj: obj,
                func: func
            });
        }
    },
    registerPriority: function (type, obj, func) {
        if (func != null) {
            if (obj == null) {
                obj = this.object;
            }
            var listeners = this.listeners[type];
            if (listeners != null) {
                listeners.unshift({
                    obj: obj,
                    func: func
                });
            }
        }
    },
    un: function (object) {
        for (var type in object) {
            if (type != "scope") {
                this.unregister(type, object.scope, object[type]);
            }
        }
    },
    unregister: function (type, obj, func) {
        if (obj == null) {
            obj = this.object;
        }
        var listeners = this.listeners[type];
        if (listeners != null) {
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i].obj == obj && listeners[i].func == func) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    },
    remove: function (type) {
        if (this.listeners[type] != null) {
            this.listeners[type] = [];
        }
    },
    triggerEvent: function (type, evt) {
        if (evt == null) {
            evt = {};
        }
        evt.object = this.object;
        evt.element = this.element;
        if (!evt.type) {
            evt.type = type;
        }
        var listeners = (this.listeners[type]) ? this.listeners[type].slice() : null;
        if ((listeners != null) && (listeners.length > 0)) {
            var continueChain;
            for (var i = 0, len = listeners.length; i < len; i++) {
                var callback = listeners[i];
                continueChain = callback.func.apply(callback.obj, [evt]);
                if ((continueChain != undefined) && (continueChain == false)) {
                    break;
                }
            }
            if (!this.fallThrough) {
                OpenLayers.Event.stop(evt, true);
            }
        }
        return continueChain;
    },
    handleBrowserEvent: function (evt) {
        if (this.includeXY) {
            evt.xy = this.getMousePosition(evt);
        }
        this.triggerEvent(evt.type, evt);
    },
    clearMouseCache: function () {
        this.element.scrolls = null;
        this.element.lefttop = null;
        this.element.offsets = null;
    },
    getMousePosition: function (evt) {
        if (!this.includeXY) {
            this.clearMouseCache();
        } else if (!this.element.hasScrollEvent) {
            OpenLayers.Event.observe(window, 'scroll', OpenLayers.Function.bind(this.clearMouseCache, this));
            this.element.hasScrollEvent = true;
        }
        if (!this.element.scrolls) {
            this.element.scrolls = [];
            this.element.scrolls[0] = (document.documentElement.scrollLeft || document.body.scrollLeft);
            this.element.scrolls[1] = (document.documentElement.scrollTop || document.body.scrollTop);
        }
        if (!this.element.lefttop) {
            this.element.lefttop = [];
            this.element.lefttop[0] = (document.documentElement.clientLeft || 0);
            this.element.lefttop[1] = (document.documentElement.clientTop || 0);
        }
        if (!this.element.offsets) {
            this.element.offsets = OpenLayers.Util.pagePosition(this.element);
            this.element.offsets[0] += this.element.scrolls[0];
            this.element.offsets[1] += this.element.scrolls[1];
        }
        return new OpenLayers.Pixel((evt.clientX + this.element.scrolls[0]) - this.element.offsets[0] - this.element.lefttop[0], (evt.clientY + this.element.scrolls[1]) - this.element.offsets[1] - this.element.lefttop[1]);
    },
    CLASS_NAME: "OpenLayers.Events"
});
OpenLayers.Handler = OpenLayers.Class({
    id: null,
    control: null,
    map: null,
    keyMask: null,
    active: false,
    evt: null,
    initialize: function (control, callbacks, options) {
        OpenLayers.Util.extend(this, options);
        this.control = control;
        this.callbacks = callbacks;
        if (control.map) {
            this.setMap(control.map);
        }
        OpenLayers.Util.extend(this, options);
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    },
    setMap: function (map) {
        this.map = map;
    },
    checkModifiers: function (evt) {
        if (this.keyMask == null) {
            return true;
        }
        var keyModifiers = (evt.shiftKey ? OpenLayers.Handler.MOD_SHIFT : 0) | (evt.ctrlKey ? OpenLayers.Handler.MOD_CTRL : 0) | (evt.altKey ? OpenLayers.Handler.MOD_ALT : 0);
        return (keyModifiers == this.keyMask);
    },
    activate: function () {
        if (this.active) {
            return false;
        }
        var events = OpenLayers.Events.prototype.BROWSER_EVENTS;
        for (var i = 0, len = events.length; i < len; i++) {
            if (this[events[i]]) {
                this.register(events[i], this[events[i]]);
            }
        }
        this.active = true;
        return true;
    },
    deactivate: function () {
        if (!this.active) {
            return false;
        }
        var events = OpenLayers.Events.prototype.BROWSER_EVENTS;
        for (var i = 0, len = events.length; i < len; i++) {
            if (this[events[i]]) {
                this.unregister(events[i], this[events[i]]);
            }
        }
        this.active = false;
        return true;
    },
    callback: function (name, args) {
        if (name && this.callbacks[name]) {
            this.callbacks[name].apply(this.control, args);
        }
    },
    register: function (name, method) {
        this.map.events.registerPriority(name, this, method);
        this.map.events.registerPriority(name, this, this.setEvent);
    },
    unregister: function (name, method) {
        this.map.events.unregister(name, this, method);
        this.map.events.unregister(name, this, this.setEvent);
    },
    setEvent: function (evt) {
        this.evt = evt;
        return true;
    },
    destroy: function () {
        this.deactivate();
        this.control = this.map = null;
    },
    CLASS_NAME: "OpenLayers.Handler"
});
OpenLayers.Handler.MOD_NONE = 0;
OpenLayers.Handler.MOD_SHIFT = 1;
OpenLayers.Handler.MOD_CTRL = 2;
OpenLayers.Handler.MOD_ALT = 4;
OpenLayers.Handler.Click = OpenLayers.Class(OpenLayers.Handler, {
    delay: 300,
    single: true,
    'double': false,
    pixelTolerance: 0,
    stopSingle: false,
    stopDouble: false,
    timerId: null,
    down: null,
    rightclickTimerId: null,
    initialize: function (control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
        if (this.pixelTolerance != null) {
            this.mousedown = function (evt) {
                this.down = evt.xy;
                return true;
            };
        }
    },
    mousedown: null,
    mouseup: function (evt) {
        var propagate = true;
        if (this.checkModifiers(evt) && this.control.handleRightClicks && OpenLayers.Event.isRightClick(evt)) {
            propagate = this.rightclick(evt);
        }
        return propagate;
    },
    rightclick: function (evt) {
        if (this.passesTolerance(evt)) {
            if (this.rightclickTimerId != null) {
                this.clearTimer();
                this.callback('dblrightclick', [evt]);
                return !this.stopDouble;
            } else {
                var clickEvent = this['double'] ? OpenLayers.Util.extend({}, evt) : this.callback('rightclick', [evt]);
                var delayedRightCall = OpenLayers.Function.bind(this.delayedRightCall, this, clickEvent);
                this.rightclickTimerId = window.setTimeout(delayedRightCall, this.delay);
            }
        }
        return !this.stopSingle;
    },
    delayedRightCall: function (evt) {
        this.rightclickTimerId = null;
        if (evt) {
            this.callback('rightclick', [evt]);
        }
        return !this.stopSingle;
    },
    dblclick: function (evt) {
        if (this.passesTolerance(evt)) {
            if (this["double"]) {
                this.callback('dblclick', [evt]);
            }
            this.clearTimer();
        }
        return !this.stopDouble;
    },
    click: function (evt) {
        if (this.passesTolerance(evt)) {
            if (this.timerId != null) {
                this.clearTimer();
            } else {
                var clickEvent = this.single ? OpenLayers.Util.extend({}, evt) : null;
                this.timerId = window.setTimeout(OpenLayers.Function.bind(this.delayedCall, this, clickEvent), this.delay);
            }
        }
        return !this.stopSingle;
    },
    passesTolerance: function (evt) {
        var passes = true;
        if (this.pixelTolerance != null && this.down) {
            var dpx = Math.sqrt(Math.pow(this.down.x - evt.xy.x, 2) + Math.pow(this.down.y - evt.xy.y, 2));
            if (dpx > this.pixelTolerance) {
                passes = false;
            }
        }
        return passes;
    },
    clearTimer: function () {
        if (this.timerId != null) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
    },
    delayedCall: function (evt) {
        this.timerId = null;
        if (evt) {
            this.callback('click', [evt]);
        }
    },
    deactivate: function () {
        var deactivated = false;
        if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            this.clearTimer();
            this.down = null;
            deactivated = true;
        }
        return deactivated;
    },
    CLASS_NAME: "OpenLayers.Handler.Click"
});
OpenLayers.Handler.Drag = OpenLayers.Class(OpenLayers.Handler, {
    started: false,
    stopDown: true,
    dragging: false,
    last: null,
    start: null,
    oldOnselectstart: null,
    interval: 0,
    timeoutId: null,
    initialize: function (control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    },
    down: function (evt) {},
    move: function (evt) {},
    up: function (evt) {},
    out: function (evt) {},
    mousedown: function (evt) {
        var propagate = true;
        this.dragging = false;
        if (this.checkModifiers(evt) && OpenLayers.Event.isLeftClick(evt)) {
            this.started = true;
            this.start = evt.xy;
            this.last = evt.xy;
            this.map.div.style.cursor = "move";
            this.down(evt);
            this.callback("down", [evt.xy]);
            OpenLayers.Event.stop(evt);
            if (!this.oldOnselectstart) {
                this.oldOnselectstart = (document.onselectstart) ? document.onselectstart : function () {
                    return true;
                };
                document.onselectstart = function () {
                    return false;
                };
            }
            propagate = !this.stopDown;
        } else {
            this.started = false;
            this.start = null;
            this.last = null;
        }
        return propagate;
    },
    mousemove: function (evt) {
        if (this.started && !this.timeoutId && (evt.xy.x != this.last.x || evt.xy.y != this.last.y)) {
            if (this.interval > 0) {
                this.timeoutId = setTimeout(OpenLayers.Function.bind(this.removeTimeout, this), this.interval);
            }
            this.dragging = true;
            this.move(evt);
            this.callback("move", [evt.xy]);
            if (!this.oldOnselectstart) {
                this.oldOnselectstart = document.onselectstart;
                document.onselectstart = function () {
                    return false;
                };
            }
            this.last = this.evt.xy;
        }
        return true;
    },
    removeTimeout: function () {
        this.timeoutId = null;
    },
    mouseup: function (evt) {
        if (this.started) {
            var dragged = (this.start != this.last);
            this.started = false;
            this.dragging = false;
            this.map.div.style.cursor = "";
            this.up(evt);
            this.callback("up", [evt.xy]);
            if (dragged) {
                this.callback("done", [evt.xy]);
            }
            document.onselectstart = this.oldOnselectstart;
        }
        return true;
    },
    mouseout: function (evt) {
        if (this.started && OpenLayers.Util.mouseLeft(evt, this.map.div)) {
            var dragged = (this.start != this.last);
            this.started = false;
            this.dragging = false;
            this.map.div.style.cursor = "";
            this.out(evt);
            this.callback("out", []);
            if (dragged) {
                this.callback("done", [evt.xy]);
            }
            if (document.onselectstart) {
                document.onselectstart = this.oldOnselectstart;
            }
        }
        return true;
    },
    click: function (evt) {
        return (this.start == this.last);
    },
    activate: function () {
        var activated = false;
        if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
            this.dragging = false;
            activated = true;
        }
        return activated;
    },
    deactivate: function () {
        var deactivated = false;
        if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            this.started = false;
            this.dragging = false;
            this.start = null;
            this.last = null;
            deactivated = true;
        }
        return deactivated;
    },
    CLASS_NAME: "OpenLayers.Handler.Drag"
});
OpenLayers.Handler.Box = OpenLayers.Class(OpenLayers.Handler, {
    dragHandler: null,
    boxDivClassName: 'olHandlerBoxZoomBox',
    boxCharacteristics: null,
    initialize: function (control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
        var callbacks = {
            "down": this.startBox,
            "move": this.moveBox,
            "out": this.removeBox,
            "up": this.endBox
        };
        this.dragHandler = new OpenLayers.Handler.Drag(this, callbacks, {
            keyMask: this.keyMask
        });
    },
    setMap: function (map) {
        OpenLayers.Handler.prototype.setMap.apply(this, arguments);
        if (this.dragHandler) {
            this.dragHandler.setMap(map);
        }
    },
    startBox: function (xy) {
        this.zoomBox = OpenLayers.Util.createDiv('zoomBox', this.dragHandler.start);
        this.zoomBox.className = this.boxDivClassName;
        this.zoomBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
        this.map.viewPortDiv.appendChild(this.zoomBox);
        this.map.div.style.cursor = "crosshair";
    },
    moveBox: function (xy) {
        var startX = this.dragHandler.start.x;
        var startY = this.dragHandler.start.y;
        var deltaX = Math.abs(startX - xy.x);
        var deltaY = Math.abs(startY - xy.y);
        this.zoomBox.style.width = Math.max(1, deltaX) + "px";
        this.zoomBox.style.height = Math.max(1, deltaY) + "px";
        this.zoomBox.style.left = xy.x < startX ? xy.x + "px" : startX + "px";
        this.zoomBox.style.top = xy.y < startY ? xy.y + "px" : startY + "px";
        var box = this.getBoxCharacteristics(deltaX, deltaY);
        if (box.newBoxModel) {
            if (xy.x > startX) {
                this.zoomBox.style.width = Math.max(1, deltaX - box.xOffset) + "px";
            }
            if (xy.y > startY) {
                this.zoomBox.style.height = Math.max(1, deltaY - box.yOffset) + "px";
            }
        }
    },
    endBox: function (end) {
        var result;
        if (Math.abs(this.dragHandler.start.x - end.x) > 5 || Math.abs(this.dragHandler.start.y - end.y) > 5) {
            var start = this.dragHandler.start;
            var top = Math.min(start.y, end.y);
            var bottom = Math.max(start.y, end.y);
            var left = Math.min(start.x, end.x);
            var right = Math.max(start.x, end.x);
            result = new OpenLayers.Bounds(left, bottom, right, top);
        } else {
            result = this.dragHandler.start.clone();
        }
        this.removeBox();
        this.map.div.style.cursor = "";
        this.callback("done", [result]);
    },
    removeBox: function () {
        this.map.viewPortDiv.removeChild(this.zoomBox);
        this.zoomBox = null;
        this.boxCharacteristics = null;
    },
    activate: function () {
        if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
            this.dragHandler.activate();
            return true;
        } else {
            return false;
        }
    },
    deactivate: function () {
        if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            this.dragHandler.deactivate();
            return true;
        } else {
            return false;
        }
    },
    getBoxCharacteristics: function (dx, dy) {
        if (!this.boxCharacteristics) {
            var xOffset = parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-left-width")) + parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-right-width")) + 1;
            var yOffset = parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-top-width")) + parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-bottom-width")) + 1;
            var newBoxModel = OpenLayers.Util.getBrowserName() == "msie" ? document.compatMode != "BackCompat" : true;
            this.boxCharacteristics = {
                xOffset: xOffset,
                yOffset: yOffset,
                newBoxModel: newBoxModel
            };
        }
        return this.boxCharacteristics;
    },
    CLASS_NAME: "OpenLayers.Handler.Box"
});
OpenLayers.Handler.Hover = OpenLayers.Class(OpenLayers.Handler, {
    delay: 500,
    pixelTolerance: null,
    stopMove: false,
    px: null,
    timerId: null,
    initialize: function (control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    },
    mousemove: function (evt) {
        if (this.passesTolerance(evt.xy)) {
            this.clearTimer();
            this.callback('move', [evt]);
            this.px = evt.xy;
            evt = OpenLayers.Util.extend({}, evt);
            this.timerId = window.setTimeout(OpenLayers.Function.bind(this.delayedCall, this, evt), this.delay);
        }
        return !this.stopMove;
    },
    mouseout: function (evt) {
        if (OpenLayers.Util.mouseLeft(evt, this.map.div)) {
            this.clearTimer();
            this.callback('move', [evt]);
        }
        return true;
    },
    passesTolerance: function (px) {
        var passes = true;
        if (this.pixelTolerance && this.px) {
            var dpx = Math.sqrt(Math.pow(this.px.x - px.x, 2) + Math.pow(this.px.y - px.y, 2));
            if (dpx < this.pixelTolerance) {
                passes = false;
            }
        }
        return passes;
    },
    clearTimer: function () {
        if (this.timerId != null) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
    },
    delayedCall: function (evt) {
        this.callback('pause', [evt]);
    },
    deactivate: function () {
        var deactivated = false;
        if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            this.clearTimer();
            deactivated = true;
        }
        return deactivated;
    },
    CLASS_NAME: "OpenLayers.Handler.Hover"
});
OpenLayers.Protocol = OpenLayers.Class({
    format: null,
    options: null,
    autoDestroy: true,
    initialize: function (options) {
        options = options || {};
        OpenLayers.Util.extend(this, options);
        this.options = options;
    },
    destroy: function () {
        this.options = null;
        this.format = null;
    },
    read: function () {},
    create: function () {},
    update: function () {},
    "delete": function () {},
    commit: function () {},
    CLASS_NAME: "OpenLayers.Protocol"
});
OpenLayers.Protocol.Response = OpenLayers.Class({
    code: null,
    requestType: null,
    last: true,
    features: null,
    reqFeatures: null,
    priv: null,
    initialize: function (options) {
        OpenLayers.Util.extend(this, options);
    },
    success: function () {
        return this.code > 0;
    },
    CLASS_NAME: "OpenLayers.Protocol.Response"
});
OpenLayers.Protocol.Response.SUCCESS = 1;
OpenLayers.Protocol.Response.FAILURE = 0;
OpenLayers.Protocol.WFS = function (options) {
    options = OpenLayers.Util.applyDefaults(options, OpenLayers.Protocol.WFS.DEFAULTS);
    var cls = OpenLayers.Protocol.WFS["v" + options.version.replace(/\./g, "_")];
    if (!cls) {
        throw "Unsupported WFS version: " + options.version;
    }
    return new cls(options);
}
OpenLayers.Protocol.WFS.DEFAULTS = {
    "version": "1.0.0"
};
OpenLayers.Protocol.WFS.v1 = new OpenLayers.Class(OpenLayers.Protocol, {
    version: null,
    srsName: "EPSG:4326",
    featureType: null,
    featureNS: null,
    geometryName: "the_geom",
    schema: null,
    featurePrefix: "feature",
    formatOptions: null,
    initialize: function (options) {
        OpenLayers.Protocol.prototype.initialize.apply(this, [options]);
        if (!options.format) {
            this.format = OpenLayers.Format.WFST(OpenLayers.Util.extend({
                version: this.version,
                featureType: this.featureType,
                featureNS: this.featureNS,
                featurePrefix: this.featurePrefix,
                geometryName: this.geometryName,
                srsName: this.srsName,
                schema: this.schema
            }, this.formatOptions));
        }
        var readNode = this.format.readNode;
        this.format.readNode = function (node, obj) {
            if (!this.featureNS && node.prefix == this.featurePrefix) {
                this.featureNS = node.namespaceURI;
                this.setNamespace("feature", this.featureNS);
            }
            return readNode.apply(this, arguments);
        }
    },
    destroy: function () {
        if (this.options && !this.options.format) {
            this.format.destroy();
        }
        this.format = null;
        OpenLayers.Protocol.prototype.destroy.apply(this);
    },
    createCallback: function (method, response, options) {
        return OpenLayers.Function.bind(function () {
            method.apply(this, [response, options]);
        }, this);
    },
    read: function (options) {
        options = OpenLayers.Util.extend({}, options);
        OpenLayers.Util.applyDefaults(options, this.options || {});
        var response = new OpenLayers.Protocol.Response({
            requestType: "read"
        });
        var data = OpenLayers.Format.XML.prototype.write.apply(this.format, [this.format.writeNode("wfs:GetFeature", options)]);
        response.priv = OpenLayers.Request.POST({
            url: options.url,
            callback: this.createCallback(this.handleRead, response, options),
            params: options.params,
            headers: options.headers,
            data: data
        });
        return response;
    },
    handleRead: function (response, options) {
        if (options.callback) {
            var request = response.priv;
            if (request.status >= 200 && request.status < 300) {
                response.features = this.parseFeatures(request);
                response.code = OpenLayers.Protocol.Response.SUCCESS;
            } else {
                response.code = OpenLayers.Protocol.Response.FAILURE;
            }
            options.callback.call(options.scope, response);
        };
    },
    parseFeatures: function (request) {
        var doc = request.responseXML;
        if (!doc || !doc.documentElement) {
            doc = request.responseText;
        }
        if (!doc || doc.length <= 0) {
            return null;
        }
        return this.format.read(doc);
    },
    commit: function (features, options) {
        options = OpenLayers.Util.extend({}, options);
        OpenLayers.Util.applyDefaults(options, this.options);
        var response = new OpenLayers.Protocol.Response({
            requestType: "commit",
            reqFeatures: features
        });
        response.priv = OpenLayers.Request.POST({
            url: options.url,
            data: this.format.write(features, options),
            callback: this.createCallback(this.handleCommit, response, options)
        });
        return response;
    },
    handleCommit: function (response, options) {
        if (options.callback) {
            var request = response.priv;
            var data = request.responseXML;
            if (!data || !data.documentElement) {
                data = request.responseText;
            }
            var obj = this.format.read(data) || {};
            response.insertIds = obj.insertIds || [];
            response.code = (obj.success) ? OpenLayers.Protocol.Response.SUCCESS : OpenLayers.Protocol.Response.FAILURE;
            options.callback.call(options.scope, response);
        }
    },
    filterDelete: function (filter, options) {
        options = OpenLayers.Util.extend({}, options);
        OpenLayers.Util.applyDefaults(options, this.options);
        var response = new OpenLayers.Protocol.Response({
            requestType: "commit"
        });
        var root = this.format.createElementNSPlus("wfs:Transaction", {
            attributes: {
                service: "WFS",
                version: this.version
            }
        });
        var deleteNode = this.format.createElementNSPlus("wfs:Delete", {
            attributes: {
                typeName: (options.featureNS ? this.featurePrefix + ":" : "") + options.featureType
            }
        });
        if (options.featureNS) {
            deleteNode.setAttribute("xmlns:" + this.featurePrefix, options.featureNS);
        }
        var filterNode = this.format.writeNode("ogc:Filter", filter);
        deleteNode.appendChild(filterNode);
        root.appendChild(deleteNode);
        var data = OpenLayers.Format.XML.prototype.write.apply(this.format, [root]);
        return OpenLayers.Request.POST({
            url: this.url,
            callback: options.callback || function () {},
            data: data
        });
    },
    CLASS_NAME: "OpenLayers.Protocol.WFS.v1"
});
OpenLayers.Format = OpenLayers.Class({
    options: null,
    externalProjection: null,
    internalProjection: null,
    initialize: function (options) {
        OpenLayers.Util.extend(this, options);
        this.options = options;
    },
    destroy: function () {},
    read: function (data) {
        OpenLayers.Console.userError(OpenLayers.i18n("readNotImplemented"));
    },
    write: function (object) {
        OpenLayers.Console.userError(OpenLayers.i18n("writeNotImplemented"));
    },
    CLASS_NAME: "OpenLayers.Format"
});
OpenLayers.Format.XML = OpenLayers.Class(OpenLayers.Format, {
    namespaces: null,
    namespaceAlias: null,
    defaultPrefix: null,
    readers: {},
    writers: {},
    xmldom: null,
    initialize: function (options) {
        if (window.ActiveXObject) {
            this.xmldom = new ActiveXObject("Microsoft.XMLDOM");
        }
        OpenLayers.Format.prototype.initialize.apply(this, [options]);
        this.namespaces = OpenLayers.Util.extend({}, this.namespaces);
        this.namespaceAlias = {};
        for (var alias in this.namespaces) {
            this.namespaceAlias[this.namespaces[alias]] = alias;
        }
    },
    destroy: function () {
        this.xmldom = null;
        OpenLayers.Format.prototype.destroy.apply(this, arguments);
    },
    setNamespace: function (alias, uri) {
        this.namespaces[alias] = uri;
        this.namespaceAlias[uri] = alias;
    },
    read: function (text) {
        var index = text.indexOf('<');
        if (index > 0) {
            text = text.substring(index);
        }
        var node = OpenLayers.Util.Try(OpenLayers.Function.bind((function () {
            var xmldom;
            if (window.ActiveXObject && !this.xmldom) {
                xmldom = new ActiveXObject("Microsoft.XMLDOM");
            } else {
                xmldom = this.xmldom;
            }
            xmldom.loadXML(text);
            return xmldom;
        }), this), function () {
            return new DOMParser().parseFromString(text, 'text/xml');
        }, function () {
            var req = new XMLHttpRequest();
            req.open("GET", "data:" + "text/xml" + ";charset=utf-8," + encodeURIComponent(text), false);
            if (req.overrideMimeType) {
                req.overrideMimeType("text/xml");
            }
            req.send(null);
            return req.responseXML;
        });
        return node;
    },
    write: function (node) {
        var data;
        if (this.xmldom) {
            data = node.xml;
        } else {
            var serializer = new XMLSerializer();
            if (node.nodeType == 1) {
                var doc = document.implementation.createDocument("", "", null);
                if (doc.importNode) {
                    node = doc.importNode(node, true);
                }
                doc.appendChild(node);
                data = serializer.serializeToString(doc);
            } else {
                data = serializer.serializeToString(node);
            }
        }
        return data;
    },
    createElementNS: function (uri, name) {
        var element;
        if (this.xmldom) {
            if (typeof uri == "string") {
                element = this.xmldom.createNode(1, name, uri);
            } else {
                element = this.xmldom.createNode(1, name, "");
            }
        } else {
            element = document.createElementNS(uri, name);
        }
        return element;
    },
    createTextNode: function (text) {
        var node;
        if (this.xmldom) {
            node = this.xmldom.createTextNode(text);
        } else {
            node = document.createTextNode(text);
        }
        return node;
    },
    getElementsByTagNameNS: function (node, uri, name) {
        var elements = [];
        if (node.getElementsByTagNameNS) {
            elements = node.getElementsByTagNameNS(uri, name);
        } else {
            var allNodes = node.getElementsByTagName("*");
            var potentialNode, fullName;
            for (var i = 0, len = allNodes.length; i < len; ++i) {
                potentialNode = allNodes[i];
                fullName = (potentialNode.prefix) ? (potentialNode.prefix + ":" + name) : name;
                if ((name == "*") || (fullName == potentialNode.nodeName)) {
                    if ((uri == "*") || (uri == potentialNode.namespaceURI)) {
                        elements.push(potentialNode);
                    }
                }
            }
        }
        return elements;
    },
    getAttributeNodeNS: function (node, uri, name) {
        var attributeNode = null;
        if (node.getAttributeNodeNS) {
            attributeNode = node.getAttributeNodeNS(uri, name);
        } else {
            var attributes = node.attributes;
            var potentialNode, fullName;
            for (var i = 0, len = attributes.length; i < len; ++i) {
                potentialNode = attributes[i];
                if (potentialNode.namespaceURI == uri) {
                    fullName = (potentialNode.prefix) ? (potentialNode.prefix + ":" + name) : name;
                    if (fullName == potentialNode.nodeName) {
                        attributeNode = potentialNode;
                        break;
                    }
                }
            }
        }
        return attributeNode;
    },
    getAttributeNS: function (node, uri, name) {
        var attributeValue = "";
        if (node.getAttributeNS) {
            attributeValue = node.getAttributeNS(uri, name) || "";
        } else {
            var attributeNode = this.getAttributeNodeNS(node, uri, name);
            if (attributeNode) {
                attributeValue = attributeNode.nodeValue;
            }
        }
        return attributeValue;
    },
    getChildValue: function (node, def) {
        var value = def || "";
        if (node) {
            var child = node.firstChild;
            if (child) {
                value = child.nodeValue || value;
            }
        }
        return value;
    },
    numericIf: function (value) {
        return isNaN(value) ? value : parseFloat(value);
    },
    concatChildValues: function (node, def) {
        var value = "";
        var child = node.firstChild;
        var childValue;
        while (child) {
            childValue = child.nodeValue;
            if (childValue) {
                value += childValue;
            }
            child = child.nextSibling;
        }
        if (value == "" && def != undefined) {
            value = def;
        }
        return value;
    },
    hasAttributeNS: function (node, uri, name) {
        var found = false;
        if (node.hasAttributeNS) {
            found = node.hasAttributeNS(uri, name);
        } else {
            found = !! this.getAttributeNodeNS(node, uri, name);
        }
        return found;
    },
    setAttributeNS: function (node, uri, name, value) {
        if (node.setAttributeNS) {
            node.setAttributeNS(uri, name, value);
        } else {
            if (this.xmldom) {
                if (uri) {
                    var attribute = node.ownerDocument.createNode(2, name, uri);
                    attribute.nodeValue = value;
                    node.setAttributeNode(attribute);
                } else {
                    node.setAttribute(name, value);
                }
            } else {
                throw "setAttributeNS not implemented";
            }
        }
    },
    createElementNSPlus: function (name, options) {
        options = options || {};
        var loc = name.indexOf(":");
        var uri = options.uri || this.namespaces[options.prefix];
        if (!uri) {
            loc = name.indexOf(":");
            uri = this.namespaces[name.substring(0, loc)];
        }
        if (!uri) {
            uri = this.namespaces[this.defaultPrefix];
        }
        var node = this.createElementNS(uri, name);
        if (options.attributes) {
            this.setAttributes(node, options.attributes);
        }
        if (options.value != null) {
            node.appendChild(this.createTextNode(options.value));
        }
        return node;
    },
    setAttributes: function (node, obj) {
        var value, loc, alias, uri;
        for (var name in obj) {
            if (obj[name] != null && obj[name].toString) {
                value = obj[name].toString();
                uri = this.namespaces[name.substring(0, name.indexOf(":"))] || null;
                this.setAttributeNS(node, uri, name, value);
            }
        }
    },
    readNode: function (node, obj) {
        if (!obj) {
            obj = {};
        }
        var group = this.readers[this.namespaceAlias[node.namespaceURI]];
        if (group) {
            var local = node.localName || node.nodeName.split(":").pop();
            var reader = group[local] || group["*"];
            if (reader) {
                reader.apply(this, [node, obj]);
            }
        }
        return obj;
    },
    readChildNodes: function (node, obj) {
        if (!obj) {
            obj = {};
        }
        var children = node.childNodes;
        var child;
        for (var i = 0, len = children.length; i < len; ++i) {
            child = children[i];
            if (child.nodeType == 1) {
                this.readNode(child, obj);
            }
        }
        return obj;
    },
    writeNode: function (name, obj, parent) {
        var prefix, local;
        var split = name.indexOf(":");
        if (split > 0) {
            prefix = name.substring(0, split);
            local = name.substring(split + 1);
        } else {
            if (parent) {
                prefix = this.namespaceAlias[parent.namespaceURI];
            } else {
                prefix = this.defaultPrefix;
            }
            local = name;
        }
        var child = this.writers[prefix][local].apply(this, [obj]);
        if (parent) {
            parent.appendChild(child);
        }
        return child;
    },
    CLASS_NAME: "OpenLayers.Format.XML"
});
OpenLayers.Format.WFST = function (options) {
    options = OpenLayers.Util.applyDefaults(options, OpenLayers.Format.WFST.DEFAULTS);
    var cls = OpenLayers.Format.WFST["v" + options.version.replace(/\./g, "_")];
    if (!cls) {
        throw "Unsupported WFST version: " + options.version;
    }
    return new cls(options);
}
OpenLayers.Format.WFST.DEFAULTS = {
    "version": "1.0.0"
};
OpenLayers.Format.WFST.v1 = OpenLayers.Class(OpenLayers.Format.XML, {
    namespaces: {
        xlink: "http://www.w3.org/1999/xlink",
        xsi: "http://www.w3.org/2001/XMLSchema-instance",
        wfs: "http://www.opengis.net/wfs",
        gml: "http://www.opengis.net/gml",
        ogc: "http://www.opengis.net/ogc"
    },
    defaultPrefix: "wfs",
    version: null,
    schemaLocations: null,
    srsName: null,
    extractAttributes: true,
    xy: true,
    stateName: null,
    initialize: function (options) {
        if (options.featureNS) {
            this.namespaces = OpenLayers.Util.extend({
                feature: options.featureNS
            }, OpenLayers.Format.WFST.v1.prototype.namespaces);
        }
        this.stateName = {};
        this.stateName[OpenLayers.State.INSERT] = "wfs:Insert";
        this.stateName[OpenLayers.State.UPDATE] = "wfs:Update";
        this.stateName[OpenLayers.State.DELETE] = "wfs:Delete";
        var filterProto = OpenLayers.Format.Filter.v1.prototype;
        var gmlProto = OpenLayers.Format.GML.Base.prototype;
        OpenLayers.Util.extend(this, {
            readOgcExpression: filterProto.readOgcExpression,
            getFilterType: filterProto.getFilterType,
            filterMap: filterProto.filterMap,
            regExes: gmlProto.regExes
        });
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    },
    getSrsName: function (feature, options) {
        var srsName = options && options.srsName;
        if (!srsName) {
            if (feature && feature.layer) {
                srsName = feature.layer.projection.getCode();
            } else {
                srsName = this.srsName;
            }
        }
        return srsName;
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        if (data && data.nodeType == 9) {
            data = data.documentElement;
        }
        var obj = {};
        this.readNode(data, obj);
        if (obj.features) {
            obj = obj.features;
        }
        return obj;
    },
    readers: {
        "wfs": {
            "FeatureCollection": function (node, obj) {
                obj.features = [];
                this.readChildNodes(node, obj);
            }
        }
    },
    write: function (features) {
        var node = this.writeNode("wfs:Transaction", features);
        var value = this.schemaLocationAttr();
        if (value) {
            this.setAttributeNS(node, this.namespaces["xsi"], "xsi:schemaLocation", value)
        }
        return OpenLayers.Format.XML.prototype.write.apply(this, [node]);
    },
    writers: {
        "wfs": {
            "GetFeature": function (options) {
                var node = this.createElementNSPlus("wfs:GetFeature", {
                    attributes: {
                        service: "WFS",
                        version: this.version,
                        maxFeatures: options && options.maxFeatures,
                        "xsi:schemaLocation": this.schemaLocationAttr(options)
                    }
                });
                this.writeNode("Query", options, node);
                return node;
            },
            "Query": function (options) {
                options = OpenLayers.Util.extend({
                    featureNS: this.featureNS,
                    featurePrefix: this.featurePrefix,
                    featureType: this.featureType,
                    srsName: this.srsName
                }, options);
                var node = this.createElementNSPlus("wfs:Query", {
                    attributes: {
                        typeName: (options.featureNS ? options.featurePrefix + ":" : "") + options.featureType,
                        srsName: options.srsName
                    }
                });
                if (options.featureNS) {
                    node.setAttribute("xmlns:" + options.featurePrefix, options.featureNS);
                }
                if (options.filter) {
                    this.setFilterProperty(options.filter);
                    this.writeNode("ogc:Filter", options.filter, node);
                }
                return node;
            },
            "Transaction": function (features) {
                var node = this.createElementNSPlus("wfs:Transaction", {
                    attributes: {
                        service: "WFS",
                        version: this.version
                    }
                });
                if (features) {
                    var name, feature;
                    for (var i = 0, len = features.length; i < len; ++i) {
                        feature = features[i];
                        name = this.stateName[feature.state];
                        if (name) {
                            this.writeNode(name, feature, node);
                        }
                    }
                }
                return node;
            },
            "Insert": function (feature) {
                var node = this.createElementNSPlus("wfs:Insert");
                this.srsName = this.getSrsName(feature);
                this.writeNode("feature:_typeName", feature, node);
                return node;
            },
            "Update": function (feature) {
                var node = this.createElementNSPlus("wfs:Update", {
                    attributes: {
                        typeName: (this.featureNS ? this.featurePrefix + ":" : "") + this.featureType
                    }
                });
                if (this.featureNS) {
                    node.setAttribute("xmlns:" + this.featurePrefix, this.featureNS);
                }
                this.writeNode("Property", {
                    name: this.geometryName,
                    value: feature
                }, node);
                for (var key in feature.attributes) {
                    this.writeNode("Property", {
                        name: key,
                        value: feature.attributes[key]
                    }, node);
                }
                this.writeNode("ogc:Filter", new OpenLayers.Filter.FeatureId({
                    fids: [feature.fid]
                }), node);
                return node;
            },
            "Property": function (obj) {
                var node = this.createElementNSPlus("wfs:Property");
                this.writeNode("Name", obj.name, node);
                this.writeNode("Value", obj.value, node);
                return node;
            },
            "Name": function (name) {
                return this.createElementNSPlus("wfs:Name", {
                    value: name
                });
            },
            "Value": function (obj) {
                var node;
                if (obj instanceof OpenLayers.Feature.Vector) {
                    node = this.createElementNSPlus("wfs:Value");
                    this.srsName = this.getSrsName(obj);
                    var geom = this.writeNode("feature:_geometry", obj.geometry).firstChild;
                    node.appendChild(geom);
                } else {
                    node = this.createElementNSPlus("wfs:Value", {
                        value: obj
                    });
                }
                return node;
            },
            "Delete": function (feature) {
                var node = this.createElementNSPlus("wfs:Delete", {
                    attributes: {
                        typeName: (this.featureNS ? this.featurePrefix + ":" : "") + this.featureType
                    }
                });
                if (this.featureNS) {
                    node.setAttribute("xmlns:" + this.featurePrefix, this.featureNS);
                }
                this.writeNode("ogc:Filter", new OpenLayers.Filter.FeatureId({
                    fids: [feature.fid]
                }), node);
                return node;
            }
        }
    },
    schemaLocationAttr: function (options) {
        options = OpenLayers.Util.extend({
            featurePrefix: this.featurePrefix,
            schema: this.schema
        }, options);
        var schemaLocations = OpenLayers.Util.extend({}, this.schemaLocations);
        if (options.schema) {
            schemaLocations[options.featurePrefix] = options.schema;
        }
        var parts = [];
        var uri;
        for (var key in schemaLocations) {
            uri = this.namespaces[key];
            if (uri) {
                parts.push(uri + " " + schemaLocations[key]);
            }
        }
        var value = parts.join(" ") || undefined;
        return value;
    },
    setFilterProperty: function (filter) {
        if (filter.filters) {
            for (var i = 0, len = filter.filters.length; i < len; ++i) {
                this.setFilterProperty(filter.filters[i]);
            }
        } else {
            if (filter instanceof OpenLayers.Filter.Spatial) {
                filter.property = this.geometryName;
            }
        }
    },
    CLASS_NAME: "OpenLayers.Format.WFST.v1"
});
OpenLayers.Icon = OpenLayers.Class({
    url: null,
    size: null,
    offset: null,
    calculateOffset: null,
    imageDiv: null,
    px: null,
    initialize: function (url, size, offset, calculateOffset) {
        this.url = url;
        this.size = (size) ? size : new OpenLayers.Size(20, 20);
        this.offset = offset ? offset : new OpenLayers.Pixel(-(this.size.w / 2), - (this.size.h / 2));
        this.calculateOffset = calculateOffset;
        var id = OpenLayers.Util.createUniqueID("OL_Icon_");
        this.imageDiv = OpenLayers.Util.createAlphaImageDiv(id);
    },
    destroy: function () {
        OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);
        this.imageDiv.innerHTML = "";
        this.imageDiv = null;
    },
    clone: function () {
        return new OpenLayers.Icon(this.url, this.size, this.offset, this.calculateOffset);
    },
    setSize: function (size) {
        if (size != null) {
            this.size = size;
        }
        this.draw();
    },
    setUrl: function (url) {
        if (url != null) {
            this.url = url;
        }
        this.draw();
    },
    draw: function (px) {
        OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv, null, null, this.size, this.url, "absolute");
        this.moveTo(px);
        return this.imageDiv;
    },
    setOpacity: function (opacity) {
        OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv, null, null, null, null, null, null, null, opacity);
    },
    moveTo: function (px) {
        if (px != null) {
            this.px = px;
        }
        if (this.imageDiv != null) {
            if (this.px == null) {
                this.display(false);
            } else {
                if (this.calculateOffset) {
                    this.offset = this.calculateOffset(this.size);
                }
                var offsetPx = this.px.offset(this.offset);
                OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv, null, offsetPx);
            }
        }
    },
    display: function (display) {
        this.imageDiv.style.display = (display) ? "" : "none";
    },
    isDrawn: function () {
        var isDrawn = (this.imageDiv && this.imageDiv.parentNode && (this.imageDiv.parentNode.nodeType != 11));
        return isDrawn;
    },
    CLASS_NAME: "OpenLayers.Icon"
});
OpenLayers.Marker = OpenLayers.Class({
    icon: null,
    lonlat: null,
    events: null,
    map: null,
    initialize: function (lonlat, icon) {
        this.lonlat = lonlat;
        var newIcon = (icon) ? icon : OpenLayers.Marker.defaultIcon();
        if (this.icon == null) {
            this.icon = newIcon;
        } else {
            this.icon.url = newIcon.url;
            this.icon.size = newIcon.size;
            this.icon.offset = newIcon.offset;
            this.icon.calculateOffset = newIcon.calculateOffset;
        }
        this.events = new OpenLayers.Events(this, this.icon.imageDiv, null);
    },
    destroy: function () {
        this.map = null;
        this.events.destroy();
        this.events = null;
        if (this.icon != null) {
            this.icon.destroy();
            this.icon = null;
        }
    },
    draw: function (px) {
        return this.icon.draw(px);
    },
    moveTo: function (px) {
        if ((px != null) && (this.icon != null)) {
            this.icon.moveTo(px);
        }
        this.lonlat = this.map.getLonLatFromLayerPx(px);
    },
    isDrawn: function () {
        var isDrawn = (this.icon && this.icon.isDrawn());
        return isDrawn;
    },
    onScreen: function () {
        var onScreen = false;
        if (this.map) {
            var screenBounds = this.map.getExtent();
            onScreen = screenBounds.containsLonLat(this.lonlat);
        }
        return onScreen;
    },
    inflate: function (inflate) {
        if (this.icon) {
            var newSize = new OpenLayers.Size(this.icon.size.w * inflate, this.icon.size.h * inflate);
            this.icon.setSize(newSize);
        }
    },
    setOpacity: function (opacity) {
        this.icon.setOpacity(opacity);
    },
    setUrl: function (url) {
        this.icon.setUrl(url);
    },
    display: function (display) {
        this.icon.display(display);
    },
    CLASS_NAME: "OpenLayers.Marker"
});
OpenLayers.Marker.defaultIcon = function () {
    var url = OpenLayers.Util.getImagesLocation() + "marker.png";
    var size = new OpenLayers.Size(21, 25);
    var calculateOffset = function (size) {
        return new OpenLayers.Pixel(-(size.w / 2), - size.h);
    };
    return new OpenLayers.Icon(url, size, null, calculateOffset);
};
OpenLayers.Popup = OpenLayers.Class({
    events: null,
    id: "",
    lonlat: null,
    div: null,
    contentSize: null,
    size: null,
    contentHTML: null,
    backgroundColor: "",
    opacity: "",
    border: "",
    contentDiv: null,
    groupDiv: null,
    closeDiv: null,
    autoSize: false,
    minSize: null,
    maxSize: null,
    displayClass: "olPopup",
    contentDisplayClass: "olPopupContent",
    padding: 0,
    fixPadding: function () {
        if (typeof this.padding == "number") {
            this.padding = new OpenLayers.Bounds(this.padding, this.padding, this.padding, this.padding);
        }
    },
    panMapIfOutOfView: false,
    map: null,
    initialize: function (id, lonlat, contentSize, contentHTML, closeBox, closeBoxCallback) {
        if (id == null) {
            id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
        }
        this.id = id;
        this.lonlat = lonlat;
        this.contentSize = (contentSize != null) ? contentSize : new OpenLayers.Size(OpenLayers.Popup.WIDTH, OpenLayers.Popup.HEIGHT);
        if (contentHTML != null) {
            this.contentHTML = contentHTML;
        }
        this.backgroundColor = OpenLayers.Popup.COLOR;
        this.opacity = OpenLayers.Popup.OPACITY;
        this.border = OpenLayers.Popup.BORDER;
        this.div = OpenLayers.Util.createDiv(this.id, null, null, null, null, null, "hidden");
        this.div.className = this.displayClass;
        var groupDivId = this.id + "_GroupDiv";
        this.groupDiv = OpenLayers.Util.createDiv(groupDivId, null, null, null, "relative", null, "hidden");
        var id = this.div.id + "_contentDiv";
        this.contentDiv = OpenLayers.Util.createDiv(id, null, this.contentSize.clone(), null, "relative");
        this.contentDiv.className = this.contentDisplayClass;
        this.groupDiv.appendChild(this.contentDiv);
        this.div.appendChild(this.groupDiv);
        if (closeBox) {
            this.addCloseBox(closeBoxCallback);
        }
        this.registerEvents();
    },
    destroy: function () {
        this.id = null;
        this.lonlat = null;
        this.size = null;
        this.contentHTML = null;
        this.backgroundColor = null;
        this.opacity = null;
        this.border = null;
        this.events.destroy();
        this.events = null;
        if (this.closeDiv) {
            OpenLayers.Event.stopObservingElement(this.closeDiv);
            this.groupDiv.removeChild(this.closeDiv);
        }
        this.closeDiv = null;
        this.div.removeChild(this.groupDiv);
        this.groupDiv = null;
        if (this.map != null) {
            this.map.removePopup(this);
        }
        this.map = null;
        this.div = null;
        this.autoSize = null;
        this.minSize = null;
        this.maxSize = null;
        this.padding = null;
        this.panMapIfOutOfView = null;
    },
    draw: function (px) {
        if (px == null) {
            if ((this.lonlat != null) && (this.map != null)) {
                px = this.map.getLayerPxFromLonLat(this.lonlat);
            }
        }
        if (OpenLayers.Util.getBrowserName() == 'firefox') {
            this.map.events.register("movestart", this, function () {
                var style = document.defaultView.getComputedStyle(this.contentDiv, null);
                var currentOverflow = style.getPropertyValue("overflow");
                if (currentOverflow != "hidden") {
                    this.contentDiv._oldOverflow = currentOverflow;
                    this.contentDiv.style.overflow = "hidden";
                }
            });
            this.map.events.register("moveend", this, function () {
                var oldOverflow = this.contentDiv._oldOverflow;
                if (oldOverflow) {
                    this.contentDiv.style.overflow = oldOverflow;
                    this.contentDiv._oldOverflow = null;
                }
            });
        }
        this.moveTo(px);
        if (!this.autoSize && !this.size) {
            this.setSize(this.contentSize);
        }
        this.setBackgroundColor();
        this.setOpacity();
        this.setBorder();
        this.setContentHTML();
        if (this.panMapIfOutOfView) {
            this.panIntoView();
        }
        return this.div;
    },
    updatePosition: function () {
        if ((this.lonlat) && (this.map)) {
            var px = this.map.getLayerPxFromLonLat(this.lonlat);
            if (px) {
                this.moveTo(px);
            }
        }
    },
    moveTo: function (px) {
        if ((px != null) && (this.div != null)) {
            this.div.style.left = px.x + "px";
            this.div.style.top = px.y + "px";
        }
    },
    visible: function () {
        return OpenLayers.Element.visible(this.div);
    },
    toggle: function () {
        if (this.visible()) {
            this.hide();
        } else {
            this.show();
        }
    },
    show: function () {
        OpenLayers.Element.show(this.div);
        if (this.panMapIfOutOfView) {
            this.panIntoView();
        }
    },
    hide: function () {
        OpenLayers.Element.hide(this.div);
    },
    setSize: function (contentSize) {
        this.size = contentSize.clone();
        var contentDivPadding = this.getContentDivPadding();
        var wPadding = contentDivPadding.left + contentDivPadding.right;
        var hPadding = contentDivPadding.top + contentDivPadding.bottom;
        this.fixPadding();
        wPadding += this.padding.left + this.padding.right;
        hPadding += this.padding.top + this.padding.bottom;
        if (this.closeDiv) {
            var closeDivWidth = parseInt(this.closeDiv.style.width);
            wPadding += closeDivWidth + contentDivPadding.right;
        }
        this.size.w += wPadding;
        this.size.h += hPadding;
        if (OpenLayers.Util.getBrowserName() == "msie") {
            this.contentSize.w += contentDivPadding.left + contentDivPadding.right;
            this.contentSize.h += contentDivPadding.bottom + contentDivPadding.top;
        }
        if (this.div != null) {
            this.div.style.width = this.size.w + "px";
            this.div.style.height = this.size.h + "px";
        }
        if (this.contentDiv != null) {
            this.contentDiv.style.width = contentSize.w + "px";
            this.contentDiv.style.height = contentSize.h + "px";
        }
    },
    updateSize: function () {
        var preparedHTML = "<div class='" + this.contentDisplayClass + "'>" + this.contentDiv.innerHTML + "<div>";
        var realSize = OpenLayers.Util.getRenderedDimensions(preparedHTML, null, {
            displayClass: this.displayClass
        });
        var safeSize = this.getSafeContentSize(realSize);
        var newSize = null;
        if (safeSize.equals(realSize)) {
            newSize = realSize;
        } else {
            var fixedSize = new OpenLayers.Size();
            fixedSize.w = (safeSize.w < realSize.w) ? safeSize.w : null;
            fixedSize.h = (safeSize.h < realSize.h) ? safeSize.h : null;
            if (fixedSize.w && fixedSize.h) {
                newSize = safeSize;
            } else {
                var clippedSize = OpenLayers.Util.getRenderedDimensions(preparedHTML, fixedSize, {
                    displayClass: this.contentDisplayClass
                });
                var currentOverflow = OpenLayers.Element.getStyle(this.contentDiv, "overflow");
                if ((currentOverflow != "hidden") && (clippedSize.equals(safeSize))) {
                    var scrollBar = OpenLayers.Util.getScrollbarWidth();
                    if (fixedSize.w) {
                        clippedSize.h += scrollBar;
                    } else {
                        clippedSize.w += scrollBar;
                    }
                }
                newSize = this.getSafeContentSize(clippedSize);
            }
        }
        this.setSize(newSize);
    },
    setBackgroundColor: function (color) {
        if (color != undefined) {
            this.backgroundColor = color;
        }
        if (this.div != null) {
            this.div.style.backgroundColor = this.backgroundColor;
        }
    },
    setOpacity: function (opacity) {
        if (opacity != undefined) {
            this.opacity = opacity;
        }
        if (this.div != null) {
            this.div.style.opacity = this.opacity;
            this.div.style.filter = 'alpha(opacity=' + this.opacity * 100 + ')';
        }
    },
    setBorder: function (border) {
        if (border != undefined) {
            this.border = border;
        }
        if (this.div != null) {
            this.div.style.border = this.border;
        }
    },
    setContentHTML: function (contentHTML) {
        if (contentHTML != null) {
            this.contentHTML = contentHTML;
        }
        if ((this.contentDiv != null) && (this.contentHTML != null) && (this.contentHTML != this.contentDiv.innerHTML)) {
            this.contentDiv.innerHTML = this.contentHTML;
            if (this.autoSize) {
                this.registerImageListeners();
                this.updateSize();
            }
        }
    },
    registerImageListeners: function () {
        var onImgLoad = function () {
            this.popup.updateSize();
            if (this.popup.visible() && this.popup.panMapIfOutOfView) {
                this.popup.panIntoView();
            }
            OpenLayers.Event.stopObserving(this.img, "load", this.img._onImageLoad);
        };
        var images = this.contentDiv.getElementsByTagName("img");
        for (var i = 0, len = images.length; i < len; i++) {
            var img = images[i];
            if (img.width == 0 || img.height == 0) {
                var context = {
                    'popup': this,
                    'img': img
                };
                img._onImgLoad = OpenLayers.Function.bind(onImgLoad, context);
                OpenLayers.Event.observe(img, 'load', img._onImgLoad);
            }
        }
    },
    getSafeContentSize: function (size) {
        var safeContentSize = size.clone();
        var contentDivPadding = this.getContentDivPadding();
        var wPadding = contentDivPadding.left + contentDivPadding.right;
        var hPadding = contentDivPadding.top + contentDivPadding.bottom;
        this.fixPadding();
        wPadding += this.padding.left + this.padding.right;
        hPadding += this.padding.top + this.padding.bottom;
        if (this.closeDiv) {
            var closeDivWidth = parseInt(this.closeDiv.style.width);
            wPadding += closeDivWidth + contentDivPadding.right;
        }
        if (this.minSize) {
            safeContentSize.w = Math.max(safeContentSize.w, (this.minSize.w - wPadding));
            safeContentSize.h = Math.max(safeContentSize.h, (this.minSize.h - hPadding));
        }
        if (this.maxSize) {
            safeContentSize.w = Math.min(safeContentSize.w, (this.maxSize.w - wPadding));
            safeContentSize.h = Math.min(safeContentSize.h, (this.maxSize.h - hPadding));
        }
        if (this.map && this.map.size) {
            var maxY = this.map.size.h - this.map.paddingForPopups.top - this.map.paddingForPopups.bottom - hPadding;
            var maxX = this.map.size.w - this.map.paddingForPopups.left - this.map.paddingForPopups.right - wPadding;
            safeContentSize.w = Math.min(safeContentSize.w, maxX);
            safeContentSize.h = Math.min(safeContentSize.h, maxY);
        }
        return safeContentSize;
    },
    getContentDivPadding: function () {
        var contentDivPadding = this._contentDivPadding;
        if (!contentDivPadding) {
            this.div.style.display = "none";
            document.body.appendChild(this.div);
            contentDivPadding = new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv, "padding-left"), OpenLayers.Element.getStyle(this.contentDiv, "padding-bottom"), OpenLayers.Element.getStyle(this.contentDiv, "padding-right"), OpenLayers.Element.getStyle(this.contentDiv, "padding-top"));
            this._contentDivPadding = contentDivPadding;
            document.body.removeChild(this.div);
            this.div.style.display = "";
        }
        return contentDivPadding;
    },
    addCloseBox: function (callback) {
        this.closeDiv = OpenLayers.Util.createDiv(this.id + "_close", null, new OpenLayers.Size(17, 17));
        this.closeDiv.className = "olPopupCloseBox";
        var contentDivPadding = this.getContentDivPadding();
        this.closeDiv.style.right = contentDivPadding.right + "px";
        this.closeDiv.style.top = contentDivPadding.top + "px";
        this.groupDiv.appendChild(this.closeDiv);
        var closePopup = callback || function (e) {
                this.hide();
                OpenLayers.Event.stop(e);
            };
        OpenLayers.Event.observe(this.closeDiv, "click", OpenLayers.Function.bindAsEventListener(closePopup, this));
    },
    panIntoView: function () {
        var mapSize = this.map.getSize();
        var origTL = this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left), parseInt(this.div.style.top)));
        var newTL = origTL.clone();
        if (origTL.x < this.map.paddingForPopups.left) {
            newTL.x = this.map.paddingForPopups.left;
        } else if ((origTL.x + this.size.w) > (mapSize.w - this.map.paddingForPopups.right)) {
            newTL.x = mapSize.w - this.map.paddingForPopups.right - this.size.w;
        }
        if (origTL.y < this.map.paddingForPopups.top) {
            newTL.y = this.map.paddingForPopups.top;
        } else if ((origTL.y + this.size.h) > (mapSize.h - this.map.paddingForPopups.bottom)) {
            newTL.y = mapSize.h - this.map.paddingForPopups.bottom - this.size.h;
        }
        var dx = origTL.x - newTL.x;
        var dy = origTL.y - newTL.y;
        this.map.pan(dx, dy);
    },
    registerEvents: function () {
        this.events = new OpenLayers.Events(this, this.div, null, true);
        this.events.on({
            "mousedown": this.onmousedown,
            "mousemove": this.onmousemove,
            "mouseup": this.onmouseup,
            "click": this.onclick,
            "mouseout": this.onmouseout,
            "dblclick": this.ondblclick,
            scope: this
        });
    },
    onmousedown: function (evt) {
        this.mousedown = true;
        OpenLayers.Event.stop(evt, true);
    },
    onmousemove: function (evt) {
        if (this.mousedown) {
            OpenLayers.Event.stop(evt, true);
        }
    },
    onmouseup: function (evt) {
        if (this.mousedown) {
            this.mousedown = false;
            OpenLayers.Event.stop(evt, true);
        }
    },
    onclick: function (evt) {
        OpenLayers.Event.stop(evt, true);
    },
    onmouseout: function (evt) {
        this.mousedown = false;
    },
    ondblclick: function (evt) {
        OpenLayers.Event.stop(evt, true);
    },
    CLASS_NAME: "OpenLayers.Popup"
});
OpenLayers.Popup.WIDTH = 200;
OpenLayers.Popup.HEIGHT = 200;
OpenLayers.Popup.COLOR = "white";
OpenLayers.Popup.OPACITY = 1;
OpenLayers.Popup.BORDER = "0px";
OpenLayers.Popup.Anchored = OpenLayers.Class(OpenLayers.Popup, {
    relativePosition: null,
    anchor: null,
    initialize: function (id, lonlat, contentSize, contentHTML, anchor, closeBox, closeBoxCallback) {
        var newArguments = [id, lonlat, contentSize, contentHTML, closeBox, closeBoxCallback];
        OpenLayers.Popup.prototype.initialize.apply(this, newArguments);
        this.anchor = (anchor != null) ? anchor : {
            size: new OpenLayers.Size(0, 0),
            offset: new OpenLayers.Pixel(0, 0)
        };
    },
    destroy: function () {
        this.anchor = null;
        this.relativePosition = null;
        OpenLayers.Popup.prototype.destroy.apply(this, arguments);
    },
    show: function () {
        this.updatePosition();
        OpenLayers.Popup.prototype.show.apply(this, arguments);
    },
    moveTo: function (px) {
        var oldRelativePosition = this.relativePosition;
        this.relativePosition = this.calculateRelativePosition(px);
        var newPx = this.calculateNewPx(px);
        var newArguments = new Array(newPx);
        OpenLayers.Popup.prototype.moveTo.apply(this, newArguments);
        if (this.relativePosition != oldRelativePosition) {
            this.updateRelativePosition();
        }
    },
    setSize: function (contentSize) {
        OpenLayers.Popup.prototype.setSize.apply(this, arguments);
        if ((this.lonlat) && (this.map)) {
            var px = this.map.getLayerPxFromLonLat(this.lonlat);
            this.moveTo(px);
        }
    },
    calculateRelativePosition: function (px) {
        var lonlat = this.map.getLonLatFromLayerPx(px);
        var extent = this.map.getExtent();
        var quadrant = extent.determineQuadrant(lonlat);
        return OpenLayers.Bounds.oppositeQuadrant(quadrant);
    },
    updateRelativePosition: function () {},
    calculateNewPx: function (px) {
        var newPx = px.offset(this.anchor.offset);
        var size = this.size || this.contentSize;
        var top = (this.relativePosition.charAt(0) == 't');
        newPx.y += (top) ? -size.h : this.anchor.size.h;
        var left = (this.relativePosition.charAt(1) == 'l');
        newPx.x += (left) ? -size.w : this.anchor.size.w;
        return newPx;
    },
    CLASS_NAME: "OpenLayers.Popup.Anchored"
});
OpenLayers.Popup.AnchoredBubble = OpenLayers.Class(OpenLayers.Popup.Anchored, {
    rounded: false,
    initialize: function (id, lonlat, contentSize, contentHTML, anchor, closeBox, closeBoxCallback) {
        this.padding = new OpenLayers.Bounds(0, OpenLayers.Popup.AnchoredBubble.CORNER_SIZE, 0, OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);
        OpenLayers.Popup.Anchored.prototype.initialize.apply(this, arguments);
    },
    draw: function (px) {
        OpenLayers.Popup.Anchored.prototype.draw.apply(this, arguments);
        this.setContentHTML();
        this.setBackgroundColor();
        this.setOpacity();
        return this.div;
    },
    updateRelativePosition: function () {
        this.setRicoCorners();
    },
    setSize: function (contentSize) {
        OpenLayers.Popup.Anchored.prototype.setSize.apply(this, arguments);
        this.setRicoCorners();
    },
    setBackgroundColor: function (color) {
        if (color != undefined) {
            this.backgroundColor = color;
        }
        if (this.div != null) {
            if (this.contentDiv != null) {
                this.div.style.background = "transparent";
                OpenLayers.Rico.Corner.changeColor(this.groupDiv, this.backgroundColor);
            }
        }
    },
    setOpacity: function (opacity) {
        OpenLayers.Popup.Anchored.prototype.setOpacity.call(this, opacity);
        if (this.div != null) {
            if (this.groupDiv != null) {
                OpenLayers.Rico.Corner.changeOpacity(this.groupDiv, this.opacity);
            }
        }
    },
    setBorder: function (border) {
        this.border = 0;
    },
    setRicoCorners: function () {
        var corners = this.getCornersToRound(this.relativePosition);
        var options = {
            corners: corners,
            color: this.backgroundColor,
            bgColor: "transparent",
            blend: false
        };
        if (!this.rounded) {
            OpenLayers.Rico.Corner.round(this.div, options);
            this.rounded = true;
        } else {
            OpenLayers.Rico.Corner.reRound(this.groupDiv, options);
            this.setBackgroundColor();
            this.setOpacity();
        }
    },
    getCornersToRound: function () {
        var corners = ['tl', 'tr', 'bl', 'br'];
        var corner = OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);
        OpenLayers.Util.removeItem(corners, corner);
        return corners.join(" ");
    },
    CLASS_NAME: "OpenLayers.Popup.AnchoredBubble"
});
OpenLayers.Popup.AnchoredBubble.CORNER_SIZE = 5;
OpenLayers.Feature = OpenLayers.Class({
    layer: null,
    id: null,
    lonlat: null,
    data: null,
    marker: null,
    popupClass: OpenLayers.Popup.AnchoredBubble,
    popup: null,
    initialize: function (layer, lonlat, data) {
        this.layer = layer;
        this.lonlat = lonlat;
        this.data = (data != null) ? data : {};
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    },
    destroy: function () {
        if ((this.layer != null) && (this.layer.map != null)) {
            if (this.popup != null) {
                this.layer.map.removePopup(this.popup);
            }
        }
        this.layer = null;
        this.id = null;
        this.lonlat = null;
        this.data = null;
        if (this.marker != null) {
            this.destroyMarker(this.marker);
            this.marker = null;
        }
        if (this.popup != null) {
            this.destroyPopup(this.popup);
            this.popup = null;
        }
    },
    onScreen: function () {
        var onScreen = false;
        if ((this.layer != null) && (this.layer.map != null)) {
            var screenBounds = this.layer.map.getExtent();
            onScreen = screenBounds.containsLonLat(this.lonlat);
        }
        return onScreen;
    },
    createMarker: function () {
        if (this.lonlat != null) {
            this.marker = new OpenLayers.Marker(this.lonlat, this.data.icon);
        }
        return this.marker;
    },
    destroyMarker: function () {
        this.marker.destroy();
    },
    createPopup: function (closeBox) {
        if (this.lonlat != null) {
            var id = this.id + "_popup";
            var anchor = (this.marker) ? this.marker.icon : null;
            if (!this.popup) {
                this.popup = new this.popupClass(id, this.lonlat, this.data.popupSize, this.data.popupContentHTML, anchor, closeBox);
            }
            if (this.data.overflow != null) {
                this.popup.contentDiv.style.overflow = this.data.overflow;
            }
            this.popup.feature = this;
        }
        return this.popup;
    },
    destroyPopup: function () {
        if (this.popup) {
            this.popup.feature = null;
            this.popup.destroy();
            this.popup = null;
        }
    },
    CLASS_NAME: "OpenLayers.Feature"
});
OpenLayers.State = {
    UNKNOWN: 'Unknown',
    INSERT: 'Insert',
    UPDATE: 'Update',
    DELETE: 'Delete'
};
OpenLayers.Feature.Vector = OpenLayers.Class(OpenLayers.Feature, {
    fid: null,
    geometry: null,
    attributes: null,
    state: null,
    style: null,
    renderIntent: "default",
    initialize: function (geometry, attributes, style) {
        OpenLayers.Feature.prototype.initialize.apply(this, [null, null, attributes]);
        this.lonlat = null;
        this.geometry = geometry ? geometry : null;
        this.state = null;
        this.attributes = {};
        if (attributes) {
            this.attributes = OpenLayers.Util.extend(this.attributes, attributes);
        }
        this.style = style ? style : null;
    },
    destroy: function () {
        if (this.layer) {
            this.layer.removeFeatures(this);
            this.layer = null;
        }
        this.geometry = null;
        OpenLayers.Feature.prototype.destroy.apply(this, arguments);
    },
    clone: function () {
        return new OpenLayers.Feature.Vector(this.geometry ? this.geometry.clone() : null, this.attributes, this.style);
    },
    onScreen: function (boundsOnly) {
        var onScreen = false;
        if (this.layer && this.layer.map) {
            var screenBounds = this.layer.map.getExtent();
            if (boundsOnly) {
                var featureBounds = this.geometry.getBounds();
                onScreen = screenBounds.intersectsBounds(featureBounds);
            } else {
                var screenPoly = screenBounds.toGeometry();
                onScreen = screenPoly.intersects(this.geometry);
            }
        }
        return onScreen;
    },
    createMarker: function () {
        return null;
    },
    destroyMarker: function () {},
    createPopup: function () {
        return null;
    },
    atPoint: function (lonlat, toleranceLon, toleranceLat) {
        var atPoint = false;
        if (this.geometry) {
            atPoint = this.geometry.atPoint(lonlat, toleranceLon, toleranceLat);
        }
        return atPoint;
    },
    destroyPopup: function () {},
    move: function (location) {
        if (!this.layer || !this.geometry.move) {
            return;
        }
        var pixel;
        if (location.CLASS_NAME == "OpenLayers.LonLat") {
            pixel = this.layer.getViewPortPxFromLonLat(location);
        } else {
            pixel = location;
        }
        var lastPixel = this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());
        var res = this.layer.map.getResolution();
        this.geometry.move(res * (pixel.x - lastPixel.x), res * (lastPixel.y - pixel.y));
        this.layer.drawFeature(this);
        return lastPixel;
    },
    toState: function (state) {
        if (state == OpenLayers.State.UPDATE) {
            switch (this.state) {
            case OpenLayers.State.UNKNOWN:
            case OpenLayers.State.DELETE:
                this.state = state;
                break;
            case OpenLayers.State.UPDATE:
            case OpenLayers.State.INSERT:
                break;
            }
        } else if (state == OpenLayers.State.INSERT) {
            switch (this.state) {
            case OpenLayers.State.UNKNOWN:
                break;
            default:
                this.state = state;
                break;
            }
        } else if (state == OpenLayers.State.DELETE) {
            switch (this.state) {
            case OpenLayers.State.INSERT:
                break;
            case OpenLayers.State.DELETE:
                break;
            case OpenLayers.State.UNKNOWN:
            case OpenLayers.State.UPDATE:
                this.state = state;
                break;
            }
        } else if (state == OpenLayers.State.UNKNOWN) {
            this.state = state;
        }
    },
    CLASS_NAME: "OpenLayers.Feature.Vector"
});
OpenLayers.Feature.Vector.style = {
    'default': {
        fillColor: "#ee9900",
        fillOpacity: 0.4,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "#ee9900",
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "inherit"
    },
    'select': {
        fillColor: "blue",
        fillOpacity: 0.4,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "blue",
        strokeOpacity: 1,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "pointer"
    },
    'temporary': {
        fillColor: "yellow",
        fillOpacity: 0.2,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "yellow",
        strokeOpacity: 1,
        strokeLinecap: "round",
        strokeWidth: 4,
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "inherit"
    }
};
OpenLayers.Format.WKT = OpenLayers.Class(OpenLayers.Format, {
    initialize: function (options) {
        this.regExes = {
            'typeStr': /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
            'spaces': /\s+/,
            'parenComma': /\)\s*,\s*\(/,
            'doubleParenComma': /\)\s*\)\s*,\s*\(\s*\(/,
            'trimParens': /^\s*\(?(.*?)\)?\s*$/
        };
        OpenLayers.Format.prototype.initialize.apply(this, [options]);
    },
    read: function (wkt) {
        var features, type, str;
        var matches = this.regExes.typeStr.exec(wkt);
        if (matches) {
            type = matches[1].toLowerCase();
            str = matches[2];
            if (this.parse[type]) {
                features = this.parse[type].apply(this, [str]);
            }
            if (this.internalProjection && this.externalProjection) {
                if (features && features.CLASS_NAME == "OpenLayers.Feature.Vector") {
                    features.geometry.transform(this.externalProjection, this.internalProjection);
                } else if (features && type != "geometrycollection" && typeof features == "object") {
                    for (var i = 0, len = features.length; i < len; i++) {
                        var component = features[i];
                        component.geometry.transform(this.externalProjection, this.internalProjection);
                    }
                }
            }
        }
        return features;
    },
    write: function (features) {
        var collection, geometry, type, data, isCollection;
        if (features.constructor == Array) {
            collection = features;
            isCollection = true;
        } else {
            collection = [features];
            isCollection = false;
        }
        var pieces = [];
        if (isCollection) {
            pieces.push('GEOMETRYCOLLECTION(');
        }
        for (var i = 0, len = collection.length; i < len; ++i) {
            if (isCollection && i > 0) {
                pieces.push(',');
            }
            geometry = collection[i].geometry;
            type = geometry.CLASS_NAME.split('.')[2].toLowerCase();
            if (!this.extract[type]) {
                return null;
            }
            if (this.internalProjection && this.externalProjection) {
                geometry = geometry.clone();
                geometry.transform(this.internalProjection, this.externalProjection);
            }
            data = this.extract[type].apply(this, [geometry]);
            pieces.push(type.toUpperCase() + '(' + data + ')');
        }
        if (isCollection) {
            pieces.push(')');
        }
        return pieces.join('');
    },
    extract: {
        'point': function (point) {
            return point.x + ' ' + point.y;
        },
        'multipoint': function (multipoint) {
            var array = [];
            for (var i = 0, len = multipoint.components.length; i < len; ++i) {
                array.push(this.extract.point.apply(this, [multipoint.components[i]]));
            }
            return array.join(',');
        },
        'linestring': function (linestring) {
            var array = [];
            for (var i = 0, len = linestring.components.length; i < len; ++i) {
                array.push(this.extract.point.apply(this, [linestring.components[i]]));
            }
            return array.join(',');
        },
        'multilinestring': function (multilinestring) {
            var array = [];
            for (var i = 0, len = multilinestring.components.length; i < len; ++i) {
                array.push('(' + this.extract.linestring.apply(this, [multilinestring.components[i]]) + ')');
            }
            return array.join(',');
        },
        'polygon': function (polygon) {
            var array = [];
            for (var i = 0, len = polygon.components.length; i < len; ++i) {
                array.push('(' + this.extract.linestring.apply(this, [polygon.components[i]]) + ')');
            }
            return array.join(',');
        },
        'multipolygon': function (multipolygon) {
            var array = [];
            for (var i = 0, len = multipolygon.components.length; i < len; ++i) {
                array.push('(' + this.extract.polygon.apply(this, [multipolygon.components[i]]) + ')');
            }
            return array.join(',');
        }
    },
    parse: {
        'point': function (str) {
            var coords = OpenLayers.String.trim(str).split(this.regExes.spaces);
            return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0], coords[1]));
        },
        'multipoint': function (str) {
            var points = OpenLayers.String.trim(str).split(',');
            var components = [];
            for (var i = 0, len = points.length; i < len; ++i) {
                components.push(this.parse.point.apply(this, [points[i]]).geometry);
            }
            return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(components));
        },
        'linestring': function (str) {
            var points = OpenLayers.String.trim(str).split(',');
            var components = [];
            for (var i = 0, len = points.length; i < len; ++i) {
                components.push(this.parse.point.apply(this, [points[i]]).geometry);
            }
            return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(components));
        },
        'multilinestring': function (str) {
            var line;
            var lines = OpenLayers.String.trim(str).split(this.regExes.parenComma);
            var components = [];
            for (var i = 0, len = lines.length; i < len; ++i) {
                line = lines[i].replace(this.regExes.trimParens, '$1');
                components.push(this.parse.linestring.apply(this, [line]).geometry);
            }
            return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(components));
        },
        'polygon': function (str) {
            var ring, linestring, linearring;
            var rings = OpenLayers.String.trim(str).split(this.regExes.parenComma);
            var components = [];
            for (var i = 0, len = rings.length; i < len; ++i) {
                ring = rings[i].replace(this.regExes.trimParens, '$1');
                linestring = this.parse.linestring.apply(this, [ring]).geometry;
                linearring = new OpenLayers.Geometry.LinearRing(linestring.components);
                components.push(linearring);
            }
            return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(components));
        },
        'multipolygon': function (str) {
            var polygon;
            var polygons = OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);
            var components = [];
            for (var i = 0, len = polygons.length; i < len; ++i) {
                polygon = polygons[i].replace(this.regExes.trimParens, '$1');
                components.push(this.parse.polygon.apply(this, [polygon]).geometry);
            }
            return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(components));
        },
        'geometrycollection': function (str) {
            str = str.replace(/,\s*([A-Za-z])/g, '|$1');
            var wktArray = OpenLayers.String.trim(str).split('|');
            var components = [];
            for (var i = 0, len = wktArray.length; i < len; ++i) {
                components.push(OpenLayers.Format.WKT.prototype.read.apply(this, [wktArray[i]]));
            }
            return components;
        }
    },
    CLASS_NAME: "OpenLayers.Format.WKT"
});
OpenLayers.Geometry = OpenLayers.Class({
    id: null,
    parent: null,
    bounds: null,
    initialize: function () {
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    },
    destroy: function () {
        this.id = null;
        this.bounds = null;
    },
    clone: function () {
        return new OpenLayers.Geometry();
    },
    setBounds: function (bounds) {
        if (bounds) {
            this.bounds = bounds.clone();
        }
    },
    clearBounds: function () {
        this.bounds = null;
        if (this.parent) {
            this.parent.clearBounds();
        }
    },
    extendBounds: function (newBounds) {
        var bounds = this.getBounds();
        if (!bounds) {
            this.setBounds(newBounds);
        } else {
            this.bounds.extend(newBounds);
        }
    },
    getBounds: function () {
        if (this.bounds == null) {
            this.calculateBounds();
        }
        return this.bounds;
    },
    calculateBounds: function () {},
    atPoint: function (lonlat, toleranceLon, toleranceLat) {
        var atPoint = false;
        var bounds = this.getBounds();
        if ((bounds != null) && (lonlat != null)) {
            var dX = (toleranceLon != null) ? toleranceLon : 0;
            var dY = (toleranceLat != null) ? toleranceLat : 0;
            var toleranceBounds = new OpenLayers.Bounds(this.bounds.left - dX, this.bounds.bottom - dY, this.bounds.right + dX, this.bounds.top + dY);
            atPoint = toleranceBounds.containsLonLat(lonlat);
        }
        return atPoint;
    },
    getLength: function () {
        return 0.0;
    },
    getArea: function () {
        return 0.0;
    },
    toString: function () {
        return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));
    },
    CLASS_NAME: "OpenLayers.Geometry"
});
OpenLayers.Geometry.segmentsIntersect = function (seg1, seg2, point) {
    var intersection = false;
    var x11_21 = seg1.x1 - seg2.x1;
    var y11_21 = seg1.y1 - seg2.y1;
    var x12_11 = seg1.x2 - seg1.x1;
    var y12_11 = seg1.y2 - seg1.y1;
    var y22_21 = seg2.y2 - seg2.y1;
    var x22_21 = seg2.x2 - seg2.x1;
    var d = (y22_21 * x12_11) - (x22_21 * y12_11);
    var n1 = (x22_21 * y11_21) - (y22_21 * x11_21);
    var n2 = (x12_11 * y11_21) - (y12_11 * x11_21);
    if (d == 0) {
        if (n1 == 0 && n2 == 0) {
            intersection = true;
        }
    } else {
        var along1 = n1 / d;
        var along2 = n2 / d;
        if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
            if (!point) {
                intersection = true;
            } else {
                var x = seg1.x1 + (along1 * x12_11);
                var y = seg1.y1 + (along1 * y12_11);
                intersection = new OpenLayers.Geometry.Point(x, y);
            }
        }
    }
    return intersection;
};
OpenLayers.Geometry.Point = OpenLayers.Class(OpenLayers.Geometry, {
    x: null,
    y: null,
    initialize: function (x, y) {
        OpenLayers.Geometry.prototype.initialize.apply(this, arguments);
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Geometry.Point(this.x, this.y);
        }
        OpenLayers.Util.applyDefaults(obj, this);
        return obj;
    },
    calculateBounds: function () {
        this.bounds = new OpenLayers.Bounds(this.x, this.y, this.x, this.y);
    },
    distanceTo: function (point) {
        var distance = 0.0;
        if ((this.x != null) && (this.y != null) && (point != null) && (point.x != null) && (point.y != null)) {
            var dx2 = Math.pow(this.x - point.x, 2);
            var dy2 = Math.pow(this.y - point.y, 2);
            distance = Math.sqrt(dx2 + dy2);
        }
        return distance;
    },
    equals: function (geom) {
        var equals = false;
        if (geom != null) {
            equals = ((this.x == geom.x && this.y == geom.y) || (isNaN(this.x) && isNaN(this.y) && isNaN(geom.x) && isNaN(geom.y)));
        }
        return equals;
    },
    toShortString: function () {
        return (this.x + ", " + this.y);
    },
    move: function (x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        this.clearBounds();
    },
    rotate: function (angle, origin) {
        angle *= Math.PI / 180;
        var radius = this.distanceTo(origin);
        var theta = angle + Math.atan2(this.y - origin.y, this.x - origin.x);
        this.x = origin.x + (radius * Math.cos(theta));
        this.y = origin.y + (radius * Math.sin(theta));
        this.clearBounds();
    },
    resize: function (scale, origin, ratio) {
        ratio = (ratio == undefined) ? 1 : ratio;
        this.x = origin.x + (scale * ratio * (this.x - origin.x));
        this.y = origin.y + (scale * (this.y - origin.y));
        this.clearBounds();
    },
    intersects: function (geometry) {
        var intersect = false;
        if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
            intersect = this.equals(geometry);
        } else {
            intersect = geometry.intersects(this);
        }
        return intersect;
    },
    transform: function (source, dest) {
        if ((source && dest)) {
            OpenLayers.Projection.transform(this, source, dest);
            this.bounds = null;
        }
        return this;
    },
    CLASS_NAME: "OpenLayers.Geometry.Point"
});
OpenLayers.Geometry.Collection = OpenLayers.Class(OpenLayers.Geometry, {
    components: null,
    componentTypes: null,
    initialize: function (components) {
        OpenLayers.Geometry.prototype.initialize.apply(this, arguments);
        this.components = [];
        if (components != null) {
            this.addComponents(components);
        }
    },
    destroy: function () {
        this.components.length = 0;
        this.components = null;
    },
    clone: function () {
        var geometry = eval("new " + this.CLASS_NAME + "()");
        for (var i = 0, len = this.components.length; i < len; i++) {
            geometry.addComponent(this.components[i].clone());
        }
        OpenLayers.Util.applyDefaults(geometry, this);
        return geometry;
    },
    getComponentsString: function () {
        var strings = [];
        for (var i = 0, len = this.components.length; i < len; i++) {
            strings.push(this.components[i].toShortString());
        }
        return strings.join(",");
    },
    calculateBounds: function () {
        this.bounds = null;
        if (this.components && this.components.length > 0) {
            this.setBounds(this.components[0].getBounds());
            for (var i = 1, len = this.components.length; i < len; i++) {
                this.extendBounds(this.components[i].getBounds());
            }
        }
    },
    addComponents: function (components) {
        if (!(components instanceof Array)) {
            components = [components];
        }
        for (var i = 0, len = components.length; i < len; i++) {
            this.addComponent(components[i]);
        }
    },
    addComponent: function (component, index) {
        var added = false;
        if (component) {
            if (this.componentTypes == null || (OpenLayers.Util.indexOf(this.componentTypes, component.CLASS_NAME) > -1)) {
                if (index != null && (index < this.components.length)) {
                    var components1 = this.components.slice(0, index);
                    var components2 = this.components.slice(index, this.components.length);
                    components1.push(component);
                    this.components = components1.concat(components2);
                } else {
                    this.components.push(component);
                }
                component.parent = this;
                this.clearBounds();
                added = true;
            }
        }
        return added;
    },
    removeComponents: function (components) {
        if (!(components instanceof Array)) {
            components = [components];
        }
        for (var i = components.length - 1; i >= 0; --i) {
            this.removeComponent(components[i]);
        }
    },
    removeComponent: function (component) {
        OpenLayers.Util.removeItem(this.components, component);
        this.clearBounds();
    },
    getLength: function () {
        var length = 0.0;
        for (var i = 0, len = this.components.length; i < len; i++) {
            length += this.components[i].getLength();
        }
        return length;
    },
    getArea: function () {
        var area = 0.0;
        for (var i = 0, len = this.components.length; i < len; i++) {
            area += this.components[i].getArea();
        }
        return area;
    },
    move: function (x, y) {
        for (var i = 0, len = this.components.length; i < len; i++) {
            this.components[i].move(x, y);
        }
    },
    rotate: function (angle, origin) {
        for (var i = 0, len = this.components.length; i < len; ++i) {
            this.components[i].rotate(angle, origin);
        }
    },
    resize: function (scale, origin, ratio) {
        for (var i = 0; i < this.components.length; ++i) {
            this.components[i].resize(scale, origin, ratio);
        }
    },
    equals: function (geometry) {
        var equivalent = true;
        if (!geometry || !geometry.CLASS_NAME || (this.CLASS_NAME != geometry.CLASS_NAME)) {
            equivalent = false;
        } else if (!(geometry.components instanceof Array) || (geometry.components.length != this.components.length)) {
            equivalent = false;
        } else {
            for (var i = 0, len = this.components.length; i < len; ++i) {
                if (!this.components[i].equals(geometry.components[i])) {
                    equivalent = false;
                    break;
                }
            }
        }
        return equivalent;
    },
    transform: function (source, dest) {
        if (source && dest) {
            for (var i = 0, len = this.components.length; i < len; i++) {
                var component = this.components[i];
                component.transform(source, dest);
            }
            this.bounds = null;
        }
        return this;
    },
    intersects: function (geometry) {
        var intersect = false;
        for (var i = 0, len = this.components.length; i < len; ++i) {
            intersect = geometry.intersects(this.components[i]);
            if (intersect) {
                break;
            }
        }
        return intersect;
    },
    CLASS_NAME: "OpenLayers.Geometry.Collection"
});
OpenLayers.Geometry.MultiPoint = OpenLayers.Class(OpenLayers.Geometry.Collection, {
    componentTypes: ["OpenLayers.Geometry.Point"],
    initialize: function (components) {
        OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
    },
    addPoint: function (point, index) {
        this.addComponent(point, index);
    },
    removePoint: function (point) {
        this.removeComponent(point);
    },
    CLASS_NAME: "OpenLayers.Geometry.MultiPoint"
});
OpenLayers.Geometry.Curve = OpenLayers.Class(OpenLayers.Geometry.MultiPoint, {
    componentTypes: ["OpenLayers.Geometry.Point"],
    initialize: function (points) {
        OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this, arguments);
    },
    getLength: function () {
        var length = 0.0;
        if (this.components && (this.components.length > 1)) {
            for (var i = 1, len = this.components.length; i < len; i++) {
                length += this.components[i - 1].distanceTo(this.components[i]);
            }
        }
        return length;
    },
    CLASS_NAME: "OpenLayers.Geometry.Curve"
});
OpenLayers.Geometry.LineString = OpenLayers.Class(OpenLayers.Geometry.Curve, {
    initialize: function (points) {
        OpenLayers.Geometry.Curve.prototype.initialize.apply(this, arguments);
    },
    removeComponent: function (point) {
        if (this.components && (this.components.length > 2)) {
            OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this, arguments);
        }
    },
    intersects: function (geometry) {
        var intersect = false;
        var type = geometry.CLASS_NAME;
        if (type == "OpenLayers.Geometry.LineString" || type == "OpenLayers.Geometry.LinearRing" || type == "OpenLayers.Geometry.Point") {
            var segs1 = this.getSortedSegments();
            var segs2;
            if (type == "OpenLayers.Geometry.Point") {
                segs2 = [{
                    x1: geometry.x,
                    y1: geometry.y,
                    x2: geometry.x,
                    y2: geometry.y
                }];
            } else {
                segs2 = geometry.getSortedSegments();
            }
            var seg1, seg1x1, seg1x2, seg1y1, seg1y2, seg2, seg2y1, seg2y2;
            outer: for (var i = 0, len = segs1.length; i < len; ++i) {
                seg1 = segs1[i];
                seg1x1 = seg1.x1;
                seg1x2 = seg1.x2;
                seg1y1 = seg1.y1;
                seg1y2 = seg1.y2;
                inner: for (var j = 0, jlen = segs2.length; j < jlen; ++j) {
                    seg2 = segs2[j];
                    if (seg2.x1 > seg1x2) {
                        break;
                    }
                    if (seg2.x2 < seg1x1) {
                        continue;
                    }
                    seg2y1 = seg2.y1;
                    seg2y2 = seg2.y2;
                    if (Math.min(seg2y1, seg2y2) > Math.max(seg1y1, seg1y2)) {
                        continue;
                    }
                    if (Math.max(seg2y1, seg2y2) < Math.min(seg1y1, seg1y2)) {
                        continue;
                    }
                    if (OpenLayers.Geometry.segmentsIntersect(seg1, seg2)) {
                        intersect = true;
                        break outer;
                    }
                }
            }
        } else {
            intersect = geometry.intersects(this);
        }
        return intersect;
    },
    getSortedSegments: function () {
        var numSeg = this.components.length - 1;
        var segments = new Array(numSeg);
        for (var i = 0; i < numSeg; ++i) {
            point1 = this.components[i];
            point2 = this.components[i + 1];
            if (point1.x < point2.x) {
                segments[i] = {
                    x1: point1.x,
                    y1: point1.y,
                    x2: point2.x,
                    y2: point2.y
                };
            } else {
                segments[i] = {
                    x1: point2.x,
                    y1: point2.y,
                    x2: point1.x,
                    y2: point1.y
                };
            }
        }

        function byX1(seg1, seg2) {
            return seg1.x1 - seg2.x1;
        }
        return segments.sort(byX1);
    },
    CLASS_NAME: "OpenLayers.Geometry.LineString"
});
OpenLayers.Geometry.MultiLineString = OpenLayers.Class(OpenLayers.Geometry.Collection, {
    componentTypes: ["OpenLayers.Geometry.LineString"],
    initialize: function (components) {
        OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
    },
    CLASS_NAME: "OpenLayers.Geometry.MultiLineString"
});
OpenLayers.Geometry.LinearRing = OpenLayers.Class(OpenLayers.Geometry.LineString, {
    componentTypes: ["OpenLayers.Geometry.Point"],
    initialize: function (points) {
        OpenLayers.Geometry.LineString.prototype.initialize.apply(this, arguments);
    },
    addComponent: function (point, index) {
        var added = false;
        var lastPoint = this.components.pop();
        if (index != null || !point.equals(lastPoint)) {
            added = OpenLayers.Geometry.Collection.prototype.addComponent.apply(this, arguments);
        }
        var firstPoint = this.components[0];
        OpenLayers.Geometry.Collection.prototype.addComponent.apply(this, [firstPoint]);
        return added;
    },
    removeComponent: function (point) {
        if (this.components.length > 4) {
            this.components.pop();
            OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this, arguments);
            var firstPoint = this.components[0];
            OpenLayers.Geometry.Collection.prototype.addComponent.apply(this, [firstPoint]);
        }
    },
    move: function (x, y) {
        for (var i = 0, len = this.components.length; i < len - 1; i++) {
            this.components[i].move(x, y);
        }
    },
    rotate: function (angle, origin) {
        for (var i = 0, len = this.components.length; i < len - 1; ++i) {
            this.components[i].rotate(angle, origin);
        }
    },
    resize: function (scale, origin, ratio) {
        for (var i = 0, len = this.components.length; i < len - 1; ++i) {
            this.components[i].resize(scale, origin, ratio);
        }
    },
    transform: function (source, dest) {
        if (source && dest) {
            for (var i = 0, len = this.components.length; i < len - 1; i++) {
                var component = this.components[i];
                component.transform(source, dest);
            }
            this.bounds = null;
        }
        return this;
    },
    getArea: function () {
        var area = 0.0;
        if (this.components && (this.components.length > 2)) {
            var sum = 0.0;
            for (var i = 0, len = this.components.length; i < len - 1; i++) {
                var b = this.components[i];
                var c = this.components[i + 1];
                sum += (b.x + c.x) * (c.y - b.y);
            }
            area = -sum / 2.0;
        }
        return area;
    },
    containsPoint: function (point) {
        var approx = OpenLayers.Number.limitSigDigs;
        var digs = 14;
        var px = approx(point.x, digs);
        var py = approx(point.y, digs);

        function getX(y, x1, y1, x2, y2) {
            return (((x1 - x2) * y) + ((x2 * y1) - (x1 * y2))) / (y1 - y2);
        }
        var numSeg = this.components.length - 1;
        var start, end, x1, y1, x2, y2, cx, cy;
        var crosses = 0;
        for (var i = 0; i < numSeg; ++i) {
            start = this.components[i];
            x1 = approx(start.x, digs);
            y1 = approx(start.y, digs);
            end = this.components[i + 1];
            x2 = approx(end.x, digs);
            y2 = approx(end.y, digs);
            if (y1 == y2) {
                if (py == y1) {
                    if (x1 <= x2 && (px >= x1 && px <= x2) || x1 >= x2 && (px <= x1 && px >= x2)) {
                        crosses = -1;
                        break;
                    }
                }
                continue;
            }
            cx = approx(getX(py, x1, y1, x2, y2), digs);
            if (cx == px) {
                if (y1 < y2 && (py >= y1 && py <= y2) || y1 > y2 && (py <= y1 && py >= y2)) {
                    crosses = -1;
                    break;
                }
            }
            if (cx <= px) {
                continue;
            }
            if (x1 != x2 && (cx < Math.min(x1, x2) || cx > Math.max(x1, x2))) {
                continue;
            }
            if (y1 < y2 && (py >= y1 && py < y2) || y1 > y2 && (py < y1 && py >= y2)) {
                ++crosses;
            }
        }
        var contained = (crosses == -1) ? 1 : !! (crosses & 1);
        return contained;
    },
    intersects: function (geometry) {
        var intersect = false;
        if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
            intersect = this.containsPoint(geometry);
        } else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LineString") {
            intersect = geometry.intersects(this);
        } else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LinearRing") {
            intersect = OpenLayers.Geometry.LineString.prototype.intersects.apply(this, [geometry]);
        } else {
            for (var i = 0, len = geometry.components.length; i < len; ++i) {
                intersect = geometry.components[i].intersects(this);
                if (intersect) {
                    break;
                }
            }
        }
        return intersect;
    },
    CLASS_NAME: "OpenLayers.Geometry.LinearRing"
});
OpenLayers.Geometry.Polygon = OpenLayers.Class(OpenLayers.Geometry.Collection, {
    componentTypes: ["OpenLayers.Geometry.LinearRing"],
    initialize: function (components) {
        OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
    },
    getArea: function () {
        var area = 0.0;
        if (this.components && (this.components.length > 0)) {
            area += Math.abs(this.components[0].getArea());
            for (var i = 1, len = this.components.length; i < len; i++) {
                area -= Math.abs(this.components[i].getArea());
            }
        }
        return area;
    },
    containsPoint: function (point) {
        var numRings = this.components.length;
        var contained = false;
        if (numRings > 0) {
            contained = this.components[0].containsPoint(point);
            if (contained !== 1) {
                if (contained && numRings > 1) {
                    var hole;
                    for (var i = 1; i < numRings; ++i) {
                        hole = this.components[i].containsPoint(point);
                        if (hole) {
                            if (hole === 1) {
                                contained = 1;
                            } else {
                                contained = false;
                            }
                            break;
                        }
                    }
                }
            }
        }
        return contained;
    },
    intersects: function (geometry) {
        var intersect = false;
        var i, len;
        if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
            intersect = this.containsPoint(geometry);
        } else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LineString" || geometry.CLASS_NAME == "OpenLayers.Geometry.LinearRing") {
            for (i = 0, len = this.components.length; i < len; ++i) {
                intersect = geometry.intersects(this.components[i]);
                if (intersect) {
                    break;
                }
            }
            if (!intersect) {
                for (i = 0, len = geometry.components.length; i < len; ++i) {
                    intersect = this.containsPoint(geometry.components[i]);
                    if (intersect) {
                        break;
                    }
                }
            }
        } else {
            for (i = 0, len = geometry.components.length; i < len; ++i) {
                intersect = this.intersects(geometry.components[i]);
                if (intersect) {
                    break;
                }
            }
        }
        if (!intersect && geometry.CLASS_NAME == "OpenLayers.Geometry.Polygon") {
            var ring = this.components[0];
            for (i = 0, len = ring.components.length; i < len; ++i) {
                intersect = geometry.containsPoint(ring.components[i]);
                if (intersect) {
                    break;
                }
            }
        }
        return intersect;
    },
    CLASS_NAME: "OpenLayers.Geometry.Polygon"
});
OpenLayers.Geometry.Polygon.createRegularPolygon = function (origin, radius, sides, rotation) {
    var angle = Math.PI * ((1 / sides) - (1 / 2));
    if (rotation) {
        angle += (rotation / 180) * Math.PI;
    }
    var rotatedAngle, x, y;
    var points = [];
    for (var i = 0; i < sides; ++i) {
        rotatedAngle = angle + (i * 2 * Math.PI / sides);
        x = origin.x + (radius * Math.cos(rotatedAngle));
        y = origin.y + (radius * Math.sin(rotatedAngle));
        points.push(new OpenLayers.Geometry.Point(x, y));
    }
    var ring = new OpenLayers.Geometry.LinearRing(points);
    return new OpenLayers.Geometry.Polygon([ring]);
};
OpenLayers.Geometry.MultiPolygon = OpenLayers.Class(OpenLayers.Geometry.Collection, {
    componentTypes: ["OpenLayers.Geometry.Polygon"],
    initialize: function (components) {
        OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
    },
    CLASS_NAME: "OpenLayers.Geometry.MultiPolygon"
});
OpenLayers.Format.GML = OpenLayers.Class(OpenLayers.Format.XML, {
    featureNS: "http://mapserver.gis.umn.edu/mapserver",
    featurePrefix: "feature",
    featureName: "featureMember",
    layerName: "features",
    geometryName: "geometry",
    collectionName: "FeatureCollection",
    gmlns: "http://www.opengis.net/gml",
    extractAttributes: true,
    xy: true,
    initialize: function (options) {
        this.regExes = {
            trimSpace: (/^\s*|\s*$/g),
            removeSpace: (/\s*/g),
            splitSpace: (/\s+/),
            trimComma: (/\s*,\s*/g)
        };
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var featureNodes = this.getElementsByTagNameNS(data.documentElement, this.gmlns, this.featureName);
        var features = [];
        for (var i = 0; i < featureNodes.length; i++) {
            var feature = this.parseFeature(featureNodes[i]);
            if (feature) {
                features.push(feature);
            }
        }
        return features;
    },
    parseFeature: function (node) {
        var order = ["MultiPolygon", "Polygon", "MultiLineString", "LineString", "MultiPoint", "Point", "Envelope", "Box"];
        var type, nodeList, geometry, parser;
        for (var i = 0; i < order.length; ++i) {
            type = order[i];
            nodeList = this.getElementsByTagNameNS(node, this.gmlns, type);
            if (nodeList.length > 0) {
                var parser = this.parseGeometry[type.toLowerCase()];
                if (parser) {
                    geometry = parser.apply(this, [nodeList[0]]);
                    if (this.internalProjection && this.externalProjection) {
                        geometry.transform(this.externalProjection, this.internalProjection);
                    }
                } else {
                    OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType", {
                        'geomType': type
                    }));
                }
                break;
            }
        }
        var attributes;
        if (this.extractAttributes) {
            attributes = this.parseAttributes(node);
        }
        var feature = new OpenLayers.Feature.Vector(geometry, attributes);
        feature.gml = {
            featureType: node.firstChild.nodeName.split(":")[1],
            featureNS: node.firstChild.namespaceURI,
            featureNSPrefix: node.firstChild.prefix
        };
        var childNode = node.firstChild;
        var fid;
        while (childNode) {
            if (childNode.nodeType == 1) {
                fid = childNode.getAttribute("fid") || childNode.getAttribute("id");
                if (fid) {
                    break;
                }
            }
            childNode = childNode.nextSibling;
        }
        feature.fid = fid;
        return feature;
    },
    parseGeometry: {
        point: function (node) {
            var nodeList, coordString;
            var coords = [];
            var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "pos");
            if (nodeList.length > 0) {
                coordString = nodeList[0].firstChild.nodeValue;
                coordString = coordString.replace(this.regExes.trimSpace, "");
                coords = coordString.split(this.regExes.splitSpace);
            }
            if (coords.length == 0) {
                nodeList = this.getElementsByTagNameNS(node, this.gmlns, "coordinates");
                if (nodeList.length > 0) {
                    coordString = nodeList[0].firstChild.nodeValue;
                    coordString = coordString.replace(this.regExes.removeSpace, "");
                    coords = coordString.split(",");
                }
            }
            if (coords.length == 0) {
                nodeList = this.getElementsByTagNameNS(node, this.gmlns, "coord");
                if (nodeList.length > 0) {
                    var xList = this.getElementsByTagNameNS(nodeList[0], this.gmlns, "X");
                    var yList = this.getElementsByTagNameNS(nodeList[0], this.gmlns, "Y");
                    if (xList.length > 0 && yList.length > 0) {
                        coords = [xList[0].firstChild.nodeValue, yList[0].firstChild.nodeValue];
                    }
                }
            }
            if (coords.length == 2) {
                coords[2] = null;
            }
            if (this.xy) {
                return new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
            } else {
                return new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
            }
        },
        multipoint: function (node) {
            var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "Point");
            var components = [];
            if (nodeList.length > 0) {
                var point;
                for (var i = 0; i < nodeList.length; ++i) {
                    point = this.parseGeometry.point.apply(this, [nodeList[i]]);
                    if (point) {
                        components.push(point);
                    }
                }
            }
            return new OpenLayers.Geometry.MultiPoint(components);
        },
        linestring: function (node, ring) {
            var nodeList, coordString;
            var coords = [];
            var points = [];
            nodeList = this.getElementsByTagNameNS(node, this.gmlns, "posList");
            if (nodeList.length > 0) {
                coordString = this.concatChildValues(nodeList[0]);
                coordString = coordString.replace(this.regExes.trimSpace, "");
                coords = coordString.split(this.regExes.splitSpace);
                var dim = parseInt(nodeList[0].getAttribute("dimension"));
                var j, x, y, z;
                for (var i = 0; i < coords.length / dim; ++i) {
                    j = i * dim;
                    x = coords[j];
                    y = coords[j + 1];
                    z = (dim == 2) ? null : coords[j + 2];
                    if (this.xy) {
                        points.push(new OpenLayers.Geometry.Point(x, y, z));
                    } else {
                        points.push(new OpenLayers.Geometry.Point(y, x, z));
                    }
                }
            }
            if (coords.length == 0) {
                nodeList = this.getElementsByTagNameNS(node, this.gmlns, "coordinates");
                if (nodeList.length > 0) {
                    coordString = this.concatChildValues(nodeList[0]);
                    coordString = coordString.replace(this.regExes.trimSpace, "");
                    coordString = coordString.replace(this.regExes.trimComma, ",");
                    var pointList = coordString.split(this.regExes.splitSpace);
                    for (var i = 0; i < pointList.length; ++i) {
                        coords = pointList[i].split(",");
                        if (coords.length == 2) {
                            coords[2] = null;
                        }
                        if (this.xy) {
                            points.push(new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]));
                        } else {
                            points.push(new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]));
                        }
                    }
                }
            }
            var line = null;
            if (points.length != 0) {
                if (ring) {
                    line = new OpenLayers.Geometry.LinearRing(points);
                } else {
                    line = new OpenLayers.Geometry.LineString(points);
                }
            }
            return line;
        },
        multilinestring: function (node) {
            var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "LineString");
            var components = [];
            if (nodeList.length > 0) {
                var line;
                for (var i = 0; i < nodeList.length; ++i) {
                    line = this.parseGeometry.linestring.apply(this, [nodeList[i]]);
                    if (line) {
                        components.push(line);
                    }
                }
            }
            return new OpenLayers.Geometry.MultiLineString(components);
        },
        polygon: function (node) {
            var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "LinearRing");
            var components = [];
            if (nodeList.length > 0) {
                var ring;
                for (var i = 0; i < nodeList.length; ++i) {
                    ring = this.parseGeometry.linestring.apply(this, [nodeList[i], true]);
                    if (ring) {
                        components.push(ring);
                    }
                }
            }
            return new OpenLayers.Geometry.Polygon(components);
        },
        multipolygon: function (node) {
            var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "Polygon");
            var components = [];
            if (nodeList.length > 0) {
                var polygon;
                for (var i = 0; i < nodeList.length; ++i) {
                    polygon = this.parseGeometry.polygon.apply(this, [nodeList[i]]);
                    if (polygon) {
                        components.push(polygon);
                    }
                }
            }
            return new OpenLayers.Geometry.MultiPolygon(components);
        },
        envelope: function (node) {
            var components = [];
            var coordString;
            var envelope;
            var lpoint = this.getElementsByTagNameNS(node, this.gmlns, "lowerCorner");
            if (lpoint.length > 0) {
                var coords = [];
                if (lpoint.length > 0) {
                    coordString = lpoint[0].firstChild.nodeValue;
                    coordString = coordString.replace(this.regExes.trimSpace, "");
                    coords = coordString.split(this.regExes.splitSpace);
                }
                if (coords.length == 2) {
                    coords[2] = null;
                }
                if (this.xy) {
                    var lowerPoint = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
                } else {
                    var lowerPoint = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
                }
            }
            var upoint = this.getElementsByTagNameNS(node, this.gmlns, "upperCorner");
            if (upoint.length > 0) {
                var coords = [];
                if (upoint.length > 0) {
                    coordString = upoint[0].firstChild.nodeValue;
                    coordString = coordString.replace(this.regExes.trimSpace, "");
                    coords = coordString.split(this.regExes.splitSpace);
                }
                if (coords.length == 2) {
                    coords[2] = null;
                }
                if (this.xy) {
                    var upperPoint = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
                } else {
                    var upperPoint = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
                }
            }
            if (lowerPoint && upperPoint) {
                components.push(new OpenLayers.Geometry.Point(lowerPoint.x, lowerPoint.y));
                components.push(new OpenLayers.Geometry.Point(upperPoint.x, lowerPoint.y));
                components.push(new OpenLayers.Geometry.Point(upperPoint.x, upperPoint.y));
                components.push(new OpenLayers.Geometry.Point(lowerPoint.x, upperPoint.y));
                components.push(new OpenLayers.Geometry.Point(lowerPoint.x, lowerPoint.y));
                var ring = new OpenLayers.Geometry.LinearRing(components);
                envelope = new OpenLayers.Geometry.Polygon([ring]);
            }
            return envelope;
        }
    },
    parseAttributes: function (node) {
        var attributes = {};
        var childNode = node.firstChild;
        var children, i, child, grandchild;
        while (childNode) {
            children = childNode.childNodes;
            for (i = 0; i < children.length; ++i) {
                child = children[i];
                name = (child.prefix) ? child.nodeName.split(":")[1] : child.nodeName;
                grandchild = child.childNodes[0];
                if (grandchild && grandchild.nodeValue) {
                    var value = grandchild.nodeValue;
                    value.replace(this.regExes.trimSpace, "");
                    attributes[name] = value;
                }
            }
            childNode = childNode.nextSibling;
        }
        return attributes;
    },
    write: function (features) {
        var node;
        if (typeof (features.nodeType) != 'number') {
            if (!(features instanceof Array)) {
                features = [features];
            }
            var gml = this.createElementNS("http://www.opengis.net/wfs", "wfs:" + this.collectionName);
            for (var i = 0; i < features.length; i++) {
                gml.appendChild(this.createFeatureXML(features[i]));
            }
            node = gml;
        } else {
            node = features;
        }
        return OpenLayers.Format.XML.prototype.write.apply(this, [node]);
    },
    createFeatureXML: function (feature, notContained) {
        var geometry = feature.geometry;
        var geometryNode = this.buildGeometryNode(geometry);
        geometryNode.setAttribute("srsName", feature.layer.projection.getCode());
        var geomContainer = this.createElementNS(this.featureNS, this.featurePrefix + ":" + this.geometryName);
        geomContainer.appendChild(geometryNode);
        var featureNode = this.createElementNS(this.featureNS, this.featurePrefix + ":" + this.layerName);
        var fid = feature.fid || feature.id;
        featureNode.setAttribute("fid", fid);
        featureNode.appendChild(geomContainer);
        for (var attr in feature.attributes) {
            var attrText = this.createTextNode(feature.attributes[attr]);
            var nodename = attr.substring(attr.lastIndexOf(":") + 1);
            var attrContainer = this.createElementNS(this.featureNS, this.featurePrefix + ":" + nodename);
            attrContainer.appendChild(attrText);
            featureNode.appendChild(attrContainer);
        }
        if (!notContained) {
            var featureContainer = this.createElementNS(this.gmlns, "gml:" + this.featureName);
            featureContainer.appendChild(featureNode);
            return featureContainer;
        }
        return featureNode;
    },
    buildGeometryNode: function (geometry) {
        if (this.externalProjection && this.internalProjection) {
            geometry = geometry.clone();
            geometry.transform(this.internalProjection, this.externalProjection);
        }
        var className = geometry.CLASS_NAME;
        var type = className.substring(className.lastIndexOf(".") + 1);
        var builder = this.buildGeometry[type.toLowerCase()];
        return builder.apply(this, [geometry]);
    },
    buildGeometry: {
        point: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:Point");
            gml.appendChild(this.buildCoordinatesNode(geometry));
            return gml;
        },
        multipoint: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:MultiPoint");
            var points = geometry.components;
            var pointMember, pointGeom;
            for (var i = 0; i < points.length; i++) {
                pointMember = this.createElementNS(this.gmlns, "gml:pointMember");
                pointGeom = this.buildGeometry.point.apply(this, [points[i]]);
                pointMember.appendChild(pointGeom);
                gml.appendChild(pointMember);
            }
            return gml;
        },
        linestring: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:LineString");
            gml.appendChild(this.buildCoordinatesNode(geometry));
            return gml;
        },
        multilinestring: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:MultiLineString");
            var lines = geometry.components;
            var lineMember, lineGeom;
            for (var i = 0; i < lines.length; ++i) {
                lineMember = this.createElementNS(this.gmlns, "gml:lineStringMember");
                lineGeom = this.buildGeometry.linestring.apply(this, [lines[i]]);
                lineMember.appendChild(lineGeom);
                gml.appendChild(lineMember);
            }
            return gml;
        },
        linearring: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:LinearRing");
            gml.appendChild(this.buildCoordinatesNode(geometry));
            return gml;
        },
        polygon: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:Polygon");
            var rings = geometry.components;
            var ringMember, ringGeom, type;
            for (var i = 0; i < rings.length; ++i) {
                type = (i == 0) ? "outerBoundaryIs" : "innerBoundaryIs";
                ringMember = this.createElementNS(this.gmlns, "gml:" + type);
                ringGeom = this.buildGeometry.linearring.apply(this, [rings[i]]);
                ringMember.appendChild(ringGeom);
                gml.appendChild(ringMember);
            }
            return gml;
        },
        multipolygon: function (geometry) {
            var gml = this.createElementNS(this.gmlns, "gml:MultiPolygon");
            var polys = geometry.components;
            var polyMember, polyGeom;
            for (var i = 0; i < polys.length; ++i) {
                polyMember = this.createElementNS(this.gmlns, "gml:polygonMember");
                polyGeom = this.buildGeometry.polygon.apply(this, [polys[i]]);
                polyMember.appendChild(polyGeom);
                gml.appendChild(polyMember);
            }
            return gml;
        },
        bounds: function (bounds) {
            var gml = this.createElementNS(this.gmlns, "gml:Box");
            gml.appendChild(this.buildCoordinatesNode(bounds));
            return gml;
        }
    },
    buildCoordinatesNode: function (geometry) {
        var coordinatesNode = this.createElementNS(this.gmlns, "gml:coordinates");
        coordinatesNode.setAttribute("decimal", ".");
        coordinatesNode.setAttribute("cs", ",");
        coordinatesNode.setAttribute("ts", " ");
        var parts = [];
        if (geometry instanceof OpenLayers.Bounds) {
            parts.push(geometry.left + "," + geometry.bottom);
            parts.push(geometry.right + "," + geometry.top);
        } else {
            var points = (geometry.components) ? geometry.components : [geometry];
            for (var i = 0; i < points.length; i++) {
                parts.push(points[i].x + "," + points[i].y);
            }
        }
        var txtNode = this.createTextNode(parts.join(" "));
        coordinatesNode.appendChild(txtNode);
        return coordinatesNode;
    },
    CLASS_NAME: "OpenLayers.Format.GML"
});
if (!OpenLayers.Format.GML) {
    OpenLayers.Format.GML = {};
}
OpenLayers.Format.GML.Base = OpenLayers.Class(OpenLayers.Format.XML, {
    namespaces: {
        gml: "http://www.opengis.net/gml",
        xlink: "http://www.w3.org/1999/xlink",
        xsi: "http://www.w3.org/2001/XMLSchema-instance",
        wfs: "http://www.opengis.net/wfs"
    },
    defaultPrefix: "gml",
    schemaLocation: null,
    featureType: null,
    featureNS: null,
    geometryName: "geometry",
    extractAttributes: true,
    srsName: null,
    xy: true,
    geometryTypes: null,
    regExes: {
        trimSpace: (/^\s*|\s*$/g),
        removeSpace: (/\s*/g),
        splitSpace: (/\s+/),
        trimComma: (/\s*,\s*/g)
    },
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
        this.setNamespace("feature", options.featureNS);
        this.setGeometryTypes();
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        if (data && data.nodeType == 9) {
            data = data.documentElement;
        }
        var features = [];
        this.readNode(data, {
            features: features
        });
        if (features.length == 0) {
            var elements = this.getElementsByTagNameNS(data, this.namespaces.gml, "featureMember");
            if (elements.length) {
                for (var i = 0, len = elements.length; i < len; ++i) {
                    this.readNode(elements[i], {
                        features: features
                    });
                }
            } else {
                var elements = this.getElementsByTagNameNS(data, this.namespaces.gml, "featureMembers");
                if (elements.length) {
                    this.readNode(elements[0], {
                        features: features
                    });
                }
            }
        }
        return features;
    },
    readers: {
        "gml": {
            "featureMember": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "featureMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "name": function (node, obj) {
                obj.name = this.getChildValue(node);
            },
            "boundedBy": function (node, obj) {
                var container = {};
                this.readChildNodes(node, container);
                if (container.components && container.components.length > 0) {
                    obj.bounds = container.components[0];
                }
            },
            "Point": function (node, container) {
                var obj = {
                    points: []
                };
                this.readChildNodes(node, obj);
                if (!container.components) {
                    container.components = [];
                }
                container.components.push(obj.points[0]);
            },
            "coordinates": function (node, obj) {
                var str = this.concatChildValues(node).replace(this.regExes.trimSpace, "");
                str = str.replace(this.regExes.trimComma, ",");
                var pointList = str.split(this.regExes.splitSpace);
                var coords;
                var numPoints = pointList.length;
                var points = new Array(numPoints);
                for (var i = 0; i < numPoints; ++i) {
                    coords = pointList[i].split(",");
                    if (this.xy) {
                        points[i] = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
                    } else {
                        points[i] = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
                    }
                }
                obj.points = points;
            },
            "coord": function (node, obj) {
                var coord = {};
                this.readChildNodes(node, coord);
                if (!obj.points) {
                    obj.points = [];
                }
                obj.points.push(new OpenLayers.Geometry.Point(coord.x, coord.y, coord.z));
            },
            "X": function (node, coord) {
                coord.x = this.getChildValue(node);
            },
            "Y": function (node, coord) {
                coord.y = this.getChildValue(node);
            },
            "Z": function (node, coord) {
                coord.z = this.getChildValue(node);
            },
            "MultiPoint": function (node, container) {
                var obj = {
                    components: []
                };
                this.readChildNodes(node, obj);
                container.components = [new OpenLayers.Geometry.MultiPoint(obj.components)];
            },
            "pointMember": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "LineString": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                if (!container.components) {
                    container.components = [];
                }
                container.components.push(new OpenLayers.Geometry.LineString(obj.points));
            },
            "MultiLineString": function (node, container) {
                var obj = {
                    components: []
                };
                this.readChildNodes(node, obj);
                container.components = [new OpenLayers.Geometry.MultiLineString(obj.components)];
            },
            "lineStringMember": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "Polygon": function (node, container) {
                var obj = {
                    outer: null,
                    inner: []
                };
                this.readChildNodes(node, obj);
                obj.inner.unshift(obj.outer);
                if (!container.components) {
                    container.components = [];
                }
                container.components.push(new OpenLayers.Geometry.Polygon(obj.inner));
            },
            "LinearRing": function (node, obj) {
                var container = {};
                this.readChildNodes(node, container);
                obj.components = [new OpenLayers.Geometry.LinearRing(container.points)];
            },
            "MultiPolygon": function (node, container) {
                var obj = {
                    components: []
                };
                this.readChildNodes(node, obj);
                container.components = [new OpenLayers.Geometry.MultiPolygon(obj.components)];
            },
            "polygonMember": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "GeometryCollection": function (node, container) {
                var obj = {
                    components: []
                };
                this.readChildNodes(node, obj);
                container.components = [new OpenLayers.Geometry.Collection(obj.components)];
            },
            "geometryMember": function (node, obj) {
                this.readChildNodes(node, obj);
            }
        },
        "feature": {
            "*": function (node, obj) {
                var name;
                var local = node.localName || node.nodeName.split(":").pop();
                if (local == this.featureType) {
                    name = "_typeName";
                } else {
                    if (node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
                        if (this.extractAttributes) {
                            name = "_attribute";
                        }
                    } else {
                        name = "_geometry";
                    }
                }
                if (name) {
                    this.readers.feature[name].apply(this, [node, obj]);
                }
            },
            "_typeName": function (node, obj) {
                var container = {
                    components: [],
                    attributes: {}
                };
                this.readChildNodes(node, container);
                if (container.name) {
                    container.attributes.name = container.name;
                }
                var feature = new OpenLayers.Feature.Vector(container.components[0], container.attributes);
                var fid = node.getAttribute("fid") || this.getAttributeNS(node, this.namespaces["gml"], "id");
                if (fid) {
                    feature.fid = fid;
                }
                if (this.internalProjection && this.externalProjection && feature.geometry) {
                    feature.geometry.transform(this.externalProjection, this.internalProjection);
                }
                if (container.bounds) {
                    feature.geometry.bounds = container.bounds;
                }
                obj.features.push(feature);
            },
            "_geometry": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "_attribute": function (node, obj) {
                var local = node.localName || node.nodeName.split(":").pop();
                var value = this.getChildValue(node);
                obj.attributes[local] = value;
            }
        },
        "wfs": {
            "FeatureCollection": function (node, obj) {
                this.readChildNodes(node, obj);
            }
        }
    },
    write: function (features) {
        var name;
        if (features instanceof Array) {
            name = "featureMembers";
        } else {
            name = "featureMember";
        }
        var root = this.writeNode("gml:" + name, features);
        this.setAttributeNS(root, this.namespaces["xsi"], "xsi:schemaLocation", this.schemaLocation);
        return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
    },
    writers: {
        "gml": {
            "featureMember": function (feature) {
                var node = this.createElementNSPlus("gml:featureMember");
                this.writeNode("feature:_typeName", feature, node);
                return node;
            },
            "MultiPoint": function (geometry) {
                var node = this.createElementNSPlus("gml:MultiPoint");
                for (var i = 0; i < geometry.components.length; ++i) {
                    this.writeNode("pointMember", geometry.components[i], node);
                }
                return node;
            },
            "pointMember": function (geometry) {
                var node = this.createElementNSPlus("gml:pointMember");
                this.writeNode("Point", geometry, node);
                return node;
            },
            "MultiLineString": function (geometry) {
                var node = this.createElementNSPlus("gml:MultiLineString");
                for (var i = 0; i < geometry.components.length; ++i) {
                    this.writeNode("lineStringMember", geometry.components[i], node);
                }
                return node;
            },
            "lineStringMember": function (geometry) {
                var node = this.createElementNSPlus("gml:lineStringMember");
                this.writeNode("LineString", geometry, node);
                return node;
            },
            "MultiPolygon": function (geometry) {
                var node = this.createElementNSPlus("gml:MultiPolygon");
                for (var i = 0; i < geometry.components.length; ++i) {
                    this.writeNode("polygonMember", geometry.components[i], node);
                }
                return node;
            },
            "polygonMember": function (geometry) {
                var node = this.createElementNSPlus("gml:polygonMember");
                this.writeNode("Polygon", geometry, node);
                return node;
            },
            "GeometryCollection": function (geometry) {
                var node = this.createElementNSPlus("gml:GeometryCollection");
                for (var i = 0, len = geometry.components.length; i < len; ++i) {
                    this.writeNode("geometryMember", geometry.components[i], node);
                }
                return node;
            },
            "geometryMember": function (geometry) {
                var node = this.createElementNSPlus("gml:geometryMember");
                var child = this.writeNode("feature:_geometry", geometry);
                node.appendChild(child.firstChild);
                return node;
            }
        },
        "feature": {
            "_typeName": function (feature) {
                var node = this.createElementNSPlus("feature:" + this.featureType, {
                    attributes: {
                        fid: feature.fid
                    }
                });
                if (feature.geometry) {
                    this.writeNode("feature:_geometry", feature.geometry, node);
                }
                for (var name in feature.attributes) {
                    var value = feature.attributes[name];
                    if (value != null) {
                        this.writeNode("feature:_attribute", {
                            name: name,
                            value: value
                        }, node);
                    }
                }
                return node;
            },
            "_geometry": function (geometry) {
                if (this.externalProjection && this.internalProjection) {
                    geometry = geometry.clone().transform(this.internalProjection, this.externalProjection);
                }
                var node = this.createElementNSPlus("feature:" + this.geometryName);
                var type = this.geometryTypes[geometry.CLASS_NAME];
                var child = this.writeNode("gml:" + type, geometry, node);
                if (this.srsName) {
                    child.setAttribute("srsName", this.srsName);
                }
                return node;
            },
            "_attribute": function (obj) {
                return this.createElementNSPlus("feature:" + obj.name, {
                    value: obj.value
                });
            }
        },
        "wfs": {
            "FeatureCollection": function (features) {
                var node = this.createElementNSPlus("wfs:FeatureCollection");
                for (var i = 0, len = features.length; i < len; ++i) {
                    this.writeNode("gml:featureMember", features[i], node);
                }
                return node;
            }
        }
    },
    setGeometryTypes: function () {
        this.geometryTypes = {
            "OpenLayers.Geometry.Point": "Point",
            "OpenLayers.Geometry.MultiPoint": "MultiPoint",
            "OpenLayers.Geometry.LineString": "LineString",
            "OpenLayers.Geometry.MultiLineString": "MultiLineString",
            "OpenLayers.Geometry.Polygon": "Polygon",
            "OpenLayers.Geometry.MultiPolygon": "MultiPolygon",
            "OpenLayers.Geometry.Collection": "GeometryCollection"
        };
    },
    CLASS_NAME: "OpenLayers.Format.GML.Base"
});
OpenLayers.Format.GML.v3 = OpenLayers.Class(OpenLayers.Format.GML.Base, {
    schemaLocation: "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",
    curve: false,
    multiCurve: true,
    surface: false,
    multiSurface: true,
    initialize: function (options) {
        OpenLayers.Format.GML.Base.prototype.initialize.apply(this, [options]);
    },
    readers: {
        "gml": OpenLayers.Util.applyDefaults({
            "featureMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "Curve": function (node, container) {
                var obj = {
                    points: []
                };
                this.readChildNodes(node, obj);
                if (!container.components) {
                    container.components = [];
                }
                container.components.push(new OpenLayers.Geometry.LineString(obj.points));
            },
            "segments": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "LineStringSegment": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                if (obj.points) {
                    Array.prototype.push.apply(container.points, obj.points);
                }
            },
            "pos": function (node, obj) {
                var str = this.getChildValue(node).replace(this.regExes.trimSpace, "");
                var coords = str.split(this.regExes.splitSpace);
                var point;
                if (this.xy) {
                    point = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
                } else {
                    point = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
                }
                obj.points = [point];
            },
            "posList": function (node, obj) {
                var str = this.concatChildValues(node).replace(this.regExes.trimSpace, "");
                var coords = str.split(this.regExes.splitSpace);
                var dim = parseInt(node.getAttribute("dimension")) || 2;
                var j, x, y, z;
                var numPoints = coords.length / dim;
                var points = new Array(numPoints);
                for (var i = 0, len = coords.length; i < len; i += dim) {
                    x = coords[i];
                    y = coords[i + 1];
                    z = (dim == 2) ? undefined : coords[i + 2];
                    if (this.xy) {
                        points[i / dim] = new OpenLayers.Geometry.Point(x, y, z);
                    } else {
                        points[i / dim] = new OpenLayers.Geometry.Point(y, x, z);
                    }
                }
                obj.points = points;
            },
            "Surface": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "patches": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "PolygonPatch": function (node, obj) {
                this.readers.gml.Polygon.apply(this, [node, obj]);
            },
            "exterior": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                container.outer = obj.components[0];
            },
            "interior": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                container.inner.push(obj.components[0]);
            },
            "MultiCurve": function (node, container) {
                var obj = {
                    components: []
                };
                this.readChildNodes(node, obj);
                if (obj.components.length > 0) {
                    container.components = [new OpenLayers.Geometry.MultiLineString(obj.components)];
                }
            },
            "curveMember": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "MultiSurface": function (node, container) {
                var obj = {
                    components: []
                };
                this.readChildNodes(node, obj);
                if (obj.components.length > 0) {
                    container.components = [new OpenLayers.Geometry.MultiPolygon(obj.components)];
                }
            },
            "surfaceMember": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "surfaceMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "pointMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "lineStringMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "polygonMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "geometryMembers": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "Envelope": function (node, container) {
                var obj = {
                    points: new Array(2)
                };
                this.readChildNodes(node, obj);
                if (!container.components) {
                    container.components = [];
                }
                var min = obj.points[0];
                var max = obj.points[1];
                container.components.push(new OpenLayers.Bounds(min.x, min.y, max.x, max.y));
            },
            "lowerCorner": function (node, container) {
                var obj = {};
                this.readers.gml.pos.apply(this, [node, obj]);
                container.points[0] = obj.points[0];
            },
            "upperCorner": function (node, container) {
                var obj = {};
                this.readers.gml.pos.apply(this, [node, obj]);
                container.points[1] = obj.points[0];
            }
        }, OpenLayers.Format.GML.Base.prototype.readers["gml"]),
        "feature": OpenLayers.Format.GML.Base.prototype.readers["feature"],
        "wfs": OpenLayers.Format.GML.Base.prototype.readers["wfs"]
    },
    write: function (features) {
        var name;
        if (features instanceof Array) {
            name = "featureMembers";
        } else {
            name = "featureMember";
        }
        var root = this.writeNode("gml:" + name, features);
        this.setAttributeNS(root, this.namespaces["xsi"], "xsi:schemaLocation", this.schemaLocation);
        return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
    },
    writers: {
        "gml": OpenLayers.Util.applyDefaults({
            "featureMembers": function (features) {
                var node = this.createElementNSPlus("gml:featureMembers");
                for (var i = 0, len = features.length; i < len; ++i) {
                    this.writeNode("feature:_typeName", features[i], node);
                }
                return node;
            },
            "Point": function (geometry) {
                var node = this.createElementNSPlus("gml:Point");
                this.writeNode("pos", geometry, node);
                return node;
            },
            "pos": function (point) {
                var pos = (this.xy) ? (point.x + " " + point.y) : (point.y + " " + point.x);
                return this.createElementNSPlus("gml:pos", {
                    value: pos
                });
            },
            "LineString": function (geometry) {
                var node = this.createElementNSPlus("gml:LineString");
                this.writeNode("posList", geometry.components, node);
                return node;
            },
            "Curve": function (geometry) {
                var node = this.createElementNSPlus("gml:Curve");
                this.writeNode("segments", geometry, node);
                return node;
            },
            "segments": function (geometry) {
                var node = this.createElementNSPlus("gml:segments");
                this.writeNode("LineStringSegment", geometry, node);
                return node;
            },
            "LineStringSegment": function (geometry) {
                var node = this.createElementNSPlus("gml:LineStringSegment");
                this.writeNode("posList", geometry.components, node);
                return node;
            },
            "posList": function (points) {
                var len = points.length;
                var parts = new Array(len);
                var point;
                for (var i = 0; i < len; ++i) {
                    point = points[i];
                    if (this.xy) {
                        parts[i] = point.x + " " + point.y;
                    } else {
                        parts[i] = point.y + " " + point.x;
                    }
                }
                return this.createElementNSPlus("gml:posList", {
                    value: parts.join(" ")
                });
            },
            "Surface": function (geometry) {
                var node = this.createElementNSPlus("gml:Surface");
                this.writeNode("patches", geometry, node);
                return node;
            },
            "patches": function (geometry) {
                var node = this.createElementNSPlus("gml:patches");
                this.writeNode("PolygonPatch", geometry, node);
                return node;
            },
            "PolygonPatch": function (geometry) {
                var node = this.createElementNSPlus("gml:PolygonPatch", {
                    attributes: {
                        interpolation: "planar"
                    }
                });
                this.writeNode("exterior", geometry.components[0], node);
                for (var i = 1, len = geometry.components.length; i < len; ++i) {
                    this.writeNode("interior", geometry.components[i], node);
                }
                return node;
            },
            "Polygon": function (geometry) {
                var node = this.createElementNSPlus("gml:Polygon");
                this.writeNode("exterior", geometry.components[0], node);
                for (var i = 1, len = geometry.components.length; i < len; ++i) {
                    this.writeNode("interior", geometry.components[i], node);
                }
                return node;
            },
            "exterior": function (ring) {
                var node = this.createElementNSPlus("gml:exterior");
                this.writeNode("LinearRing", ring, node);
                return node;
            },
            "interior": function (ring) {
                var node = this.createElementNSPlus("gml:interior");
                this.writeNode("LinearRing", ring, node);
                return node;
            },
            "LinearRing": function (ring) {
                var node = this.createElementNSPlus("gml:LinearRing");
                this.writeNode("posList", ring.components, node);
                return node;
            },
            "MultiCurve": function (geometry) {
                var node = this.createElementNSPlus("gml:MultiCurve");
                for (var i = 0, len = geometry.components.length; i < len; ++i) {
                    this.writeNode("curveMember", geometry.components[i], node);
                }
                return node;
            },
            "curveMember": function (geometry) {
                var node = this.createElementNSPlus("gml:curveMember");
                if (this.curve) {
                    this.writeNode("Curve", geometry, node);
                } else {
                    this.writeNode("LineString", geometry, node);
                }
                return node;
            },
            "MultiSurface": function (geometry) {
                var node = this.createElementNSPlus("gml:MultiSurface");
                for (var i = 0, len = geometry.components.length; i < len; ++i) {
                    this.writeNode("surfaceMember", geometry.components[i], node);
                }
                return node;
            },
            "surfaceMember": function (polygon) {
                var node = this.createElementNSPlus("gml:surfaceMember");
                if (this.surface) {
                    this.writeNode("Surface", polygon, node);
                } else {
                    this.writeNode("Polygon", polygon, node);
                }
                return node;
            },
            "Envelope": function (bounds) {
                var node = this.createElementNSPlus("gml:Envelope");
                this.writeNode("lowerCorner", bounds, node);
                this.writeNode("upperCorner", bounds, node);
                if (this.srsName) {
                    node.setAttribute("srsName", this.srsName);
                }
                return node;
            },
            "lowerCorner": function (bounds) {
                var pos = (this.xy) ? (bounds.left + " " + bounds.bottom) : (bounds.bottom + " " + bounds.left);
                return this.createElementNSPlus("gml:lowerCorner", {
                    value: pos
                });
            },
            "upperCorner": function (bounds) {
                var pos = (this.xy) ? (bounds.right + " " + bounds.top) : (bounds.top + " " + bounds.right);
                return this.createElementNSPlus("gml:upperCorner", {
                    value: pos
                });
            }
        }, OpenLayers.Format.GML.Base.prototype.writers["gml"]),
        "feature": OpenLayers.Format.GML.Base.prototype.writers["feature"],
        "wfs": OpenLayers.Format.GML.Base.prototype.writers["wfs"]
    },
    setGeometryTypes: function () {
        this.geometryTypes = {
            "OpenLayers.Geometry.Point": "Point",
            "OpenLayers.Geometry.MultiPoint": "MultiPoint",
            "OpenLayers.Geometry.LineString": (this.curve === true) ? "Curve" : "LineString",
            "OpenLayers.Geometry.MultiLineString": (this.multiCurve === false) ? "MultiLineString" : "MultiCurve",
            "OpenLayers.Geometry.Polygon": (this.surface === true) ? "Surface" : "Polygon",
            "OpenLayers.Geometry.MultiPolygon": (this.multiSurface === false) ? "MultiPolygon" : "MultiSurface",
            "OpenLayers.Geometry.Collection": "GeometryCollection"
        };
    },
    CLASS_NAME: "OpenLayers.Format.GML.v3"
});
OpenLayers.Style = OpenLayers.Class({
    name: null,
    title: null,
    description: null,
    layerName: null,
    isDefault: false,
    rules: null,
    context: null,
    defaultStyle: null,
    propertyStyles: null,
    initialize: function (style, options) {
        this.rules = [];
        this.setDefaultStyle(style || OpenLayers.Feature.Vector.style["default"]);
        OpenLayers.Util.extend(this, options);
    },
    destroy: function () {
        for (var i = 0, len = this.rules.length; i < len; i++) {
            this.rules[i].destroy();
            this.rules[i] = null;
        }
        this.rules = null;
        this.defaultStyle = null;
    },
    createSymbolizer: function (feature) {
        var style = this.createLiterals(OpenLayers.Util.extend({}, this.defaultStyle), feature);
        var rules = this.rules;
        var rule, context;
        var elseRules = [];
        var appliedRules = false;
        for (var i = 0, len = rules.length; i < len; i++) {
            rule = rules[i];
            var applies = rule.evaluate(feature);
            if (applies) {
                if (rule instanceof OpenLayers.Rule && rule.elseFilter) {
                    elseRules.push(rule);
                } else {
                    appliedRules = true;
                    this.applySymbolizer(rule, style, feature);
                }
            }
        }
        if (appliedRules == false && elseRules.length > 0) {
            appliedRules = true;
            for (var i = 0, len = elseRules.length; i < len; i++) {
                this.applySymbolizer(elseRules[i], style, feature);
            }
        }
        if (rules.length > 0 && appliedRules == false) {
            style.display = "none";
        } else {
            style.display = "";
        }
        return style;
    },
    applySymbolizer: function (rule, style, feature) {
        var symbolizerPrefix = feature.geometry ? this.getSymbolizerPrefix(feature.geometry) : OpenLayers.Style.SYMBOLIZER_PREFIXES[0];
        var symbolizer = rule.symbolizer[symbolizerPrefix] || rule.symbolizer;
        return this.createLiterals(OpenLayers.Util.extend(style, symbolizer), feature);
    },
    createLiterals: function (style, feature) {
        var context = this.context || feature.attributes || feature.data;
        for (var i in this.propertyStyles) {
            style[i] = OpenLayers.Style.createLiteral(style[i], context, feature);
        }
        return style;
    },
    findPropertyStyles: function () {
        var propertyStyles = {};
        var style = this.defaultStyle;
        this.addPropertyStyles(propertyStyles, style);
        var rules = this.rules;
        var symbolizer, value;
        for (var i = 0, len = rules.length; i < len; i++) {
            var symbolizer = rules[i].symbolizer;
            for (var key in symbolizer) {
                value = symbolizer[key];
                if (typeof value == "object") {
                    this.addPropertyStyles(propertyStyles, value);
                } else {
                    this.addPropertyStyles(propertyStyles, symbolizer);
                    break;
                }
            }
        }
        return propertyStyles;
    },
    addPropertyStyles: function (propertyStyles, symbolizer) {
        var property;
        for (var key in symbolizer) {
            property = symbolizer[key];
            if (typeof property == "string" && property.match(/\$\{\w+\}/)) {
                propertyStyles[key] = true;
            }
        }
        return propertyStyles;
    },
    addRules: function (rules) {
        this.rules = this.rules.concat(rules);
        this.propertyStyles = this.findPropertyStyles();
    },
    setDefaultStyle: function (style) {
        this.defaultStyle = style;
        this.propertyStyles = this.findPropertyStyles();
    },
    getSymbolizerPrefix: function (geometry) {
        var prefixes = OpenLayers.Style.SYMBOLIZER_PREFIXES;
        for (var i = 0, len = prefixes.length; i < len; i++) {
            if (geometry.CLASS_NAME.indexOf(prefixes[i]) != -1) {
                return prefixes[i];
            }
        }
    },
    CLASS_NAME: "OpenLayers.Style"
});
OpenLayers.Style.createLiteral = function (value, context, feature) {
    if (typeof value == "string" && value.indexOf("${") != -1) {
        value = OpenLayers.String.format(value, context, [feature]);
        value = (isNaN(value) || !value) ? value : parseFloat(value);
    }
    return value;
};
OpenLayers.Style.SYMBOLIZER_PREFIXES = ['Point', 'Line', 'Polygon', 'Text'];
OpenLayers.Filter = OpenLayers.Class({
    options: null,
    initialize: function (options) {
        OpenLayers.Util.extend(this, options);
        this.options = options;
    },
    destroy: function () {},
    evaluate: function (context) {
        return true;
    },
    clone: function () {
        return null;
    },
    CLASS_NAME: "OpenLayers.Filter"
});
OpenLayers.Filter.FeatureId = OpenLayers.Class(OpenLayers.Filter, {
    fids: null,
    initialize: function (options) {
        this.fids = [];
        OpenLayers.Filter.prototype.initialize.apply(this, [options]);
    },
    evaluate: function (feature) {
        for (var i = 0, len = this.fids.length; i < len; i++) {
            var fid = feature.fid || feature.id;
            if (fid == this.fids[i]) {
                return true;
            }
        }
        return false;
    },
    clone: function () {
        return new OpenLayers.Filter.FeatureId({
            fids: this.fids.slice()
        });
    },
    CLASS_NAME: "OpenLayers.Filter.FeatureId"
});
OpenLayers.Filter.Logical = OpenLayers.Class(OpenLayers.Filter, {
    filters: null,
    type: null,
    initialize: function (options) {
        this.filters = [];
        OpenLayers.Filter.prototype.initialize.apply(this, [options]);
    },
    destroy: function () {
        this.filters = null;
        OpenLayers.Filter.prototype.destroy.apply(this);
    },
    evaluate: function (context) {
        switch (this.type) {
        case OpenLayers.Filter.Logical.AND:
            for (var i = 0, len = this.filters.length; i < len; i++) {
                if (this.filters[i].evaluate(context) == false) {
                    return false;
                }
            }
            return true;
        case OpenLayers.Filter.Logical.OR:
            for (var i = 0, len = this.filters.length; i < len; i++) {
                if (this.filters[i].evaluate(context) == true) {
                    return true;
                }
            }
            return false;
        case OpenLayers.Filter.Logical.NOT:
            return (!this.filters[0].evaluate(context));
        }
    },
    clone: function () {
        var filters = [];
        for (var i = 0, len = this.filters.length; i < len; ++i) {
            filters.push(this.filters[i].clone());
        }
        return new OpenLayers.Filter.Logical({
            type: this.type,
            filters: filters
        });
    },
    CLASS_NAME: "OpenLayers.Filter.Logical"
});
OpenLayers.Filter.Logical.AND = "&&";
OpenLayers.Filter.Logical.OR = "||";
OpenLayers.Filter.Logical.NOT = "!";
OpenLayers.Filter.Comparison = OpenLayers.Class(OpenLayers.Filter, {
    type: null,
    property: null,
    value: null,
    lowerBoundary: null,
    upperBoundary: null,
    initialize: function (options) {
        OpenLayers.Filter.prototype.initialize.apply(this, [options]);
    },
    evaluate: function (context) {
        switch (this.type) {
        case OpenLayers.Filter.Comparison.EQUAL_TO:
        case OpenLayers.Filter.Comparison.LESS_THAN:
        case OpenLayers.Filter.Comparison.GREATER_THAN:
        case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:
        case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:
            return this.binaryCompare(context, this.property, this.value);
        case OpenLayers.Filter.Comparison.BETWEEN:
            var result = context[this.property] >= this.lowerBoundary;
            result = result && context[this.property] <= this.upperBoundary;
            return result;
        case OpenLayers.Filter.Comparison.LIKE:
            var regexp = new RegExp(this.value, "gi");
            return regexp.test(context[this.property]);
        }
    },
    value2regex: function (wildCard, singleChar, escapeChar) {
        if (wildCard == ".") {
            var msg = "'.' is an unsupported wildCard character for " + "OpenLayers.Filter.Comparison";
            OpenLayers.Console.error(msg);
            return null;
        }
        wildCard = wildCard ? wildCard : "*";
        singleChar = singleChar ? singleChar : ".";
        escapeChar = escapeChar ? escapeChar : "!";
        this.value = this.value.replace(new RegExp("\\" + escapeChar + "(.|$)", "g"), "\\$1");
        this.value = this.value.replace(new RegExp("\\" + singleChar, "g"), ".");
        this.value = this.value.replace(new RegExp("\\" + wildCard, "g"), ".*");
        this.value = this.value.replace(new RegExp("\\\\.\\*", "g"), "\\" + wildCard);
        this.value = this.value.replace(new RegExp("\\\\\\.", "g"), "\\" + singleChar);
        return this.value;
    },
    regex2value: function () {
        var value = this.value;
        value = value.replace(/!/g, "!!");
        value = value.replace(/(\\)?\\\./g, function ($0, $1) {
            return $1 ? $0 : "!.";
        });
        value = value.replace(/(\\)?\\\*/g, function ($0, $1) {
            return $1 ? $0 : "!*";
        });
        value = value.replace(/\\\\/g, "\\");
        value = value.replace(/\.\*/g, "*");
        return value;
    },
    binaryCompare: function (context, property, value) {
        switch (this.type) {
        case OpenLayers.Filter.Comparison.EQUAL_TO:
            return context[property] == value;
        case OpenLayers.Filter.Comparison.NOT_EQUAL_TO:
            return context[property] != value;
        case OpenLayers.Filter.Comparison.LESS_THAN:
            return context[property] < value;
        case OpenLayers.Filter.Comparison.GREATER_THAN:
            return context[property] > value;
        case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:
            return context[property] <= value;
        case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:
            return context[property] >= value;
        }
    },
    clone: function () {
        return new OpenLayers.Filter.Comparison({
            type: this.type,
            property: this.property,
            value: this.value,
            lowerBoundary: this.lowerBoundary,
            upperBoundary: this.upperBoundary
        });
    },
    CLASS_NAME: "OpenLayers.Filter.Comparison"
});
OpenLayers.Filter.Comparison.EQUAL_TO = "==";
OpenLayers.Filter.Comparison.NOT_EQUAL_TO = "!=";
OpenLayers.Filter.Comparison.LESS_THAN = "<";
OpenLayers.Filter.Comparison.GREATER_THAN = ">";
OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO = "<=";
OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO = ">=";
OpenLayers.Filter.Comparison.BETWEEN = "..";
OpenLayers.Filter.Comparison.LIKE = "~";
OpenLayers.Format.Filter = OpenLayers.Class(OpenLayers.Format.XML, {
    defaultVersion: "1.0.0",
    version: null,
    parser: null,
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    },
    write: function (filter, options) {
        var version = (options && options.version) || this.version || this.defaultVersion;
        if (!this.parser || this.parser.VERSION != version) {
            var format = OpenLayers.Format.Filter["v" + version.replace(/\./g, "_")];
            if (!format) {
                throw "Can't find a Filter parser for version " + version;
            }
            this.parser = new format(this.options);
        }
        return this.parser.write(filter);
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var root = data.nodeType == 9 ? data.documentElement : data;
        var version = this.version;
        if (!version) {
            version = this.defaultVersion;
        }
        if (!this.parser || this.parser.VERSION != version) {
            var format = OpenLayers.Format.Filter["v" + version.replace(/\./g, "_")];
            if (!format) {
                throw "Can't find a Filter parser for version " + version;
            }
            this.parser = new format(this.options);
        }
        var filter = this.parser.read(data);
        return filter;
    },
    CLASS_NAME: "OpenLayers.Format.Filter"
});
OpenLayers.Format.Filter.v1 = OpenLayers.Class(OpenLayers.Format.XML, {
    namespaces: {
        ogc: "http://www.opengis.net/ogc",
        gml: "http://www.opengis.net/gml",
        xlink: "http://www.w3.org/1999/xlink",
        xsi: "http://www.w3.org/2001/XMLSchema-instance"
    },
    defaultPrefix: "ogc",
    schemaLocation: null,
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    },
    read: function (data) {
        var obj = {};
        var filter = this.readers.ogc["Filter"].apply(this, [data, obj]);
        return obj.filter;
    },
    readers: {
        "ogc": {
            "Filter": function (node, parent) {
                var obj = {
                    fids: [],
                    filters: []
                };
                this.readChildNodes(node, obj);
                if (obj.fids.length > 0) {
                    parent.filter = new OpenLayers.Filter.FeatureId({
                        fids: obj.fids
                    });
                } else if (obj.filters.length > 0) {
                    parent.filter = obj.filters[0];
                }
            },
            "FeatureId": function (node, obj) {
                var fid = node.getAttribute("fid");
                if (fid) {
                    obj.fids.push(fid);
                }
            },
            "And": function (node, obj) {
                var filter = new OpenLayers.Filter.Logical({
                    type: OpenLayers.Filter.Logical.AND
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "Or": function (node, obj) {
                var filter = new OpenLayers.Filter.Logical({
                    type: OpenLayers.Filter.Logical.OR
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "Not": function (node, obj) {
                var filter = new OpenLayers.Filter.Logical({
                    type: OpenLayers.Filter.Logical.NOT
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsNotEqualTo": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.NOT_EQUAL_TO
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsLessThan": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.LESS_THAN
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsGreaterThan": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.GREATER_THAN
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsLessThanOrEqualTo": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsGreaterThanOrEqualTo": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsBetween": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.BETWEEN
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            },
            "PropertyIsLike": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.LIKE
                });
                this.readChildNodes(node, filter);
                var wildCard = node.getAttribute("wildCard");
                var singleChar = node.getAttribute("singleChar");
                var esc = node.getAttribute("escape");
                filter.value2regex(wildCard, singleChar, esc);
                obj.filters.push(filter);
            },
            "Literal": function (node, obj) {
                obj.value = this.numericIf(this.getChildValue(node));
            },
            "PropertyName": function (node, filter) {
                filter.property = this.getChildValue(node);
            },
            "LowerBoundary": function (node, filter) {
                filter.lowerBoundary = this.numericIf(this.readOgcExpression(node));
            },
            "UpperBoundary": function (node, filter) {
                filter.upperBoundary = this.numericIf(this.readOgcExpression(node));
            }
        }
    },
    readOgcExpression: function (node) {
        var obj = {};
        this.readChildNodes(node, obj);
        var value = obj.value;
        if (!value) {
            value = this.getChildValue(node);
        }
        return value;
    },
    write: function (filter) {
        return this.writers.ogc["Filter"].apply(this, [filter]);
    },
    writers: {
        "ogc": {
            "Filter": function (filter) {
                var node = this.createElementNSPlus("ogc:Filter");
                var sub = filter.CLASS_NAME.split(".").pop();
                if (sub == "FeatureId") {
                    for (var i = 0; i < filter.fids.length; ++i) {
                        this.writeNode("FeatureId", filter.fids[i], node);
                    }
                } else {
                    this.writeNode(this.getFilterType(filter), filter, node);
                }
                return node;
            },
            "FeatureId": function (fid) {
                return this.createElementNSPlus("ogc:FeatureId", {
                    attributes: {
                        fid: fid
                    }
                });
            },
            "And": function (filter) {
                var node = this.createElementNSPlus("ogc:And");
                var childFilter;
                for (var i = 0; i < filter.filters.length; ++i) {
                    childFilter = filter.filters[i];
                    this.writeNode(this.getFilterType(childFilter), childFilter, node);
                }
                return node;
            },
            "Or": function (filter) {
                var node = this.createElementNSPlus("ogc:Or");
                var childFilter;
                for (var i = 0; i < filter.filters.length; ++i) {
                    childFilter = filter.filters[i];
                    this.writeNode(this.getFilterType(childFilter), childFilter, node);
                }
                return node;
            },
            "Not": function (filter) {
                var node = this.createElementNSPlus("ogc:Not");
                var childFilter = filter.filters[0];
                this.writeNode(this.getFilterType(childFilter), childFilter, node);
                return node;
            },
            "PropertyIsNotEqualTo": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsNotEqualTo");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "PropertyIsLessThan": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsLessThan");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "PropertyIsGreaterThan": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsGreaterThan");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "PropertyIsLessThanOrEqualTo": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsLessThanOrEqualTo");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "PropertyIsGreaterThanOrEqualTo": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsGreaterThanOrEqualTo");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "PropertyIsBetween": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsBetween");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("LowerBoundary", filter, node);
                this.writeNode("UpperBoundary", filter, node);
                return node;
            },
            "PropertyIsLike": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsLike", {
                    attributes: {
                        wildCard: "*",
                        singleChar: ".",
                        escape: "!"
                    }
                });
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.regex2value(), node);
                return node;
            },
            "PropertyName": function (filter) {
                return this.createElementNSPlus("ogc:PropertyName", {
                    value: filter.property
                });
            },
            "Literal": function (value) {
                return this.createElementNSPlus("ogc:Literal", {
                    value: value
                });
            },
            "LowerBoundary": function (filter) {
                var node = this.createElementNSPlus("ogc:LowerBoundary");
                this.writeNode("Literal", filter.lowerBoundary, node);
                return node;
            },
            "UpperBoundary": function (filter) {
                var node = this.createElementNSPlus("ogc:UpperBoundary");
                this.writeNode("Literal", filter.upperBoundary, node);
                return node;
            },
            "DWITHIN": function (filter) {
                var node = this.createElementNSPlus("ogc:DWithin");
                this.writeNode("PropertyName", filter, node);
                var child = this.writeNode("feature:_geometry", filter.value);
                node.appendChild(child.firstChild);
                this.writeNode("Distance", filter, node);
                return node;
            },
            "INTERSECTS": function (filter) {
                var node = this.createElementNSPlus("ogc:Intersects");
                this.writeNode("PropertyName", filter, node);
                var child = this.writeNode("feature:_geometry", filter.value);
                node.appendChild(child.firstChild);
                return node;
            },
            "Distance": function (filter) {
                return this.createElementNSPlus("ogc:Distance", {
                    attributes: {
                        units: filter.distanceUnits
                    },
                    value: filter.distance
                });
            }
        }
    },
    getFilterType: function (filter) {
        var filterType = this.filterMap[filter.type];
        if (!filterType) {
            throw "Filter writing not supported for rule type: " + filter.type;
        }
        return filterType;
    },
    filterMap: {
        "&&": "And",
        "||": "Or",
        "!": "Not",
        "==": "PropertyIsEqualTo",
        "!=": "PropertyIsNotEqualTo",
        "<": "PropertyIsLessThan",
        ">": "PropertyIsGreaterThan",
        "<=": "PropertyIsLessThanOrEqualTo",
        ">=": "PropertyIsGreaterThanOrEqualTo",
        "..": "PropertyIsBetween",
        "~": "PropertyIsLike",
        "BBOX": "BBOX",
        "DWITHIN": "DWITHIN",
        "INTERSECTS": "INTERSECTS"
    },
    CLASS_NAME: "OpenLayers.Format.Filter.v1"
});
OpenLayers.Format.Filter.v1_1_0 = OpenLayers.Class(OpenLayers.Format.Filter.v1, {
    VERSION: "1.1.0",
    schemaLocation: "http://www.opengis.net/ogc/filter/1.1.0/filter.xsd",
    initialize: function (options) {
        OpenLayers.Format.Filter.v1.prototype.initialize.apply(this, [options]);
    },
    readers: {
        "ogc": OpenLayers.Util.applyDefaults({
            "PropertyIsEqualTo": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    matchCase: !! (node.getAttribute("matchCase"))
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            }
        }, OpenLayers.Format.Filter.v1.prototype.readers["ogc"]),
        "gml": OpenLayers.Format.GML.v3.prototype.readers["gml"],
        "feature": OpenLayers.Format.GML.v3.prototype.readers["feature"]
    },
    writers: {
        "ogc": OpenLayers.Util.applyDefaults({
            "PropertyIsEqualTo": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsEqualTo", {
                    attributes: {
                        matchCase: filter.matchCase
                    }
                });
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "BBOX": function (filter) {
                var node = this.createElementNSPlus("ogc:BBOX");
                this.writeNode("PropertyName", filter, node);
                var box = this.writeNode("gml:Envelope", filter.value);
                if (filter.projection) {
                    box.setAttribute("srsName", filter.projection);
                }
                node.appendChild(box);
                return node;
            }
        }, OpenLayers.Format.Filter.v1.prototype.writers["ogc"]),
        "gml": OpenLayers.Format.GML.v3.prototype.writers["gml"],
        "feature": OpenLayers.Format.GML.v3.prototype.writers["feature"]
    },
    CLASS_NAME: "OpenLayers.Format.Filter.v1_1_0"
});
OpenLayers.Format.WFST.v1_1_0 = OpenLayers.Class(OpenLayers.Format.WFST.v1, {
    version: "1.1.0",
    schemaLocations: {
        "wfs": "http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"
    },
    initialize: function (options) {
        OpenLayers.Format.WFST.v1.prototype.initialize.apply(this, [options]);
        OpenLayers.Format.GML.v3.prototype.setGeometryTypes.call(this);
    },
    readers: {
        "wfs": OpenLayers.Util.applyDefaults({
            "TransactionResponse": function (node, obj) {
                obj.insertIds = [];
                obj.success = false;
                this.readChildNodes(node, obj);
            },
            "TransactionSummary": function (node, obj) {
                obj.success = true;
            },
            "InsertResults": function (node, obj) {
                this.readChildNodes(node, obj);
            },
            "Feature": function (node, container) {
                var obj = {
                    fids: []
                };
                this.readChildNodes(node, obj);
                container.insertIds.push(obj.fids[0]);
            }
        }, OpenLayers.Format.WFST.v1.prototype.readers["wfs"]),
        "gml": OpenLayers.Format.GML.v3.prototype.readers["gml"],
        "feature": OpenLayers.Format.GML.v3.prototype.readers["feature"],
        "ogc": OpenLayers.Format.Filter.v1_1_0.prototype.readers["ogc"]
    },
    writers: {
        "wfs": OpenLayers.Util.applyDefaults({
            "Query": function (options) {
                options = OpenLayers.Util.extend({
                    featureNS: this.featureNS,
                    featurePrefix: this.featurePrefix,
                    featureType: this.featureType,
                    srsName: this.srsName
                }, options);
                var node = this.createElementNSPlus("wfs:Query", {
                    attributes: {
                        typeName: (options.featureNS ? options.featurePrefix + ":" : "") + options.featureType,
                        srsName: options.srsName
                    }
                });
                if (options.featureNS) {
                    node.setAttribute("xmlns:" + options.featurePrefix, options.featureNS);
                }
                if (options.filter) {
                    this.setFilterProperty(options.filter);
                    this.writeNode("ogc:Filter", options.filter, node);
                }
                return node;
            }
        }, OpenLayers.Format.WFST.v1.prototype.writers["wfs"]),
        "gml": OpenLayers.Format.GML.v3.prototype.writers["gml"],
        "feature": OpenLayers.Format.GML.v3.prototype.writers["feature"],
        "ogc": OpenLayers.Format.Filter.v1_1_0.prototype.writers["ogc"]
    },
    CLASS_NAME: "OpenLayers.Format.WFST.v1_1_0"
});
OpenLayers.Protocol.WFS.v1_1_0 = OpenLayers.Class(OpenLayers.Protocol.WFS.v1, {
    version: "1.1.0",
    CLASS_NAME: "OpenLayers.Protocol.WFS.v1_1_0"
});
OpenLayers.Filter.Spatial = OpenLayers.Class(OpenLayers.Filter, {
    type: null,
    property: null,
    value: null,
    distance: null,
    distanceUnits: null,
    initialize: function (options) {
        OpenLayers.Filter.prototype.initialize.apply(this, [options]);
    },
    evaluate: function (feature) {
        var intersect = false;
        switch (this.type) {
        case OpenLayers.Filter.Spatial.BBOX:
        case OpenLayers.Filter.Spatial.INTERSECTS:
            if (feature.geometry) {
                var geom = this.value;
                if (this.value.CLASS_NAME == "OpenLayers.Bounds") {
                    geom = this.value.toGeometry();
                }
                if (feature.geometry.intersects(geom)) {
                    intersect = true;
                }
            }
            break;
        default:
            OpenLayers.Console.error(OpenLayers.i18n("filterEvaluateNotImplemented"));
            break;
        }
        return intersect;
    },
    CLASS_NAME: "OpenLayers.Filter.Spatial"
});
OpenLayers.Filter.Spatial.BBOX = "BBOX";
OpenLayers.Filter.Spatial.INTERSECTS = "INTERSECTS";
OpenLayers.Filter.Spatial.DWITHIN = "DWITHIN";
OpenLayers.Control.WFSGetFeature = OpenLayers.Class(OpenLayers.Control, {
    geometryName: "the_geom",
    multipleKey: null,
    toggleKey: null,
    modifiers: null,
    multiple: false,
    clickout: true,
    hover: false,
    toggle: false,
    box: false,
    clickTolerance: 5,
    maxFeatures: 10,
    wfsVersion: "1.1.0",
    layer: null,
    features: null,
    hoverFeature: null,
    wms2wfsReplace: [/\/wms/, "/wfs"],
    handlerOptions: null,
    handlers: null,
    hoverRequest: null,
    EVENT_TYPES: ["featureselected", "featureunselected", "clickout", "beforefeatureselected", "hoverfeature", "outfeature"],
    initialize: function (layer, options) {
        this.EVENT_TYPES = OpenLayers.Control.WFSGetFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
        options = options || {};
        options.handlerOptions = options.handlerOptions || {};
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.layer = layer;
        this.features = {};
        this.handlers = {
            click: new OpenLayers.Handler.Click(this, {
                click: this.selectSingle
            }, this.handlerOptions.click || {})
        };
        if (this.box) {
            this.handlers.box = new OpenLayers.Handler.Box(this, {
                done: this.selectBox
            }, OpenLayers.Util.extend(this.handlerOptions.box || {}, {
                boxDivClassName: "olHandlerBoxSelectFeature"
            }));
        }
        if (this.hover) {
            this.handlers.hover = new OpenLayers.Handler.Hover(this, {
                'move': this.cancelHover,
                'pause': this.selectHover
            }, OpenLayers.Util.extend(this.handlerOptions.hover || {}, {
                'delay': 250
            }));
        }
    },
    activate: function () {
        if (!this.active) {
            for (var i in this.handlers) {
                this.handlers[i].activate();
            }
        }
        return OpenLayers.Control.prototype.activate.apply(this, arguments);
    },
    deactivate: function () {
        if (this.active) {
            for (var i in this.handlers) {
                this.handlers[i].deactivate();
            }
        }
        return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
    },
    unselectAll: function (options) {
        var feature;
        for (var i = this.features.length - 1; i >= 0; --i) {
            feature = this.features[i];
            if (!options || options.except != feature) {
                this.unselect(feature);
            }
        }
    },
    selectSingle: function (evt) {
        document.body.style.cursor = "wait";
        var bounds = this.pixelToBounds(evt.xy);
        this.setModifiers(evt);
        this.request(bounds, {
            single: true
        });
    },
    selectBox: function (position) {
        if (position instanceof OpenLayers.Bounds) {
            var minXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left, position.bottom));
            var maxXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right, position.top));
            var bounds = new OpenLayers.Bounds(minXY.lon, minXY.lat, maxXY.lon, maxXY.lat);
            this.setModifiers(this.handlers.box.dragHandler.evt);
            this.request(bounds);
            return;
            if (!this.multipleSelect()) {
                this.unselectAll();
            }
            var prevMultiple = this.multiple;
            this.multiple = true;
            for (var i = 0, len = this.layer.features.length; i < len; ++i) {
                var feature = this.layer.features[i];
                if (this.geometryTypes == null || OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) > -1) {
                    if (bounds.toGeometry().intersects(feature.geometry)) {
                        if (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) == -1) {
                            this.select(feature);
                        }
                    }
                }
            }
            this.multiple = prevMultiple;
        }
    },
    selectHover: function (evt) {
        var bounds = this.pixelToBounds(evt.xy);
        this.request(bounds, {
            single: true,
            hover: true
        });
    },
    cancelHover: function () {
        if (this.hoverRequest) {
            this.hoverRequest.abort();
            this.hoverRequest = null;
        }
    },
    request: function (bounds, options) {
        options = options || {};
        var filter = new OpenLayers.Filter.Spatial({
            type: OpenLayers.Filter.Spatial.BBOX,
            value: bounds
        });
        var typeName = this.layer.params["LAYERS"].split(":");
        var wfsOptions = {
            url: this.layer.url.replace.apply(this.layer.url, this.wms2wfsReplace),
            featureType: typeName[typeName.length - 1],
            srsName: this.map.getProjectionObject().getCode(),
            geometryName: this.geometryName,
            version: this.wfsVersion
        }
        if (typeName.length > 1) {
            wfsOptions.featurePrefix = typeName[0];
        }
        var wfs = new OpenLayers.Protocol.WFS(wfsOptions);
        var response = wfs.read({
            maxFeatures: this.maxFeatures,
            filter: filter,
            callback: function (result) {
                if (result.code == 1) {
                    if (result.features.length) {
                        if (options.single == true) {
                            this.selectBestFeature(result.features, bounds.getCenterLonLat(), options);
                        } else {
                            this.select(result.features);
                        }
                    } else if (options.hover) {
                        this.hoverSelect();
                    } else {
                        this.events.triggerEvent("clickout");
                        if (this.clickout) {
                            this.unselectAll();
                        }
                    }
                }
                document.body.style.cursor = "default";
            },
            scope: this
        });
        if (options.hover == true) {
            this.hoverRequest = response.priv;
        }
    },
    selectBestFeature: function (features, clickPosition, options) {
        options = options || {};
        if (features.length) {
            var point = new OpenLayers.Geometry.Point(clickPosition.lon, clickPosition.lat);
            var feature, resultFeature, dist;
            var minDist = Number.MAX_VALUE;
            for (var i = 0; i < features.length; ++i) {
                feature = features[i];
                if (feature.geometry) {
                    if (feature.geometry instanceof OpenLayers.Geometry.Point) {
                        dist = feature.geometry.distanceTo(point);
                        if (dist < minDist) {
                            minDist = dist;
                            resultFeature = feature;
                        }
                    } else if (feature.geometry.intersects(point)) {
                        resultFeature = feature;
                        break;
                    } else if (feature.geometry.CLASS_NAME.indexOf("Line") != -1) {
                        resultFeature = feature;
                        break;
                    }
                }
            }
            if (options.hover == true) {
                this.hoverSelect(resultFeature);
            } else {
                this.select(resultFeature || features);
            }
        };
    },
    setModifiers: function (evt) {
        this.modifiers = {
            multiple: this.multiple || evt[this.multipleKey],
            toggle: this.toggle || evt[this.toggleKey]
        }
    },
    select: function (features) {
        if (!this.modifiers.multiple && !this.modifiers.toggle) {
            this.unselectAll();
        }
        if (!(features instanceof Array)) {
            features = [features];
        }
        var feature;
        for (var i = 0; i < features.length; ++i) {
            feature = features[i];
            if (this.features[feature.fid || feature.id]) {
                if (this.modifiers.toggle) {
                    this.unselect(this.features[feature.fid || feature.id]);
                }
            } else {
                cont = this.events.triggerEvent("beforefeatureselected", {
                    feature: feature
                });
                if (cont !== false) {
                    this.features[feature.fid || feature.id] = feature;
                    this.events.triggerEvent("featureselected", {
                        feature: feature
                    });
                }
            }
        }
    },
    hoverSelect: function (feature) {
        var fid = feature ? feature.fid || feature.id : null;
        var hfid = this.hoverFeature ? this.hoverFeature.fid || this.hoverFeature.id : null;
        if (hfid && hfid != fid) {
            this.events.triggerEvent("outfeature", {
                feature: this.hoverFeature
            });
            this.hoverFeature = null;
        }
        if (fid && fid != hfid) {
            this.events.triggerEvent("hoverfeature", {
                feature: feature
            });
            this.hoverFeature = feature;
        }
    },
    unselect: function (feature) {
        delete this.features[feature.fid || feature.id];
        this.events.triggerEvent("featureunselected", {
            feature: feature
        });
    },
    unselectAll: function () {
        for (var fid in this.features) {
            this.unselect(this.features[fid]);
        }
    },
    setMap: function (map) {
        for (var i in this.handlers) {
            this.handlers[i].setMap(map);
        }
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
    },
    pixelToBounds: function (pixel) {
        var llPx = pixel.add(-this.clickTolerance / 2, this.clickTolerance / 2);
        var urPx = pixel.add(this.clickTolerance / 2, - this.clickTolerance / 2);
        var ll = this.map.getLonLatFromPixel(llPx);
        var ur = this.map.getLonLatFromPixel(urPx);
        return new OpenLayers.Bounds(ll.lon, ll.lat, ur.lon, ur.lat);
    },
    CLASS_NAME: "OpenLayers.Control.WFSGetFeature"
});
OpenLayers.Tween = OpenLayers.Class({
    INTERVAL: 10,
    easing: null,
    begin: null,
    finish: null,
    duration: null,
    callbacks: null,
    time: null,
    interval: null,
    playing: false,
    initialize: function (easing) {
        this.easing = (easing) ? easing : OpenLayers.Easing.Expo.easeOut;
    },
    start: function (begin, finish, duration, options) {
        this.playing = true;
        this.begin = begin;
        this.finish = finish;
        this.duration = duration;
        this.callbacks = options.callbacks;
        this.time = 0;
        if (this.interval) {
            window.clearInterval(this.interval);
            this.interval = null;
        }
        if (this.callbacks && this.callbacks.start) {
            this.callbacks.start.call(this, this.begin);
        }
        this.interval = window.setInterval(OpenLayers.Function.bind(this.play, this), this.INTERVAL);
    },
    stop: function () {
        if (!this.playing) {
            return;
        }
        if (this.callbacks && this.callbacks.done) {
            this.callbacks.done.call(this, this.finish);
        }
        window.clearInterval(this.interval);
        this.interval = null;
        this.playing = false;
    },
    play: function () {
        var value = {};
        for (var i in this.begin) {
            var b = this.begin[i];
            var f = this.finish[i];
            if (b == null || f == null || isNaN(b) || isNaN(f)) {
                OpenLayers.Console.error('invalid value for Tween');
            }
            var c = f - b;
            value[i] = this.easing.apply(this, [this.time, b, c, this.duration]);
        }
        this.time++;
        if (this.callbacks && this.callbacks.eachStep) {
            this.callbacks.eachStep.call(this, value);
        }
        if (this.time > this.duration) {
            if (this.callbacks && this.callbacks.done) {
                this.callbacks.done.call(this, this.finish);
                this.playing = false;
            }
            window.clearInterval(this.interval);
            this.interval = null;
        }
    },
    CLASS_NAME: "OpenLayers.Tween"
});
OpenLayers.Easing = {
    CLASS_NAME: "OpenLayers.Easing"
};
OpenLayers.Easing.Linear = {
    easeIn: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeOut: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeInOut: function (t, b, c, d) {
        return c * t / d + b;
    },
    CLASS_NAME: "OpenLayers.Easing.Linear"
};
OpenLayers.Easing.Expo = {
    easeIn: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOut: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, - 10 * t / d) + 1) + b;
    },
    easeInOut: function (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, - 10 * --t) + 2) + b;
    },
    CLASS_NAME: "OpenLayers.Easing.Expo"
};
OpenLayers.Easing.Quad = {
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    CLASS_NAME: "OpenLayers.Easing.Quad"
};
OpenLayers.Map = OpenLayers.Class({
    Z_INDEX_BASE: {
        BaseLayer: 100,
        Overlay: 325,
        Feature: 725,
        Popup: 750,
        Control: 1000
    },
    EVENT_TYPES: ["preaddlayer", "addlayer", "removelayer", "changelayer", "movestart", "move", "moveend", "zoomend", "popupopen", "popupclose", "addmarker", "removemarker", "clearmarkers", "mouseover", "mouseout", "mousemove", "dragstart", "drag", "dragend", "changebaselayer"],
    id: null,
    fractionalZoom: false,
    events: null,
    div: null,
    dragging: false,
    size: null,
    viewPortDiv: null,
    layerContainerOrigin: null,
    layerContainerDiv: null,
    layers: null,
    controls: null,
    popups: null,
    baseLayer: null,
    center: null,
    resolution: null,
    zoom: 0,
    panRatio: 1.5,
    viewRequestID: 0,
    tileSize: null,
    projection: "EPSG:4326",
    units: 'degrees',
    resolutions: null,
    maxResolution: 1.40625,
    minResolution: null,
    maxScale: null,
    minScale: null,
    maxExtent: null,
    minExtent: null,
    restrictedExtent: null,
    numZoomLevels: 16,
    theme: null,
    displayProjection: null,
    fallThrough: true,
    panTween: null,
    eventListeners: null,
    panMethod: OpenLayers.Easing.Expo.easeOut,
    paddingForPopups: null,
    initialize: function (div, options) {
        this.tileSize = new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH, OpenLayers.Map.TILE_HEIGHT);
        this.maxExtent = new OpenLayers.Bounds(-180, - 90, 180, 90);
        this.paddingForPopups = new OpenLayers.Bounds(15, 15, 15, 15);
        this.theme = OpenLayers._getScriptLocation() + 'theme/default/style.css';
        OpenLayers.Util.extend(this, options);
        this.id = OpenLayers.Util.createUniqueID("OpenLayers.Map_");
        this.div = OpenLayers.Util.getElement(div);
        OpenLayers.Element.addClass(this.div, 'olMap');
        var id = this.div.id + "_OpenLayers_ViewPort";
        this.viewPortDiv = OpenLayers.Util.createDiv(id, null, null, null, "relative", null, "hidden");
        this.viewPortDiv.style.width = "100%";
        this.viewPortDiv.style.height = "100%";
        this.viewPortDiv.className = "olMapViewport";
        this.div.appendChild(this.viewPortDiv);
        id = this.div.id + "_OpenLayers_Container";
        this.layerContainerDiv = OpenLayers.Util.createDiv(id);
        this.layerContainerDiv.style.zIndex = this.Z_INDEX_BASE['Popup'] - 1;
        this.viewPortDiv.appendChild(this.layerContainerDiv);
        this.events = new OpenLayers.Events(this, this.div, this.EVENT_TYPES, this.fallThrough, {
            includeXY: true
        });
        this.updateSize();
        if (this.eventListeners instanceof Object) {
            this.events.on(this.eventListeners);
        }
        this.events.register("movestart", this, this.updateSize);
        if (OpenLayers.String.contains(navigator.appName, "Microsoft")) {
            this.events.register("resize", this, this.updateSize);
        } else {
            this.updateSizeDestroy = OpenLayers.Function.bind(this.updateSize, this);
            OpenLayers.Event.observe(window, 'resize', this.updateSizeDestroy);
        }
        if (this.theme) {
            var addNode = true;
            var nodes = document.getElementsByTagName('link');
            for (var i = 0, len = nodes.length; i < len; ++i) {
                if (OpenLayers.Util.isEquivalentUrl(nodes.item(i).href, this.theme)) {
                    addNode = false;
                    break;
                }
            }
            if (addNode) {
                var cssNode = document.createElement('link');
                cssNode.setAttribute('rel', 'stylesheet');
                cssNode.setAttribute('type', 'text/css');
                cssNode.setAttribute('href', this.theme);
                document.getElementsByTagName('head')[0].appendChild(cssNode);
            }
        }
        this.layers = [];
        if (this.controls == null) {
            if (OpenLayers.Control != null) {
                this.controls = [new OpenLayers.Control.Navigation(), new OpenLayers.Control.PanZoom(), new OpenLayers.Control.ArgParser(), new OpenLayers.Control.Attribution()];
            } else {
                this.controls = [];
            }
        }
        for (var i = 0, len = this.controls.length; i < len; i++) {
            this.addControlToMap(this.controls[i]);
        }
        this.popups = [];
        this.unloadDestroy = OpenLayers.Function.bind(this.destroy, this);
        OpenLayers.Event.observe(window, 'unload', this.unloadDestroy);
    },
    unloadDestroy: null,
    updateSizeDestroy: null,
    destroy: function () {
        if (!this.unloadDestroy) {
            return false;
        }
        OpenLayers.Event.stopObserving(window, 'unload', this.unloadDestroy);
        this.unloadDestroy = null;
        if (this.updateSizeDestroy) {
            OpenLayers.Event.stopObserving(window, 'resize', this.updateSizeDestroy);
        } else {
            this.events.unregister("resize", this, this.updateSize);
        }
        this.paddingForPopups = null;
        if (this.controls != null) {
            for (var i = this.controls.length - 1; i >= 0; --i) {
                this.controls[i].destroy();
            }
            this.controls = null;
        }
        if (this.layers != null) {
            for (var i = this.layers.length - 1; i >= 0; --i) {
                this.layers[i].destroy(false);
            }
            this.layers = null;
        }
        if (this.viewPortDiv) {
            this.div.removeChild(this.viewPortDiv);
        }
        this.viewPortDiv = null;
        if (this.eventListeners) {
            this.events.un(this.eventListeners);
            this.eventListeners = null;
        }
        this.events.destroy();
        this.events = null;
    },
    setOptions: function (options) {
        OpenLayers.Util.extend(this, options);
    },
    getTileSize: function () {
        return this.tileSize;
    },
    getBy: function (array, property, match) {
        var test = (typeof match.test == "function");
        var found = OpenLayers.Array.filter(this[array], function (item) {
            return item[property] == match || (test && match.test(item[property]));
        });
        return found;
    },
    getLayersBy: function (property, match) {
        return this.getBy("layers", property, match);
    },
    getLayersByName: function (match) {
        return this.getLayersBy("name", match);
    },
    getLayersByClass: function (match) {
        return this.getLayersBy("CLASS_NAME", match);
    },
    getControlsBy: function (property, match) {
        return this.getBy("controls", property, match);
    },
    getControlsByClass: function (match) {
        return this.getControlsBy("CLASS_NAME", match);
    },
    getLayer: function (id) {
        var foundLayer = null;
        for (var i = 0, len = this.layers.length; i < len; i++) {
            var layer = this.layers[i];
            if (layer.id == id) {
                foundLayer = layer;
                break;
            }
        }
        return foundLayer;
    },
    setLayerZIndex: function (layer, zIdx) {
        var z;
        if (layer.fixedZIndex != null) {
            z = layer.fixedZIndex;
        } else {
            z = this.Z_INDEX_BASE[layer.isBaseLayer ? 'BaseLayer' : 'Overlay'] + zIdx * 5;
        }
        layer.setZIndex(z);
    },
    resetLayersZIndex: function () {
        for (var i = 0, len = this.layers.length; i < len; i++) {
            var layer = this.layers[i];
            this.setLayerZIndex(layer, i);
        }
    },
    addLayer: function (layer) {
        for (var i = 0, len = this.layers.length; i < len; i++) {
            if (this.layers[i] == layer) {
                var msg = OpenLayers.i18n('layerAlreadyAdded', {
                    'layerName': layer.name
                });
                OpenLayers.Console.warn(msg);
                return false;
            }
        }
        this.events.triggerEvent("preaddlayer", {
            layer: layer
        });
        layer.div.className = "olLayerDiv";
        layer.div.style.overflow = "";
        this.setLayerZIndex(layer, this.layers.length);
        if (layer.isFixed) {
            this.viewPortDiv.appendChild(layer.div);
        } else {
            this.layerContainerDiv.appendChild(layer.div);
        }
        this.layers.push(layer);
        layer.setMap(this);
        if (layer.isBaseLayer) {
            if (this.baseLayer == null) {
                this.setBaseLayer(layer);
            } else {
                layer.setVisibility(false);
            }
        } else {
            layer.redraw();
        }
        this.events.triggerEvent("addlayer", {
            layer: layer
        });
    },
    addLayers: function (layers) {
        for (var i = 0, len = layers.length; i < len; i++) {
            this.addLayer(layers[i]);
        }
    },
    removeLayer: function (layer, setNewBaseLayer) {
        if (setNewBaseLayer == null) {
            setNewBaseLayer = true;
        }
        if (layer.isFixed) {
            this.viewPortDiv.removeChild(layer.div);
        } else {
            this.layerContainerDiv.removeChild(layer.div);
        }
        OpenLayers.Util.removeItem(this.layers, layer);
        layer.removeMap(this);
        layer.map = null;
        if (this.baseLayer == layer) {
            this.baseLayer = null;
            if (setNewBaseLayer) {
                for (var i = 0, len = this.layers.length; i < len; i++) {
                    var iLayer = this.layers[i];
                    if (iLayer.isBaseLayer) {
                        this.setBaseLayer(iLayer);
                        break;
                    }
                }
            }
        }
        this.resetLayersZIndex();
        this.events.triggerEvent("removelayer", {
            layer: layer
        });
    },
    getNumLayers: function () {
        return this.layers.length;
    },
    getLayerIndex: function (layer) {
        return OpenLayers.Util.indexOf(this.layers, layer);
    },
    setLayerIndex: function (layer, idx) {
        var base = this.getLayerIndex(layer);
        if (idx < 0) {
            idx = 0;
        } else if (idx > this.layers.length) {
            idx = this.layers.length;
        }
        if (base != idx) {
            this.layers.splice(base, 1);
            this.layers.splice(idx, 0, layer);
            for (var i = 0, len = this.layers.length; i < len; i++) {
                this.setLayerZIndex(this.layers[i], i);
            }
            this.events.triggerEvent("changelayer", {
                layer: layer,
                property: "order"
            });
        }
    },
    raiseLayer: function (layer, delta) {
        var idx = this.getLayerIndex(layer) + delta;
        this.setLayerIndex(layer, idx);
    },
    setBaseLayer: function (newBaseLayer) {
        var oldExtent = null;
        if (this.baseLayer) {
            oldExtent = this.baseLayer.getExtent();
        }
        if (newBaseLayer != this.baseLayer) {
            if (OpenLayers.Util.indexOf(this.layers, newBaseLayer) != -1) {
                if (this.baseLayer != null) {
                    this.baseLayer.setVisibility(false);
                }
                this.baseLayer = newBaseLayer;
                this.viewRequestID++;
                this.baseLayer.visibility = true;
                var center = this.getCenter();
                if (center != null) {
                    var newCenter = (oldExtent) ? oldExtent.getCenterLonLat() : center;
                    var newZoom = (oldExtent) ? this.getZoomForExtent(oldExtent, true) : this.getZoomForResolution(this.resolution, true);
                    this.setCenter(newCenter, newZoom, false, true);
                }
                this.events.triggerEvent("changebaselayer", {
                    layer: this.baseLayer
                });
            }
        }
    },
    addControl: function (control, px) {
        this.controls.push(control);
        this.addControlToMap(control, px);
    },
    addControlToMap: function (control, px) {
        control.outsideViewport = (control.div != null);
        if (this.displayProjection && !control.displayProjection) {
            control.displayProjection = this.displayProjection;
        }
        control.setMap(this);
        var div = control.draw(px);
        if (div) {
            if (!control.outsideViewport) {
                div.style.zIndex = this.Z_INDEX_BASE['Control'] + this.controls.length;
                this.viewPortDiv.appendChild(div);
            }
        }
    },
    getControl: function (id) {
        var returnControl = null;
        for (var i = 0, len = this.controls.length; i < len; i++) {
            var control = this.controls[i];
            if (control.id == id) {
                returnControl = control;
                break;
            }
        }
        return returnControl;
    },
    removeControl: function (control) {
        if ((control) && (control == this.getControl(control.id))) {
            if (control.div && (control.div.parentNode == this.viewPortDiv)) {
                this.viewPortDiv.removeChild(control.div);
            }
            OpenLayers.Util.removeItem(this.controls, control);
        }
    },
    addPopup: function (popup, exclusive) {
        if (exclusive) {
            for (var i = this.popups.length - 1; i >= 0; --i) {
                this.removePopup(this.popups[i]);
            }
        }
        popup.map = this;
        this.popups.push(popup);
        var popupDiv = popup.draw();
        if (popupDiv) {
            popupDiv.style.zIndex = this.Z_INDEX_BASE['Popup'] + this.popups.length;
            this.layerContainerDiv.appendChild(popupDiv);
        }
    },
    removePopup: function (popup) {
        OpenLayers.Util.removeItem(this.popups, popup);
        if (popup.div) {
            try {
                this.layerContainerDiv.removeChild(popup.div);
            } catch (e) {}
        }
        popup.map = null;
    },
    getSize: function () {
        var size = null;
        if (this.size != null) {
            size = this.size.clone();
        }
        return size;
    },
    updateSize: function () {
        this.events.clearMouseCache();
        var newSize = this.getCurrentSize();
        var oldSize = this.getSize();
        if (oldSize == null) {
            this.size = oldSize = newSize;
        }
        if (!newSize.equals(oldSize)) {
            this.size = newSize;
            for (var i = 0, len = this.layers.length; i < len; i++) {
                this.layers[i].onMapResize();
            }
            if (this.baseLayer != null) {
                var center = new OpenLayers.Pixel(newSize.w / 2, newSize.h / 2);
                var centerLL = this.getLonLatFromViewPortPx(center);
                var zoom = this.getZoom();
                this.zoom = null;
                this.setCenter(this.getCenter(), zoom);
            }
        }
    },
    getCurrentSize: function () {
        var size = new OpenLayers.Size(this.div.clientWidth, this.div.clientHeight);
        if (size.w == 0 && size.h == 0 || isNaN(size.w) && isNaN(size.h)) {
            var dim = OpenLayers.Element.getDimensions(this.div);
            size.w = dim.width;
            size.h = dim.height;
        }
        if (size.w == 0 && size.h == 0 || isNaN(size.w) && isNaN(size.h)) {
            size.w = parseInt(this.div.style.width);
            size.h = parseInt(this.div.style.height);
        }
        return size;
    },
    calculateBounds: function (center, resolution) {
        var extent = null;
        if (center == null) {
            center = this.getCenter();
        }
        if (resolution == null) {
            resolution = this.getResolution();
        }
        if ((center != null) && (resolution != null)) {
            var size = this.getSize();
            var w_deg = size.w * resolution;
            var h_deg = size.h * resolution;
            extent = new OpenLayers.Bounds(center.lon - w_deg / 2, center.lat - h_deg / 2, center.lon + w_deg / 2, center.lat + h_deg / 2);
        }
        return extent;
    },
    getCenter: function () {
        return this.center;
    },
    getZoom: function () {
        return this.zoom;
    },
    pan: function (dx, dy, options) {
        options = OpenLayers.Util.applyDefaults(options, {
            animate: true,
            dragging: false
        });
        var centerPx = this.getViewPortPxFromLonLat(this.getCenter());
        var newCenterPx = centerPx.add(dx, dy);
        if (!options.dragging || !newCenterPx.equals(centerPx)) {
            var newCenterLonLat = this.getLonLatFromViewPortPx(newCenterPx);
            if (options.animate) {
                this.panTo(newCenterLonLat);
            } else {
                this.setCenter(newCenterLonLat, null, options.dragging);
            }
        }
    },
    panTo: function (lonlat) {
        if (this.panMethod && this.getExtent().scale(this.panRatio).containsLonLat(lonlat)) {
            if (!this.panTween) {
                this.panTween = new OpenLayers.Tween(this.panMethod);
            }
            var center = this.getCenter();
            if (lonlat.lon == center.lon && lonlat.lat == center.lat) {
                return;
            }
            var from = {
                lon: center.lon,
                lat: center.lat
            };
            var to = {
                lon: lonlat.lon,
                lat: lonlat.lat
            };
            this.panTween.start(from, to, 50, {
                callbacks: {
                    start: OpenLayers.Function.bind(function (lonlat) {
                        this.events.triggerEvent("movestart");
                    }, this),
                    eachStep: OpenLayers.Function.bind(function (lonlat) {
                        lonlat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
                        this.moveTo(lonlat, this.zoom, {
                            'dragging': true,
                            'noEvent': true
                        });
                    }, this),
                    done: OpenLayers.Function.bind(function (lonlat) {
                        lonlat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
                        this.moveTo(lonlat, this.zoom, {
                            'noEvent': true
                        });
                        this.events.triggerEvent("moveend");
                    }, this)
                }
            });
        } else {
            this.setCenter(lonlat);
        }
    },
    setCenter: function (lonlat, zoom, dragging, forceZoomChange) {
        this.moveTo(lonlat, zoom, {
            'dragging': dragging,
            'forceZoomChange': forceZoomChange,
            'caller': 'setCenter'
        });
    },
    moveTo: function (lonlat, zoom, options) {
        if (!options) {
            options = {};
        }
        var dragging = options.dragging;
        var forceZoomChange = options.forceZoomChange;
        var noEvent = options.noEvent;
        if (this.panTween && options.caller == "setCenter") {
            this.panTween.stop();
        }
        if (!this.center && !this.isValidLonLat(lonlat)) {
            lonlat = this.maxExtent.getCenterLonLat();
        }
        if (this.restrictedExtent != null) {
            if (lonlat == null) {
                lonlat = this.getCenter();
            }
            if (zoom == null) {
                zoom = this.getZoom();
            }
            var resolution = this.getResolutionForZoom(zoom);
            var extent = this.calculateBounds(lonlat, resolution);
            if (!this.restrictedExtent.containsBounds(extent)) {
                var maxCenter = this.restrictedExtent.getCenterLonLat();
                if (extent.getWidth() > this.restrictedExtent.getWidth()) {
                    lonlat = new OpenLayers.LonLat(maxCenter.lon, lonlat.lat);
                } else if (extent.left < this.restrictedExtent.left) {
                    lonlat = lonlat.add(this.restrictedExtent.left - extent.left, 0);
                } else if (extent.right > this.restrictedExtent.right) {
                    lonlat = lonlat.add(this.restrictedExtent.right - extent.right, 0);
                }
                if (extent.getHeight() > this.restrictedExtent.getHeight()) {
                    lonlat = new OpenLayers.LonLat(lonlat.lon, maxCenter.lat);
                } else if (extent.bottom < this.restrictedExtent.bottom) {
                    lonlat = lonlat.add(0, this.restrictedExtent.bottom - extent.bottom);
                } else if (extent.top > this.restrictedExtent.top) {
                    lonlat = lonlat.add(0, this.restrictedExtent.top - extent.top);
                }
            }
        }
        var zoomChanged = forceZoomChange || ((this.isValidZoomLevel(zoom)) && (zoom != this.getZoom()));
        var centerChanged = (this.isValidLonLat(lonlat)) && (!lonlat.equals(this.center));
        if (zoomChanged || centerChanged || !dragging) {
            if (!this.dragging && !noEvent) {
                this.events.triggerEvent("movestart");
            }
            if (centerChanged) {
                if ((!zoomChanged) && (this.center)) {
                    this.centerLayerContainer(lonlat);
                }
                this.center = lonlat.clone();
            }
            if ((zoomChanged) || (this.layerContainerOrigin == null)) {
                this.layerContainerOrigin = this.center.clone();
                this.layerContainerDiv.style.left = "0px";
                this.layerContainerDiv.style.top = "0px";
            }
            if (zoomChanged) {
                this.zoom = zoom;
                this.resolution = this.getResolutionForZoom(zoom);
                this.viewRequestID++;
            }
            var bounds = this.getExtent();
            this.baseLayer.moveTo(bounds, zoomChanged, dragging);
            bounds = this.baseLayer.getExtent();
            for (var i = 0, len = this.layers.length; i < len; i++) {
                var layer = this.layers[i];
                if (!layer.isBaseLayer) {
                    var inRange = layer.calculateInRange();
                    if (layer.inRange != inRange) {
                        layer.inRange = inRange;
                        if (!inRange) {
                            layer.display(false);
                        }
                        this.events.triggerEvent("changelayer", {
                            layer: layer,
                            property: "visibility"
                        });
                    }
                    if (inRange && layer.visibility) {
                        layer.moveTo(bounds, zoomChanged, dragging);
                        layer.events.triggerEvent("moveend", {
                            "zoomChanged": zoomChanged
                        });
                    }
                }
            }
            if (zoomChanged) {
                for (var i = 0, len = this.popups.length; i < len; i++) {
                    this.popups[i].updatePosition();
                }
            }
            this.events.triggerEvent("move");
            if (zoomChanged) {
                this.events.triggerEvent("zoomend");
            }
        }
        if (!dragging && !noEvent) {
            this.events.triggerEvent("moveend");
        }
        this.dragging = !! dragging;
    },
    centerLayerContainer: function (lonlat) {
        var originPx = this.getViewPortPxFromLonLat(this.layerContainerOrigin);
        var newPx = this.getViewPortPxFromLonLat(lonlat);
        if ((originPx != null) && (newPx != null)) {
            this.layerContainerDiv.style.left = Math.round(originPx.x - newPx.x) + "px";
            this.layerContainerDiv.style.top = Math.round(originPx.y - newPx.y) + "px";
        }
    },
    isValidZoomLevel: function (zoomLevel) {
        return ((zoomLevel != null) && (zoomLevel >= 0) && (zoomLevel < this.getNumZoomLevels()));
    },
    isValidLonLat: function (lonlat) {
        var valid = false;
        if (lonlat != null) {
            var maxExtent = this.getMaxExtent();
            valid = maxExtent.containsLonLat(lonlat);
        }
        return valid;
    },
    getProjection: function () {
        var projection = this.getProjectionObject();
        return projection ? projection.getCode() : null;
    },
    getProjectionObject: function () {
        var projection = null;
        if (this.baseLayer != null) {
            projection = this.baseLayer.projection;
        }
        return projection;
    },
    getMaxResolution: function () {
        var maxResolution = null;
        if (this.baseLayer != null) {
            maxResolution = this.baseLayer.maxResolution;
        }
        return maxResolution;
    },
    getMaxExtent: function (options) {
        var maxExtent = null;
        if (options && options.restricted && this.restrictedExtent) {
            maxExtent = this.restrictedExtent;
        } else if (this.baseLayer != null) {
            maxExtent = this.baseLayer.maxExtent;
        }
        return maxExtent;
    },
    getNumZoomLevels: function () {
        var numZoomLevels = null;
        if (this.baseLayer != null) {
            numZoomLevels = this.baseLayer.numZoomLevels;
        }
        return numZoomLevels;
    },
    getExtent: function () {
        var extent = null;
        if (this.baseLayer != null) {
            extent = this.baseLayer.getExtent();
        }
        return extent;
    },
    getResolution: function () {
        var resolution = null;
        if (this.baseLayer != null) {
            resolution = this.baseLayer.getResolution();
        }
        return resolution;
    },
    getUnits: function () {
        var units = null;
        if (this.baseLayer != null) {
            units = this.baseLayer.units;
        }
        return units;
    },
    getScale: function () {
        var scale = null;
        if (this.baseLayer != null) {
            var res = this.getResolution();
            var units = this.baseLayer.units;
            scale = OpenLayers.Util.getScaleFromResolution(res, units);
        }
        return scale;
    },
    getZoomForExtent: function (bounds, closest) {
        var zoom = null;
        if (this.baseLayer != null) {
            zoom = this.baseLayer.getZoomForExtent(bounds, closest);
        }
        return zoom;
    },
    getResolutionForZoom: function (zoom) {
        var resolution = null;
        if (this.baseLayer) {
            resolution = this.baseLayer.getResolutionForZoom(zoom);
        }
        return resolution;
    },
    getZoomForResolution: function (resolution, closest) {
        var zoom = null;
        if (this.baseLayer != null) {
            zoom = this.baseLayer.getZoomForResolution(resolution, closest);
        }
        return zoom;
    },
    zoomTo: function (zoom) {
        if (this.isValidZoomLevel(zoom)) {
            this.setCenter(null, zoom);
        }
    },
    zoomIn: function () {
        this.zoomTo(this.getZoom() + 1);
    },
    zoomOut: function () {
        this.zoomTo(this.getZoom() - 1);
    },
    zoomToExtent: function (bounds, closest) {
        var center = bounds.getCenterLonLat();
        if (this.baseLayer.wrapDateLine) {
            var maxExtent = this.getMaxExtent();
            bounds = bounds.clone();
            while (bounds.right < bounds.left) {
                bounds.right += maxExtent.getWidth();
            }
            center = bounds.getCenterLonLat().wrapDateLine(maxExtent);
        }
        this.setCenter(center, this.getZoomForExtent(bounds, closest));
    },
    zoomToMaxExtent: function (options) {
        var restricted = (options) ? options.restricted : true;
        var maxExtent = this.getMaxExtent({
            'restricted': restricted
        });
        this.zoomToExtent(maxExtent);
    },
    zoomToScale: function (scale, closest) {
        var res = OpenLayers.Util.getResolutionFromScale(scale, this.baseLayer.units);
        var size = this.getSize();
        var w_deg = size.w * res;
        var h_deg = size.h * res;
        var center = this.getCenter();
        var extent = new OpenLayers.Bounds(center.lon - w_deg / 2, center.lat - h_deg / 2, center.lon + w_deg / 2, center.lat + h_deg / 2);
        this.zoomToExtent(extent, closest);
    },
    getLonLatFromViewPortPx: function (viewPortPx) {
        var lonlat = null;
        if (this.baseLayer != null) {
            lonlat = this.baseLayer.getLonLatFromViewPortPx(viewPortPx);
        }
        return lonlat;
    },
    getViewPortPxFromLonLat: function (lonlat) {
        var px = null;
        if (this.baseLayer != null) {
            px = this.baseLayer.getViewPortPxFromLonLat(lonlat);
        }
        return px;
    },
    getLonLatFromPixel: function (px) {
        return this.getLonLatFromViewPortPx(px);
    },
    getPixelFromLonLat: function (lonlat) {
        var px = this.getViewPortPxFromLonLat(lonlat);
        px.x = Math.round(px.x);
        px.y = Math.round(px.y);
        return px;
    },
    getViewPortPxFromLayerPx: function (layerPx) {
        var viewPortPx = null;
        if (layerPx != null) {
            var dX = parseInt(this.layerContainerDiv.style.left);
            var dY = parseInt(this.layerContainerDiv.style.top);
            viewPortPx = layerPx.add(dX, dY);
        }
        return viewPortPx;
    },
    getLayerPxFromViewPortPx: function (viewPortPx) {
        var layerPx = null;
        if (viewPortPx != null) {
            var dX = -parseInt(this.layerContainerDiv.style.left);
            var dY = -parseInt(this.layerContainerDiv.style.top);
            layerPx = viewPortPx.add(dX, dY);
            if (isNaN(layerPx.x) || isNaN(layerPx.y)) {
                layerPx = null;
            }
        }
        return layerPx;
    },
    getLonLatFromLayerPx: function (px) {
        px = this.getViewPortPxFromLayerPx(px);
        return this.getLonLatFromViewPortPx(px);
    },
    getLayerPxFromLonLat: function (lonlat) {
        var px = this.getPixelFromLonLat(lonlat);
        return this.getLayerPxFromViewPortPx(px);
    },
    CLASS_NAME: "OpenLayers.Map"
});
OpenLayers.Map.TILE_WIDTH = 256;
OpenLayers.Map.TILE_HEIGHT = 256;
OpenLayers.Projection = OpenLayers.Class({
    proj: null,
    projCode: null,
    initialize: function (projCode, options) {
        OpenLayers.Util.extend(this, options);
        this.projCode = projCode;
        if (window.Proj4js) {
            this.proj = new Proj4js.Proj(projCode);
        }
    },
    getCode: function () {
        return this.proj ? this.proj.srsCode : this.projCode;
    },
    getUnits: function () {
        return this.proj ? this.proj.units : null;
    },
    toString: function () {
        return this.getCode();
    },
    equals: function (projection) {
        if (projection && projection.getCode) {
            return this.getCode() == projection.getCode();
        } else {
            return false;
        }
    },
    destroy: function () {
        delete this.proj;
        delete this.projCode;
    },
    CLASS_NAME: "OpenLayers.Projection"
});
OpenLayers.Projection.transforms = {};
OpenLayers.Projection.addTransform = function (from, to, method) {
    if (!OpenLayers.Projection.transforms[from]) {
        OpenLayers.Projection.transforms[from] = {};
    }
    OpenLayers.Projection.transforms[from][to] = method;
};
OpenLayers.Projection.transform = function (point, source, dest) {
    if (source.proj && dest.proj) {
        point = Proj4js.transform(source.proj, dest.proj, point);
    } else if (source && dest && OpenLayers.Projection.transforms[source.getCode()] && OpenLayers.Projection.transforms[source.getCode()][dest.getCode()]) {
        OpenLayers.Projection.transforms[source.getCode()][dest.getCode()](point);
    }
    return point;
};
OpenLayers.Layer = OpenLayers.Class({
    id: null,
    name: null,
    div: null,
    opacity: null,
    alwaysInRange: null,
    EVENT_TYPES: ["loadstart", "loadend", "loadcancel", "visibilitychanged", "moveend"],
    events: null,
    map: null,
    isBaseLayer: false,
    alpha: false,
    displayInLayerSwitcher: true,
    visibility: true,
    attribution: null,
    inRange: false,
    imageSize: null,
    imageOffset: null,
    options: null,
    eventListeners: null,
    gutter: 0,
    projection: null,
    units: null,
    scales: null,
    resolutions: null,
    maxExtent: null,
    minExtent: null,
    maxResolution: null,
    minResolution: null,
    numZoomLevels: null,
    minScale: null,
    maxScale: null,
    displayOutsideMaxExtent: false,
    wrapDateLine: false,
    transitionEffect: null,
    SUPPORTED_TRANSITIONS: ['resize'],
    initialize: function (name, options) {
        this.addOptions(options);
        this.name = name;
        if (this.id == null) {
            this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
            this.div = OpenLayers.Util.createDiv(this.id);
            this.div.style.width = "100%";
            this.div.style.height = "100%";
            this.events = new OpenLayers.Events(this, this.div, this.EVENT_TYPES);
            if (this.eventListeners instanceof Object) {
                this.events.on(this.eventListeners);
            }
        }
        if (this.wrapDateLine) {
            this.displayOutsideMaxExtent = true;
        }
    },
    destroy: function (setNewBaseLayer) {
        if (setNewBaseLayer == null) {
            setNewBaseLayer = true;
        }
        if (this.map != null) {
            this.map.removeLayer(this, setNewBaseLayer);
        }
        this.projection = null;
        this.map = null;
        this.name = null;
        this.div = null;
        this.options = null;
        if (this.events) {
            if (this.eventListeners) {
                this.events.un(this.eventListeners);
            }
            this.events.destroy();
        }
        this.eventListeners = null;
        this.events = null;
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer(this.name, this.options);
        }
        OpenLayers.Util.applyDefaults(obj, this);
        obj.map = null;
        return obj;
    },
    setName: function (newName) {
        if (newName != this.name) {
            this.name = newName;
            if (this.map != null) {
                this.map.events.triggerEvent("changelayer", {
                    layer: this,
                    property: "name"
                });
            }
        }
    },
    addOptions: function (newOptions) {
        if (this.options == null) {
            this.options = {};
        }
        OpenLayers.Util.extend(this.options, newOptions);
        OpenLayers.Util.extend(this, newOptions);
    },
    onMapResize: function () {},
    redraw: function () {
        var redrawn = false;
        if (this.map) {
            this.inRange = this.calculateInRange();
            var extent = this.getExtent();
            if (extent && this.inRange && this.visibility) {
                this.moveTo(extent, true, false);
                redrawn = true;
            }
        }
        return redrawn;
    },
    moveTo: function (bounds, zoomChanged, dragging) {
        var display = this.visibility;
        if (!this.isBaseLayer) {
            display = display && this.inRange;
        }
        this.display(display);
    },
    setMap: function (map) {
        if (this.map == null) {
            this.map = map;
            this.maxExtent = this.maxExtent || this.map.maxExtent;
            this.projection = this.projection || this.map.projection;
            if (this.projection && typeof this.projection == "string") {
                this.projection = new OpenLayers.Projection(this.projection);
            }
            this.units = this.projection.getUnits() || this.units || this.map.units;
            this.initResolutions();
            if (!this.isBaseLayer) {
                this.inRange = this.calculateInRange();
                var show = ((this.visibility) && (this.inRange));
                this.div.style.display = show ? "" : "none";
            }
            this.setTileSize();
        }
    },
    removeMap: function (map) {},
    getImageSize: function () {
        return (this.imageSize || this.tileSize);
    },
    setTileSize: function (size) {
        var tileSize = (size) ? size : ((this.tileSize) ? this.tileSize : this.map.getTileSize());
        this.tileSize = tileSize;
        if (this.gutter) {
            this.imageOffset = new OpenLayers.Pixel(-this.gutter, - this.gutter);
            this.imageSize = new OpenLayers.Size(tileSize.w + (2 * this.gutter), tileSize.h + (2 * this.gutter));
        }
    },
    getVisibility: function () {
        return this.visibility;
    },
    setVisibility: function (visibility) {
        if (visibility != this.visibility) {
            this.visibility = visibility;
            this.display(visibility);
            this.redraw();
            if (this.map != null) {
                this.map.events.triggerEvent("changelayer", {
                    layer: this,
                    property: "visibility"
                });
            }
            this.events.triggerEvent("visibilitychanged");
        }
    },
    display: function (display) {
        var inRange = this.calculateInRange();
        if (display != (this.div.style.display != "none")) {
            this.div.style.display = (display && inRange) ? "block" : "none";
        }
    },
    calculateInRange: function () {
        var inRange = false;
        if (this.alwaysInRange) {
            inRange = true;
        } else {
            if (this.map) {
                var resolution = this.map.getResolution();
                inRange = ((resolution >= this.minResolution) && (resolution <= this.maxResolution));
            }
        }
        return inRange;
    },
    setIsBaseLayer: function (isBaseLayer) {
        if (isBaseLayer != this.isBaseLayer) {
            this.isBaseLayer = isBaseLayer;
            if (this.map != null) {
                this.map.events.triggerEvent("changebaselayer", {
                    layer: this
                });
            }
        }
    },
    initResolutions: function () {
        var props = new Array('projection', 'units', 'scales', 'resolutions', 'maxScale', 'minScale', 'maxResolution', 'minResolution', 'minExtent', 'maxExtent', 'numZoomLevels', 'maxZoomLevel');
        var notScaleProps = ['projection', 'units'];
        var useInRange = false;
        var confProps = {};
        for (var i = 0, len = props.length; i < len; i++) {
            var property = props[i];
            if (this.options[property] && OpenLayers.Util.indexOf(notScaleProps, property) == -1) {
                useInRange = true;
            }
            confProps[property] = this.options[property] || this.map[property];
        }
        if (this.alwaysInRange == null) {
            this.alwaysInRange = !useInRange;
        }
        if ((this.options.minScale != null || this.options.maxScale != null) && this.options.scales == null) {
            confProps.scales = null;
        }
        if ((this.options.minResolution != null || this.options.maxResolution != null) && this.options.resolutions == null) {
            confProps.resolutions = null;
        }
        if ((!confProps.numZoomLevels) && (confProps.maxZoomLevel)) {
            confProps.numZoomLevels = confProps.maxZoomLevel + 1;
        }
        if ((confProps.scales != null) || (confProps.resolutions != null)) {
            if (confProps.scales != null) {
                confProps.resolutions = [];
                for (var i = 0, len = confProps.scales.length; i < len; i++) {
                    var scale = confProps.scales[i];
                    confProps.resolutions[i] = OpenLayers.Util.getResolutionFromScale(scale, confProps.units);
                }
            }
            confProps.numZoomLevels = confProps.resolutions.length;
        } else {
            if (confProps.minScale) {
                confProps.maxResolution = OpenLayers.Util.getResolutionFromScale(confProps.minScale, confProps.units);
            } else if (confProps.maxResolution == "auto") {
                var viewSize = this.map.getSize();
                var wRes = confProps.maxExtent.getWidth() / viewSize.w;
                var hRes = confProps.maxExtent.getHeight() / viewSize.h;
                confProps.maxResolution = Math.max(wRes, hRes);
            }
            if (confProps.maxScale != null) {
                confProps.minResolution = OpenLayers.Util.getResolutionFromScale(confProps.maxScale, confProps.units);
            } else if ((confProps.minResolution == "auto") && (confProps.minExtent != null)) {
                var viewSize = this.map.getSize();
                var wRes = confProps.minExtent.getWidth() / viewSize.w;
                var hRes = confProps.minExtent.getHeight() / viewSize.h;
                confProps.minResolution = Math.max(wRes, hRes);
            }
            if (confProps.minResolution != null && this.options.numZoomLevels == undefined) {
                var ratio = confProps.maxResolution / confProps.minResolution;
                confProps.numZoomLevels = Math.floor(Math.log(ratio) / Math.log(2)) + 1;
            }
            confProps.resolutions = new Array(confProps.numZoomLevels);
            var base = 2;
            if (typeof confProps.minResolution == "number" && confProps.numZoomLevels > 1) {
                base = Math.pow((confProps.maxResolution / confProps.minResolution), (1 / (confProps.numZoomLevels - 1)));
            }
            for (var i = 0; i < confProps.numZoomLevels; i++) {
                var res = confProps.maxResolution / Math.pow(base, i);
                confProps.resolutions[i] = res;
            }
        }
        confProps.resolutions.sort(function (a, b) {
            return (b - a);
        });
        this.resolutions = confProps.resolutions;
        this.maxResolution = confProps.resolutions[0];
        var lastIndex = confProps.resolutions.length - 1;
        this.minResolution = confProps.resolutions[lastIndex];
        this.scales = [];
        for (var i = 0, len = confProps.resolutions.length; i < len; i++) {
            this.scales[i] = OpenLayers.Util.getScaleFromResolution(confProps.resolutions[i], confProps.units);
        }
        this.minScale = this.scales[0];
        this.maxScale = this.scales[this.scales.length - 1];
        this.numZoomLevels = confProps.numZoomLevels;
    },
    getResolution: function () {
        var zoom = this.map.getZoom();
        return this.getResolutionForZoom(zoom);
    },
    getExtent: function () {
        return this.map.calculateBounds();
    },
    getZoomForExtent: function (extent, closest) {
        var viewSize = this.map.getSize();
        var idealResolution = Math.max(extent.getWidth() / viewSize.w, extent.getHeight() / viewSize.h);
        return this.getZoomForResolution(idealResolution, closest);
    },
    getDataExtent: function () {},
    getResolutionForZoom: function (zoom) {
        zoom = Math.max(0, Math.min(zoom, this.resolutions.length - 1));
        var resolution;
        if (this.map.fractionalZoom) {
            var low = Math.floor(zoom);
            var high = Math.ceil(zoom);
            resolution = this.resolutions[high] + ((zoom - low) * (this.resolutions[low] - this.resolutions[high]));
        } else {
            resolution = this.resolutions[Math.round(zoom)];
        }
        return resolution;
    },
    getZoomForResolution: function (resolution, closest) {
        var zoom;
        if (this.map.fractionalZoom) {
            var lowZoom = 0;
            var highZoom = this.resolutions.length - 1;
            var highRes = this.resolutions[lowZoom];
            var lowRes = this.resolutions[highZoom];
            var res;
            for (var i = 0, len = this.resolutions.length; i < len; ++i) {
                res = this.resolutions[i];
                if (res >= resolution) {
                    highRes = res;
                    lowZoom = i;
                }
                if (res <= resolution) {
                    lowRes = res;
                    highZoom = i;
                    break;
                }
            }
            var dRes = highRes - lowRes;
            if (dRes > 0) {
                zoom = lowZoom + ((resolution - lowRes) / dRes);
            } else {
                zoom = lowZoom;
            }
        } else {
            var diff;
            var minDiff = Number.POSITIVE_INFINITY;
            for (var i = 0, len = this.resolutions.length; i < len; i++) {
                if (closest) {
                    diff = Math.abs(this.resolutions[i] - resolution);
                    if (diff > minDiff) {
                        break;
                    }
                    minDiff = diff;
                } else {
                    if (this.resolutions[i] < resolution) {
                        break;
                    }
                }
            }
            zoom = Math.max(0, i - 1);
        }
        return zoom;
    },
    getLonLatFromViewPortPx: function (viewPortPx) {
        var lonlat = null;
        if (viewPortPx != null) {
            var size = this.map.getSize();
            var center = this.map.getCenter();
            if (center) {
                var res = this.map.getResolution();
                var delta_x = viewPortPx.x - (size.w / 2);
                var delta_y = viewPortPx.y - (size.h / 2);
                lonlat = new OpenLayers.LonLat(center.lon + delta_x * res, center.lat - delta_y * res);
                if (this.wrapDateLine) {
                    lonlat = lonlat.wrapDateLine(this.maxExtent);
                }
            }
        }
        return lonlat;
    },
    getViewPortPxFromLonLat: function (lonlat) {
        var px = null;
        if (lonlat != null) {
            var resolution = this.map.getResolution();
            var extent = this.map.getExtent();
            px = new OpenLayers.Pixel((1 / resolution * (lonlat.lon - extent.left)), (1 / resolution * (extent.top - lonlat.lat)));
        }
        return px;
    },
    setOpacity: function (opacity) {
        if (opacity != this.opacity) {
            this.opacity = opacity;
            for (var i = 0, len = this.div.childNodes.length; i < len; ++i) {
                var element = this.div.childNodes[i].firstChild;
                OpenLayers.Util.modifyDOMElement(element, null, null, null, null, null, null, opacity);
            }
        }
    },
    getZIndex: function () {
        return this.div.style.zIndex;
    },
    setZIndex: function (zIndex) {
        this.div.style.zIndex = zIndex;
    },
    adjustBounds: function (bounds) {
        if (this.gutter) {
            var mapGutter = this.gutter * this.map.getResolution();
            bounds = new OpenLayers.Bounds(bounds.left - mapGutter, bounds.bottom - mapGutter, bounds.right + mapGutter, bounds.top + mapGutter);
        }
        if (this.wrapDateLine) {
            var wrappingOptions = {
                'rightTolerance': this.getResolution()
            };
            bounds = bounds.wrapDateLine(this.maxExtent, wrappingOptions);
        }
        return bounds;
    },
    CLASS_NAME: "OpenLayers.Layer"
});
OpenLayers.Layer.SphericalMercator = {
    getExtent: function () {
        var extent = null;
        if (this.sphericalMercator) {
            extent = this.map.calculateBounds();
        } else {
            extent = OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);
        }
        return extent;
    },
    initMercatorParameters: function () {
        this.RESOLUTIONS = [];
        var maxResolution = 156543.0339;
        for (var zoom = 0; zoom <= this.MAX_ZOOM_LEVEL; ++zoom) {
            this.RESOLUTIONS[zoom] = maxResolution / Math.pow(2, zoom);
        }
        this.units = "m";
        this.projection = "EPSG:900913";
    },
    forwardMercator: function (lon, lat) {
        var x = lon * 20037508.34 / 180;
        var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
        y = y * 20037508.34 / 180;
        return new OpenLayers.LonLat(x, y);
    },
    inverseMercator: function (x, y) {
        var lon = (x / 20037508.34) * 180;
        var lat = (y / 20037508.34) * 180;
        lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);
        return new OpenLayers.LonLat(lon, lat);
    },
    projectForward: function (point) {
        var lonlat = OpenLayers.Layer.SphericalMercator.forwardMercator(point.x, point.y);
        point.x = lonlat.lon;
        point.y = lonlat.lat;
        return point;
    },
    projectInverse: function (point) {
        var lonlat = OpenLayers.Layer.SphericalMercator.inverseMercator(point.x, point.y);
        point.x = lonlat.lon;
        point.y = lonlat.lat;
        return point;
    }
};
OpenLayers.Projection.addTransform("EPSG:4326", "EPSG:900913", OpenLayers.Layer.SphericalMercator.projectForward);
OpenLayers.Projection.addTransform("EPSG:900913", "EPSG:4326", OpenLayers.Layer.SphericalMercator.projectInverse);
OpenLayers.Layer.EventPane = OpenLayers.Class(OpenLayers.Layer, {
    smoothDragPan: true,
    isBaseLayer: true,
    isFixed: true,
    pane: null,
    mapObject: null,
    initialize: function (name, options) {
        OpenLayers.Layer.prototype.initialize.apply(this, arguments);
        if (this.pane == null) {
            this.pane = OpenLayers.Util.createDiv(this.div.id + "_EventPane");
        }
    },
    destroy: function () {
        this.mapObject = null;
        OpenLayers.Layer.prototype.destroy.apply(this, arguments);
    },
    setMap: function (map) {
        OpenLayers.Layer.prototype.setMap.apply(this, arguments);
        this.pane.style.zIndex = parseInt(this.div.style.zIndex) + 1;
        this.pane.style.display = this.div.style.display;
        this.pane.style.width = "100%";
        this.pane.style.height = "100%";
        if (OpenLayers.Util.getBrowserName() == "msie") {
            this.pane.style.background = "url(" + OpenLayers.Util.getImagesLocation() + "blank.gif)";
        }
        if (this.isFixed) {
            this.map.viewPortDiv.appendChild(this.pane);
        } else {
            this.map.layerContainerDiv.appendChild(this.pane);
        }
        this.loadMapObject();
        if (this.mapObject == null) {
            this.loadWarningMessage();
        }
    },
    removeMap: function (map) {
        if (this.pane && this.pane.parentNode) {
            this.pane.parentNode.removeChild(this.pane);
            this.pane = null;
        }
        OpenLayers.Layer.prototype.removeMap.apply(this, arguments);
    },
    loadWarningMessage: function () {
        this.div.style.backgroundColor = "darkblue";
        var viewSize = this.map.getSize();
        var msgW = Math.min(viewSize.w, 300);
        var msgH = Math.min(viewSize.h, 200);
        var size = new OpenLayers.Size(msgW, msgH);
        var centerPx = new OpenLayers.Pixel(viewSize.w / 2, viewSize.h / 2);
        var topLeft = centerPx.add(-size.w / 2, - size.h / 2);
        var div = OpenLayers.Util.createDiv(this.name + "_warning", topLeft, size, null, null, null, "auto");
        div.style.padding = "7px";
        div.style.backgroundColor = "yellow";
        div.innerHTML = this.getWarningHTML();
        this.div.appendChild(div);
    },
    getWarningHTML: function () {
        return "";
    },
    display: function (display) {
        OpenLayers.Layer.prototype.display.apply(this, arguments);
        this.pane.style.display = this.div.style.display;
    },
    setZIndex: function (zIndex) {
        OpenLayers.Layer.prototype.setZIndex.apply(this, arguments);
        this.pane.style.zIndex = parseInt(this.div.style.zIndex) + 1;
    },
    moveTo: function (bounds, zoomChanged, dragging) {
        OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
        if (this.mapObject != null) {
            var newCenter = this.map.getCenter();
            var newZoom = this.map.getZoom();
            if (newCenter != null) {
                var moOldCenter = this.getMapObjectCenter();
                var oldCenter = this.getOLLonLatFromMapObjectLonLat(moOldCenter);
                var moOldZoom = this.getMapObjectZoom();
                var oldZoom = this.getOLZoomFromMapObjectZoom(moOldZoom);
                if (!(newCenter.equals(oldCenter)) || !(newZoom == oldZoom)) {
                    if (dragging && this.dragPanMapObject && this.smoothDragPan) {
                        var oldPx = this.map.getViewPortPxFromLonLat(oldCenter);
                        var newPx = this.map.getViewPortPxFromLonLat(newCenter);
                        this.dragPanMapObject(newPx.x - oldPx.x, oldPx.y - newPx.y);
                    } else {
                        var center = this.getMapObjectLonLatFromOLLonLat(newCenter);
                        var zoom = this.getMapObjectZoomFromOLZoom(newZoom);
                        this.setMapObjectCenter(center, zoom, dragging);
                    }
                }
            }
        }
    },
    getLonLatFromViewPortPx: function (viewPortPx) {
        var lonlat = null;
        if ((this.mapObject != null) && (this.getMapObjectCenter() != null)) {
            var moPixel = this.getMapObjectPixelFromOLPixel(viewPortPx);
            var moLonLat = this.getMapObjectLonLatFromMapObjectPixel(moPixel);
            lonlat = this.getOLLonLatFromMapObjectLonLat(moLonLat);
        }
        return lonlat;
    },
    getViewPortPxFromLonLat: function (lonlat) {
        var viewPortPx = null;
        if ((this.mapObject != null) && (this.getMapObjectCenter() != null)) {
            var moLonLat = this.getMapObjectLonLatFromOLLonLat(lonlat);
            var moPixel = this.getMapObjectPixelFromMapObjectLonLat(moLonLat);
            viewPortPx = this.getOLPixelFromMapObjectPixel(moPixel);
        }
        return viewPortPx;
    },
    getOLLonLatFromMapObjectLonLat: function (moLonLat) {
        var olLonLat = null;
        if (moLonLat != null) {
            var lon = this.getLongitudeFromMapObjectLonLat(moLonLat);
            var lat = this.getLatitudeFromMapObjectLonLat(moLonLat);
            olLonLat = new OpenLayers.LonLat(lon, lat);
        }
        return olLonLat;
    },
    getMapObjectLonLatFromOLLonLat: function (olLonLat) {
        var moLatLng = null;
        if (olLonLat != null) {
            moLatLng = this.getMapObjectLonLatFromLonLat(olLonLat.lon, olLonLat.lat);
        }
        return moLatLng;
    },
    getOLPixelFromMapObjectPixel: function (moPixel) {
        var olPixel = null;
        if (moPixel != null) {
            var x = this.getXFromMapObjectPixel(moPixel);
            var y = this.getYFromMapObjectPixel(moPixel);
            olPixel = new OpenLayers.Pixel(x, y);
        }
        return olPixel;
    },
    getMapObjectPixelFromOLPixel: function (olPixel) {
        var moPixel = null;
        if (olPixel != null) {
            moPixel = this.getMapObjectPixelFromXY(olPixel.x, olPixel.y);
        }
        return moPixel;
    },
    CLASS_NAME: "OpenLayers.Layer.EventPane"
});
OpenLayers.Layer.FixedZoomLevels = OpenLayers.Class({
    initialize: function () {},
    initResolutions: function () {
        var props = new Array('minZoomLevel', 'maxZoomLevel', 'numZoomLevels');
        for (var i = 0, len = props.length; i < len; i++) {
            var property = props[i];
            this[property] = (this.options[property] != null) ? this.options[property] : this.map[property];
        }
        if ((this.minZoomLevel == null) || (this.minZoomLevel < this.MIN_ZOOM_LEVEL)) {
            this.minZoomLevel = this.MIN_ZOOM_LEVEL;
        }
        var desiredZoomLevels;
        var limitZoomLevels = this.MAX_ZOOM_LEVEL - this.minZoomLevel + 1;
        if (((this.options.numZoomLevels == null) && (this.options.maxZoomLevel != null)) || ((this.numZoomLevels == null) && (this.maxZoomLevel != null))) {
            desiredZoomLevels = this.maxZoomLevel - this.minZoomLevel + 1;
        } else {
            desiredZoomLevels = this.numZoomLevels;
        }
        if (desiredZoomLevels != null) {
            this.numZoomLevels = Math.min(desiredZoomLevels, limitZoomLevels);
        } else {
            this.numZoomLevels = limitZoomLevels;
        }
        this.maxZoomLevel = this.minZoomLevel + this.numZoomLevels - 1;
        if (this.RESOLUTIONS != null) {
            var resolutionsIndex = 0;
            this.resolutions = [];
            for (var i = this.minZoomLevel; i <= this.maxZoomLevel; i++) {
                this.resolutions[resolutionsIndex++] = this.RESOLUTIONS[i];
            }
            this.maxResolution = this.resolutions[0];
            this.minResolution = this.resolutions[this.resolutions.length - 1];
        }
    },
    getResolution: function () {
        if (this.resolutions != null) {
            return OpenLayers.Layer.prototype.getResolution.apply(this, arguments);
        } else {
            var resolution = null;
            var viewSize = this.map.getSize();
            var extent = this.getExtent();
            if ((viewSize != null) && (extent != null)) {
                resolution = Math.max(extent.getWidth() / viewSize.w, extent.getHeight() / viewSize.h);
            }
            return resolution;
        }
    },
    getExtent: function () {
        var extent = null;
        var size = this.map.getSize();
        var tlPx = new OpenLayers.Pixel(0, 0);
        var tlLL = this.getLonLatFromViewPortPx(tlPx);
        var brPx = new OpenLayers.Pixel(size.w, size.h);
        var brLL = this.getLonLatFromViewPortPx(brPx);
        if ((tlLL != null) && (brLL != null)) {
            extent = new OpenLayers.Bounds(tlLL.lon, brLL.lat, brLL.lon, tlLL.lat);
        }
        return extent;
    },
    getZoomForResolution: function (resolution) {
        if (this.resolutions != null) {
            return OpenLayers.Layer.prototype.getZoomForResolution.apply(this, arguments);
        } else {
            var extent = OpenLayers.Layer.prototype.getExtent.apply(this, []);
            return this.getZoomForExtent(extent);
        }
    },
    getOLZoomFromMapObjectZoom: function (moZoom) {
        var zoom = null;
        if (moZoom != null) {
            zoom = moZoom - this.minZoomLevel;
        }
        return zoom;
    },
    getMapObjectZoomFromOLZoom: function (olZoom) {
        var zoom = null;
        if (olZoom != null) {
            zoom = olZoom + this.minZoomLevel;
        }
        return zoom;
    },
    CLASS_NAME: "OpenLayers.Layer.FixedZoomLevels"
});
OpenLayers.Layer.Google = OpenLayers.Class(OpenLayers.Layer.EventPane, OpenLayers.Layer.FixedZoomLevels, {
    MIN_ZOOM_LEVEL: 0,
    MAX_ZOOM_LEVEL: 19,
    RESOLUTIONS: [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.00002145767211914062, 0.00001072883605957031, 0.00000536441802978515, 0.00000268220901489257],
    type: null,
    sphericalMercator: false,
    dragObject: null,
    initialize: function (name, options) {
        OpenLayers.Layer.EventPane.prototype.initialize.apply(this, arguments);
        OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this, arguments);
        this.addContainerPxFunction();
        if (this.sphericalMercator) {
            OpenLayers.Util.extend(this, OpenLayers.Layer.SphericalMercator);
            this.initMercatorParameters();
        }
    },
    loadMapObject: function () {
        try {
            this.mapObject = new GMap2(this.div);
            if (typeof this.mapObject.getDragObject == "function") {
                this.dragObject = this.mapObject.getDragObject();
            } else {
                this.dragPanMapObject = null;
            }
            var poweredBy = this.div.lastChild;
            this.div.removeChild(poweredBy);
            this.pane.appendChild(poweredBy);
            poweredBy.className = "olLayerGooglePoweredBy gmnoprint";
            poweredBy.style.left = "";
            poweredBy.style.bottom = "";
            var termsOfUse = this.div.lastChild;
            this.div.removeChild(termsOfUse);
            this.pane.appendChild(termsOfUse);
            termsOfUse.className = "olLayerGoogleCopyright";
            termsOfUse.style.right = "";
            termsOfUse.style.bottom = "";
        } catch (e) {
            OpenLayers.Console.error(e);
        }
    },
    setMap: function (map) {
        OpenLayers.Layer.EventPane.prototype.setMap.apply(this, arguments);
        if (this.type != null) {
            this.map.events.register("moveend", this, this.setMapType);
        }
    },
    setMapType: function () {
        if (this.mapObject.getCenter() != null) {
            if (OpenLayers.Util.indexOf(this.mapObject.getMapTypes(), this.type) == -1) {
                this.mapObject.addMapType(this.type);
            }
            this.mapObject.setMapType(this.type);
            this.map.events.unregister("moveend", this, this.setMapType);
        }
    },
    onMapResize: function () {
        if (this.visibility) {
            this.mapObject.checkResize();
        } else {
            this.windowResized = true;
        }
    },
    display: function (display) {
        OpenLayers.Layer.EventPane.prototype.display.apply(this, arguments);
        if (this.div.style.display == "block" && this.windowResized) {
            this.mapObject.checkResize();
            this.windowResized = false;
        }
    },
    getOLBoundsFromMapObjectBounds: function (moBounds) {
        var olBounds = null;
        if (moBounds != null) {
            var sw = moBounds.getSouthWest();
            var ne = moBounds.getNorthEast();
            if (this.sphericalMercator) {
                sw = this.forwardMercator(sw.lng(), sw.lat());
                ne = this.forwardMercator(ne.lng(), ne.lat());
            } else {
                sw = new OpenLayers.LonLat(sw.lng(), sw.lat());
                ne = new OpenLayers.LonLat(ne.lng(), ne.lat());
            }
            olBounds = new OpenLayers.Bounds(sw.lon, sw.lat, ne.lon, ne.lat);
        }
        return olBounds;
    },
    getMapObjectBoundsFromOLBounds: function (olBounds) {
        var moBounds = null;
        if (olBounds != null) {
            var sw = this.sphericalMercator ? this.inverseMercator(olBounds.bottom, olBounds.left) : new OpenLayers.LonLat(olBounds.bottom, olBounds.left);
            var ne = this.sphericalMercator ? this.inverseMercator(olBounds.top, olBounds.right) : new OpenLayers.LonLat(olBounds.top, olBounds.right);
            moBounds = new GLatLngBounds(new GLatLng(sw.lat, sw.lon), new GLatLng(ne.lat, ne.lon));
        }
        return moBounds;
    },
    addContainerPxFunction: function () {
        if ((typeof GMap2 != "undefined") && !GMap2.prototype.fromLatLngToContainerPixel) {
            GMap2.prototype.fromLatLngToContainerPixel = function (gLatLng) {
                var gPoint = this.fromLatLngToDivPixel(gLatLng);
                var div = this.getContainer().firstChild.firstChild;
                gPoint.x += div.offsetLeft;
                gPoint.y += div.offsetTop;
                return gPoint;
            };
        }
    },
    getWarningHTML: function () {
        return OpenLayers.i18n("googleWarning");
    },
    setMapObjectCenter: function (center, zoom) {
        this.mapObject.setCenter(center, zoom);
    },
    dragPanMapObject: function (dX, dY) {
        this.dragObject.moveBy(new GSize(-dX, dY));
    },
    getMapObjectCenter: function () {
        return this.mapObject.getCenter();
    },
    getMapObjectZoom: function () {
        return this.mapObject.getZoom();
    },
    getMapObjectLonLatFromMapObjectPixel: function (moPixel) {
        return this.mapObject.fromContainerPixelToLatLng(moPixel);
    },
    getMapObjectPixelFromMapObjectLonLat: function (moLonLat) {
        return this.mapObject.fromLatLngToContainerPixel(moLonLat);
    },
    getMapObjectZoomFromMapObjectBounds: function (moBounds) {
        return this.mapObject.getBoundsZoomLevel(moBounds);
    },
    getLongitudeFromMapObjectLonLat: function (moLonLat) {
        return this.sphericalMercator ? this.forwardMercator(moLonLat.lng(), moLonLat.lat()).lon : moLonLat.lng();
    },
    getLatitudeFromMapObjectLonLat: function (moLonLat) {
        var lat = this.sphericalMercator ? this.forwardMercator(moLonLat.lng(), moLonLat.lat()).lat : moLonLat.lat();
        return lat;
    },
    getMapObjectLonLatFromLonLat: function (lon, lat) {
        var gLatLng;
        if (this.sphericalMercator) {
            var lonlat = this.inverseMercator(lon, lat);
            gLatLng = new GLatLng(lonlat.lat, lonlat.lon);
        } else {
            gLatLng = new GLatLng(lat, lon);
        }
        return gLatLng;
    },
    getXFromMapObjectPixel: function (moPixel) {
        return moPixel.x;
    },
    getYFromMapObjectPixel: function (moPixel) {
        return moPixel.y;
    },
    getMapObjectPixelFromXY: function (x, y) {
        return new GPoint(x, y);
    },
    CLASS_NAME: "OpenLayers.Layer.Google"
});
OpenLayers.Format.WFSCapabilities = OpenLayers.Class(OpenLayers.Format.XML, {
    defaultVersion: "1.1.1",
    version: null,
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
        this.options = options;
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var root = data.documentElement;
        var version = this.version;
        if (!version) {
            version = root.getAttribute("version");
            if (!version) {
                version = this.defaultVersion;
            }
        }
        var constr = OpenLayers.Format.WFSCapabilities["v" + version.replace(/\./g, "_")];
        if (!constr) {
            throw "Can't find a WFS capabilities parser for version " + version;
        }
        var parser = new constr(this.options);
        var capabilities = parser.read(data);
        capabilities.version = version;
        return capabilities;
    },
    CLASS_NAME: "OpenLayers.Format.WFSCapabilities"
});
OpenLayers.Format.WFSCapabilities.v1_1 = OpenLayers.Class(OpenLayers.Format.WFSCapabilities, {
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
        this.options = options;
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var capabilities = {};
        var root = data.documentElement;
        this.runChildNodes(capabilities, root);
        return capabilities;
    },
    runChildNodes: function (obj, node) {
        var children = node.childNodes;
        var childNode, processor;
        for (var i = 0; i < children.length; ++i) {
            childNode = children[i];
            if (childNode.nodeType == 1) {
                processor = this["read_cap_" + childNode.nodeName];
                if (processor) {
                    processor.apply(this, [obj, childNode]);
                }
            }
        }
    },
    read_cap_FeatureTypeList: function (request, node) {
        var featureTypeList = {
            featureTypes: []
        };
        this.runChildNodes(featureTypeList, node);
        request.featureTypeList = featureTypeList;
    },
    read_cap_FeatureType: function (featureTypeList, node, parentLayer) {
        var featureType = {};
        this.runChildNodes(featureType, node);
        featureTypeList.featureTypes.push(featureType);
    },
    read_cap_Name: function (obj, node) {
        var name = this.getChildValue(node);
        if (name) {
            obj.name = name;
        }
    },
    read_cap_Title: function (obj, node) {
        var title = this.getChildValue(node);
        if (title) {
            obj.title = title;
        }
    },
    read_cap_Abstract: function (obj, node) {
        var abst = this.getChildValue(node);
        if (abst) {
            obj["abstract"] = abst;
        }
    },
    CLASS_NAME: "OpenLayers.Format.WMSCapabilities.v1_1"
});
OpenLayers.Console = {
    log: function () {},
    debug: function () {},
    info: function () {},
    warn: function () {},
    error: function () {},
    userError: function (error) {
        alert(error);
    },
    assert: function () {},
    dir: function () {},
    dirxml: function () {},
    trace: function () {},
    group: function () {},
    groupEnd: function () {},
    time: function () {},
    timeEnd: function () {},
    profile: function () {},
    profileEnd: function () {},
    count: function () {},
    CLASS_NAME: "OpenLayers.Console"
};
(function () {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0, len = scripts.length; i < len; ++i) {
        if (scripts[i].src.indexOf("firebug.js") != -1) {
            if (console) {
                OpenLayers.Util.extend(OpenLayers.Console, console);
                break;
            }
        }
    }
})();
OpenLayers.Format.WFSDescribeFeatureType = OpenLayers.Class(OpenLayers.Format.XML, {
    defaultVersion: "1.0",
    version: null,
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
        this.options = options;
    },
    read: function (data, options) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var root = data.documentElement;
        var version = this.version;
        if (!version) {
            version = root.getAttribute("version");
            if (!version) {
                version = this.defaultVersion;
            }
        }
        if (!this.parser || this.parser.VERSION != version) {
            var format = OpenLayers.Format.WFSDescribeFeatureType["v" + version.replace(/\./g, "_")];
            if (!format) {
                throw "Can't find a WFSDescribeFeatureType parser for version " + version;
            }
            this.parser = new format(this.options);
        }
        var describeFeatureType = this.parser.read(data, options);
        return describeFeatureType;
    },
    CLASS_NAME: "OpenLayers.Format.WFSDescribeFeatureType"
});
OpenLayers.Element = {
    visible: function (element) {
        return OpenLayers.Util.getElement(element).style.display != 'none';
    },
    toggle: function () {
        for (var i = 0, len = arguments.length; i < len; i++) {
            var element = OpenLayers.Util.getElement(arguments[i]);
            var display = OpenLayers.Element.visible(element) ? 'hide' : 'show';
            OpenLayers.Element[display](element);
        }
    },
    hide: function () {
        for (var i = 0, len = arguments.length; i < len; i++) {
            var element = OpenLayers.Util.getElement(arguments[i]);
            element.style.display = 'none';
        }
    },
    show: function () {
        for (var i = 0, len = arguments.length; i < len; i++) {
            var element = OpenLayers.Util.getElement(arguments[i]);
            element.style.display = '';
        }
    },
    remove: function (element) {
        element = OpenLayers.Util.getElement(element);
        element.parentNode.removeChild(element);
    },
    getHeight: function (element) {
        element = OpenLayers.Util.getElement(element);
        return element.offsetHeight;
    },
    getDimensions: function (element) {
        element = OpenLayers.Util.getElement(element);
        if (OpenLayers.Element.getStyle(element, 'display') != 'none') {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            };
        }
        var els = element.style;
        var originalVisibility = els.visibility;
        var originalPosition = els.position;
        els.visibility = 'hidden';
        els.position = 'absolute';
        els.display = '';
        var originalWidth = element.clientWidth;
        var originalHeight = element.clientHeight;
        els.display = 'none';
        els.position = originalPosition;
        els.visibility = originalVisibility;
        return {
            width: originalWidth,
            height: originalHeight
        };
    },
    hasClass: function (element, name) {
        var names = element.className;
        return ( !! names && new RegExp("(^|\\s)" + name + "(\\s|$)").test(names));
    },
    addClass: function (element, name) {
        if (!OpenLayers.Element.hasClass(element, name)) {
            element.className += (element.className ? " " : "") + name;
        }
        return element;
    },
    removeClass: function (element, name) {
        var names = element.className;
        if (names) {
            element.className = OpenLayers.String.trim(names.replace(new RegExp("(^|\\s+)" + name + "(\\s+|$)"), " "));
        }
        return element;
    },
    toggleClass: function (element, name) {
        if (OpenLayers.Element.hasClass(element, name)) {
            OpenLayers.Element.removeClass(element, name);
        } else {
            OpenLayers.Element.addClass(element, name);
        }
        return element;
    },
    getStyle: function (element, style) {
        element = OpenLayers.Util.getElement(element);
        var value = null;
        if (element && element.style) {
            value = element.style[OpenLayers.String.camelize(style)];
            if (!value) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var css = document.defaultView.getComputedStyle(element, null);
                    value = css ? css.getPropertyValue(style) : null;
                } else if (element.currentStyle) {
                    value = element.currentStyle[OpenLayers.String.camelize(style)];
                }
            }
            var positions = ['left', 'top', 'right', 'bottom'];
            if (window.opera && (OpenLayers.Util.indexOf(positions, style) != -1) && (OpenLayers.Element.getStyle(element, 'position') == 'static')) {
                value = 'auto';
            }
        }
        return value == 'auto' ? null : value;
    }
};
OpenLayers.Handler.MouseWheel = OpenLayers.Class(OpenLayers.Handler, {
    wheelListener: null,
    mousePosition: null,
    initialize: function (control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
        this.wheelListener = OpenLayers.Function.bindAsEventListener(this.onWheelEvent, this);
    },
    destroy: function () {
        OpenLayers.Handler.prototype.destroy.apply(this, arguments);
        this.wheelListener = null;
    },
    onWheelEvent: function (e) {
        if (!this.map || !this.checkModifiers(e)) {
            return;
        }
        var overScrollableDiv = false;
        var overLayerDiv = false;
        var overMapDiv = false;
        var elem = OpenLayers.Event.element(e);
        while ((elem != null) && !overMapDiv && !overScrollableDiv) {
            if (!overScrollableDiv) {
                try {
                    if (elem.currentStyle) {
                        overflow = elem.currentStyle["overflow"];
                    } else {
                        var style = document.defaultView.getComputedStyle(elem, null);
                        var overflow = style.getPropertyValue("overflow");
                    }
                    overScrollableDiv = (overflow && (overflow == "auto") || (overflow == "scroll"));
                } catch (err) {}
            }
            if (!overLayerDiv) {
                for (var i = 0, len = this.map.layers.length; i < len; i++) {
                    if (elem == this.map.layers[i].div || elem == this.map.layers[i].pane) {
                        overLayerDiv = true;
                        break;
                    }
                }
            }
            overMapDiv = (elem == this.map.div);
            elem = elem.parentNode;
        }
        if (!overScrollableDiv && overMapDiv) {
            if (overLayerDiv) {
                this.wheelZoom(e);
            }
            OpenLayers.Event.stop(e);
        }
    },
    wheelZoom: function (e) {
        var delta = 0;
        if (!e) {
            e = window.event;
        }
        if (e.wheelDelta) {
            delta = e.wheelDelta / 120;
            if (window.opera && window.opera.version() < 9.2) {
                delta = -delta;
            }
        } else if (e.detail) {
            delta = -e.detail / 3;
        }
        if (delta) {
            if (this.mousePosition) {
                e.xy = this.mousePosition;
            }
            if (!e.xy) {
                e.xy = this.map.getPixelFromLonLat(this.map.getCenter());
            }
            if (delta < 0) {
                this.callback("down", [e, delta]);
            } else {
                this.callback("up", [e, delta]);
            }
        }
    },
    mousemove: function (evt) {
        this.mousePosition = evt.xy;
    },
    activate: function (evt) {
        if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
            var wheelListener = this.wheelListener;
            OpenLayers.Event.observe(window, "DOMMouseScroll", wheelListener);
            OpenLayers.Event.observe(window, "mousewheel", wheelListener);
            OpenLayers.Event.observe(document, "mousewheel", wheelListener);
            return true;
        } else {
            return false;
        }
    },
    deactivate: function (evt) {
        if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            var wheelListener = this.wheelListener;
            OpenLayers.Event.stopObserving(window, "DOMMouseScroll", wheelListener);
            OpenLayers.Event.stopObserving(window, "mousewheel", wheelListener);
            OpenLayers.Event.stopObserving(document, "mousewheel", wheelListener);
            return true;
        } else {
            return false;
        }
    },
    CLASS_NAME: "OpenLayers.Handler.MouseWheel"
});
OpenLayers.Tile = OpenLayers.Class({
    EVENT_TYPES: ["loadstart", "loadend", "reload", "unload"],
    events: null,
    id: null,
    layer: null,
    url: null,
    bounds: null,
    size: null,
    position: null,
    isLoading: false,
    initialize: function (layer, position, bounds, url, size) {
        this.layer = layer;
        this.position = position.clone();
        this.bounds = bounds.clone();
        this.url = url;
        this.size = size.clone();
        this.id = OpenLayers.Util.createUniqueID("Tile_");
        this.events = new OpenLayers.Events(this, null, this.EVENT_TYPES);
    },
    unload: function () {
        if (this.isLoading) {
            this.isLoading = false;
            this.events.triggerEvent("unload");
        }
    },
    destroy: function () {
        this.layer = null;
        this.bounds = null;
        this.size = null;
        this.position = null;
        this.events.destroy();
        this.events = null;
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Tile(this.layer, this.position, this.bounds, this.url, this.size);
        }
        OpenLayers.Util.applyDefaults(obj, this);
        return obj;
    },
    draw: function () {
        var maxExtent = this.layer.maxExtent;
        var withinMaxExtent = (maxExtent && this.bounds.intersectsBounds(maxExtent, false));
        this.shouldDraw = (withinMaxExtent || this.layer.displayOutsideMaxExtent);
        this.clear();
        return this.shouldDraw;
    },
    moveTo: function (bounds, position, redraw) {
        if (redraw == null) {
            redraw = true;
        }
        this.bounds = bounds.clone();
        this.position = position.clone();
        if (redraw) {
            this.draw();
        }
    },
    clear: function () {},
    getBoundsFromBaseLayer: function (position) {
        var msg = OpenLayers.i18n('reprojectDeprecated', {
            'layerName': this.layer.name
        });
        OpenLayers.Console.warn(msg);
        var topLeft = this.layer.map.getLonLatFromLayerPx(position);
        var bottomRightPx = position.clone();
        bottomRightPx.x += this.size.w;
        bottomRightPx.y += this.size.h;
        var bottomRight = this.layer.map.getLonLatFromLayerPx(bottomRightPx);
        if (topLeft.lon > bottomRight.lon) {
            if (topLeft.lon < 0) {
                topLeft.lon = -180 - (topLeft.lon + 180);
            } else {
                bottomRight.lon = 180 + bottomRight.lon + 180;
            }
        }
        var bounds = new OpenLayers.Bounds(topLeft.lon, bottomRight.lat, bottomRight.lon, topLeft.lat);
        return bounds;
    },
    showTile: function () {
        if (this.shouldDraw) {
            this.show();
        }
    },
    show: function () {},
    hide: function () {},
    CLASS_NAME: "OpenLayers.Tile"
});
OpenLayers.Tile.Image = OpenLayers.Class(OpenLayers.Tile, {
    url: null,
    imgDiv: null,
    frame: null,
    layerAlphaHack: null,
    isBackBuffer: false,
    lastRatio: 1,
    isFirstDraw: true,
    backBufferTile: null,
    initialize: function (layer, position, bounds, url, size) {
        OpenLayers.Tile.prototype.initialize.apply(this, arguments);
        this.url = url;
        this.frame = document.createElement('div');
        this.frame.style.overflow = 'hidden';
        this.frame.style.position = 'absolute';
        this.layerAlphaHack = this.layer.alpha && OpenLayers.Util.alphaHack();
    },
    destroy: function () {
        if (this.imgDiv != null) {
            if (this.layerAlphaHack) {
                OpenLayers.Event.stopObservingElement(this.imgDiv.childNodes[0].id);
            } else {
                OpenLayers.Event.stopObservingElement(this.imgDiv.id);
            }
            if (this.imgDiv.parentNode == this.frame) {
                this.frame.removeChild(this.imgDiv);
                this.imgDiv.map = null;
            }
            this.imgDiv.urls = null;
        }
        this.imgDiv = null;
        if ((this.frame != null) && (this.frame.parentNode == this.layer.div)) {
            this.layer.div.removeChild(this.frame);
        }
        this.frame = null;
        if (this.backBufferTile) {
            this.backBufferTile.destroy();
            this.backBufferTile = null;
        }
        this.layer.events.unregister("loadend", this, this.resetBackBuffer);
        OpenLayers.Tile.prototype.destroy.apply(this, arguments);
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Tile.Image(this.layer, this.position, this.bounds, this.url, this.size);
        }
        obj = OpenLayers.Tile.prototype.clone.apply(this, [obj]);
        obj.imgDiv = null;
        return obj;
    },
    draw: function () {
        if (this.layer != this.layer.map.baseLayer && this.layer.reproject) {
            this.bounds = this.getBoundsFromBaseLayer(this.position);
        }
        var drawTile = OpenLayers.Tile.prototype.draw.apply(this, arguments);
        if (OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS, this.layer.transitionEffect) != -1) {
            if (drawTile) {
                if (!this.backBufferTile) {
                    this.backBufferTile = this.clone();
                    this.backBufferTile.hide();
                    this.backBufferTile.isBackBuffer = true;
                    this.events.register('loadend', this, this.resetBackBuffer);
                    this.layer.events.register("loadend", this, this.resetBackBuffer);
                }
                this.startTransition();
            } else {
                if (this.backBufferTile) {
                    this.backBufferTile.clear();
                }
            }
        } else {
            if (drawTile && this.isFirstDraw) {
                this.events.register('loadend', this, this.showTile);
                this.isFirstDraw = false;
            }
        }
        if (!drawTile) {
            return false;
        }
        if (this.isLoading) {
            this.events.triggerEvent("reload");
        } else {
            this.isLoading = true;
            this.events.triggerEvent("loadstart");
        }
        return this.renderTile();
    },
    resetBackBuffer: function () {
        this.showTile();
        if (this.backBufferTile && (this.isFirstDraw || !this.layer.numLoadingTiles)) {
            this.isFirstDraw = false;
            var maxExtent = this.layer.maxExtent;
            var withinMaxExtent = (maxExtent && this.bounds.intersectsBounds(maxExtent, false));
            if (withinMaxExtent) {
                this.backBufferTile.position = this.position;
                this.backBufferTile.bounds = this.bounds;
                this.backBufferTile.size = this.size;
                this.backBufferTile.imageSize = this.layer.imageSize || this.size;
                this.backBufferTile.imageOffset = this.layer.imageOffset;
                this.backBufferTile.resolution = this.layer.getResolution();
                this.backBufferTile.renderTile();
            }
        }
    },
    renderTile: function () {
        if (this.imgDiv == null) {
            this.initImgDiv();
        }
        this.imgDiv.viewRequestID = this.layer.map.viewRequestID;
        if (this.layer.url instanceof Array) {
            this.imgDiv.urls = this.layer.url.slice();
        }
        this.url = this.layer.getURL(this.bounds);
        OpenLayers.Util.modifyDOMElement(this.frame, null, this.position, this.size);
        var imageSize = this.layer.getImageSize();
        if (this.layerAlphaHack) {
            OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv, null, null, imageSize, this.url);
        } else {
            OpenLayers.Util.modifyDOMElement(this.imgDiv, null, null, imageSize);
            this.imgDiv.src = this.url;
        }
        return true;
    },
    clear: function () {
        if (this.imgDiv) {
            this.hide();
            if (OpenLayers.Tile.Image.useBlankTile) {
                this.imgDiv.src = OpenLayers.Util.getImagesLocation() + "blank.gif";
            }
        }
    },
    initImgDiv: function () {
        var offset = this.layer.imageOffset;
        var size = this.layer.getImageSize();
        if (this.layerAlphaHack) {
            this.imgDiv = OpenLayers.Util.createAlphaImageDiv(null, offset, size, null, "relative", null, null, null, true);
        } else {
            this.imgDiv = OpenLayers.Util.createImage(null, offset, size, null, "relative", null, null, true);
        }
        this.imgDiv.className = 'olTileImage';
        this.frame.style.zIndex = this.isBackBuffer ? 0 : 1;
        this.frame.appendChild(this.imgDiv);
        this.layer.div.appendChild(this.frame);
        if (this.layer.opacity != null) {
            OpenLayers.Util.modifyDOMElement(this.imgDiv, null, null, null, null, null, null, this.layer.opacity);
        }
        this.imgDiv.map = this.layer.map;
        var onload = function () {
            if (this.isLoading) {
                this.isLoading = false;
                this.events.triggerEvent("loadend");
            }
        };
        if (this.layerAlphaHack) {
            OpenLayers.Event.observe(this.imgDiv.childNodes[0], 'load', OpenLayers.Function.bind(onload, this));
        } else {
            OpenLayers.Event.observe(this.imgDiv, 'load', OpenLayers.Function.bind(onload, this));
        }
        var onerror = function () {
            if (this.imgDiv._attempts > OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
                onload.call(this);
            }
        };
        OpenLayers.Event.observe(this.imgDiv, "error", OpenLayers.Function.bind(onerror, this));
    },
    checkImgURL: function () {
        if (this.layer) {
            var loaded = this.layerAlphaHack ? this.imgDiv.firstChild.src : this.imgDiv.src;
            if (!OpenLayers.Util.isEquivalentUrl(loaded, this.url)) {
                this.hide();
            }
        }
    },
    startTransition: function () {
        if (!this.backBufferTile || !this.backBufferTile.imgDiv) {
            return;
        }
        var ratio = 1;
        if (this.backBufferTile.resolution) {
            ratio = this.backBufferTile.resolution / this.layer.getResolution();
        }
        if (ratio != this.lastRatio) {
            if (this.layer.transitionEffect == 'resize') {
                var upperLeft = new OpenLayers.LonLat(this.backBufferTile.bounds.left, this.backBufferTile.bounds.top);
                var size = new OpenLayers.Size(this.backBufferTile.size.w * ratio, this.backBufferTile.size.h * ratio);
                var px = this.layer.map.getLayerPxFromLonLat(upperLeft);
                OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame, null, px, size);
                var imageSize = this.backBufferTile.imageSize;
                imageSize = new OpenLayers.Size(imageSize.w * ratio, imageSize.h * ratio);
                var imageOffset = this.backBufferTile.imageOffset;
                if (imageOffset) {
                    imageOffset = new OpenLayers.Pixel(imageOffset.x * ratio, imageOffset.y * ratio);
                }
                OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv, null, imageOffset, imageSize);
                this.backBufferTile.show();
            }
        } else {
            if (this.layer.singleTile) {
                this.backBufferTile.show();
            } else {
                this.backBufferTile.hide();
            }
        }
        this.lastRatio = ratio;
    },
    show: function () {
        this.frame.style.display = '';
        if (OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS, this.layer.transitionEffect) != -1) {
            if (navigator.userAgent.toLowerCase().indexOf("gecko") != -1) {
                this.frame.scrollLeft = this.frame.scrollLeft;
            }
        }
    },
    hide: function () {
        this.frame.style.display = 'none';
    },
    CLASS_NAME: "OpenLayers.Tile.Image"
});
OpenLayers.Tile.Image.useBlankTile = (OpenLayers.Util.getBrowserName() == "safari" || OpenLayers.Util.getBrowserName() == "opera");
OpenLayers.Rule = OpenLayers.Class({
    id: null,
    name: 'default',
    title: null,
    description: null,
    context: null,
    filter: null,
    elseFilter: false,
    symbolizer: null,
    minScaleDenominator: null,
    maxScaleDenominator: null,
    initialize: function (options) {
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
        this.symbolizer = {};
        OpenLayers.Util.extend(this, options);
    },
    destroy: function () {
        for (var i in this.symbolizer) {
            this.symbolizer[i] = null;
        }
        this.symbolizer = null;
    },
    evaluate: function (feature) {
        var context = this.getContext(feature);
        var applies = true;
        if (this.minScaleDenominator || this.maxScaleDenominator) {
            var scale = feature.layer.map.getScale();
        }
        if (this.minScaleDenominator) {
            applies = scale >= OpenLayers.Style.createLiteral(this.minScaleDenominator, context);
        }
        if (applies && this.maxScaleDenominator) {
            applies = scale < OpenLayers.Style.createLiteral(this.maxScaleDenominator, context);
        }
        if (applies && this.filter) {
            if (this.filter.CLASS_NAME == "OpenLayers.Filter.FeatureId") {
                applies = this.filter.evaluate(feature);
            } else {
                applies = this.filter.evaluate(context);
            }
        }
        return applies;
    },
    getContext: function (feature) {
        var context = this.context;
        if (!context) {
            context = feature.attributes || feature.data;
        }
        if (typeof this.context == "function") {
            context = this.context(feature);
        }
        return context;
    },
    clone: function () {
        var symbolizer = {};
        var value, type;
        for (var key in this.symbolizer) {
            value = this.symbolizer[key];
            type = typeof value;
            if (type === "object") {
                symbolizer[key] = OpenLayers.Util.extend({}, value);
            } else if (type === "string") {
                symbolizer[key] = value;
            }
        }
        var filter = (this.filter != null) ? this.filter.clone() : null;
        var config = {};
        for (var property in this) {
            if (!(this[property] instanceof Function)) {
                config[property] = this[property];
            }
        }
        config.filter = filter;
        config.symbolizer = symbolizer;
        return new OpenLayers.Rule(config);
    },
    CLASS_NAME: "OpenLayers.Rule"
});
OpenLayers.Format.SLD = OpenLayers.Class(OpenLayers.Format.XML, {
    defaultVersion: "1.0.0",
    version: null,
    parser: null,
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    },
    write: function (sld, options) {
        var version = (options && options.version) || this.version || this.defaultVersion;
        if (!this.parser || this.parser.VERSION != version) {
            var format = OpenLayers.Format.SLD["v" + version.replace(/\./g, "_")];
            if (!format) {
                throw "Can't find a SLD parser for version " + version;
            }
            this.parser = new format(this.options);
        }
        var root = this.parser.write(sld);
        return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var root = data.documentElement;
        var version = this.version;
        if (!version) {
            version = root.getAttribute("version");
            if (!version) {
                version = this.defaultVersion;
            }
        }
        if (!this.parser || this.parser.VERSION != version) {
            var format = OpenLayers.Format.SLD["v" + version.replace(/\./g, "_")];
            if (!format) {
                throw "Can't find a SLD parser for version " + version;
            }
            this.parser = new format(this.options);
        }
        var sld = this.parser.read(data);
        return sld;
    },
    CLASS_NAME: "OpenLayers.Format.SLD"
});
OpenLayers.Renderer = OpenLayers.Class({
    container: null,
    extent: null,
    locked: false,
    size: null,
    resolution: null,
    map: null,
    initialize: function (containerID, options) {
        this.container = OpenLayers.Util.getElement(containerID);
    },
    destroy: function () {
        this.container = null;
        this.extent = null;
        this.size = null;
        this.resolution = null;
        this.map = null;
    },
    supported: function () {
        return false;
    },
    setExtent: function (extent, resolutionChanged) {
        this.extent = extent.clone();
        if (resolutionChanged) {
            this.resolution = null;
        }
    },
    setSize: function (size) {
        this.size = size.clone();
        this.resolution = null;
    },
    getResolution: function () {
        this.resolution = this.resolution || this.map.getResolution();
        return this.resolution;
    },
    drawFeature: function (feature, style) {
        if (style == null) {
            style = feature.style;
        }
        if (feature.geometry) {
            var bounds = feature.geometry.getBounds();
            if (bounds) {
                if (!bounds.intersectsBounds(this.extent)) {
                    style = {
                        display: "none"
                    };
                }
                return this.drawGeometry(feature.geometry, style, feature.id);
            }
        }
    },
    drawGeometry: function (geometry, style, featureId) {},
    clear: function () {},
    getFeatureIdFromEvent: function (evt) {},
    eraseFeatures: function (features) {
        if (!(features instanceof Array)) {
            features = [features];
        }
        for (var i = 0, len = features.length; i < len; ++i) {
            this.eraseGeometry(features[i].geometry);
        }
    },
    eraseGeometry: function (geometry) {},
    CLASS_NAME: "OpenLayers.Renderer"
});
OpenLayers.ElementsIndexer = OpenLayers.Class({
    maxZIndex: null,
    order: null,
    indices: null,
    compare: null,
    initialize: function (yOrdering) {
        this.compare = yOrdering ? OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_Y_ORDER : OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_DRAWING_ORDER;
        this.order = [];
        this.indices = {};
        this.maxZIndex = 0;
    },
    insert: function (newNode) {
        if (this.exists(newNode)) {
            this.remove(newNode);
        }
        var nodeId = newNode.id;
        this.determineZIndex(newNode);
        var leftIndex = -1;
        var rightIndex = this.order.length;
        var middle;
        while (rightIndex - leftIndex > 1) {
            middle = parseInt((leftIndex + rightIndex) / 2);
            var placement = this.compare(this, newNode, OpenLayers.Util.getElement(this.order[middle]));
            if (placement > 0) {
                leftIndex = middle;
            } else {
                rightIndex = middle;
            }
        }
        this.order.splice(rightIndex, 0, nodeId);
        this.indices[nodeId] = this.getZIndex(newNode);
        var nextIndex = rightIndex + 1;
        return nextIndex < this.order.length ? OpenLayers.Util.getElement(this.order[nextIndex]) : null;
    },
    remove: function (node) {
        var nodeId = node.id;
        var arrayIndex = OpenLayers.Util.indexOf(this.order, nodeId);
        if (arrayIndex >= 0) {
            this.order.splice(arrayIndex, 1);
            delete this.indices[nodeId];
            if (this.order.length > 0) {
                var lastId = this.order[this.order.length - 1];
                this.maxZIndex = this.indices[lastId];
            } else {
                this.maxZIndex = 0;
            }
        }
    },
    clear: function () {
        this.order = [];
        this.indices = {};
        this.maxZIndex = 0;
    },
    exists: function (node) {
        return (this.indices[node.id] != null);
    },
    getZIndex: function (node) {
        return node._style.graphicZIndex;
    },
    determineZIndex: function (node) {
        var zIndex = node._style.graphicZIndex;
        if (zIndex == null) {
            zIndex = this.maxZIndex;
            node._style.graphicZIndex = zIndex;
        } else if (zIndex > this.maxZIndex) {
            this.maxZIndex = zIndex;
        }
    },
    CLASS_NAME: "OpenLayers.ElementsIndexer"
});
OpenLayers.ElementsIndexer.IndexingMethods = {
    Z_ORDER: function (indexer, newNode, nextNode) {
        var newZIndex = indexer.getZIndex(newNode);
        var returnVal = 0;
        if (nextNode) {
            var nextZIndex = indexer.getZIndex(nextNode);
            returnVal = newZIndex - nextZIndex;
        }
        return returnVal;
    },
    Z_ORDER_DRAWING_ORDER: function (indexer, newNode, nextNode) {
        var returnVal = OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer, newNode, nextNode);
        if (nextNode && returnVal == 0) {
            returnVal = 1;
        }
        return returnVal;
    },
    Z_ORDER_Y_ORDER: function (indexer, newNode, nextNode) {
        var returnVal = OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer, newNode, nextNode);
        if (nextNode && returnVal == 0) {
            var newLat = newNode._geometry.getBounds().bottom;
            var nextLat = nextNode._geometry.getBounds().bottom;
            var result = nextLat - newLat;
            returnVal = (result == 0) ? 1 : result;
        }
        return returnVal;
    }
};
OpenLayers.Renderer.Elements = OpenLayers.Class(OpenLayers.Renderer, {
    rendererRoot: null,
    root: null,
    xmlns: null,
    indexer: null,
    BACKGROUND_ID_SUFFIX: "_background",
    minimumSymbolizer: {
        strokeLinecap: "round",
        strokeOpacity: 1,
        strokeDashstyle: "solid",
        fillOpacity: 1,
        pointRadius: 0
    },
    initialize: function (containerID, options) {
        OpenLayers.Renderer.prototype.initialize.apply(this, arguments);
        this.rendererRoot = this.createRenderRoot();
        this.root = this.createRoot();
        this.rendererRoot.appendChild(this.root);
        this.container.appendChild(this.rendererRoot);
        if (options && (options.zIndexing || options.yOrdering)) {
            this.indexer = new OpenLayers.ElementsIndexer(options.yOrdering);
        }
    },
    destroy: function () {
        this.clear();
        this.rendererRoot = null;
        this.root = null;
        this.xmlns = null;
        OpenLayers.Renderer.prototype.destroy.apply(this, arguments);
    },
    clear: function () {
        if (this.root) {
            while (this.root.childNodes.length > 0) {
                this.root.removeChild(this.root.firstChild);
            }
        }
        if (this.indexer) {
            this.indexer.clear();
        }
    },
    getNodeType: function (geometry, style) {},
    drawGeometry: function (geometry, style, featureId) {
        var className = geometry.CLASS_NAME;
        var rendered = true;
        if ((className == "OpenLayers.Geometry.Collection") || (className == "OpenLayers.Geometry.MultiPoint") || (className == "OpenLayers.Geometry.MultiLineString") || (className == "OpenLayers.Geometry.MultiPolygon")) {
            for (var i = 0, len = geometry.components.length; i < len; i++) {
                rendered = rendered && this.drawGeometry(geometry.components[i], style, featureId);
            }
            return rendered;
        };
        rendered = false;
        if (style.display != "none") {
            if (style.backgroundGraphic) {
                this.redrawBackgroundNode(geometry.id, geometry, style, featureId);
            }
            rendered = this.redrawNode(geometry.id, geometry, style, featureId);
        }
        if (rendered == false) {
            var node = document.getElementById(geometry.id);
            if (node) {
                if (node._style.backgroundGraphic) {
                    node.parentNode.removeChild(document.getElementById(geometry.id + this.BACKGROUND_ID_SUFFIX));
                }
                node.parentNode.removeChild(node);
            }
        }
        return rendered;
    },
    redrawNode: function (id, geometry, style, featureId) {
        var node = this.nodeFactory(id, this.getNodeType(geometry, style));
        node._featureId = featureId;
        node._geometry = geometry;
        node._geometryClass = geometry.CLASS_NAME;
        node._style = style;
        var drawResult = this.drawGeometryNode(node, geometry, style);
        if (drawResult === false) {
            return false;
        }
        node = drawResult.node;
        var insert = this.indexer ? this.indexer.insert(node) : null;
        if (insert) {
            this.root.insertBefore(node, insert);
        } else {
            this.root.appendChild(node);
        }
        this.postDraw(node);
        return drawResult.complete;
    },
    redrawBackgroundNode: function (id, geometry, style, featureId) {
        var backgroundStyle = OpenLayers.Util.extend({}, style);
        backgroundStyle.externalGraphic = backgroundStyle.backgroundGraphic;
        backgroundStyle.graphicXOffset = backgroundStyle.backgroundXOffset;
        backgroundStyle.graphicYOffset = backgroundStyle.backgroundYOffset;
        backgroundStyle.graphicZIndex = backgroundStyle.backgroundGraphicZIndex;
        backgroundStyle.backgroundGraphic = null;
        backgroundStyle.backgroundXOffset = null;
        backgroundStyle.backgroundYOffset = null;
        backgroundStyle.backgroundGraphicZIndex = null;
        return this.redrawNode(id + this.BACKGROUND_ID_SUFFIX, geometry, backgroundStyle, null);
    },
    drawGeometryNode: function (node, geometry, style) {
        style = style || node._style;
        OpenLayers.Util.applyDefaults(style, this.minimumSymbolizer);
        var options = {
            'isFilled': true,
            'isStroked': !! style.strokeWidth
        };
        var drawn;
        switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point":
            drawn = this.drawPoint(node, geometry);
            break;
        case "OpenLayers.Geometry.LineString":
            options.isFilled = false;
            drawn = this.drawLineString(node, geometry);
            break;
        case "OpenLayers.Geometry.LinearRing":
            drawn = this.drawLinearRing(node, geometry);
            break;
        case "OpenLayers.Geometry.Polygon":
            drawn = this.drawPolygon(node, geometry);
            break;
        case "OpenLayers.Geometry.Surface":
            drawn = this.drawSurface(node, geometry);
            break;
        case "OpenLayers.Geometry.Rectangle":
            drawn = this.drawRectangle(node, geometry);
            break;
        default:
            break;
        }
        node._style = style;
        node._options = options;
        if (drawn != false) {
            return {
                node: this.setStyle(node, style, options, geometry),
                complete: drawn
            };
        } else {
            return false;
        }
    },
    postDraw: function (node) {},
    drawPoint: function (node, geometry) {},
    drawLineString: function (node, geometry) {},
    drawLinearRing: function (node, geometry) {},
    drawPolygon: function (node, geometry) {},
    drawRectangle: function (node, geometry) {},
    drawCircle: function (node, geometry) {},
    drawSurface: function (node, geometry) {},
    getFeatureIdFromEvent: function (evt) {
        var target = evt.target;
        var useElement = target && target.correspondingUseElement;
        var node = useElement ? useElement : (target || evt.srcElement);
        var featureId = node._featureId;
        return featureId;
    },
    eraseGeometry: function (geometry) {
        if ((geometry.CLASS_NAME == "OpenLayers.Geometry.MultiPoint") || (geometry.CLASS_NAME == "OpenLayers.Geometry.MultiLineString") || (geometry.CLASS_NAME == "OpenLayers.Geometry.MultiPolygon") || (geometry.CLASS_NAME == "OpenLayers.Geometry.Collection")) {
            for (var i = 0, len = geometry.components.length; i < len; i++) {
                this.eraseGeometry(geometry.components[i]);
            }
        } else {
            var element = OpenLayers.Util.getElement(geometry.id);
            if (element && element.parentNode) {
                if (element.geometry) {
                    element.geometry.destroy();
                    element.geometry = null;
                }
                element.parentNode.removeChild(element);
                if (this.indexer) {
                    this.indexer.remove(element);
                }
                if (element._style.backgroundGraphic) {
                    var backgroundId = geometry.id + this.BACKGROUND_ID_SUFFIX;
                    var bElem = OpenLayers.Util.getElement(backgroundId);
                    if (bElem && bElem.parentNode) {
                        bElem.parentNode.removeChild(bElem);
                    }
                }
            }
        }
    },
    nodeFactory: function (id, type) {
        var node = OpenLayers.Util.getElement(id);
        if (node) {
            if (!this.nodeTypeCompare(node, type)) {
                node.parentNode.removeChild(node);
                node = this.nodeFactory(id, type);
            }
        } else {
            node = this.createNode(type, id);
        }
        return node;
    },
    nodeTypeCompare: function (node, type) {},
    createNode: function (type, id) {},
    isComplexSymbol: function (graphicName) {
        return (graphicName != "circle") && !! graphicName;
    },
    CLASS_NAME: "OpenLayers.Renderer.Elements"
});
OpenLayers.Renderer.symbol = {
    "star": [350, 75, 379, 161, 469, 161, 397, 215, 423, 301, 350, 250, 277, 301, 303, 215, 231, 161, 321, 161, 350, 75],
    "cross": [4, 0, 6, 0, 6, 4, 10, 4, 10, 6, 6, 6, 6, 10, 4, 10, 4, 6, 0, 6, 0, 4, 4, 4, 4, 0],
    "x": [0, 0, 25, 0, 50, 35, 75, 0, 100, 0, 65, 50, 100, 100, 75, 100, 50, 65, 25, 100, 0, 100, 35, 50, 0, 0],
    "square": [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    "triangle": [0, 10, 10, 10, 5, 0, 0, 10]
};
OpenLayers.Control.Panel = OpenLayers.Class(OpenLayers.Control, {
    controls: null,
    defaultControl: null,
    initialize: function (options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.controls = [];
    },
    destroy: function () {
        OpenLayers.Control.prototype.destroy.apply(this, arguments);
        for (var i = this.controls.length - 1; i >= 0; i--) {
            if (this.controls[i].events) {
                this.controls[i].events.un({
                    "activate": this.redraw,
                    "deactivate": this.redraw,
                    scope: this
                });
            }
            OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);
            this.controls[i].panel_div = null;
        }
    },
    activate: function () {
        if (OpenLayers.Control.prototype.activate.apply(this, arguments)) {
            for (var i = 0, len = this.controls.length; i < len; i++) {
                if (this.controls[i] == this.defaultControl) {
                    this.controls[i].activate();
                }
            }
            this.redraw();
            return true;
        } else {
            return false;
        }
    },
    deactivate: function () {
        if (OpenLayers.Control.prototype.deactivate.apply(this, arguments)) {
            for (var i = 0, len = this.controls.length; i < len; i++) {
                this.controls[i].deactivate();
            }
            return true;
        } else {
            return false;
        }
    },
    draw: function () {
        OpenLayers.Control.prototype.draw.apply(this, arguments);
        for (var i = 0, len = this.controls.length; i < len; i++) {
            this.map.addControl(this.controls[i]);
            this.controls[i].deactivate();
            this.controls[i].events.on({
                "activate": this.redraw,
                "deactivate": this.redraw,
                scope: this
            });
        }
        this.activate();
        return this.div;
    },
    redraw: function () {
        this.div.innerHTML = "";
        if (this.active) {
            for (var i = 0, len = this.controls.length; i < len; i++) {
                var element = this.controls[i].panel_div;
                if (this.controls[i].active) {
                    element.className = this.controls[i].displayClass + "ItemActive";
                } else {
                    element.className = this.controls[i].displayClass + "ItemInactive";
                }
                this.div.appendChild(element);
            }
        }
    },
    activateControl: function (control) {
        if (!this.active) {
            return false;
        }
        if (control.type == OpenLayers.Control.TYPE_BUTTON) {
            control.trigger();
            this.redraw();
            return;
        }
        if (control.type == OpenLayers.Control.TYPE_TOGGLE) {
            if (control.active) {
                control.deactivate();
            } else {
                control.activate();
            }
            this.redraw();
            return;
        }
        for (var i = 0, len = this.controls.length; i < len; i++) {
            if (this.controls[i] != control) {
                if (this.controls[i].type != OpenLayers.Control.TYPE_TOGGLE) {
                    this.controls[i].deactivate();
                }
            }
        }
        control.activate();
    },
    addControls: function (controls) {
        if (!(controls instanceof Array)) {
            controls = [controls];
        }
        this.controls = this.controls.concat(controls);
        for (var i = 0, len = controls.length; i < len; i++) {
            var element = document.createElement("div");
            var textNode = document.createTextNode(" ");
            controls[i].panel_div = element;
            if (controls[i].title != "") {
                controls[i].panel_div.title = controls[i].title;
            }
            OpenLayers.Event.observe(controls[i].panel_div, "click", OpenLayers.Function.bind(this.onClick, this, controls[i]));
            OpenLayers.Event.observe(controls[i].panel_div, "mousedown", OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));
        }
        if (this.map) {
            for (var i = 0, len = controls.length; i < len; i++) {
                this.map.addControl(controls[i]);
                controls[i].deactivate();
                controls[i].events.on({
                    "activate": this.redraw,
                    "deactivate": this.redraw,
                    scope: this
                });
            }
            this.redraw();
        }
    },
    onClick: function (ctrl, evt) {
        OpenLayers.Event.stop(evt ? evt : window.event);
        this.activateControl(ctrl);
    },
    getControlsBy: function (property, match) {
        var test = (typeof match.test == "function");
        var found = OpenLayers.Array.filter(this.controls, function (item) {
            return item[property] == match || (test && match.test(item[property]));
        });
        return found;
    },
    getControlsByName: function (match) {
        return this.getControlsBy("name", match);
    },
    getControlsByClass: function (match) {
        return this.getControlsBy("CLASS_NAME", match);
    },
    CLASS_NAME: "OpenLayers.Control.Panel"
});
OpenLayers.Format.WFSCapabilities.v1_1_0 = OpenLayers.Class(OpenLayers.Format.WFSCapabilities.v1_1, {
    initialize: function (options) {
        OpenLayers.Format.WFSCapabilities.v1_1.prototype.initialize.apply(this, [options]);
    },
    CLASS_NAME: "OpenLayers.Format.WFSCapabilities.v1_1_0"
});
OpenLayers.Control.Pan = OpenLayers.Class(OpenLayers.Control, {
    slideFactor: 50,
    direction: null,
    type: OpenLayers.Control.TYPE_BUTTON,
    initialize: function (direction, options) {
        this.direction = direction;
        this.CLASS_NAME += this.direction;
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
    },
    trigger: function () {
        switch (this.direction) {
        case OpenLayers.Control.Pan.NORTH:
            this.map.pan(0, - this.slideFactor);
            break;
        case OpenLayers.Control.Pan.SOUTH:
            this.map.pan(0, this.slideFactor);
            break;
        case OpenLayers.Control.Pan.WEST:
            this.map.pan(-this.slideFactor, 0);
            break;
        case OpenLayers.Control.Pan.EAST:
            this.map.pan(this.slideFactor, 0);
            break;
        }
    },
    CLASS_NAME: "OpenLayers.Control.Pan"
});
OpenLayers.Control.Pan.NORTH = "North";
OpenLayers.Control.Pan.SOUTH = "South";
OpenLayers.Control.Pan.EAST = "East";
OpenLayers.Control.Pan.WEST = "West";
OpenLayers.Handler.Feature = OpenLayers.Class(OpenLayers.Handler, {
    EVENTMAP: {
        'click': {
            'in': 'click',
            'out': 'clickout'
        },
        'mousemove': {
            'in': 'over',
            'out': 'out'
        },
        'dblclick': {
            'in': 'dblclick',
            'out': null
        },
        'mousedown': {
            'in': null,
            'out': null
        },
        'mouseup': {
            'in': null,
            'out': null
        }
    },
    feature: null,
    lastFeature: null,
    down: null,
    up: null,
    clickoutTolerance: 4,
    geometryTypes: null,
    stopClick: true,
    stopDown: true,
    stopUp: false,
    initialize: function (control, layer, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, [control, callbacks, options]);
        this.layer = layer;
    },
    mousedown: function (evt) {
        this.down = evt.xy;
        return this.handle(evt) ? !this.stopDown : true;
    },
    mouseup: function (evt) {
        this.up = evt.xy;
        return this.handle(evt) ? !this.stopUp : true;
    },
    click: function (evt) {
        return this.handle(evt) ? !this.stopClick : true;
    },
    mousemove: function (evt) {
        if (!this.callbacks['over'] && !this.callbacks['out']) {
            return true;
        }
        this.handle(evt);
        return true;
    },
    dblclick: function (evt) {
        return !this.handle(evt);
    },
    geometryTypeMatches: function (feature) {
        return this.geometryTypes == null || OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) > -1;
    },
    handle: function (evt) {
        var type = evt.type;
        var handled = false;
        var previouslyIn = !! (this.feature);
        var click = (type == "click" || type == "dblclick");
        this.feature = this.layer.getFeatureFromEvent(evt);
        if (this.feature && this.feature.layer) {
            var inNew = (this.feature != this.lastFeature);
            if (this.geometryTypeMatches(this.feature)) {
                if (previouslyIn && inNew) {
                    this.triggerCallback(type, 'out', [this.lastFeature]);
                    this.triggerCallback(type, 'in', [this.feature]);
                } else if (!previouslyIn || click) {
                    this.triggerCallback(type, 'in', [this.feature]);
                }
                this.lastFeature = this.feature;
                handled = true;
            } else {
                if (previouslyIn && inNew || (click && this.lastFeature)) {
                    this.triggerCallback(type, 'out', [this.lastFeature]);
                }
                this.feature = null;
            }
        } else {
            if (this.lastFeature && this.lastFeature.layer && (previouslyIn || click)) {
                this.triggerCallback(type, 'out', [this.lastFeature]);
            }
        }
        return handled;
    },
    triggerCallback: function (type, mode, args) {
        var key = this.EVENTMAP[type][mode];
        if (key) {
            if (type == 'click' && mode == 'out' && this.up && this.down) {
                var dpx = Math.sqrt(Math.pow(this.up.x - this.down.x, 2) + Math.pow(this.up.y - this.down.y, 2));
                if (dpx <= this.clickoutTolerance) {
                    this.callback(key, args);
                }
            } else {
                this.callback(key, args);
            }
        }
    },
    activate: function () {
        var activated = false;
        if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
            this.moveLayerToTop();
            this.map.events.on({
                "removelayer": this.handleMapEvents,
                "changelayer": this.handleMapEvents,
                scope: this
            });
            activated = true;
        }
        return activated;
    },
    deactivate: function () {
        var deactivated = false;
        if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            this.moveLayerBack();
            this.feature = null;
            this.lastFeature = null;
            this.down = null;
            this.up = null;
            this.map.events.un({
                "removelayer": this.handleMapEvents,
                "changelayer": this.handleMapEvents,
                scope: this
            });
            deactivated = true;
        }
        return deactivated;
    },
    handleMapEvents: function (evt) {
        if (!evt.property || evt.property == "order") {
            this.moveLayerToTop();
        }
    },
    moveLayerToTop: function () {
        var index = Math.max(this.map.Z_INDEX_BASE['Feature'] - 1, this.layer.getZIndex()) + 1;
        this.layer.setZIndex(index);
    },
    moveLayerBack: function () {
        var index = this.layer.getZIndex() - 1;
        if (index >= this.map.Z_INDEX_BASE['Feature']) {
            this.layer.setZIndex(index);
        } else {
            this.map.setLayerZIndex(this.layer, this.map.getLayerIndex(this.layer));
        }
    },
    CLASS_NAME: "OpenLayers.Handler.Feature"
});
OpenLayers.Control.SelectFeature = OpenLayers.Class(OpenLayers.Control, {
    multipleKey: null,
    toggleKey: null,
    multiple: false,
    clickout: true,
    toggle: false,
    hover: false,
    box: false,
    onBeforeSelect: function () {},
    onSelect: function () {},
    onUnselect: function () {},
    scope: this,
    geometryTypes: null,
    layer: null,
    callbacks: null,
    selectStyle: null,
    renderIntent: "select",
    handlers: null,
    initialize: function (layer, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.layer = layer;
        var callbacks = {
            click: this.clickFeature,
            clickout: this.clickoutFeature
        };
        if (this.hover) {
            callbacks.over = this.overFeature;
            callbacks.out = this.outFeature;
        }
        this.callbacks = OpenLayers.Util.extend(callbacks, this.callbacks);
        this.handlers = {
            feature: new OpenLayers.Handler.Feature(this, layer, this.callbacks, {
                geometryTypes: this.geometryTypes
            })
        };
        if (this.box) {
            this.handlers.box = new OpenLayers.Handler.Box(this, {
                done: this.selectBox
            }, {
                boxDivClassName: "olHandlerBoxSelectFeature"
            });
        }
    },
    activate: function () {
        if (!this.active) {
            this.handlers.feature.activate();
            if (this.box && this.handlers.box) {
                this.handlers.box.activate();
            }
        }
        return OpenLayers.Control.prototype.activate.apply(this, arguments);
    },
    deactivate: function () {
        if (this.active) {
            this.handlers.feature.deactivate();
            if (this.handlers.box) {
                this.handlers.box.deactivate();
            }
        }
        return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
    },
    unselectAll: function (options) {
        var feature;
        for (var i = this.layer.selectedFeatures.length - 1; i >= 0; --i) {
            feature = this.layer.selectedFeatures[i];
            if (!options || options.except != feature) {
                this.unselect(feature);
            }
        }
    },
    clickFeature: function (feature) {
        if (!this.hover) {
            var selected = (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) > -1);
            if (selected) {
                if (this.toggleSelect()) {
                    this.unselect(feature);
                } else if (!this.multipleSelect()) {
                    this.unselectAll({
                        except: feature
                    });
                }
            } else {
                if (!this.multipleSelect()) {
                    this.unselectAll({
                        except: feature
                    });
                }
                this.select(feature);
            }
        }
    },
    multipleSelect: function () {
        return this.multiple || this.handlers.feature.evt[this.multipleKey];
    },
    toggleSelect: function () {
        return this.toggle || this.handlers.feature.evt[this.toggleKey];
    },
    clickoutFeature: function (feature) {
        if (!this.hover && this.clickout) {
            this.unselectAll();
        }
    },
    overFeature: function (feature) {
        if (this.hover && (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) == -1)) {
            this.select(feature);
        }
    },
    outFeature: function (feature) {
        if (this.hover) {
            this.unselect(feature);
        }
    },
    select: function (feature) {
        var cont = this.onBeforeSelect.call(this.scope, feature);
        if (cont !== false) {
            cont = this.layer.events.triggerEvent("beforefeatureselected", {
                feature: feature
            });
            if (cont !== false) {
                this.layer.selectedFeatures.push(feature);
                var selectStyle = this.selectStyle || this.renderIntent;
                this.layer.drawFeature(feature, selectStyle);
                this.layer.events.triggerEvent("featureselected", {
                    feature: feature
                });
                this.onSelect.call(this.scope, feature);
            }
        }
    },
    unselect: function (feature) {
        this.layer.drawFeature(feature, "default");
        OpenLayers.Util.removeItem(this.layer.selectedFeatures, feature);
        this.layer.events.triggerEvent("featureunselected", {
            feature: feature
        });
        this.onUnselect.call(this.scope, feature);
    },
    selectBox: function (position) {
        if (position instanceof OpenLayers.Bounds) {
            var minXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left, position.bottom));
            var maxXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right, position.top));
            var bounds = new OpenLayers.Bounds(minXY.lon, minXY.lat, maxXY.lon, maxXY.lat);
            if (!this.multipleSelect()) {
                this.unselectAll();
            }
            var prevMultiple = this.multiple;
            this.multiple = true;
            for (var i = 0, len = this.layer.features.length; i < len; ++i) {
                var feature = this.layer.features[i];
                if (this.geometryTypes == null || OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) > -1) {
                    if (bounds.toGeometry().intersects(feature.geometry)) {
                        if (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) == -1) {
                            this.select(feature);
                        }
                    }
                }
            }
            this.multiple = prevMultiple;
        }
    },
    setMap: function (map) {
        this.handlers.feature.setMap(map);
        if (this.box) {
            this.handlers.box.setMap(map);
        }
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
    },
    CLASS_NAME: "OpenLayers.Control.SelectFeature"
});
OpenLayers.Control.PanPanel = OpenLayers.Class(OpenLayers.Control.Panel, {
    initialize: function (options) {
        OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
        this.addControls([new OpenLayers.Control.Pan(OpenLayers.Control.Pan.NORTH), new OpenLayers.Control.Pan(OpenLayers.Control.Pan.SOUTH), new OpenLayers.Control.Pan(OpenLayers.Control.Pan.EAST), new OpenLayers.Control.Pan(OpenLayers.Control.Pan.WEST)]);
    },
    CLASS_NAME: "OpenLayers.Control.PanPanel"
});
OpenLayers.LonLat = OpenLayers.Class({
    lon: 0.0,
    lat: 0.0,
    initialize: function (lon, lat) {
        this.lon = parseFloat(lon);
        this.lat = parseFloat(lat);
    },
    toString: function () {
        return ("lon=" + this.lon + ",lat=" + this.lat);
    },
    toShortString: function () {
        return (this.lon + ", " + this.lat);
    },
    clone: function () {
        return new OpenLayers.LonLat(this.lon, this.lat);
    },
    add: function (lon, lat) {
        if ((lon == null) || (lat == null)) {
            var msg = OpenLayers.i18n("lonlatAddError");
            OpenLayers.Console.error(msg);
            return null;
        }
        return new OpenLayers.LonLat(this.lon + lon, this.lat + lat);
    },
    equals: function (ll) {
        var equals = false;
        if (ll != null) {
            equals = ((this.lon == ll.lon && this.lat == ll.lat) || (isNaN(this.lon) && isNaN(this.lat) && isNaN(ll.lon) && isNaN(ll.lat)));
        }
        return equals;
    },
    transform: function (source, dest) {
        var point = OpenLayers.Projection.transform({
            'x': this.lon,
            'y': this.lat
        }, source, dest);
        this.lon = point.x;
        this.lat = point.y;
        return this;
    },
    wrapDateLine: function (maxExtent) {
        var newLonLat = this.clone();
        if (maxExtent) {
            while (newLonLat.lon < maxExtent.left) {
                newLonLat.lon += maxExtent.getWidth();
            }
            while (newLonLat.lon > maxExtent.right) {
                newLonLat.lon -= maxExtent.getWidth();
            }
        }
        return newLonLat;
    },
    CLASS_NAME: "OpenLayers.LonLat"
});
OpenLayers.LonLat.fromString = function (str) {
    var pair = str.split(",");
    return new OpenLayers.LonLat(parseFloat(pair[0]), parseFloat(pair[1]));
};
OpenLayers.Size = OpenLayers.Class({
    w: 0.0,
    h: 0.0,
    initialize: function (w, h) {
        this.w = parseFloat(w);
        this.h = parseFloat(h);
    },
    toString: function () {
        return ("w=" + this.w + ",h=" + this.h);
    },
    clone: function () {
        return new OpenLayers.Size(this.w, this.h);
    },
    equals: function (sz) {
        var equals = false;
        if (sz != null) {
            equals = ((this.w == sz.w && this.h == sz.h) || (isNaN(this.w) && isNaN(this.h) && isNaN(sz.w) && isNaN(sz.h)));
        }
        return equals;
    },
    CLASS_NAME: "OpenLayers.Size"
});
OpenLayers.Pixel = OpenLayers.Class({
    x: 0.0,
    y: 0.0,
    initialize: function (x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    },
    toString: function () {
        return ("x=" + this.x + ",y=" + this.y);
    },
    clone: function () {
        return new OpenLayers.Pixel(this.x, this.y);
    },
    equals: function (px) {
        var equals = false;
        if (px != null) {
            equals = ((this.x == px.x && this.y == px.y) || (isNaN(this.x) && isNaN(this.y) && isNaN(px.x) && isNaN(px.y)));
        }
        return equals;
    },
    add: function (x, y) {
        if ((x == null) || (y == null)) {
            var msg = OpenLayers.i18n("pixelAddError");
            OpenLayers.Console.error(msg);
            return null;
        }
        return new OpenLayers.Pixel(this.x + x, this.y + y);
    },
    offset: function (px) {
        var newPx = this.clone();
        if (px) {
            newPx = this.add(px.x, px.y);
        }
        return newPx;
    },
    CLASS_NAME: "OpenLayers.Pixel"
});
OpenLayers.Bounds = OpenLayers.Class({
    left: null,
    bottom: null,
    right: null,
    top: null,
    centerLonLat: null,
    initialize: function (left, bottom, right, top) {
        if (left != null) {
            this.left = parseFloat(left);
        }
        if (bottom != null) {
            this.bottom = parseFloat(bottom);
        }
        if (right != null) {
            this.right = parseFloat(right);
        }
        if (top != null) {
            this.top = parseFloat(top);
        }
    },
    clone: function () {
        return new OpenLayers.Bounds(this.left, this.bottom, this.right, this.top);
    },
    equals: function (bounds) {
        var equals = false;
        if (bounds != null) {
            equals = ((this.left == bounds.left) && (this.right == bounds.right) && (this.top == bounds.top) && (this.bottom == bounds.bottom));
        }
        return equals;
    },
    toString: function () {
        return ("left-bottom=(" + this.left + "," + this.bottom + ")" + " right-top=(" + this.right + "," + this.top + ")");
    },
    toArray: function () {
        return [this.left, this.bottom, this.right, this.top];
    },
    toBBOX: function (decimal) {
        if (decimal == null) {
            decimal = 6;
        }
        var mult = Math.pow(10, decimal);
        var bbox = Math.round(this.left * mult) / mult + "," + Math.round(this.bottom * mult) / mult + "," + Math.round(this.right * mult) / mult + "," + Math.round(this.top * mult) / mult;
        return bbox;
    },
    toGeometry: function () {
        return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left, this.bottom), new OpenLayers.Geometry.Point(this.right, this.bottom), new OpenLayers.Geometry.Point(this.right, this.top), new OpenLayers.Geometry.Point(this.left, this.top)])]);
    },
    getWidth: function () {
        return (this.right - this.left);
    },
    getHeight: function () {
        return (this.top - this.bottom);
    },
    getSize: function () {
        return new OpenLayers.Size(this.getWidth(), this.getHeight());
    },
    getCenterPixel: function () {
        return new OpenLayers.Pixel((this.left + this.right) / 2, (this.bottom + this.top) / 2);
    },
    getCenterLonLat: function () {
        if (!this.centerLonLat) {
            this.centerLonLat = new OpenLayers.LonLat((this.left + this.right) / 2, (this.bottom + this.top) / 2);
        }
        return this.centerLonLat;
    },
    scale: function (ratio, origin) {
        if (origin == null) {
            origin = this.getCenterLonLat();
        }
        var bounds = [];
        var origx, origy;
        if (origin.CLASS_NAME == "OpenLayers.LonLat") {
            origx = origin.lon;
            origy = origin.lat;
        } else {
            origx = origin.x;
            origy = origin.y;
        }
        var left = (this.left - origx) * ratio + origx;
        var bottom = (this.bottom - origy) * ratio + origy;
        var right = (this.right - origx) * ratio + origx;
        var top = (this.top - origy) * ratio + origy;
        return new OpenLayers.Bounds(left, bottom, right, top);
    },
    add: function (x, y) {
        if ((x == null) || (y == null)) {
            var msg = OpenLayers.i18n("boundsAddError");
            OpenLayers.Console.error(msg);
            return null;
        }
        return new OpenLayers.Bounds(this.left + x, this.bottom + y, this.right + x, this.top + y);
    },
    extend: function (object) {
        var bounds = null;
        if (object) {
            switch (object.CLASS_NAME) {
            case "OpenLayers.LonLat":
                bounds = new OpenLayers.Bounds(object.lon, object.lat, object.lon, object.lat);
                break;
            case "OpenLayers.Geometry.Point":
                bounds = new OpenLayers.Bounds(object.x, object.y, object.x, object.y);
                break;
            case "OpenLayers.Bounds":
                bounds = object;
                break;
            }
            if (bounds) {
                this.centerLonLat = null;
                if ((this.left == null) || (bounds.left < this.left)) {
                    this.left = bounds.left;
                }
                if ((this.bottom == null) || (bounds.bottom < this.bottom)) {
                    this.bottom = bounds.bottom;
                }
                if ((this.right == null) || (bounds.right > this.right)) {
                    this.right = bounds.right;
                }
                if ((this.top == null) || (bounds.top > this.top)) {
                    this.top = bounds.top;
                }
            }
        }
    },
    containsLonLat: function (ll, inclusive) {
        return this.contains(ll.lon, ll.lat, inclusive);
    },
    containsPixel: function (px, inclusive) {
        return this.contains(px.x, px.y, inclusive);
    },
    contains: function (x, y, inclusive) {
        if (inclusive == null) {
            inclusive = true;
        }
        var contains = false;
        if (inclusive) {
            contains = ((x >= this.left) && (x <= this.right) && (y >= this.bottom) && (y <= this.top));
        } else {
            contains = ((x > this.left) && (x < this.right) && (y > this.bottom) && (y < this.top));
        }
        return contains;
    },
    intersectsBounds: function (bounds, inclusive) {
        if (inclusive == null) {
            inclusive = true;
        }
        var inBottom = (bounds.bottom == this.bottom && bounds.top == this.top) ? true : (((bounds.bottom > this.bottom) && (bounds.bottom < this.top)) || ((this.bottom > bounds.bottom) && (this.bottom < bounds.top)));
        var inTop = (bounds.bottom == this.bottom && bounds.top == this.top) ? true : (((bounds.top > this.bottom) && (bounds.top < this.top)) || ((this.top > bounds.bottom) && (this.top < bounds.top)));
        var inRight = (bounds.right == this.right && bounds.left == this.left) ? true : (((bounds.right > this.left) && (bounds.right < this.right)) || ((this.right > bounds.left) && (this.right < bounds.right)));
        var inLeft = (bounds.right == this.right && bounds.left == this.left) ? true : (((bounds.left > this.left) && (bounds.left < this.right)) || ((this.left > bounds.left) && (this.left < bounds.right)));
        return (this.containsBounds(bounds, true, inclusive) || bounds.containsBounds(this, true, inclusive) || ((inTop || inBottom) && (inLeft || inRight)));
    },
    containsBounds: function (bounds, partial, inclusive) {
        if (partial == null) {
            partial = false;
        }
        if (inclusive == null) {
            inclusive = true;
        }
        var inLeft;
        var inTop;
        var inRight;
        var inBottom;
        if (inclusive) {
            inLeft = (bounds.left >= this.left) && (bounds.left <= this.right);
            inTop = (bounds.top >= this.bottom) && (bounds.top <= this.top);
            inRight = (bounds.right >= this.left) && (bounds.right <= this.right);
            inBottom = (bounds.bottom >= this.bottom) && (bounds.bottom <= this.top);
        } else {
            inLeft = (bounds.left > this.left) && (bounds.left < this.right);
            inTop = (bounds.top > this.bottom) && (bounds.top < this.top);
            inRight = (bounds.right > this.left) && (bounds.right < this.right);
            inBottom = (bounds.bottom > this.bottom) && (bounds.bottom < this.top);
        }
        return (partial) ? (inTop || inBottom) && (inLeft || inRight) : (inTop && inLeft && inBottom && inRight);
    },
    determineQuadrant: function (lonlat) {
        var quadrant = "";
        var center = this.getCenterLonLat();
        quadrant += (lonlat.lat < center.lat) ? "b" : "t";
        quadrant += (lonlat.lon < center.lon) ? "l" : "r";
        return quadrant;
    },
    transform: function (source, dest) {
        this.centerLonLat = null;
        var ll = OpenLayers.Projection.transform({
            'x': this.left,
            'y': this.bottom
        }, source, dest);
        var lr = OpenLayers.Projection.transform({
            'x': this.right,
            'y': this.bottom
        }, source, dest);
        var ul = OpenLayers.Projection.transform({
            'x': this.left,
            'y': this.top
        }, source, dest);
        var ur = OpenLayers.Projection.transform({
            'x': this.right,
            'y': this.top
        }, source, dest);
        this.left = Math.min(ll.x, ul.x);
        this.bottom = Math.min(ll.y, lr.y);
        this.right = Math.max(lr.x, ur.x);
        this.top = Math.max(ul.y, ur.y);
        return this;
    },
    wrapDateLine: function (maxExtent, options) {
        options = options || {};
        var leftTolerance = options.leftTolerance || 0;
        var rightTolerance = options.rightTolerance || 0;
        var newBounds = this.clone();
        if (maxExtent) {
            while (newBounds.left < maxExtent.left && (newBounds.right - rightTolerance) <= maxExtent.left) {
                newBounds = newBounds.add(maxExtent.getWidth(), 0);
            }
            while ((newBounds.left + leftTolerance) >= maxExtent.right && newBounds.right > maxExtent.right) {
                newBounds = newBounds.add(-maxExtent.getWidth(), 0);
            }
        }
        return newBounds;
    },
    CLASS_NAME: "OpenLayers.Bounds"
});
OpenLayers.Bounds.fromString = function (str) {
    var bounds = str.split(",");
    return OpenLayers.Bounds.fromArray(bounds);
};
OpenLayers.Bounds.fromArray = function (bbox) {
    return new OpenLayers.Bounds(parseFloat(bbox[0]), parseFloat(bbox[1]), parseFloat(bbox[2]), parseFloat(bbox[3]));
};
OpenLayers.Bounds.fromSize = function (size) {
    return new OpenLayers.Bounds(0, size.h, size.w, 0);
};
OpenLayers.Bounds.oppositeQuadrant = function (quadrant) {
    var opp = "";
    opp += (quadrant.charAt(0) == 't') ? 'b' : 't';
    opp += (quadrant.charAt(1) == 'l') ? 'r' : 'l';
    return opp;
};
OpenLayers.Lang = {
    code: null,
    defaultCode: "en",
    getCode: function () {
        if (!OpenLayers.Lang.code) {
            OpenLayers.Lang.setCode();
        }
        return OpenLayers.Lang.code;
    },
    setCode: function (code) {
        var lang;
        if (!code) {
            code = (OpenLayers.Util.getBrowserName() == "msie") ? navigator.userLanguage : navigator.language;
        }
        var parts = code.split('-');
        parts[0] = parts[0].toLowerCase();
        if (typeof OpenLayers.Lang[parts[0]] == "object") {
            lang = parts[0];
        }
        if (parts[1]) {
            var testLang = parts[0] + '-' + parts[1].toUpperCase();
            if (typeof OpenLayers.Lang[testLang] == "object") {
                lang = testLang;
            }
        }
        if (!lang) {
            OpenLayers.Console.warn('Failed to find OpenLayers.Lang.' + parts.join("-") + ' dictionary, falling back to default language');
            lang = OpenLayers.Lang.defaultCode;
        }
        OpenLayers.Lang.code = lang;
    },
    translate: function (key, context) {
        var dictionary = OpenLayers.Lang[OpenLayers.Lang.getCode()];
        var message = dictionary[key];
        if (!message) {
            message = key;
        }
        if (context) {
            message = OpenLayers.String.format(message, context);
        }
        return message;
    }
};
OpenLayers.i18n = OpenLayers.Lang.translate;
OpenLayers.Lang.en = {
    'unhandledRequest': "Unhandled request return ${statusText}",
    'permalink': "Permalink",
    'overlays': "Overlays",
    'baseLayer': "Base Layer",
    'sameProjection': "The overview map only works when it is in the same projection as the main map",
    'readNotImplemented': "Read not implemented.",
    'writeNotImplemented': "Write not implemented.",
    'noFID': "Can't update a feature for which there is no FID.",
    'errorLoadingGML': "Error in loading GML file ${url}",
    'browserNotSupported': "Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",
    'componentShouldBe': "addFeatures : component should be an ${geomType}",
    'getFeatureError': "getFeatureFromEvent called on layer with no renderer. This usually means you " + "destroyed a layer, but not some handler which is associated with it.",
    'minZoomLevelError': "The minZoomLevel property is only intended for use " + "with the FixedZoomLevels-descendent layers. That this " + "wfs layer checks for minZoomLevel is a relic of the" + "past. We cannot, however, remove it without possibly " + "breaking OL based applications that may depend on it." + " Therefore we are deprecating it -- the minZoomLevel " + "check below will be removed at 3.0. Please instead " + "use min/max resolution setting as described here: " + "http://trac.openlayers.org/wiki/SettingZoomLevels",
    'commitSuccess': "WFS Transaction: SUCCESS ${response}",
    'commitFailed': "WFS Transaction: FAILED ${response}",
    'googleWarning': "The Google Layer was unable to load correctly.<br><br>" + "To get rid of this message, select a new BaseLayer " + "in the layer switcher in the upper-right corner.<br><br>" + "Most likely, this is because the Google Maps library " + "script was either not included, or does not contain the " + "correct API key for your site.<br><br>" + "Developers: For help getting this working correctly, " + "<a href='http://trac.openlayers.org/wiki/Google' " + "target='_blank'>click here</a>",
    'getLayerWarning': "The ${layerType} Layer was unable to load correctly.<br><br>" + "To get rid of this message, select a new BaseLayer " + "in the layer switcher in the upper-right corner.<br><br>" + "Most likely, this is because the ${layerLib} library " + "script was not correctly included.<br><br>" + "Developers: For help getting this working correctly, " + "<a href='http://trac.openlayers.org/wiki/${layerLib}' " + "target='_blank'>click here</a>",
    'scale': "Scale = 1 : ${scaleDenom}",
    'layerAlreadyAdded': "You tried to add the layer: ${layerName} to the map, but it has already been added",
    'reprojectDeprecated': "You are using the 'reproject' option " + "on the ${layerName} layer. This option is deprecated: " + "its use was designed to support displaying data over commercial " + "basemaps, but that functionality should now be achieved by using " + "Spherical Mercator support. More information is available from " + "http://trac.openlayers.org/wiki/SphericalMercator.",
    'methodDeprecated': "This method has been deprecated and will be removed in 3.0. " + "Please use ${newMethod} instead.",
    'boundsAddError': "You must pass both x and y values to the add function.",
    'lonlatAddError': "You must pass both lon and lat values to the add function.",
    'pixelAddError': "You must pass both x and y values to the add function.",
    'unsupportedGeometryType': "Unsupported geometry type: ${geomType}",
    'pagePositionFailed': "OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.",
    'end': '',
    'filterEvaluateNotImplemented': "evaluate is not implemented for this filter type."
};
OpenLayers.Format.SLD.v1 = OpenLayers.Class(OpenLayers.Format.XML, {
    namespaces: {
        sld: "http://www.opengis.net/sld",
        ogc: "http://www.opengis.net/ogc",
        xlink: "http://www.w3.org/1999/xlink",
        xsi: "http://www.w3.org/2001/XMLSchema-instance"
    },
    defaultPrefix: "sld",
    schemaLocation: null,
    defaultSymbolizer: {
        fillColor: "#808080",
        fillOpacity: 1,
        strokeColor: "#000000",
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeDashstyle: "solid",
        pointRadius: 3,
        graphicName: "square"
    },
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    },
    read: function (data) {
        var sld = {
            namedLayers: {}
        };
        this.readChildNodes(data, sld);
        return sld;
    },
    readers: {
        "sld": {
            "StyledLayerDescriptor": function (node, sld) {
                sld.version = node.getAttribute("version");
                this.readChildNodes(node, sld);
            },
            "Name": function (node, obj) {
                obj.name = this.getChildValue(node);
            },
            "Title": function (node, obj) {
                obj.title = this.getChildValue(node);
            },
            "Abstract": function (node, obj) {
                obj.description = this.getChildValue(node);
            },
            "NamedLayer": function (node, sld) {
                var layer = {
                    userStyles: [],
                    namedStyles: []
                };
                this.readChildNodes(node, layer);
                for (var i = 0, len = layer.userStyles.length; i < len; ++i) {
                    layer.userStyles[i].layerName = layer.name;
                }
                sld.namedLayers[layer.name] = layer;
            },
            "NamedStyle": function (node, layer) {
                layer.namedStyles.push(this.getChildName(node.firstChild));
            },
            "UserStyle": function (node, layer) {
                var style = new OpenLayers.Style(this.defaultSymbolizer);
                this.readChildNodes(node, style);
                layer.userStyles.push(style);
            },
            "IsDefault": function (node, style) {
                if (this.getChildValue(node) == "1") {
                    style.isDefault = true;
                }
            },
            "FeatureTypeStyle": function (node, style) {
                var obj = {
                    rules: []
                };
                this.readChildNodes(node, obj);
                style.rules = obj.rules;
            },
            "Rule": function (node, obj) {
                var rule = new OpenLayers.Rule();
                this.readChildNodes(node, rule);
                obj.rules.push(rule);
            },
            "ElseFilter": function (node, rule) {
                rule.elseFilter = true;
            },
            "MinScaleDenominator": function (node, rule) {
                rule.minScaleDenominator = parseFloat(this.getChildValue(node));
            },
            "MaxScaleDenominator": function (node, rule) {
                rule.maxScaleDenominator = parseFloat(this.getChildValue(node));
            },
            "TextSymbolizer": function (node, rule) {
                var symbolizer = rule.symbolizer["Text"] || {};
                this.readChildNodes(node, symbolizer);
                rule.symbolizer["Text"] = symbolizer;
            },
            "Label": function (node, symbolizer) {
                var obj = {};
                this.readChildNodes(node, obj);
                if (obj.property) {
                    symbolizer.label = "${" + obj.property + "}";
                } else {
                    var value = this.readOgcExpression(node);
                    if (value) {
                        symbolizer.label = value;
                    }
                }
            },
            "Font": function (node, symbolizer) {
                this.readChildNodes(node, symbolizer);
            },
            "Halo": function (node, symbolizer) {
                var obj = {};
                this.readChildNodes(node, obj);
                symbolizer.haloRadius = obj.haloRadius;
                symbolizer.haloColor = obj.fillColor;
                symbolizer.haloOpacity = obj.fillOpacity;
            },
            "Radius": function (node, symbolizer) {
                var radius = this.readOgcExpression(node);
                if (radius != null) {
                    symbolizer.haloRadius = radius;
                }
            },
            "LineSymbolizer": function (node, rule) {
                var symbolizer = rule.symbolizer["Line"] || {};
                this.readChildNodes(node, symbolizer);
                rule.symbolizer["Line"] = symbolizer;
            },
            "PolygonSymbolizer": function (node, rule) {
                var symbolizer = rule.symbolizer["Polygon"] || {};
                this.readChildNodes(node, symbolizer);
                rule.symbolizer["Polygon"] = symbolizer;
            },
            "PointSymbolizer": function (node, rule) {
                var symbolizer = rule.symbolizer["Point"] || {};
                this.readChildNodes(node, symbolizer);
                rule.symbolizer["Point"] = symbolizer;
            },
            "Stroke": function (node, symbolizer) {
                OpenLayers.Util.applyDefaults(symbolizer, {
                    strokeWidth: this.defaultSymbolizer.strokeWidth,
                    strokeColor: this.defaultSymbolizer.strokeColor
                });
                this.readChildNodes(node, symbolizer);
            },
            "Fill": function (node, symbolizer) {
                this.readChildNodes(node, symbolizer);
            },
            "CssParameter": function (node, symbolizer) {
                var cssProperty = node.getAttribute("name");
                var symProperty = this.cssMap[cssProperty];
                if (symProperty) {
                    var value = this.readOgcExpression(node);
                    if (value) {
                        symbolizer[symProperty] = value;
                    }
                }
            },
            "Graphic": function (node, symbolizer) {
                var graphic = {};
                this.readChildNodes(node, graphic);
                var properties = ["strokeColor", "strokeWidth", "strokeOpacity", "strokeLinecap", "fillColor", "fillOpacity", "graphicName", "rotation", "graphicFormat"];
                var prop, value;
                for (var i = 0, len = properties.length; i < len; ++i) {
                    prop = properties[i];
                    value = graphic[prop];
                    if (value != undefined) {
                        symbolizer[prop] = value;
                    }
                }
                if (graphic.opacity != undefined) {
                    symbolizer.graphicOpacity = graphic.opacity;
                }
                if (graphic.size != undefined) {
                    symbolizer.pointRadius = graphic.size / 2;
                }
                if (graphic.href != undefined) {
                    symbolizer.externalGraphic = graphic.href;
                }
                if (graphic.rotation != undefined) {
                    symbolizer.rotation = graphic.rotation;
                }
            },
            "ExternalGraphic": function (node, graphic) {
                this.readChildNodes(node, graphic);
            },
            "Mark": function (node, graphic) {
                this.readChildNodes(node, graphic);
            },
            "WellKnownName": function (node, graphic) {
                graphic.graphicName = this.getChildValue(node);
            },
            "Opacity": function (node, obj) {
                var opacity = this.readOgcExpression(node);
                if (opacity) {
                    obj.opacity = opacity;
                }
            },
            "Size": function (node, obj) {
                var size = this.readOgcExpression(node);
                if (size) {
                    obj.size = size;
                }
            },
            "Rotation": function (node, obj) {
                var rotation = this.readOgcExpression(node);
                if (rotation) {
                    obj.rotation = rotation;
                }
            },
            "OnlineResource": function (node, obj) {
                obj.href = this.getAttributeNS(node, this.namespaces.xlink, "href");
            },
            "Format": function (node, graphic) {
                graphic.graphicFormat = this.getChildValue(node);
            }
        }
    },
    cssMap: {
        "stroke": "strokeColor",
        "stroke-opacity": "strokeOpacity",
        "stroke-width": "strokeWidth",
        "stroke-linecap": "strokeLinecap",
        "stroke-dasharray": "strokeDashstyle",
        "fill": "fillColor",
        "fill-opacity": "fillOpacity",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-weight": "fontWeight",
        "font-style": "fontStyle"
    },
    getCssProperty: function (sym) {
        var css = null;
        for (var prop in this.cssMap) {
            if (this.cssMap[prop] == sym) {
                css = prop;
                break;
            }
        }
        return css;
    },
    getGraphicFormat: function (href) {
        var format, regex;
        for (var key in this.graphicFormats) {
            if (this.graphicFormats[key].test(href)) {
                format = key;
                break;
            }
        }
        return format || this.defautlGraphicFormat;
    },
    defaultGraphicFormat: "image/png",
    graphicFormats: {
        "image/jpeg": /\.jpe?g$/i,
        "image/gif": /\.gif$/i,
        "image/png": /\.png$/i
    },
    write: function (sld) {
        return this.writers.sld.StyledLayerDescriptor.apply(this, [sld]);
    },
    writers: {
        "sld": {
            "StyledLayerDescriptor": function (sld) {
                var root = this.createElementNSPlus("StyledLayerDescriptor", {
                    attributes: {
                        "version": this.VERSION,
                        "xsi:schemaLocation": this.schemaLocation
                    }
                });
                if (sld.name) {
                    this.writeNode("Name", sld.name, root);
                }
                if (sld.title) {
                    this.writeNode("Title", sld.title, root);
                }
                if (sld.description) {
                    this.writeNode("Abstract", sld.description, root);
                }
                for (var name in sld.namedLayers) {
                    this.writeNode("NamedLayer", sld.namedLayers[name], root);
                }
                return root;
            },
            "Name": function (name) {
                return this.createElementNSPlus("Name", {
                    value: name
                });
            },
            "Title": function (title) {
                return this.createElementNSPlus("Title", {
                    value: title
                });
            },
            "Abstract": function (description) {
                return this.createElementNSPlus("Abstract", {
                    value: description
                });
            },
            "NamedLayer": function (layer) {
                var node = this.createElementNSPlus("NamedLayer");
                this.writeNode("Name", layer.name, node);
                if (layer.namedStyles) {
                    for (var i = 0, len = layer.namedStyles.length; i < len; ++i) {
                        this.writeNode("NamedStyle", layer.namedStyles[i], node);
                    }
                }
                if (layer.userStyles) {
                    for (var i = 0, len = layer.userStyles.length; i < len; ++i) {
                        this.writeNode("UserStyle", layer.userStyles[i], node);
                    }
                }
                return node;
            },
            "NamedStyle": function (name) {
                var node = this.createElementNSPlus("NamedStyle");
                this.writeNode("Name", name, node);
                return node;
            },
            "UserStyle": function (style) {
                var node = this.createElementNSPlus("UserStyle");
                if (style.name) {
                    this.writeNode("Name", style.name, node);
                }
                if (style.title) {
                    this.writeNode("Title", style.title, node);
                }
                if (style.description) {
                    this.writeNode("Abstract", style.description, node);
                }
                if (style.isDefault) {
                    this.writeNode("IsDefault", style.isDefault, node);
                }
                this.writeNode("FeatureTypeStyle", style, node);
                return node;
            },
            "IsDefault": function (bool) {
                return this.createElementNSPlus("IsDefault", {
                    value: (bool) ? "1" : "0"
                });
            },
            "FeatureTypeStyle": function (style) {
                var node = this.createElementNSPlus("FeatureTypeStyle");
                for (var i = 0, len = style.rules.length; i < len; ++i) {
                    this.writeNode("Rule", style.rules[i], node);
                }
                return node;
            },
            "Rule": function (rule) {
                var node = this.createElementNSPlus("Rule");
                if (rule.name) {
                    this.writeNode("Name", rule.name, node);
                }
                if (rule.title) {
                    this.writeNode("Title", rule.title, node);
                }
                if (rule.description) {
                    this.writeNode("Abstract", rule.description, node);
                }
                if (rule.elseFilter) {
                    this.writeNode("ElseFilter", null, node);
                } else if (rule.filter) {
                    this.writeNode("ogc:Filter", rule.filter, node);
                }
                if (rule.minScaleDenominator != undefined) {
                    this.writeNode("MinScaleDenominator", rule.minScaleDenominator, node);
                }
                if (rule.maxScaleDenominator != undefined) {
                    this.writeNode("MaxScaleDenominator", rule.maxScaleDenominator, node);
                }
                var types = OpenLayers.Style.SYMBOLIZER_PREFIXES;
                var type, symbolizer;
                for (var i = 0, len = types.length; i < len; ++i) {
                    type = types[i];
                    symbolizer = rule.symbolizer[type];
                    if (symbolizer) {
                        this.writeNode(type + "Symbolizer", symbolizer, node);
                    }
                }
                return node;
            },
            "ElseFilter": function () {
                return this.createElementNSPlus("ElseFilter");
            },
            "MinScaleDenominator": function (scale) {
                return this.createElementNSPlus("MinScaleDenominator", {
                    value: scale
                });
            },
            "MaxScaleDenominator": function (scale) {
                return this.createElementNSPlus("MaxScaleDenominator", {
                    value: scale
                });
            },
            "LineSymbolizer": function (symbolizer) {
                var node = this.createElementNSPlus("LineSymbolizer");
                this.writeNode("Stroke", symbolizer, node);
                return node;
            },
            "Stroke": function (symbolizer) {
                var node = this.createElementNSPlus("Stroke");
                if (symbolizer.strokeColor != undefined) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "strokeColor"
                    }, node);
                }
                if (symbolizer.strokeOpacity != undefined) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "strokeOpacity"
                    }, node);
                }
                if (symbolizer.strokeWidth != undefined) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "strokeWidth"
                    }, node);
                }
                return node;
            },
            "CssParameter": function (obj) {
                return this.createElementNSPlus("CssParameter", {
                    attributes: {
                        name: this.getCssProperty(obj.key)
                    },
                    value: obj.symbolizer[obj.key]
                });
            },
            "TextSymbolizer": function (symbolizer) {
                var node = this.createElementNSPlus("TextSymbolizer");
                if (symbolizer.label != null) {
                    this.writeNode("Label", symbolizer.label, node);
                }
                if (symbolizer.fontFamily != null || symbolizer.fontSize != null || symbolizer.fontWeight != null || symbolizer.fontStyle != null) {
                    this.writeNode("Font", symbolizer, node);
                }
                if (symbolizer.haloRadius != null || symbolizer.haloColor != null || symbolizer.haloOpacity != null) {
                    this.writeNode("Halo", symbolizer, node);
                }
                if (symbolizer.fillColor != null || symbolizer.fillOpacity != null) {
                    this.writeNode("Fill", symbolizer, node);
                }
                return node;
            },
            "Font": function (symbolizer) {
                var node = this.createElementNSPlus("Font");
                if (symbolizer.fontFamily) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "fontFamily"
                    }, node);
                }
                if (symbolizer.fontSize) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "fontSize"
                    }, node);
                }
                if (symbolizer.fontWeight) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "fontWeight"
                    }, node);
                }
                if (symbolizer.fontStyle) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "fontStyle"
                    }, node);
                }
                return node;
            },
            "Label": function (label) {
                var node = this.createElementNSPlus("Label");
                var tokens = label.split("${");
                node.appendChild(this.createTextNode(tokens[0]));
                var item, last;
                for (var i = 1, len = tokens.length; i < len; i++) {
                    item = tokens[i];
                    last = item.indexOf("}");
                    if (last > 0) {
                        this.writeNode("ogc:PropertyName", {
                            property: item.substring(0, last)
                        }, node);
                        node.appendChild(this.createTextNode(item.substring(++last)));
                    } else {
                        node.appendChild(this.createTextNode("${" + item));
                    }
                }
                return node;
            },
            "Halo": function (symbolizer) {
                var node = this.createElementNSPlus("Halo");
                if (symbolizer.haloRadius) {
                    this.writeNode("Radius", symbolizer.haloRadius, node);
                }
                if (symbolizer.haloColor || symbolizer.haloOpacity) {
                    this.writeNode("Fill", {
                        fillColor: symbolizer.haloColor,
                        fillOpacity: symbolizer.haloOpacity
                    }, node);
                }
                return node;
            },
            "Radius": function (value) {
                return node = this.createElementNSPlus("Radius", {
                    value: value
                });
            },
            "PolygonSymbolizer": function (symbolizer) {
                var node = this.createElementNSPlus("PolygonSymbolizer");
                this.writeNode("Fill", symbolizer, node);
                if (symbolizer.strokeWidth != undefined || symbolizer.strokeColor != undefined || symbolizer.strokeOpacity != undefined) {
                    this.writeNode("Stroke", symbolizer, node);
                }
                return node;
            },
            "Fill": function (symbolizer) {
                var node = this.createElementNSPlus("Fill");
                if (symbolizer.fillColor) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "fillColor"
                    }, node);
                }
                if (symbolizer.fillOpacity != null) {
                    this.writeNode("CssParameter", {
                        symbolizer: symbolizer,
                        key: "fillOpacity"
                    }, node);
                }
                return node;
            },
            "PointSymbolizer": function (symbolizer) {
                var node = this.createElementNSPlus("PointSymbolizer");
                this.writeNode("Graphic", symbolizer, node);
                return node;
            },
            "Graphic": function (symbolizer) {
                var node = this.createElementNSPlus("Graphic");
                if (symbolizer.externalGraphic != undefined) {
                    this.writeNode("ExternalGraphic", symbolizer, node);
                } else if (symbolizer.graphicName) {
                    this.writeNode("Mark", symbolizer, node);
                }
                if (symbolizer.graphicOpacity != undefined) {
                    this.writeNode("Opacity", symbolizer.graphicOpacity, node);
                }
                if (symbolizer.pointRadius != undefined) {
                    this.writeNode("Size", symbolizer.pointRadius * 2, node);
                }
                if (symbolizer.rotation != undefined) {
                    this.writeNode("Rotation", symbolizer.rotation, node);
                }
                return node;
            },
            "ExternalGraphic": function (symbolizer) {
                var node = this.createElementNSPlus("ExternalGraphic");
                this.writeNode("OnlineResource", symbolizer.externalGraphic, node);
                var format = symbolizer.graphicFormat || this.getGraphicFormat(symbolizer.externalGraphic);
                this.writeNode("Format", format, node);
                return node;
            },
            "Mark": function (symbolizer) {
                var node = this.createElementNSPlus("Mark");
                this.writeNode("WellKnownName", symbolizer.graphicName, node);
                this.writeNode("Fill", symbolizer, node);
                this.writeNode("Stroke", symbolizer, node);
                return node;
            },
            "WellKnownName": function (name) {
                return this.createElementNSPlus("WellKnownName", {
                    value: name
                });
            },
            "Opacity": function (value) {
                return this.createElementNSPlus("Opacity", {
                    value: value
                });
            },
            "Size": function (value) {
                return this.createElementNSPlus("Size", {
                    value: value
                });
            },
            "Rotation": function (value) {
                return this.createElementNSPlus("Rotation", {
                    value: value
                });
            },
            "OnlineResource": function (href) {
                return this.createElementNSPlus("OnlineResource", {
                    attributes: {
                        "xlink:type": "simple",
                        "xlink:href": href
                    }
                });
            },
            "Format": function (format) {
                return this.createElementNSPlus("Format", {
                    value: format
                });
            }
        }
    },
    CLASS_NAME: "OpenLayers.Format.SLD.v1"
});
OpenLayers.Control.ZoomBox = OpenLayers.Class(OpenLayers.Control, {
    type: OpenLayers.Control.TYPE_TOOL,
    out: false,
    draw: function () {
        this.handler = new OpenLayers.Handler.Box(this, {
            done: this.zoomBox
        }, {
            keyMask: this.keyMask
        });
    },
    zoomBox: function (position) {
        if (position instanceof OpenLayers.Bounds) {
            if (!this.out) {
                var minXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left, position.bottom));
                var maxXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right, position.top));
                var bounds = new OpenLayers.Bounds(minXY.lon, minXY.lat, maxXY.lon, maxXY.lat);
            } else {
                var pixWidth = Math.abs(position.right - position.left);
                var pixHeight = Math.abs(position.top - position.bottom);
                var zoomFactor = Math.min((this.map.size.h / pixHeight), (this.map.size.w / pixWidth));
                var extent = this.map.getExtent();
                var center = this.map.getLonLatFromPixel(position.getCenterPixel());
                var xmin = center.lon - (extent.getWidth() / 2) * zoomFactor;
                var xmax = center.lon + (extent.getWidth() / 2) * zoomFactor;
                var ymin = center.lat - (extent.getHeight() / 2) * zoomFactor;
                var ymax = center.lat + (extent.getHeight() / 2) * zoomFactor;
                var bounds = new OpenLayers.Bounds(xmin, ymin, xmax, ymax);
            }
            this.map.zoomToExtent(bounds);
        } else {
            if (!this.out) {
                this.map.setCenter(this.map.getLonLatFromPixel(position), this.map.getZoom() + 1);
            } else {
                this.map.setCenter(this.map.getLonLatFromPixel(position), this.map.getZoom() - 1);
            }
        }
    },
    CLASS_NAME: "OpenLayers.Control.ZoomBox"
});
OpenLayers.Control.DragPan = OpenLayers.Class(OpenLayers.Control, {
    type: OpenLayers.Control.TYPE_TOOL,
    panned: false,
    interval: 25,
    draw: function () {
        this.handler = new OpenLayers.Handler.Drag(this, {
            "move": this.panMap,
            "done": this.panMapDone
        }, {
            interval: this.interval
        });
    },
    panMap: function (xy) {
        this.panned = true;
        this.map.pan(this.handler.last.x - xy.x, this.handler.last.y - xy.y, {
            dragging: this.handler.dragging,
            animate: false
        });
    },
    panMapDone: function (xy) {
        if (this.panned) {
            this.panMap(xy);
            this.panned = false;
        }
    },
    CLASS_NAME: "OpenLayers.Control.DragPan"
});
OpenLayers.Control.Navigation = OpenLayers.Class(OpenLayers.Control, {
    dragPan: null,
    dragPanOptions: null,
    zoomBox: null,
    zoomWheelEnabled: true,
    handleRightClicks: false,
    zoomBoxKeyMask: OpenLayers.Handler.MOD_SHIFT,
    initialize: function (options) {
        this.handlers = {};
        OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },
    destroy: function () {
        this.deactivate();
        if (this.dragPan) {
            this.dragPan.destroy();
        }
        this.dragPan = null;
        if (this.zoomBox) {
            this.zoomBox.destroy();
        }
        this.zoomBox = null;
        OpenLayers.Control.prototype.destroy.apply(this, arguments);
    },
    activate: function () {
        this.dragPan.activate();
        if (this.zoomWheelEnabled) {
            this.handlers.wheel.activate();
        }
        this.handlers.click.activate();
        this.zoomBox.activate();
        return OpenLayers.Control.prototype.activate.apply(this, arguments);
    },
    deactivate: function () {
        this.zoomBox.deactivate();
        this.dragPan.deactivate();
        this.handlers.click.deactivate();
        this.handlers.wheel.deactivate();
        return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
    },
    draw: function () {
        if (this.handleRightClicks) {
            this.map.div.oncontextmenu = function () {
                return false;
            };
        }
        var clickCallbacks = {
            'dblclick': this.defaultDblClick,
            'dblrightclick': this.defaultDblRightClick
        };
        var clickOptions = {
            'double': true,
            'stopDouble': true
        };
        this.handlers.click = new OpenLayers.Handler.Click(this, clickCallbacks, clickOptions);
        this.dragPan = new OpenLayers.Control.DragPan(OpenLayers.Util.extend({
            map: this.map
        }, this.dragPanOptions));
        this.zoomBox = new OpenLayers.Control.ZoomBox({
            map: this.map,
            keyMask: this.zoomBoxKeyMask
        });
        this.dragPan.draw();
        this.zoomBox.draw();
        this.handlers.wheel = new OpenLayers.Handler.MouseWheel(this, {
            "up": this.wheelUp,
            "down": this.wheelDown
        });
        this.activate();
    },
    defaultDblClick: function (evt) {
        var newCenter = this.map.getLonLatFromViewPortPx(evt.xy);
        this.map.setCenter(newCenter, this.map.zoom + 1);
    },
    defaultDblRightClick: function (evt) {
        var newCenter = this.map.getLonLatFromViewPortPx(evt.xy);
        this.map.setCenter(newCenter, this.map.zoom - 1);
    },
    wheelChange: function (evt, deltaZ) {
        var newZoom = this.map.getZoom() + deltaZ;
        if (!this.map.isValidZoomLevel(newZoom)) {
            return;
        }
        var size = this.map.getSize();
        var deltaX = size.w / 2 - evt.xy.x;
        var deltaY = evt.xy.y - size.h / 2;
        var newRes = this.map.baseLayer.getResolutionForZoom(newZoom);
        var zoomPoint = this.map.getLonLatFromPixel(evt.xy);
        var newCenter = new OpenLayers.LonLat(zoomPoint.lon + deltaX * newRes, zoomPoint.lat + deltaY * newRes);
        this.map.setCenter(newCenter, newZoom);
    },
    wheelUp: function (evt) {
        this.wheelChange(evt, 1);
    },
    wheelDown: function (evt) {
        this.wheelChange(evt, - 1);
    },
    disableZoomWheel: function () {
        this.zoomWheelEnabled = false;
        this.handlers.wheel.deactivate();
    },
    enableZoomWheel: function () {
        this.zoomWheelEnabled = true;
        if (this.active) {
            this.handlers.wheel.activate();
        }
    },
    CLASS_NAME: "OpenLayers.Control.Navigation"
});
OpenLayers.Layer.HTTPRequest = OpenLayers.Class(OpenLayers.Layer, {
    URL_HASH_FACTOR: (Math.sqrt(5) - 1) / 2,
    url: null,
    params: null,
    reproject: false,
    initialize: function (name, url, params, options) {
        var newArguments = arguments;
        newArguments = [name, options];
        OpenLayers.Layer.prototype.initialize.apply(this, newArguments);
        this.url = url;
        this.params = OpenLayers.Util.extend({}, params);
    },
    destroy: function () {
        this.url = null;
        this.params = null;
        OpenLayers.Layer.prototype.destroy.apply(this, arguments);
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer.HTTPRequest(this.name, this.url, this.params, this.options);
        }
        obj = OpenLayers.Layer.prototype.clone.apply(this, [obj]);
        return obj;
    },
    setUrl: function (newUrl) {
        this.url = newUrl;
    },
    mergeNewParams: function (newParams) {
        this.params = OpenLayers.Util.extend(this.params, newParams);
        return this.redraw();
    },
    redraw: function (force) {
        if (force) {
            return this.mergeNewParams({
                "_olSalt": Math.random()
            });
        } else {
            return OpenLayers.Layer.prototype.redraw.apply(this, []);
        }
    },
    selectUrl: function (paramString, urls) {
        var product = 1;
        for (var i = 0, len = paramString.length; i < len; i++) {
            product *= paramString.charCodeAt(i) * this.URL_HASH_FACTOR;
            product -= Math.floor(product);
        }
        return urls[Math.floor(product * urls.length)];
    },
    getFullRequestString: function (newParams, altUrl) {
        var url = altUrl || this.url;
        var allParams = OpenLayers.Util.extend({}, this.params);
        allParams = OpenLayers.Util.extend(allParams, newParams);
        var paramsString = OpenLayers.Util.getParameterString(allParams);
        if (url instanceof Array) {
            url = this.selectUrl(paramsString, url);
        }
        var urlParams = OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));
        for (var key in allParams) {
            if (key.toUpperCase() in urlParams) {
                delete allParams[key];
            }
        }
        paramsString = OpenLayers.Util.getParameterString(allParams);
        var requestString = url;
        if (paramsString != "") {
            var lastServerChar = url.charAt(url.length - 1);
            if ((lastServerChar == "&") || (lastServerChar == "?")) {
                requestString += paramsString;
            } else {
                if (url.indexOf('?') == -1) {
                    requestString += '?' + paramsString;
                } else {
                    requestString += '&' + paramsString;
                }
            }
        }
        return requestString;
    },
    CLASS_NAME: "OpenLayers.Layer.HTTPRequest"
});
OpenLayers.Layer.Grid = OpenLayers.Class(OpenLayers.Layer.HTTPRequest, {
    tileSize: null,
    grid: null,
    singleTile: false,
    ratio: 1.5,
    buffer: 2,
    numLoadingTiles: 0,
    initialize: function (name, url, params, options) {
        OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this, arguments);
        this.events.addEventType("tileloaded");
        this.grid = [];
    },
    destroy: function () {
        this.clearGrid();
        this.grid = null;
        this.tileSize = null;
        OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this, arguments);
    },
    clearGrid: function () {
        if (this.grid) {
            for (var iRow = 0, len = this.grid.length; iRow < len; iRow++) {
                var row = this.grid[iRow];
                for (var iCol = 0, clen = row.length; iCol < clen; iCol++) {
                    var tile = row[iCol];
                    this.removeTileMonitoringHooks(tile);
                    tile.destroy();
                }
            }
            this.grid = [];
        }
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer.Grid(this.name, this.url, this.params, this.options);
        }
        obj = OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this, [obj]);
        if (this.tileSize != null) {
            obj.tileSize = this.tileSize.clone();
        }
        obj.grid = [];
        return obj;
    },
    moveTo: function (bounds, zoomChanged, dragging) {
        OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this, arguments);
        bounds = bounds || this.map.getExtent();
        if (bounds != null) {
            var forceReTile = !this.grid.length || zoomChanged;
            var tilesBounds = this.getTilesBounds();
            if (this.singleTile) {
                if (forceReTile || (!dragging && !tilesBounds.containsBounds(bounds))) {
                    this.initSingleTile(bounds);
                }
            } else {
                if (forceReTile || !tilesBounds.containsBounds(bounds, true)) {
                    this.initGriddedTiles(bounds);
                } else {
                    this.moveGriddedTiles(bounds);
                }
            }
        }
    },
    setTileSize: function (size) {
        if (this.singleTile) {
            size = this.map.getSize().clone();
            size.h = parseInt(size.h * this.ratio);
            size.w = parseInt(size.w * this.ratio);
        }
        OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this, [size]);
    },
    getGridBounds: function () {
        var msg = "The getGridBounds() function is deprecated. It will be " + "removed in 3.0. Please use getTilesBounds() instead.";
        OpenLayers.Console.warn(msg);
        return this.getTilesBounds();
    },
    getTilesBounds: function () {
        var bounds = null;
        if (this.grid.length) {
            var bottom = this.grid.length - 1;
            var bottomLeftTile = this.grid[bottom][0];
            var right = this.grid[0].length - 1;
            var topRightTile = this.grid[0][right];
            bounds = new OpenLayers.Bounds(bottomLeftTile.bounds.left, bottomLeftTile.bounds.bottom, topRightTile.bounds.right, topRightTile.bounds.top);
        }
        return bounds;
    },
    initSingleTile: function (bounds) {
        var center = bounds.getCenterLonLat();
        var tileWidth = bounds.getWidth() * this.ratio;
        var tileHeight = bounds.getHeight() * this.ratio;
        var tileBounds = new OpenLayers.Bounds(center.lon - (tileWidth / 2), center.lat - (tileHeight / 2), center.lon + (tileWidth / 2), center.lat + (tileHeight / 2));
        var ul = new OpenLayers.LonLat(tileBounds.left, tileBounds.top);
        var px = this.map.getLayerPxFromLonLat(ul);
        if (!this.grid.length) {
            this.grid[0] = [];
        }
        var tile = this.grid[0][0];
        if (!tile) {
            tile = this.addTile(tileBounds, px);
            this.addTileMonitoringHooks(tile);
            tile.draw();
            this.grid[0][0] = tile;
        } else {
            tile.moveTo(tileBounds, px);
        }
        this.removeExcessTiles(1, 1);
    },
    calculateGridLayout: function (bounds, extent, resolution) {
        var tilelon = resolution * this.tileSize.w;
        var tilelat = resolution * this.tileSize.h;
        var offsetlon = bounds.left - extent.left;
        var tilecol = Math.floor(offsetlon / tilelon) - this.buffer;
        var tilecolremain = offsetlon / tilelon - tilecol;
        var tileoffsetx = -tilecolremain * this.tileSize.w;
        var tileoffsetlon = extent.left + tilecol * tilelon;
        var offsetlat = bounds.top - (extent.bottom + tilelat);
        var tilerow = Math.ceil(offsetlat / tilelat) + this.buffer;
        var tilerowremain = tilerow - offsetlat / tilelat;
        var tileoffsety = -tilerowremain * this.tileSize.h;
        var tileoffsetlat = extent.bottom + tilerow * tilelat;
        return {
            tilelon: tilelon,
            tilelat: tilelat,
            tileoffsetlon: tileoffsetlon,
            tileoffsetlat: tileoffsetlat,
            tileoffsetx: tileoffsetx,
            tileoffsety: tileoffsety
        };
    },
    initGriddedTiles: function (bounds) {
        var viewSize = this.map.getSize();
        var minRows = Math.ceil(viewSize.h / this.tileSize.h) + Math.max(1, 2 * this.buffer);
        var minCols = Math.ceil(viewSize.w / this.tileSize.w) + Math.max(1, 2 * this.buffer);
        var extent = this.maxExtent;
        var resolution = this.map.getResolution();
        var tileLayout = this.calculateGridLayout(bounds, extent, resolution);
        var tileoffsetx = Math.round(tileLayout.tileoffsetx);
        var tileoffsety = Math.round(tileLayout.tileoffsety);
        var tileoffsetlon = tileLayout.tileoffsetlon;
        var tileoffsetlat = tileLayout.tileoffsetlat;
        var tilelon = tileLayout.tilelon;
        var tilelat = tileLayout.tilelat;
        this.origin = new OpenLayers.Pixel(tileoffsetx, tileoffsety);
        var startX = tileoffsetx;
        var startLon = tileoffsetlon;
        var rowidx = 0;
        var layerContainerDivLeft = parseInt(this.map.layerContainerDiv.style.left);
        var layerContainerDivTop = parseInt(this.map.layerContainerDiv.style.top);
        do {
            var row = this.grid[rowidx++];
            if (!row) {
                row = [];
                this.grid.push(row);
            }
            tileoffsetlon = startLon;
            tileoffsetx = startX;
            var colidx = 0;
            do {
                var tileBounds = new OpenLayers.Bounds(tileoffsetlon, tileoffsetlat, tileoffsetlon + tilelon, tileoffsetlat + tilelat);
                var x = tileoffsetx;
                x -= layerContainerDivLeft;
                var y = tileoffsety;
                y -= layerContainerDivTop;
                var px = new OpenLayers.Pixel(x, y);
                var tile = row[colidx++];
                if (!tile) {
                    tile = this.addTile(tileBounds, px);
                    this.addTileMonitoringHooks(tile);
                    row.push(tile);
                } else {
                    tile.moveTo(tileBounds, px, false);
                }
                tileoffsetlon += tilelon;
                tileoffsetx += this.tileSize.w;
            } while ((tileoffsetlon <= bounds.right + tilelon * this.buffer) || colidx < minCols);
            tileoffsetlat -= tilelat;
            tileoffsety += this.tileSize.h;
        } while ((tileoffsetlat >= bounds.bottom - tilelat * this.buffer) || rowidx < minRows);
        this.removeExcessTiles(rowidx, colidx);
        this.spiralTileLoad();
    },
    spiralTileLoad: function () {
        var tileQueue = [];
        var directions = ["right", "down", "left", "up"];
        var iRow = 0;
        var iCell = -1;
        var direction = OpenLayers.Util.indexOf(directions, "right");
        var directionsTried = 0;
        while (directionsTried < directions.length) {
            var testRow = iRow;
            var testCell = iCell;
            switch (directions[direction]) {
            case "right":
                testCell++;
                break;
            case "down":
                testRow++;
                break;
            case "left":
                testCell--;
                break;
            case "up":
                testRow--;
                break;
            }
            var tile = null;
            if ((testRow < this.grid.length) && (testRow >= 0) && (testCell < this.grid[0].length) && (testCell >= 0)) {
                tile = this.grid[testRow][testCell];
            }
            if ((tile != null) && (!tile.queued)) {
                tileQueue.unshift(tile);
                tile.queued = true;
                directionsTried = 0;
                iRow = testRow;
                iCell = testCell;
            } else {
                direction = (direction + 1) % 4;
                directionsTried++;
            }
        }
        for (var i = 0, len = tileQueue.length; i < len; i++) {
            var tile = tileQueue[i];
            tile.draw();
            tile.queued = false;
        }
    },
    addTile: function (bounds, position) {},
    addTileMonitoringHooks: function (tile) {
        tile.onLoadStart = function () {
            if (this.numLoadingTiles == 0) {
                this.events.triggerEvent("loadstart");
            }
            this.numLoadingTiles++;
        };
        tile.events.register("loadstart", this, tile.onLoadStart);
        tile.onLoadEnd = function () {
            this.numLoadingTiles--;
            this.events.triggerEvent("tileloaded");
            if (this.numLoadingTiles == 0) {
                this.events.triggerEvent("loadend");
            }
        };
        tile.events.register("loadend", this, tile.onLoadEnd);
        tile.events.register("unload", this, tile.onLoadEnd);
    },
    removeTileMonitoringHooks: function (tile) {
        tile.unload();
        tile.events.un({
            "loadstart": tile.onLoadStart,
            "loadend": tile.onLoadEnd,
            "unload": tile.onLoadEnd,
            scope: this
        });
    },
    moveGriddedTiles: function (bounds) {
        var buffer = this.buffer || 1;
        while (true) {
            var tlLayer = this.grid[0][0].position;
            var tlViewPort = this.map.getViewPortPxFromLayerPx(tlLayer);
            if (tlViewPort.x > -this.tileSize.w * (buffer - 1)) {
                this.shiftColumn(true);
            } else if (tlViewPort.x < -this.tileSize.w * buffer) {
                this.shiftColumn(false);
            } else if (tlViewPort.y > -this.tileSize.h * (buffer - 1)) {
                this.shiftRow(true);
            } else if (tlViewPort.y < -this.tileSize.h * buffer) {
                this.shiftRow(false);
            } else {
                break;
            }
        };
    },
    shiftRow: function (prepend) {
        var modelRowIndex = (prepend) ? 0 : (this.grid.length - 1);
        var grid = this.grid;
        var modelRow = grid[modelRowIndex];
        var resolution = this.map.getResolution();
        var deltaY = (prepend) ? -this.tileSize.h : this.tileSize.h;
        var deltaLat = resolution * -deltaY;
        var row = (prepend) ? grid.pop() : grid.shift();
        for (var i = 0, len = modelRow.length; i < len; i++) {
            var modelTile = modelRow[i];
            var bounds = modelTile.bounds.clone();
            var position = modelTile.position.clone();
            bounds.bottom = bounds.bottom + deltaLat;
            bounds.top = bounds.top + deltaLat;
            position.y = position.y + deltaY;
            row[i].moveTo(bounds, position);
        }
        if (prepend) {
            grid.unshift(row);
        } else {
            grid.push(row);
        }
    },
    shiftColumn: function (prepend) {
        var deltaX = (prepend) ? -this.tileSize.w : this.tileSize.w;
        var resolution = this.map.getResolution();
        var deltaLon = resolution * deltaX;
        for (var i = 0, len = this.grid.length; i < len; i++) {
            var row = this.grid[i];
            var modelTileIndex = (prepend) ? 0 : (row.length - 1);
            var modelTile = row[modelTileIndex];
            var bounds = modelTile.bounds.clone();
            var position = modelTile.position.clone();
            bounds.left = bounds.left + deltaLon;
            bounds.right = bounds.right + deltaLon;
            position.x = position.x + deltaX;
            var tile = prepend ? this.grid[i].pop() : this.grid[i].shift();
            tile.moveTo(bounds, position);
            if (prepend) {
                row.unshift(tile);
            } else {
                row.push(tile);
            }
        }
    },
    removeExcessTiles: function (rows, columns) {
        while (this.grid.length > rows) {
            var row = this.grid.pop();
            for (var i = 0, l = row.length; i < l; i++) {
                var tile = row[i];
                this.removeTileMonitoringHooks(tile);
                tile.destroy();
            }
        }
        while (this.grid[0].length > columns) {
            for (var i = 0, l = this.grid.length; i < l; i++) {
                var row = this.grid[i];
                var tile = row.pop();
                this.removeTileMonitoringHooks(tile);
                tile.destroy();
            }
        }
    },
    onMapResize: function () {
        if (this.singleTile) {
            this.clearGrid();
            this.setTileSize();
        }
    },
    getTileBounds: function (viewPortPx) {
        var maxExtent = this.maxExtent;
        var resolution = this.getResolution();
        var tileMapWidth = resolution * this.tileSize.w;
        var tileMapHeight = resolution * this.tileSize.h;
        var mapPoint = this.getLonLatFromViewPortPx(viewPortPx);
        var tileLeft = maxExtent.left + (tileMapWidth * Math.floor((mapPoint.lon - maxExtent.left) / tileMapWidth));
        var tileBottom = maxExtent.bottom + (tileMapHeight * Math.floor((mapPoint.lat - maxExtent.bottom) / tileMapHeight));
        return new OpenLayers.Bounds(tileLeft, tileBottom, tileLeft + tileMapWidth, tileBottom + tileMapHeight);
    },
    CLASS_NAME: "OpenLayers.Layer.Grid"
});
OpenLayers.Layer.WMS = OpenLayers.Class(OpenLayers.Layer.Grid, {
    DEFAULT_PARAMS: {
        service: "WMS",
        version: "1.1.1",
        request: "GetMap",
        styles: "",
        exceptions: "application/vnd.ogc.se_inimage",
        format: "image/jpeg"
    },
    reproject: false,
    isBaseLayer: true,
    encodeBBOX: false,
    initialize: function (name, url, params, options) {
        var newArguments = [];
        params = OpenLayers.Util.upperCaseObject(params);
        newArguments.push(name, url, params, options);
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
        OpenLayers.Util.applyDefaults(this.params, OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));
        if (this.params.TRANSPARENT && this.params.TRANSPARENT.toString().toLowerCase() == "true") {
            if ((options == null) || (!options.isBaseLayer)) {
                this.isBaseLayer = false;
            }
            if (this.params.FORMAT == "image/jpeg") {
                this.params.FORMAT = OpenLayers.Util.alphaHack() ? "image/gif" : "image/png";
            }
        }
    },
    destroy: function () {
        OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);
    },
    clone: function (obj) {
        if (obj == null) {
            obj = new OpenLayers.Layer.WMS(this.name, this.url, this.params, this.options);
        }
        obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
        return obj;
    },
    getURL: function (bounds) {
        bounds = this.adjustBounds(bounds);
        var imageSize = this.getImageSize();
        var newParams = {
            'BBOX': this.encodeBBOX ? bounds.toBBOX() : bounds.toArray(),
            'WIDTH': imageSize.w,
            'HEIGHT': imageSize.h
        };
        var requestString = this.getFullRequestString(newParams);
        return requestString;
    },
    addTile: function (bounds, position) {
        return new OpenLayers.Tile.Image(this, position, bounds, null, this.tileSize);
    },
    mergeNewParams: function (newParams) {
        var upperParams = OpenLayers.Util.upperCaseObject(newParams);
        var newArguments = [upperParams];
        return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this, newArguments);
    },
    getFullRequestString: function (newParams, altUrl) {
        var projectionCode = this.map.getProjection();
        this.params.SRS = (projectionCode == "none") ? null : projectionCode;
        return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this, arguments);
    },
    CLASS_NAME: "OpenLayers.Layer.WMS"
});
OpenLayers.StyleMap = OpenLayers.Class({
    styles: null,
    extendDefault: true,
    initialize: function (style, options) {
        this.styles = {
            "default": new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]),
            "select": new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"]),
            "temporary": new OpenLayers.Style(OpenLayers.Feature.Vector.style["temporary"])
        };
        if (style instanceof OpenLayers.Style) {
            this.styles["default"] = style;
            this.styles["select"] = style;
            this.styles["temporary"] = style;
        } else if (typeof style == "object") {
            for (var key in style) {
                if (style[key] instanceof OpenLayers.Style) {
                    this.styles[key] = style[key];
                } else if (typeof style[key] == "object") {
                    this.styles[key] = new OpenLayers.Style(style[key]);
                } else {
                    this.styles["default"] = new OpenLayers.Style(style);
                    this.styles["select"] = new OpenLayers.Style(style);
                    this.styles["temporary"] = new OpenLayers.Style(style);
                    break;
                }
            }
        }
        OpenLayers.Util.extend(this, options);
    },
    destroy: function () {
        for (var key in this.styles) {
            this.styles[key].destroy();
        }
        this.styles = null;
    },
    createSymbolizer: function (feature, intent) {
        if (!feature) {
            feature = new OpenLayers.Feature.Vector();
        }
        if (!this.styles[intent]) {
            intent = "default";
        }
        feature.renderIntent = intent;
        var defaultSymbolizer = {};
        if (this.extendDefault && intent != "default") {
            defaultSymbolizer = this.styles["default"].createSymbolizer(feature);
        }
        return OpenLayers.Util.extend(defaultSymbolizer, this.styles[intent].createSymbolizer(feature));
    },
    addUniqueValueRules: function (renderIntent, property, symbolizers, context) {
        var rules = [];
        for (var value in symbolizers) {
            rules.push(new OpenLayers.Rule({
                symbolizer: symbolizers[value],
                context: context,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: property,
                    value: value
                })
            }));
        }
        this.styles[renderIntent].addRules(rules);
    },
    CLASS_NAME: "OpenLayers.StyleMap"
});
OpenLayers.Layer.Vector = OpenLayers.Class(OpenLayers.Layer, {
    EVENT_TYPES: ["beforefeatureadded", "beforefeaturesadded", "featureadded", "featuresadded", "beforefeatureremoved", "featureremoved", "featuresremoved", "beforefeatureselected", "featureselected", "featureunselected", "beforefeaturemodified", "featuremodified", "afterfeaturemodified", "refresh"],
    isBaseLayer: false,
    isFixed: false,
    isVector: true,
    features: null,
    selectedFeatures: null,
    unrenderedFeatures: null,
    reportError: true,
    style: null,
    styleMap: null,
    strategies: null,
    protocol: null,
    renderers: ['SVG', 'VML', 'Canvas'],
    renderer: null,
    rendererOptions: null,
    geometryType: null,
    drawn: false,
    initialize: function (name, options) {
        this.EVENT_TYPES = OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES);
        OpenLayers.Layer.prototype.initialize.apply(this, arguments);
        if (!this.renderer || !this.renderer.supported()) {
            this.assignRenderer();
        }
        if (!this.renderer || !this.renderer.supported()) {
            this.renderer = null;
            this.displayError();
        }
        if (!this.styleMap) {
            this.styleMap = new OpenLayers.StyleMap();
        }
        this.features = [];
        this.selectedFeatures = [];
        this.unrenderedFeatures = {};
        if (this.strategies) {
            for (var i = 0, len = this.strategies.length; i < len; i++) {
                this.strategies[i].setLayer(this);
            }
        }
    },
    destroy: function () {
        if (this.strategies) {
            var strategy, i, len;
            for (i = 0, len = this.strategies.length; i < len; i++) {
                strategy = this.strategies[i];
                if (strategy.autoDestroy) {
                    strategy.destroy();
                }
            }
            this.strategies = null;
        }
        if (this.protocol) {
            if (this.protocol.autoDestroy) {
                this.protocol.destroy();
            }
            this.protocol = null;
        }
        this.destroyFeatures();
        this.features = null;
        this.selectedFeatures = null;
        this.unrenderedFeatures = null;
        if (this.renderer) {
            this.renderer.destroy();
        }
        this.renderer = null;
        this.geometryType = null;
        this.drawn = null;
        OpenLayers.Layer.prototype.destroy.apply(this, arguments);
    },
    refresh: function (obj) {
        if (this.inRange && this.visibility) {
            this.events.triggerEvent("refresh", obj);
        }
    },
    assignRenderer: function () {
        for (var i = 0, len = this.renderers.length; i < this.renderers.length; i++) {
            var rendererClass = OpenLayers.Renderer[this.renderers[i]];
            if (rendererClass && rendererClass.prototype.supported()) {
                this.renderer = new rendererClass(this.div, this.rendererOptions);
                break;
            }
        }
    },
    displayError: function () {
        if (this.reportError) {
            OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported", {
                'renderers': this.renderers.join("\n")
            }));
        }
    },
    setMap: function (map) {
        OpenLayers.Layer.prototype.setMap.apply(this, arguments);
        if (!this.renderer) {
            this.map.removeLayer(this);
        } else {
            this.renderer.map = this.map;
            this.renderer.setSize(this.map.getSize());
        }
        if (this.strategies) {
            var strategy, i, len;
            for (i = 0, len = this.strategies.length; i < len; i++) {
                strategy = this.strategies[i];
                if (strategy.autoActivate) {
                    strategy.activate();
                }
            }
        }
    },
    removeMap: function (map) {
        if (this.strategies) {
            var strategy, i, len;
            for (i = 0, len = this.strategies.length; i < len; i++) {
                strategy = this.strategies[i];
                if (strategy.autoActivate) {
                    strategy.deactivate();
                }
            }
        }
    },
    onMapResize: function () {
        OpenLayers.Layer.prototype.onMapResize.apply(this, arguments);
        this.renderer.setSize(this.map.getSize());
    },
    moveTo: function (bounds, zoomChanged, dragging) {
        OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
        var coordSysUnchanged = true;
        if (!dragging) {
            this.renderer.root.style.visibility = "hidden";
            this.div.style.left = -parseInt(this.map.layerContainerDiv.style.left) + "px";
            this.div.style.top = -parseInt(this.map.layerContainerDiv.style.top) + "px";
            var extent = this.map.getExtent();
            coordSysUnchanged = this.renderer.setExtent(extent, zoomChanged);
            this.renderer.root.style.visibility = "visible";
            if (navigator.userAgent.toLowerCase().indexOf("gecko") != -1) {
                this.div.scrollLeft = this.div.scrollLeft;
            }
            if (!zoomChanged && coordSysUnchanged) {
                for (var i in this.unrenderedFeatures) {
                    var feature = this.unrenderedFeatures[i];
                    this.drawFeature(feature);
                }
            }
        }
        if (!this.drawn || zoomChanged || !coordSysUnchanged) {
            this.drawn = true;
            var feature;
            for (var i = 0, len = this.features.length; i < len; i++) {
                if (i != (this.features.length - 1)) {
                    this.renderer.locked = true;
                } else {
                    this.renderer.locked = false;
                }
                feature = this.features[i];
                this.drawFeature(feature);
            }
        }
    },
    addFeatures: function (features, options) {
        if (!(features instanceof Array)) {
            features = [features];
        }
        var notify = !options || !options.silent;
        if (notify) {
            var event = {
                features: features
            };
            var ret = this.events.triggerEvent("beforefeaturesadded", event);
            if (ret === false) {
                return;
            }
            features = event.features;
        }
        for (var i = 0, len = features.length; i < len; i++) {
            if (i != (features.length - 1)) {
                this.renderer.locked = true;
            } else {
                this.renderer.locked = false;
            }
            var feature = features[i];
            if (this.geometryType && !(feature.geometry instanceof this.geometryType)) {
                var throwStr = OpenLayers.i18n('componentShouldBe', {
                    'geomType': this.geometryType.prototype.CLASS_NAME
                });
                throw throwStr;
            }
            this.features.push(feature);
            feature.layer = this;
            if (!feature.style && this.style) {
                feature.style = OpenLayers.Util.extend({}, this.style);
            }
            if (notify) {
                if (this.events.triggerEvent("beforefeatureadded", {
                    feature: feature
                }) === false) {
                    continue;
                };
                this.preFeatureInsert(feature);
            }
            this.drawFeature(feature);
            if (notify) {
                this.events.triggerEvent("featureadded", {
                    feature: feature
                });
                this.onFeatureInsert(feature);
            }
        }
        if (notify) {
            this.events.triggerEvent("featuresadded", {
                features: features
            });
        }
    },
    removeFeatures: function (features, options) {
        if (!features || features.length === 0) {
            return;
        }
        if (!(features instanceof Array)) {
            features = [features];
        }
        var notify = !options || !options.silent;
        for (var i = features.length - 1; i >= 0; i--) {
            if (i != 0 && features[i - 1].geometry) {
                this.renderer.locked = true;
            } else {
                this.renderer.locked = false;
            }
            var feature = features[i];
            delete this.unrenderedFeatures[feature.id];
            if (notify) {
                this.events.triggerEvent("beforefeatureremoved", {
                    feature: feature
                });
            }
            this.features = OpenLayers.Util.removeItem(this.features, feature);
            feature.layer = null;
            if (feature.geometry) {
                this.renderer.eraseGeometry(feature.geometry);
            }
            if (OpenLayers.Util.indexOf(this.selectedFeatures, feature) != -1) {
                OpenLayers.Util.removeItem(this.selectedFeatures, feature);
            }
            if (notify) {
                this.events.triggerEvent("featureremoved", {
                    feature: feature
                });
            }
        }
        if (notify) {
            this.events.triggerEvent("featuresremoved", {
                features: features
            });
        }
    },
    destroyFeatures: function (features, options) {
        var all = (features == undefined);
        if (all) {
            features = this.features;
        }
        if (features) {
            this.removeFeatures(features, options);
            for (var i = features.length - 1; i >= 0; i--) {
                features[i].destroy();
            }
        }
    },
    drawFeature: function (feature, style) {
        if (!this.drawn) {
            return
        }
        if (typeof style != "object") {
            var renderIntent = typeof style == "string" ? style : feature.renderIntent;
            style = feature.style || this.style;
            if (!style) {
                style = this.styleMap.createSymbolizer(feature, renderIntent);
            }
        }
        if (!this.renderer.drawFeature(feature, style)) {
            this.unrenderedFeatures[feature.id] = feature;
        } else {
            delete this.unrenderedFeatures[feature.id];
        };
    },
    eraseFeatures: function (features) {
        this.renderer.eraseFeatures(features);
    },
    getFeatureFromEvent: function (evt) {
        if (!this.renderer) {
            OpenLayers.Console.error(OpenLayers.i18n("getFeatureError"));
            return null;
        }
        var featureId = this.renderer.getFeatureIdFromEvent(evt);
        return this.getFeatureById(featureId);
    },
    getFeatureById: function (featureId) {
        var feature = null;
        for (var i = 0, len = this.features.length; i < len; ++i) {
            if (this.features[i].id == featureId) {
                feature = this.features[i];
                break;
            }
        }
        return feature;
    },
    onFeatureInsert: function (feature) {},
    preFeatureInsert: function (feature) {},
    getDataExtent: function () {
        var maxExtent = null;
        if (this.features && (this.features.length > 0)) {
            var maxExtent = this.features[0].geometry.getBounds();
            for (var i = 0, len = this.features.length; i < len; i++) {
                maxExtent.extend(this.features[i].geometry.getBounds());
            }
        }
        return maxExtent;
    },
    CLASS_NAME: "OpenLayers.Layer.Vector"
});
OpenLayers.Renderer.SVG = OpenLayers.Class(OpenLayers.Renderer.Elements, {
    xmlns: "http://www.w3.org/2000/svg",
    xlinkns: "http://www.w3.org/1999/xlink",
    MAX_PIXEL: 15000,
    translationParameters: null,
    symbolSize: {},
    initialize: function (containerID) {
        if (!this.supported()) {
            return;
        }
        OpenLayers.Renderer.Elements.prototype.initialize.apply(this, arguments);
        this.translationParameters = {
            x: 0,
            y: 0
        };
    },
    destroy: function () {
        OpenLayers.Renderer.Elements.prototype.destroy.apply(this, arguments);
    },
    supported: function () {
        var svgFeature = "http://www.w3.org/TR/SVG11/feature#";
        return (document.implementation && (document.implementation.hasFeature("org.w3c.svg", "1.0") || document.implementation.hasFeature(svgFeature + "SVG", "1.1") || document.implementation.hasFeature(svgFeature + "BasicStructure", "1.1")));
    },
    inValidRange: function (x, y, xyOnly) {
        var left = x + (xyOnly ? 0 : this.translationParameters.x);
        var top = y + (xyOnly ? 0 : this.translationParameters.y);
        return (left >= -this.MAX_PIXEL && left <= this.MAX_PIXEL && top >= -this.MAX_PIXEL && top <= this.MAX_PIXEL);
    },
    setExtent: function (extent, resolutionChanged) {
        OpenLayers.Renderer.Elements.prototype.setExtent.apply(this, arguments);
        var resolution = this.getResolution();
        var left = -extent.left / resolution;
        var top = extent.top / resolution;
        if (resolutionChanged) {
            this.left = left;
            this.top = top;
            var extentString = "0 0 " + this.size.w + " " + this.size.h;
            this.rendererRoot.setAttributeNS(null, "viewBox", extentString);
            this.translate(0, 0);
            return true;
        } else {
            var inRange = this.translate(left - this.left, top - this.top);
            if (!inRange) {
                this.setExtent(extent, true);
            }
            return inRange;
        }
    },
    translate: function (x, y) {
        if (!this.inValidRange(x, y, true)) {
            return false;
        } else {
            var transformString = "";
            if (x || y) {
                transformString = "translate(" + x + "," + y + ")";
            }
            this.root.setAttributeNS(null, "transform", transformString);
            this.translationParameters = {
                x: x,
                y: y
            };
            return true;
        }
    },
    setSize: function (size) {
        OpenLayers.Renderer.prototype.setSize.apply(this, arguments);
        this.rendererRoot.setAttributeNS(null, "width", this.size.w);
        this.rendererRoot.setAttributeNS(null, "height", this.size.h);
    },
    getNodeType: function (geometry, style) {
        var nodeType = null;
        switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point":
            if (style.externalGraphic) {
                nodeType = "image";
            } else if (this.isComplexSymbol(style.graphicName)) {
                nodeType = "use";
            } else {
                nodeType = "circle";
            }
            break;
        case "OpenLayers.Geometry.Rectangle":
            nodeType = "rect";
            break;
        case "OpenLayers.Geometry.LineString":
            nodeType = "polyline";
            break;
        case "OpenLayers.Geometry.LinearRing":
            nodeType = "polygon";
            break;
        case "OpenLayers.Geometry.Polygon":
        case "OpenLayers.Geometry.Curve":
        case "OpenLayers.Geometry.Surface":
            nodeType = "path";
            break;
        default:
            break;
        }
        return nodeType;
    },
    setStyle: function (node, style, options) {
        style = style || node._style;
        options = options || node._options;
        var r = parseFloat(node.getAttributeNS(null, "r"));
        var widthFactor = 1;
        var pos;
        if (node._geometryClass == "OpenLayers.Geometry.Point" && r) {
            if (style.externalGraphic) {
                pos = this.getPosition(node);
                if (style.graphicWidth && style.graphicHeight) {
                    node.setAttributeNS(null, "preserveAspectRatio", "none");
                }
                var width = style.graphicWidth || style.graphicHeight;
                var height = style.graphicHeight || style.graphicWidth;
                width = width ? width : style.pointRadius * 2;
                height = height ? height : style.pointRadius * 2;
                var xOffset = (style.graphicXOffset != undefined) ? style.graphicXOffset : -(0.5 * width);
                var yOffset = (style.graphicYOffset != undefined) ? style.graphicYOffset : -(0.5 * height);
                var opacity = style.graphicOpacity || style.fillOpacity;
                node.setAttributeNS(null, "x", (pos.x + xOffset).toFixed());
                node.setAttributeNS(null, "y", (pos.y + yOffset).toFixed());
                node.setAttributeNS(null, "width", width);
                node.setAttributeNS(null, "height", height);
                node.setAttributeNS(this.xlinkns, "href", style.externalGraphic);
                node.setAttributeNS(null, "style", "opacity: " + opacity);
            } else if (this.isComplexSymbol(style.graphicName)) {
                var offset = style.pointRadius * 3;
                var size = offset * 2;
                var id = this.importSymbol(style.graphicName);
                var href = "#" + id;
                pos = this.getPosition(node);
                widthFactor = this.symbolSize[id] / size;
                if (node.getAttributeNS(this.xlinkns, "href") != href) {
                    node.setAttributeNS(this.xlinkns, "href", href);
                } else if (size != parseFloat(node.getAttributeNS(null, "width"))) {
                    node.style.visibility = "hidden";
                    this.container.scrollLeft = this.container.scrollLeft;
                }
                node.setAttributeNS(null, "width", size);
                node.setAttributeNS(null, "height", size);
                node.setAttributeNS(null, "x", pos.x - offset);
                node.setAttributeNS(null, "y", pos.y - offset);
                node.style.visibility = "";
            } else {
                node.setAttributeNS(null, "r", style.pointRadius);
            }
            if (typeof style.rotation != "undefined" && pos) {
                var rotation = OpenLayers.String.format("rotate(${0} ${1} ${2})", [style.rotation, pos.x, pos.y]);
                node.setAttributeNS(null, "transform", rotation);
            }
        }
        if (options.isFilled) {
            node.setAttributeNS(null, "fill", style.fillColor);
            node.setAttributeNS(null, "fill-opacity", style.fillOpacity);
        } else {
            node.setAttributeNS(null, "fill", "none");
        }
        if (options.isStroked) {
            node.setAttributeNS(null, "stroke", style.strokeColor);
            node.setAttributeNS(null, "stroke-opacity", style.strokeOpacity);
            node.setAttributeNS(null, "stroke-width", style.strokeWidth * widthFactor);
            node.setAttributeNS(null, "stroke-linecap", style.strokeLinecap);
            node.setAttributeNS(null, "stroke-linejoin", "round");
            node.setAttributeNS(null, "stroke-dasharray", this.dashStyle(style, widthFactor));
        } else {
            node.setAttributeNS(null, "stroke", "none");
        }
        if (style.pointerEvents) {
            node.setAttributeNS(null, "pointer-events", style.pointerEvents);
        }
        if (style.cursor != null) {
            node.setAttributeNS(null, "cursor", style.cursor);
        }
        return node;
    },
    dashStyle: function (style, widthFactor) {
        var w = style.strokeWidth * widthFactor;
        switch (style.strokeDashstyle) {
        case 'solid':
            return 'none';
        case 'dot':
            return [1, 4 * w].join();
        case 'dash':
            return [4 * w, 4 * w].join();
        case 'dashdot':
            return [4 * w, 4 * w, 1, 4 * w].join();
        case 'longdash':
            return [8 * w, 4 * w].join();
        case 'longdashdot':
            return [8 * w, 4 * w, 1, 4 * w].join();
        default:
            return style.strokeDashstyle.replace(/ /g, ",");
        }
    },
    createNode: function (type, id) {
        var node = document.createElementNS(this.xmlns, type);
        if (id) {
            node.setAttributeNS(null, "id", id);
        }
        return node;
    },
    nodeTypeCompare: function (node, type) {
        return (type == node.nodeName);
    },
    createRenderRoot: function () {
        return this.nodeFactory(this.container.id + "_svgRoot", "svg");
    },
    createRoot: function () {
        return this.nodeFactory(this.container.id + "_root", "g");
    },
    createDefs: function () {
        var defs = this.nodeFactory(this.container.id + "_defs", "defs");
        this.rendererRoot.appendChild(defs);
        return defs;
    },
    drawPoint: function (node, geometry) {
        return this.drawCircle(node, geometry, 1);
    },
    drawCircle: function (node, geometry, radius) {
        var resolution = this.getResolution();
        var x = (geometry.x / resolution + this.left);
        var y = (this.top - geometry.y / resolution);
        if (this.inValidRange(x, y)) {
            node.setAttributeNS(null, "cx", x);
            node.setAttributeNS(null, "cy", y);
            node.setAttributeNS(null, "r", radius);
            return node;
        } else {
            return false;
        }
    },
    drawLineString: function (node, geometry) {
        var componentsResult = this.getComponentsString(geometry.components);
        if (componentsResult.path) {
            node.setAttributeNS(null, "points", componentsResult.path);
            return (componentsResult.complete ? node : null);
        } else {
            return false;
        }
    },
    drawLinearRing: function (node, geometry) {
        var componentsResult = this.getComponentsString(geometry.components);
        if (componentsResult.path) {
            node.setAttributeNS(null, "points", componentsResult.path);
            return (componentsResult.complete ? node : null);
        } else {
            return false;
        }
    },
    drawPolygon: function (node, geometry) {
        var d = "";
        var draw = true;
        var complete = true;
        var linearRingResult, path;
        for (var j = 0, len = geometry.components.length; j < len; j++) {
            d += " M";
            linearRingResult = this.getComponentsString(geometry.components[j].components, " ");
            path = linearRingResult.path;
            if (path) {
                d += " " + path;
                complete = linearRingResult.complete && complete;
            } else {
                draw = false;
            }
        }
        d += " z";
        if (draw) {
            node.setAttributeNS(null, "d", d);
            node.setAttributeNS(null, "fill-rule", "evenodd");
            return complete ? node : null;
        } else {
            return false;
        }
    },
    drawRectangle: function (node, geometry) {
        var resolution = this.getResolution();
        var x = (geometry.x / resolution + this.left);
        var y = (this.top - geometry.y / resolution);
        if (this.inValidRange(x, y)) {
            node.setAttributeNS(null, "x", x);
            node.setAttributeNS(null, "y", y);
            node.setAttributeNS(null, "width", geometry.width / resolution);
            node.setAttributeNS(null, "height", geometry.height / resolution);
            return node;
        } else {
            return false;
        }
    },
    drawSurface: function (node, geometry) {
        var d = null;
        var draw = true;
        for (var i = 0, len = geometry.components.length; i < len; i++) {
            if ((i % 3) == 0 && (i / 3) == 0) {
                var component = this.getShortString(geometry.components[i]);
                if (!component) {
                    draw = false;
                }
                d = "M " + component;
            } else if ((i % 3) == 1) {
                var component = this.getShortString(geometry.components[i]);
                if (!component) {
                    draw = false;
                }
                d += " C " + component;
            } else {
                var component = this.getShortString(geometry.components[i]);
                if (!component) {
                    draw = false;
                }
                d += " " + component;
            }
        }
        d += " Z";
        if (draw) {
            node.setAttributeNS(null, "d", d);
            return node;
        } else {
            return false;
        }
    },
    getComponentsString: function (components, separator) {
        var renderCmp = [];
        var complete = true;
        var len = components.length;
        var strings = [];
        var str, component, j;
        for (var i = 0; i < len; i++) {
            component = components[i];
            renderCmp.push(component);
            str = this.getShortString(component);
            if (str) {
                strings.push(str);
            } else {
                if (i > 0) {
                    if (this.getShortString(components[i - 1])) {
                        strings.push(this.clipLine(components[i], components[i - 1]));
                    }
                }
                if (i < len - 1) {
                    if (this.getShortString(components[i + 1])) {
                        strings.push(this.clipLine(components[i], components[i + 1]));
                    }
                }
                complete = false;
            }
        }
        return {
            path: strings.join(separator || ","),
            complete: complete
        };
    },
    clipLine: function (badComponent, goodComponent) {
        if (goodComponent.equals(badComponent)) {
            return "";
        }
        var resolution = this.getResolution();
        var maxX = this.MAX_PIXEL - this.translationParameters.x;
        var maxY = this.MAX_PIXEL - this.translationParameters.y;
        var x1 = goodComponent.x / resolution + this.left;
        var y1 = this.top - goodComponent.y / resolution;
        var x2 = badComponent.x / resolution + this.left;
        var y2 = this.top - badComponent.y / resolution;
        var k;
        if (x2 < -maxX || x2 > maxX) {
            k = (y2 - y1) / (x2 - x1);
            x2 = x2 < 0 ? -maxX : maxX;
            y2 = y1 + (x2 - x1) * k;
        }
        if (y2 < -maxY || y2 > maxY) {
            k = (x2 - x1) / (y2 - y1);
            y2 = y2 < 0 ? -maxY : maxY;
            x2 = x1 + (y2 - y1) * k;
        }
        return x2 + "," + y2;
    },
    getShortString: function (point) {
        var resolution = this.getResolution();
        var x = (point.x / resolution + this.left);
        var y = (this.top - point.y / resolution);
        if (this.inValidRange(x, y)) {
            return x + "," + y;
        } else {
            return false;
        }
    },
    getPosition: function (node) {
        return ({
            x: parseFloat(node.getAttributeNS(null, "cx")),
            y: parseFloat(node.getAttributeNS(null, "cy"))
        });
    },
    importSymbol: function (graphicName) {
        if (!this.defs) {
            this.defs = this.createDefs();
        }
        var id = this.container.id + "-" + graphicName;
        if (document.getElementById(id) != null) {
            return id;
        }
        var symbol = OpenLayers.Renderer.symbol[graphicName];
        if (!symbol) {
            throw new Error(graphicName + ' is not a valid symbol name');
            return;
        }
        var symbolNode = this.nodeFactory(id, "symbol");
        var node = this.nodeFactory(null, "polygon");
        symbolNode.appendChild(node);
        var symbolExtent = new OpenLayers.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0);
        var points = "";
        var x, y;
        for (var i = 0; i < symbol.length; i = i + 2) {
            x = symbol[i];
            y = symbol[i + 1];
            symbolExtent.left = Math.min(symbolExtent.left, x);
            symbolExtent.bottom = Math.min(symbolExtent.bottom, y);
            symbolExtent.right = Math.max(symbolExtent.right, x);
            symbolExtent.top = Math.max(symbolExtent.top, y);
            points += " " + x + "," + y;
        }
        node.setAttributeNS(null, "points", points);
        var width = symbolExtent.getWidth();
        var height = symbolExtent.getHeight();
        var viewBox = [symbolExtent.left - width, symbolExtent.bottom - height, width * 3, height * 3];
        symbolNode.setAttributeNS(null, "viewBox", viewBox.join(" "));
        this.symbolSize[id] = Math.max(width, height) * 3;
        this.defs.appendChild(symbolNode);
        return symbolNode.id;
    },
    CLASS_NAME: "OpenLayers.Renderer.SVG"
});
OpenLayers.Control.PanZoom = OpenLayers.Class(OpenLayers.Control, {
    slideFactor: 50,
    buttons: null,
    position: null,
    initialize: function (options) {
        this.position = new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X, OpenLayers.Control.PanZoom.Y);
        OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },
    destroy: function () {
        OpenLayers.Control.prototype.destroy.apply(this, arguments);
        while (this.buttons.length) {
            var btn = this.buttons.shift();
            btn.map = null;
            OpenLayers.Event.stopObservingElement(btn);
        }
        this.buttons = null;
        this.position = null;
    },
    draw: function (px) {
        OpenLayers.Control.prototype.draw.apply(this, arguments);
        px = this.position;
        this.buttons = [];
        var sz = new OpenLayers.Size(18, 18);
        var centered = new OpenLayers.Pixel(px.x + sz.w / 2, px.y);
        this._addButton("panup", "north-mini.png", centered, sz);
        px.y = centered.y + sz.h;
        this._addButton("panleft", "west-mini.png", px, sz);
        this._addButton("panright", "east-mini.png", px.add(sz.w, 0), sz);
        this._addButton("pandown", "south-mini.png", centered.add(0, sz.h * 2), sz);
        this._addButton("zoomin", "zoom-plus-mini.png", centered.add(0, sz.h * 3 + 5), sz);
        this._addButton("zoomworld", "zoom-world-mini.png", centered.add(0, sz.h * 4 + 5), sz);
        this._addButton("zoomout", "zoom-minus-mini.png", centered.add(0, sz.h * 5 + 5), sz);
        return this.div;
    },
    _addButton: function (id, img, xy, sz) {
        var imgLocation = OpenLayers.Util.getImagesLocation() + img;
        var btn = OpenLayers.Util.createAlphaImageDiv(this.id + "_" + id, xy, sz, imgLocation, "absolute");
        this.div.appendChild(btn);
        OpenLayers.Event.observe(btn, "mousedown", OpenLayers.Function.bindAsEventListener(this.buttonDown, btn));
        OpenLayers.Event.observe(btn, "dblclick", OpenLayers.Function.bindAsEventListener(this.doubleClick, btn));
        OpenLayers.Event.observe(btn, "click", OpenLayers.Function.bindAsEventListener(this.doubleClick, btn));
        btn.action = id;
        btn.map = this.map;
        btn.slideFactor = this.slideFactor;
        this.buttons.push(btn);
        return btn;
    },
    doubleClick: function (evt) {
        OpenLayers.Event.stop(evt);
        return false;
    },
    buttonDown: function (evt) {
        if (!OpenLayers.Event.isLeftClick(evt)) {
            return;
        }
        switch (this.action) {
        case "panup":
            this.map.pan(0, - this.slideFactor);
            break;
        case "pandown":
            this.map.pan(0, this.slideFactor);
            break;
        case "panleft":
            this.map.pan(-this.slideFactor, 0);
            break;
        case "panright":
            this.map.pan(this.slideFactor, 0);
            break;
        case "zoomin":
            this.map.zoomIn();
            break;
        case "zoomout":
            this.map.zoomOut();
            break;
        case "zoomworld":
            this.map.zoomToMaxExtent();
            break;
        }
        OpenLayers.Event.stop(evt);
    },
    CLASS_NAME: "OpenLayers.Control.PanZoom"
});
OpenLayers.Control.PanZoom.X = 4;
OpenLayers.Control.PanZoom.Y = 4;
OpenLayers.Format.WFSCapabilities.v1_1_1 = OpenLayers.Class(OpenLayers.Format.WFSCapabilities.v1_1, {
    initialize: function (options) {
        OpenLayers.Format.WFSCapabilities.v1_1.prototype.initialize.apply(this, [options]);
    },
    CLASS_NAME: "OpenLayers.Format.WFSCapabilities.v1_1_1"
});
OpenLayers.Request = {
    DEFAULT_CONFIG: {
        method: "GET",
        url: window.location.href,
        async: true,
        user: undefined,
        password: undefined,
        params: null,
        proxy: OpenLayers.ProxyHost,
        headers: {},
        data: null,
        callback: function () {},
        success: null,
        failure: null,
        scope: null
    },
    issue: function (config) {
        var defaultConfig = OpenLayers.Util.extend(this.DEFAULT_CONFIG, {
            proxy: OpenLayers.ProxyHost
        });
        config = OpenLayers.Util.applyDefaults(config, defaultConfig);
        var request = new OpenLayers.Request.XMLHttpRequest();
        var url = config.url;
        if (config.params) {
            var paramString = OpenLayers.Util.getParameterString(config.params);
            if (paramString.length > 0) {
                var separator = (url.indexOf('?') > -1) ? '&' : '?';
                url += separator + paramString;
            }
        }
        if (config.proxy && (url.indexOf("http") == 0)) {
            url = config.proxy + encodeURIComponent(url);
        }
        request.open(config.method, url, config.async, config.user, config.password);
        for (var header in config.headers) {
            request.setRequestHeader(header, config.headers[header]);
        }
        var complete = (config.scope) ? OpenLayers.Function.bind(config.callback, config.scope) : config.callback;
        var success;
        if (config.success) {
            success = (config.scope) ? OpenLayers.Function.bind(config.success, config.scope) : config.success;
        }
        var failure;
        if (config.failure) {
            failure = (config.scope) ? OpenLayers.Function.bind(config.failure, config.scope) : config.failure;
        }
        request.onreadystatechange = function () {
            if (request.readyState == OpenLayers.Request.XMLHttpRequest.DONE) {
                complete(request);
                if (success && (!request.status || (request.status >= 200 && request.status < 300))) {
                    success(request);
                }
                if (failure && (request.status && (request.status < 200 || request.status >= 300))) {
                    failure(request);
                }
            }
        };
        request.send(config.data);
        return request;
    },
    GET: function (config) {
        config = OpenLayers.Util.extend(config, {
            method: "GET"
        });
        return OpenLayers.Request.issue(config);
    },
    POST: function (config) {
        config = OpenLayers.Util.extend(config, {
            method: "POST"
        });
        config.headers = config.headers ? config.headers : {};
        if (!("CONTENT-TYPE" in OpenLayers.Util.upperCaseObject(config.headers))) {
            config.headers["Content-Type"] = "application/xml";
        }
        return OpenLayers.Request.issue(config);
    },
    PUT: function (config) {
        config = OpenLayers.Util.extend(config, {
            method: "PUT"
        });
        config.headers = config.headers ? config.headers : {};
        if (!("CONTENT-TYPE" in OpenLayers.Util.upperCaseObject(config.headers))) {
            config.headers["Content-Type"] = "application/xml";
        }
        return OpenLayers.Request.issue(config);
    },
    DELETE: function (config) {
        config = OpenLayers.Util.extend(config, {
            method: "DELETE"
        });
        return OpenLayers.Request.issue(config);
    },
    HEAD: function (config) {
        config = OpenLayers.Util.extend(config, {
            method: "HEAD"
        });
        return OpenLayers.Request.issue(config);
    },
    OPTIONS: function (config) {
        config = OpenLayers.Util.extend(config, {
            method: "OPTIONS"
        });
        return OpenLayers.Request.issue(config);
    }
};
(function () {
    var oXMLHttpRequest = window.XMLHttpRequest;
    var bGecko = !! window.controllers,
        bIE = window.document.all && !window.opera;

    function cXMLHttpRequest() {
        this._object = oXMLHttpRequest ? new oXMLHttpRequest : new window.ActiveXObject('Microsoft.XMLHTTP');
    };
    if (bGecko && oXMLHttpRequest.wrapped) cXMLHttpRequest.wrapped = oXMLHttpRequest.wrapped;
    cXMLHttpRequest.UNSENT = 0;
    cXMLHttpRequest.OPENED = 1;
    cXMLHttpRequest.HEADERS_RECEIVED = 2;
    cXMLHttpRequest.LOADING = 3;
    cXMLHttpRequest.DONE = 4;
    cXMLHttpRequest.prototype.readyState = cXMLHttpRequest.UNSENT;
    cXMLHttpRequest.prototype.responseText = "";
    cXMLHttpRequest.prototype.responseXML = null;
    cXMLHttpRequest.prototype.status = 0;
    cXMLHttpRequest.prototype.statusText = "";
    cXMLHttpRequest.prototype.onreadystatechange = null;
    cXMLHttpRequest.onreadystatechange = null;
    cXMLHttpRequest.onopen = null;
    cXMLHttpRequest.onsend = null;
    cXMLHttpRequest.onabort = null;
    cXMLHttpRequest.prototype.open = function (sMethod, sUrl, bAsync, sUser, sPassword) {
        this._async = bAsync;
        var oRequest = this,
            nState = this.readyState;
        if (bIE) {
            var fOnUnload = function () {
                if (oRequest._object.readyState != cXMLHttpRequest.DONE) fCleanTransport(oRequest);
            };
            if (bAsync) window.attachEvent("onunload", fOnUnload);
        }
        this._object.onreadystatechange = function () {
            if (bGecko && !bAsync) return;
            oRequest.readyState = oRequest._object.readyState;
            fSynchronizeValues(oRequest);
            if (oRequest._aborted) {
                oRequest.readyState = cXMLHttpRequest.UNSENT;
                return;
            }
            if (oRequest.readyState == cXMLHttpRequest.DONE) {
                fCleanTransport(oRequest);
                if (bIE && bAsync) window.detachEvent("onunload", fOnUnload);
            }
            if (nState != oRequest.readyState) fReadyStateChange(oRequest);
            nState = oRequest.readyState;
        };
        if (cXMLHttpRequest.onopen) cXMLHttpRequest.onopen.apply(this, arguments);
        this._object.open(sMethod, sUrl, bAsync, sUser, sPassword);
        if (!bAsync && bGecko) {
            this.readyState = cXMLHttpRequest.OPENED;
            fReadyStateChange(this);
        }
    };
    cXMLHttpRequest.prototype.send = function (vData) {
        if (cXMLHttpRequest.onsend) cXMLHttpRequest.onsend.apply(this, arguments);
        if (vData && vData.nodeType) {
            vData = window.XMLSerializer ? new window.XMLSerializer().serializeToString(vData) : vData.xml;
            if (!this._headers["Content-Type"]) this._object.setRequestHeader("Content-Type", "application/xml");
        }
        this._object.send(vData);
        if (bGecko && !this._async) {
            this.readyState = cXMLHttpRequest.OPENED;
            fSynchronizeValues(this);
            while (this.readyState < cXMLHttpRequest.DONE) {
                this.readyState++;
                fReadyStateChange(this);
                if (this._aborted) return;
            }
        }
    };
    cXMLHttpRequest.prototype.abort = function () {
        if (cXMLHttpRequest.onabort) cXMLHttpRequest.onabort.apply(this, arguments);
        if (this.readyState > cXMLHttpRequest.UNSENT) this._aborted = true;
        this._object.abort();
        fCleanTransport(this);
    };
    cXMLHttpRequest.prototype.getAllResponseHeaders = function () {
        return this._object.getAllResponseHeaders();
    };
    cXMLHttpRequest.prototype.getResponseHeader = function (sName) {
        return this._object.getResponseHeader(sName);
    };
    cXMLHttpRequest.prototype.setRequestHeader = function (sName, sValue) {
        if (!this._headers) this._headers = {};
        this._headers[sName] = sValue;
        return this._object.setRequestHeader(sName, sValue);
    };
    cXMLHttpRequest.prototype.toString = function () {
        return '[' + "object" + ' ' + "XMLHttpRequest" + ']';
    };
    cXMLHttpRequest.toString = function () {
        return '[' + "XMLHttpRequest" + ']';
    };

    function fReadyStateChange(oRequest) {
        if (oRequest.onreadystatechange) oRequest.onreadystatechange.apply(oRequest);
        if (cXMLHttpRequest.onreadystatechange) cXMLHttpRequest.onreadystatechange.apply(oRequest);
    };

    function fGetDocument(oRequest) {
        var oDocument = oRequest.responseXML;
        if (bIE && oDocument && !oDocument.documentElement && oRequest.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)) {
            oDocument = new ActiveXObject('Microsoft.XMLDOM');
            oDocument.loadXML(oRequest.responseText);
        }
        if (oDocument) if ((bIE && oDocument.parseError != 0) || (oDocument.documentElement && oDocument.documentElement.tagName == "parsererror")) return null;
        return oDocument;
    };

    function fSynchronizeValues(oRequest) {
        try {
            oRequest.responseText = oRequest._object.responseText;
        } catch (e) {}
        try {
            oRequest.responseXML = fGetDocument(oRequest._object);
        } catch (e) {}
        try {
            oRequest.status = oRequest._object.status;
        } catch (e) {}
        try {
            oRequest.statusText = oRequest._object.statusText;
        } catch (e) {}
    };

    function fCleanTransport(oRequest) {
        oRequest._object.onreadystatechange = new window.Function;
        delete oRequest._headers;
    };
    if (!window.Function.prototype.apply) {
        window.Function.prototype.apply = function (oRequest, oArguments) {
            if (!oArguments) oArguments = [];
            oRequest.__func = this;
            oRequest.__func(oArguments[0], oArguments[1], oArguments[2], oArguments[3], oArguments[4]);
            delete oRequest.__func;
        };
    };
    OpenLayers.Request.XMLHttpRequest = cXMLHttpRequest;
})();
OpenLayers.Format.WMSCapabilities = OpenLayers.Class(OpenLayers.Format.XML, {
    defaultVersion: "1.1.1",
    version: null,
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
        this.options = options;
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var root = data.documentElement;
        var version = this.version;
        if (!version) {
            version = root.getAttribute("version");
            if (!version) {
                version = this.defaultVersion;
            }
        }
        var constr = OpenLayers.Format.WMSCapabilities["v" + version.replace(/\./g, "_")];
        if (!constr) {
            throw "Can't find a WMS capabilities parser for version " + version;
        }
        var parser = new constr(this.options);
        var capabilities = parser.read(data);
        capabilities.version = version;
        return capabilities;
    },
    CLASS_NAME: "OpenLayers.Format.WMSCapabilities"
});
OpenLayers.Format.WMSCapabilities.v1_1 = OpenLayers.Class(OpenLayers.Format.WMSCapabilities, {
    initialize: function (options) {
        OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
        this.options = options;
    },
    read: function (data) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var capabilities = {};
        var root = data.documentElement;
        this.runChildNodes(capabilities, root);
        return capabilities;
    },
    runChildNodes: function (obj, node) {
        var children = node.childNodes;
        var childNode, processor;
        for (var i = 0; i < children.length; ++i) {
            childNode = children[i];
            if (childNode.nodeType == 1) {
                processor = this["read_cap_" + childNode.nodeName];
                if (processor) {
                    processor.apply(this, [obj, childNode]);
                }
            }
        }
    },
    read_cap_Capability: function (capabilities, node) {
        var capability = {
            layers: []
        };
        this.runChildNodes(capability, node);
        capabilities.capability = capability;
    },
    read_cap_Request: function (obj, node) {
        var request = {};
        this.runChildNodes(request, node);
        obj.request = request;
    },
    read_cap_GetMap: function (request, node) {
        var getmap = {
            formats: []
        };
        this.runChildNodes(getmap, node);
        request.getmap = getmap;
    },
    read_cap_Format: function (obj, node) {
        if (obj.formats) {
            obj.formats.push(this.getChildValue(node));
        }
    },
    read_cap_DCPType: function (obj, node) {
        var children = node.getElementsByTagName("OnlineResource");
        if (children.length > 0) {
            this.read_cap_OnlineResource(obj, children[0]);
        }
    },
    read_cap_Service: function (capabilities, node) {
        var service = {};
        this.runChildNodes(service, node);
        capabilities.service = service;
    },
    read_cap_Layer: function (capability, node, parentLayer) {
        var layer = {
            formats: capability.request.getmap.formats || [],
            styles: []
        };
        if (parentLayer) {
            layer.styles = layer.styles.concat(parentLayer.styles);
            layer.llbbox = parentLayer.llbbox;
            layer.minScale = parentLayer.minScale;
            layer.maxScale = parentLayer.maxScale;
        }
        var children = node.childNodes;
        var childNode, nodeName, processor;
        for (var i = 0; i < children.length; ++i) {
            childNode = children[i];
            nodeName = childNode.nodeName;
            processor = this["read_cap_" + childNode.nodeName];
            if (processor) {
                if (nodeName == "Layer") {
                    processor.apply(this, [capability, childNode, layer]);
                } else {
                    processor.apply(this, [layer, childNode]);
                }
            }
        }
        if (layer.name) {
            var index = layer.name.indexOf(":");
            if (index > 0) {
                layer.prefix = layer.name.substring(0, index);
            }
            capability.layers.push(layer);
        }
    },
    read_cap_ScaleHint: function (layer, node) {
        var min = node.getAttribute("min");
        var max = node.getAttribute("max");
        var rad2 = Math.pow(2, 0.5);
        var ipm = OpenLayers.INCHES_PER_UNIT["m"];
        layer.maxScale = parseFloat(((rad2 * min) * ipm * OpenLayers.DOTS_PER_INCH).toPrecision(13));
        layer.minScale = parseFloat(((rad2 * max) * ipm * OpenLayers.DOTS_PER_INCH).toPrecision(13));
    },
    read_cap_Name: function (obj, node) {
        var name = this.getChildValue(node);
        if (name) {
            obj.name = name;
        }
    },
    read_cap_Title: function (obj, node) {
        var title = this.getChildValue(node);
        if (title) {
            obj.title = title;
        }
    },
    read_cap_Abstract: function (obj, node) {
        var abst = this.getChildValue(node);
        if (abst) {
            obj["abstract"] = abst;
        }
    },
    read_cap_LatLonBoundingBox: function (layer, node) {
        layer.llbbox = [parseFloat(node.getAttribute("minx")), parseFloat(node.getAttribute("miny")), parseFloat(node.getAttribute("maxx")), parseFloat(node.getAttribute("maxy"))];
    },
    read_cap_Style: function (layer, node) {
        var style = {};
        this.runChildNodes(style, node);
        layer.styles.push(style);
    },
    read_cap_LegendURL: function (style, node) {
        var legend = {
            width: node.getAttribute('width'),
            height: node.getAttribute('height')
        };
        var links = node.getElementsByTagName("OnlineResource");
        if (links.length > 0) {
            this.read_cap_OnlineResource(legend, links[0]);
        }
        style.legend = legend;
    },
    read_cap_OnlineResource: function (obj, node) {
        obj.href = this.getAttributeNS(node, "http://www.w3.org/1999/xlink", "href");
    },
    CLASS_NAME: "OpenLayers.Format.WMSCapabilities.v1_1"
});
OpenLayers.Format.WFSDescribeFeatureType.v1_0 = OpenLayers.Class(OpenLayers.Format.XML, {
    VERSION: "1.0",
    namespaces: {
        xsd: "http://www.w3.org/2001/XMLSchema"
    },
    initialize: function (options) {
        OpenLayers.Format.WFSDescribeFeatureType.prototype.initialize.apply(this, [options]);
    },
    read: function (data, options) {
        if (typeof data == "string") {
            data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
        }
        var describefeaturetype = [];
        var root = data.documentElement;
        var sequence = this.getElementsByTagNameNS(root, this.namespaces.xsd, 'sequence');
        if (sequence.length > 0) {
            var elements = this.getElementsByTagNameNS(sequence[0], this.namespaces.xsd, 'element');
            for (var i = 0; i < elements.length; ++i) {
                var element = elements[i];
                var name = element.getAttribute('name');
                var type = element.getAttribute('type');
                describefeaturetype.push({
                    name: name,
                    type: type
                });
            }
        }
        if (options && options.verbose == true) {
            var featureNS = root.getAttribute("targetNamespace");
            return {
                featureNS: featureNS,
                attributes: describefeaturetype
            }
        } else {
            return describefeaturetype;
        }
    },
    CLASS_NAME: "OpenLayers.Format.WFSDescribeFeatureType_1_0"
});
OpenLayers.Format.GML.v2 = OpenLayers.Class(OpenLayers.Format.GML.Base, {
    schemaLocation: "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd",
    initialize: function (options) {
        OpenLayers.Format.GML.Base.prototype.initialize.apply(this, [options]);
    },
    readers: {
        "gml": OpenLayers.Util.applyDefaults({
            "outerBoundaryIs": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                container.outer = obj.components[0];
            },
            "innerBoundaryIs": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                container.inner.push(obj.components[0]);
            },
            "Box": function (node, container) {
                var obj = {};
                this.readChildNodes(node, obj);
                if (!container.components) {
                    container.components = [];
                }
                var min = obj.points[0];
                var max = obj.points[1];
                container.components.push(new OpenLayers.Bounds(min.x, min.y, max.x, max.y));
            }
        }, OpenLayers.Format.GML.Base.prototype.readers["gml"]),
        "feature": OpenLayers.Format.GML.Base.prototype.readers["feature"],
        "wfs": OpenLayers.Format.GML.Base.prototype.readers["wfs"]
    },
    write: function (features) {
        var name;
        if (features instanceof Array) {
            name = "wfs:FeatureCollection";
        } else {
            name = "gml:featureMember";
        }
        var root = this.writeNode(name, features);
        this.setAttributeNS(root, this.namespaces["xsi"], "xsi:schemaLocation", this.schemaLocation);
        return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
    },
    writers: {
        "gml": OpenLayers.Util.applyDefaults({
            "Point": function (geometry) {
                var node = this.createElementNSPlus("gml:Point");
                this.writeNode("coordinates", [geometry], node);
                return node;
            },
            "coordinates": function (points) {
                var numPoints = points.length;
                var parts = new Array(numPoints);
                var point;
                for (var i = 0; i < numPoints; ++i) {
                    point = points[i];
                    if (this.xy) {
                        parts[i] = point.x + "," + point.y;
                    } else {
                        parts[i] = point.y + "," + point.x;
                    }
                    if (point.z != undefined) {
                        parts[i] += "," + point.z;
                    }
                }
                return this.createElementNSPlus("gml:coordinates", {
                    attributes: {
                        decimal: ".",
                        cs: ",",
                        ts: " "
                    },
                    value: (numPoints == 1) ? parts[0] : parts.join(" ")
                });
            },
            "LineString": function (geometry) {
                var node = this.createElementNSPlus("gml:LineString");
                this.writeNode("coordinates", geometry.components, node);
                return node;
            },
            "Polygon": function (geometry) {
                var node = this.createElementNSPlus("gml:Polygon");
                this.writeNode("outerBoundaryIs", geometry.components[0], node);
                for (var i = 1; i < geometry.components.length; ++i) {
                    this.writeNode("innerBoundaryIs", geometry.components[i], node);
                }
                return node;
            },
            "outerBoundaryIs": function (ring) {
                var node = this.createElementNSPlus("gml:outerBoundaryIs");
                this.writeNode("LinearRing", ring, node);
                return node;
            },
            "innerBoundaryIs": function (ring) {
                var node = this.createElementNSPlus("gml:innerBoundaryIs");
                this.writeNode("LinearRing", ring, node);
                return node;
            },
            "LinearRing": function (ring) {
                var node = this.createElementNSPlus("gml:LinearRing");
                this.writeNode("coordinates", ring.components, node);
                return node;
            },
            "Box": function (bounds) {
                var node = this.createElementNSPlus("gml:Box");
                this.writeNode("coordinates", [{
                    x: bounds.left,
                    y: bounds.bottom
                }, {
                    x: bounds.right,
                    y: bounds.top
                }], node);
                if (this.srsName) {
                    node.setAttribute("srsName", this.srsName);
                }
                return node;
            }
        }, OpenLayers.Format.GML.Base.prototype.writers["gml"]),
        "feature": OpenLayers.Format.GML.Base.prototype.writers["feature"],
        "wfs": OpenLayers.Format.GML.Base.prototype.writers["wfs"]
    },
    CLASS_NAME: "OpenLayers.Format.GML.v2"
});
OpenLayers.Renderer.VML = OpenLayers.Class(OpenLayers.Renderer.Elements, {
    xmlns: "urn:schemas-microsoft-com:vml",
    symbolCache: {},
    offset: null,
    initialize: function (containerID) {
        if (!this.supported()) {
            return;
        }
        if (!document.namespaces.olv) {
            document.namespaces.add("olv", this.xmlns);
            var style = document.createStyleSheet();
            style.addRule('olv\\:*', "behavior: url(#default#VML); " + "position: absolute; display: inline-block;");
        }
        OpenLayers.Renderer.Elements.prototype.initialize.apply(this, arguments);
        this.offset = {
            x: 0,
            y: 0
        };
    },
    destroy: function () {
        OpenLayers.Renderer.Elements.prototype.destroy.apply(this, arguments);
    },
    supported: function () {
        return !!(document.namespaces);
    },
    setExtent: function (extent, resolutionChanged) {
        OpenLayers.Renderer.Elements.prototype.setExtent.apply(this, arguments);
        var resolution = this.getResolution();
        var left = extent.left / resolution;
        var top = extent.top / resolution - this.size.h;
        if (resolutionChanged) {
            this.offset = {
                x: left,
                y: top
            };
            left = 0;
            top = 0;
        } else {
            left = left - this.offset.x;
            top = top - this.offset.y;
        }
        var org = left + " " + top;
        this.root.setAttribute("coordorigin", org);
        var size = this.size.w + " " + this.size.h;
        this.root.setAttribute("coordsize", size);
        this.root.style.flip = "y";
        return true;
    },
    setSize: function (size) {
        OpenLayers.Renderer.prototype.setSize.apply(this, arguments);
        this.rendererRoot.style.width = this.size.w + "px";
        this.rendererRoot.style.height = this.size.h + "px";
        this.root.style.width = this.size.w + "px";
        this.root.style.height = this.size.h + "px";
    },
    getNodeType: function (geometry, style) {
        var nodeType = null;
        switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point":
            if (style.externalGraphic) {
                nodeType = "olv:rect";
            } else if (this.isComplexSymbol(style.graphicName)) {
                nodeType = "olv:shape";
            } else {
                nodeType = "olv:oval";
            }
            break;
        case "OpenLayers.Geometry.Rectangle":
            nodeType = "olv:rect";
            break;
        case "OpenLayers.Geometry.LineString":
        case "OpenLayers.Geometry.LinearRing":
        case "OpenLayers.Geometry.Polygon":
        case "OpenLayers.Geometry.Curve":
        case "OpenLayers.Geometry.Surface":
            nodeType = "olv:shape";
            break;
        default:
            break;
        }
        return nodeType;
    },
    setStyle: function (node, style, options, geometry) {
        style = style || node._style;
        options = options || node._options;
        var widthFactor = 1;
        if (node._geometryClass == "OpenLayers.Geometry.Point") {
            if (style.externalGraphic) {
                var width = style.graphicWidth || style.graphicHeight;
                var height = style.graphicHeight || style.graphicWidth;
                width = width ? width : style.pointRadius * 2;
                height = height ? height : style.pointRadius * 2;
                var resolution = this.getResolution();
                var xOffset = (style.graphicXOffset != undefined) ? style.graphicXOffset : -(0.5 * width);
                var yOffset = (style.graphicYOffset != undefined) ? style.graphicYOffset : -(0.5 * height);
                node.style.left = ((geometry.x / resolution - this.offset.x) + xOffset).toFixed();
                node.style.top = ((geometry.y / resolution - this.offset.y) - (yOffset + height)).toFixed();
                node.style.width = width + "px";
                node.style.height = height + "px";
                node.style.flip = "y";
                style.fillColor = "none";
                options.isStroked = false;
            } else if (this.isComplexSymbol(style.graphicName)) {
                var cache = this.importSymbol(style.graphicName);
                var symbolExtent = cache.extent;
                var width = symbolExtent.getWidth();
                var height = symbolExtent.getHeight();
                node.setAttribute("path", cache.path);
                node.setAttribute("coordorigin", symbolExtent.left + "," + symbolExtent.bottom);
                node.setAttribute("coordsize", width + "," + height);
                node.style.left = symbolExtent.left + "px";
                node.style.top = symbolExtent.bottom + "px";
                node.style.width = width + "px";
                node.style.height = height + "px";
                this.drawCircle(node, geometry, style.pointRadius);
                node.style.flip = "y";
            } else {
                this.drawCircle(node, geometry, style.pointRadius);
            }
        }
        if (options.isFilled) {
            node.setAttribute("fillcolor", style.fillColor);
        } else {
            node.setAttribute("filled", "false");
        }
        var fills = node.getElementsByTagName("fill");
        var fill = (fills.length == 0) ? null : fills[0];
        if (!options.isFilled) {
            if (fill) {
                node.removeChild(fill);
            }
        } else {
            if (!fill) {
                fill = this.createNode('olv:fill', node.id + "_fill");
            }
            fill.setAttribute("opacity", style.fillOpacity);
            if (node._geometryClass == "OpenLayers.Geometry.Point" && style.externalGraphic) {
                if (style.graphicOpacity) {
                    fill.setAttribute("opacity", style.graphicOpacity);
                }
                fill.setAttribute("src", style.externalGraphic);
                fill.setAttribute("type", "frame");
                if (!(style.graphicWidth && style.graphicHeight)) {
                    fill.aspect = "atmost";
                }
            }
            if (fill.parentNode != node) {
                node.appendChild(fill);
            }
        }
        if (typeof style.rotation != "undefined") {
            if (style.externalGraphic) {
                this.graphicRotate(node, xOffset, yOffset);
                fill.setAttribute("opacity", 0);
            } else {
                node.style.rotation = style.rotation;
            }
        }
        if (options.isStroked) {
            node.setAttribute("strokecolor", style.strokeColor);
            node.setAttribute("strokeweight", style.strokeWidth + "px");
        } else {
            node.setAttribute("stroked", "false");
        }
        var strokes = node.getElementsByTagName("stroke");
        var stroke = (strokes.length == 0) ? null : strokes[0];
        if (!options.isStroked) {
            if (stroke) {
                node.removeChild(stroke);
            }
        } else {
            if (!stroke) {
                stroke = this.createNode('olv:stroke', node.id + "_stroke");
                node.appendChild(stroke);
            }
            stroke.setAttribute("opacity", style.strokeOpacity);
            stroke.setAttribute("endcap", !style.strokeLinecap || style.strokeLinecap == 'butt' ? 'flat' : style.strokeLinecap);
            stroke.setAttribute("dashstyle", this.dashStyle(style));
        }
        if (style.cursor != "inherit" && style.cursor != null) {
            node.style.cursor = style.cursor;
        }
        return node;
    },
    graphicRotate: function (node, xOffset, yOffset) {
        var style = style || node._style;
        var options = node._options;
        var aspectRatio, size;
        if (!(style.graphicWidth && style.graphicHeight)) {
            var img = new Image();
            img.onreadystatechange = OpenLayers.Function.bind(function () {
                if (img.readyState == "complete" || img.readyState == "interactive") {
                    aspectRatio = img.width / img.height;
                    size = Math.max(style.pointRadius * 2, style.graphicWidth || 0, style.graphicHeight || 0);
                    xOffset = xOffset * aspectRatio;
                    style.graphicWidth = size * aspectRatio;
                    style.graphicHeight = size;
                    this.graphicRotate(node, xOffset, yOffset);
                }
            }, this);
            img.src = style.externalGraphic;
            return;
        } else {
            size = Math.max(style.graphicWidth, style.graphicHeight);
            aspectRatio = style.graphicWidth / style.graphicHeight;
        }
        var width = Math.round(style.graphicWidth || size * aspectRatio);
        var height = Math.round(style.graphicHeight || size);
        node.style.width = width + "px";
        node.style.height = height + "px";
        var image = document.getElementById(node.id + "_image");
        if (!image) {
            image = this.createNode("olv:imagedata", node.id + "_image");
            node.appendChild(image);
        }
        image.style.width = width + "px";
        image.style.height = height + "px";
        image.src = style.externalGraphic;
        image.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(" + "src='', sizingMethod='scale')";
        var rotation = style.rotation * Math.PI / 180;
        var sintheta = Math.sin(rotation);
        var costheta = Math.cos(rotation);
        var filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + costheta + ",M12=" + (-sintheta) + ",M21=" + sintheta + ",M22=" + costheta + ",SizingMethod='auto expand')\n";
        var opacity = style.graphicOpacity || style.fillOpacity;
        if (opacity && opacity != 1) {
            filter += "progid:DXImageTransform.Microsoft.BasicImage(opacity=" + opacity + ")\n";
        }
        node.style.filter = filter;
        var centerPoint = new OpenLayers.Geometry.Point(-xOffset, - yOffset);
        var imgBox = new OpenLayers.Bounds(0, 0, width, height).toGeometry();
        imgBox.rotate(style.rotation, centerPoint);
        var imgBounds = imgBox.getBounds();
        node.style.left = Math.round(parseInt(node.style.left) + imgBounds.left) + "px";
        node.style.top = Math.round(parseInt(node.style.top) - imgBounds.bottom) + "px";
    },
    postDraw: function (node) {
        var fillColor = node._style.fillColor;
        var strokeColor = node._style.strokeColor;
        if (fillColor == "none" && node.getAttribute("fillcolor") != fillColor) {
            node.setAttribute("fillcolor", fillColor);
        }
        if (strokeColor == "none" && node.getAttribute("strokecolor") != strokeColor) {
            node.setAttribute("strokecolor", strokeColor);
        }
    },
    setNodeDimension: function (node, geometry) {
        var bbox = geometry.getBounds();
        if (bbox) {
            var resolution = this.getResolution();
            var scaledBox = new OpenLayers.Bounds((bbox.left / resolution - this.offset.x).toFixed(), (bbox.bottom / resolution - this.offset.y).toFixed(), (bbox.right / resolution - this.offset.x).toFixed(), (bbox.top / resolution - this.offset.y).toFixed());
            node.style.left = scaledBox.left + "px";
            node.style.top = scaledBox.top + "px";
            node.style.width = scaledBox.getWidth() + "px";
            node.style.height = scaledBox.getHeight() + "px";
            node.coordorigin = scaledBox.left + " " + scaledBox.top;
            node.coordsize = scaledBox.getWidth() + " " + scaledBox.getHeight();
        }
    },
    dashStyle: function (style) {
        var dash = style.strokeDashstyle;
        switch (dash) {
        case 'solid':
        case 'dot':
        case 'dash':
        case 'dashdot':
        case 'longdash':
        case 'longdashdot':
            return dash;
        default:
            var parts = dash.split(/[ ,]/);
            if (parts.length == 2) {
                if (1 * parts[0] >= 2 * parts[1]) {
                    return "longdash";
                }
                return (parts[0] == 1 || parts[1] == 1) ? "dot" : "dash";
            } else if (parts.length == 4) {
                return (1 * parts[0] >= 2 * parts[1]) ? "longdashdot" : "dashdot";
            }
            return "solid";
        }
    },
    createNode: function (type, id) {
        var node = document.createElement(type);
        if (id) {
            node.setAttribute('id', id);
        }
        node.setAttribute('unselectable', 'on', 0);
        node.onselectstart = function () {
            return (false);
        };
        return node;
    },
    nodeTypeCompare: function (node, type) {
        var subType = type;
        var splitIndex = subType.indexOf(":");
        if (splitIndex != -1) {
            subType = subType.substr(splitIndex + 1);
        }
        var nodeName = node.nodeName;
        splitIndex = nodeName.indexOf(":");
        if (splitIndex != -1) {
            nodeName = nodeName.substr(splitIndex + 1);
        }
        return (subType == nodeName);
    },
    createRenderRoot: function () {
        return this.nodeFactory(this.container.id + "_vmlRoot", "div");
    },
    createRoot: function () {
        return this.nodeFactory(this.container.id + "_root", "olv:group");
    },
    drawPoint: function (node, geometry) {
        return this.drawCircle(node, geometry, 1);
    },
    drawCircle: function (node, geometry, radius) {
        if (!isNaN(geometry.x) && !isNaN(geometry.y)) {
            var resolution = this.getResolution();
            node.style.left = ((geometry.x / resolution - this.offset.x).toFixed() - radius) + "px";
            node.style.top = ((geometry.y / resolution - this.offset.y).toFixed() - radius) + "px";
            var diameter = radius * 2;
            node.style.width = diameter + "px";
            node.style.height = diameter + "px";
            return node;
        }
        return false;
    },
    drawLineString: function (node, geometry) {
        return this.drawLine(node, geometry, false);
    },
    drawLinearRing: function (node, geometry) {
        return this.drawLine(node, geometry, true);
    },
    drawLine: function (node, geometry, closeLine) {
        this.setNodeDimension(node, geometry);
        var resolution = this.getResolution();
        var numComponents = geometry.components.length;
        var parts = new Array(numComponents);
        var comp, x, y;
        for (var i = 0; i < numComponents; i++) {
            comp = geometry.components[i];
            x = (comp.x / resolution - this.offset.x);
            y = (comp.y / resolution - this.offset.y);
            parts[i] = " " + x.toFixed() + "," + y.toFixed() + " l ";
        }
        var end = (closeLine) ? " x e" : " e";
        node.path = "m" + parts.join("") + end;
        return node;
    },
    drawPolygon: function (node, geometry) {
        this.setNodeDimension(node, geometry);
        var resolution = this.getResolution();
        var path = [];
        var linearRing, i, j, len, ilen, comp, x, y;
        for (j = 0, len = geometry.components.length; j < len; j++) {
            linearRing = geometry.components[j];
            path.push("m");
            for (i = 0, ilen = linearRing.components.length; i < ilen; i++) {
                comp = linearRing.components[i];
                x = comp.x / resolution - this.offset.x;
                y = comp.y / resolution - this.offset.y;
                path.push(" " + x.toFixed() + "," + y.toFixed());
                if (i == 0) {
                    path.push(" l");
                }
            }
            path.push(" x ");
        }
        path.push("e");
        node.path = path.join("");
        return node;
    },
    drawRectangle: function (node, geometry) {
        var resolution = this.getResolution();
        node.style.left = (geometry.x / resolution - this.offset.x) + "px";
        node.style.top = (geometry.y / resolution - this.offset.y) + "px";
        node.style.width = geometry.width / resolution + "px";
        node.style.height = geometry.height / resolution + "px";
        return node;
    },
    drawSurface: function (node, geometry) {
        this.setNodeDimension(node, geometry);
        var resolution = this.getResolution();
        var path = [];
        var comp, x, y;
        for (var i = 0, len = geometry.components.length; i < len; i++) {
            comp = geometry.components[i];
            x = comp.x / resolution - this.offset.x;
            y = comp.y / resolution - this.offset.y;
            if ((i % 3) == 0 && (i / 3) == 0) {
                path.push("m");
            } else if ((i % 3) == 1) {
                path.push(" c");
            }
            path.push(" " + x + "," + y);
        }
        path.push(" x e");
        node.path = path.join("");
        return node;
    },
    importSymbol: function (graphicName) {
        var id = this.container.id + "-" + graphicName;
        var cache = this.symbolCache[id];
        if (cache) {
            return cache;
        }
        var symbol = OpenLayers.Renderer.symbol[graphicName];
        if (!symbol) {
            throw new Error(graphicName + ' is not a valid symbol name');
            return;
        }
        var symbolExtent = new OpenLayers.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0);
        var pathitems = ["m"];
        for (var i = 0; i < symbol.length; i = i + 2) {
            x = symbol[i];
            y = symbol[i + 1];
            symbolExtent.left = Math.min(symbolExtent.left, x);
            symbolExtent.bottom = Math.min(symbolExtent.bottom, y);
            symbolExtent.right = Math.max(symbolExtent.right, x);
            symbolExtent.top = Math.max(symbolExtent.top, y);
            pathitems.push(x);
            pathitems.push(y);
            if (i == 0) {
                pathitems.push("l");
            }
        }
        pathitems.push("x e");
        var path = pathitems.join(" ");
        cache = {
            path: path,
            extent: symbolExtent
        };
        this.symbolCache[id] = cache;
        return cache;
    },
    CLASS_NAME: "OpenLayers.Renderer.VML"
});
OpenLayers.Format.Filter.v1_0_0 = OpenLayers.Class(OpenLayers.Format.Filter.v1, {
    VERSION: "1.0.0",
    schemaLocation: "http://www.opengis.net/ogc/filter/1.0.0/filter.xsd",
    initialize: function (options) {
        OpenLayers.Format.Filter.v1.prototype.initialize.apply(this, [options]);
    },
    readers: {
        "ogc": OpenLayers.Util.applyDefaults({
            "PropertyIsEqualTo": function (node, obj) {
                var filter = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO
                });
                this.readChildNodes(node, filter);
                obj.filters.push(filter);
            }
        }, OpenLayers.Format.Filter.v1.prototype.readers["ogc"]),
        "gml": OpenLayers.Format.GML.v2.prototype.readers["gml"],
        "feature": OpenLayers.Format.GML.v2.prototype.readers["feature"]
    },
    writers: {
        "ogc": OpenLayers.Util.applyDefaults({
            "PropertyIsEqualTo": function (filter) {
                var node = this.createElementNSPlus("ogc:PropertyIsEqualTo");
                this.writeNode("PropertyName", filter, node);
                this.writeNode("Literal", filter.value, node);
                return node;
            },
            "BBOX": function (filter) {
                var node = this.createElementNSPlus("ogc:BBOX");
                this.writeNode("PropertyName", filter, node);
                var box = this.writeNode("gml:Box", filter.value, node);
                if (filter.projection) {
                    box.setAttribute("srsName", filter.projection);
                }
                return node;
            }
        }, OpenLayers.Format.Filter.v1.prototype.writers["ogc"]),
        "gml": OpenLayers.Format.GML.v2.prototype.writers["gml"],
        "feature": OpenLayers.Format.GML.v2.prototype.writers["feature"]
    },
    CLASS_NAME: "OpenLayers.Format.Filter.v1_0_0"
});
OpenLayers.Format.SLD.v1_0_0 = OpenLayers.Class(OpenLayers.Format.SLD.v1, {
    VERSION: "1.0.0",
    schemaLocation: "http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd",
    initialize: function (options) {
        this.readers["ogc"] = OpenLayers.Format.Filter.v1_0_0.prototype.readers["ogc"];
        this.writers["ogc"] = OpenLayers.Format.Filter.v1_0_0.prototype.writers["ogc"];
        this.readOgcExpression = OpenLayers.Format.Filter.v1_0_0.prototype.readOgcExpression;
        this.getFilterType = OpenLayers.Format.Filter.v1_0_0.prototype.getFilterType;
        this.filterMap = OpenLayers.Format.Filter.v1_0_0.prototype.filterMap;
        OpenLayers.Format.SLD.v1.prototype.initialize.apply(this, [options]);
    },
    CLASS_NAME: "OpenLayers.Format.SLD.v1_0_0"
});
OpenLayers.Format.WMSCapabilities.v1_1_0 = OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1, {
    initialize: function (options) {
        OpenLayers.Format.WMSCapabilities.v1_1.prototype.initialize.apply(this, [options]);
    },
    CLASS_NAME: "OpenLayers.Format.WMSCapabilities.v1_1_0"
});
OpenLayers.Format.WMSCapabilities.v1_1_1 = OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1, {
    initialize: function (options) {
        OpenLayers.Format.WMSCapabilities.v1_1.prototype.initialize.apply(this, [options]);
    },
    CLASS_NAME: "OpenLayers.Format.WMSCapabilities.v1_1_1"
});
