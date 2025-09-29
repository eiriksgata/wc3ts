#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 递归复制目录
function copyDir(src, dest) {
  // 创建目标目录
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // 读取源目录
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 复制 types 目录到 dist/types
try {
  const srcDir = path.join(__dirname, '..', 'types');
  const destDir = path.join(__dirname, '..', 'dist', 'types');

  console.log(`Copying ${srcDir} to ${destDir}`);
  copyDir(srcDir, destDir);
  console.log('Types copied successfully');
} catch (error) {
  console.error('Error copying types:', error);
  process.exit(1);
}