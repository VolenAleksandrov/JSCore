/**
 * Created by vo13n on 02-Jul-17.
 */
function getArticleGenerator(articles) {
    let contentHolder = $('#content');

    return function () {
        if (articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articles.shift()}</p>`));
            contentHolder.append(article);
        }
    }
}