import {ImageResponse} from '@vercel/og';
import {NextRequest} from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  try {
    const {searchParams} = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : "Tai's Cookie";

    const backgroundImage = await fetch(
      new URL('../../../public/post-background.png', import.meta.url)
    ).then(res => res.arrayBuffer());

    const fontData = await fetch(
      new URL('../../../public/assets/Pretendard-black.ttf', import.meta.url)
    ).then(res => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={backgroundImage as unknown as string}
            style={{
              position: 'absolute',
              width: '100%',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
          <p
            style={{
              fontSize: 100,
              color: 'white',
              textAlign: 'center',
              padding: 100,
              textShadow: '0 0 50px rgba(63, 99, 134, 0.8)',
            }}
          >
            {title}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Pretendard',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (error: any) {
    console.log(error.message);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
