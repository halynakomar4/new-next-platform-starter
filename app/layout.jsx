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
	data-tenant-id="2a1a042e-bb6f-40a8-bc64-520a7dc2cded"
	data-bot-id="687e09df5840cb61a3a1a35a"
	data-assistant-id="687e05315840cb61a3a1a225"
	data-uuid="4afdf1da-091a-4693-b57e-979a65e06332"
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
