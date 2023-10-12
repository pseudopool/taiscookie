const fetchRandomImage = async (count = 1) => {
  return await (
    await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=cat&count=${count}`
    )
  ).json();
};

export default fetchRandomImage;
