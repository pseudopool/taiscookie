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

    return new ImageResponse(
      (
        <div
          style={{
            background: 'rgb(0, 0, 126)',
            fontSize: 50,
            color: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: any) {
    console.log(error.message);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
