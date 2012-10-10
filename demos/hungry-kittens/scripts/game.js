/*
Copyright (c) 2011 Batiste Bieler and contributors,
https://github.com/batiste/sprite.js

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* Sprite.js v1.2.1 */

(function(e){"use strict";function g(e,t){return(e%t+t)%t}function y(e,t){return Math.sqrt(e*e+t*t)}function b(e,t,n){var r=y(e,t);return r===0?{x:e,y:t}:n?{x:e/r*n,y:t/r*n}:{x:e/r,y:t/r}}function w(e,t,n,r,i,s){var o=(n-e)*(s-t)-(r-t)*(i-e);return o===0?null:o>0}function E(e,t){var n=t.shift();while(n){if(typeof e[n]!="undefined")return n;n=t.shift()}}function S(){t.tproperty=E(c.body.style,["transform","WebkitTransform","MozTransform","OTransform","msTransform"]),t.animationFrame=E(e,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","oRequestAnimationFrame","msRequestAnimationFrame"]),t.createEventProperty=E(c,["createEvent","createEventObject"]),v=!0}function x(e,t,n,r){return e&&e[t]!==undefined?r==="int"?e[t]|0:e[t]:n}function T(e,t,n,r){var i=c.createElement("div"),s=i.style;return s.top=t+"px",s.left=e+"px",s.width=n+"px",s.height=r+"px",s.color="#fff",s.zIndex=100,s.position="absolute",s.backgroundColor="#000",s.opacity=.7,i}function a(e){return N||(N=new f(e)),N}function k(e){C||(C=c.createElement("textarea"),C.style.height="200px",C.style.width=window.innerWidth-100+"px",c.body.appendChild(C)),C.value=C.value+e,C.scrollTop=C.scrollHeight}function L(){if(!t.debug)return;var e="";for(var n=0;n<arguments.length;n++)e+=arguments[n]+" ";k(e+"\r\n")}var t,n,r,i,s,o,u,a,f,l,c=e.document,h=0,p=0,d=0,v=!1,m=1;r=function A(n){if(this.constructor!==A)return new A(n);v||S(),this.autoPause=x(n,"autoPause",!0),this.main=x(n,"main",function(){});var r=c.createElement("div"),i;return r.style.overflow="hidden",r.style.imageRendering="-webkit-optimize-contrast",r.style.position="relative",r.className="sjs",r.id="sjs"+p,this.id=p,p+=1,i=x(n,"parent",c.body),i.appendChild(r),this.w=x(n,"w",480,"int"),this.h=x(n,"h",320,"int"),this.dom=r,this.dom.style.width=this.w+"px",this.dom.style.height=this.h+"px",this.layers={},this.ticker=null,this.useCanvas=x(n,"useCanvas",e.location.href.indexOf("canvas")!==-1),this.xscale=1,this.yscale=1,this.Layer("default"),t.scenes.push(this),this},r.prototype.constructor=r,r.prototype.Sprite=function(r,i){return i===undefined&&t.error("When you create Sprite from the scene the layer should be specified or false."),new n(this,r,i)},r.prototype.Layer=function(t,n){return new i(this,t,n)},r.prototype.Cycle=function(t){return new u(t)},r.prototype.Input=function(){return this.input=new a(this),this.input},r.prototype.scale=function(n,r){this.xscale=n,this.yscale=r,this.dom.style[t.tproperty+"Origin"]="0 0",this.dom.style[t.tproperty]="scale("+n+","+r+")"},r.prototype.toString=function(){return"Scene("+String(this.id)+")"},r.prototype.reset=function(){var t;this.ticker&&this.ticker.pause();for(t in this.layers)this.layers.hasOwnProperty(t)&&(this.layers[t].dom.parentNode.removeChild(this.layers[t].dom),delete this.layers[t]);while(this.dom.childNodes.length>=1)this.dom.removeChild(this.dom.firstChild);this.layers={},this.Layer("default")},r.prototype.Ticker=function(t,n){return this.ticker&&(this.ticker.pause(),this.ticker.paint=function(){}),this.ticker=new o(this,t,n),this.ticker},r.prototype.loadImages=function(n,r){r||(r=this.main);var i=0,s,o,u,a,f,l,h;for(h=0;h<n.length;h++)t.spriteCache[n[h]]||(i+=1,t.spriteCache[n[h]]={src:n[h],loaded:!1,loading:!1});if(i===0)return r();s=i,o=T(0,0,this.w,this.h),o.style.textAlign="center",o.style.paddingTop=this.h/2-16+"px",o.innerHTML="Loading",this.dom.appendChild(o),l=this,f=!1;var p=function(e){t.spriteCache[e].loading=!0,u=c.createElement("img"),t.spriteCache[e].img=u,u.addEventListener("load",function(){t.spriteCache[e].loaded=!0,i-=1,f===!1&&(i===0?(l.dom.removeChild(o),r()):o.innerHTML="Loading "+((s-i)/s*100|0)+"%")},!1),u.addEventListener("error",function(){f=!0,o.innerHTML="Error loading image "+e},!1),u.src=e};for(a in t.spriteCache)t.spriteCache.hasOwnProperty(a)&&(t.spriteCache[a].loading||p(a))},n=function(t,n,r){this.scene=t,this._dirty={},this.changed=!1,this.y=0,this.x=0,this._x_before=0,this._x_rounded=0,this._y_before=0,this._y_rounded=0,this.xv=0,this.yv=0,this.rv=0,this.type="rectangle",this.mass=1,this.friction=.05,this.xf=0,this.yf=0,this.src=null,this.img=null,this.imgNaturalWidth=null,this.imgNaturalHeight=null,this.w=null,this.h=null,this.xoffset=0,this.yoffset=0,this.dom=null,this.cycle=null,this.xscale=1,this.yscale=1,this.angle=0,this.xTransformOrigin=null,this.yTransformOrigin=null,this.backgroundRepeat=null,this.opacity=1,this.color=!1,this.id=++h,this.layer=null;var i,s,o,u,a,f,l;if(r)if(r.sprites)this.layer=r;else{l=r;for(f in l)l.hasOwnProperty(f)&&(i=l[f],s=this[f],typeof s=="function"?this[f].apply(this,i):s!==undefined&&(u=f.charAt(0),(u==="x"||u==="y")&&f.length>1?o="set"+u.toUpperCase()+f.charAt(1).toUpperCase()+f.slice(2):o="set"+u.toUpperCase()+f.slice(1),this[o]?this[o].apply(this,[i]):this[f]=i))}if(this.layer===undefined||r===undefined)this.layer=t.layers["default"];return this.layer&&!this.layer.useCanvas&&(a=c.createElement("div"),a.style.position="absolute",this.dom=a,this.layer.dom.appendChild(a)),n&&this.loadImg(n),this},n.prototype.constructor=n,n.prototype.setX=function(t){return this.x=t,this._x_rounded=t|0,this.changed=!0,this},n.prototype.setY=function(t){return this.y=t,this._y_rounded=t|0,this.changed=!0,this},n.prototype.setW=function(t){return this.w=t,this._dirty.w=!0,this.changed=!0,this},n.prototype.setH=function(t){return this.h=t,this._dirty.h=!0,this.changed=!0,this},n.prototype.setXOffset=function(t){return this.xoffset=t,this._dirty.xoffset=!0,this.changed=!0,this},n.prototype.setYOffset=function(t){return this.yoffset=t,this._dirty.yoffset=!0,this.changed=!0,this},n.prototype.setAngle=function(t){return this.angle=t,this._dirty.angle=!0,this.changed=!0,this},n.prototype.setColor=function(t){return this.color=t,this._dirty.color=!0,this.changed=!0,this},n.prototype.setOpacity=function(t){return this.opacity=t,this._dirty.opacity=!0,this.changed=!0,this},n.prototype.setXScale=function(t){return this.xscale=t,this._dirty.xscale=!0,this.changed=!0,this},n.prototype.setYScale=function(t){return this.yscale=t,this._dirty.yscale=!0,this.changed=!0,this},n.prototype.transformOrigin=function(t,n){return this.xTransformOrigin=t,this.yTransformOrigin=n,this._dirty.transform=!0,this.changed=!0,this},n.prototype.setBackgroundRepeat=function(t){return this._dirty.backgroundRepeat=!0,this.backgroundRepeat=t,this},n.prototype.rotate=function(e){return this.setAngle(this.angle+e),this},n.prototype.orient=function(t,n){var r=Math.atan2(n,t);this.setAngle(r)},n.prototype.scale=function(e,t){return this.xscale!==e&&this.setXScale(e),t===undefined&&(t=e),this.yscale!==t&&this.setYScale(t),this},n.prototype.move=function(e,t){return this.setX(this.x+e),this.setY(this.y+t),this},n.prototype.position=function(e,t){return this.setX(e),this.setY(t),this},n.prototype.offset=function(e,t){return this.setXOffset(e),this.setYOffset(t),this},n.prototype.size=function(e,t){return this.setW(e),this.setH(t),this},n.prototype.setForce=function(t,n){this.xf=t,this.yf=n},n.prototype.addForce=function(t,n){this.xf+=t,this.yf+=n},n.prototype.applyForce=function(t){t===undefined&&(t=1),this.xv-=this.friction*this.xv*this.mass*t,this.xv+=this.xf/this.mass*t,this.yv-=this.friction*this.yv*this.mass*t,this.yv+=this.yf/this.mass*t},n.prototype.velocity=function(){return y(this.xv,this.yv)},n.prototype.setVelocity=function(e,t){this.xv=e,this.yv=t},n.prototype.addVelocity=function(e,t){this.xv+=e,this.yv+=t},n.prototype.applyVelocity=function(e){return e===undefined&&(e=1),this.xv!==0&&this.setX(this.x+this.xv*e),this.yv!==0&&this.setY(this.y+this.yv*e),this.rv!==0&&this.setAngle(this.angle+this.rv*e),this},n.prototype.reverseVelocity=function(e){return e===undefined&&(e=1),this.xv!==0&&this.setX(this.x-this.xv*e),this.yv!==0&&this.setY(this.y-this.yv*e),this.rv!==0&&this.setAngle(this.angle-this.rv*e),this},n.prototype.applyXVelocity=function(e){e===undefined&&(e=1),this.xv!==0&&this.setX(this.x+this.xv*e)},n.prototype.reverseXVelocity=function(e){e===undefined&&(e=1),this.xv!==0&&this.setX(this.x-this.xv*e)},n.prototype.applyYVelocity=function(e){e===undefined&&(e=1),this.yv!==0&&this.setY(this.y+this.yv*e)},n.prototype.reverseYVelocity=function(e){e===undefined&&(e=1),this.yv!==0&&this.setY(this.y-this.yv*e)},n.prototype.rotateVelocity=function(e){var t=this.xv*Math.cos(e)-this.yv*Math.sin(e);this.yv=this.xv*Math.sin(e)+this.yv*Math.cos(e),this.xv=t},n.prototype.orientVelocity=function(e,t){var n=y(this.xv,this.yv),r;r=b(e,t,n),this.xv=r.x,this.yv=r.y},n.prototype.remove=function(){this.cycle&&this.cycle.removeSprite(this),this.layer&&!this.layer.useCanvas&&(this.layer.dom.removeChild(this.dom),this.dom=null),this.texture&&this.texture.remove(),this.texture=null,this.layer=null,this.img=null},n.prototype.webGLUpdate=function(){return this.texture||(this.texture=new webgl.Texture(this)),this.texture.render(this.x,this.y),this},n.prototype.update=function(){if(this.layer.useWebGL)return this.webGLUpdate();if(this.layer.useCanvas)return this.canvasUpdate();var n=this.dom.style,r;this._x_before!==this._x_rounded&&(n.left=(this.x|0)+"px"),this._y_before!==this._y_rounded&&(n.top=(this.y|0)+"px"),this._x_before=this._x_rounded,this._y_before=this._y_rounded;if(!this.changed)return this;this._dirty.w&&(n.width=(this.w|0)+"px"),this._dirty.h&&(n.height=(this.h|0)+"px");if(this._dirty.xoffset||this._dirty.yoffset)n.backgroundPosition=-(this.xoffset|0)+"px "+ -(this.yoffset|0)+"px";this._dirty.opacity&&(n.opacity=this.opacity),this._dirty.color&&(n.backgroundColor=this.color),this._dirty.transform&&(n[t.tproperty+"Origin"]=this.xTransformOrigin+" "+this.yTransformOrigin),this._dirty.backgroundRepeat&&(n.backgroundRepeat=this.backgroundRepeat);if(this._dirty.xscale||this._dirty.yscale||this._dirty.angle){r="",this.angle!==0&&(r+="rotate("+this.angle+"rad) ");if(this.xscale!==1||this.yscale!==1)r+=" scale("+this.xscale+", "+this.yscale+")";n[t.tproperty]=r}return this.changed=!1,this._dirty={},this},n.prototype.canvasUpdate=function(t){var n,r,i,s,o;t?n=t.ctx:n=this.layer.ctx,n.save(),this.xTransformOrigin===null?(r=this.w/2|0,i=this.h/2|0):(r=this.xTransformOrigin,i=this.yTransformOrigin),n.translate(this.x+r,this.y+i),n.rotate(this.angle),(this.xscale!==1||this.yscale!==1)&&n.scale(this.xscale,this.yscale),n.globalAlpha=this.opacity,n.translate(-r,-i),this.color&&(n.fillStyle=this.color,n.fillRect(0,0,this.w,this.h));if(this.imgLoaded&&this.img)if(this.imgNaturalWidth<this.w||this.imgNaturalHeight<this.h){s=Math.floor(this.w/this.imgNaturalWidth);while(s>0){s-=1,o=Math.floor(this.h/this.imgNaturalHeight);while(o>0)o-=1,n.drawImage(this.img,this.xoffset,this.yoffset,this.imgNaturalWidth,this.imgNaturalHeight,s*this.imgNaturalWidth,o*this.imgNaturalHeight,this.imgNaturalWidth,this.imgNaturalHeight)}}else n.drawImage(this.img,this.xoffset,this.yoffset,this.w,this.h,0,0,this.w,this.h);return n.restore(),this},n.prototype.toString=function(){return"Sprite("+String(this.id)+")"},n.prototype.onload=function(e){this.imgLoaded&&this._callback&&(this._callback=e)},n.prototype.loadImg=function(e,n){function o(r){s=i.img,t.spriteCache[e].loaded=!0,i.imgLoaded=!0,i.layer&&!i.layer.useCanvas&&(i.dom.style.backgroundImage="url("+e+")"),i.imgNaturalWidth=s.width,i.imgNaturalHeight=s.height,(i.w===null||n)&&i.setW(s.width),(i.h===null||n)&&i.setH(s.height),i.onload()}var r,i=this,s;return this.src=e,t.spriteCache[e]?(this.img=t.spriteCache[e].img,r=t.spriteCache[e].loaded):(this.img=c.createElement("img"),t.spriteCache[e]={src:e,img:this.img,loaded:!1,loading:!0},r=!1),r?o():(this.img.addEventListener("load",o,!1),this.img.src=e),this},n.prototype.distance=function(t,n){return typeof t=="number"?Math.sqrt(Math.pow(this.x+this.w/2-t,2)+Math.pow(this.y+this.h/2-n,2)):Math.sqrt(Math.pow(this.x+this.w/2-(t.x+t.w/2),2)+Math.pow(this.y+this.h/2-(t.y+t.h/2),2))},n.prototype.center=function(){return{x:this.x+this.w/2,y:this.y+this.h/2}},n.prototype.explode2=function(t,n,r){r||(r=this.layer),t===undefined&&(n?t=this.h/2:t=this.w/2),t|=0;var i=r.scene.Sprite(this.src,r),s=r.scene.Sprite(this.src,r);return n?(i.size(this.w,t),i.position(this.x,this.y),s.size(this.w,this.h-t),s.position(this.x,this.y+t),s.setYOffset(t)):(i.size(t,this.h),i.position(this.x,this.y),s.size(this.w-t,this.h),s.position(this.x+t,this.y),s.setXOffset(t)),[i,s]},n.prototype.explode4=function(t,n,r){t===undefined&&(t=this.w/2),n===undefined&&(n=this.h/2),t|=0,n|=0,r||(r=this.layer);var i=r.scene.Sprite(this.src,r),s=r.scene.Sprite(this.src,r),o=r.scene.Sprite(this.src,r),u=r.scene.Sprite(this.src,r);return i.size(t,n),i.position(this.x,this.y),s.size(this.w-t,n),s.position(this.x+t,this.y),s.offset(t,0),o.size(this.w-t,this.h-n),o.position(this.x+t,this.y+n),o.offset(t,n),u.size(t,this.h-n),u.position(this.x,this.y+n),u.offset(0,n),[i,s,o,u]},u=function O(e){if(this.constructor!==O)return new O(e);var t,n;this.triplets=e,this.cycleDuration=0,this.changingTicks=[0];for(t=0;n=e[t];t++)this.cycleDuration=this.cycleDuration+n[2],this.changingTicks.push(this.cycleDuration);this.currentTripletIndex=undefined,this.sprites=[],this.repeat=!0,this.tick=0,this.done=!1,this.id=++d},u.prototype.addSprite=function(t){return this.sprites.push(t),t.cycle=this,this},u.prototype.toString=function(){return"Cycle("+String(this.id)+")"},u.prototype.update=function(){var t=this.sprites,n,r;for(n=0;r=t[n];n++)r.update();return this},u.prototype.addSprites=function(t){this.sprites=this.sprites.concat(t);var n,r;for(n=0;r=t[n];n++)r.cycle=this;return this},u.prototype.removeSprite=function(t){var n,r;for(n=0;r=this.sprites[n];n++)t==r&&(r.cycle=null,this.sprites.splice(n,1));return this},u.prototype.next=function(e,t){if(this.tick>this.cycleDuration){if(!this.repeat)return this.done=!0,this;this.tick=0}var n,r,i,s;for(r=0;r<this.changingTicks.length-1;r++)if(this.tick>=this.changingTicks[r]&&this.tick<=this.changingTicks[r+1]){n=r;break}if(n!==undefined&&n!==this.currentTickIndex){for(i=0;s=this.sprites[i];i++)s.setXOffset(this.triplets[r][0]),s.setYOffset(this.triplets[r][1]),t&&s.update();this.currentTripletIndex=n}return e=e||1,this.tick=this.tick+e,this},u.prototype.reset=function(t){var n,r;this.tick=0,this.done=!1;for(n=0;r=this.sprites[n];n++)r.setXOffset(this.triplets[0][0]),r.setYOffset(this.triplets[0][1]),t&&r.update();return this},u.prototype.go=function(t){var n,r;for(n=0;r=this.sprites[n];n++)r.setXOffset(this.triplets[t][0]),r.setYOffset(this.triplets[t][1]);return this},o=function M(e,n,r){if(typeof n=="number"){var i=n;n=r,r={tickDuration:i}}this.scene=e;if(this.constructor!==M)return new M(tickDuration,n);this.tickDuration=x(r,"tickDuration",16),this.useAnimationFrame=x(r,"useAnimationFrame",!1),t.animationFrame||(this.useAnimationFrame=!1),this.paint=n,this.start=(new Date).getTime(),this.now=this.start,this.ticksElapsed=0,this.currentTick=0,this.ticksSinceLastStart=0,this.droppedFrames=0},o.prototype.next=function(){var e=(new Date).getTime();return this.diff=e-this.now,this.now=e,this.lastTicksElapsed=Math.round(this.diff/this.tickDuration),this.droppedFrames+=Math.max(0,this.lastTicksElapsed-1),this.ticksSinceLastStart+=this.lastTicksElapsed,this.currentTick+=this.lastTicksElapsed,this.lastTicksElapsed},o.prototype.run=function(){if(this.paused)return;var n=this,r=this.next();if(r==0){setTimeout(function(){n.run()},this.tickDuration);return}for(var i in this.scene.layers){var s=this.scene.layers[i];s.useCanvas&&s.autoClear&&s.clear()}this.paint(this),this.scene.input&&this.scene.input.next(),this.timeToPaint=(new Date).getTime()-this.now,this.load=(this.timeToPaint/this.tickDuration*100+this.load)/2|0,this.fps=Math.round(1e3/(this.now-(this.lastPaintAt||0))),this.lastPaintAt=this.now;if(this.useAnimationFrame)this.tickDuration=16,e[t.animationFrame](function(){n.run()});else{var o=Math.max(this.tickDuration-this.timeToPaint,6);this.timeout=setTimeout(function(){n.run()},o)}},o.prototype.pause=function(){e.clearTimeout(this.timeout),e[t.animationFrame]=undefined,this.paused=!0},o.prototype.resume=function(){this.start=(new Date).getTime(),this.ticksElapsed=0,this.ticksSinceLastStart=0,this.paused=!1,this.run()};var N=!1;f=function(r){function s(e,t){if(!i.enableCustomEvents)return;if(c.createEvent){var n=c.createEvent("Events");n.initEvent("sjs"+e,!0,!0),n.value=t,i.dom.dispatchEvent(n)}else if(c.createEventObject){var n=c.createEventObject();n.value=t,i.dom.fireEvent("onsjs"+e,n)}}function o(e,t){s(e,t),(e=="space"||e=="enter")&&o("action",t),i.keyboard[e]!==t&&(i.keyboard[e]=t,i.keyboardChange[e]=t)}function u(e,t){(e.keyCode==40||e.keyCode==83)&&o("down",t),(e.keyCode==38||e.keyCode==87)&&o("up",t),(e.keyCode==39||e.keyCode==68)&&o("right",t),(e.keyCode==37||e.keyCode==65)&&o("left",t),e.keyCode==32&&o("space",t),e.keyCode==17&&o("ctrl",t),e.keyCode==13&&o("enter",t),e.keyCode==27&&o("esc",t);if(e.keyCode>=48&&e.keyCode<=90){var n=String.fromCharCode(e.keyCode);o(n.toLowerCase(),t)}}function f(e){i.mouse.click={x:(e.clientX-i.dom.offsetLeft)/r.xscale,y:(e.clientY-i.dom.offsetTop)/r.yscale}}function l(e){i.mousedown=!0,i.mouse.down=!0,i.mousepressed=!0,e.preventDefault()}function h(e){i.mousedown=!1,i.mouse.down=!1,i.mousereleased=!0,i.mouse.click={x:(e.clientX-i.dom.offsetLeft)/r.xscale,y:(e.clientY-i.dom.offsetTop)/r.yscale}}function p(e){i.mouse.position={x:(e.clientX-i.dom.offsetLeft)/r.xscale,y:(e.clientY-i.dom.offsetTop)/r.yscale}}function d(e){return e.touches&&e.touches.length?e=e.touches[0]:e.changedTouches&&e.changedTouches.length&&(e=e.changedTouches[0]),e}r?this.dom=r.dom:this.dom=c.body;var i=this;this.keyboard={},this.mouse={position:{},click:undefined},this.keyboardChange={},this.mousedown=!1,i.mousepressed=!1,this.mousereleased=!1,this.keydown=!1,this.touchMoveSensibility=3,this.enableCustomEvents=!1,this.touchable="ontouchstart"in e,this.next=function(){i.disableFor&&(i.disableFor=i.disableFor-1),i.keyboardChange={},i.mousepressed=!1,i.mouse.click=undefined,i.mousereleased=!1},this.disableFor=0,this.disable=function(e){i.disableFor=e},this.keyPressed=function(e){return i.keyboardChange[e]!==undefined&&i.keyboardChange[e]},this.keyReleased=function(e){return i.keyboardChange[e]!==undefined&&!i.keyboardChange[e]};var a=function(t,n){e.addEventListener(t,n,!1)};this.touchable&&(a("touchstart",function(e){e=d(e),o("space",!0),f(e),i.touchStart={x:e.clientX,y:e.clientY}}),a("touchend",function(e){h(e),i.keyboard={},i.touchStart=null}),a("touchmove",function(e){e.preventDefault(),e=d(e),o("space",!1),p(e);if(i.touchStart){var t=e.clientX-i.touchStart.x,n=e.clientY-i.touchStart.y;n<-i.touchMoveSensibility&&(o("up",!0),o("down",!1)),n>i.touchMoveSensibility&&(o("down",!0),o("up",!1)),t<-i.touchMoveSensibility&&(o("left",!0),o("right",!1)),t>i.touchMoveSensibility&&(o("right",!0),o("left",!1)),i.touchStart.x+=t/10,i.touchStart.y+=n/10}}),a("touchmove",function(e){e=d(e),p(e)})),a("mousedown",l),a("mouseup",h),a("click",f),a("mousemove",p),a("keydown",function(e){i.keydown=!0,u(e,!0)}),a("keyup",function(e){i.keydown=!1,u(e,!1)}),a("keypress",function(e){}),t.debug||a("contextmenu",function(e){e.preventDefault()})},f.prototype.arrows=function(){return this.keyboard.right||this.keyboard.left||this.keyboard.up||this.keyboard.down},e.addEventListener("blur",function(e){for(var n=0;n<t.scenes.length;n++){var r=t.scenes[n];if(!r.autoPause)continue;var i=function(e){N.keyboard={},N.keydown=!1,N.mousedown=!1;if(e.ticker&&!e.ticker.paused){e.ticker.pause();var t=T(0,0,e.w,e.h);t.innerHTML="<h1>Paused</h1><p>Click or press any key to resume.</p>",t.style.textAlign="center",t.style.paddingTop=e.h/2-32+"px";var n=function(r){r.stopPropagation(),r.preventDefault(),e.dom.removeChild(t),c.removeEventListener("click",n,!1),c.removeEventListener("keyup",n,!1),e.ticker.resume()};c.addEventListener("click",n,!1),c.addEventListener("keyup",n,!1),e.dom.appendChild(t)}};i(r)}},!1),i=function _(e,n,r){var i,s,o,u;if(!this||this.constructor!==_)return new _(e,n,r);this.sprites={},this.scene=e,r===undefined&&(r={useCanvas:e.useCanvas,autoClear:!0}),r.useWebGL&&(r.useCanvas=!0),r.autoClear===undefined?this.autoClear=!0:this.autoClear=r.autoClear,r.useCanvas===undefined?this.useCanvas=this.scene.useCanvas:this.useCanvas=r.useCanvas,this.useWebGL=r.useWebGL,this.name=n;if(this.scene.layers[n]!==undefined)return t.debug&&t.warning("A layer named "+n+" already exist."),this.scene.layers[n];this.scene.layers[n]=this,i=c.getElementById(n),i?s=!1:s=!0,this.useCanvas?(i&&i.nodeName.toLowerCase()!=="canvas"&&t.error("Cannot use HTMLElement "+i.nodeName+" with canvas renderer."),s&&(i=c.createElement("canvas"))):s&&(i=c.createElement("div")),s?(o=!1,u=!1):(o=i.height||i.style.height,u=i.width||i.style.width),r.parent?this.parent=r.parent:this.parent=this.scene.dom,this.parent.appendChild(i),i.id=i.id||"sjs"+e.id+"-"+n,r.disableAutoZIndex||(m+=1,i.style.zIndex=String(m)),i.style.backgroundColor=r.color||i.style.backgroundColor,this.h=r.h||o||e.h,this.w=r.w||u||e.w,i.nodeName=="CANVAS"?(i.height=this.h,i.width=this.w):(i.style.height=this.h+"px",i.style.width=this.w+"px"),i.style.position="absolute",i.style.top=i.style.top||"0px",i.style.left=i.style.left||"0px",this.dom=i,this.useCanvas&&(r.useWebGL?this.ctx=webgl.init(i):this.ctx=i.getContext("2d"))},i.prototype.constructor=i,i.prototype.clear=function(){this.useWebGL?this.ctx.clear(this.ctx.COLOR_BUFFER_BIT|this.ctx.DEPTH_BUFFER_BIT):this.ctx.clearRect(0,0,this.dom.width,this.dom.height)},i.prototype.Sprite=function(e,t){return t?t.layer=this:t=this,new n(this.scene,e,t)},i.prototype.remove=function(){this.parent.removeChild(this.dom),delete this.scene.layers[this.name]},i.prototype.addSprite=function(t){var n=Math.random()*11;return this.sprites[n]=t,n},i.prototype.setColor=function(t){this.dom.style.backgroundColor=t},i.prototype.onTop=function(t){m+=1,this.dom.style.zIndex=String(m)},l=function D(e){if(this.constructor!==D)return new D(e);this.list=e||[],this.length=this.list.length,this.index=-1},l.prototype.add=function(t){t.length?this.list.push.apply(this.list,t):this.list.push(t),this.length=this.list.length},l.prototype.remove=function(t){for(var n=0,r;r=this.list[n];n++)if(r==t)return this.list.splice(n,1),this.index>-1&&(this.index=this.index-1),this.length=this.list.length,!0},l.prototype.iterate=function(){return this.index+=1,this.index>=this.list.length?(this.index=-1,!1):this.list[this.index]};var C=null,t={spriteCache:{},debug:!1,Cycle:u,Input:a,Scene:r,SpriteList:l,List:l,Sprite:n,overlay:T,scenes:[],error:function(t){L("Error: "+t)},warning:function(t){L("Warning: "+t)},log:L,createEvent:null,math:{hypo:y,mod:g,normalVector:b,lineSide:w}};e.sjs=t})(this)

/* Hungry Kittens
Author: Luz Caballero (@gerbille)*/

var Game = function() {	
	var cats = {};
	var me, socket;

	// creates a scene using sprite.js
	var container = document.getElementById('container');
	var SCENE_WIDTH = 500;
	var SCENE_HEIGHT = 490;
	var scene = sjs.Scene({ parent:container, w: SCENE_WIDTH, h: SCENE_HEIGHT, autoPause: false });
	var input = scene.Input();
	var ticker;

	// plays meow sound, if this cat meows also broadcasts to server
	//**mike: rewrite this to not create so many dom nodes
	var meow = function (broadcast) {
		var a = document.createElement("audio");
		a.src = "http://media.shinydemos.com/hungry-kittens/meow" + (Math.round(Math.random()*10) % 5) + ".wav";
		a.addEventListener("ended", function () { a.parentNode.removeChild(a); }, false);
		document.body.appendChild(a);
		a.play();
		if (broadcast) {
			socket.send(JSON.stringify({ type: "meow", data: me.catId }));
		}
	};

  // create Cat as a subclass of Sprite
	var Cat = function (scene, data) {
		var w = 32; // side of the cat's sprite frame, in px
		this.catId = data.id;
		this.name = escapeString(data.name);
		this.race = this.catId % 4; // assigning one of four races in the sprite sheet (we're an equal opportunity app)
		this.isJumping = false;
		this.jumpSpeed = 15; // initial jumping speed
		this.ySpeed = 0;
		this.frame = 0;
		this.looking = "left";

		//Sprite by WidgetWorx @ http://www.widgetworx.com/widgetworx/portfolio/spritelib.html
		sjs.Sprite.call(this, scene, "../images/sprite.gif", {
			size: [w, w],
			x: data.x,
			y: 0,
			xoffset: this.race * 3 * w,
			yoffset: 5 * w,
			layer: scene.layers["default"]
		});

		// adding a tag with the kitten's name
		var tag = document.createElement("span");
		tag.className = "nametag";
		tag.innerHTML = this.name;
		this.dom.appendChild(tag);
	};

	Cat.prototype = Object.create(sjs.Sprite.prototype, {
		turnHead: {
			value: function (direction) {
				if (direction == "left") {
					this.lookLeft();
				} else if (direction == "right") {
					this.lookRight();	
				}
			}
		},

		lookLeft: {
			value: function () {
				this.looking = "left";
				this.setYOffset(5*this.w);
			}
		},

		lookRight: {
			value: function () {
				this.looking = "right";
				this.setYOffset(6*this.w);
			}
		},

		walk: {
			value: function () {
				this.frame = ++this.frame % 3;
				this.setXOffset((this.frame + this.race * 3) * this.w);
			}
		},

		jump: {
			value: function() {
				if (!this.isJumping) {
					this.isJumping = true;
					this.ySpeed = this.jumpSpeed;
				}
			}
		},

		move: {
			value: function (x, y, boundingX) {
				sjs.Sprite.prototype.move.call(this, x, y);
				if (this.x > boundingX) {
					this.setX(-this.w);
				}	
				if (this.x < -this.w) {
					this.setX(boundingX);
				}
			return this;
		}},

		update: {
			value: function () {
				if (this.isJumping) {
					this.setY(this.y - this.ySpeed);
					this.ySpeed--;
					
					if (this.ySpeed < -this.jumpSpeed){
						this.isJumping = false;
					}
				}
				
			return sjs.Sprite.prototype.update.call(this);
			}
		}
	});

	var sendMove = function () {
		socket.send(JSON.stringify({
			type: "move",
			data: {
				id: me.catId,
				x: me.x,
				y: me.y,
				looking: me.looking
			}
		}));
	};

	// update the cats' positions
	var paint = function() {
		//handle user input
		var x = 0, y = 0, step = 5;
		var kb = input.keyboard;
		var left = kb.left;
		var right = kb.right;
		
		if (left) {
			me.walk();
			me.lookLeft();
			x -= step;
		}
		
		if (right) {
			me.walk();
			me.lookRight();
			x += step;
		}
		
		if (kb.up) {
			me.jump();
		}
		
		//undocumented warp speed!
		if (left && kb.f) {
			me.walk();
			me.lookLeft();
			x -= 30;
		}
		
		if (right && kb.f) {
			me.walk();
			me.lookRight();
			x += 30;
		}
		
		if (input.keyReleased("space") || input.keyReleased("down")) {
			meow(true);
		}

		// update cats' positions
		for (var id in cats) {
			var cat = cats[id];
			// if the cat has left the game, skip it
			if (!cat){
				continue;
			}
			// update this cat
			if(cat == me && (x || y || cat.isJumping)) {
				me.move(x, y, SCENE_HEIGHT).update();
				sendMove();
			} else {
				//update the other cats
				cat.update();
			}
		}
	};

	// start game
	var start = function() {
		//
		var defaultName = [
				"Agatha", "Cyrus", "Oswald", "Roscoe", "Holden", "Jasper", 
				"Wren", "Clementine", "Florence", "Reginald"
		][Math.floor(Math.random() * 10)];
		
		var name = prompt("Please name your kitten", defaultName) || defaultName;
		//connect to server
		socket = new WebSocket('ws://' + location.host + '/?name=' + name.slice(0,10));

		var handlers = {
			// server sends data about peers in the room when connection is established
			"connected": function (data) {
				//add a kitten to the scene for each peer
				for (var id in data.cats) {
					cats[data.cats[id].id] = new Cat(scene, data.cats[id]);
				}
        
				// new peer gets id assigned by the server, and appears in random position in the scene
				me = cats[data.id];
				me.position(Math.round(Math.random()*SCENE_WIDTH), SCENE_HEIGHT - me.h);
				sendMove();
         
				document.getElementById("room").innerHTML = data.roomId + 1;
			},
      
			// if a new peer connects, the server broadcasts the new cat
			"new-cat": function(cat) {
				if (cat.id != me.catId){
					cats[cat.id] = new Cat(scene, cat);
				}
			},
      
			// move all the cats! \o/
			"moved": function(data) {
				for (var id in cats) {
					var cat = cats[id];
					if (cat.catId != me.catId) {
						cat.setX(+data[cat.catId].x);
						cat.setY(+data[cat.catId].y);
						cat.turnHead(data[cat.catId].looking);
					}
				}
			},
      
			// used by alternative mechanism used to remove cats b/c Opera has problems with "unload" events on window closing
			"ping": function () {
				socket.send(JSON.stringify({ type: "pong", data: me.catId }));
			},

			// when a peer closes the window, remove its cat
			"unload": function (id) {
				cats[id].remove();
				delete cats[id];
			},

			// echo peers' meows
			"meow": function (id) {
				if (id != me.catId){
					meow();
				}
			}
		};

		/* handle messages:
		{ type: "unload", data: cat.id } -> remove a cat, it provides the cat's id
		{ type: "new-cat", data: cat } -> add a new cat, it gives you the cat
		{ type: "moved", data: rooms[cat.roomId] } -> move the cats, gives you the whole room where the cats are
		{ type: "meow", data: id} -> echo meow, provides id of the meowing cat
		*/
		socket.onmessage = function (e) {
			var o;
			try { o = JSON.parse(e.data); } catch (ex) { return; }
			if (!(o.type in handlers)){
				return;
			} else {
			handlers[o.type](o.data);
		  }
		};
		
		//**mike: unused...
		socket.onclose = function () {};
    
		// when the page closes, send socket.close to server to remove cat tied to this page
		window.addEventListener("unload", function () {
			socket.close();
		}, false);

    // use sprite.js ticker to animate the scene: call paint in each tick
		ticker = scene.Ticker(paint, { useAnimationFrame: true });
		// start the ticker
		ticker.run();
	};

	// Public API
	return {
		start: start
	};
};

function escapeString(str) {
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
		.replace(/\//g, "&#x2F;");
}

function externalHack() {
	//super gross, but only temporary*
	document.querySelector('.sd-title p a').href = "http://shinydemos.com";
	
	var f = document.querySelectorAll('.sd-tags a');
	[].forEach.call(f, (function(elm){
		var o = elm.href.split('/');
		elm.href="http://shinydemos.com/"+o[o.length-2]+"/";
	}))
	//* hopefully
}

window.onload = function () {
	new Game().start();
	
	externalHack();
};