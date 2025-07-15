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
	data-tenant-id="3d6b4ec1-4412-4e65-a0e6-1eada79fddf4"
	data-bot-id="687606a33ce20bf9caeb37de"
	data-assistant-id="687603613ce20bf9caeb368a"
	data-uuid="72f692fb-e671-4d70-8f07-744ad2b27920"
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
