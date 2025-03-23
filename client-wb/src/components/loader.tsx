export function Loader() {
	return (
		<div className="flex relative flex-col gap-4 justify-center items-center w-full">
			<div className="border-t-primary-400 text-primary-400 flex justify-center items-center w-28 h-28 text-4xl rounded-full border-8 border-gray-300 animate-spin"></div>
			<span className="absolute top-1/2 left-1/2 text-2xl animate-ping -translate-x-1/2 -translate-y-1/2">
				🐃
			</span>
		</div>
	)
}
