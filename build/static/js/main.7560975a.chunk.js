(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{176:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(31),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,d=f.data.itemsAvailable.toNumber(),l=f.itemsRedeemed.toNumber(),p=d-l,m=f.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,l,g,O,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,f=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),b=n.n(u),f=(n(353),n(354),n(12)),d=n(1),l=n.n(d),p=n(4),m=n(13),j=n(132),g=n(133),O=n(313),x=n(596),v=n(601),y=n(605),h=n(604),S=n(15),k=n(52),w=n(174),P=n(176),R=n(38),C=Object(g.a)(w.a)(r||(r=Object(j.a)([""]))),D=g.a.span(c||(c=Object(j.a)([""]))),E=g.a.div(a||(a=Object(j.a)([""]))),K=Object(g.a)(x.a)(i||(i=Object(j.a)([""]))),M=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(D,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},A=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(o.useState)(!1),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),b=Object(m.a)(u,2),d=b[0],j=b[1],g=Object(o.useState)(!1),x=Object(m.a)(g,2),w=x[0],D=x[1],A=Object(o.useState)(0),T=Object(m.a)(A,2),B=T[0],L=T[1],I=Object(o.useState)(0),W=Object(m.a)(I,2),N=W[0],_=W[1],U=Object(o.useState)(0),Y=Object(m.a)(U,2),F=(Y[0],Y[1]),q=Object(o.useState)({open:!1,message:"",severity:void 0}),z=Object(m.a)(q,2),H=z[0],X=z[1],G=Object(o.useState)(new Date(e.startDate)),J=Object(m.a)(G,2),V=J[0],Q=J[1],Z=Object(k.c)(),$=Object(o.useState)(),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(Z,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,L(a),F(i),_(o),j(0===i),Q(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(l.a.mark((function t(){var n,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,D(!0),!Z||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(P.c)(te,e.config,Z.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?X({open:!0,message:"Mint failed! Please try again!",severity:"error"}):X({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),X({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!Z){t.next=23;break}return t.next=21,e.connection.getBalance(Z.publicKey);case 21:i=t.sent,r(i/S.LAMPORTS_PER_SOL);case 23:return D(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Z){t.next=5;break}return t.next=3,e.connection.getBalance(Z.publicKey);case 3:n=t.sent,r(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Z,e.connection]),Object(o.useEffect)(re,[Z,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{children:[Z&&Object(R.jsxs)("p",{children:["Mint count: ",N,"/",B]}),Object(R.jsx)(E,{children:Z?Object(R.jsx)(K,{disabled:d||w||!i,onClick:ce,variant:"contained",children:d?"SOLD OUT":i?w?Object(R.jsx)(v.a,{}):"MINT HERE":Object(R.jsx)(O.a,{date:V,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:M})}):Object(R.jsx)(C,{children:"Connect Wallet"})}),Object(R.jsx)(y.a,{open:H.open,autoHideDuration:6e3,onClose:function(){return X(Object(f.a)(Object(f.a)({},H),{},{open:!1}))},children:Object(R.jsx)(h.a,{onClose:function(){return X(Object(f.a)(Object(f.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})},T=n(31),B=n(116),L=n(340),I=n(602),W=new T.d.PublicKey("EXbc1thsNRrLCPqxQk4ggY5DDmXmymEEtJ6osHMXX1Di"),N=new T.d.PublicKey("C4Fey3D9BAFQg5DnGkvWSSAYPoWB1mJoxUSWmxrFCAvm"),_=new T.d.PublicKey("6NuvGgbqfC4VCoz6XjLHefevKzDambaUzgwzpkESsB5u"),U="devnet",Y=new T.d.Connection("https://explorer-api.devnet.solana.com"),F=parseInt("1640256240",10),q=Object(L.a)({overrides:{MuiButtonBase:{root:{justifyContent:"flex-start",backgroundColor:"#EDC02D"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px",backgroundColor:"#EDC02D"},contained:{backgroundColor:"#EDC02D"},containedPrimary:{backgroundColor:"#EDC02D"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),z=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(U)}),[]),t=Object(o.useMemo)((function(){return[Object(B.a)(),Object(B.b)(),Object(B.c)(),Object(B.e)({network:U}),Object(B.d)({network:U})]}),[]);return Object(R.jsx)(I.a,{theme:q,children:Object(R.jsx)(k.a,{endpoint:e,children:Object(R.jsx)(k.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(w.b,{children:Object(R.jsx)(A,{candyMachineId:_,config:N,connection:Y,startDate:F,treasury:W,txTimeout:3e4})})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(z,{})}),document.getElementById("root")),H()}},[[569,1,2]]]);
//# sourceMappingURL=main.7560975a.chunk.js.map