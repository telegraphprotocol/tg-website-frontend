import Script from 'next/script'

const X_PIXEL_ID = 'rcv9y'

// X (Twitter) conversion tracking base code. Events are fired with window.twq('event', ...).
export function XPixel() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <Script
      id="x-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('config','${X_PIXEL_ID}');
        `,
      }}
    />
  )
}
