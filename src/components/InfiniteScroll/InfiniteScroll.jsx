import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import usePagination from "/src/hooks/usePagination";
import { HttpUtil } from "/src/utils";
import Card from "/src/components/commons/Card";

const InfiniteScroll = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(false);
  const PAGE_SIZE = 10;

  const fetchdata = async () => {
    setLoading(true);
    const res = await HttpUtil.makeGET(
      `https://api.fda.gov/food/enforcement.json?limit=${PAGE_SIZE}&&skip=${
        page * 10
      }`
    );
    setData([...data, ...res.data.results]);
    setPagination(res.data.meta?.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, [page]);

  const { itemsContainer } = usePagination({
    pageSize: PAGE_SIZE,
    page,
    setPage,
    loading,
    pagination,
    ...(process.browser && {
      scrollWindow: window,
    }),
  });

  return (
    <Grid container>
      <Grid item xs={12}><Typography>Infinite Scroll</Typography></Grid>
      <Grid item xs={12} container ref={itemsContainer} direction="row" alignItems="stretch" spacing={6}>
        {data.map((ele, i) => (
          <Grid item key={ele.center_classification_date + i} xs={12} sm={6} md={4} lg={3}>
            <Card data={ele} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <Grid>
          <Typography>Loading</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default InfiniteScroll;
