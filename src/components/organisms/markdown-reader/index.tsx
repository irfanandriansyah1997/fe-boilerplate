import { FC, lazy, Suspense } from 'react';

import { useMarkdownReader } from './hooks';
import { IMarkdownReaderProps } from './interface';

const MarkdownCode = lazy(() => import(`./section/code.component`));

/**
 * Markdown Reader Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const MarkdownReader: FC<IMarkdownReaderProps> = ({ markdownUrl }) => {
  const content = useMarkdownReader(markdownUrl);

  return (
    <Suspense fallback={null}>
      {content && content.content && <MarkdownCode content={content.content} />}
    </Suspense>
  );
};

export default MarkdownReader;
