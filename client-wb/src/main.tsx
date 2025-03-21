import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "@/assets/styles/globals.css"
import { App } from "./App.tsx"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache()
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	</StrictMode>
)
