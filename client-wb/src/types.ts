import { GetAllCategoriesQuery, GetAllTagsQuery } from "./__generated__/graphql"

export type FormErrors<T extends string> = {
	[K in T]?: string[]
}

export type Category = NonNullable<
	GetAllCategoriesQuery["allCategories"][number]
>

export type Item = NonNullable<
	GetAllCategoriesQuery["allCategories"][number]["items"][number]
>

export type Tag = NonNullable<GetAllTagsQuery["allTags"][number]>
