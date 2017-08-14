/**
 * Created by vo13n on 19-Jul-17.
 */
function listBuilder(selector) {
    return {
        createNewList(){
            $(selector).empty();
            $(selector).append($('<ul>'));
        },
        addItem(text){
            let li = $('<li>').text(text);
            li.append($('<button>Up</button>').click(this.buttonUp));
            li.append($('<button>Down</button>').click(this.buttonDown));
            $(selector + " ul").append(li);
        },
        buttonUp: function () {
            let li = $(this).parent();
            li.insertBefore(li.prev());
        },
        buttonDown: function () {
            let li = $(this).parent();
            li.insertAfter(li.next());
        }
    };
}