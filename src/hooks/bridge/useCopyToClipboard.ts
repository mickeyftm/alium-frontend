import copyToClipboard from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

const DEFAULT_DELAY = 3000;

export const useCopyToClipboard = (delay = DEFAULT_DELAY) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return () => undefined;

    const id = setTimeout(() => {
      setCopied(false);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, []);

  const handleCopy = useCallback(text => {
    setCopied(true);
    copyToClipboard(text);
  }, []);

  return [copied, handleCopy];
};
