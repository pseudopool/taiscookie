import { markdownToHtml } from "@/libs/markdown";
import { formatNotionPost } from "@/libs/presenter";

export const fetchPost = async (id: string) => {
  const [information, markdown] = await Promise.all([
    fetchInformation(id),
    fetchContent(id),
  ]);
  const content = await markdownToHtml(markdown || "");

  return { ...information, content };
};

const fetchInformation = async (id: string) => {
  const information = await (
    await fetch(`https://api.notion.com/v1/pages/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        "Notion-Version": "2021-05-13",
      },
      method: "GET",
      next: {
        revalidate: 3600,
      },
    })
  )
    .json()
    .then((post) => formatNotionPost(post));

  return information;
};

const fetchContent = async (id: string) => {
  const content = await (
    await fetch(`https://api.notion.com/v1/blocks/${id}/children`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        "Notion-Version": "2021-05-13",
      },
      method: "GET",
      next: {
        revalidate: 3600,
      },
    })
  )
    .json()
    .then((res) => res.results[0].code.text[0].plain_text);

  return content;
};
