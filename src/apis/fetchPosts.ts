export const fetchPosts = async () =>
  await (
    await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          sorts: [
            {
              property: "date",
              direction: "descending",
            },
          ],
          filter: {
            property: "status",
            status: {
              equals: "published",
            },
          },
        }),
      }
    )
  ).json();
