import '../styles/globals.css';

export const metadata = {
  title: {
    template: '%s | Netlify',
    default: 'Netlify Starter',
  },
};

export default function RootLayout() {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
               <body className="w-screen h-screen flex items-center justify-center">
                {/* Картинка на весь екран */}
                <img
                    src="/images/image.jpg"
                    alt="Full Screen Image"
                    className="w-full h-full object-cover"
                />

        {/* Intelswift Messenger */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__INTELSWIFT_MESSENGER_CONFIG__ = {
                customer_language: navigator.language || "en"
              };
            `,
          }}
        />
        <script
       	async
	src="https://stage-widget.intelswift.com/script.js"
	data-tenant-id="e6040b10-00a5-4ce3-924b-4d8b10eabb59"
	data-bot-id="6874a8d3394f19b2814fd557"
	data-assistant-id="6874a8c4394f19b2814fd53c"
	data-uuid="31d913ce-32b2-41bc-8cc9-32b207e0784d"
	data-sandbox="false"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("message", (event) => {
                if (event.data?.type === "messengerReady") {
                  const iframe = document.getElementById("iFrameMessenger");
                  iframe?.contentWindow.postMessage({ type: "verifyOrigin", href: window.location.href }, "*");
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
