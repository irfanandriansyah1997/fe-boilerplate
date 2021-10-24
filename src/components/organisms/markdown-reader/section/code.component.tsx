import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import Theme from 'react-syntax-highlighter/dist/esm/styles/prism/material-oceanic';
import remarkGfm from 'remark-gfm';

import { IMarkdownContentProps } from '../interface';

SyntaxHighlighter.registerLanguage(`jsx`, jsx);

/**
 * Code Section Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const CodeSection: CodeComponent = ({
  children,
  className,
  inline,
  node,
  ...props
}) => {
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
 * Image Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.22
 */
const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  alt,
  ...props
}) => <img {...props} alt={alt} loading="lazy" />;

/**
 * Markdown Code Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const MarkdownCode: FC<IMarkdownContentProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      code: CodeSection,
      img: Image as any
    }}
  >
    {content}
  </ReactMarkdown>
);

export default MarkdownCode;
