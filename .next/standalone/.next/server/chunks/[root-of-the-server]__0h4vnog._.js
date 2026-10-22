module.exports=[406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},6371,e=>e.a(async(t,a)=>{try{var r=await e.y("nodemailer-9c35dd349a8aaa9f");e.n(r),a()}catch(e){a(e)}},!0),8634,e=>e.a(async(t,a)=>{try{var r=e.i(6371),o=t([r]);async function s(e,t){if("POST"!==e.method)return t.status(405).json({success:!1,message:"Method Not Allowed. Only POST is supported."});try{let{name:a,email:o,phone:s,country:n,treatment:i,message:d}=e.body;if(!a||!o||!s)return t.status(400).json({success:!1,message:"Name, email, and phone are required fields."});let l=process.env.RECIPIENT_EMAIL||"sonaurahealth@gmail.com",p=process.env.EMAIL_USER,c=process.env.EMAIL_PASS;if(p&&c&&"YOUR_16_DIGIT_GMAIL_APP_PASSWORD"!==c)try{let e=c.replace(/\s+/g,""),u=r.default.createTransport({service:"gmail",auth:{user:p,pass:e}}),f=`
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); padding: 24px 30px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px; font-weight: bold;">New Patient Enquiry / Assessment</h2>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">Sonaura Global HealthCare Portal</p>
          </div>
          
          <div style="padding: 24px 30px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #475569; width: 35%;">Patient Name:</td>
                  <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${a}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #475569;">Email Address:</td>
                  <td style="padding: 12px 0; color: #0f172a;">
                    <a href="mailto:${o}" style="color: #2563eb; text-decoration: none;">${o}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #475569;">Phone / WhatsApp:</td>
                  <td style="padding: 12px 0; color: #0f172a;">
                    <a href="tel:${s}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${s}</a>
                    &nbsp;|&nbsp;
                    <a href="https://wa.me/${s.replace(/[^0-9]/g,"")}" target="_blank" style="color: #16a34a; text-decoration: none;">Open WhatsApp</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #475569;">Country:</td>
                  <td style="padding: 12px 0; color: #0f172a;">${n||"Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #475569;">Treatment Interested:</td>
                  <td style="padding: 12px 0; color: #1e40af; font-weight: 600;">${i||"General Inquiry"}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0 6px; font-weight: bold; color: #475569; vertical-align: top;">Message / Symptoms:</td>
                  <td style="padding: 14px 0 6px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${d||"No description provided."}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="background-color: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
            <p style="margin: 0;">Sent automatically from Sonaura Medical Tourism website to <strong>${l}</strong>.</p>
            <p style="margin: 4px 0 0;">Received at: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})} IST</p>
          </div>
        </div>
      `;return await u.sendMail({from:`"Sonaura HealthCare Portal" <${p}>`,to:l,replyTo:o,subject:`🏥 New Enquiry: ${a} (${i||"Consultation"})`,text:`New Patient Enquiry:

Name: ${a}
Email: ${o}
Phone: ${s}
Country: ${n}
Treatment: ${i}
Message: ${d}`,html:f}),t.status(200).json({success:!0,message:"Enquiry sent successfully via Nodemailer!"})}catch(e){console.error("Nodemailer sending failed:",e)}let u=(e.headers["x-forwarded-proto"]||"https").toString(),f=(e.headers.host||"https://sonaurahealthcare.com").toString().replace(/^https?:\/\//,""),g=f?`${u}://${f}`:"https://sonaurahealthcare.com",m=(e.headers.referer||e.headers.origin||g).toString(),h=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(l)}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Referer:m,Origin:m},body:JSON.stringify({_subject:`🏥 New Patient Enquiry: ${a} - Sonaura HealthCare`,Name:a,Email:o,"Phone/WhatsApp":s,Country:n||"Not provided",Treatment:i||"General Consultation",Message:d||"None",_template:"table"})}),y=await h.json();if(y?.success==="true"||y?.success===!0)return t.status(200).json({success:!0,message:`Enquiry submitted successfully to ${l}!`});if(y?.message&&y.message.includes("Activation"))return t.status(200).json({success:!0,message:`Form Activation link sent to ${l}! Please check Gmail inbox (or Spam) and click 'Activate Form' once.`});return t.status(500).json({success:!1,message:y?.message||"Failed to send message via form gateway.",error:y?.message||"Gateway error"})}catch(e){return console.error("Contact Form Error:",e),t.status(500).json({success:!1,message:"Failed to send enquiry. Please try again later.",error:e?.message||"Server error"})}}[r]=o.then?(await o)():o,e.s(["default",0,s]),a()}catch(e){a(e)}},!1),4976,e=>e.a(async(t,a)=>{try{var r=e.i(6747),o=e.i(9245),s=e.i(4898),n=e.i(2950),i=e.i(8634),d=e.i(7031),l=e.i(1927),p=e.i(6432),c=t([i]);[i]=c.then?(await c)():c;let f=(0,n.hoist)(i,"default"),g=(0,n.hoist)(i,"config"),m=new s.PagesAPIRouteModule({definition:{kind:o.RouteKind.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:i,distDir:".next",relativeProjectDir:""});async function u(e,t,a){a.requestMeta&&(0,p.setRequestMeta)(e,a.requestMeta),m.isDev&&(0,p.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let o="/api/contact";o=o.replace(/\/index$/,"")||"/";let s=await m.prepare(e,t,{srcPage:o});if(!s){t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve());return}let{query:n,params:i,prerenderManifest:c,routerServerContext:u}=s;try{let a,r=e.method||"GET",s=(0,d.getTracer)(),p=s.getActiveScopeSpan(),f=!!(null==u?void 0:u.isWrappedByNextServer),g=m.instrumentationOnRequestError.bind(m),h=async p=>m.render(e,t,{query:{...n,...i},params:i,allowedRevalidateHeaderKeys:[],multiZoneDraftMode:!1,trustHostHeader:!1,previewProps:c.preview,propagateError:!1,dev:m.isDev,page:"/api/contact",internalRevalidate:null==u?void 0:u.revalidate,onError:(...t)=>g(e,...t)}).finally(()=>{if(!p)return;p.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1}),t.statusCode&&t.statusCode>=500&&(p.setStatus({code:d.SpanStatusCode.ERROR}),p.setAttribute("error.type",t.statusCode.toString()));let e=s.getRootSpanAttributes();if(!e)return;if(e.get("next.span_type")!==l.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${e.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=e.get("next.route")||o,i=`${r} ${n}`;p.setAttributes({"next.route":n,"http.route":n,"next.span_name":i}),p.updateName(i),a&&a!==p&&(a.setAttribute("http.route",n),a.updateName(i))});f&&p?await h(p):(a=s.getActiveScopeSpan(),await s.withPropagatedContext(e.headers,()=>s.trace(l.BaseServerSpan.handleRequest,{spanName:`${r} ${o}`,kind:d.SpanKind.SERVER,attributes:{"http.method":r,"http.target":e.url}},h),void 0,!f))}catch(e){if(m.isDev)throw e;(0,r.sendError)(t,500,"Internal Server Error")}finally{null==a.waitUntil||a.waitUntil.call(a,Promise.resolve())}}e.s(["config",0,g,"default",0,f,"handler",0,u]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__0h4vnog._.js.map