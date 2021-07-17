import 'jest-extended';
import path from 'path';

import { localFileToBlob } from '../../localFile';

import UncompressZIP from '../UncompressZIP';
import UncompressError from '../UncompressError';

const MOCK_PATH = path.join(__dirname, 'mocks');

describe('UncompressZIP test', () => {
  describe('when is a valid file', () => {
    it('should uncompress files', async () => {
      const fileName = 'uncompress.zip';
      const filePath = path.join(MOCK_PATH, fileName);
      const file = await localFileToBlob(filePath);

      const uncompressZIP = new UncompressZIP(file);
      const uncompressedFiles = await uncompressZIP.extract();

      expect(uncompressedFiles).toBeArray();
      expect(uncompressedFiles.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('when is an invalid file', () => {
    it('should throw a UncompressError', async () => {
      try {
        const fileName = 'data.json';
        const filePath = path.join(MOCK_PATH, fileName);
        const file = await localFileToBlob(filePath);

        const uncompressZIP = new UncompressZIP(file);
        await uncompressZIP.extract();
      }

      catch (e) {
        expect(e).toBeInstanceOf(UncompressError);
      }
    });
  });
});
