(this["webpackJsonpdisney-plus-clone"]=this["webpackJsonpdisney-plus-clone"]||[]).push([[0],{53:function(n,e,i){},54:function(n,e,i){},81:function(n,e,i){"use strict";i.r(e);var t,a,r,c,o,s,p,d,x,l,b,g,j,h,m,u,O,f,v=i(3),w=i.n(v),y=i(32),k=i.n(y),z=(i(53),i(18)),S=i(12),I=(i(54),i(5)),A=i(48),D=i(6),E=i(29),P=E.a.initializeApp({apiKey:"AIzaSyCU4w6vT1CkAGmEBr1AeStocoRP4Gntew8",authDomain:"disneyplus-clone-india.firebaseapp.com",projectId:"disneyplus-clone-india",storageBucket:"disneyplus-clone-india.appspot.com",messagingSenderId:"792200864856",appId:"1:792200864856:web:d52b052d28d35082b3d62d",measurementId:"G-Y8405P4DM0"}).firestore(),C=E.a.auth(),T=new E.a.auth.GoogleAuthProvider,L=(E.a.storage(),P),R=i(2),G=D.a.div(t||(t=Object(I.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),H=D.a.div(a||(a=Object(I.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n  img {\n    width: 100vw;\n    height: 100vh;\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),M=D.a.div(r||(r=Object(I.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),q=D.a.div(c||(c=Object(I.a)(["\n  max-width: 874px;\n"]))),N=D.a.div(o||(o=Object(I.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),U=D.a.button(s||(s=Object(I.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n  img {\n    width: 32px;\n  }\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n    img {\n      width: 25px;\n    }\n  }\n"]))),B=Object(D.a)(U)(p||(p=Object(I.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),X=D.a.div(d||(d=Object(I.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),J=D.a.div(x||(x=Object(I.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n    img {\n      width: 100%;\n    }\n  }\n"]))),W=D.a.div(l||(l=Object(I.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Y=D.a.div(b||(b=Object(I.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),F=function(n){var e=Object(S.g)().id,i=Object(v.useState)({}),t=Object(A.a)(i,2),a=t[0],r=t[1];return Object(v.useEffect)((function(){L.collection("movies").doc(e).get().then((function(n){n.exists?r(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),Object(R.jsxs)(G,{children:[Object(R.jsx)(H,{children:Object(R.jsx)("img",{alt:a.title,src:a.backgroundImg})}),Object(R.jsx)(M,{children:Object(R.jsx)("img",{alt:a.title,src:a.titleImg})}),Object(R.jsxs)(q,{children:[Object(R.jsxs)(N,{children:[Object(R.jsxs)(U,{children:[Object(R.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(R.jsx)("span",{children:"Play"})]}),Object(R.jsxs)(B,{children:[Object(R.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(R.jsx)("span",{children:"Trailer"})]}),Object(R.jsxs)(X,{children:[Object(R.jsx)("span",{}),Object(R.jsx)("span",{})]}),Object(R.jsx)(J,{children:Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:"/images/group-icon.svg",alt:""})})})]}),Object(R.jsx)(W,{children:a.subTitle}),Object(R.jsx)(Y,{children:a.description})]})]})},K=i(39),V=i.n(K),Q=i(46),Z=i(13),$=i(24),_=Object($.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),nn=_.actions,en=nn.setUserLoginDetails,tn=nn.setSignOutState,an=function(n){return n.user.name},rn=function(n){return n.user.photo},cn=_.reducer;var on,sn,pn=D.a.nav(g||(g=Object(I.a)(["\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    height:70px;\n    background-color:#090b13;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    padding:0 36px;\n    letter-spacing:16px;\n    z-index:3;\n"]))),dn=D.a.a(j||(j=Object(I.a)(["\n    padding:0;\n    width:80px;\n    margin-top:4px;\n    max-height:70px;\n    font-size:0;\n    display:inline-block;\n    img{\n        display:block;\n        width:100%;\n    }\n"]))),xn=D.a.div(h||(h=Object(I.a)(['\n    align-items:center;\n    display:flex;\n    justify-content:flex-end;\n    flex-flow:row nowrap;\n    height:100%;\n    margin:0;\n    padding:0;\n    position:relative;\n    margin-right:auto;\n    margin-left:25px;\n    @media (max-width: 768px){\n        display:none;\n    }\n    a{\n        display:flex;\n        align-items:center;\n        padding: 0 12px;\n\n        img{\n            height:20px;\n            min-width:20px;\n            width:20px;\n            z-index:auto;\n        }\n        span{\n            color:rgb(249,249,249);\n            font-size:13px;\n            letter-spacing:1.42px;\n            line-height:1.08;\n            padding:2px 0px;\n            white-space:nowrap;\n            position:relative;\n\n            &:before{\n                background-color:rgb(249,249,249);\n                border-radius:0px 0px 2px 2px;\n                bottom:-6px;\n                content:"";\n                height:2px;\n                left:0px;\n                opacity:0;\n                position:absolute;\n                right:0px;\n                transform-origin:left center;\n                transform:scaleX(0);\n                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;\n                visibility:hidden;\n                width:auto;\n            }  \n        }\n        &:hover{\n            span:before{\n                transform:scaleX(1);\n                visibility:visible;\n                opacity:1 !important ;\n            }\n        }\n    }\n\n']))),ln=D.a.a(m||(m=Object(I.a)(["\n    background-color:rgb(0,0,0,0.6);\n    padding: 8px 16px;\n    text-transform:uppercase;\n    letter-spacing:1.5px;\n    border:1px solid #f9f9f9;\n    border-radius:4px;\n    transition:all 0.2s ease 0s;\n    \n    &:hover{\n        background-color:#f9f9f9;\n        color:#000;\n    }\n"]))),bn=D.a.img(u||(u=Object(I.a)(["\n    height:100%;\n"]))),gn=D.a.div(O||(O=Object(I.a)(["\n    position:absolute;\n    top:48px;\n    right:0px;\n    background-color:rgb(19,19,19);\n    border:1px solid rgba(151,151,151,0.34);\n    border-radius:4px;\n    box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;\n    padding:10px;\n    font-size:14px;\n    letter-spacing:3px;\n    width:100px;\n    opacity:0;\n"]))),jn=D.a.div(f||(f=Object(I.a)(["\n    position:relative;\n    height:48px;\n    width:48px;\n    display:flex;\n    cursor:pointer;\n    align-items:center;\n    justify-content:center;\n\n    ","{\n        border-radius:50%;\n        width:100%;\n        height:100%;\n    }\n\n    &:hover{\n        ","{\n            opacity:1;\n            transition-duration:1s;\n        }\n    }\n"])),bn,gn),hn=function(n){var e=Object(Z.b)(),i=Object(S.f)(),t=Object(Z.c)(an),a=Object(Z.c)(rn);Object(v.useEffect)((function(){C.onAuthStateChanged(function(){var n=Object(Q.a)(V.a.mark((function n(e){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(r(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);var r=function(n){e(en({name:n.displayName,email:n.email,photo:n.photoURL}))},c=function(){t?C.signOut().then((function(){e(tn()),i.push("/")})).catch((function(n){alert(n.message)})):C.signInWithPopup(T).then((function(n){r(n.user)})).catch((function(n){alert(n.message)}))};return Object(R.jsxs)(pn,{children:[Object(R.jsx)(dn,{children:Object(R.jsx)("img",{src:"/images/logo.svg",alt:"Diseny+"})}),t?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(xn,{children:[Object(R.jsxs)("a",{href:"/",children:[Object(R.jsx)("img",{src:"/images/home-icon.svg",alt:"home"}),Object(R.jsx)("span",{children:"HOME"})]}),Object(R.jsxs)("a",{href:"/",children:[Object(R.jsx)("img",{src:"/images/search-icon.svg",alt:"search"}),Object(R.jsx)("span",{children:"SEARCH"})]}),Object(R.jsxs)("a",{href:"/",children:[Object(R.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"watchlist"}),Object(R.jsx)("span",{children:"WATCHLIST"})]}),Object(R.jsxs)("a",{href:"/",children:[Object(R.jsx)("img",{src:"/images/original-icon.svg",alt:"orignals"}),Object(R.jsx)("span",{children:"ORIGNALS"})]}),Object(R.jsxs)("a",{href:"/",children:[Object(R.jsx)("img",{src:"/images/movie-icon.svg",alt:"movies"}),Object(R.jsx)("span",{children:"SEARCH"})]}),Object(R.jsxs)("a",{href:"/",children:[Object(R.jsx)("img",{src:"/images/series-icon.svg",alt:"series"}),Object(R.jsx)("span",{children:"SEARCH"})]})]}),Object(R.jsxs)(jn,{children:[Object(R.jsx)(bn,{src:a,alt:t}),Object(R.jsx)(gn,{children:Object(R.jsx)("span",{onClick:c,children:"Logout"})})]})]}):Object(R.jsx)(ln,{onClick:c,children:"login"})]})},mn=i(22),un=i(30),On=(i(64),i(65),i(47)),fn=i.n(On);var vn,wn,yn=Object(D.a)(fn.a)(on||(on=Object(I.a)(["\n    margin-top:20px;\n    & > button {\n        opacity:0;\n        height:100%;\n        width:5vw;\n        z-index:1;\n\n        &:hover{\n            opacity:1;\n            transition:opacity 0.2s ease 0s;\n             \n        }\n\n    }\n\n    ul li button {\n        &:before{\n            font-size:10px;\n            color:rgb(150,158,171);\n        }\n    }\n\n    li.slick-active button:before {\n        color:white;\n    }\n\n    .slick-list{\n        overflow:initial;\n    }\n    .slick-prev{\n        left:-75px;\n    }\n    .slick-next{\n        right:-75px;\n    }\n"]))),kn=D.a.div(sn||(sn=Object(I.a)(["\n    border-radius:4px;\n    cursor:pointer;\n    position:relative;\n    a{\n        border-radius:4px;\n        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n        cursor:pointer;\n        display:block;\n        position:relative;\n        padding:4px;\n\n        img{\n            width:100%;\n            height:100%;\n        }\n\n        &:hover{\n            padding:0;\n            border:4px solid rgba(249,249,249,0.8);\n            transition-duration:300ms;\n        }\n    }\n"]))),zn=function(n){return Object(R.jsxs)(yn,Object(mn.a)(Object(mn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(R.jsx)(kn,{children:Object(R.jsx)("a",{children:Object(R.jsx)("img",{src:"/images/slider-badging.jpg",alt:""})})}),Object(R.jsx)(kn,{children:Object(R.jsx)("a",{children:Object(R.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})})}),Object(R.jsx)(kn,{children:Object(R.jsx)("a",{children:Object(R.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})}),Object(R.jsx)(kn,{children:Object(R.jsx)("a",{children:Object(R.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})})})]}))};var Sn,In,An,Dn=D.a.div(vn||(vn=Object(I.a)(["\n    margin-top:30px;\n    padding : 30px 0px 26px;\n    display: grid;\n    grid-gap:25px;\n    gap:25px;\n    grid-template-columns:repeat(5,minmax(0,1fr));\n\n    @media (max-width : 768px){\n        grid-template-columns:repeat(1,minmax(0,1fr));\n    }\n"]))),En=D.a.div(wn||(wn=Object(I.a)(["\n    padding-top:56.25%;\n    border-radius:10px;\n    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor:pointer;\n    overflow:hidden;\n    position:relative;\n    transition:all 250ms cubic-bezier(0.25, 0.46 ,0.45 , 0.94 ) 0s;\n    border:3px solid rgba(249 ,249 , 249 , 0.1);\n\n    img{\n        inset:0px;\n        display:block;\n        height:100%;\n        object-fit:cover;\n        opacity:1;\n        position:absolute;\n        transition: opacity 500ms ease-in-out 0s;\n        width:100%;\n        z-index:1;\n        top:0;\n    }\n    video{\n            width:100%;\n            height:100%;\n            position:absolute;\n            top:0px;\n            opacity:0;\n            z-index:0;\n    }\n    &:hover{\n        box-shadow:rgb( 0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n        transform:scale(1.05);\n        border-color:rgba(249,249,249,0.8);\n        video{\n            opacity:1;\n        }\n\n    }\n"]))),Pn=function(n){return Object(R.jsxs)(Dn,{children:[Object(R.jsxs)(En,{children:[Object(R.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(R.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(R.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(R.jsxs)(En,{children:[Object(R.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(R.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(R.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(R.jsxs)(En,{children:[Object(R.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(R.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(R.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]}),Object(R.jsxs)(En,{children:[Object(R.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(R.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(R.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(R.jsxs)(En,{children:[Object(R.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(R.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(R.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]})]})},Cn=Object($.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Tn=Cn.actions.setMovies,Ln=function(n){return n.movie.recommend},Rn=function(n){return n.movie.newDisney},Gn=function(n){return n.movie.original},Hn=function(n){return n.movie.trending},Mn=Cn.reducer;var qn,Nn,Un,Bn=D.a.div(Sn||(Sn=Object(I.a)(["\n    padding:0px 0px 26px;\n"]))),Xn=D.a.div(In||(In=Object(I.a)(["\n    display:grid;\n    grid-gap:25px;\n    grid:25px;\n    grid-template-columns:repeat(4, minmax(0,1fr));\n\n    @media (max-width: 768px){\n        grid-template-columns:repeat(2, minmax(0,1fr));\n    }\n"]))),Jn=D.a.div(An||(An=Object(I.a)(["\n    padding-top:56.25%;\n    border-radius:10px;\n    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor:pointer;\n    overflow:hidden;\n    position:relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),Wn=function(){var n=Object(Z.c)(Ln);return Object(R.jsxs)(Bn,{children:[Object(R.jsx)("h4",{children:"Recommended for You"}),Object(R.jsx)(Xn,{children:n&&n.map((function(n,e){return Object(R.jsxs)(Jn,{children:[n.id,Object(R.jsx)(z.b,{to:"/detail/"+n.id,children:Object(R.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var Yn,Fn,Kn,Vn=D.a.div(qn||(qn=Object(I.a)(["\n    padding:0px 0px 26px;\n"]))),Qn=D.a.div(Nn||(Nn=Object(I.a)(["\n    display:grid;\n    grid-gap:25px;\n    grid:25px;\n    grid-template-columns:repeat(4, minmax(0,1fr));\n\n    @media (max-width: 768px){\n        grid-template-columns:repeat(2, minmax(0,1fr));\n    }\n"]))),Zn=D.a.div(Un||(Un=Object(I.a)(["\n    padding-top:56.25%;\n    border-radius:10px;\n    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor:pointer;\n    overflow:hidden;\n    position:relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),$n=function(){var n=Object(Z.c)(Rn);return Object(R.jsxs)(Vn,{children:[Object(R.jsx)("h4",{children:"New to Diesney+ "}),Object(R.jsx)(Qn,{children:n&&n.map((function(n,e){return Object(R.jsxs)(Zn,{children:[n.id,Object(R.jsx)(z.b,{to:"/detail/"+n.id,children:Object(R.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var _n,ne,ee,ie=D.a.div(Yn||(Yn=Object(I.a)(["\n    padding:0px 0px 26px;\n"]))),te=D.a.div(Fn||(Fn=Object(I.a)(["\n    display:grid;\n    grid-gap:25px;\n    grid:25px;\n    grid-template-columns:repeat(4, minmax(0,1fr));\n\n    @media (max-width: 768px){\n        grid-template-columns:repeat(2, minmax(0,1fr));\n    }\n"]))),ae=D.a.div(Kn||(Kn=Object(I.a)(["\n    padding-top:56.25%;\n    border-radius:10px;\n    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor:pointer;\n    overflow:hidden;\n    position:relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),re=function(){var n=Object(Z.c)(Gn);return Object(R.jsxs)(ie,{children:[Object(R.jsx)("h4",{children:"Orignals"}),Object(R.jsx)(te,{children:n&&n.map((function(n,e){return Object(R.jsxs)(ae,{children:[n.id,Object(R.jsx)(z.b,{to:"/detail/"+n.id,children:Object(R.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var ce,oe=D.a.div(_n||(_n=Object(I.a)(["\n    padding:0px 0px 26px;\n"]))),se=D.a.div(ne||(ne=Object(I.a)(["\n    display:grid;\n    grid-gap:25px;\n    grid:25px;\n    grid-template-columns:repeat(4, minmax(0,1fr));\n\n    @media (max-width: 768px){\n        grid-template-columns:repeat(2, minmax(0,1fr));\n    }\n"]))),pe=D.a.div(ee||(ee=Object(I.a)(["\n    padding-top:56.25%;\n    border-radius:10px;\n    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor:pointer;\n    overflow:hidden;\n    position:relative;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n\n    img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),de=function(){var n=Object(Z.c)(Hn);return Object(R.jsxs)(oe,{children:[Object(R.jsx)("h4",{children:"Trending"}),Object(R.jsx)(se,{children:n&&n.map((function(n,e){return Object(R.jsxs)(pe,{children:[n.id,Object(R.jsx)(z.b,{to:"/detail/"+n.id,children:Object(R.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var xe,le,be,ge,je,he,me,ue,Oe=D.a.main(ce||(ce=Object(I.a)(["\n    position:relative;\n    min-height:calc(100vh - 250px);\n    overflow-x:hidden;\n    display:block;\n    top:72px;\n    padding:0 calc(3.5vw - 5px);\n\n    &:after{\n        background:url('/images/home-background.png') center center /cover no-repeat fixed ;\n        content:\"\";\n        position:absolute;\n        inset:0px;\n        opacity:1;\n        z-index:-1; \n    }\n"]))),fe=function(n){var e=Object(Z.b)(),i=Object(Z.c)(an),t=[],a=[],r=[],c=[];return Object(v.useEffect)((function(){L.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(n.data().type){case"recommend":t=[].concat(Object(un.a)(t),[Object(mn.a)({id:n.id},n.data())]);break;case"new":a=[].concat(Object(un.a)(a),[Object(mn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(un.a)(r),[Object(mn.a)({id:n.id},n.data())]);break;case"trending":c=[].concat(Object(un.a)(c),[Object(mn.a)({id:n.id},n.data())])}})),e(Tn({recommend:t,newDisney:a,original:r,trending:c}))}))}),[i]),Object(R.jsxs)(Oe,{children:[Object(R.jsx)(zn,{}),Object(R.jsx)(Pn,{}),Object(R.jsx)(Wn,{}),Object(R.jsx)($n,{}),Object(R.jsx)(re,{}),Object(R.jsx)(de,{})]})};var ve=D.a.section(xe||(xe=Object(I.a)(["\n    overflow:hidden;\n    display:flex;\n    flex-direction: column;\n    text-align:center;\n    height:100vh;\n"]))),we=D.a.div(le||(le=Object(I.a)(["\n    margin-bottom:10vw;\n    width:100%;\n    position:relative;\n    min-height:100vh;\n    box-sizing:border-box;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    padding:80px 40px;\n    height:100px;\n"]))),ye=D.a.div(be||(be=Object(I.a)(['\n    height:100%;\n    background-position:top;\n    background-size:cover;\n    background-repeat:no-repeat;\n    top:0;\n    right: 0;\n    left:0;\n    background-image: url("/images/login-background.jpg");\n    position:absolute;\n    z-index:-1;\n']))),ke=D.a.div(ge||(ge=Object(I.a)(["\n    margin-bottom:2vw;\n    max-width:650px;\n    flex-wrap:wrap;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    margin-top:0;\n    align-items:center;\n    text-align:center;\n    margin-right: auto;\n    margin-left: auto;\n    transition-timing-function: ease-out;\n    transition: opacity 0.2s;\n    width: 100%;\n"]))),ze=D.a.img(je||(je=Object(I.a)(["\n    margin-bottom:12px;\n    max-width:600px;\n    min-height:1px;\n    display:block;\n    width:100%;\n\n"]))),Se=D.a.a(he||(he=Object(I.a)(["\n    font-weight:bold;\n    color:  #f9f9f9;\n    background-color:#0063e5;\n    margin-bottom:12px;\n    width:100%;\n    letter-spacing: 1.5px;\n    font-size:18px;\n    padding:16.5px 0;\n    border: 1px solid transparent;\n    border-radius: 4px;\n\n    &:hover{\n        background-color:#0483ee;\n    }\n\n"]))),Ie=D.a.p(me||(me=Object(I.a)(["\n    font-size:11px;\n    margin: 0 0 24px;\n    line-height:1.5;\n    letter-spacing:1.5px;\n"]))),Ae=D.a.img(ue||(ue=Object(I.a)(["\n    margin-bottom:20px;\n    max-width:600px;\n    min-height:1px;\n    display:inline-block;\n    width:100%;\n    vertical-align:bottom;\n\n"]))),De=function(){return Object(R.jsx)(ve,{children:Object(R.jsxs)(we,{children:[Object(R.jsxs)(ke,{children:[Object(R.jsx)(ze,{src:"/images/cta-logo-one.svg",alt:""}),Object(R.jsx)(Se,{children:" GET ALL THERE "}),Object(R.jsx)(Ie,{children:" Vestibulum hendrerit sagittis mauris, sit amet rutrum quam dictum eu. Donec et malesuada magna. Suspendisse orci libero, lacinia vitae suscipit at, dignissim sit amet magna. Proin ornare semper aliquam. Morbi tincidunt lorem sit amet libero tincidunt lobortis. Duis iaculis porttitor augue ut aliquam. Aliquam ullamcorpe "}),Object(R.jsx)(Ae,{src:"/images/cta-logo-two.png",alt:""})]}),Object(R.jsx)(ye,{})]})})};var Ee=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsxs)(z.a,{children:[Object(R.jsx)(hn,{}),Object(R.jsxs)(S.c,{children:[Object(R.jsx)(S.a,{exact:!0,path:"/",children:Object(R.jsx)(De,{})}),Object(R.jsx)(S.a,{exact:!0,path:"/home",children:Object(R.jsx)(fe,{})}),Object(R.jsx)(S.a,{exact:!0,path:"/detail/:id",children:Object(R.jsx)(F,{})})]})]})})},Pe=Object($.a)({reducer:{user:cn,movie:Mn},middleware:Object($.c)({serializableCheck:!1})});k.a.render(Object(R.jsx)(w.a.StrictMode,{children:Object(R.jsx)(Z.a,{store:Pe,children:Object(R.jsx)(Ee,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8f039a6e.chunk.js.map