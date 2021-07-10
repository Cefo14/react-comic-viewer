/* eslint-disable import/prefer-default-export */

export const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const { result } = reader;
    if (result === null) return resolve(''); // TODO throw error
    return resolve(result.toString());
  };
  reader.onerror = (error) => reject(error);
});
