var numComments = numComments || 5,
    avatarSize = avatarSize || 60,
    characters = characters || 40,
    showAvatar = typeof showAvatar === "undefined" ? true : showAvatar,
    roundAvatar = typeof roundAvatar === "undefined" ? true : roundAvatar;

function tic_recent_comments(h) {
    var d;
    d = '<ul class="tic_recent_comments">';
    for (var e = 0; e < numComments; e++) {
        var f, c, a, g;
        if (e == h.feed.entry.length) break;
        d += "<li>";
        var b = h.feed.entry[e];
        for (c = 0; c < b.link.length; c++)
            if (b.link[c].rel == "alternate") {
                f = b.link[c].href;
                break
            }
        c = b.author[0].name.$t;
        a = b.author[0].gd$image.src;
        if (a.indexOf("/s512-c/") != -1) a = a.replace("/s512-c/", "/s" + avatarSize + "-c/");
		else if (a.indexOf("blogblog.com/img/b16-rounded.gif") != -1) a = "https://3.bp.blogspot.com/-C312WZhuNUs/VyvCxuadqnI/AAAAAAAAH8A/yPxV1LBOSdsGFp-iqQpqKEAoGJkKN28NQCLcB/s" + avatarSize + "/comment.png";
         else if (a.indexOf("blogblog.com/img/blank.gif") != -1) a = "https://3.bp.blogspot.com/-C312WZhuNUs/VyvCxuadqnI/AAAAAAAAH8A/yPxV1LBOSdsGFp-iqQpqKEAoGJkKN28NQCLcB/s" + avatarSize + "/comment.png";
       if (showAvatar === true) {
            g = roundAvatar === true ? "avatarRound" : "";
            d += '<div class="avatarImage ' + g + '"><img class="' + g + '" src="' + a + '" alt="' + c + '" width="' + avatarSize + '" height="' + avatarSize + '"/></div>'
        }
        d += '<a href="' + f + '">' + c + "</a>";
        b = b.content.$t.replace(/(<([^>]+)>)/ig, "");
        if (b !== "" && b.length > characters) {
            b = b.substring(0, characters);
            b += "…"
			}
        d += "<span>" + b + "</span>";
        d += "</li>"
    }
    document.write(d)
};
