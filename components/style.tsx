

function Style(){
    return(
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::selection{background:#e8652a22}
        a{text-decoration:none;color:inherit}
        button{cursor:pointer;font-family:inherit}
        @keyframes mq   {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        /* nav */
        .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:58px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;transition:background .3s,backdrop-filter .3s}
        .nav.up{background:rgba(255,255,255,.93);backdrop-filter:blur(16px);border-bottom:1px solid #f0f0f0}
        .nav-brand{display:flex;align-items:center;gap:8px;background:none;border:none;font-size:15px;font-weight:600;letter-spacing:-.01em}
        .nav-brand span{width:28px;height:28px;background:#0f0f0f;border-radius:7px;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:11px;color:#e8652a}
        .nav-links{display:flex;gap:28px}
        .nav-links button{background:none;border:none;font-size:14px;color:#666;transition:color .2s}
        .nav-links button:hover{color:#0f0f0f}

        /* buttons */
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:9px;font-size:14px;font-weight:500;transition:all .22s;white-space:nowrap;font-family:'Inter',sans-serif;cursor:pointer}
        .btn-primary{background:#0f0f0f;color:#fff;padding:11px 24px;border:none}
        .btn-primary:hover{background:#e8652a;transform:translateY(-1px);box-shadow:0 8px 22px rgba(232,101,42,.28)}
        .btn-secondary{background:transparent;color:#0f0f0f;padding:10px 22px;border:1.5px solid #ddd}
        .btn-secondary:hover{border-color:#0f0f0f}

        /* hero layout */
        .hero{min-height:100vh;padding:100px 5% 72px;display:flex;align-items:center;position:relative;overflow:hidden}
        .hero-grid{max-width:1100px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 360px;gap:60px;align-items:center}

        /* greeting — code-tag style */
        .hero-greeting{
          font-family:'JetBrains Mono',monospace;
          font-size:13px;
          color:#888;
          letter-spacing:.04em;
          margin-bottom:18px;
          display:inline-flex;
          align-items:center;
          gap:0;
        }
        .hero-greeting .tag-bracket{color:#e8652a;font-weight:500}
        .hero-greeting .tag-text{color:#555}

        /* cycling name / role block — fixed height so image never shifts */
        .hero-cycle-block{
          min-height: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 24px;
        }

        /* sub copy */
        .hero-copy{font-size:15.5px;line-height:1.8;color:#666;max-width:420px;margin-bottom:8px}
        .stack-hint{font-family:'JetBrains Mono',monospace;font-size:11.5px;color:#bdbdbd;margin-bottom:32px;letter-spacing:.03em}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:44px}
        .stats{display:flex;gap:36px;padding-top:28px;border-top:1px solid #f2f2f2}
        .stats>div strong{font-family:'Press Start 2P',monospace;font-size:14px;color:#e8652a;display:block;margin-bottom:8px;line-height:1}
        .stats>div span{font-size:12px;color:#adadad}

        /* photo */
        .photo-col{display:flex;flex-direction:column}
        .photo-frame{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:3/4;box-shadow:0 2px 0 0 #e8652a33,0 24px 64px rgba(0,0,0,.1);border:1px solid #ebebeb}
        .photo-frame img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block}
        .photo-badge{position:absolute;bottom:14px;left:14px;right:14px;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-radius:11px;padding:11px 14px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,255,255,.8)}
        .badge-name{font-size:12px;font-weight:600;color:#0f0f0f;letter-spacing:-.01em}
        .badge-role{font-family:'JetBrains Mono',monospace;font-size:10px;color:#adadad;margin-top:3px}
        .badge-dot{display:flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#555}
        .badge-dot span{width:6px;height:6px;background:#22c55e;border-radius:50%;animation:blink 2s ease infinite}

        /* marquee */
        .mq-wrap{overflow:hidden;padding:15px 0;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;background:#fafafa}
        .mq-track{display:flex;animation:mq 24s linear infinite;width:max-content}
        .mq-track span{white-space:nowrap;font-family:'JetBrains Mono',monospace;font-size:11px;color:#bdbdbd;padding:0 20px;border-right:1px solid #ebebeb;letter-spacing:.04em}

        /* sections */
        .section{padding:92px 5%}
        .section-inner{max-width:1100px;margin:0 auto}
        .eyebrow{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#c0c0c0;margin-bottom:14px}
        .section-header{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:52px;flex-wrap:wrap}
        .section-header h2{font-size:clamp(26px,3.5vw,46px);font-weight:700;letter-spacing:-.025em;line-height:1.15}
        .section-header h2 span,.grad{background:linear-gradient(120deg,#e8652a,#f5a623);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .section-header p{font-size:14px;color:#999;max-width:240px;line-height:1.75}
        .alt-bg{background:#fafafa;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2}

        /* projects */
        .projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
        .proj-card{background:#fff;border:1px solid #ebebeb;border-radius:18px;overflow:hidden;transition:box-shadow .3s,transform .3s}
        .proj-card:hover{box-shadow:0 16px 52px rgba(0,0,0,.09);transform:translateY(-4px)}
        .proj-thumb{position:relative;height:210px;overflow:hidden}
        .proj-thumb img{width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .5s}
        .proj-card:hover .proj-thumb img{transform:scale(1.04)}
        .proj-num{position:absolute;top:13px;left:13px;background:rgba(0,0,0,.52);backdrop-filter:blur(6px);border-radius:7px;padding:3px 9px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.85)}
        .proj-tag{position:absolute;top:13px;right:13px;background:rgba(255,255,255,.93);backdrop-filter:blur(6px);border-radius:100px;padding:4px 12px;font-size:11px;font-weight:600;letter-spacing:.02em}
        .proj-body{padding:20px 22px 22px}
        .proj-head{margin-bottom:8px}
        .proj-head h3{font-size:19px;font-weight:700;letter-spacing:-.02em}
        .proj-head p{font-family:'JetBrains Mono',monospace;font-size:11.5px;margin-top:3px;font-weight:500}
        .proj-desc{font-size:13.5px;line-height:1.75;color:#666;margin-bottom:14px}
        .chips{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px}
        .chips span{background:#f4f4f0;color:#555;padding:4px 10px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500}
        .proj-links{display:flex;gap:8px;flex-wrap:wrap}
        .proj-link-live{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;background:#0f0f0f;color:#fff;font-size:12.5px;font-weight:500;transition:all .2s;font-family:'Inter',sans-serif}
        .proj-link-live:hover{background:#e8652a;transform:translateY(-1px)}
        .proj-link-gh{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;background:#f4f4f0;color:#0f0f0f;font-size:12.5px;font-weight:500;transition:all .2s;border:1.5px solid #e8e8e4;font-family:'Inter',sans-serif}
        .proj-link-gh:hover{background:#0f0f0f;color:#fff;border-color:#0f0f0f}

        /* about */
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
        .about-grid h2{font-size:clamp(24px,3vw,42px);font-weight:700;letter-spacing:-.025em;line-height:1.15;margin-bottom:20px}
        .about-grid p{font-size:15px;line-height:1.85;color:#666;margin-bottom:14px}
        .about-grid strong{color:#0f0f0f;font-weight:600}
        .code-accent{font-family:'JetBrains Mono',monospace;font-size:13px;background:#f4f4f0;padding:2px 7px;border-radius:5px;color:#e8652a}
        .about-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
        .strength-list{display:flex;flex-direction:column;gap:11px}
        .strength-card{background:#fff;border:1px solid #ebebeb;border-radius:13px;padding:15px 17px;display:flex;gap:14px;align-items:flex-start}
        .strength-card abbr{min-width:36px;height:36px;border-radius:9px;background:#f4f4f0;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:#e8652a;font-style:normal;font-weight:500;text-decoration:none;flex-shrink:0}
        .strength-card h3{font-size:13.5px;font-weight:600;color:#0f0f0f;margin-bottom:3px;letter-spacing:-.01em}
        .strength-card p{font-size:13px;color:#777;line-height:1.6}

        /* skills */
        .skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .skill-card{background:#fafafa;border:1px solid #ebebeb;border-radius:14px;padding:18px 16px}
        .skill-card h3{font-size:10.5px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:#adadad;margin-bottom:12px}
        .skill-card h3::before{content:"> ";font-family:'JetBrains Mono',monospace;color:#e8652a}

        /* contact */
        .contact-inner{max-width:620px;margin:0 auto}
        .contact-inner h2{font-size:clamp(24px,3.5vw,48px);font-weight:700;letter-spacing:-.025em;line-height:1.15;margin-bottom:12px}
        .contact-copy{font-size:15px;color:#777;line-height:1.8;margin-bottom:40px;max-width:400px}
        .contact-list{margin-bottom:32px}
        .contact-row{display:flex;align-items:center;padding:18px 0;border-bottom:1px solid #f2f2f2;transition:padding-left .2s}
        .contact-row:hover{padding-left:6px}
        .contact-row:hover .c-arr{color:#e8652a;transform:translateX(3px)}
        .c-icon{width:36px;height:36px;border-radius:9px;background:#f4f4f0;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:11px;color:#666;margin-right:14px;flex-shrink:0}
        .c-label{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#c0c0c0;margin-bottom:3px}
        .c-val{font-size:15px;color:#0f0f0f}
        .c-arr{margin-left:auto;font-size:16px;color:#ccc;transition:all .2s}

        /* footer */
        .footer{padding:22px 5%;border-top:1px solid #f2f2f2;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
        .footer-brand{display:flex;align-items:center;gap:8px;background:none;border:none;font-size:14px;font-weight:600;letter-spacing:-.01em}
        .footer-brand span{width:24px;height:24px;background:#0f0f0f;border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:#e8652a}
        .footer p{font-size:11.5px;color:#c0c0c0;font-family:'JetBrains Mono',monospace}

        /* responsive */
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr}
          .photo-col{max-width:300px}
          .projects-grid{grid-template-columns:1fr}
          .about-grid{grid-template-columns:1fr;gap:40px}
          .skills-grid{grid-template-columns:repeat(2,1fr)}
          .nav-links{display:none}
        }
        @media(max-width:520px){
          .skills-grid{grid-template-columns:1fr}
          .hero-cycle-block{min-height:9rem}
        }
      `}</style>
    )
}

export default Style