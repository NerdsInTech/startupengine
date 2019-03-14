!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i
        });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 6));
})([
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(7);
  },
  function(e, t, n) {
    (window.ResizeSensor = n(8)), n(9);
    var i = n(10);
    i.registerLanguage("http", n(11)),
      i.registerLanguage("json", n(12)),
      $(document).ready(function() {
        var e = new StickySidebar(".sidebar", {
          topSpacing: 22,
          bottomSpacing: 0,
          containerSelector: ".content-wrapper",
          innerWrapperSelector: ".sidebar__inner",
          resizeSensor: !0
        });
        $(window).resize(function() {
          e.updateSticky();
        }),
          $("[id^=collapse-]").on("show.bs.collapse", function() {
            var e = $(this)
                .prev()
                .find("a")
                .data("group-id"),
              t = $(document.getElementById(e)).offset().top - 33;
            $("html, body").animate({ scrollTop: t });
          }),
          $("[id^=collapse-]").on("hide.bs.collapse", function(e) {
            var t = $(this)
                .prev()
                .find("a")
                .data("group-id"),
              n = $(document.getElementById(t)).offset().top - 33;
            $("html, body").animate({ scrollTop: n }),
              ($(window).scrollTop() < n - 1 ||
                $(window).scrollTop() > n + 1) &&
                e.preventDefault();
          }),
          $(".tabs").on("click", "a", function(e) {
            var t = $(this)
                .attr("href")
                .substring(1),
              n = $(document.getElementById(t)).offset().top - 33;
            $("html, body").animate({ scrollTop: n }), e.preventDefault();
          }),
          $(".nav-pills").on("click", ".active a", function(e) {
            var t = $(this);
            e.preventDefault(),
              window.setTimeout(function() {
                t
                  .closest(".nav-pills")
                  .next(".tab-content")
                  .find(".tab-pane")
                  .removeClass("active"),
                  t.parent("li").removeClass("active");
              }, 0);
          }),
          $("pre code").each(function(e, t) {
            i.highlightBlock(t);
          });
      });
  },
  function(e, t, n) {
    "use strict";
    var i, r;
    "undefined" != typeof window && window,
      void 0 ===
        (r =
          "function" ==
          typeof (i = function() {
            if ("undefined" == typeof window) return null;
            var e =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function(e) {
                return window.setTimeout(e, 20);
              };
            function t(e, t) {
              var n = Object.prototype.toString.call(e),
                i =
                  "[object Array]" === n ||
                  "[object NodeList]" === n ||
                  "[object HTMLCollection]" === n ||
                  "[object Object]" === n ||
                  ("undefined" != typeof jQuery && e instanceof jQuery) ||
                  ("undefined" != typeof Elements && e instanceof Elements),
                r = 0,
                s = e.length;
              if (i) for (; r < s; r++) t(e[r]);
              else t(e);
            }
            function n(e) {
              if (!e.getBoundingClientRect)
                return { width: e.offsetWidth, height: e.offsetHeight };
              var t = e.getBoundingClientRect();
              return {
                width: Math.round(t.width),
                height: Math.round(t.height)
              };
            }
            var i = function(r, s) {
              t(r, function(t) {
                !(function(t, i) {
                  if (t)
                    if (t.resizedAttached) t.resizedAttached.add(i);
                    else {
                      (t.resizedAttached = new function() {
                        var e,
                          t,
                          n = [];
                        (this.add = function(e) {
                          n.push(e);
                        }),
                          (this.call = function() {
                            for (e = 0, t = n.length; e < t; e++) n[e].call();
                          }),
                          (this.remove = function(i) {
                            var r = [];
                            for (e = 0, t = n.length; e < t; e++)
                              n[e] !== i && r.push(n[e]);
                            n = r;
                          }),
                          (this.length = function() {
                            return n.length;
                          });
                      }()),
                        t.resizedAttached.add(i),
                        (t.resizeSensor = document.createElement("div")),
                        (t.resizeSensor.dir = "ltr"),
                        (t.resizeSensor.className = "resize-sensor");
                      var r =
                          "position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                        s =
                          "position: absolute; left: 0; top: 0; transition: 0s;";
                      (t.resizeSensor.style.cssText = r),
                        (t.resizeSensor.innerHTML =
                          '<div class="resize-sensor-expand" style="' +
                          r +
                          '"><div style="' +
                          s +
                          '"></div></div><div class="resize-sensor-shrink" style="' +
                          r +
                          '"><div style="' +
                          s +
                          ' width: 200%; height: 200%"></div></div>'),
                        t.appendChild(t.resizeSensor);
                      var o = window
                        .getComputedStyle(t)
                        .getPropertyValue("position");
                      "absolute" !== o &&
                        "relative" !== o &&
                        "fixed" !== o &&
                        (t.style.position = "relative");
                      var a,
                        c,
                        l = t.resizeSensor.childNodes[0],
                        d = l.childNodes[0],
                        u = t.resizeSensor.childNodes[1],
                        p = n(t),
                        h = p.width,
                        f = p.height,
                        g = function() {
                          var e = 0 === t.offsetWidth && 0 === t.offsetHeight;
                          if (e) {
                            var n = t.style.display;
                            t.style.display = "block";
                          }
                          (d.style.width = "100000px"),
                            (d.style.height = "100000px"),
                            (l.scrollLeft = 1e5),
                            (l.scrollTop = 1e5),
                            (u.scrollLeft = 1e5),
                            (u.scrollTop = 1e5),
                            e && (t.style.display = n);
                        };
                      t.resizeSensor.resetSensor = g;
                      var v = function() {
                          (c = 0),
                            a &&
                              ((h = void 0),
                              (f = void 0),
                              t.resizedAttached && t.resizedAttached.call());
                        },
                        m = function() {
                          var i = n(t),
                            r = i.width,
                            s = i.height;
                          (a = r != h || s != f) && !c && (c = e(v)), g();
                        },
                        b = function(e, t, n) {
                          e.attachEvent
                            ? e.attachEvent("on" + t, n)
                            : e.addEventListener(t, n);
                        };
                      b(l, "scroll", m), b(u, "scroll", m), e(g);
                    }
                })(t, s);
              }),
                (this.detach = function(e) {
                  i.detach(r, e);
                }),
                (this.reset = function() {
                  r.resizeSensor.resetSensor();
                });
            };
            return (
              (i.reset = function(e, n) {
                t(e, function(e) {
                  e.resizeSensor.resetSensor();
                });
              }),
              (i.detach = function(e, n) {
                t(e, function(e) {
                  e &&
                    ((e.resizedAttached &&
                      "function" == typeof n &&
                      (e.resizedAttached.remove(n),
                      e.resizedAttached.length())) ||
                      (e.resizeSensor &&
                        (e.contains(e.resizeSensor) &&
                          e.removeChild(e.resizeSensor),
                        delete e.resizeSensor,
                        delete e.resizedAttached)));
                });
              }),
              i
            );
          })
            ? i.call(t, n, t, e)
            : i) || (e.exports = r);
  },
  function(e, t, n) {
    var i;
    (i = function() {
      "use strict";
      var e = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      var t,
        n,
        i = ((t = ".stickySidebar"),
        (n = {
          topSpacing: 0,
          bottomSpacing: 0,
          containerSelector: !1,
          innerWrapperSelector: ".inner-wrapper-sticky",
          stickyClass: "is-affixed",
          resizeSensor: !0,
          minWidth: !1
        }),
        (function() {
          function i(e) {
            var t = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (
              ((function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              (this.options = i.extend(n, r)),
              (this.sidebar =
                "string" == typeof e ? document.querySelector(e) : e),
              void 0 === this.sidebar)
            )
              throw new Error("There is no specific sidebar element.");
            (this.sidebarInner = !1),
              (this.container = this.sidebar.parentElement),
              (this.affixedType = "STATIC"),
              (this.direction = "down"),
              (this.support = { transform: !1, transform3d: !1 }),
              (this._initialized = !1),
              (this._reStyle = !1),
              (this._breakpoint = !1),
              (this._resizeListeners = []),
              (this.dimensions = {
                translateY: 0,
                topSpacing: 0,
                lastTopSpacing: 0,
                bottomSpacing: 0,
                lastBottomSpacing: 0,
                sidebarHeight: 0,
                sidebarWidth: 0,
                containerTop: 0,
                containerHeight: 0,
                viewportHeight: 0,
                viewportTop: 0,
                lastViewportTop: 0
              }),
              ["handleEvent"].forEach(function(e) {
                t[e] = t[e].bind(t);
              }),
              this.initialize();
          }
          return (
            e(
              i,
              [
                {
                  key: "initialize",
                  value: function() {
                    var e = this;
                    if (
                      (this._setSupportFeatures(),
                      this.options.innerWrapperSelector &&
                        ((this.sidebarInner = this.sidebar.querySelector(
                          this.options.innerWrapperSelector
                        )),
                        null === this.sidebarInner && (this.sidebarInner = !1)),
                      !this.sidebarInner)
                    ) {
                      var t = document.createElement("div");
                      for (
                        t.setAttribute("class", "inner-wrapper-sticky"),
                          this.sidebar.appendChild(t);
                        this.sidebar.firstChild != t;

                      )
                        t.appendChild(this.sidebar.firstChild);
                      this.sidebarInner = this.sidebar.querySelector(
                        ".inner-wrapper-sticky"
                      );
                    }
                    if (this.options.containerSelector) {
                      var n = document.querySelectorAll(
                        this.options.containerSelector
                      );
                      if (
                        ((n = Array.prototype.slice.call(n)).forEach(function(
                          t,
                          n
                        ) {
                          t.contains(e.sidebar) && (e.container = t);
                        }),
                        !n.length)
                      )
                        throw new Error(
                          "The container does not contains on the sidebar."
                        );
                    }
                    "function" != typeof this.options.topSpacing &&
                      (this.options.topSpacing =
                        parseInt(this.options.topSpacing) || 0),
                      "function" != typeof this.options.bottomSpacing &&
                        (this.options.bottomSpacing =
                          parseInt(this.options.bottomSpacing) || 0),
                      this._widthBreakpoint(),
                      this.calcDimensions(),
                      this.stickyPosition(),
                      this.bindEvents(),
                      (this._initialized = !0);
                  }
                },
                {
                  key: "bindEvents",
                  value: function() {
                    window.addEventListener("resize", this, {
                      passive: !0,
                      capture: !1
                    }),
                      window.addEventListener("scroll", this, {
                        passive: !0,
                        capture: !1
                      }),
                      this.sidebar.addEventListener("update" + t, this),
                      this.options.resizeSensor &&
                        "undefined" != typeof ResizeSensor &&
                        (new ResizeSensor(this.sidebarInner, this.handleEvent),
                        new ResizeSensor(this.container, this.handleEvent));
                  }
                },
                {
                  key: "handleEvent",
                  value: function(e) {
                    this.updateSticky(e);
                  }
                },
                {
                  key: "calcDimensions",
                  value: function() {
                    if (!this._breakpoint) {
                      var e = this.dimensions;
                      (e.containerTop = i.offsetRelative(this.container).top),
                        (e.containerHeight = this.container.clientHeight),
                        (e.containerBottom =
                          e.containerTop + e.containerHeight),
                        (e.sidebarHeight = this.sidebarInner.offsetHeight),
                        (e.sidebarWidth = this.sidebar.offsetWidth),
                        (e.viewportHeight = window.innerHeight),
                        this._calcDimensionsWithScroll();
                    }
                  }
                },
                {
                  key: "_calcDimensionsWithScroll",
                  value: function() {
                    var e = this.dimensions;
                    (e.sidebarLeft = i.offsetRelative(this.sidebar).left),
                      (e.viewportTop =
                        document.documentElement.scrollTop ||
                        document.body.scrollTop),
                      (e.viewportBottom = e.viewportTop + e.viewportHeight),
                      (e.viewportLeft =
                        document.documentElement.scrollLeft ||
                        document.body.scrollLeft),
                      (e.topSpacing = this.options.topSpacing),
                      (e.bottomSpacing = this.options.bottomSpacing),
                      "function" == typeof e.topSpacing &&
                        (e.topSpacing =
                          parseInt(e.topSpacing(this.sidebar)) || 0),
                      "function" == typeof e.bottomSpacing &&
                        (e.bottomSpacing =
                          parseInt(e.bottomSpacing(this.sidebar)) || 0),
                      "VIEWPORT-TOP" === this.affixedType
                        ? e.topSpacing < e.lastTopSpacing &&
                          ((e.translateY += e.lastTopSpacing - e.topSpacing),
                          (this._reStyle = !0))
                        : "VIEWPORT-BOTTOM" === this.affixedType &&
                          e.bottomSpacing < e.lastBottomSpacing &&
                          ((e.translateY +=
                            e.lastBottomSpacing - e.bottomSpacing),
                          (this._reStyle = !0)),
                      (e.lastTopSpacing = e.topSpacing),
                      (e.lastBottomSpacing = e.bottomSpacing);
                  }
                },
                {
                  key: "isSidebarFitsViewport",
                  value: function() {
                    return (
                      this.dimensions.sidebarHeight <
                      this.dimensions.viewportHeight
                    );
                  }
                },
                {
                  key: "observeScrollDir",
                  value: function() {
                    var e = this.dimensions;
                    if (e.lastViewportTop !== e.viewportTop) {
                      var t = "down" === this.direction ? Math.min : Math.max;
                      e.viewportTop === t(e.viewportTop, e.lastViewportTop) &&
                        (this.direction =
                          "down" === this.direction ? "up" : "down");
                    }
                  }
                },
                {
                  key: "getAffixType",
                  value: function() {
                    var e = this.dimensions,
                      t = !1;
                    this._calcDimensionsWithScroll();
                    var n = e.sidebarHeight + e.containerTop,
                      i = e.viewportTop + e.topSpacing,
                      r = e.viewportBottom - e.bottomSpacing;
                    return (
                      "up" === this.direction
                        ? i <= e.containerTop
                          ? ((e.translateY = 0), (t = "STATIC"))
                          : i <= e.translateY + e.containerTop
                          ? ((e.translateY = i - e.containerTop),
                            (t = "VIEWPORT-TOP"))
                          : !this.isSidebarFitsViewport() &&
                            e.containerTop <= i &&
                            (t = "VIEWPORT-UNBOTTOM")
                        : this.isSidebarFitsViewport()
                        ? e.sidebarHeight + i >= e.containerBottom
                          ? ((e.translateY = e.containerBottom - n),
                            (t = "CONTAINER-BOTTOM"))
                          : i >= e.containerTop &&
                            ((e.translateY = i - e.containerTop),
                            (t = "VIEWPORT-TOP"))
                        : e.containerBottom <= r
                        ? ((e.translateY = e.containerBottom - n),
                          (t = "CONTAINER-BOTTOM"))
                        : n + e.translateY <= r
                        ? ((e.translateY = r - n), (t = "VIEWPORT-BOTTOM"))
                        : e.containerTop + e.translateY <= i &&
                          (t = "VIEWPORT-UNBOTTOM"),
                      (e.translateY = Math.max(0, e.translateY)),
                      (e.translateY = Math.min(
                        e.containerHeight,
                        e.translateY
                      )),
                      (e.lastViewportTop = e.viewportTop),
                      t
                    );
                  }
                },
                {
                  key: "_getStyle",
                  value: function(e) {
                    if (void 0 !== e) {
                      var t = { inner: {}, outer: {} },
                        n = this.dimensions;
                      switch (e) {
                        case "VIEWPORT-TOP":
                          t.inner = {
                            position: "fixed",
                            top: n.topSpacing,
                            left: n.sidebarLeft - n.viewportLeft,
                            width: n.sidebarWidth
                          };
                          break;
                        case "VIEWPORT-BOTTOM":
                          t.inner = {
                            position: "fixed",
                            top: "auto",
                            left: n.sidebarLeft,
                            bottom: n.bottomSpacing,
                            width: n.sidebarWidth
                          };
                          break;
                        case "CONTAINER-BOTTOM":
                        case "VIEWPORT-UNBOTTOM":
                          var r = this._getTranslate(0, n.translateY + "px");
                          t.inner = r
                            ? { transform: r }
                            : {
                                position: "absolute",
                                top: n.translateY,
                                width: n.sidebarWidth
                              };
                      }
                      switch (e) {
                        case "VIEWPORT-TOP":
                        case "VIEWPORT-BOTTOM":
                        case "VIEWPORT-UNBOTTOM":
                        case "CONTAINER-BOTTOM":
                          t.outer = {
                            height: n.sidebarHeight,
                            position: "relative"
                          };
                      }
                      return (
                        (t.outer = i.extend(
                          { height: "", position: "" },
                          t.outer
                        )),
                        (t.inner = i.extend(
                          {
                            position: "relative",
                            top: "",
                            left: "",
                            bottom: "",
                            width: "",
                            transform: this._getTranslate()
                          },
                          t.inner
                        )),
                        t
                      );
                    }
                  }
                },
                {
                  key: "stickyPosition",
                  value: function(e) {
                    if (!this._breakpoint) {
                      e = this._reStyle || e || !1;
                      var n = this.getAffixType(),
                        r = this._getStyle(n);
                      if ((this.affixedType != n || e) && n) {
                        var s =
                          "affix." +
                          n.toLowerCase().replace("viewport-", "") +
                          t;
                        for (var o in (i.eventTrigger(this.sidebar, s),
                        "STATIC" === n
                          ? i.removeClass(
                              this.sidebar,
                              this.options.stickyClass
                            )
                          : i.addClass(this.sidebar, this.options.stickyClass),
                        r.outer))
                          this.sidebar.style[o] = r.outer[o];
                        for (var a in r.inner) {
                          var c = "number" == typeof r.inner[a] ? "px" : "";
                          this.sidebarInner.style[a] = r.inner[a] + c;
                        }
                        var l =
                          "affixed." +
                          n.toLowerCase().replace("viewport-", "") +
                          t;
                        i.eventTrigger(this.sidebar, l);
                      } else
                        this._initialized &&
                          (this.sidebarInner.style.left = r.inner.left);
                      this.affixedType = n;
                    }
                  }
                },
                {
                  key: "_widthBreakpoint",
                  value: function() {
                    window.innerWidth <= this.options.minWidth
                      ? ((this._breakpoint = !0),
                        (this.affixedType = "STATIC"),
                        this.sidebar.removeAttribute("style"),
                        i.removeClass(this.sidebar, this.options.stickyClass),
                        this.sidebarInner.removeAttribute("style"))
                      : (this._breakpoint = !1);
                  }
                },
                {
                  key: "updateSticky",
                  value: function() {
                    var e,
                      t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    this._running ||
                      ((this._running = !0),
                      (e = n.type),
                      requestAnimationFrame(function() {
                        switch (e) {
                          case "scroll":
                            t._calcDimensionsWithScroll(),
                              t.observeScrollDir(),
                              t.stickyPosition();
                            break;
                          case "resize":
                          default:
                            t._widthBreakpoint(),
                              t.calcDimensions(),
                              t.stickyPosition(!0);
                        }
                        t._running = !1;
                      }));
                  }
                },
                {
                  key: "_setSupportFeatures",
                  value: function() {
                    var e = this.support;
                    (e.transform = i.supportTransform()),
                      (e.transform3d = i.supportTransform(!0));
                  }
                },
                {
                  key: "_getTranslate",
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0;
                    return this.support.transform3d
                      ? "translate3d(" + e + ", " + t + ", " + n + ")"
                      : !!this.support.translate &&
                          "translate(" + e + ", " + t + ")";
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    window.removeEventListener("resize", this, { caption: !1 }),
                      window.removeEventListener("scroll", this, {
                        caption: !1
                      }),
                      this.sidebar.classList.remove(this.options.stickyClass),
                      (this.sidebar.style.minHeight = ""),
                      this.sidebar.removeEventListener("update" + t, this);
                    var e = { inner: {}, outer: {} };
                    for (var n in ((e.inner = {
                      position: "",
                      top: "",
                      left: "",
                      bottom: "",
                      width: "",
                      transform: ""
                    }),
                    (e.outer = { height: "", position: "" }),
                    e.outer))
                      this.sidebar.style[n] = e.outer[n];
                    for (var i in e.inner)
                      this.sidebarInner.style[i] = e.inner[i];
                    this.options.resizeSensor &&
                      "undefined" != typeof ResizeSensor &&
                      (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
                      ResizeSensor.detach(this.container, this.handleEvent));
                  }
                }
              ],
              [
                {
                  key: "supportTransform",
                  value: function(e) {
                    var t = !1,
                      n = e ? "perspective" : "transform",
                      i = n.charAt(0).toUpperCase() + n.slice(1),
                      r = document.createElement("support").style;
                    return (
                      (n + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i)
                        .split(" ")
                        .forEach(function(e, n) {
                          if (void 0 !== r[e]) return (t = e), !1;
                        }),
                      t
                    );
                  }
                },
                {
                  key: "eventTrigger",
                  value: function(e, t, n) {
                    try {
                      var i = new CustomEvent(t, { detail: n });
                    } catch (e) {
                      (i = document.createEvent("CustomEvent")).initCustomEvent(
                        t,
                        !0,
                        !0,
                        n
                      );
                    }
                    e.dispatchEvent(i);
                  }
                },
                {
                  key: "extend",
                  value: function(e, t) {
                    var n = {};
                    for (var i in e)
                      void 0 !== t[i] ? (n[i] = t[i]) : (n[i] = e[i]);
                    return n;
                  }
                },
                {
                  key: "offsetRelative",
                  value: function(e) {
                    var t = { left: 0, top: 0 };
                    do {
                      var n = e.offsetTop,
                        i = e.offsetLeft;
                      isNaN(n) || (t.top += n),
                        isNaN(i) || (t.left += i),
                        (e =
                          "BODY" === e.tagName
                            ? e.parentElement
                            : e.offsetParent);
                    } while (e);
                    return t;
                  }
                },
                {
                  key: "addClass",
                  value: function(e, t) {
                    i.hasClass(e, t) ||
                      (e.classList
                        ? e.classList.add(t)
                        : (e.className += " " + t));
                  }
                },
                {
                  key: "removeClass",
                  value: function(e, t) {
                    i.hasClass(e, t) &&
                      (e.classList
                        ? e.classList.remove(t)
                        : (e.className = e.className.replace(
                            new RegExp(
                              "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                              "gi"
                            ),
                            " "
                          )));
                  }
                },
                {
                  key: "hasClass",
                  value: function(e, t) {
                    return e.classList
                      ? e.classList.contains(t)
                      : new RegExp("(^| )" + t + "( |$)", "gi").test(
                          e.className
                        );
                  }
                }
              ]
            ),
            i
          );
        })());
      return (window.StickySidebar = i), i;
    }),
      (e.exports = i());
  },
  function(e, t, n) {
    !(function(e) {
      ("object" == typeof window && window) ||
        ("object" == typeof self && self);
      e(t);
    })(function(e) {
      var t = [],
        n = Object.keys,
        i = {},
        r = {},
        s = /^(no-?highlight|plain|text)$/i,
        o = /\blang(?:uage)?-([\w-]+)\b/i,
        a = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        c = "</span>",
        l = {
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: void 0
        };
      function d(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function u(e) {
        return e.nodeName.toLowerCase();
      }
      function p(e, t) {
        var n = e && e.exec(t);
        return n && 0 === n.index;
      }
      function h(e) {
        return s.test(e);
      }
      function f(e) {
        var t,
          n = {},
          i = Array.prototype.slice.call(arguments, 1);
        for (t in e) n[t] = e[t];
        return (
          i.forEach(function(e) {
            for (t in e) n[t] = e[t];
          }),
          n
        );
      }
      function g(e) {
        var t = [];
        return (
          (function e(n, i) {
            for (var r = n.firstChild; r; r = r.nextSibling)
              3 === r.nodeType
                ? (i += r.nodeValue.length)
                : 1 === r.nodeType &&
                  (t.push({ event: "start", offset: i, node: r }),
                  (i = e(r, i)),
                  u(r).match(/br|hr|img|input/) ||
                    t.push({ event: "stop", offset: i, node: r }));
            return i;
          })(e, 0),
          t
        );
      }
      function v(e) {
        function t(e) {
          return (e && e.source) || e;
        }
        function i(n, i) {
          return new RegExp(
            t(n),
            "m" + (e.case_insensitive ? "i" : "") + (i ? "g" : "")
          );
        }
        !(function r(s, o) {
          if (!s.compiled) {
            if (
              ((s.compiled = !0),
              (s.keywords = s.keywords || s.beginKeywords),
              s.keywords)
            ) {
              var a = {},
                c = function(t, n) {
                  e.case_insensitive && (n = n.toLowerCase()),
                    n.split(" ").forEach(function(e) {
                      var n = e.split("|");
                      a[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                    });
                };
              "string" == typeof s.keywords
                ? c("keyword", s.keywords)
                : n(s.keywords).forEach(function(e) {
                    c(e, s.keywords[e]);
                  }),
                (s.keywords = a);
            }
            (s.lexemesRe = i(s.lexemes || /\w+/, !0)),
              o &&
                (s.beginKeywords &&
                  (s.begin =
                    "\\b(" + s.beginKeywords.split(" ").join("|") + ")\\b"),
                s.begin || (s.begin = /\B|\b/),
                (s.beginRe = i(s.begin)),
                s.end || s.endsWithParent || (s.end = /\B|\b/),
                s.end && (s.endRe = i(s.end)),
                (s.terminator_end = t(s.end) || ""),
                s.endsWithParent &&
                  o.terminator_end &&
                  (s.terminator_end += (s.end ? "|" : "") + o.terminator_end)),
              s.illegal && (s.illegalRe = i(s.illegal)),
              null == s.relevance && (s.relevance = 1),
              s.contains || (s.contains = []),
              (s.contains = Array.prototype.concat.apply(
                [],
                s.contains.map(function(e) {
                  return (function(e) {
                    return (
                      e.variants &&
                        !e.cached_variants &&
                        (e.cached_variants = e.variants.map(function(t) {
                          return f(e, { variants: null }, t);
                        })),
                      e.cached_variants || (e.endsWithParent && [f(e)]) || [e]
                    );
                  })("self" === e ? s : e);
                })
              )),
              s.contains.forEach(function(e) {
                r(e, s);
              }),
              s.starts && r(s.starts, o);
            var l = s.contains
              .map(function(e) {
                return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin;
              })
              .concat([s.terminator_end, s.illegal])
              .map(t)
              .filter(Boolean);
            s.terminators = l.length
              ? i(l.join("|"), !0)
              : {
                  exec: function() {
                    return null;
                  }
                };
          }
        })(e);
      }
      function m(e, t, n, r) {
        function s(e, t) {
          var n = f.case_insensitive ? t[0].toLowerCase() : t[0];
          return e.keywords.hasOwnProperty(n) && e.keywords[n];
        }
        function o(e, t, n, i) {
          var r = '<span class="' + (i ? "" : l.classPrefix);
          return (r += e + '">') + t + (n ? "" : c);
        }
        function a() {
          (y +=
            null != E.subLanguage
              ? (function() {
                  var e = "string" == typeof E.subLanguage;
                  if (e && !i[E.subLanguage]) return d(T);
                  var t = e
                    ? m(E.subLanguage, T, !0, w[E.subLanguage])
                    : b(T, E.subLanguage.length ? E.subLanguage : void 0);
                  return (
                    E.relevance > 0 && (_ += t.relevance),
                    e && (w[E.subLanguage] = t.top),
                    o(t.language, t.value, !1, !0)
                  );
                })()
              : (function() {
                  var e, t, n, i;
                  if (!E.keywords) return d(T);
                  for (
                    i = "",
                      t = 0,
                      E.lexemesRe.lastIndex = 0,
                      n = E.lexemesRe.exec(T);
                    n;

                  )
                    (i += d(T.substring(t, n.index))),
                      (e = s(E, n))
                        ? ((_ += e[1]), (i += o(e[0], d(n[0]))))
                        : (i += d(n[0])),
                      (t = E.lexemesRe.lastIndex),
                      (n = E.lexemesRe.exec(T));
                  return i + d(T.substr(t));
                })()),
            (T = "");
        }
        function u(e) {
          (y += e.className ? o(e.className, "", !0) : ""),
            (E = Object.create(e, { parent: { value: E } }));
        }
        function h(e, t) {
          if (((T += e), null == t)) return a(), 0;
          var i = (function(e, t) {
            var n, i;
            for (n = 0, i = t.contains.length; n < i; n++)
              if (p(t.contains[n].beginRe, e)) return t.contains[n];
          })(t, E);
          if (i)
            return (
              i.skip
                ? (T += t)
                : (i.excludeBegin && (T += t),
                  a(),
                  i.returnBegin || i.excludeBegin || (T = t)),
              u(i),
              i.returnBegin ? 0 : t.length
            );
          var r = (function e(t, n) {
            if (p(t.endRe, n)) {
              for (; t.endsParent && t.parent; ) t = t.parent;
              return t;
            }
            if (t.endsWithParent) return e(t.parent, n);
          })(E, t);
          if (r) {
            var s = E;
            s.skip
              ? (T += t)
              : (s.returnEnd || s.excludeEnd || (T += t),
                a(),
                s.excludeEnd && (T = t));
            do {
              E.className && (y += c),
                E.skip || (_ += E.relevance),
                (E = E.parent);
            } while (E !== r.parent);
            return r.starts && u(r.starts), s.returnEnd ? 0 : t.length;
          }
          if (
            (function(e, t) {
              return !n && p(t.illegalRe, e);
            })(t, E)
          )
            throw new Error(
              'Illegal lexeme "' +
                t +
                '" for mode "' +
                (E.className || "<unnamed>") +
                '"'
            );
          return (T += t), t.length || 1;
        }
        var f = S(e);
        if (!f) throw new Error('Unknown language: "' + e + '"');
        v(f);
        var g,
          E = r || f,
          w = {},
          y = "";
        for (g = E; g !== f; g = g.parent)
          g.className && (y = o(g.className, "", !0) + y);
        var T = "",
          _ = 0;
        try {
          for (
            var R, O, N = 0;
            (E.terminators.lastIndex = N), (R = E.terminators.exec(t));

          )
            (O = h(t.substring(N, R.index), R[0])), (N = R.index + O);
          for (h(t.substr(N)), g = E; g.parent; g = g.parent)
            g.className && (y += c);
          return { relevance: _, value: y, language: e, top: E };
        } catch (e) {
          if (e.message && -1 !== e.message.indexOf("Illegal"))
            return { relevance: 0, value: d(t) };
          throw e;
        }
      }
      function b(e, t) {
        t = t || l.languages || n(i);
        var r = { relevance: 0, value: d(e) },
          s = r;
        return (
          t.filter(S).forEach(function(t) {
            var n = m(t, e, !1);
            (n.language = t),
              n.relevance > s.relevance && (s = n),
              n.relevance > r.relevance && ((s = r), (r = n));
          }),
          s.language && (r.second_best = s),
          r
        );
      }
      function E(e) {
        return l.tabReplace || l.useBR
          ? e.replace(a, function(e, t) {
              return l.useBR && "\n" === e
                ? "<br>"
                : l.tabReplace
                ? t.replace(/\t/g, l.tabReplace)
                : "";
            })
          : e;
      }
      function w(e) {
        var n,
          i,
          s,
          a,
          c,
          p = (function(e) {
            var t,
              n,
              i,
              r,
              s = e.className + " ";
            if (
              ((s += e.parentNode ? e.parentNode.className : ""),
              (n = o.exec(s)))
            )
              return S(n[1]) ? n[1] : "no-highlight";
            for (t = 0, i = (s = s.split(/\s+/)).length; t < i; t++)
              if (h((r = s[t])) || S(r)) return r;
          })(e);
        h(p) ||
          (l.useBR
            ? ((n = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "div"
              )).innerHTML = e.innerHTML
                .replace(/\n/g, "")
                .replace(/<br[ \/]*>/g, "\n"))
            : (n = e),
          (c = n.textContent),
          (s = p ? m(p, c, !0) : b(c)),
          (i = g(n)).length &&
            (((a = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "div"
            )).innerHTML = s.value),
            (s.value = (function(e, n, i) {
              var r = 0,
                s = "",
                o = [];
              function a() {
                return e.length && n.length
                  ? e[0].offset !== n[0].offset
                    ? e[0].offset < n[0].offset
                      ? e
                      : n
                    : "start" === n[0].event
                    ? e
                    : n
                  : e.length
                  ? e
                  : n;
              }
              function c(e) {
                s +=
                  "<" +
                  u(e) +
                  t.map
                    .call(e.attributes, function(e) {
                      return (
                        " " +
                        e.nodeName +
                        '="' +
                        d(e.value).replace('"', "&quot;") +
                        '"'
                      );
                    })
                    .join("") +
                  ">";
              }
              function l(e) {
                s += "</" + u(e) + ">";
              }
              function p(e) {
                ("start" === e.event ? c : l)(e.node);
              }
              for (; e.length || n.length; ) {
                var h = a();
                if (
                  ((s += d(i.substring(r, h[0].offset))),
                  (r = h[0].offset),
                  h === e)
                ) {
                  o.reverse().forEach(l);
                  do {
                    p(h.splice(0, 1)[0]), (h = a());
                  } while (h === e && h.length && h[0].offset === r);
                  o.reverse().forEach(c);
                } else
                  "start" === h[0].event ? o.push(h[0].node) : o.pop(),
                    p(h.splice(0, 1)[0]);
              }
              return s + d(i.substr(r));
            })(i, g(a), c))),
          (s.value = E(s.value)),
          (e.innerHTML = s.value),
          (e.className = (function(e, t, n) {
            var i = t ? r[t] : n,
              s = [e.trim()];
            return (
              e.match(/\bhljs\b/) || s.push("hljs"),
              -1 === e.indexOf(i) && s.push(i),
              s.join(" ").trim()
            );
          })(e.className, p, s.language)),
          (e.result = { language: s.language, re: s.relevance }),
          s.second_best &&
            (e.second_best = {
              language: s.second_best.language,
              re: s.second_best.relevance
            }));
      }
      function y() {
        if (!y.called) {
          y.called = !0;
          var e = document.querySelectorAll("pre code");
          t.forEach.call(e, w);
        }
      }
      function S(e) {
        return (e = (e || "").toLowerCase()), i[e] || i[r[e]];
      }
      return (
        (e.highlight = m),
        (e.highlightAuto = b),
        (e.fixMarkup = E),
        (e.highlightBlock = w),
        (e.configure = function(e) {
          l = f(l, e);
        }),
        (e.initHighlighting = y),
        (e.initHighlightingOnLoad = function() {
          addEventListener("DOMContentLoaded", y, !1),
            addEventListener("load", y, !1);
        }),
        (e.registerLanguage = function(t, n) {
          var s = (i[t] = n(e));
          s.aliases &&
            s.aliases.forEach(function(e) {
              r[e] = t;
            });
        }),
        (e.listLanguages = function() {
          return n(i);
        }),
        (e.getLanguage = S),
        (e.inherit = f),
        (e.IDENT_RE = "[a-zA-Z]\\w*"),
        (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
        (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
        (e.C_NUMBER_RE =
          "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
        (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
        (e.RE_STARTERS_RE =
          "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
        (e.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }),
        (e.APOS_STRING_MODE = {
          className: "string",
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        }),
        (e.QUOTE_STRING_MODE = {
          className: "string",
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        }),
        (e.PHRASAL_WORDS_MODE = {
          begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }),
        (e.COMMENT = function(t, n, i) {
          var r = e.inherit(
            { className: "comment", begin: t, end: n, contains: [] },
            i || {}
          );
          return (
            r.contains.push(e.PHRASAL_WORDS_MODE),
            r.contains.push({
              className: "doctag",
              begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
              relevance: 0
            }),
            r
          );
        }),
        (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
        (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
        (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
        (e.NUMBER_MODE = {
          className: "number",
          begin: e.NUMBER_RE,
          relevance: 0
        }),
        (e.C_NUMBER_MODE = {
          className: "number",
          begin: e.C_NUMBER_RE,
          relevance: 0
        }),
        (e.BINARY_NUMBER_MODE = {
          className: "number",
          begin: e.BINARY_NUMBER_RE,
          relevance: 0
        }),
        (e.CSS_NUMBER_MODE = {
          className: "number",
          begin:
            e.NUMBER_RE +
            "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        }),
        (e.REGEXP_MODE = {
          className: "regexp",
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              begin: /\[/,
              end: /\]/,
              relevance: 0,
              contains: [e.BACKSLASH_ESCAPE]
            }
          ]
        }),
        (e.TITLE_MODE = {
          className: "title",
          begin: e.IDENT_RE,
          relevance: 0
        }),
        (e.UNDERSCORE_TITLE_MODE = {
          className: "title",
          begin: e.UNDERSCORE_IDENT_RE,
          relevance: 0
        }),
        (e.METHOD_GUARD = {
          begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
          relevance: 0
        }),
        e
      );
    });
  },
  function(e, t) {
    e.exports = function(e) {
      var t = "HTTP/[0-9\\.]+";
      return {
        aliases: ["https"],
        illegal: "\\S",
        contains: [
          {
            begin: "^" + t,
            end: "$",
            contains: [{ className: "number", begin: "\\b\\d{3}\\b" }]
          },
          {
            begin: "^[A-Z]+ (.*?) " + t + "$",
            returnBegin: !0,
            end: "$",
            contains: [
              {
                className: "string",
                begin: " ",
                end: " ",
                excludeBegin: !0,
                excludeEnd: !0
              },
              { begin: t },
              { className: "keyword", begin: "[A-Z]+" }
            ]
          },
          {
            className: "attribute",
            begin: "^\\w",
            end: ": ",
            excludeEnd: !0,
            illegal: "\\n|\\s|=",
            starts: { end: "$", relevance: 0 }
          },
          { begin: "\\n\\n", starts: { subLanguage: [], endsWithParent: !0 } }
        ]
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = { literal: "true false null" },
        n = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
        i = {
          end: ",",
          endsWithParent: !0,
          excludeEnd: !0,
          contains: n,
          keywords: t
        },
        r = {
          begin: "{",
          end: "}",
          contains: [
            {
              className: "attr",
              begin: /"/,
              end: /"/,
              contains: [e.BACKSLASH_ESCAPE],
              illegal: "\\n"
            },
            e.inherit(i, { begin: /:/ })
          ],
          illegal: "\\S"
        },
        s = {
          begin: "\\[",
          end: "\\]",
          contains: [e.inherit(i)],
          illegal: "\\S"
        };
      return (
        n.splice(n.length, 0, r, s),
        { contains: n, keywords: t, illegal: "\\S" }
      );
    };
  }
]);
