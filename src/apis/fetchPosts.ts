const fetchPosts = async () => {
  return await (
    await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          sorts: [
            {
              property: 'date',
              direction: 'descending',
            },
          ],
        }),
      }
    )
  ).json();
};

export default fetchPosts;
