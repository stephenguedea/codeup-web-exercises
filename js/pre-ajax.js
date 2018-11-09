$(document).ready(function () {

    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: 'red'
        },
        {
            name: "Sally",
            favColor: 'blue'
        },
        {
            name: "Tom",
            favColor: 'yellow'
        }
    ];

    function buildHtml(peopleObjects) {
        var totalHtml = '<ul>';
        peopleObjects.forEach(function (person) {
            totalHtml += '<li>';
            totalHtml += person.name;
            totalHtml += "</li>";
        });
        totalHtml += "</ul>";
        return totalHtml;
    }

    $('#add-names-btn').click(function () {
        $('#names-list').html(buildHtml(people));
        $('#names-list').innerHTML;
    });

    // $('#add-names-btn').click(function () {
    //     alert('Button was clicked!');
    // });
    // $('#add-names-btn').click(function () {
    //     $('#names-list').html( function () {
    //         for (var i = 0; i < people.length; i++) {
    //             $('#names-list').show(people);
    //         }
    //     });
    // $('#add-names-btn').click(function () {
    //     // adds ul when button is clicked
    //     $('#names-list').append('<ul></ul>'); // may be a way to add ul and names all at one?
    //
    //     // Using .each, goes through each object
    //     $.each(people, function (i) {
    //         // adds li's and names to ul
    //         $('ul').append('<li>' + people[i].name + '</li>');
    //     });
    // });


});
