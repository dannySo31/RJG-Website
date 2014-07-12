

$(document).ready(function () {
    $('.scroll-pane').jScrollPane();

    $(".g1[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

    $(".g2[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

    $(".vid1[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
    $("#smLinks a img").css({ opacity: 0.5 });
    $("#smLinks a img").hover(
            function () {
                $(this).animate({ top: "-15" });
                $(this).css({ opacity: 1 });
            },
            function () {
                $(this).animate({ top: "0" });
                $(this).css({ opacity: 0.5 });
            }
        );
    //     $('#news').trigger('click');
   //  clearDiv(document.getElementById('statement'));
   //  getGallery();

    //    $('#lnkPhotos').click(function () {
    //        var divPictures = document.getElementById('divPictures');
    //        clearDiv(divPictures);
    //        getGallery();
    //      

    //      
    //    });
    document.getElementById('statement').innerHTML = setStatement();

});
function getGallery() {
   

    $.getJSON('ajax/photoGallery.json', function (data) {
        //create a table
        alert('gbg');
        var divPictures = document.getElementById('divPictures');
        clearDiv(divPictures);
        $.each(data.Gallery, function (index, item) {

            var table = document.createElement('table');
            var tr = document.createElement('tr');
            var tdTitle = document.createElement('td');
            tdTitle.className = 'galleryTitle';
            tdTitle.innerHTML = item.title;
            var tdPics = document.createElement('td');
            $.each(item.members, function (index2, item2) {
                var a = document.createElement('a');
                a.setAttribute('href', item2.href);
                a.className = item.class
                a.setAttribute('rel', item2.rel);
                a.setAttribute('title', item2.title);
                var img = document.createElement('img');
                img.src = item2.imgSrc;
                img.setAttribute('alt', item2.imgAlt);
                img.setAttribute('width', '60');
                img.setAttribute('height', '60');
                a.appendChild(img);
                tdPics.appendChild(a);
                a.onclick = function () {
                    $.prettyPhoto.open(item2.href, item2.title, item2.imgAlt);
                };

            });


            tr.appendChild(tdTitle);
            tr.appendChild(tdPics);
            table.appendChild(tr);
            divPictures.appendChild(table);
            divPictures.appendChild(document.createElement('hr'));
        });

        $(".g1[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });

        $(".g2[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
    });

}
function setStatement() {
    var randomNumber, statemnt;
    randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber > 90) {
        statemnt = '<h2>"Leadership is not title..<br /><br />It is not position..<br /><br />It is action."</h2>';
    } else if (randomNumber > 60) {
        statemnt = '<h2>"What this country needs<br />is not a change OF Men..<br /><br />but a change IN Men"</h2>';
    } else if (randomNumber > 30) {
        statemnt = '<h3>"There are no UGLY WOMEN; Only WOMEN who do not know how to look beautiful..<br /><br />So to with MEN, so to with COUNTRIES."</h3>';
    } else {
        statemnt = '"Humanitarianism must be practiced everyday like law and medicine. <br /><br />If you do not practice it, you lose part of your soul<br /><br />- And nobody\'s going to take my soul away.."';
    }
    return statemnt;

}

function clearDiv(oDiv) {
    while (oDiv.hasChildNodes()) {
        oDiv.removeChild(oDiv.lastChild);
    }
}