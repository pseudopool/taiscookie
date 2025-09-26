import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

import Loading from "@/components/loading";
import PostDetail from "@/components/post/detail";
import { sanityFetch } from "@/libs/sanity/live";
import { postPagesSlugs, postQuery } from "@/libs/sanity/queries";
import { resolveOpenGraphImage } from "@/libs/sanity/utils";

type Props = {
	params: Promise<{ slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams(props: Props) {
	const params = await props.params;
	const { data } = await sanityFetch({
		query: postPagesSlugs,
		// Use the published perspective in generateStaticParams
		perspective: "published",
		stega: false,
		tags: [`post:${params.slug}`, "author", "category"],
	});
	return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
	props: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const params = await props.params;
	const { data: post } = await sanityFetch({
		query: postQuery,
		params,
		// Metadata should never contain stega
		stega: false,
		tags: [`post:${params.slug}`, "author", "category"],
	});
	const previousImages = (await parent).openGraph?.images || [];
	const ogImage = resolveOpenGraphImage(post?.coverImage);

	return {
		authors:
			post?.author?.firstName && post?.author?.lastName
				? [{ name: `${post.author.firstName} ${post.author.lastName}` }]
				: [],
		title: post?.title,
		description: post?.excerpt,
		openGraph: {
			images: ogImage ? [ogImage, ...previousImages] : previousImages,
		},
	} satisfies Metadata;
}

const PostPage = async (props: Props) => {
	const params = await props.params;
	const [{ data: post }] = await Promise.all([
		sanityFetch({
			query: postQuery,
			params,
			tags: [`post:${params.slug}`, "author", "category"],
		}),
	]);

	return (
		<section className="pb-8 flex flex-col max-w-screen-2xl w-full mx-auto">
			<Suspense fallback={<Loading />}>
				<PostDetail post={post} />
			</Suspense>
		</section>
	);
};

export default PostPage;
