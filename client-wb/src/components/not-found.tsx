import obiWan from "@/assets/obi-wan.gif"

export function NotFound({
	message = "We couldn't find that resource"
}: {
	message?: string
}) {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<div className="text-9xl font-bold">404</div>
			<img
				className="mb-4"
				src={obiWan}
				alt={`Obi-Wan Kenobi waving his hand and saying "You don't need to see his identification" even though the text overlay says "These aren't the droids you're looking for"`}
			/>
			<div className="text-balance max-w-prose text-center">
				{message}, just like we couldn't find a gif where Obi-Wan's speech
				matches up with the text 😵‍💫.
			</div>
		</div>
	)
}
