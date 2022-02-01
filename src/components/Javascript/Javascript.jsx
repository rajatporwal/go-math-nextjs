import React from "react";
import JAVASCRIPT_CONFIG from "/src/config/javascriptConfig";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DataGrid } from '@mui/x-data-grid';

const Javascript = () => {
  const isAuthenticated = true;

  return (
    <Grid>
      {JAVASCRIPT_CONFIG.map((ele, i) => (
        <>
          <Box pt={3}>
            <Typography variant="TitleExtraSmall">{ele.heading}</Typography>
          </Box>
          <hr />
          {ele.children.map((child, i) => (
            <Grid>
              <Box display="flex" alignItems="center" mt={5}>
                <Typography
                  variant="SubtitleLarge"
                  refs={child.id}
                  id={child.id}
                  name={child.id}
                >
                  {child.title}
                </Typography>
                  {isAuthenticated && (
                    <AddCircleIcon
                      style={{ marginLeft: "1rem" }}
                      color="blue"
                      onClick={() =>
                        dispatch(
                          addTodo({
                            title: child.title,
                            category: "javascript",
                            hashId: child.id,
                          })
                        )
                      }
                    />
                  )}
              </Box>
              {child.description ? (
                <p dangerouslySetInnerHTML={{ __html: child.description }} />
              ) : null}
              {child.list && (
                <ul>
                  {child.list.map((v, i) => (
                    <li key={v + '' + i} dangerouslySetInnerHTML={{ __html: v }} />
                  ))}
                </ul>
              )}
              <Grid>
                {child.code &&
                  child.code.map((e) => (
                    <>
                      {e.title ? <p> - {e.title}</p> : null}
                      {e.code && (
                        <SyntaxHighlighter
                          language="javascript"
                          style={okaidia}
                          showLineNumbers
                        >
                          {e.code}
                        </SyntaxHighlighter>
                      )}
                    </>
                  ))}
              </Grid>
              <Grid>
                {child.table &&
                  child.table.map(t => (
                    <>
                      {t?.title && <p
                        dangerouslySetInnerHTML={{
                          __html: `- ${t.title}`,
                        }}
                      />}
                       <div style={{ height: 370 }}>
                      <DataGrid
                        columns={t.columns}
                        rows={t.data}
                        pageSize={5}
                        rowsPerPageOptions={[10]}
                      />
                      </div>
                    </>
                  ))}
              </Grid>
              {child.note && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: `Note: ${child.note}`,
                  }}
                />
              )}
            </Grid>
          ))}
        </>
      ))}
    </Grid>
  );
};

export default Javascript;
