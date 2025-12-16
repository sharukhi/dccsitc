export function parseMarkdown(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold mb-2 mt-4 text-foreground">$1</h3>')
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mb-3 mt-5 text-foreground">$1</h2>')
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold mb-4 mt-6 text-foreground">$1</h1>')

  // Bold and Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
  html = html.replace(/__(.*?)__/g, '<strong class="font-bold">$1</strong>')
  html = html.replace(/_(.*?)_/g, '<em class="italic">$1</em>')

  // Code blocks
  html = html.replace(
    /```([\s\S]*?)```/g,
    '<pre class="bg-card px-4 py-2 rounded block text-sm text-accent font-mono overflow-x-auto mb-4"><code>$1</code></pre>',
  )

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-card px-2 py-1 rounded text-sm text-accent font-mono">$1</code>')

  // Links
  html = html.replace(
    /\[(.*?)\]$$(.*?)$$/g,
    '<a href="$2" class="text-accent hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
  )

  // Blockquotes
  html = html.replace(
    /^> (.*?)$/gm,
    '<blockquote class="border-l-4 border-accent pl-4 py-2 mb-4 text-muted-foreground italic">$1</blockquote>',
  )

  // Lists - Unordered
  html = html.replace(/^\s*[*\-+] (.*?)$/gm, '<li class="text-muted-foreground ml-6">$1</li>')
  html = html.replace(
    /(<li class="text-muted-foreground ml-6">.*?<\/li>(?:\n|$))+/gm,
    (match) => `<ul class="list-disc space-y-2 mb-4">${match}</ul>`,
  )

  // Lists - Ordered
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="text-muted-foreground ml-6">$1</li>')
  html = html.replace(/(?:<li class="text-muted-foreground ml-6">.*?<\/li>\n?)+/gm, (match) => {
    const hasOrderedPrefix = /^\d+\./.test(match)
    if (hasOrderedPrefix) {
      return `<ol class="list-decimal space-y-2 mb-4">${match}</ol>`
    }
    return match
  })

  // Paragraphs
  const lines = html.split("\n")
  let inBlock = false
  html = lines
    .map((line) => {
      if (
        line.trim().startsWith("<h") ||
        line.trim().startsWith("<ul") ||
        line.trim().startsWith("</ul") ||
        line.trim().startsWith("<ol") ||
        line.trim().startsWith("</ol") ||
        line.trim().startsWith("<blockquote") ||
        line.trim().startsWith("</blockquote") ||
        line.trim().startsWith("<pre") ||
        line.trim().startsWith("</pre") ||
        line.trim().startsWith("<li") ||
        line.trim() === ""
      ) {
        inBlock = true
        return line
      }
      if (line.trim() !== "" && !inBlock) {
        return `<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`
      }
      inBlock = false
      return line
    })
    .join("\n")

  return html
}
