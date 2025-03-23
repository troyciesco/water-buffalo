import { Item } from "@/types"

type ContentProps = {
	items: Item[]
	selectedItemId: string
	onClick: (item: Item) => void
	onDoubleClick: (item: Item) => void
}

export function Content({
	items,
	selectedItemId,
	onClick,
	onDoubleClick
}: ContentProps) {
	return (
		<div className="md:p-4 p-1 max-h-[380px] overflow-y-scroll">
			{/* {loading && <div>loading</div>}
    {error && <div>error :(</div>} */}
			<div className="md:grid-cols-2 md:gap-8 grid gap-2">
				{items.length === 0 && (
					<div className="md:col-span-2 md:w-[712px] max-w-full">
						No items match the search criteria
					</div>
				)}
				{items.map((item) => (
					<button
						key={item.id}
						className={`flex items-center p-1 gap-2 cursor-pointer border-2 transition-all ${
							selectedItemId === item.id
								? "bg-primary-200 hover:bg-primary-300 dark:text-dark shadow-sm border-dashed"
								: "border-transparent bg-white dark:bg-dark-muted dark:hover:bg-primary-dark hover:bg-primary-100 relative before:absolute before:-inset-[2px] before:border before:pointer-events-none"
						}`}
						onClick={() => onClick(item)}
						onDoubleClick={() => onDoubleClick(item)}>
						<div className="max-w-15 h-15 md:w-20 md:h-20 md:max-w-20 w-full bg-gray-200 border"></div>
						<div className="text-left">
							<div className="md:text-lg font-bold">{item.name}</div>
							<div className="md:w-[240px] text-balance text-sm md:text-base">
								{item.description}
							</div>
						</div>
					</button>
				))}
			</div>
		</div>
	)
}
