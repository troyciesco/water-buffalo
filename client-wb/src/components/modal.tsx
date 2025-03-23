import { useEffect, useMemo, useState } from "react"
import { useQuery } from "@apollo/client"
import { motion } from "motion/react"
import { GetAllCategoriesQuery } from "@/__generated__/graphql"
import { GET_ALL_CATEGORIES } from "@/queries"

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
	const {
		loading: loadingCategories,
		error: errorCategories,
		data: categoriesFetch
	} = useQuery(GET_ALL_CATEGORIES)

	const items = useMemo(
		() => categoriesFetch?.allCategories.map((c) => c.items).flat() || [],
		[categoriesFetch?.allCategories]
	)
	const categories = useMemo(
		() => categoriesFetch?.allCategories || [],
		[categoriesFetch?.allCategories]
	)

	const [selectedItem, setSelectedItem] = useState<Item | null>(null)
	const [selectedCategoryId, setSelectedCategoryId] = useState("")
	const [searchString, setSearchString] = useState("")
	const [filteredItems, setFilteredItems] = useState(items)

	useEffect(() => {
		if (!items || !categories) return

		let initialItems = [...items]

		if (selectedCategoryId) {
			initialItems = initialItems.filter(
				(item) => item.category === selectedCategoryId
			)
		}

		if (searchString) {
			initialItems = initialItems.filter(
				(item) =>
					item.name.toLowerCase().includes(searchString.toLowerCase()) ||
					item.description.toLowerCase().includes(searchString.toLowerCase())
			)
		}

		setFilteredItems(initialItems)
	}, [items, categories, selectedCategoryId, searchString])

	const handleClick = () => {
		onSubmit(selectedItem)
		onClose()
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { delay: 0.2 } }}
			className="flex fixed top-0 left-0 flex-col justify-center items-center w-screen h-screen">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9, transition: { delay: 0.2 } }}
				className="bg-slate-900/70 absolute z-10 w-full h-full"
				onClick={onClose}></motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
				exit={{ opacity: 0, scale: 0.9 }}
				className="relative z-20">
				<div className="dark:bg-gray-900 clear-start flex justify-between items-center p-4 bg-gray-100 border">
					<div>Action Types</div>
					<input
						type="text"
						placeholder="Search"
						className="dark:bg-gray-800 p-2 bg-white border"
						name="search"
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
					/>
				</div>
				<div className="bg-white dark:bg-gray-800 relative border z-20 pb-4 flex w-full max-h-[340px] overflow-y-scroll">
					<div className="p-4 h-full border-r">
						{loadingCategories && <div>loading</div>}
						{errorCategories && <div>error :(</div>}
						{categories && (
							<ul className="space-y-2">
								<li>
									<button
										onClick={() => setSelectedCategoryId("")}
										className={`border-2 border-dashed p-1 cursor-pointer w-full text-left ${
											selectedCategoryId === ""
												? "bg-green-100 dark:bg-green-400 dark:text-slate-900 shadow-sm"
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
											className={`disabled:italic disabled:text-gray-500 cursor-pointer hover:underline transition-all disabled:cursor-not-allowed border-2 border-dashed p-1 w-full text-left ${
												selectedCategoryId === category.id
													? "bg-green-100 dark:bg-green-400 dark:text-slate-900 shadow-sm"
													: "border-transparent"
											}`}>
											{category.name}
										</button>
									</li>
								))}
							</ul>
						)}
					</div>
					<div className="p-4">
						{/* {loading && <div>loading</div>}
						{error && <div>error :(</div>} */}
						<div className="grid grid-cols-2 gap-8">
							{filteredItems.length === 0 && (
								<div className="col-span-2 w-[712px] max-w-full">
									No items match the search criteria
								</div>
							)}
							{filteredItems.map((item) => (
								<button
									key={item.id}
									className={`flex items-center p-1 gap-2 cursor-pointer border-2 border-dashed ${
										selectedItem?.id === item.id
											? "bg-green-100 dark:bg-green-400 dark:text-slate-900 shadow-sm"
											: "border-transparent"
									}`}
									onClick={() => setSelectedItem(item)}
									onDoubleClick={() => {
										setSelectedItem(item)
										handleClick()
									}}>
									<div className="w-20 h-20 bg-gray-200 border"></div>
									<div className="text-left">
										<div className="text-lg font-bold">{item.name}</div>
										<div className="w-[240px] text-balance">
											{item.description}
										</div>
									</div>
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="dark:bg-gray-900 flex justify-between items-center p-4 bg-gray-50 border">
					<div>{prompt}</div>
					<div className="flex gap-4 items-center">
						<button
							className="btn-primary"
							disabled={!selectedItem}
							onClick={handleClick}>
							Add
						</button>
						<button onClick={onClose} className="cursor-pointer">
							Close
						</button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}
