import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import Theme from 'react-syntax-highlighter/dist/esm/styles/prism/material-oceanic';
import remarkGfm from 'remark-gfm';

import { IMarkdownContentProps } from '../interface';

SyntaxHighlighter.registerLanguage(`js`, js);

/**
 * Code Section Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const CodeSection = ({ children, className, inline, node, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || ``);

  return !inline && match ? (
    <SyntaxHighlighter
      style={Theme}
      useInlineStyles
      ref={node as any}
      language={match[1]}
      PreTag="div"
      showLineNumbers
      {...props}
    >
      {String(children).replace(/\n$/, ``)}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

/**
 * Markdown Code Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const MarkdownCode: FC<IMarkdownContentProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      code: CodeSection
    }}
  >
    {content}
  </ReactMarkdown>
);

export default MarkdownCode;
