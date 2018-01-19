'use strict';

$(function() {
    $('#exec').click(function() {

        $.ajax('http://192.168.33.15:9000/v1/news',
            {
                type: 'get',
                data: {},
                dataType: 'json'
            }
        ).done(function (data) {
            var html = "";
            html += "<table border='1'>";
            html += "  <tr>";
            html += "    <th>ID</th>";
            html += "    <th>Title</th>";
            html += "    <th>Description</th>";
            html += "    <th>Crated at</th>";
            html += "    <th>Updated at</th>";
            html += "  </tr>";

            data.forEach(function(news) {
                html += "  <tr>";
                html += "    <td>" + news.id + "</td>";
                html += "    <td>" + news.title + "</td>";
                html += "    <td>" + news.description + "</td>";
                html += "    <td>" + news.created_at + "</td>";
                html += "    <td>" + news.updated_at + "</td>";
                html += "  </tr>";
            });

            html += "</table>";

            $('#result').html(html);
        });
    });


});