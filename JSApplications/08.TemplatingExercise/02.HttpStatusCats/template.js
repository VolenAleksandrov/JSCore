$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        $('.btn-primary').click(showMessage);
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);

        function showMessage() {
            //this.html()
            //let div = this.next();
            console.log(this.parent());
        }
    }

});
