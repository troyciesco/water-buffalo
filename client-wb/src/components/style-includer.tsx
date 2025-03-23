/* 
This is a bit of a hack to make sure that certain classes that are created dynamically
end up included in the build. I'm sure there's a better way to do it in Tailwind v4
(like the theme static property) but i need to find it. Interestingly, this doesn't actually
even need to get added to any components that are sent to the DOM.
*/
export function StyleIncluder() {
	return (
		<span className="sr-only">
			<span className="alert-success"></span>
			<span className="alert-info"></span>
		</span>
	)
}
