import { Category } from "@/types"
import { ApolloError } from "@apollo/client"

type SidebarProps = {
	categories: Category[]
	selectedCategoryId: string
	setSelectedCategoryId: (id: string) => void
	loading: boolean
	error?: ApolloError
}

export function Sidebar({
	categories,
	selectedCategoryId,
	setSelectedCategoryId
}: // loading,
// error
SidebarProps) {
	return (
		<div className="p-4 h-full border-r">
			{/* {loadingCategories && <div>loading</div>}
    {errorCategories && <div>error :(</div>} */}
			{categories && (
				<ul className="space-y-2">
					<li>
						<button
							onClick={() => setSelectedCategoryId("")}
							className={`border-2 border-dotted p-1 cursor-pointer w-full text-left hover:underline transition-all  ${
								selectedCategoryId === ""
									? "bg-primary-200 hover:bg-primary-300 dark:text-dark shadow-sm"
									: "border-transparent"
							}`}>
							All
						</button>
					</li>
					{categories?.map((category) => (
						<li key={category.id}>
							<button
								disabled={category.items.length === 0}
								onClick={() => setSelectedCategoryId(category.id)}
								className={`disabled:italic disabled:text-gray-500 cursor-pointer hover:underline transition-all disabled:cursor-not-allowed border-2 border-dotted p-1 w-full text-left ${
									selectedCategoryId === category.id
										? "bg-primary-200 hover:bg-primary-300 dark:text-dark shadow-sm"
										: "border-transparent"
								}`}>
								{category.name}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
