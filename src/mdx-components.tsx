import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <div className="prose prose-invert prose-headings:font-title prose-headings:text-paper prose-p:text-paper/85 prose-strong:text-paper prose-a:text-lime prose-code:text-paper prose-pre:border prose-pre:border-paper/10 prose-pre:bg-paper/5 prose-hr:border-paper/15 max-w-none">
      {children}
    </div>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}