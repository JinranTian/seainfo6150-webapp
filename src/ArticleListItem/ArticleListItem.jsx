import React from "react";
import PropTypes from "prop-types";


const ArticleListItem = (props) => {
    
    // title, displayDate, timeStamp, shortText


    return (

    <article>
        <header>
            <h1>{props.article.title}</h1>

                <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
                <br /><br />
                {props.article.shortText}
        </header>

    </article>

);

};

ArticleListItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default ArticleListItem;