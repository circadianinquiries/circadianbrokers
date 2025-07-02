// components/GTM.js
"use client";
import Script from "next/script";

const GTM_ID = "GTM-K2PDTJCJ";
const GA_ID = "G-6Y11JM000C";
const OLARK_ID = "9396-319-10-3792";

export default function GTM() {
    return (
        <>
            {/* Google Tag Manager */}
            <Script id="gtm-init" strategy="afterInteractive">
                {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
            </Script>

            {/* Google Analytics */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
            </Script>

            {/* Olark Live Chat */}
            <Script id="olark-init" strategy="afterInteractive">
                {`
          ;(function(o,l,a,r,k,y){if(o.olark)return;
            r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];
            y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);
            y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};
            y.extend=function(i,j){y("extend",i,j)};
            y.identify=function(i){y("identify",k.i=i)};
            y.configure=function(i,j){y("configure",i,j);k.c[i]=j};
            k=y._={s:[],t:[+new Date],c:{},l:a};
          })(window,document,"static.olark.com/jsclient/loader.js");

          olark.identify('${OLARK_ID}');
        `}
            </Script>
        </>
    );
}
