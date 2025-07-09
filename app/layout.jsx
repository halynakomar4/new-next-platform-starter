import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
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

                {/* Інтеграція скриптів */}


<script>
	window.__INTELSWIFT_MESSENGER_CONFIG__ = {
		customer_language: navigator.language || "en"
	};
</script>
<script
	async
	src="https://stage-widget.intelswift.com/script.js"
	data-tenant-id="51910295-9c88-4254-9253-e37ac8275239"
	data-bot-id="686e1e14424f25c63b1c3527"
	data-assistant-id="686e1e07424f25c63b1c3510"
	data-uuid="50bf4e09-c0c8-449d-ad63-577a4c4f833d"
	data-sandbox="false"
></script>
<script>
  window.addEventListener("message", (event) => {
    if (event.data?.type === "messengerReady") {
		const iframe = document.getElementById("iFrameMessenger");
		iframe?.contentWindow.postMessage({ type: "verifyOrigin", href: window.location.href }, "*");
    }
  });
</script>

