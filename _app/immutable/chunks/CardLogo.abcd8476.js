import{s as m,f as _,g,j as l,G as f,i as d,A as h,d as o}from"./scheduler.42ed02a9.js";import{S as q,i as z}from"./index.9edb79d6.js";function w(r){let s,a,u;return{c(){s=_("img"),this.h()},l(e){s=g(e,"IMG",{class:!0,src:!0,alt:!0,height:!0,width:!0}),this.h()},h(){l(s,"class",a=`rounded-${r[3]} ${r[4]} aspect-square`),f(s.src,u=r[0])||l(s,"src",u),l(s,"alt",r[1]),l(s,"height",r[2]),l(s,"width",r[2])},m(e,i){d(e,s,i)},p(e,[i]){i&24&&a!==(a=`rounded-${e[3]} ${e[4]} aspect-square`)&&l(s,"class",a),i&1&&!f(s.src,u=e[0])&&l(s,"src",u),i&2&&l(s,"alt",e[1]),i&4&&l(s,"height",e[2]),i&4&&l(s,"width",e[2])},i:h,o:h,d(e){e&&o(s)}}}function C(r,s,a){let{src:u}=s,{alt:e}=s,{size:i=50}=s,{radius:n="15px"}=s,{classes:c=""}=s;return r.$$set=t=>{"src"in t&&a(0,u=t.src),"alt"in t&&a(1,e=t.alt),"size"in t&&a(2,i=t.size),"radius"in t&&a(3,n=t.radius),"classes"in t&&a(4,c=t.classes)},[u,e,i,n,c]}class j extends q{constructor(s){super(),z(this,s,C,w,m,{src:0,alt:1,size:2,radius:3,classes:4})}}export{j as C};
