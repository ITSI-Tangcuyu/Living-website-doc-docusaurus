declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '@components/*';

declare module '@docusaurus/*';

declare module '@Components/global/*';

declare module '@theme/*';

declare module '@itsi/*';
