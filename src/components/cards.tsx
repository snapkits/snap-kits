'use client';

import { Button } from './ui/button';

export function Cards(props: {
  title: string;
  content: string;
  actionButton: { key: string; value: string; href?: string }[];
}) {
  return (
    <div className='mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg'>
      <div className='space-y-6'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-black'>{props.title}</h2>
          <p className='font-light text-slate-600'>{props.content}</p>
        </div>
        <div className='space-x-4'>
          {props.actionButton.map((action) => {
            return (
              <div key={`${props.title}-${action.key}`}>
                <button className='group space-x-2 rounded-full border border-black bg-black px-4 py-2 text-sm font-semibold text-white hover:border-transparent hover:bg-stone-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2'>
                  <span>{action.value}</span>
                  <span className='inline-block transition-transform group-hover:-rotate-45 motion-reduce:transform-none'>
                    -&gt;
                  </span>
                </button>
              </div>
            );
          })}
          <Button>Space</Button>
        </div>
      </div>
    </div>
  );
}
