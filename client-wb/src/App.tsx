import { useQuery, gql } from "@apollo/client"
import { Foo } from "@/components/foo"

const GET_ALL_ITEMS = gql`
	query GetAllItems {
		allItems {
			name
			category {
				id
				name
			}
		}
	}
`
// const GET_HELLO = gql`
// 	query GetHello {
// 		hello
// 	}
// `

export function App() {
	const { loading, error, data } = useQuery(GET_ALL_ITEMS)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error : {error.message}</p>

	return (
		<div>
			<div>hello world</div>
			<Foo />
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
