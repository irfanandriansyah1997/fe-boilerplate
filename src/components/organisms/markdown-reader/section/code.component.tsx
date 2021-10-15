import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as Theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { IMarkdownContentProps } from '../interface';

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
    components={{
      code: CodeSection
    }}
  >
    {content}
  </ReactMarkdown>
);

export default MarkdownCode;
