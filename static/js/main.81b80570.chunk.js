(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/about.9d26f78a.JPG"},187:function(e,t,a){e.exports=a(315)},315:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(49),i=a.n(r),l=a(12),s=a(51),c=(a(192),a(3)),m=a(4),h=a(6),d=a(5),u=a(7),g=a(36),p=a(9),f=a(18),b=a.n(f),y=(a(61),a(56)),v=a.n(y),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).toggleNavBar=a.toggleNavBar.bind(Object(p.a)(a)),a.toggleHoverSub=a.toggleHoverSub.bind(Object(p.a)(a)),a.onChangeInput=a.onChangeInput.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={email:"",collapsed:!0,hoverSub:!1,emailSent:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"toggleNavBar",value:function(e){this.setState({collapsed:!this.state.collapsed})}},{key:"toggleHoverSub",value:function(e){this.setState({hoverSub:!this.state.hoverSub})}},{key:"onChangeInput",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(g.a)({},t,a))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({emailSent:!this.state.emailSent});var t={email:this.state.email};console.log(t),b.a.post("http://localhost:3000/users/add",t).then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)}),this.handleClearForm()}},{key:"handleClearForm",value:function(e){this.setState({email:""})}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse justify-content-lg-between":"collapse navbar-collapse justify-content-lg-between show",a=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right",n=this.state,r=n.hoverSub,i=n.email,s=n.emailSent;return o.a.createElement("header",{className:"fixed-top page-header"},o.a.createElement("nav",{style:E,className:"navbar navbar-expand-lg navbar-dark"},o.a.createElement("div",{className:"container"},o.a.createElement(l.b,{to:"/",className:"navbar-brand brand-font align-middle mr-3"},o.a.createElement("img",{src:v.a,width:"50",length:"50",alt:"Zach Pritchard"})),o.a.createElement("button",{onClick:this.toggleNavBar,className:"".concat(a),type:"button",target:"_blank","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"".concat(t),id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav justify-content-inbetween"},o.a.createElement("li",{className:"nav-item mx-3"},o.a.createElement(l.c,{style:k,className:"nav-link",to:"/about"},"About")),o.a.createElement("li",{className:"nav-item mx-3"},o.a.createElement(l.c,{style:k,className:"nav-link",to:"/portfolio"},"Portfolio")),o.a.createElement("li",{className:"nav-item mx-3"},o.a.createElement(l.c,{style:k,className:"nav-link",to:"/blog"},"Blog"))),o.a.createElement("div",{className:"align-middle"},o.a.createElement("form",{className:"form-inline mx-4 mx-lg-0 my-3 my-lg-0",onSubmit:this.onSubmit},o.a.createElement("input",{name:"email",value:i,onChange:this.onChangeInput,className:"form-control mr-sm-2",type:"email",placeholder:"have@greatday.com"}),o.a.createElement("button",{onMouseEnter:this.toggleHoverSub,onMouseLeave:this.toggleHoverSub,style:r?N:S,className:"btn my-2 my-sm-0",type:"submit"},s?"Email Sent!":"Get In Touch"),"! `   "))))))}}]),t}(n.Component),E={background:"#1e2958"},k={fontWeight:"400",fontSize:"18px",margin:".8rem",letterSpacing:"1px"},S={borderColor:"#8fcc9f",color:"#8fcc9f"},N={background:"#8fcc9f",color:"#1e2958"},x=(a(213),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer fixed-bottom",style:O},o.a.createElement("div",{className:"container text-center align-items-center py-3"},o.a.createElement("a",{href:"https://www.linkedin.com/in/zachpritchard",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-linkedin m-2",style:I})),o.a.createElement("a",{href:"https://www.twitter.com/lifeofzachp",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-twitter m-2",style:I})),o.a.createElement("a",{href:"https://www.angel.co/zachp",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-angellist m-2",style:I}))))}}]),t}(n.Component)),O={background:"#F6F9fC",maxHeight:"60px"},I={fontSize:"18px",color:"#1e2958"},C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).toggleHoverAbout=a.toggleHoverAbout.bind(Object(p.a)(a)),a.toggleHoverPortfolio=a.toggleHoverPortfolio.bind(Object(p.a)(a)),a.toggleHoverBlog=a.toggleHoverBlog.bind(Object(p.a)(a)),a.state={hoverAbout:!1,hoverPortfolio:!1,hoverBlog:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"toggleHoverAbout",value:function(){this.setState({hoverAbout:!this.state.hoverAbout})}},{key:"toggleHoverPortfolio",value:function(){this.setState({hoverPortfolio:!this.state.hoverPortfolio})}},{key:"toggleHoverBlog",value:function(){this.setState({hoverBlog:!this.state.hoverBlog})}},{key:"render",value:function(){var e=this.state,t=e.hoverAbout,a=e.hoverPortfolio,n=e.hoverBlog;return o.a.createElement("div",{style:j},o.a.createElement("div",{style:A},o.a.createElement("div",{style:T},o.a.createElement("div",{className:"col-12 pb-2 mt-5 mt-lg-0",style:H},o.a.createElement("div",{className:"pb-4 pb-lg-5 pt-lg-0",style:L},o.a.createElement("img",{style:B,src:v.a,alt:"logo"})),o.a.createElement("h1",{adjustsFontSizeToFit:!0,minimumFontScale:.5,className:"mb-4 mb-lg-4 text-white"},"Hi. I'm Zach. Nice to meet you!"),o.a.createElement("p",{adjustsFontSizeToFit:!0,minimumFontScale:.5,className:"mb-4 mb-lg-4 text-white",style:F},"Product Manager \xa0 \u2022 \xa0 UX/UI Designer \xa0 \u2022 \xa0 Front End Developer"),o.a.createElement("div",{className:"w-100",style:H},o.a.createElement(l.b,{to:"/about"},o.a.createElement("button",{onMouseEnter:this.toggleHoverAbout,onMouseLeave:this.toggleHoverAbout,style:t?z:U,className:"col-12 col-lg-2 btn btn-lg m-lg-3 mb-3"},"About")),o.a.createElement(l.b,{to:"/portfolio"},o.a.createElement("button",{onMouseEnter:this.toggleHoverPortfolio,onMouseLeave:this.toggleHoverPortfolio,style:a?z:U,className:"col-12 col-lg-2 btn btn-lg m-lg-3 mb-3"},"Portfolio")),o.a.createElement(l.b,{to:"/blog"},o.a.createElement("button",{onMouseEnter:this.toggleHoverBlog,onMouseLeave:this.toggleHoverBlog,style:n?z:U,className:"col-12 col-lg-2 btn btn-lg m-lg-3 mb-3"},"Blog")))))))}}]),t}(n.Component),j={background:"#1e2958",height:"100%",width:"100%"},A={background:"#1e2958",height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},T={background:"#1e2958",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},H={background:"#1e2958",textAlign:"center"},L={paddingTop:"5rem"},B={maxWidth:"250px",height:"auto"},F={fontSize:"28px",fontWeight:"200",letterSpacing:"1px"},U={borderColor:"#8fcc9f",color:"#8fcc9f"},z={background:"#8fcc9f",color:"#1e2958",fontWeight:"600"},M=a(166),W=a.n(M),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={about:["I'm Zach Pritchard, a product manager with UX design and front end development skills. I enjoy solving problems with technology and figuring out how and why products work.","Previously, I worked for Alchemist Accelerator, a top-ranked accelerator based in San Francisco. Prior to Alchemist, I was a founder of an on-demand storage business based in New York.","Currently, I'm looking for my next challenge targeting (but not limited to) the education, healthcare, and construction industries. I also generally enjoy products that remove complexity from people's lives.","If you're interested in working together or just chatting about products, please share your email in the top right corner to start the conversation."]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("div",{className:"container",style:R},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-lg-6 pt-2 pt-lg-1 px-3",style:D},o.a.createElement("img",{style:K,className:"rounded",src:W.a,width:"100%",alt:"Zachary Pritchard"})),o.a.createElement("div",{className:"col-12 col-lg-6 p-3"},this.state.about.map(function(e,t){return o.a.createElement("p",{style:q,key:t},e)})))),o.a.createElement(x,null))}}]),t}(n.Component),R={marginTop:"calc(70px + 3%)"},q={marginBottom:"2rem",fontSize:"20px",fontWeight:"300"},D={display:"flex",maxHeight:"550px",marginBottom:"1rem"},K={height:"100%",width:"100%",objectFit:"cover",objectPosition:"-20% 0"},Y=a(84),_=a.n(Y),G=a(85),J=a.n(G),Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).toggleHoverAlchemist=a.toggleHoverAlchemist.bind(Object(p.a)(a)),a.toggleHoverSOS=a.toggleHoverSOS.bind(Object(p.a)(a)),a.state={hoverAlchemist:!1,hoverSOS:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"toggleHoverAlchemist",value:function(){this.setState({hoverAlchemist:!this.state.hoverAlchemist})}},{key:"toggleHoverSOS",value:function(){this.setState({hoverSOS:!this.state.hoverSOS})}},{key:"render",value:function(){var e=this.state,t=e.hoverAlchemist,a=e.hoverSOS;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("div",{className:"container",style:Q},o.a.createElement("div",{className:"row pt-2 pt-lg-1 align-items-center"},o.a.createElement("div",{className:"col-12 col-lg-6 mb-3"},o.a.createElement(l.b,{className:"text-decoration-none",to:"/portfolio/alchemist"},t&&o.a.createElement("div",{className:"image-overlay",style:ee},o.a.createElement("div",{style:ne},"Alchemist Accelerator is one of the top accelerator programs in Silicon Valley exclusively working with enterprise-focused startups.")),o.a.createElement("div",{style:t?$:X,onMouseEnter:this.toggleHoverAlchemist,onMouseLeave:this.toggleHoverAlchemist,className:"card align-items-center py-5"},o.a.createElement("img",{style:V,className:"card-img-top",src:_.a,alt:"Alchemist Accelerator Logo"}),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("h3",{className:"card-title",style:te},"Alchemist Accelerator"),o.a.createElement("p",{className:"mt-3",style:ae},"San Francisco, CA"))))),o.a.createElement("div",{className:"col-12 col-lg-6 mb-3"},o.a.createElement(l.b,{className:"text-decoration-none",to:"/portfolio/signonsite"},a&&o.a.createElement("div",{className:"image-overlay",style:ee},o.a.createElement("div",{style:ne},"SignOnSite is a workplace health and safety platform for the construction industry.")),o.a.createElement("div",{style:a?$:X,onMouseEnter:this.toggleHoverSOS,onMouseLeave:this.toggleHoverSOS,className:"card align-items-center py-5"},o.a.createElement("img",{style:V,className:"card-img-top",src:J.a,alt:"SignOnSite Logo"}),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("h3",{className:"card-title",style:te},"SignOnSite"),o.a.createElement("p",{className:"mt-3",style:ae},"Canberra, Australia"))))))),o.a.createElement(x,null))}}]),t}(n.Component),Q={marginTop:"calc(70px + 3%)",marginBottom:"calc(50px + 2%"},V={maxWidth:"250px",display:"center"},X={backgroundColor:"#f0f0f0",border:"none",position:"relative"},$={backgroundColor:"#fff",border:"none",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",opacity:"0.15"},ee={transition:".5s ease",position:"absolute",width:"65%",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"},te={color:"#000"},ae={color:"#000",fontSize:"18px",fontWeight:"300",fontStyle:"italic"},ne={color:"#000",fontSize:"24px",fontWeight:"450",lineHeight:"2"},oe=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("div",{className:"container",style:re},o.a.createElement("div",{className:"col-lg-10 offset-lg-1"},o.a.createElement("div",{className:"col-12 mb-4"},o.a.createElement("div",{className:"row",style:ie},o.a.createElement("div",{className:"text-center col-lg-2 mb-3"},o.a.createElement("img",{style:ce,src:_.a,alt:"Alchemist Accelerator Logo"})),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("a",{href:"https://alchemistaccelerator.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("h1",{className:"mb-3"},"Alchemist Accelerator")),o.a.createElement("p",{className:"mb-3",style:le},"Alchemist Accelerator is one of the top accelerator programs in Silicon Valley exclusively working with enterprise-focused startups."),o.a.createElement("p",{className:"mb-3",style:se},"San Francisco / Remote - Full Time - 3 years")))),o.a.createElement("div",{className:"col-12 mb-4"},o.a.createElement("h3",null,"Brief"),o.a.createElement("hr",null),o.a.createElement("p",{style:me},"Alchemist Accelerator was well-positioned but facing lots of competition. They wanted to grow their accelerator program by expanding the size of each class while staying lean and maintaining a high quality program. Prior to joining, Alchemist's product team consisted of 2 engineers without a dedicated product manager.")),o.a.createElement("div",{className:"col-12 mb-4"},o.a.createElement("h3",null,"Work"),o.a.createElement("hr",null),o.a.createElement("p",{style:me},"I implemented over many iterations a complete agile product process from performing research to measuring results. In the end, we were releasing on a feature or bug ready basis translating to once or twice a week. Ultimately, we delivered, maintained, and iterated two products:"),o.a.createElement("ul",null,o.a.createElement("li",{style:me},"One for the program's founders to get access to the Alchemist network and resources"),o.a.createElement("li",{style:me},"One for the Alchemist ops team to manage the program's founders and larger network of investors, corporate customers and mentors. ")),o.a.createElement("p",{style:me},"When I left, Alchemist's product team consisted of 4 engineers, 2 designers, 1 product manager (me), and 1 associate product manager.")))))}}]),t}(n.Component),re={marginTop:"calc(70px + 3%)"},ie={alignItems:"center"},le={fontStyle:"italic",fontSize:"16px",fontWeight:"300"},se={fontSize:"14px",fontWeight:"450"},ce={maxHeight:"200px",maxWidth:"100%",objectFit:"cover",objectPosition:"-20% 0"},me={fontSize:"20px",fontWeight:"300"},he=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("div",{className:"container",style:de},o.a.createElement("div",{className:"col-lg-10 offset-lg-1"},o.a.createElement("div",{className:"col-12 mb-4"},o.a.createElement("div",{className:"row",style:ue},o.a.createElement("div",{className:"text-center col-lg-2 mb-3"},o.a.createElement("img",{style:fe,src:J.a,alt:"SignOnSite Logo"})),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("a",{href:"https://signonsite.com.au/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("h1",{className:"mb-3"},"SignOnSite")),o.a.createElement("p",{className:"mb-3",style:ge},"SignOnSite is a workplace health and safety platform for the construction industry."),o.a.createElement("p",{className:"mb-3",style:pe},"Canberra, Australia - Contract - 3 months")))),o.a.createElement("div",{className:"col-12 mb-4"},o.a.createElement("h3",null,"Brief"),o.a.createElement("hr",null),o.a.createElement("p",{style:be},"SignOnSite was getting traction and starting to grow quickly. The product organization was feeling the pressure of feature requests from both clients and the sales organization. Additionally, communication between product and other internal teams such as support, marketing, and sales was breaking down during the development process.")),o.a.createElement("div",{className:"col-12 mb-4"},o.a.createElement("h3",null,"Work"),o.a.createElement("hr",null),o.a.createElement("p",{style:be},"I collaborated with their CEO and CTO to define their product vision and strategy. I performed a deep dive of the current state of the product development process including all other departments involved in the process. I worked with their team to design a product process  for SignOnSite that provided structure and transparency throughout the entire process from research to measuring their results.")))))}}]),t}(n.Component),de={marginTop:"calc(70px + 3%)"},ue={alignItems:"center"},ge={fontStyle:"italic",fontSize:"16px",fontWeight:"300"},pe={fontSize:"14px",fontWeight:"450"},fe={maxHeight:"200px",maxWidth:"100%",objectFit:"cover",objectPosition:"-20% 0"},be={fontSize:"20px",fontWeight:"300"},ye=a(50),ve=a.n(ye),we=a(167),Ee=a.n(we),ke=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{to:"/blog/"+e.post.endURL},o.a.createElement("h2",{className:"my-4"},e.post.title)),e.post.topics.map(function(e,t){return o.a.createElement("p",{key:t,className:"btn btn-secondary btn-sm disabled mr-2"},e)}),o.a.createElement(Ee.a,{style:xe,line:2,truncateText:"...",text:e.post.content.intro,textTruncateChild:o.a.createElement(l.b,{to:"/blog/"+e.post.endURL},"Read on")}),o.a.createElement("i",{style:Oe},ve()(e.post.published).format("MMMM D, YYYY")),o.a.createElement("hr",null))},Se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={posts:[{endURL:"post1",title:"Lessons learned, back to work!",topics:["Travel","Life Lessons"],published:"09/06/2019",content:{intro:"It's about time some might say, but stepping away from the daily grind changed my perspective. I left the US a little over a year and a half ago to move to Australia for love. Thanks to my employer and the internet today I worked there remotely for 6 months and then quit to travel with my partner. The decision to take a break from work was incredibly hard, at least as an American (another blog post!). Now, after a full year away, I'm excited to get back to work and bring what I've learned to the table. Here are the highlights:",sections:[{header:"Communication matters",body:"No matter what you do in the world whether it's trekking on the Inca trail, staying in a hostel in Bolivia or taking a boat tour of the Croatian islands, each of these experiences provides a certain level of \u2018service\u2019. Communication is the foundation of any service or product. Even when the experience goes completely wrong (the bus breaks down, drive takes twice as long, or luggage gets lost) the way people talk to you gives you a positive or negative view looking back.  Unfortunately, this customer service oriented communication isn't ubiquitous across the world and still serves as a differentiator. Working at an accelerator in San Francisco before traveling, many companies were trying to solve this customer service problem. I racked my brain on this issue as well since it has high operational costs. Asia, in particular, changed my perspective on this issue. Almost every accommodation or service provided a single phone number to contact for anything and everything such as getting stuck in the rain and needing a taxi. A simple solution made my life easier and helped build trust. Essentially, communication provides a personal touch that continues to shape our experiences."},{header:"Tech for more time",body:"Many people, friends and others in western countries tell me that they're busy, life is hard, etc., and that's definitely true in the hyper technology driven world that we live in. Life can be simple though. This lesson didn't come from one isolated experience. After going on multi-day treks, visiting small 'not as connected' towns, and being in simply less technology dependent working environments, I was exposed to a simpler, lower stress and anxiety-inducing daily life. A common theme was less 'distracting' technology, specifically web or mobile applications. Believe it or not, smartphones are everywhere since, well, most of the world has cell service now and they're affordable. On the flip side, several products made traveling, which can be incredibly stressful, much easier. Simplifying daily processes (especially around decision-making) whether booking a hotel, finding a train station, shipping a package, managing a project, etc. helps us finish them quicker, freeing up more of our time. In other words, web or mobile applications have the power to distract us and crowd our headspace, or they can free up our time and headspace, making life simpler."},{header:"Quality over quantity",body:"Humans certainly have figured out how to mass produce lots of cheap stuff. It's incredible how easy it is to get pretty much anything you might need anywhere in the world. Okay, so maybe not in a remote lake village in Nepal. But, drive an hour and voila, everything is at your fingertips for under $10 USD. At first this was great, and I picked up a few items I 'needed.' All of sudden my bag was stuffed and much heavier with more stuff I only wore a couple times. Traveling for a long period really grounds you around the amount and quality of your possessions. Don't get me wrong, I'll always hunt for the lowest price (and still price wins sometimes!), but the amount and quality of products means a lot more. For example, I'm a walking Osprey (bag company) commercial because their bags don't break. Whether it's clothing or web applications, quality means even more in this Amazon-era especially when building a sustainable business."},{header:"Access to education",body:"I'm a product manager for software applications coming from a non-technical background. Part of this break from work was to learn new skills, specifically basic programming. After a bit of simple research it's evident that there are lots of free (or very cheap!) options to learn programming amongst many other skills. Of course, just like anything, you have to spend time to learn a skill, but the ease of access nowadays through a variety of online channels, YouTube, Udemy, etc. is incredible. While finding the time  to learn a new skill isn't easy, it's pretty amazing to know that there's not many skills that are out of reach."},{header:"Relationships run the world",body:"I was always aware of the importance of relationships, especially when it came to my career. It was drilled into me that my network was everything. Travelling opened my eyes to how relationships go beyond career and shape experiences. For example, a couple put me up in their apartment in London for a few days. They probably don\u2019t even know how much that meant to me. I left getting a glimpse into living there, creating new memories with them, and seeing another completely different side of the city. This is one of many experiences. The more I travelled the more I ended up staying in locations for longer periods because building relationships in one place enriched my experiences. In fact, relationships play a role in almost everything I do, whether I\u2019m trying to find a place to stay in a new city, exploring a new direction in life or even writing a blog post! I\u2019m truly grateful for the amazing experiences I\u2019ve had but I\u2019m even more grateful for the people that made them amazing. I hope that my friends feel the same about having a relationship with me."}],conclusion:"If you can relate to any of what I\u2019ve said above, are curious to know more about my travels, just want to start a new relationship and/or want to talk about product, please don't hesitate to share your email and get in touch in the top right corner!"}}]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"blogList",value:function(){return this.state.posts.map(function(e,t){return o.a.createElement(ke,{post:e,key:t})})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("div",{className:"container",style:Ne},o.a.createElement("div",{className:"col-12 col-lg-10 offset-lg-1 pt-1"},this.blogList())))}}]),t}(n.Component),Ne={marginTop:"calc(70px + 3%)"},xe={fontSize:"18px",fontWeight:"300",marginBottom:".75rem"},Oe={fontSize:"16px",fontWeight:"350"},Ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={endURL:"post1",title:"Lessons learned, back to work!",topics:["Travel","Life Lessons"],published:"09/06/2019",content:{intro:"It's about time some might say, but stepping away from the daily grind changed my perspective. I left the US a little over a year and a half ago to move to Australia for love. Thanks to my employer and the internet today I worked there remotely for 6 months and then quit to travel with my partner. The decision to take a break from work was incredibly hard, at least as an American (another blog post!). Now, after a full year away, I'm excited to get back to work and bring what I've learned to the table. Here are the highlights:",sections:[{header:"Communication matters",body:"No matter what you do in the world whether it's trekking on the Inca trail, staying in a hostel in Bolivia or taking a boat tour of the Croatian islands, each of these experiences provides a certain level of \u2018service\u2019. Communication is the foundation of any service or product. Even when the experience goes completely wrong (the bus breaks down, drive takes twice as long, or luggage gets lost) the way people talk to you gives you a positive or negative view looking back.  Unfortunately, this customer service oriented communication isn't ubiquitous across the world and still serves as a differentiator. Working at an accelerator in San Francisco before traveling, many companies were trying to solve this customer service problem. I racked my brain on this issue as well since it has high operational costs. Asia, in particular, changed my perspective on this issue. Almost every accommodation or service provided a single phone number to contact for anything and everything such as getting stuck in the rain and needing a taxi. A simple solution made my life easier and helped build trust. Essentially, communication provides a personal touch that continues to shape our experiences."},{header:"Tech for more time",body:"Many people, friends and others in western countries tell me that they're busy, life is hard, etc., and that's definitely true in the hyper technology driven world that we live in. Life can be simple though. This lesson didn't come from one isolated experience. After going on multi-day treks, visiting small 'not as connected' towns, and being in simply less technology dependent working environments, I was exposed to a simpler, lower stress and anxiety-inducing daily life. A common theme was less 'distracting' technology, specifically web or mobile applications. Believe it or not, smartphones are everywhere since, well, most of the world has cell service now and they're affordable. On the flip side, several products made traveling, which can be incredibly stressful, much easier. Simplifying daily processes (especially around decision-making) whether booking a hotel, finding a train station, shipping a package, managing a project, etc. helps us finish them quicker, freeing up more of our time. In other words, web or mobile applications have the power to distract us and crowd our headspace, or they can free up our time and headspace, making life simpler."},{header:"Quality over quantity",body:"Humans certainly have figured out how to mass produce lots of cheap stuff. It's incredible how easy it is to get pretty much anything you might need anywhere in the world. Okay, so maybe not in a remote lake village in Nepal. But, drive an hour and voila, everything is at your fingertips for under $10 USD. At first this was great, and I picked up a few items I 'needed.' All of sudden my bag was stuffed and much heavier with more stuff I only wore a couple times. Traveling for a long period really grounds you around the amount and quality of your possessions. Don't get me wrong, I'll always hunt for the lowest price (and still price wins sometimes!), but the amount and quality of products means a lot more. For example, I'm a walking Osprey (bag company) commercial because their bags don't break. Whether it's clothing or web applications, quality means even more in this Amazon-era especially when building a sustainable business."},{header:"Access to education",body:"I'm a product manager for software applications coming from a non-technical background. Part of this break from work was to learn new skills, specifically basic programming. After a bit of simple research it's evident that there are lots of free (or very cheap!) options to learn programming amongst many other skills. Of course, just like anything, you have to spend time to learn a skill, but the ease of access nowadays through a variety of online channels, YouTube, Udemy, etc. is incredible. While finding the time  to learn a new skill isn't easy, it's pretty amazing to know that there's not many skills that are out of reach."},{header:"Relationships run the world",body:"I was always aware of the importance of relationships, especially when it came to my career. It was drilled into me that my network was everything. Travelling opened my eyes to how relationships go beyond career and shape experiences. For example, a couple put me up in their apartment in London for a few days. They probably don\u2019t even know how much that meant to me. I left getting a glimpse into living there, creating new memories with them, and seeing another completely different side of the city. This is one of many experiences. The more I travelled the more I ended up staying in locations for longer periods because building relationships in one place enriched my experiences. In fact, relationships play a role in almost everything I do, whether I\u2019m trying to find a place to stay in a new city, exploring a new direction in life or even writing a blog post! I\u2019m truly grateful for the amazing experiences I\u2019ve had but I\u2019m even more grateful for the people that made them amazing. I hope that my friends feel the same about having a relationship with me."}],conclusion:"If you can relate to any of what I\u2019ve said above, are curious to know more about my travels, just want to start a new relationship and/or want to talk about product, please don't hesitate to share your email and get in touch in the top right corner!"}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.topics,n=e.published,r=e.content;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("div",{className:"container",style:Ce},o.a.createElement("div",{className:"col-12 col-lg-10 offset-lg-1 pt-4"},o.a.createElement("h1",{className:"mb-4"},t),a.map(function(e){return o.a.createElement("p",{className:"btn btn-secondary btn-sm disabled mr-2 mb-2"},e)}),o.a.createElement("p",{style:je,className:"font-italic float-lg-right my-2"},ve()(n).format("MMMM D, YYYY")),o.a.createElement("hr",{className:"mb-4"}),o.a.createElement("p",{style:je},r.intro),r.sections.map(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:"my-4"},e.header),o.a.createElement("p",{style:je},e.body))}),o.a.createElement("p",{style:je},r.conclusion))))}}]),t}(n.Component),Ce={marginTop:"calc(70px + 3%)"},je={fontSize:"20px",fontWeight:"300"},Ae=a(11),Te=(n.Component,{marginTop:"calc(70px + 3%)"}),He={fontSize:"20px",fontWeight:"300"},Le=(n.Component,{background:"#b73634"}),Be=function(e){return o.a.createElement("tr",null,o.a.createElement("td",{className:"align-middle"},e.post.title),o.a.createElement("td",{className:"align-middle"},e.post.author),o.a.createElement("td",{className:"align-middle"},e.post.topics.join(", ")),o.a.createElement("td",{className:"align-middle"},ve()(e.post.published).format("MMMM D, YYYY")),o.a.createElement("td",{className:"align-middle"},o.a.createElement(l.b,{className:"btn btn-secondary",to:"/admin/posts/edit/"+e.post._id},"EDIT"),o.a.createElement(l.b,{to:"/admin/posts",className:"btn btn-danger ml-2",onClick:function(){e.deletePost(e.post._id)}},"DELETE")))},Fe=(n.Component,{marginTop:"76px"}),Ue=a(86),ze=(a(164),a(186)),Me=a.n(ze),We={keyBindingFn:function(e,t){if(!(0,t.getEditorState)().getSelection().isCollapsed())return Ae.KeyBindingUtil.hasCommandModifier(e)&&75===e.which?"add-link":void 0},handleKeyCommand:function(e,t,a,n){n.getEditorState;var o=n.setEditorState;if("add-link"!==e)return"not-handled";var r=window.prompt("Paste the link below..."),i=t.getSelection();if(!r)return o(Ae.RichUtils.toggleLink(t,i,null)),"handled";var l=t.getCurrentContent().createEntity("LINK","MUTABLE",{url:r}),s=Ae.EditorState.push(t,l,"create-entity"),c=l.getLastCreatedEntityKey();return o(Ae.RichUtils.toggleLink(s,i,c)),"handled"},decorators:[{strategy:function(e,t,a){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&"LINK"===a.getEntity(t).getType()},t)},component:function(e){var t=e.contentState,a=e.entityKey,n=t.getEntity(a).getData().url;return o.a.createElement("a",{className:"link",href:n,rel:"noopener noreferrer",target:"_blank","aria-label":n},e.children)}}]},Pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).onToggle=function(e){e.preventDefault(),a.props.onToggle(a.props.style),a.setState({isSelected:!a.state.isSelected})},a.state={isSelected:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{style:this.state.isSelected?Re:null,className:"btn btn-square mr-2",onClick:this.onToggle},this.props.label)}}]),t}(o.a.Component),Re={background:"#D3D3D3"},qe=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:" \u201c \u201d ",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"{ }",style:"code-block"}];function De(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var Ke=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.editorState,a=t.getSelection(),n=t.getCurrentContent().getBlockForKey(a.getStartKey()).getType();return o.a.createElement("div",null,o.a.createElement("span",{className:"RichEditor-controls"},qe.map(function(t){return o.a.createElement(Pe,{active:t.style===n,label:t.label,onToggle:e.props.onToggle,style:t.style,key:t.label,type:t})})))}}]),t}(o.a.Component),Ye={customStyleMap:{HIGHLIGHT:{background:"#fffe0d"}},keyBindingFn:function(e){if(e.metaKey&&"h"===e.key)return"highlight"},handleKeyCommand:function(e,t,a){var n=a.setEditorState;if("highlight"===e)return n(Ae.RichUtils.toggleInlineStyle(t,"HIGHLIGHT")),!0}},_e=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){var t=e.getCurrentContent();a.sendContent(t),a.setState({editorState:e})},a.handleKeyCommand=function(e){var t=Ae.RichUtils.handleKeyCommand(a.state.editorState,e);return t?(a.onChange(t),"handled"):"not-handled"},a.onUnderlineClick=function(){a.onChange(Ae.RichUtils.toggleInlineStyle(a.state.editorState,"UNDERLINE"))},a.onBoldClick=function(){a.onChange(Ae.RichUtils.toggleInlineStyle(a.state.editorState,"BOLD"))},a.onItalicClick=function(){a.onChange(Ae.RichUtils.toggleInlineStyle(a.state.editorState,"ITALIC"))},a.onStrikeThroughClick=function(){a.onChange(Ae.RichUtils.toggleInlineStyle(a.state.editorState,"STRIKETHROUGH"))},a.onHighlightClick=function(){a.onChange(Ae.RichUtils.toggleInlineStyle(a.state.editorState,"HIGHLIGHT"))},a.onAddLinkClick=function(){var e=a.state.editorState,t=e.getSelection(),n=window.prompt("Paste the link below...");if(!n)return a.onChange(Ae.RichUtils.toggleLink(e,t,null)),"handled";var o=e.getCurrentContent().createEntity("LINK","MUTABLE",{url:n}),r=Ae.EditorState.push(e,o,"create-entity"),i=o.getLastCreatedEntityKey();a.onChange(Ae.RichUtils.toggleLink(r,t,i))},a.toggleBlockType=function(e){a.onChange(Ae.RichUtils.toggleBlockType(a.state.editorState,e))},a.state={editorState:Ae.EditorState.createEmpty()},a.plugins=[Ye,We],a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"sendContent",value:function(e){JSON.stringify(Object(Ae.convertToRaw)(e)),this.props.onChangeContent(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",null),o.a.createElement("div",{style:Ge},o.a.createElement("div",{className:"row m-1"},o.a.createElement(Ke,{editorState:this.state.editorState,onToggle:this.toggleBlockType}),o.a.createElement("button",{className:"btn btn-square mr-2",onClick:this.onUnderlineClick},o.a.createElement("u",null,"U")),o.a.createElement("button",{className:"btn btn-square mr-2",onClick:this.onBoldClick},o.a.createElement("b",null,"B")),o.a.createElement("button",{className:"btn btn-square mr-2",onClick:this.onItalicClick},o.a.createElement("em",null,"I")),o.a.createElement("button",{className:"btn btn-square mr-2",onClick:this.onStrikeThroughClick},o.a.createElement("strike",null,"abc")),o.a.createElement("button",{className:"btn btn-square mr-2",onClick:this.onHighlightClick},o.a.createElement("span",{style:{background:"yellow"}},"H")),o.a.createElement("button",{className:"btn btn-square mr-2",onClick:this.onAddLinkClick},o.a.createElement("i",{className:"fa fa-paperclip"}))),o.a.createElement("div",{className:"mt-3"},o.a.createElement(Me.a,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,blockStyleFn:De,plugins:this.plugins}))))}}]),t}(n.Component),Ge={},Je=(n.Component,{marginTop:"calc(70px + 3%)"}),Ze=(n.Component,{marginTop:"76px"}),Qe=(n.Component,n.Component,n.Component,n.Component,{marginTop:"76px"}),Ve=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(l.a,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/about",exact:!0,component:P}),o.a.createElement(s.b,{path:"/portfolio",exact:!0,component:Z}),o.a.createElement(s.b,{path:"/portfolio/alchemist",component:oe}),o.a.createElement(s.b,{path:"/portfolio/signonsite",component:he}),o.a.createElement(s.b,{path:"/blog",exact:!0,component:Se}),o.a.createElement(s.b,{path:"/blog/post1",component:Ie}),o.a.createElement(s.b,{path:"/",exact:!0,component:C}),o.a.createElement(s.a,{from:"*",to:"/"})))}}]),t}(n.Component);var Xe=function(){return o.a.createElement(l.a,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/",component:Ve})))};i.a.render(o.a.createElement(Xe,null),document.getElementById("root"))},56:function(e,t,a){e.exports=a.p+"static/media/logo.f93779ad.svg"},61:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/alchemist-logo_only.4bdf02bc.png"},85:function(e,t,a){e.exports=a.p+"static/media/signonsite-logo.89891fee.png"}},[[187,1,2]]]);
//# sourceMappingURL=main.81b80570.chunk.js.map