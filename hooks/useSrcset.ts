import { useState, useEffect } from 'react';

type useSrcsetParams = {
  placeholder: string
  srcs: {
    url: string
    width: number
  }[]
  sizes: string
}

export function useSrcset({ placeholder, srcs, sizes = '100vw' }: useSrcsetParams) {
  const [src, setSrc] = useState(placeholder);

  useEffect(() => {
    const srcset = srcs.reduce((srcset, src) => srcset + `${src.url} ${src.width}w, `, '');
    const imgEl = document.createElement('img');
    // @ts-ignore
    imgEl.addEventListener('load', ({ target: { currentSrc } }) => setSrc(currentSrc));
    imgEl.setAttribute('sizes', sizes);
    imgEl.setAttribute('srcset', srcset);
  }, []);

  return src;
}