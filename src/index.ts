import fs from 'fs';
import path from 'path';
import { IApi } from 'umi';

export default function(api: IApi, options) {
  api.onBuildComplete(err => {
    if (err) {
      return;
    }
    // 创建一个 404 文件，因为 github pages 不支持单应用模式
    const { absOutputPath } = api.paths;
    fs.copyFileSync(path.join(absOutputPath, 'index.html'), path.join(absOutputPath, '404.html'));
    api.logger.info('create 404.html');
  });
}
