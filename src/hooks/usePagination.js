import _ from 'lodash';
import { useEffect, useRef } from 'react';

const usePagination = ({
  pageSize = 12,
  page = 0,
  setPage,
  loading,
  pagination,
  scrollWindow
}) => {
  const itemsContainer = useRef(null);

  // handle on scroll event, with throttle of 500ms, so method is not getting called too frequently.
  const handleScroll = _.throttle(() => {
    // if the API is still requested, don't try another call
    if (loading) return;
    const containerHeight = itemsContainer?.current?.clientHeight;
    const pageOffset = window.pageYOffset + pageSize * 120;
    const totalItemsCount = pagination?.total || 0;
    const totalItemsLoaded = pageSize * (page + 1);

    // if the height is in favour, and we have paging information, and there are items to be loaded, call the API
    if (
      pageOffset > containerHeight &&
      pagination &&
      Object.keys(pagination).length &&
      totalItemsCount > totalItemsLoaded
    ) {
      setPage(pagination.skip / 10 + 1);
    }
  }, 500);

  // bind and unbind events to listen for scrolls!
  useEffect(() => {
    if (!scrollWindow) {
      scrollWindow = itemsContainer?.current;
    }

    scrollWindow?.addEventListener('scroll', handleScroll);
    return () => scrollWindow?.removeEventListener('scroll', handleScroll);
  }, [pagination, handleScroll, itemsContainer, scrollWindow]);

  return {
    itemsContainer
  };
};

export default usePagination;
