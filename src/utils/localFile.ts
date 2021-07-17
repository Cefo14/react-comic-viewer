import fs from 'fs';
import fileType from 'file-type';

export const readLocalFile = async (filePath: string): Promise<Buffer> => (
  new Promise<Buffer>((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  })
);

export const toBlob = async (fileBuffer: Buffer): Promise<Blob> => {
  const currentFileType = await fileType.fromBuffer(fileBuffer);
  const currentFileMime = currentFileType?.mime;

  const fileBase64 = fileBuffer.toString('base64');
  const fileResponse = await fetch(`data:${currentFileMime};base64,${fileBase64}`);
  const blob = await fileResponse.blob();

  return blob;
};

export const localFileToBlob = async (filePath: string): Promise<Blob> => {
  const fileBuffer = await readLocalFile(filePath);
  const fileBlob = await toBlob(fileBuffer);
  return fileBlob;
};
