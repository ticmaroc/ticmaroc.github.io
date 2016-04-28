var numComments = numComments || 5,
    avatarSize = avatarSize || 60,
    showAvatar = typeof showAvatar === "undefined" ? true : showAvatar,
    roundAvatar = typeof roundAvatar === "undefined" ? true : roundAvatar;

function w2b_recent_comments(h) {
    var d;
    d = '<ul class="w2b_recent_comments">';
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
		else if (a.indexOf("blogblog.com/img/b16-rounded.gif") != -1) a = "http://3.bp.blogspot.com/-AaI8-1X32ZM/TxMKLVzQ5BI/AAAAAAAABYY/QYau8ov2blE/s" + avatarSize + "/w2b_blogger_logo.png";
         else if (a.indexOf("blogblog.com/img/blank.gif") != -1) a = "http://3.bp.blogspot.com/-AaI8-1X32ZM/TxMKLVzQ5BI/AAAAAAAABYY/QYau8ov2blE/s" + avatarSize + "/w2b_blogger_logo.png";
        if (showAvatar === true) {
            g = roundAvatar === true ? "avatarRound" : "";
            d += '<div class="avatarImage ' + g + '"><img class="' + g + '" src="' + a + '" alt="' + c + '" width="' + avatarSize + '" height="' + avatarSize + '"/></div>'
        }
        d += '<a href="' + f + '">' + c + "</a>";
        d += "<span>" + b + "</span>";
        d += "</li>"
    }
    document.write(d)
};
