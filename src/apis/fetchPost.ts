import { markdownToHtml } from "@/libs/markdown";
import { formatNotionPost } from "@/libs/presenter";

export const fetchPost = async (id: string) => {
  const post = await (
    await fetch(`https://api.notion.com/v1/pages/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        "Notion-Version": "2021-05-13",
      },
      method: "GET",
    })
  )
    .json()
    .then((post) => formatNotionPost(post));

  const markdown = await (
    await fetch(`https://api.notion.com/v1/blocks/${id}/children`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        "Notion-Version": "2021-05-13",
      },
      method: "GET",
    })
  )
    .json()
    .then((res) => res.results[0].code.text[0].plain_text);

  const content = await markdownToHtml(markdown || "");

  return { ...post, content };
};
