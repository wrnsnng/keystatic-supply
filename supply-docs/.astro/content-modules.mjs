
export default new Map([
["src/content/posts/first-post.mdoc", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fposts%2Ffirst-post.mdoc&astroContentModuleFlag=true")],
["src/content/posts/second-post.mdoc", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fposts%2Fsecond-post.mdoc&astroContentModuleFlag=true")],
["src/content/components/buttonia.mdoc", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fcomponents%2Fbuttonia.mdoc&astroContentModuleFlag=true")],
["src/content/components/test-component.mdoc", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fcomponents%2Ftest-component.mdoc&astroContentModuleFlag=true")],
["src/content/components/test2.mdoc", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fcomponents%2Ftest2.mdoc&astroContentModuleFlag=true")]]);
		