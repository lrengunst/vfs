montageDefine("07f2c2d","http",{dependencies:["http","https","url2","q","./reader"],factory:function(e,t){var n=e("http"),i=e("https"),r=e("url2"),a=e("q"),s=e("./reader");t.Server=function(e){var i=Object.create(t.Server.prototype),r=n.createServer(function(n,i){var r=t.ServerRequest(n),s=t.ServerResponse(i),o=a.defer();n.on("end",function(e,t){e?o.reject(e):o.resolve(t)}),a.when(r,function(t){return a.when(e(t,s),function(e){return e?(i.writeHead(e.status,e.headers),(e.onclose||e.onClose)&&a.when(o,e.onclose||e.onClose),a.when(e.body,function(t){var n;if(Array.isArray(t)&&(n=t.length)&&t.every(function(e){return"string"==typeof e}))t.forEach(function(t,r){n-1>r?i.write(t,e.charset):i.end(t,e.charset)});else{if(t){var r,s=t.forEach(function(t){r=a.when(r,function(){return a.when(t,function(t){i.write(t,e.charset)})})});return a.when(s,function(){return a.when(r,function(){i.end()})})}i.end()}})):void 0})}).done()}),s=a.defer();r.on("close",function(e){e?s.reject(e):s.resolve()}),i.stop=function(){return r.close(),o=void 0,s.promise};var o=a.defer();return r.on("listening",function(e){e?o.reject(e):o.resolve(i)}),i.listen=function(){return r.port!==void 0?a.reject(Error("A server cannot be restarted or started on a new port")):(r.listen.apply(r,arguments),o.promise)},i.stopped=s.promise,i.node=r,i.nodeServer=r,i.address=r.address.bind(r),i},Object.defineProperties(t.Server,{port:{get:function(){return this.node.port}},host:{get:function(){return this.node.host}}}),t.ServerRequest=function(e,t){var n=Object.create(e,o);n.version=e.httpVersion.split(".").map(Math.floor),n.method=e.method,n.path=e.url,n._pathInfo=null,n.scriptName="",n.scheme="http";var i=e.connection.address();n.hostname=e.headers.host?e.headers.host.split(":")[0]:i.address,n.port=i.port;var l=n.port===(t?443:80);n.host=n.hostname+(l?"":":"+n.port);var c=e.socket;return n.remoteHost=c.remoteAddress,n.remotePort=c.remotePort,n.url=r.format({protocol:n.scheme,host:e.headers.host,port:n.port===(t?443:80)?null:n.port,path:n.path}),n.body=s(e),n.headers=e.headers,n.node=e,n.nodeRequest=e,n.nodeConnection=e.connection,a.when(n.body,function(e){return n.body=e,n})};var o={pathInfo:{get:function(){return null===this._pathInfo&&(this._pathInfo=decodeURIComponent(r.parse(this.url).pathname)),this._pathInfo},set:function(e){this._pathInfo=e}}};t.ServerResponse=function(e,t){var n=Object.create(e);return n.ssl=t,n.node=e,n.nodeResponse=e,n},t.normalizeRequest=function(e){if("string"==typeof e&&(e={url:e}),e.method=e.method||"GET",e.headers=e.headers||{},e.url){var t=r.parse(e.url);e.ssl="https:"===t.protocol,e.hostname=t.hostname,e.host=t.host,e.port=+t.port,e.path=(t.pathname||"")+(t.search||""),e.auth=t.auth||void 0}if(e.host=e.host||e.headers.host,e.port=e.port||(e.ssl?443:80),e.host&&!e.hostname&&(e.hostname=e.host.split(":")[0]),e.hostname&&e.port&&!e.host){var n=e.ssl?443:80;e.host=e.hostname+(n?"":":"+e.port)}return e.headers.host=e.headers.host||e.host,e.path=e.path||"/",e},t.normalizeResponse=function(e){return void 0!==e?("string"==typeof e&&(e=[e]),e.forEach&&(e={status:200,headers:{},body:e}),e):void 0},t.request=function(e){return a.when(e,function(e){e=t.normalizeRequest(e);var r=a.defer(),s=e.ssl?i:n,o={hostname:e.hostname,port:e.port||(e.ssl?443:80),localAddress:e.localAddress,socketPath:e.socketPath,method:e.method,path:e.path,headers:e.headers,auth:e.auth};void 0!==e.agent&&(o.agent=e.agent);var l=s.request(o,function(n){r.resolve(t.ClientResponse(n,e.charset)),n.on("error",function(e){console.warn(e&&e.stack||e),r.reject(e)})});return l.on("error",function(e){r.reject(e)}),a.when(e.body,function(t){var n,i;return t&&(i=t.forEach(function(t){n=a.when(n,function(){return a.when(t,function(t){l.write(t,e.charset)})})})),a.when(n,function(){return a.when(i,function(){l.end()})})}).done(),r.promise})},t.read=function(e,n){return n=n||function(e){return 200===e.status},a.when(t.request(e),function(e){if(!n(e)){var t=Error("HTTP request failed with code "+e.status);throw t.response=e,t}return a.post(e.body,"read",[])})},t.ClientResponse=function(e,n){var i=Object.create(t.ClientResponse.prototype);return i.status=e.statusCode,i.version=e.httpVersion,i.headers=e.headers,i.node=e,i.nodeResponse=e,i.nodeConnection=e.connection,a.when(s(e,n),function(e){return i.body=e,i})}}});