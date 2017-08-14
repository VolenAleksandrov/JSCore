/**
 * Created by vo13n on 18-Jul-17.
 */
class TitleBar{
    constructor(title){
        this.title = title;
        this.links = [];
        this.menu = {};
    }
    addLink(href, name){
        this.links.push($('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name));
    }
    appendTo(selector){
        let header = $('<header>').addClass('header');
        let headerRow = $('<div>').addClass('header-row');
        let button = $('<a>').addClass('button')
            .html('&#9776;')
            .click(()=>$('div.drawer').toggle());
        let span = $('<span>')
            .addClass('title')
            .text(this.title);
        let drawer = $('<div>')
            .addClass('drawer');
        let navMenu = $('<nav>')
            .addClass('menu');
        //Appending elements
        this.links.forEach(link => navMenu.append(link));
        headerRow.append(button);
        headerRow.append(span);
        drawer.append(navMenu);
        header.append(headerRow);
        header.append(drawer);
        $(selector).append(header);
    }
}