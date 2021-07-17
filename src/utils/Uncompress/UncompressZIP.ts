import JSZip from 'jszip';
import Uncompress from './Uncompress';
import UncompressError from './UncompressError';

class UncompressZIP extends Uncompress {
  // eslint-disable-next-line class-methods-use-this
  private isDir(fileName: string, archive: JSZip): Boolean {
    const archiveFile = archive.files[fileName];
    return Boolean(archiveFile.dir);
  }

  private async processFiles(archive: JSZip): Promise<Blob[]> {
    const files = await Promise.all(
      Object
        .keys(archive.files)
        .map(async (fileName) => {
          if (this.isDir(fileName, archive)) return undefined;

          const fileArchive = archive.file(fileName);
          const file = await fileArchive?.async('blob');

          return file;
        }),
    );

    const validFiles = files.filter((file) => file !== undefined) as Blob[];
    return validFiles;
  }

  async extract(): Promise<Blob[]> {
    try {
      const zip = new JSZip();
      const archive = await zip.loadAsync(this.file);
      const files = await this.processFiles(archive);
      return files;
    }

    catch (e) {
      throw new UncompressError(e.message);
    }
  }
}

export default UncompressZIP;
