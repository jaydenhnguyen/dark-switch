// Declare modules for SCSS files
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// Declare modules for SVG files
declare module '*.svg' {
  const content: string;
  export default content;
}
