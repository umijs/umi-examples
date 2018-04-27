# with-unstated

## Getting Started

```bash
$ npm i
$ umi dev
```

## Notes

1. 通过 `umi-plugin-unstated.js` 改写了入口文件的 render 函数，避免路由切换导致 Provider 重复渲染
2. umi 默认的按需编译会刷新页面（[相关 issue](https://github.com/umijs/umi/issues/220))，如被此问题困扰，可先关闭按需编译运行，`COMPILE_ON_DEMAND=none umi dev`
