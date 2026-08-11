import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `Bryan Smith - ${title}` : 'Bryan Smith';
  }, [title]);
};

export default usePageTitle;
