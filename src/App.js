import React, { useEffect, useState } from "react";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx"
import ArticleListItem from "./ArticleListItem/ArticleListItem.jsx"
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

function App() {
    let { url } = useRouteMatch();

  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
          <Switch>

              


              <Route><ArticleList articles={Object.values(fetchedData)} /></Route>

      </Switch>
    </div>
  );
}

export default App;

