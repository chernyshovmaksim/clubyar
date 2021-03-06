/*!
 * mmenu-light v1.0.4
 * mmenujs.com/mmenu-light
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
var mmlight = function () {
    var e = function (e) {
        return Array.prototype.slice.call(e)
    }, t = function (t, n) {
        return e((n || document).querySelectorAll(t))
    }, n = function () {
        document.addEventListener("click", function (e) {
            var t = e.target;
            t.closest(".mm") && t.matches("a") && e.stopPropagation()
        }), document.addEventListener("click", function (t) {
            var n = t.target, m = n.closest(".mm");
            if (m) {
                var a = t.target.matches("li") ? n : !!n.matches("span") && n.parentElement;
                a && (t.stopPropagation(), a.parentElement.classList.add("mm--parent"), e(a.children).forEach(function (e) {
                    e.matches("ul") && m.mmenu.openPanel(e)
                }))
            }
        }), document.addEventListener("click", function (e) {
            var n = e.target;
            if (n.matches(".mm")) {
                e.stopPropagation();
                var m = t(".mm--open", n), a = m[m.length - 1];
                if (a) {
                    a.classList.remove("mm--open");
                    var r = a.parentElement.closest("ul");
                    r && n.mmenu.openPanel(r)
                }
            }
        }), document.addEventListener("click", function (e) {
            e.target.closest(".mm") || t(".mm.mm--open").forEach(function (t) {
                e.preventDefault(), t.mmenu.close()
            })
        })
    };
    return function (m) {
        n(), n = function () {
        };
        var a = null, r = function (e) {
            m.classList[e.matches ? "add" : "remove"]("mm")
        }, o = {
            create: function (e) {
                return void 0 === e && (e = "all"), "number" == typeof e && (e = "(max-width: " + e + "px)"), (a = window.matchMedia(e)).addListener(r), m.classList[a.matches ? "add" : "remove"]("mm"), o
            }, destroy: function () {
                return a.removeListener(r), m.classList.remove("mm"), o
            }, init: function (e) {
                var n = t(e, m), a = n[n.length - 1], r = null;
                return a && (r = a.closest("ul")), r || (r = m.querySelector("ul")), o.openPanel(r), o
            }, open: function () {
                return m.classList.add("mm--open"), o
            }, close: function () {
                return m.classList.remove("mm--open"), o
            }, openPanel: function (n) {
                n || (n = m.querySelector("ul"));
                var a = n.dataset.mmTitle, r = n.parentElement;
                r === m ? (m.classList.add("mm--home"), a || (a = "Клубный комплекс ЯР"), m.dataset.mmTitle = a) : (m.classList.remove("mm--home"), a || e(r.children).forEach(function (e) {
                    e.matches("a, span") && (a = e.textContent)
                }), a && (m.dataset.mmTitle = a)), t(".mm--open", m).forEach(function (e) {
                    e.classList.remove(".mm--open", "mm--parent")
                }), n.classList.add("mm--open"), n.classList.remove("mm--parent");
                for (var s = n.parentElement.closest("ul"); s;) s.classList.add("mm--open", "mm--parent"), s = s.parentElement.closest("ul");
                return o
            }
        };
        return m.mmenu = o, o
    }
}();