import React from "react";
import PropTypes from "prop-types";

import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
    



    return (
        

        <div><ArticleListItem article={props.articles[0]} /> 
            <ArticleListItem article={props.articles[1]} />
            <ArticleListItem article={props.articles[2]} />
            <ArticleListItem article={props.articles[3]} />
            <ArticleListItem article={props.articles[4]} />
            <ArticleListItem article={props.articles[5]} />
            <ArticleListItem article={props.articles[6]} />

            <ArticleListItem article={props.articles[7]} />
            <ArticleListItem article={props.articles[8]} />
            <ArticleListItem article={props.articles[9]} />
            <ArticleListItem article={props.articles[10]} />
            <ArticleListItem article={props.articles[11]} />

            <ArticleListItem article={props.articles[12]} />
            <ArticleListItem article={props.articles[13]} />
            <ArticleListItem article={props.articles[14]} />
            <ArticleListItem article={props.articles[15]} />
            <ArticleListItem article={props.articles[16]} />

            <ArticleListItem article={props.articles[17]} />
            <ArticleListItem article={props.articles[18]} />
            <ArticleListItem article={props.articles[19]} />
            <ArticleListItem article={props.articles[20]} />
            <ArticleListItem article={props.articles[21]} />

            <ArticleListItem article={props.articles[22]} />
            <ArticleListItem article={props.articles[23]} />
            <ArticleListItem article={props.articles[24]} />
            <ArticleListItem article={props.articles[25]} />
        </div>
    
        )

    ;


};

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
};

export default ArticleList;
