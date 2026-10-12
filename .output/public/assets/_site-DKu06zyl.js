import{R as e,U as t,n,o as r,p as i,s as a,t as o}from"./createLucideIcon-Ph69G0YB.js";import{t as s}from"./log-in-CQz9QQJy.js";import{n as c,t as l}from"./x-CZ5St5_B.js";import{t as u}from"./mail-C9NWMxet.js";import{m as d,v as f}from"./index-BpGuMC8X.js";var p=o(`ClipboardList`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]),m=o(`Menu`,[[`line`,{x1:`4`,x2:`20`,y1:`12`,y2:`12`,key:`1e0a9i`}],[`line`,{x1:`4`,x2:`20`,y1:`6`,y2:`6`,key:`1owob3`}],[`line`,{x1:`4`,x2:`20`,y1:`18`,y2:`18`,key:`yk5zj1`}]]),h=o(`Shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),g=i(),_=[{label:`The Event`,hash:`tournament`},{label:`Format`,hash:`format`},{label:`Prizes`,hash:`prizes`},{label:`Roster Vault`,hash:`roster`}];function v(){return(0,g.jsx)(`footer`,{className:`border-t border-border bg-secondary/20`,children:(0,g.jsxs)(`div`,{className:`mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20`,children:[(0,g.jsxs)(`div`,{className:`grid gap-10 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,g.jsxs)(`div`,{className:`lg:col-span-2`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(`img`,{src:`/images/branding/project-s-logo.png`,alt:`Project S+`,className:`h-10 w-10 object-contain`}),(0,g.jsxs)(`span`,{className:`font-display text-base font-bold uppercase tracking-[0.22em] text-foreground`,children:[`Project`,(0,g.jsx)(`span`,{className:`text-primary`,children:` S+`})]})]}),(0,g.jsx)(`p`,{className:`mt-5 max-w-md text-sm leading-relaxed text-muted-foreground`,children:`HAGIT Esports Tournament — Mobile Legends: Bang Bang and TEKKEN 8. Built for the players who turn up when the lights drop.`})]}),(0,g.jsxs)(`nav`,{"aria-label":`Tournament sections`,children:[(0,g.jsx)(`p`,{className:`font-mono text-[10px] uppercase tracking-[0.3em] text-primary`,children:`Tournament`}),(0,g.jsxs)(`ul`,{className:`mt-5 space-y-3`,children:[_.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsx)(a,{to:`/`,hash:e.hash,className:`font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary`,children:e.label})},e.hash)),(0,g.jsx)(`li`,{children:(0,g.jsx)(a,{to:`/join`,className:`font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary`,children:`Register`})})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{className:`font-mono text-[10px] uppercase tracking-[0.3em] text-primary`,children:`Organizers`}),(0,g.jsxs)(`ul`,{className:`mt-5 space-y-3`,children:[(0,g.jsx)(`li`,{children:(0,g.jsxs)(`a`,{href:`mailto:tournaments@projectsplus.gg`,className:`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary`,children:[(0,g.jsx)(u,{className:`h-3.5 w-3.5`}),`project.splus.esports@gmail.com`]})}),(0,g.jsx)(`li`,{children:(0,g.jsx)(a,{to:`/login`,className:`font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary`,children:`Staff login`})})]})]})]}),(0,g.jsxs)(`div`,{className:`mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between`,children:[(0,g.jsx)(`p`,{className:`font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground`,children:`© 2026 Project S+ Esports — HAGIT Tournament`}),(0,g.jsx)(`p`,{className:`font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground`,children:`Free entry · Limited slots`})]})]})})}var y=t(e(),1),b=[{label:`The Event`,hash:`tournament`},{label:`Format`,hash:`format`},{label:`Prizes`,hash:`prizes`},{label:`Roster Vault`,hash:`roster`}];function x(){let[e,t]=(0,y.useState)(!1),[i,o]=(0,y.useState)(!1),[u,f]=(0,y.useState)(!1),{user:_}=d(),v=_?.role===`admin`;(0,y.useEffect)(()=>{function e(){f(window.scrollY>20)}return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e)}},[]);async function x(){if(!i){o(!0);try{let{error:e}=await r.auth.signOut();if(e){console.error(`Logout failed:`,e);return}window.location.href=`/`}finally{o(!1),t(!1)}}}return(0,g.jsxs)(`header`,{className:`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        transition-all
        duration-500
        ${u?`border-primary/15 bg-background/95 shadow-[0_12px_40px_-28px_hsl(var(--primary)/0.35)] backdrop-blur-2xl`:`border-border/70 bg-background/80 backdrop-blur-xl`}
      `,children:[(0,g.jsx)(`div`,{"aria-hidden":!0,className:`
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-primary/50
          to-transparent
          transition-opacity
          duration-500
          ${u?`opacity-100`:`opacity-0`}
        `}),(0,g.jsxs)(`div`,{className:`mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:h-20 sm:px-8`,children:[(0,g.jsxs)(a,{to:`/`,className:`group flex items-center gap-3`,onClick:()=>t(!1),children:[(0,g.jsxs)(`div`,{className:`relative`,children:[(0,g.jsx)(`div`,{"aria-hidden":!0,className:`absolute inset-0 scale-75 rounded-full bg-primary/20 opacity-0 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100`}),(0,g.jsx)(`img`,{src:`/images/branding/project-s-logo.png`,alt:`Project S+`,className:`relative h-10 w-10 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)] sm:h-12 sm:w-12`})]}),(0,g.jsxs)(`span`,{className:`font-display text-sm font-bold uppercase leading-none tracking-[0.22em] text-foreground transition-all duration-300 group-hover:tracking-[0.25em] sm:text-base`,children:[`Project`,(0,g.jsxs)(`span`,{className:`text-primary`,children:[` `,`S+`]})]})]}),(0,g.jsx)(`nav`,{className:`hidden items-center gap-8 lg:flex`,children:b.map(e=>(0,g.jsxs)(a,{to:`/`,hash:e.hash,className:`group/nav relative py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-primary`,children:[e.label,(0,g.jsx)(`span`,{"aria-hidden":!0,className:`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover/nav:scale-x-100`})]},e.hash))}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[_?null:(0,g.jsx)(n,{asChild:!0,variant:`ghost`,size:`sm`,className:`hidden sm:inline-flex`,children:(0,g.jsxs)(a,{to:`/login`,children:[(0,g.jsx)(s,{className:`h-3.5 w-3.5`}),`Login`]})}),_?(0,g.jsx)(n,{asChild:!0,variant:`ghost`,size:`sm`,className:`hidden sm:inline-flex`,children:(0,g.jsxs)(a,{to:`/my-registration`,children:[(0,g.jsx)(p,{className:`h-3.5 w-3.5`}),`My Registration`]})}):null,v?(0,g.jsx)(n,{asChild:!0,variant:`ghost`,size:`sm`,className:`hidden text-primary sm:inline-flex`,children:(0,g.jsxs)(a,{to:`/admin`,children:[(0,g.jsx)(h,{className:`h-3.5 w-3.5`}),`Command Center`]})}):null,_?(0,g.jsxs)(n,{type:`button`,variant:`ghost`,size:`sm`,disabled:i,onClick:x,className:`hidden hover:bg-destructive/10 hover:text-destructive sm:inline-flex`,children:[(0,g.jsx)(c,{className:`h-3.5 w-3.5`}),i?`Logging Out...`:`Logout`]}):null,(0,g.jsx)(n,{asChild:!0,size:`sm`,className:`group glow-pulse h-11 px-4 sm:px-6`,children:(0,g.jsx)(a,{to:`/join`,children:`Register Now`})}),(0,g.jsxs)(`button`,{type:`button`,"aria-label":e?`Close menu`:`Open menu`,"aria-expanded":e,onClick:()=>t(e=>!e),className:`group relative grid h-11 w-11 place-items-center overflow-hidden border border-border/70 bg-background/20 text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/55 hover:bg-primary/[0.05] hover:text-primary active:scale-95 lg:hidden`,children:[(0,g.jsx)(`span`,{className:`
                absolute
                transition-all
                duration-300
                ${e?`rotate-90 scale-0 opacity-0`:`rotate-0 scale-100 opacity-100`}
              `,children:(0,g.jsx)(m,{className:`h-5 w-5`})}),(0,g.jsx)(`span`,{className:`
                absolute
                transition-all
                duration-300
                ${e?`rotate-0 scale-100 opacity-100`:`-rotate-90 scale-0 opacity-0`}
              `,children:(0,g.jsx)(l,{className:`h-5 w-5`})})]})]})]}),(0,g.jsx)(`div`,{className:`
          grid
          overflow-hidden
          border-t
          bg-background/95
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-out
          lg:hidden
          ${e?`grid-rows-[1fr] border-border/70 opacity-100`:`grid-rows-[0fr] border-transparent opacity-0`}
        `,children:(0,g.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,g.jsx)(`nav`,{className:`px-4`,children:(0,g.jsxs)(`ul`,{className:`py-2`,children:[b.map((n,r)=>(0,g.jsx)(`li`,{style:{transitionDelay:e?`${r*45}ms`:`0ms`},className:`
                      transition-all
                      duration-300
                      ${e?`translate-y-0 opacity-100`:`-translate-y-2 opacity-0`}
                    `,children:(0,g.jsxs)(a,{to:`/`,hash:n.hash,onClick:()=>t(!1),className:`group/mobile flex items-center justify-between border-b border-border/50 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-300 hover:pl-1 hover:text-primary`,children:[n.label,(0,g.jsx)(`span`,{"aria-hidden":!0,className:`h-1.5 w-1.5 rotate-45 bg-primary/30 transition-all duration-300 group-hover/mobile:scale-125 group-hover/mobile:bg-primary`})]})},n.hash)),_?null:(0,g.jsx)(`li`,{className:`
                    transition-all
                    delay-150
                    duration-300
                    ${e?`translate-y-0 opacity-100`:`-translate-y-2 opacity-0`}
                  `,children:(0,g.jsxs)(a,{to:`/login`,onClick:()=>t(!1),className:`flex items-center border-b border-border/50 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:pl-1`,children:[(0,g.jsx)(s,{className:`mr-2 h-4 w-4`}),`Login`]})}),_?(0,g.jsx)(`li`,{className:`
                    transition-all
                    delay-150
                    duration-300
                    ${e?`translate-y-0 opacity-100`:`-translate-y-2 opacity-0`}
                  `,children:(0,g.jsxs)(a,{to:`/my-registration`,onClick:()=>t(!1),className:`flex items-center border-b border-border/50 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-300 hover:pl-1 hover:text-primary`,children:[(0,g.jsx)(p,{className:`mr-2 h-4 w-4`}),`My Registration`]})}):null,v?(0,g.jsx)(`li`,{className:`
                    transition-all
                    delay-200
                    duration-300
                    ${e?`translate-y-0 opacity-100`:`-translate-y-2 opacity-0`}
                  `,children:(0,g.jsxs)(a,{to:`/admin`,onClick:()=>t(!1),className:`flex items-center border-b border-border/50 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:pl-1`,children:[(0,g.jsx)(h,{className:`mr-2 h-4 w-4`}),`Command Center`]})}):null,_?(0,g.jsx)(`li`,{className:`
                    transition-all
                    delay-200
                    duration-300
                    ${e?`translate-y-0 opacity-100`:`-translate-y-2 opacity-0`}
                  `,children:(0,g.jsxs)(`button`,{type:`button`,disabled:i,onClick:x,className:`flex w-full items-center py-4 text-left font-mono text-[11px] uppercase tracking-[0.22em] text-destructive transition-all duration-300 hover:pl-1 hover:text-destructive/80 disabled:cursor-not-allowed disabled:opacity-40`,children:[(0,g.jsx)(c,{className:`mr-2 h-4 w-4`}),i?`Logging Out...`:`Logout`]})}):null]})})})})]})}function S(){return(0,g.jsxs)(`div`,{className:`flex min-h-screen flex-col bg-background`,children:[(0,g.jsx)(x,{}),(0,g.jsx)(`div`,{className:`flex-1 pt-16 sm:pt-20`,children:(0,g.jsx)(f,{})}),(0,g.jsx)(v,{})]})}export{S as component};