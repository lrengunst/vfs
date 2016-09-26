montageDefine("07f2c2d","http-apps/status",{dependencies:["./negotiate","./html"],factory:function(e,t){var n=e("./negotiate"),i=e("./html");t.statusCodes={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Request Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",507:"Insufficient Storage"},t.statusMessages={};for(var r in t.statusCodes)t.statusMessages[t.statusCodes[r]]=+r;t.statusWithNoEntityBody=function(e){return e>=100&&199>=e||204==e||304==e},t.appForStatus=function(e){return function(n){return t.responseForStatus(n,e,n.method+" "+n.path)}},t.responseForStatus=function(e,i,r){if(void 0===t.statusCodes[i])throw"Unknown status code";var a=t.statusCodes[i];if(t.statusWithNoEntityBody(i))return{status:i,headers:{}};var s={};s["text/plain"]=t.textResponseForStatus,e.handleHtmlFragmentResponse&&(s["text/html"]=t.htmlResponseForStatus);var o=n.negotiate(e,s)||t.textResponseForStatus;return o(e,i,a,r)},t.textResponseForStatus=function(e,t,n,i){var r=n+"\n";i&&(r+=i+"\n");var a=r.length;return{status:t,statusMessage:n,headers:{"content-length":a},body:[r]}},t.htmlResponseForStatus=function(e,t,n,r){return{status:t,statusMessage:n,headers:{},htmlTitle:n,htmlFragment:{forEach:function(e){e("<h1>"+i.escapeHtml(n)+"</h1>\n"),e("<p>Status: "+t+"</p>\n"),r&&e("<pre>"+i.escapeHtml(r)+"</pre>\n")}}}},t.badRequest=t.appForStatus(400),t.notFound=t.appForStatus(404),t.methodNotAllowed=t.appForStatus(405),t.noLanguage=t.notAcceptable=t.appForStatus(406)}});