import { useMemo, useState } from "react"
import { useQuery } from "@apollo/client"
import { motion } from "motion/react"
import { GetAllCategoriesQuery } from "@/__generated__/graphql"
import { GET_ALL_CATEGORIES, GET_ALL_TAGS } from "@/queries"
import { Overlay } from "./overlay"
import { Sidebar } from "./sidebar"
import { Content } from "./content"
import { useSearch } from "@/hooks/use-search"

type Item = NonNullable<
	GetAllCategoriesQuery["allCategories"][number]["items"][number]
>

export function Modal({
	prompt,
	onClose,
	onSubmit
}: {
	prompt: string
	onClose: () => void
	onSubmit: (item: Item | null) => void
}) {
	const { loading, error, data } = useQuery(GET_ALL_CATEGORIES)
	// @TODO - a combined categories/tags query makes more sense, but need to clean up naming etc
	const { data: tagData } = useQuery(GET_ALL_TAGS)

	const items = useMemo(
		() => data?.allCategories.map((c) => c.items).flat() || [],
		[data?.allCategories]
	)
	const categories = useMemo(
		() => data?.allCategories || [],
		[data?.allCategories]
	)
	const tags = useMemo(() => tagData?.allTags || [], [tagData?.allTags])

	const [selectedCategoryId, setSelectedCategoryId] = useState("")
	const [searchString, setSearchString] = useState("")
	const { filteredItems } = useSearch({
		items,
		categories,
		tags,
		searchString,
		selectedCategoryId
	})

	const [selectedItem, setSelectedItem] = useState<Item | null>(null)

	const handleSubmit = () => {
		onSubmit(selectedItem)
		onClose()
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { delay: 0.2 } }}
			className="flex fixed top-0 left-0 flex-col justify-center items-center w-screen h-screen">
			<Overlay onClose={onClose} />
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
				exit={{ opacity: 0, scale: 0.9 }}
				className="relative z-20 mx-2">
				<div className="dark:bg-dark bg-light flex gap-2 justify-between items-center p-2 border">
					<div className="md:text-2xl font-bold">Action Types</div>
					<input
						type="text"
						placeholder="Search"
						className="dark:bg-dark-muted md:text-base active:outline-primary-c-light focus:outline-primary-c-light md:p-2 p-1 text-sm bg-white border"
						name="search"
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
					/>
				</div>

				<div className="bg-light dark:bg-dark flex relative z-20 w-full border">
					<Sidebar
						categories={categories}
						selectedCategoryId={selectedCategoryId}
						setSelectedCategoryId={setSelectedCategoryId}
						loading={loading}
						error={error}
					/>
					<Content
						items={filteredItems}
						selectedItemId={selectedItem?.id || ""}
						onClick={(item) => setSelectedItem(item)}
						onDoubleClick={(item) => {
							setSelectedItem(item)
							handleSubmit()
						}}
					/>
				</div>

				<div className="dark:bg-dark bg-light md:items-center md:flex-row flex flex-col justify-between p-4 border">
					<div className="md:text-base md:mb-0 mb-2 text-sm">{prompt}</div>
					<div className="flex gap-4 justify-end items-center">
						{selectedItem && (
							<div className="text-sm italic">
								Selected: {selectedItem.name}
							</div>
						)}
						<button
							className="btn-primary"
							disabled={!selectedItem}
							onClick={handleSubmit}>
							Add
						</button>
						<button
							onClick={onClose}
							className="hover:underline cursor-pointer">
							Close
						</button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}
