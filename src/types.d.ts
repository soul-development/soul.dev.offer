// src/env.d.ts
/// <reference types="astro/client" />

declare module '*.svg' {
  const src: string
  export default src
}