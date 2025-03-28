import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource/atkinson-hyperlegible-mono/400.css"
import "@fontsource/atkinson-hyperlegible-mono/500.css"
import "@fontsource/atkinson-hyperlegible-mono/700.css"
import "@/assets/styles/globals.css"
import { App } from "./App"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ToastProvider } from "./lib/toast"

const client = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache()
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<ToastProvider>
				<App />
			</ToastProvider>
		</ApolloProvider>
	</StrictMode>
)
