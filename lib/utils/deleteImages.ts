import fs from 'fs';
import path from 'path';

export async function deleteImages(imageUrls: string[]) {
  const baseDir = path.join(process.cwd(), 'public');

  for (const url of imageUrls) {
    try {
      // Extract the relative path from the URL
      const relativePath = url.replace(/^\/+/, '');
      const filePath = path.join(baseDir, relativePath);

      // Check if file exists before deleting
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
        console.log(`Deleted image: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error deleting image ${url}:`, error);
    }
  }
}
