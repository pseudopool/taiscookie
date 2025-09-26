import { sanityFetch } from "@/libs/sanity/live";
import { allPostsQuery } from "@/libs/sanity/queries";
import type { AllPostsQueryResult } from "@/libs/sanity/sanity.types";
import type { Post as PostType } from "@/types/post";
import Post from "./post";

const Posts = async () => {
	const { data } = await sanityFetch({
		query: allPostsQuery,
		tags: ["post", "author", "category"],
	});
	const allPosts = sanityDataToPosts(data);

	return (
		<ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
			{allPosts.map((post: PostType, index: number) => (
				<Post key={post.id} post={post} index={allPosts.length - index - 1} />
			))}
		</ul>
	);
};

export default Posts;

const sanityDataToPosts = (sanityData: AllPostsQueryResult): PostType[] =>
	sanityData.map((item) => ({
		title: item.title,
		date: item.date,
		id: item._id,
		slug: item.slug,
		excerpt: item.excerpt || "",
		image: formatImage(item.coverImage.asset?._ref || ""),
	}));

const formatImage = (ref: string) => {
	const [_, id, dimensions, format] = ref.split("-");
	const cdnUrl = "https://cdn.sanity.io/images/cw69nwtn/production/";
	return `${cdnUrl + id}-${dimensions}.${format}`;
};
