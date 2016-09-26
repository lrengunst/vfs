var Montage=require("../../core/core").Montage,FlowBezierSpline=exports.FlowBezierSpline=Montage.specialize({constructor:{value:function FlowBezierSpline(){this._knots=[],this._densities=[]}},knots:{get:function(){return this._knots},set:function(e){this._knots=e}},previousHandlers:{get:function(){return this._previousHandlers||(this._previousHandlers=[]),this._previousHandlers},set:function(e){this._previousHandlers=e}},nextHandlers:{get:function(){return this._nextHandlers||(this._nextHandlers=[]),this._nextHandlers},set:function(e){this._nextHandlers=e}},densities:{get:function(){return this._densities},set:function(e){this._densities=e,this._densitiesLength=this._densities.length,this._maxTime=null}},_parameters:{value:{}},parameters:{get:function(){return this._parameters||(this._parameters={}),this._parameters},set:function(e){this._parameters=e,this._parametersLength=this._parameters.length}},_maxTime:{enumerable:!1,value:null},computeMaxTime:{value:function(){return this._computeDensitySummation(),this._maxTime=this._densitySummation.length?this._densitySummation[this._densitySummation.length-1]:0,this._maxTime}},_densitySummation:{enumerable:!1,value:null},_computeDensitySummation:{enumerable:!1,value:function(){var e,t=this.densities,n=t.length-1,i=0;for(this._densitySummation=[],e=0;n>e;e++)i+=(t[e]+t[e+1])/2,this._densitySummation[e]=i;this._maxTime=null}},_convertSplineTimeToBezierIndexTime:{enumerable:!1,value:function(e){if(0>e)return null;if(null===this._maxTime&&this.computeMaxTime(),e>=this._maxTime)return null;for(var t,n,i,r,a,s=this._densitySummation,o=s.length,l=o-1,c=o>>1;c;)l-c>=0&&s[l-c]>e?l-=c:c>>=1;return t=e-(l?s[l-1]:0),i=this._densities[l],r=this._densities[l+1],a=i-r,n=-1e-10>a||a>1e-10?(i-Math.sqrt(i*i+2*(r-i)*t))/a:t/i,[l,n]}},getPositionAtIndexTime:{value:function(e,t){var n=e[0],i=e[1],r=this._knots[n],a=this._nextHandlers[n],s=this._previousHandlers[n+1],o=this._knots[n+1],l=1-i,c=l*l*l,u=3*l*l*i,h=3*l*i*i,d=i*i*i;return t?[t.x.numerator*(r[0]*c+a[0]*u+s[0]*h+o[0]*d)/t.x.denominator,t.y.numerator*(r[1]*c+a[1]*u+s[1]*h+o[1]*d)/t.y.denominator,t.z.numerator*(r[2]*c+a[2]*u+s[2]*h+o[2]*d)/t.z.denominator]:[r[0]*c+a[0]*u+s[0]*h+o[0]*d,r[1]*c+a[1]*u+s[1]*h+o[1]*d,r[2]*c+a[2]*u+s[2]*h+o[2]*d]}},getRotationAtIndexTime:{value:function(e){var t,n,i,r=e[0],a=e[1],s=1-a,o=this._parameters;return t=o.rotateX!==void 0?o.rotateX.data[r]*s+o.rotateX.data[r+1]*a:0,n=o.rotateY!==void 0?o.rotateY.data[r]*s+o.rotateY.data[r+1]*a:0,i=o.rotateZ!==void 0?o.rotateZ.data[r]*s+o.rotateZ.data[r+1]*a:0,[t,n,i]}},getStyleAtIndexTime:{value:function(e){var t,n,i,r,a,s,o=e[0],l=e[1],c=this._parameters,u=1-l,h="";for(i=Object.keys(c),r=i.length,t=0;r>t;t++)n=i[t],a=c[n],s=a.data,"rotateX"!==n&&"rotateY"!==n&&"rotateZ"!==n&&s[o]!==void 0&&s[o+1]!==void 0&&(h+=n+":"+1e-5*(1e5*(s[o]*u+s[o+1]*l)>>0)+a.units+";");return h}},transformVectorArray:{value:function(e,t){var n,i,r=e.length,a=[];for(i=0;r>i;i++)n=e[i],n&&(a[i]=[n[0]*t[0]+n[1]*t[4]+n[2]*t[8]+t[12],n[0]*t[1]+n[1]*t[5]+n[2]*t[9]+t[13],n[0]*t[2]+n[1]*t[6]+n[2]*t[10]+t[14]]);return a}},transform:{value:function(e){var t=new FlowBezierSpline;return t._densities=this._densities,t._densitySummation=this._densitySummation,t._knots=this.transformVectorArray(this.knots,e),t._previousHandlers=this.transformVectorArray(this.previousHandlers,e),t._nextHandlers=this.transformVectorArray(this.nextHandlers,e),t}},deCasteljau:{value:function(e,t,n,i,r){var a=1-r,s=a*e[0]+r*t[0],o=a*t[0]+r*n[0],l=a*n[0]+r*i[0],c=a*s+r*o,u=a*o+r*l,h=a*c+r*u,d=a*e[1]+r*t[1],p=a*t[1]+r*n[1],g=a*n[1]+r*i[1],m=a*d+r*p,v=a*p+r*g,f=a*m+r*v,_=a*e[2]+r*t[2],L=a*t[2]+r*n[2],b=a*n[2]+r*i[2],y=a*_+r*L,C=a*L+r*b,w=a*y+r*C;return[[e,[s,d,_],[c,m,y],[h,f,w]],[[h,f,w],[u,v,C],[l,g,b],i]]}},cubic:{enumerable:!1,value:function(e,t,n,i,r){return((e*r+t)*r+n)*r+i}},cubeRoot:{enumerable:!1,value:function(e){return e>0?Math.pow(e,1/3):-Math.pow(-e,1/3)}},cubicRealRoots:{enumerable:!1,value:function(e,t,n,i){var r=1e-10,a=Math;if(-r>e||e>r){var s=1/e,o=t*s,l=n*s,c=(3*l-o*o)*(1/9),u=(4.5*o*l-13.5*i*s-o*o*o)*(1/27),h=c*c*c+u*u;if(h>r){var d=a.sqrt(h);return[this.cubeRoot(u+d)+this.cubeRoot(u-d)+o*(-1/3)]}if(h>-r){if(-r>u||u>r){var p=this.cubeRoot(u),g=2*p+o*(-1/3),m=o*(-1/3)-p;return m>g?[g,m]:[m,g]}return[o*(-1/3)]}var v=a.acos(u/a.sqrt(-c*c*c))*(1/3),f=a.sqrt(-c),_=1.7320508075688772*f*a.sin(v),L=o*(-1/3);return f*=a.cos(v),[L-f-_,L-f+_,L+2*f]}if(-r>t||t>r){var b=n*n-4*t*i;return b>=0?(b=a.sqrt(b),[(-n-b)/(2*t),(b-n)/(2*t)]):[]}return-r>n||n>r?[-i/n]:[]}},_halfPI:{enumerable:!1,value:.5*Math.PI},reflectionMatrix:{enumerable:!1,value:function(e,t,n){var i=Math,r=this._halfPI-i.atan2(t,e),a=i.sin(r),s=i.cos(r),o=this._halfPI-i.atan2(n,e*a+t*s),l=i.sin(o);return[l*a,s*l,i.cos(o)]}},reflectedY:{enumerable:!1,value:function(e,t,n,i){return e*i[0]+t*i[1]+n*i[2]}},getScaledKnots:{value:function(e){var t,n=[];for(t=0;this._knots.length>t;t++)this._knots[t]&&(n[t]=[e.x.numerator*this._knots[t][0]/e.x.denominator,e.y.numerator*this._knots[t][1]/e.y.denominator,e.z.numerator*this._knots[t][2]/e.z.denominator]);return n}},getScaledPreviousHandlers:{value:function(e){var t,n=[];for(t=0;this._previousHandlers.length>t;t++)this._previousHandlers[t]&&(n[t]=[e.x.numerator*this._previousHandlers[t][0]/e.x.denominator,e.y.numerator*this._previousHandlers[t][1]/e.y.denominator,e.z.numerator*this._previousHandlers[t][2]/e.z.denominator]);return n}},getScaledNextHandlers:{value:function(e){var t,n=[];for(t=0;this._nextHandlers.length>t;t++)this._nextHandlers[t]&&(n[t]=[e.x.numerator*this._nextHandlers[t][0]/e.x.denominator,e.y.numerator*this._nextHandlers[t][1]/e.y.denominator,e.z.numerator*this._nextHandlers[t][2]/e.z.denominator]);return n}},directedPlaneBezierIntersection:{enumerable:!1,value:function(e,t,n,i,r,a,s,o){for(var l,c,u=this.reflectionMatrix(i[0],i[1],i[2]),h=this.reflectedY(r[0]-e,r[1]-t,r[2]-n,u),d=this.reflectedY(a[0]-e,a[1]-t,a[2]-n,u),p=this.reflectedY(s[0]-e,s[1]-t,s[2]-n,u),g=this.reflectedY(o[0]-e,o[1]-t,o[2]-n,u),m=3*(d-p)+g-h,v=3*(h+p)-6*d,f=3*(d-h),_=this.cubicRealRoots(m,v,f,h),L=0,b=0,y=[];_.length>b&&0>=_[b];)b++;for(;_.length>b&&1>_[b];)l=L,L=_[b],c=.5*(l+L),this.cubic(m,v,f,h,c)>=0&&y.push([l,L]),b++;return c=.5*(L+1),this.cubic(m,v,f,h,c)>=0&&y.push([L,1]),y}}});