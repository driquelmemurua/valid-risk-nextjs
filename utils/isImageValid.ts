export function isImageValid(srcset: string, sizes: string): Promise<string> {
  let promise: Promise<string> = new Promise(resolve => {
    let img = document.createElement("img");
    img.onerror = () => resolve('');
    img.onload = () => resolve(img.currentSrc);
    img.sizes = sizes;
    img.srcset = srcset;
  });

  return promise;
}