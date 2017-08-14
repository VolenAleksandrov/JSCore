/**
 * Created by vo13n on 02-Aug-17.
 */
function attachEvents() {
    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    //Application settings
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_BkSVK7yDZ/';
    const username = 'peter';
    const pass = 'asdasd';

    //Dom elements
    const list = $('#posts');

    function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + pass)
            }
        });
    }

    function loadPosts() {
        request('posts')
            .then(fillSelect)
            .catch(handleError);

        function fillSelect(data) {
            list.empty();
            for(let post of data){
                $('<option>')
                    .text(post.title)
                    .val(post._id)
                    .appendTo(list);
            }
        }
    }

    function viewPost() {
        let postId = list.find('option:selected').val();
        let post = request('posts/' + postId);
        let commentsP = request(`comments/?query={"postId":"${postId}}"`);
        Promise.all([post, commentsP])
            .then(displayPostAndComments)
            .catch(handleError);

        function displayPostAndComments([data, comments]) {
            $('#post-title').text(data.title);
            $('#post-body').text(data.body);
            let list = $('#post-comments');
            for(let com of comments){
                list.append(`<li>${com.text}</li>`);
            }
        }
    }
    function handleError(error) {
        
    }
}