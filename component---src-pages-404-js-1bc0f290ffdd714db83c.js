(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(158),l=a(160),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(l.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=s;var d="1097489062"},152:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(e,"a",function(){return l.a});a(154);var s=r.a.createContext({}),d=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return s});var n=a(164),r=a.n(n),i=a(165),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,s=c.scale},154:function(t,e,a){var n;t.exports=(n=a(155))&&n.default||n},155:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},158:function(t,e,a){"use strict";a(156),a(34);var n=a(7),r=a.n(n),i=a(159),o=a(0),c=a.n(o),l=a(152),s=a(157),d=a.n(s),u=a(153),g=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var a=e.prototype;return a.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?c.a.createElement("div",{style:{paddingBottom:Object(u.a)(1.5)}},this.getLogo(50,50,10),c.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.25),{marginBottom:0,marginTop:0,display:"inline-block",verticalAlign:"middle"})},c.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n))):c.a.createElement("div",null,this.getLogo(25,25,5),c.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,display:"inline-block",verticalAlign:"middle"}},c.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n))),c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},c.a.createElement("header",null,t),c.a.createElement("main",null,r),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",c.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},a.getLogo=function(t,e,a){return c.a.createElement(l.b,{query:"3209226101",render:function(n){return c.a.createElement(d.a,{fixed:n.logo.childImageSharp.fixed,style:{marginRight:Object(u.a)(.5),marginBottom:0,minWidth:25,minHeight:25,borderRadius:a,width:t,height:e,display:"inline-block",verticalAlign:"middle"}})},data:i})},e}(c.a.Component);e.a=g},159:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABQUlEQVQ4y2N4F87wn5qYYdRAMH4bBsEg9hsg/RqK34RhyhM0EFkhyIBPQPpHBAR/DkcYiq6WoIEgjd+AhtwMYfu/2lfs/0of8f/Xg9nBYm/DSDAQ2bBtfsL/Xe2s/htbO4Cxs63V//W+omC5N8R6GebNm0DX2Nna/DewdvxvbWMLxiBDHW2t/18J5gCreRNGpIHfgS4AuaTQRet/l4fS/xo39f+1bmr/292V/6c46YO9/zMCElFEGQjy0kY/kf9N7ir/Z3vJ/O/zUPjfCmSDDA1xMPm/3EeCNANBsQmKAHugl0HeBHkdhE2t7cFil4I4MWKcYKR8BbpgA9DboDAzBBoKwvZA9iqgd79CI4WkZPMW6nVQBCz2lvy/0FsK7DJYsnlLqoHIMf47AoJh3iQ5HWJmPcb/r4D4TRh+140WX9TBAFakd9RuqqbfAAAAAElFTkSuQmCC",width:100,height:100,src:"/static/961e04eebd5b1efb6500cb6074e9a1b3/2fa9b/logo.png",srcSet:"/static/961e04eebd5b1efb6500cb6074e9a1b3/2fa9b/logo.png 1x,\n/static/961e04eebd5b1efb6500cb6074e9a1b3/e31b2/logo.png 1.5x,\n/static/961e04eebd5b1efb6500cb6074e9a1b3/2a990/logo.png 2x,\n/static/961e04eebd5b1efb6500cb6074e9a1b3/8694c/logo.png 3x"}}}}}},160:function(t,e,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(166),s=a.n(l);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title,l=n.data.site,d=e||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Mark Pitt",description:"A blog of my stumbles through technology",author:"Mark Pitt"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-1bc0f290ffdd714db83c.js.map