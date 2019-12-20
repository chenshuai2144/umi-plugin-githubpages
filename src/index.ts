import fs from 'fs';
import path from 'path';
import { IApi } from 'umi-types';

export default function(api: IApi, options) {
  api.onBuildSuccess(() => {
    // 创建一个 404 文件，因为 github pages 不支持单应用模式
    const { absOutputPath } = api.paths;
    fs.copyFileSync(path.join(absOutputPath, 'index.html'), path.join(absOutputPath, '404.html'));
    api.log.success('create 404.html');
  });
}
