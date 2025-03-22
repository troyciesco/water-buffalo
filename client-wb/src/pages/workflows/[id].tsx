import { useParams } from "react-router"
import { createPortal } from "react-dom"
import { useEffect, useMemo, useState } from "react"
import { useQuery } from "@apollo/client"
import { gql } from "@/__generated__"
import { AnimatePresence, Reorder } from "motion/react"
import { motion } from "motion/react"
import { GetAllCategoriesQuery } from "@/__generated__/graphql"

const GET_ALL_CATEGORIES = gql(/* GraphQL */ `
	query GetAllCategories {
		allCategories {
			id
			name
			items {
				id
				name
				description
				category: categoryId
			}
		}
	}
`)

type Item = NonNullable<
	GetAllCategoriesQuery["allCategories"][number]["items"][number]
>

export default function ModalContent({
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
					item.name.includes(searchString) ||
					item.description.includes(searchString)
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
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			className="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center">
			<div
				className="bg-slate-900/70 absolute w-full h-full z-10"
				onClick={onClose}></div>
			<div className="relative z-20">
				<div className="p-4 bg-gray-100 dark:bg-gray-900 border clear-start flex items-center justify-between">
					<div>Action Types</div>
					<input
						type="text"
						placeholder="Search"
						className="border p-2 bg-white dark:bg-gray-800"
						name="search"
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
					/>
				</div>
				<div className="bg-white dark:bg-gray-800 relative border z-20 pb-4 flex w-full max-h-[340px] overflow-y-scroll">
					<div className="h-full p-4 border-r">
						{loadingCategories && <div>loading</div>}
						{errorCategories && <div>error :(</div>}
						{categories && (
							<ul className="space-y-2">
								<li>
									<button
										onClick={() => setSelectedCategoryId("")}
										className={`border-2 border-dashed p-1 cursor-pointer w-full text-left ${
											selectedCategoryId === ""
												? "bg-green-100 dark:bg-green-400 dark:text-slate-900 shadow"
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
													? "bg-green-100 dark:bg-green-400 dark:text-slate-900 shadow"
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
											? "bg-green-100 dark:bg-green-400 dark:text-slate-900 shadow"
											: "border-transparent"
									}`}
									onClick={() => setSelectedItem(item)}
									onDoubleClick={() => {
										setSelectedItem(item)
										handleClick()
									}}>
									<div className="h-20 w-20 border bg-gray-200"></div>
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
				<div className="p-4 bg-gray-50 dark:bg-gray-900 border flex justify-between items-center">
					<div>{prompt}</div>
					<div className="flex items-center gap-4">
						<button
							className="cursor-pointer border px-4 py-2 disabled:cursor-not-allowed bg-green-100 dark:bg-green-400 dark:text-slate-900 disabled:bg-gray-200 disabled:text-gray-600 disabled:border-gray-600"
							disabled={!selectedItem}
							onClick={handleClick}>
							Add
						</button>
						<button onClick={onClose} className="cursor-pointer">
							Close
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export function WorkflowPage() {
	const params = useParams()
	const [showModal, setShowModal] = useState(false)
	const [items, setItems] = useState<Item[]>([])
	return (
		<div className="flex flex-col h-full">
			<div className="text-3xl border-b p-4">Workflow {params.id}</div>
			{/* https://stackoverflow.com/questions/55364127/making-a-dotted-grid-with-css */}
			<div className="p-4 grow bg-white [background-image:radial-gradient(#94a3b8_1px,transparent_0)] [background-size:30px_30px] [background-position:-8px_-8px]">
				<div className="grid grid-cols-6 ">
					<div className="mb-4 p-4 border bg-gray-100 dark:bg-gray-800 flex flex-col">
						{items.length === 0 ? (
							<div>No items added yet</div>
						) : (
							<Reorder.Group
								axis="y"
								values={items}
								onReorder={setItems}
								className="flex flex-col space-y-2">
								<AnimatePresence>
									{items.map((item) => (
										<Reorder.Item
											key={item.id}
											value={item}
											className="p-2 border bg-gray-50 dark:bg-gray-700 cursor-grab"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}>
											{item.name}
										</Reorder.Item>
									))}
								</AnimatePresence>
							</Reorder.Group>
						)}
						<button
							onClick={() => setShowModal(true)}
							className="px-2 py-1 text-sm bg-green-300 dark:bg-green-400 dark:text-slate-900 border cursor-pointer mt-4 self-end">
							Add new item +
						</button>
					</div>
				</div>
			</div>

			{createPortal(
				<AnimatePresence>
					{showModal ? (
						<ModalContent
							key="modal"
							prompt="Select an item for your workflow"
							onClose={() => setShowModal(false)}
							onSubmit={(item) => item && setItems((prev) => [...prev, item])}
						/>
					) : null}
				</AnimatePresence>,
				document.body
			)}
		</div>
	)
}
