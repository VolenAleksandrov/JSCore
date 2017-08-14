/**
 * Created by vo13n on 15-Jul-17.
 */
function solve() {
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.arrayOfComment = [];
        }

        addComment(comment){
            this.arrayOfComment.push(comment);
        }

        toString(){
            let output =  super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if(this.arrayOfComment.length > 0){
                output += "\nComments:";
                this.arrayOfComment.forEach(c => output += `\n * ${c}`);
            }

            return output;
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return `${super.toString()}\n` + `Views: ${this.views}`;
        }
    }
    return {Post,BlogPost, SocialMediaPost};
}

let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
