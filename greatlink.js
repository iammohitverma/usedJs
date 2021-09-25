/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed"
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
jQuery(function (t) {
  t("select.country_auto").change(function () {
    if (t("select.state_auto").length > 0) {
      var a = t("select.country_auto")
        .children("option:selected")
        .attr("data-id");
      t("select.state_auto").html('<option value="0">Select State</option>'),
        t("select.city_auto").html('<option value="0">Select City</option>'),
        jQuery.ajax({
          url: tc_csca_auto_ajax.ajax_url,
          type: "post",
          dataType: "json",
          data: {
            action: "tc_csca_get_states",
            nonce_ajax: tc_csca_auto_ajax.nonce,
            cnt: a,
          },
          success: function (a) {
            for (i = 0; i < a.length; i++) {
              var e = a[i].id,
                c = a[i].name,
                o =
                  "<option data-id='" +
                  e +
                  "' value='" +
                  c +
                  "'>" +
                  c +
                  "</option>";
              t("select.state_auto").append(o);
            }
          },
        });
    }
  }),
    t("select.state_auto").change(function () {
      if (t("select.city_auto").length > 0) {
        var a = t(this).children("option:selected").attr("data-id");
        t("select.city_auto").html('<option value="0">Select City</option>'),
          jQuery.ajax({
            url: tc_csca_auto_ajax.ajax_url,
            type: "post",
            dataType: "json",
            data: {
              action: "tc_csca_get_cities",
              nonce_ajax: tc_csca_auto_ajax.nonce,
              sid: a,
            },
            success: function (a) {
              for (i = 0; i < a.length; i++) {
                var e = a[i].id,
                  c = a[i].name,
                  o =
                    "<option value='" +
                    c +
                    "' data-id='" +
                    e +
                    "'>" +
                    c +
                    "</option>";
                t("select.city_auto").append(o);
              }
            },
          });
      }
    });
});
(function ($) {
  "use strict";
  if (typeof wpcf7 === "undefined" || wpcf7 === null) {
    return;
  }
  wpcf7 = $.extend({ cached: 0, inputs: [] }, wpcf7);
  $(function () {
    wpcf7.supportHtml5 = (function () {
      var features = {};
      var input = document.createElement("input");
      features.placeholder = "placeholder" in input;
      var inputTypes = ["email", "url", "tel", "number", "range", "date"];
      $.each(inputTypes, function (index, value) {
        input.setAttribute("type", value);
        features[value] = input.type !== "text";
      });
      return features;
    })();
    $("div.wpcf7 > form").each(function () {
      var $form = $(this);
      wpcf7.initForm($form);
      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });
  wpcf7.getId = function (form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };
  wpcf7.initForm = function (form) {
    var $form = $(form);
    wpcf7.setStatus($form, "init");
    $form.submit(function (event) {
      if (!wpcf7.supportHtml5.placeholder) {
        $("[placeholder].placeheld", $form).each(function (i, n) {
          $(n).val("").removeClass("placeheld");
        });
      }
      if (typeof window.FormData === "function") {
        wpcf7.submit($form);
        event.preventDefault();
      }
    });
    $(".wpcf7-submit", $form).after('<span class="ajax-loader"></span>');
    wpcf7.toggleSubmit($form);
    $form.on("click", ".wpcf7-acceptance", function () {
      wpcf7.toggleSubmit($form);
    });
    $(".wpcf7-exclusive-checkbox", $form).on(
      "click",
      "input:checkbox",
      function () {
        var name = $(this).attr("name");
        $form
          .find('input:checkbox[name="' + name + '"]')
          .not(this)
          .prop("checked", false);
      }
    );
    $(".wpcf7-list-item.has-free-text", $form).each(function () {
      var $freetext = $(":input.wpcf7-free-text", this);
      var $wrap = $(this).closest(".wpcf7-form-control");
      if ($(":checkbox, :radio", this).is(":checked")) {
        $freetext.prop("disabled", false);
      } else {
        $freetext.prop("disabled", true);
      }
      $wrap.on("change", ":checkbox, :radio", function () {
        var $cb = $(".has-free-text", $wrap).find(":checkbox, :radio");
        if ($cb.is(":checked")) {
          $freetext.prop("disabled", false).focus();
        } else {
          $freetext.prop("disabled", true);
        }
      });
    });
    if (!wpcf7.supportHtml5.placeholder) {
      $("[placeholder]", $form).each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).addClass("placeheld");
        $(this).focus(function () {
          if ($(this).hasClass("placeheld")) {
            $(this).val("").removeClass("placeheld");
          }
        });
        $(this).blur(function () {
          if ("" === $(this).val()) {
            $(this).val($(this).attr("placeholder"));
            $(this).addClass("placeheld");
          }
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: "yy-mm-dd",
          minDate: new Date($(this).attr("min")),
          maxDate: new Date($(this).attr("max")),
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr("min"),
          max: $(this).attr("max"),
          step: $(this).attr("step"),
        });
      });
    }
    wpcf7.resetCounter($form);
    $form.on("change", ".wpcf7-validates-as-url", function () {
      var val = $.trim($(this).val());
      if (
        val &&
        !val.match(/^[a-z][a-z0-9.+-]*:/i) &&
        -1 !== val.indexOf(".")
      ) {
        val = val.replace(/^\/+/, "");
        val = "http://" + val;
      }
      $(this).val(val);
    });
  };
  wpcf7.submit = function (form) {
    if (typeof window.FormData !== "function") {
      return;
    }
    var $form = $(form);
    $(".ajax-loader", $form).addClass("is-active");
    wpcf7.clearResponse($form);
    var formData = new FormData($form.get(0));
    var detail = {
      id: $form.closest("div.wpcf7").attr("id"),
      status: "init",
      inputs: [],
      formData: formData,
    };
    $.each($form.serializeArray(), function (i, field) {
      if ("_wpcf7" == field.name) {
        detail.contactFormId = field.value;
      } else if ("_wpcf7_version" == field.name) {
        detail.pluginVersion = field.value;
      } else if ("_wpcf7_locale" == field.name) {
        detail.contactFormLocale = field.value;
      } else if ("_wpcf7_unit_tag" == field.name) {
        detail.unitTag = field.value;
      } else if ("_wpcf7_container_post" == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_/)) {
      } else {
        detail.inputs.push(field);
      }
    });
    wpcf7.triggerEvent($form.closest("div.wpcf7"), "beforesubmit", detail);
    var ajaxSuccess = function (data, status, xhr, $form) {
      detail.id = $(data.into).attr("id");
      detail.status = data.status;
      detail.apiResponse = data;
      switch (data.status) {
        case "init":
          wpcf7.setStatus($form, "init");
          break;
        case "validation_failed":
          $.each(data.invalid_fields, function (i, n) {
            $(n.into, $form).each(function () {
              wpcf7.notValidTip(this, n.message);
              $(".wpcf7-form-control", this).addClass("wpcf7-not-valid");
              $(".wpcf7-form-control", this).attr(
                "aria-describedby",
                n.error_id
              );
              $("[aria-invalid]", this).attr("aria-invalid", "true");
            });
          });
          wpcf7.setStatus($form, "invalid");
          wpcf7.triggerEvent(data.into, "invalid", detail);
          break;
        case "acceptance_missing":
          wpcf7.setStatus($form, "unaccepted");
          wpcf7.triggerEvent(data.into, "unaccepted", detail);
          break;
        case "spam":
          wpcf7.setStatus($form, "spam");
          wpcf7.triggerEvent(data.into, "spam", detail);
          break;
        case "aborted":
          wpcf7.setStatus($form, "aborted");
          wpcf7.triggerEvent(data.into, "aborted", detail);
          break;
        case "mail_sent":
          wpcf7.setStatus($form, "sent");
          wpcf7.triggerEvent(data.into, "mailsent", detail);
          break;
        case "mail_failed":
          wpcf7.setStatus($form, "failed");
          wpcf7.triggerEvent(data.into, "mailfailed", detail);
          break;
        default:
          wpcf7.setStatus(
            $form,
            "custom-" + data.status.replace(/[^0-9a-z]+/i, "-")
          );
      }
      wpcf7.refill($form, data);
      wpcf7.triggerEvent(data.into, "submit", detail);
      if ("mail_sent" == data.status) {
        $form.each(function () {
          this.reset();
        });
        wpcf7.toggleSubmit($form);
        wpcf7.resetCounter($form);
      }
      if (!wpcf7.supportHtml5.placeholder) {
        $form.find("[placeholder].placeheld").each(function (i, n) {
          $(n).val($(n).attr("placeholder"));
        });
      }
      $(".wpcf7-response-output", $form)
        .html("")
        .append(data.message)
        .slideDown("fast");
      $(".screen-reader-response", $form.closest(".wpcf7")).each(function () {
        var $response = $(this);
        $('[role="status"]', $response).html(data.message);
        if (data.invalid_fields) {
          $.each(data.invalid_fields, function (i, n) {
            if (n.idref) {
              var $li = $("<li></li>").append(
                $("<a></a>")
                  .attr("href", "#" + n.idref)
                  .append(n.message)
              );
            } else {
              var $li = $("<li></li>").append(n.message);
            }
            $li.attr("id", n.error_id);
            $("ul", $response).append($li);
          });
        }
      });
      if (data.posted_data_hash) {
        $form
          .find('input[name="_wpcf7_posted_data_hash"]')
          .first()
          .val(data.posted_data_hash);
      }
    };
    $.ajax({
      type: "POST",
      url: wpcf7.apiSettings.getRoute(
        "/contact-forms/" + wpcf7.getId($form) + "/feedback"
      ),
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
    })
      .done(function (data, status, xhr) {
        ajaxSuccess(data, status, xhr, $form);
        $(".ajax-loader", $form).removeClass("is-active");
      })
      .fail(function (xhr, status, error) {
        var $e = $('<div class="ajax-error"></div>').text(error.message);
        $form.after($e);
      });
  };
  wpcf7.triggerEvent = function (target, name, detail) {
    var event = new CustomEvent("wpcf7" + name, {
      bubbles: true,
      detail: detail,
    });
    $(target).get(0).dispatchEvent(event);
  };
  wpcf7.setStatus = function (form, status) {
    var $form = $(form);
    var prevStatus = $form.attr("data-status");
    $form.data("status", status);
    $form.addClass(status);
    $form.attr("data-status", status);
    if (prevStatus && prevStatus !== status) {
      $form.removeClass(prevStatus);
    }
  };
  wpcf7.toggleSubmit = function (form, state) {
    var $form = $(form);
    var $submit = $("input:submit", $form);
    if (typeof state !== "undefined") {
      $submit.prop("disabled", !state);
      return;
    }
    if ($form.hasClass("wpcf7-acceptance-as-validation")) {
      return;
    }
    $submit.prop("disabled", false);
    $(".wpcf7-acceptance", $form).each(function () {
      var $span = $(this);
      var $input = $("input:checkbox", $span);
      if (!$span.hasClass("optional")) {
        if (
          ($span.hasClass("invert") && $input.is(":checked")) ||
          (!$span.hasClass("invert") && !$input.is(":checked"))
        ) {
          $submit.prop("disabled", true);
          return false;
        }
      }
    });
  };
  wpcf7.resetCounter = function (form) {
    var $form = $(form);
    $(".wpcf7-character-count", $form).each(function () {
      var $count = $(this);
      var name = $count.attr("data-target-name");
      var down = $count.hasClass("down");
      var starting = parseInt($count.attr("data-starting-value"), 10);
      var maximum = parseInt($count.attr("data-maximum-value"), 10);
      var minimum = parseInt($count.attr("data-minimum-value"), 10);
      var updateCount = function (target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr("data-current-value", count);
        $count.text(count);
        if (maximum && maximum < length) {
          $count.addClass("too-long");
        } else {
          $count.removeClass("too-long");
        }
        if (minimum && length < minimum) {
          $count.addClass("too-short");
        } else {
          $count.removeClass("too-short");
        }
      };
      $(':input[name="' + name + '"]', $form).each(function () {
        updateCount(this);
        $(this).keyup(function () {
          updateCount(this);
        });
      });
    });
  };
  wpcf7.notValidTip = function (target, message) {
    var $target = $(target);
    $(".wpcf7-not-valid-tip", $target).remove();
    $("<span></span>")
      .attr({ class: "wpcf7-not-valid-tip", "aria-hidden": "true" })
      .text(message)
      .appendTo($target);
    if ($target.is(".use-floating-validation-tip *")) {
      var fadeOut = function (target) {
        $(target)
          .not(":hidden")
          .animate({ opacity: 0 }, "fast", function () {
            $(this).css({ "z-index": -100 });
          });
      };
      $target.on("mouseover", ".wpcf7-not-valid-tip", function () {
        fadeOut(this);
      });
      $target.on("focus", ":input", function () {
        fadeOut($(".wpcf7-not-valid-tip", $target));
      });
    }
  };
  wpcf7.refill = function (form, data) {
    var $form = $(form);
    var refillCaptcha = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form.find("img.wpcf7-captcha-" + i).attr("src", n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form
          .find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]')
          .attr("value", match[1]);
      });
    };
    var refillQuiz = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form
          .find(':input[name="' + i + '"]')
          .siblings("span.wpcf7-quiz-label")
          .text(n[0]);
        $form
          .find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]')
          .attr("value", n[1]);
      });
    };
    if (typeof data === "undefined") {
      $.ajax({
        type: "GET",
        url: wpcf7.apiSettings.getRoute(
          "/contact-forms/" + wpcf7.getId($form) + "/refill"
        ),
        beforeSend: function (xhr) {
          var nonce = $form.find(':input[name="_wpnonce"]').val();
          if (nonce) {
            xhr.setRequestHeader("X-WP-Nonce", nonce);
          }
        },
        dataType: "json",
      }).done(function (data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }
        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }
      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };
  wpcf7.clearResponse = function (form) {
    var $form = $(form);
    $form.siblings(".screen-reader-response").each(function () {
      $('[role="status"]', this).html("");
      $("ul", this).html("");
    });
    $(".wpcf7-not-valid-tip", $form).remove();
    $("[aria-invalid]", $form).attr("aria-invalid", "false");
    $(".wpcf7-form-control", $form).removeClass("wpcf7-not-valid");
    $(".wpcf7-response-output", $form).hide().empty();
  };
  wpcf7.apiSettings.getRoute = function (path) {
    var url = wpcf7.apiSettings.root;
    url = url.replace(
      wpcf7.apiSettings.namespace,
      wpcf7.apiSettings.namespace + path
    );
    return url;
  };
})(jQuery);
(function () {
  if (typeof window.CustomEvent === "function") return false;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
function GLTFireEvent(lang_pair, lang_dest) {
  try {
    if (document.createEvent) {
      var event = document.createEvent("HTMLEvents");
      event.initEvent(lang_dest, true, true);
      lang_pair.dispatchEvent(event);
    } else {
      var event = document.createEventObject();
      lang_pair.fireEvent("on" + lang_dest, event);
    }
  } catch (e) {}
}
function doGoogleLanguageTranslator(lang_pair) {
  if (window.glt_request_uri) return true;
  if (lang_pair.value) lang_pair = lang_pair.value;
  if (lang_pair == "") return;
  var lang_dest = lang_pair.split("|")[1];
  var event;
  var classic = jQuery(".goog-te-combo");
  var simple = jQuery(".goog-te-menu-frame:first");
  var simpleValue = simple
    .contents()
    .find(".goog-te-menu2-item span.text:contains(" + lang_text + ")");
  if (classic.length == 0) {
    for (var i = 0; i < simple.length; i++) {
      event = simple[i];
    }
  } else {
    for (var i = 0; i < classic.length; i++) {
      event = classic[i];
    }
  }
  if (document.getElementById("google_language_translator") != null) {
    if (classic.length != 0) {
      if (lang_prefix != default_lang) {
        event.value = lang_dest;
        GLTFireEvent(event, "change");
      } else {
        jQuery(".goog-te-banner-frame:first")
          .contents()
          .find(".goog-close-link")
          .get(0)
          .click();
      }
    } else {
      event.value = lang_dest;
      if (lang_prefix != default_lang) {
        simpleValue.click();
      } else {
        jQuery(".goog-te-banner-frame:first")
          .contents()
          .find(".goog-close-link")
          .get(0)
          .click();
      }
    }
  }
}
jQuery(document).ready(function ($) {
  $("#glt-translate-trigger,#glt-translate-trigger font").toolbar({
    content: "#flags",
    position: "top",
    hideOnClick: true,
    event: "click",
    style: "primary",
  });
  $("#glt-translate-trigger").on("toolbarItemClick", function (event) {
    $(this).removeClass("pressed");
  });
});
if (typeof Object.create !== "function") {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
(function ($, window, document, undefined) {
  var ToolBar = {
    init: function (options, elem) {
      var self = this;
      self.elem = elem;
      self.$elem = $(elem);
      self.options = $.extend({}, $.fn.toolbar.options, options);
      self.metadata = self.$elem.data();
      self.overrideOptions();
      self.toolbar = $('<div class="tool-container" />')
        .addClass("tool-" + self.options.position)
        .addClass("toolbar-" + self.options.style)
        .append('<div class="tool-items" />')
        .append('<div class="arrow" />')
        .appendTo("body")
        .css("opacity", 0)
        .hide();
      self.toolbar_arrow = self.toolbar.find(".arrow");
      self.initializeToolbar();
    },
    overrideOptions: function () {
      var self = this;
      $.each(self.options, function ($option) {
        if (typeof self.$elem.data("toolbar-" + $option) != "undefined") {
          self.options[$option] = self.$elem.data("toolbar-" + $option);
        }
      });
    },
    initializeToolbar: function () {
      var self = this;
      self.populateContent();
      self.setTrigger();
      self.toolbarWidth = self.toolbar.width();
    },
    setTrigger: function () {
      var self = this;
      if (self.options.event == "onload") {
        $(window).load(function (event) {
          event.preventDefault();
          self.show();
        });
      }
      if (self.options.event == "click") {
        self.$elem.on("click", function (event) {
          event.preventDefault();
          if (self.$elem.hasClass("pressed")) {
            self.hide();
          } else {
            self.show();
          }
        });
        if (self.options.hideOnClick) {
          $("html").on("click.toolbar", function (event) {
            if (
              event.target != self.elem &&
              self.$elem.has(event.target).length === 0 &&
              self.toolbar.has(event.target).length === 0 &&
              self.toolbar.is(":visible")
            ) {
              self.hide();
            }
          });
        }
      }
      if (self.options.hover) {
        var moveTime;
        function decideTimeout() {
          if (self.$elem.hasClass("pressed")) {
            moveTime = setTimeout(function () {
              self.hide();
            }, 150);
          } else {
            clearTimeout(moveTime);
          }
        }
        self.$elem.on({
          mouseenter: function (event) {
            if (self.$elem.hasClass("pressed")) {
              clearTimeout(moveTime);
            } else {
              self.show();
            }
          },
        });
        self.$elem.parent().on({
          mouseleave: function (event) {
            decideTimeout();
          },
        });
        $(".tool-container").on({
          mouseenter: function (event) {
            clearTimeout(moveTime);
          },
          mouseleave: function (event) {
            decideTimeout();
          },
        });
      }
      $(window).resize(function (event) {
        event.stopPropagation();
        if (self.toolbar.is(":visible")) {
          self.toolbarCss = self.getCoordinates(self.options.position, 20);
          self.collisionDetection();
          self.toolbar.css(self.toolbarCss);
          self.toolbar_arrow.css(self.arrowCss);
        }
      });
    },
    populateContent: function () {
      var self = this;
      var location = self.toolbar.find(".tool-items");
      var content = $(self.options.content)
        .clone(true)
        .find("a")
        .addClass("tool-item");
      location.html(content);
      location.find(".tool-item").on("click", function (event) {
        if (typeof window.glt_request_uri == "undefined")
          event.preventDefault();
        self.$elem.trigger("toolbarItemClick", this);
      });
    },
    calculatePosition: function () {
      var self = this;
      self.arrowCss = {};
      self.toolbarCss = self.getCoordinates(
        self.options.position,
        self.options.adjustment
      );
      self.toolbarCss.position = "fixed";
      self.toolbarCss.zIndex = self.options.zIndex;
      self.collisionDetection();
      self.toolbar.css(self.toolbarCss);
      self.toolbar_arrow.css(self.arrowCss);
    },
    getCoordinates: function (position, adjustment) {
      var self = this;
      self.coordinates = self.$elem.offset();
      if (
        self.options.adjustment &&
        self.options.adjustment[self.options.position]
      ) {
        adjustment =
          self.options.adjustment[self.options.position] + adjustment;
      }
      switch (self.options.position) {
        case "top":
          return {
            left:
              self.coordinates.left -
              self.toolbar.width() / 2 +
              self.$elem.outerWidth() / 2,
            top: self.coordinates.top - self.$elem.outerHeight() - adjustment,
            right: "auto",
          };
        case "left":
          return {
            left:
              self.coordinates.left -
              self.toolbar.width() / 2 -
              self.$elem.outerWidth() / 2 -
              adjustment,
            top:
              self.coordinates.top -
              self.toolbar.height() / 2 +
              self.$elem.outerHeight() / 2,
            right: "auto",
          };
        case "right":
          return {
            left:
              self.coordinates.left +
              self.toolbar.width() / 2 +
              self.$elem.outerWidth() / 2 +
              adjustment,
            top:
              self.coordinates.top -
              self.toolbar.height() / 2 +
              self.$elem.outerHeight() / 2,
            right: "auto",
          };
        case "bottom":
          return {
            left:
              self.coordinates.left -
              self.toolbar.width() / 2 +
              self.$elem.outerWidth() / 2,
            top: self.coordinates.top + self.$elem.outerHeight() + adjustment,
            right: "auto",
          };
      }
    },
    collisionDetection: function () {
      var self = this;
      var edgeOffset = 20;
      if (self.options.position == "top" || self.options.position == "bottom") {
        self.arrowCss = { left: "50%", right: "50%" };
        if (self.toolbarCss.left < edgeOffset) {
          self.toolbarCss.left = edgeOffset;
          self.arrowCss.left =
            self.$elem.offset().left + self.$elem.width() / 2 - edgeOffset;
        } else if (
          $(window).width() - (self.toolbarCss.left + self.toolbarWidth) <
          edgeOffset
        ) {
          self.toolbarCss.right = edgeOffset;
          self.toolbarCss.left = "auto";
          self.arrowCss.left = "auto";
          self.arrowCss.right =
            $(window).width() -
            self.$elem.offset().left -
            self.$elem.width() / 2 -
            edgeOffset -
            5;
        }
      }
    },
    show: function () {
      var self = this;
      self.$elem.addClass("pressed");
      self.calculatePosition();
      self.toolbar
        .show()
        .css({ opacity: 1 })
        .addClass("animate-" + self.options.animation);
      self.$elem.trigger("toolbarShown");
    },
    hide: function () {
      var self = this;
      var animation = { opacity: 0 };
      self.$elem.removeClass("pressed");
      switch (self.options.position) {
        case "top":
          animation.top = "+=20";
          break;
        case "left":
          animation.left = "+=20";
          break;
        case "right":
          animation.left = "-=20";
          break;
        case "bottom":
          animation.top = "-=20";
          break;
      }
      self.toolbar.animate(animation, 200, function () {
        self.toolbar.hide();
      });
      self.$elem.trigger("toolbarHidden");
    },
    getToolbarElement: function () {
      return this.toolbar.find(".tool-items");
    },
  };
  $.fn.toolbar = function (options) {
    if ($.isPlainObject(options)) {
      return this.each(function () {
        var toolbarObj = Object.create(ToolBar);
        toolbarObj.init(options, this);
        $(this).data("toolbarObj", toolbarObj);
      });
    } else if (typeof options === "string" && options.indexOf("_") !== 0) {
      var toolbarObj = $(this).data("toolbarObj");
      var method = toolbarObj[options];
      return method.apply(toolbarObj, $.makeArray(arguments).slice(1));
    }
  };
  $.fn.toolbar.options = {
    content: "#myContent",
    position: "top",
    hideOnClick: false,
    zIndex: 120,
    hover: false,
    style: "default",
    animation: "standard",
    adjustment: 10,
  };
})(jQuery, window, document);
jQuery(function ($) {
  $("#flags a, a.single-language, .tool-items a").each(function () {
    $(this).attr("data-lang", $(this).attr("title"));
  });
  $(document.body).on("click", "a.flag", function () {
    lang_text = $(this).attr("data-lang");
    default_lang =
      window.glt_default_lang ||
      $("#google_language_translator").attr("class").split("-").pop();
    lang_prefix = $(this).attr("class").split(" ")[2];
    lang_prefix == default_lang ? l() : n();
    function l() {
      doGoogleLanguageTranslator(default_lang + "|" + default_lang);
    }
    function n() {
      doGoogleLanguageTranslator(default_lang + "|" + lang_prefix);
    }
    $(".tool-container").hide();
  });
  if (window.glt_request_uri) {
    $("#google_language_translator select").on("change", function () {
      doGLTTranslate($(this).val());
    });
  }
});

!(function (y, O, c, e) {
  var n,
    b,
    s,
    a,
    l,
    i,
    o,
    r,
    h,
    u,
    t,
    d,
    f = "mPageScroll2id",
    I = "mPS2id",
    g = {
      scrollSpeed: 1e3,
      autoScrollSpeed: !0,
      scrollEasing: "easeInOutQuint",
      scrollingEasing: "easeOutQuint",
      pageEndSmoothScroll: !0,
      layout: "vertical",
      offset: 0,
      highlightSelector: !1,
      clickedClass: I + "-clicked",
      targetClass: I + "-target",
      highlightClass: I + "-highlight",
      forceSingleHighlight: !1,
      keepHighlightUntilNext: !1,
      highlightByNextTarget: !1,
      disablePluginBelow: !1,
      clickEvents: !0,
      appendHash: !1,
      onStart: function () {},
      onComplete: function () {},
      defaultSelector: !1,
      live: !0,
      liveSelector: !1,
      excludeSelectors: !1,
      encodeLinks: !1,
    },
    p = 0,
    _ = {
      init: function (e) {
        e = y.extend(!0, {}, g, e);
        if ((y(c).data(I, e), (b = y(c).data(I)), !this.selector)) {
          var t = "__" + I;
          this.each(function () {
            var e = y(this);
            e.hasClass(t) || e.addClass(t);
          }),
            (this.selector = "." + t);
        }
        b.liveSelector && (this.selector += "," + b.liveSelector),
          (n = n ? n + "," + this.selector : this.selector),
          b.defaultSelector &&
            (("object" == typeof y(n) && 0 !== y(n).length) ||
              (n =
                ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id")),
          b.clickEvents &&
            y(c)
              .undelegate("." + I)
              .delegate(n, "click." + I, function (e) {
                if (w._isDisabled.call(null)) w._removeClasses.call(null);
                else {
                  var t = y(this),
                    n = t.attr("href"),
                    s = t.prop("href").baseVal || t.prop("href");
                  (b.excludeSelectors && t.is(b.excludeSelectors)) ||
                    (n && -1 !== n.indexOf("#/")) ||
                    (w._reset.call(null),
                    (u = t.data("ps2id-offset") || 0),
                    w._isValid.call(null, n, s) &&
                      w._findTarget.call(null, n) &&
                      (e.preventDefault(),
                      (a = "selector"),
                      (l = t),
                      w._setClasses.call(null, !0),
                      w._scrollTo.call(null)));
                }
              }),
          y(O)
            .unbind("." + I)
            .bind("scroll." + I + " resize." + I, function () {
              if (w._isDisabled.call(null)) w._removeClasses.call(null);
              else {
                var a = y("._" + I + "-t");
                a.each(function (e) {
                  var t = y(this),
                    n = t.attr("id"),
                    s = w._findHighlight.call(null, n);
                  w._setClasses.call(null, !1, t, s),
                    e == a.length - 1 && w._extendClasses.call(null);
                });
              }
            }),
          (s = !0),
          w._setup.call(null),
          w._live.call(null);
      },
      scrollTo: function (e, t) {
        if (w._isDisabled.call(null)) w._removeClasses.call(null);
        else if (e && void 0 !== e) {
          w._isInit.call(null);
          var n = { layout: b.layout, offset: b.offset, clicked: !1 };
          t = y.extend(!0, {}, n, t);
          w._reset.call(null),
            (r = t.layout),
            (h = t.offset),
            (e = -1 !== e.indexOf("#") ? e : "#" + e),
            w._isValid.call(null, e) &&
              w._findTarget.call(null, e) &&
              ((a = "scrollTo"),
              (l = t.clicked) && w._setClasses.call(null, !0),
              w._scrollTo.call(null));
        }
      },
      destroy: function () {
        y(O).unbind("." + I),
          y(c)
            .undelegate("." + I)
            .removeData(I),
          y("._" + I + "-t").removeData(I),
          w._removeClasses.call(null, !0);
      },
    },
    w = {
      _isDisabled: function () {
        var e = O,
          t = "inner",
          n =
            b.disablePluginBelow instanceof Array
              ? [b.disablePluginBelow[0] || 0, b.disablePluginBelow[1] || 0]
              : [b.disablePluginBelow || 0, 0];
        return (
          "innerWidth" in O ||
            ((t = "client"), (e = c.documentElement || c.body)),
          e[t + "Width"] <= n[0] || e[t + "Height"] <= n[1]
        );
      },
      _isValid: function (e, t) {
        if (e) {
          var n =
              -1 !== (t = t || e).indexOf("#/")
                ? t.split("#/")[0]
                : t.split("#")[0],
            s = (
              O.location !== O.parent.location ? O.parent.location : O.location
            )
              .toString()
              .split("#")[0];
          return (
            "#" !== e &&
            -1 !== e.indexOf("#") &&
            ("" === n || decodeURIComponent(n) === decodeURIComponent(s))
          );
        }
      },
      _setup: function () {
        var l = w._highlightSelector(),
          o = 1,
          r = 0;
        return y(l).each(function () {
          var e = y(this),
            t = e.attr("href"),
            n = e.prop("href").baseVal || e.prop("href");
          if (w._isValid.call(null, t, n)) {
            if (b.excludeSelectors && e.is(b.excludeSelectors)) return;
            var s = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.split("#")[1],
              a = -1 !== s.indexOf("%") ? y(c.getElementById(s)) : y("#" + s);
            if (0 < a.length) {
              b.highlightByNextTarget &&
                a !== r &&
                (r ? r.data(I, { tn: a }) : a.data(I, { tn: "0" }), (r = a)),
                a.hasClass("_" + I + "-t") || a.addClass("_" + I + "-t"),
                a.data(I, { i: o }),
                e.hasClass("_" + I + "-h") || e.addClass("_" + I + "-h");
              var i = w._findHighlight.call(null, s);
              w._setClasses.call(null, !1, a, i),
                (p = o),
                ++o == y(l).length && w._extendClasses.call(null);
            }
          }
        });
      },
      _highlightSelector: function () {
        return b.highlightSelector && "" !== b.highlightSelector
          ? b.highlightSelector
          : n;
      },
      _findTarget: function (e) {
        var t = -1 !== e.indexOf("#/") ? e.split("#/")[1] : e.split("#")[1],
          n = -1 !== t.indexOf("%") ? y(c.getElementById(t)) : y("#" + t);
        if (n.length < 1 || "fixed" === n.css("position")) {
          if ("top" !== t) return;
          n = y("body");
        }
        return (
          (i = n),
          r || (r = b.layout),
          (h = w._setOffset.call(null)),
          ((o = [
            (n.offset().top - h[0]).toString(),
            (n.offset().left - h[1]).toString(),
          ])[0] = o[0] < 0 ? 0 : o[0]),
          (o[1] = o[1] < 0 ? 0 : o[1]),
          o
        );
      },
      _setOffset: function () {
        var e, t, n, s;
        switch ((h || (h = b.offset ? b.offset : 0), u && (h = u), typeof h)) {
          case "object":
          case "string":
            0 <
            (t = [
              (e = [h.y ? h.y : h, h.x ? h.x : h])[0] instanceof jQuery
                ? e[0]
                : y(e[0]),
              e[1] instanceof jQuery ? e[1] : y(e[1]),
            ])[0].length
              ? ((n = t[0].height()),
                "fixed" === t[0].css("position") && (n += t[0][0].offsetTop))
              : (n =
                  !isNaN(parseFloat(e[0])) && isFinite(e[0])
                    ? parseInt(e[0])
                    : 0),
              0 < t[1].length
                ? ((s = t[1].width()),
                  "fixed" === t[1].css("position") && (s += t[1][0].offsetLeft))
                : (s =
                    !isNaN(parseFloat(e[1])) && isFinite(e[1])
                      ? parseInt(e[1])
                      : 0);
            break;
          case "function":
            (e = h.call(null)) instanceof Array
              ? ((n = e[0]), (s = e[1]))
              : (n = s = e);
            break;
          default:
            n = s = parseInt(h);
        }
        return [n, s];
      },
      _findHighlight: function (e) {
        var t =
            O.location !== O.parent.location ? O.parent.location : O.location,
          n = t.toString().split("#")[0],
          s = t.pathname;
        if (
          (-1 !== n.indexOf("'") && (n = n.replace("'", "\\'")),
          -1 !== s.indexOf("'") && (s = s.replace("'", "\\'")),
          (n = decodeURIComponent(n)),
          (s = decodeURIComponent(s)),
          b.encodeLinks)
        ) {
          var a = encodeURI(n).toLowerCase(),
            i = encodeURI(s).toLowerCase();
          return y(
            "._" +
              I +
              "-h[href='#" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              n +
              "#" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              s +
              "#" +
              e +
              "'],._" +
              I +
              "-h[href='#/" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              n +
              "#/" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              s +
              "#/" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              a +
              "#/" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              a +
              "#" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              i +
              "#/" +
              e +
              "'],._" +
              I +
              "-h[href='" +
              i +
              "#" +
              e +
              "']"
          );
        }
        return y(
          "._" +
            I +
            "-h[href='#" +
            e +
            "'],._" +
            I +
            "-h[href='" +
            n +
            "#" +
            e +
            "'],._" +
            I +
            "-h[href='" +
            s +
            "#" +
            e +
            "'],._" +
            I +
            "-h[href='#/" +
            e +
            "'],._" +
            I +
            "-h[href='" +
            n +
            "#/" +
            e +
            "'],._" +
            I +
            "-h[href='" +
            s +
            "#/" +
            e +
            "']"
        );
      },
      _setClasses: function (e, t, n) {
        var s = b.clickedClass,
          a = b.targetClass,
          i = b.highlightClass;
        e && s && "" !== s
          ? (y("." + s).removeClass(s), l.addClass(s))
          : t &&
            a &&
            "" !== a &&
            n &&
            i &&
            "" !== i &&
            (w._currentTarget.call(null, t)
              ? (t.addClass(a), n.addClass(i))
              : (!b.keepHighlightUntilNext || 1 < y("." + i).length) &&
                (t.removeClass(a), n.removeClass(i)));
      },
      _extendClasses: function () {
        var e = b.targetClass,
          t = b.highlightClass,
          n = y("." + e),
          s = y("." + t),
          a = e + "-first",
          i = e + "-last",
          l = t + "-first",
          o = t + "-last";
        y("._" + I + "-t").removeClass(a + " " + i),
          y("._" + I + "-h").removeClass(l + " " + o),
          b.forceSingleHighlight
            ? b.keepHighlightUntilNext && 1 < n.length
              ? (n.slice(0, 1).removeClass(e), s.slice(0, 1).removeClass(t))
              : (n.slice(1).removeClass(e), s.slice(1).removeClass(t))
            : (n.slice(0, 1).addClass(a).end().slice(-1).addClass(i),
              s.slice(0, 1).addClass(l).end().slice(-1).addClass(o));
      },
      _removeClasses: function (e) {
        y("." + b.clickedClass).removeClass(b.clickedClass),
          y("." + b.targetClass).removeClass(
            b.targetClass +
              " " +
              b.targetClass +
              "-first " +
              b.targetClass +
              "-last"
          ),
          y("." + b.highlightClass).removeClass(
            b.highlightClass +
              " " +
              b.highlightClass +
              "-first " +
              b.highlightClass +
              "-last"
          ),
          e &&
            (y("._" + I + "-t").removeClass("_" + I + "-t"),
            y("._" + I + "-h").removeClass("_" + I + "-h"));
      },
      _currentTarget: function (e) {
        if (e.data(I)) {
          var t = b["target_" + e.data(I).i],
            n = e.data("ps2id-target"),
            s =
              n && y(n)[0]
                ? y(n)[0].getBoundingClientRect()
                : e[0].getBoundingClientRect();
          if (void 0 !== t) {
            var a = e.offset().top,
              i = e.offset().left,
              l = t.from ? t.from + a : a,
              o = t.to ? t.to + a : a,
              r = t.fromX ? t.fromX + i : i,
              c = t.toX ? t.toX + i : i;
            return s.top >= o && s.top <= l && s.left >= c && s.left <= r;
          }
          var h = y(O).height(),
            u = y(O).width(),
            d = n ? y(n).height() : e.height(),
            f = n ? y(n).width() : e.width(),
            g = 1 + d / h,
            p = g,
            _ = d < h ? g * (h / d) : g,
            w = 1 + f / u,
            m = w,
            S = f < u ? w * (u / f) : w,
            v = [
              s.top <= h / p,
              s.bottom >= h / _,
              s.left <= u / m,
              s.right >= u / S,
            ];
          if (b.highlightByNextTarget) {
            var C = e.data(I).tn;
            if (C) {
              var x = C[0].getBoundingClientRect();
              "vertical" === b.layout
                ? (v = [s.top <= h / 2, x.top > h / 2, 1, 1])
                : "horizontal" === b.layout &&
                  (v = [1, 1, s.left <= u / 2, x.left > u / 2]);
            }
          }
          return v[0] && v[1] && v[2] && v[3];
        }
      },
      _scrollTo: function () {
        (d = w._scrollSpeed.call(null)),
          (o = b.pageEndSmoothScroll ? w._pageEndSmoothScroll.call(null) : o);
        var e = y("html,body"),
          t = b.autoScrollSpeed ? w._autoScrollSpeed.call(null) : d,
          n = e.is(":animated") ? b.scrollingEasing : b.scrollEasing,
          s = y(O).scrollTop(),
          a = y(O).scrollLeft();
        switch (r) {
          case "horizontal":
            a != o[1] &&
              (w._callbacks.call(null, "onStart"),
              e
                .stop()
                .animate({ scrollLeft: o[1] }, t, n)
                .promise()
                .then(function () {
                  w._callbacks.call(null, "onComplete");
                }));
            break;
          case "auto":
            var i;
            if (s != o[0] || a != o[1])
              if (
                (w._callbacks.call(null, "onStart"),
                navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))
              )
                e.stop()
                  .animate(
                    { pageYOffset: o[0], pageXOffset: o[1] },
                    {
                      duration: t,
                      easing: n,
                      step: function (e, t) {
                        "pageXOffset" == t.prop
                          ? (i = e)
                          : "pageYOffset" == t.prop && O.scrollTo(i, e);
                      },
                    }
                  )
                  .promise()
                  .then(function () {
                    w._callbacks.call(null, "onComplete");
                  });
              else
                e.stop()
                  .animate({ scrollTop: o[0], scrollLeft: o[1] }, t, n)
                  .promise()
                  .then(function () {
                    w._callbacks.call(null, "onComplete");
                  });
            break;
          default:
            s != o[0] &&
              (w._callbacks.call(null, "onStart"),
              e
                .stop()
                .animate({ scrollTop: o[0] }, t, n)
                .promise()
                .then(function () {
                  w._callbacks.call(null, "onComplete");
                }));
        }
      },
      _pageEndSmoothScroll: function () {
        var e = y(c).height(),
          t = y(c).width(),
          n = y(O).height(),
          s = y(O).width();
        return [e - o[0] < n ? e - n : o[0], t - o[1] < s ? t - s : o[1]];
      },
      _scrollSpeed: function () {
        var s = b.scrollSpeed;
        return (
          l &&
            l.length &&
            l.add(l.parent()).each(function () {
              var e = y(this);
              if (e.attr("class")) {
                var t = e.attr("class").split(" ");
                for (var n in t)
                  if (String(t[n]).match(/^ps2id-speed-\d+$/)) {
                    s = t[n].split("ps2id-speed-")[1];
                    break;
                  }
              }
            }),
          parseInt(s)
        );
      },
      _autoScrollSpeed: function () {
        var e = y(O).scrollTop(),
          t = y(O).scrollLeft(),
          n = y(c).height(),
          s = y(c).width(),
          a = [
            d + (d * Math.floor((Math.abs(o[0] - e) / n) * 100)) / 100,
            d + (d * Math.floor((Math.abs(o[1] - t) / s) * 100)) / 100,
          ];
        return Math.max.apply(Math, a);
      },
      _callbacks: function (e) {
        if (b)
          switch (
            ((this[I] = {
              trigger: a,
              clicked: l,
              target: i,
              scrollTo: { y: o[0], x: o[1] },
            }),
            e)
          ) {
            case "onStart":
              if (
                b.appendHash &&
                O.history &&
                O.history.pushState &&
                l &&
                l.length
              ) {
                var t = "#" + l.attr("href").split("#")[1];
                t !== O.location.hash && history.pushState("", "", t);
              }
              b.onStart.call(null, this[I]);
              break;
            case "onComplete":
              b.onComplete.call(null, this[I]);
          }
      },
      _reset: function () {
        r = h = u = !1;
      },
      _isInit: function () {
        s || _.init.apply(this);
      },
      _live: function () {
        t = setTimeout(function () {
          b.live
            ? y(w._highlightSelector()).length !== p && w._setup.call(null)
            : t && clearTimeout(t),
            w._live.call(null);
        }, 1e3);
      },
      _easing: function () {
        function t(e) {
          var t = 7.5625,
            n = 2.75;
          return e < 1 / n
            ? t * e * e
            : e < 2 / n
            ? t * (e -= 1.5 / n) * e + 0.75
            : e < 2.5 / n
            ? t * (e -= 2.25 / n) * e + 0.9375
            : t * (e -= 2.625 / n) * e + 0.984375;
        }
        (y.easing.easeInQuad =
          y.easing.easeInQuad ||
          function (e) {
            return e * e;
          }),
          (y.easing.easeOutQuad =
            y.easing.easeOutQuad ||
            function (e) {
              return 1 - (1 - e) * (1 - e);
            }),
          (y.easing.easeInOutQuad =
            y.easing.easeInOutQuad ||
            function (e) {
              return e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
            }),
          (y.easing.easeInCubic =
            y.easing.easeInCubic ||
            function (e) {
              return e * e * e;
            }),
          (y.easing.easeOutCubic =
            y.easing.easeOutCubic ||
            function (e) {
              return 1 - Math.pow(1 - e, 3);
            }),
          (y.easing.easeInOutCubic =
            y.easing.easeInOutCubic ||
            function (e) {
              return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
            }),
          (y.easing.easeInQuart =
            y.easing.easeInQuart ||
            function (e) {
              return e * e * e * e;
            }),
          (y.easing.easeOutQuart =
            y.easing.easeOutQuart ||
            function (e) {
              return 1 - Math.pow(1 - e, 4);
            }),
          (y.easing.easeInOutQuart =
            y.easing.easeInOutQuart ||
            function (e) {
              return e < 0.5
                ? 8 * e * e * e * e
                : 1 - Math.pow(-2 * e + 2, 4) / 2;
            }),
          (y.easing.easeInQuint =
            y.easing.easeInQuint ||
            function (e) {
              return e * e * e * e * e;
            }),
          (y.easing.easeOutQuint =
            y.easing.easeOutQuint ||
            function (e) {
              return 1 - Math.pow(1 - e, 5);
            }),
          (y.easing.easeInOutQuint =
            y.easing.easeInOutQuint ||
            function (e) {
              return e < 0.5
                ? 16 * e * e * e * e * e
                : 1 - Math.pow(-2 * e + 2, 5) / 2;
            }),
          (y.easing.easeInExpo =
            y.easing.easeInExpo ||
            function (e) {
              return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
            }),
          (y.easing.easeOutExpo =
            y.easing.easeOutExpo ||
            function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            }),
          (y.easing.easeInOutExpo =
            y.easing.easeInOutExpo ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : e < 0.5
                ? Math.pow(2, 20 * e - 10) / 2
                : (2 - Math.pow(2, -20 * e + 10)) / 2;
            }),
          (y.easing.easeInSine =
            y.easing.easeInSine ||
            function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            }),
          (y.easing.easeOutSine =
            y.easing.easeOutSine ||
            function (e) {
              return Math.sin((e * Math.PI) / 2);
            }),
          (y.easing.easeInOutSine =
            y.easing.easeInOutSine ||
            function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            }),
          (y.easing.easeInCirc =
            y.easing.easeInCirc ||
            function (e) {
              return 1 - Math.sqrt(1 - Math.pow(e, 2));
            }),
          (y.easing.easeOutCirc =
            y.easing.easeOutCirc ||
            function (e) {
              return Math.sqrt(1 - Math.pow(e - 1, 2));
            }),
          (y.easing.easeInOutCirc =
            y.easing.easeInOutCirc ||
            function (e) {
              return e < 0.5
                ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
                : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
            }),
          (y.easing.easeInElastic =
            y.easing.easeInElastic ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : -Math.pow(2, 10 * e - 10) *
                  Math.sin((10 * e - 10.75) * ((2 * Math.PI) / 3));
            }),
          (y.easing.easeOutElastic =
            y.easing.easeOutElastic ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : Math.pow(2, -10 * e) *
                    Math.sin((10 * e - 0.75) * ((2 * Math.PI) / 3)) +
                  1;
            }),
          (y.easing.easeInOutElastic =
            y.easing.easeInOutElastic ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : e < 0.5
                ? (-Math.pow(2, 20 * e - 10) *
                    Math.sin((20 * e - 11.125) * ((2 * Math.PI) / 4.5))) /
                  2
                : (Math.pow(2, -20 * e + 10) *
                    Math.sin((20 * e - 11.125) * ((2 * Math.PI) / 4.5))) /
                    2 +
                  1;
            }),
          (y.easing.easeInBack =
            y.easing.easeInBack ||
            function (e) {
              return 2.70158 * e * e * e - 1.70158 * e * e;
            }),
          (y.easing.easeOutBack =
            y.easing.easeOutBack ||
            function (e) {
              return (
                1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2)
              );
            }),
          (y.easing.easeInOutBack =
            y.easing.easeInOutBack ||
            function (e) {
              return e < 0.5
                ? (Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095)) / 2
                : (Math.pow(2 * e - 2, 2) *
                    (3.5949095 * (2 * e - 2) + 2.5949095) +
                    2) /
                    2;
            }),
          (y.easing.easeInBounce =
            y.easing.easeInBounce ||
            function (e) {
              return 1 - t(1 - e);
            }),
          (y.easing.easeOutBounce = y.easing.easeOutBounce || t),
          (y.easing.easeInOutBounce =
            y.easing.easeInOutBounce ||
            function (e) {
              return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
            });
      },
    };
  w._easing.call(),
    (y.fn[f] = function (e) {
      return _[e]
        ? _[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void y.error("Method " + e + " does not exist")
        : _.init.apply(this, arguments);
    }),
    (y[f] = function (e) {
      return _[e]
        ? _[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void y.error("Method " + e + " does not exist")
        : _.init.apply(this, arguments);
    }),
    (y[f].defaults = g);
})(jQuery, window, document),
  (function (l) {
    var o = "mPS2id",
      r = mPS2id_params,
      c = r.shortcode_class,
      h = location.hash || null,
      u = function (e, t) {
        try {
          l(e);
        } catch (e) {
          return !1;
        }
        return (
          l(e).length &&
          (t ||
            l("a[href*='" + e + "']").filter(function () {
              return 1 == l(this).data(o + "Element");
            }).length)
        );
      },
      d = function (e) {
        if (-1 === e.indexOf(",")) return e;
        var t = e.split(",");
        return { y: t[0] || "0", x: t[1] || "0" };
      },
      f = function (e) {
        if (-1 === e.indexOf(",")) return e;
        var t = e.split(",");
        return [t[0] || "0", t[1] || "0"];
      },
      g = function (e) {
        "horizontal" !== e && l(window).scrollTop(0),
          "vertical" !== e && l(window).scrollLeft(0);
      },
      p = function (e, t) {
        for (var n = e.click.length - 1; 0 <= n; n--) {
          var s = e.click[n];
          s &&
            "mPS2id" != s.namespace &&
            ("a[href*=#]" === s.selector
              ? (s.selector = "a[href*=#]:not(._mPS2id-h)")
              : 'a[href*="#"]' === s.selector
              ? (s.selector = 'a[href*="#"]:not(._mPS2id-h)')
              : "a[href*=#]:not([href=#])" === s.selector
              ? (s.selector = "a[href*=#]:not([href=#]):not(._mPS2id-h)")
              : 'a[href*="#"]:not([href="#"])' === s.selector
              ? (s.selector = 'a[href*="#"]:not([href="#"]):not(._mPS2id-h)')
              : s.selector && -1 !== s.selector.indexOf("mobmenu")
              ? t.off("click")
              : t.off("click", s.handler));
        }
      },
      _ =
        "a[data-ps2id-api='true'][href*='#'],.ps2id > a[href*='#'],a.ps2id[href*='#']";
    l(function () {
      for (var e = 0; e < r.total_instances; e++) {
        var t = l("[class*='ps2id-id-']");
        if (
          (t.length &&
            t.each(function () {
              var e,
                t = l(this),
                n = t.attr("class").split(" ");
              if (!t.attr("id"))
                for (var s in n)
                  if (String(n[s]).match(/^ps2id-id-\S+$/)) {
                    (e = n[s].split("ps2id-id-")[1]),
                      l("#" + e).length || t.attr("id", e);
                    break;
                  }
            }),
          "true" === r.instances[o + "_instance_" + e].scrollToHash &&
            h &&
            (l(r.instances[o + "_instance_" + e].selector + ",." + c + "," + _)
              .not(r.instances[o + "_instance_" + e].excludeSelector)
              .each(function () {
                l(this).data(o + "Element", !0);
              }),
            u(
              h,
              "true" === r.instances[o + "_instance_" + e].scrollToHashForAll
            )))
        ) {
          var n =
            "true" ===
            r.instances[o + "_instance_" + e].scrollToHashRemoveUrlHash
              ? window.location.href.replace(/#.*$/, "")
              : window.location.href.replace(/#.*$/, "#");
          g(r.instances[o + "_instance_" + e].layout),
            window.history && window.history.replaceState
              ? window.history.replaceState("", "", n)
              : (window.location.href = n);
        }
      }
      l("html").css("scroll-behavior", "auto"),
        window.twentytwenty &&
          window.twentytwenty.smoothScroll &&
          (window.twentytwenty.smoothScroll = null);
    }),
      l(window).on("load", function () {
        for (var e = 0; e < r.total_instances; e++) {
          0 <=
            r.instances[o + "_instance_" + e].selector.indexOf(
              "a[href*=#]:not([href=#])"
            ) &&
            console.log(
              "ps2id selector issue: a[href*=#]:not([href=#]) selector needs quotes"
            ),
            0 <=
              r.instances[o + "_instance_" + e].excludeSelector.indexOf(
                "a[href*=#]:not([href=#])"
              ) &&
              console.log(
                "ps2id excluded selector issue: a[href*=#]:not([href=#]) selector needs quotes"
              );
          var n = l(
              r.instances[o + "_instance_" + e].selector + ",." + c + "," + _
            ),
            t = r.instances[o + "_instance_" + e].autoCorrectScroll,
            s = 0;
          if (
            (window.ps2id_special_params &&
              (window.ps2id_special_params.highlightSelector &&
                (r.instances[o + "_instance_" + e].highlightSelector =
                  window.ps2id_special_params.highlightSelector),
              window.ps2id_special_params.scrollSpeed &&
                (r.instances[o + "_instance_" + e].scrollSpeed =
                  window.ps2id_special_params.scrollSpeed),
              window.ps2id_special_params.scrollEasing &&
                (r.instances[o + "_instance_" + e].scrollEasing =
                  window.ps2id_special_params.scrollEasing),
              void 0 !== window.ps2id_special_params.forceSingleHighlight &&
                (r.instances[o + "_instance_" + e].forceSingleHighlight =
                  window.ps2id_special_params.forceSingleHighlight),
              void 0 !== window.ps2id_special_params.keepHighlightUntilNext &&
                (r.instances[o + "_instance_" + e].keepHighlightUntilNext =
                  window.ps2id_special_params.keepHighlightUntilNext),
              void 0 !== window.ps2id_special_params.appendHash &&
                (r.instances[o + "_instance_" + e].appendHash =
                  window.ps2id_special_params.appendHash),
              window.ps2id_special_params.layout &&
                (r.instances[o + "_instance_" + e].layout =
                  window.ps2id_special_params.layout),
              window.ps2id_special_params.offset &&
                (r.instances[o + "_instance_" + e].offset =
                  window.ps2id_special_params.offset)),
            n.mPageScroll2id({
              scrollSpeed: r.instances[o + "_instance_" + e].scrollSpeed,
              autoScrollSpeed:
                "true" === r.instances[o + "_instance_" + e].autoScrollSpeed,
              scrollEasing: r.instances[o + "_instance_" + e].scrollEasing,
              scrollingEasing:
                r.instances[o + "_instance_" + e].scrollingEasing,
              pageEndSmoothScroll:
                "true" ===
                r.instances[o + "_instance_" + e].pageEndSmoothScroll,
              layout: r.instances[o + "_instance_" + e].layout,
              offset: d(r.instances[o + "_instance_" + e].offset.toString()),
              highlightSelector:
                r.instances[o + "_instance_" + e].highlightSelector,
              clickedClass: r.instances[o + "_instance_" + e].clickedClass,
              targetClass: r.instances[o + "_instance_" + e].targetClass,
              highlightClass: r.instances[o + "_instance_" + e].highlightClass,
              forceSingleHighlight:
                "true" ===
                r.instances[o + "_instance_" + e].forceSingleHighlight,
              keepHighlightUntilNext:
                "true" ===
                r.instances[o + "_instance_" + e].keepHighlightUntilNext,
              highlightByNextTarget:
                "true" ===
                r.instances[o + "_instance_" + e].highlightByNextTarget,
              disablePluginBelow: f(
                r.instances[o + "_instance_" + e].disablePluginBelow.toString()
              ),
              appendHash:
                "true" === r.instances[o + "_instance_" + e].appendHash,
              onStart: function () {
                "true" === t && "selector" === mPS2id.trigger && s++;
              },
              onComplete: function () {
                1 == s &&
                  (mPS2id.clicked.length &&
                    mPS2id.clicked.trigger("click.mPS2id"),
                  (s = 0));
              },
              excludeSelectors:
                r.instances[o + "_instance_" + e].excludeSelector,
              encodeLinks:
                "true" === r.instances[o + "_instance_" + e].encodeLinks,
              liveSelector:
                r.instances[o + "_instance_" + e].selector + ",." + c + "," + _,
            }),
            "true" === r.instances[o + "_instance_" + e].scrollToHash &&
              h &&
              u(
                h,
                "true" === r.instances[o + "_instance_" + e].scrollToHashForAll
              ))
          ) {
            g(r.instances[o + "_instance_" + e].layout);
            var a =
                r.instances[o + "_instance_" + e].scrollToHashUseElementData,
              i = l(
                "a._mPS2id-h[href$='" +
                  h +
                  "'][data-ps2id-offset]:not([data-ps2id-offset=''])"
              ).last();
            setTimeout(function () {
              "true" === a && i.length
                ? i.trigger("click.mPS2id")
                : l.mPageScroll2id("scrollTo", h),
                -1 !== window.location.href.indexOf("#") &&
                  (window.history && window.history.replaceState
                    ? window.history.replaceState("", "", h)
                    : (window.location.hash = h));
            }, r.instances[o + "_instance_" + e].scrollToHashDelay);
          }
          "true" ===
            r.instances[o + "_instance_" + e].unbindUnrelatedClickEvents &&
            setTimeout(function () {
              var e = n.length ? l._data(n[0], "events") : null,
                t = n.length ? l._data(l(document)[0], "events") : null;
              e && p(e, n), t && p(t, n);
            }, 300),
            "true" ===
              r.instances[o + "_instance_" + e].normalizeAnchorPointTargets &&
              l("a._mPS2id-t[id]:empty").css({
                display: "inline-block",
                "line-height": 0,
                width: 0,
                height: 0,
                border: "none",
              }),
            "true" ===
              r.instances[o + "_instance_" + e].stopScrollOnUserAction &&
              l(document).on(
                "mousewheel DOMMouseScroll touchmove",
                function () {
                  var e = l("html,body");
                  e.is(":animated") && e.stop();
                }
              );
        }
      }),
      l.extend(l.expr[":"], {
        absolute:
          l.expr[":"].absolute ||
          function (e) {
            return "absolute" === l(e).css("position");
          },
        relative:
          l.expr[":"].relative ||
          function (e) {
            return "relative" === l(e).css("position");
          },
        static:
          l.expr[":"].static ||
          function (e) {
            return "static" === l(e).css("position");
          },
        fixed:
          l.expr[":"].fixed ||
          function (e) {
            return "fixed" === l(e).css("position");
          },
        width:
          l.expr[":"].width ||
          function (e, t, n) {
            var s = n[3].replace("&lt;", "<").replace("&gt;", ">");
            return (
              !!s &&
              (">" === s.substr(0, 1)
                ? l(e).width() > s.substr(1)
                : "<" === s.substr(0, 1)
                ? l(e).width() < s.substr(1)
                : l(e).width() === parseInt(s))
            );
          },
        height:
          l.expr[":"].height ||
          function (e, t, n) {
            var s = n[3].replace("&lt;", "<").replace("&gt;", ">");
            return (
              !!s &&
              (">" === s.substr(0, 1)
                ? l(e).height() > s.substr(1)
                : "<" === s.substr(0, 1)
                ? l(e).height() < s.substr(1)
                : l(e).height() === parseInt(s))
            );
          },
      });
  })(jQuery);
//silence is golden;
function twentytwentyoneToggleAriaExpanded(el, withListeners) {
  if ("true" !== el.getAttribute("aria-expanded")) {
    el.setAttribute("aria-expanded", "true");
    twentytwentyoneSubmenuPosition(el.parentElement);
    if (withListeners) {
      document.addEventListener(
        "click",
        twentytwentyoneCollapseMenuOnClickOutside
      );
    }
  } else {
    el.setAttribute("aria-expanded", "false");
    if (withListeners) {
      document.removeEventListener(
        "click",
        twentytwentyoneCollapseMenuOnClickOutside
      );
    }
  }
}
function twentytwentyoneCollapseMenuOnClickOutside(event) {
  if (!document.getElementById("site-navigation").contains(event.target)) {
    document
      .getElementById("site-navigation")
      .querySelectorAll(".sub-menu-toggle")
      .forEach(function (button) {
        button.setAttribute("aria-expanded", "false");
      });
  }
}
function twentytwentyoneSubmenuPosition(li) {
  var subMenu = li.querySelector("ul.sub-menu"),
    rect,
    right,
    left,
    windowWidth;
  if (!subMenu) {
    return;
  }
  rect = subMenu.getBoundingClientRect();
  right = Math.round(rect.right);
  left = Math.round(rect.left);
  windowWidth = Math.round(window.innerWidth);
  if (right > windowWidth) {
    subMenu.classList.add("submenu-reposition-right");
  } else if (document.body.classList.contains("rtl") && left < 0) {
    subMenu.classList.add("submenu-reposition-left");
  }
}
function twentytwentyoneExpandSubMenu(el) {
  el.closest("nav")
    .querySelectorAll(".sub-menu-toggle")
    .forEach(function (button) {
      if (button !== el) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  twentytwentyoneToggleAriaExpanded(el, true);
  el.parentNode
    .querySelectorAll("ul > li:last-child > a")
    .forEach(function (linkEl) {
      linkEl.addEventListener("blur", function (event) {
        if (!el.parentNode.contains(event.relatedTarget)) {
          el.setAttribute("aria-expanded", "false");
        }
      });
    });
}
(function () {
  var navMenu = function (id) {
    var wrapper = document.body,
      mobileButton = document.getElementById(id + "-mobile-menu");
    if (mobileButton) {
      mobileButton.onclick = function () {
        wrapper.classList.toggle(id + "-navigation-open");
        wrapper.classList.toggle("lock-scrolling");
        twentytwentyoneToggleAriaExpanded(mobileButton);
        mobileButton.focus();
      };
    }
    document.addEventListener("keydown", function (event) {
      var modal,
        elements,
        selectors,
        lastEl,
        firstEl,
        activeEl,
        tabKey,
        shiftKey,
        escKey;
      if (!wrapper.classList.contains(id + "-navigation-open")) {
        return;
      }
      modal = document.querySelector("." + id + "-navigation");
      selectors = "input, a, button";
      elements = modal.querySelectorAll(selectors);
      elements = Array.prototype.slice.call(elements);
      tabKey = event.keyCode === 9;
      shiftKey = event.shiftKey;
      escKey = event.keyCode === 27;
      activeEl = document.activeElement;
      lastEl = elements[elements.length - 1];
      firstEl = elements[0];
      if (escKey) {
        event.preventDefault();
        wrapper.classList.remove(id + "-navigation-open", "lock-scrolling");
        twentytwentyoneToggleAriaExpanded(mobileButton);
        mobileButton.focus();
      }
      if (!shiftKey && tabKey && lastEl === activeEl) {
        event.preventDefault();
        firstEl.focus();
      }
      if (shiftKey && tabKey && firstEl === activeEl) {
        event.preventDefault();
        lastEl.focus();
      }
      if (tabKey && firstEl === lastEl) {
        event.preventDefault();
      }
    });
    document.addEventListener("click", function (event) {
      if (event.target.hash && event.target.hash.includes("#")) {
        wrapper.classList.remove(id + "-navigation-open", "lock-scrolling");
        twentytwentyoneToggleAriaExpanded(mobileButton);
        setTimeout(function () {
          var anchor = document.getElementById(event.target.hash.slice(1));
          anchor.scrollIntoView();
        }, 550);
      }
    });
  };
  window.addEventListener("load", function () {
    new navMenu("primary");
  });
})();
function twentytwentyoneResponsiveEmbeds() {
  var proportion, parentWidth;
  document.querySelectorAll("iframe").forEach(function (iframe) {
    if (iframe.width && iframe.height) {
      proportion = parseFloat(iframe.width) / parseFloat(iframe.height);
      parentWidth = parseFloat(
        window
          .getComputedStyle(iframe.parentElement, null)
          .width.replace("px", "")
      );
      iframe.style.maxWidth = "100%";
      iframe.style.maxHeight =
        Math.round(parentWidth / proportion).toString() + "px";
    }
  });
}
twentytwentyoneResponsiveEmbeds();
window.onresize = twentytwentyoneResponsiveEmbeds;
/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery
      );
})(this, function (t, e) {
  "use strict";
  function n(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var i = n(e);
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function a() {
    return (a =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  function s(t) {
    var e = this,
      n = !1;
    return (
      i.default(this).one(l.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var l = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = i.default(t).css("transition-duration"),
        n = i.default(t).css("transition-delay"),
        o = parseFloat(e),
        r = parseFloat(n);
      return o || r
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      i.default(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && l.isElement(r)
                ? "element"
                : null === (s = r) || "undefined" == typeof s
                ? "" + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? l.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof i.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = i.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  l.jQueryDetection(),
    (i.default.fn.emulateTransitionEnd = s),
    (i.default.event.special[l.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (i.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var u = "alert",
    f = i.default.fn[u],
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.alert"),
            (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = l.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest(".alert")[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = i.default.Event("close.bs.alert");
          return i.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (i.default(t).removeClass("show"), i.default(t).hasClass("fade"))
          ) {
            var n = l.getTransitionDurationFromElement(t);
            i.default(t)
              .one(l.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          i.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.alert");
            o || ((o = new t(this)), n.data("bs.alert", o)),
              "close" === e && o[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      d._handleDismiss(new d())
    ),
    (i.default.fn[u] = d._jQueryInterface),
    (i.default.fn[u].Constructor = d),
    (i.default.fn[u].noConflict = function () {
      return (i.default.fn[u] = f), d._jQueryInterface;
    });
  var c = i.default.fn.button,
    h = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var r = n.querySelector(".active");
                  r && i.default(r).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange ||
                  i.default(o).trigger("change")),
                o.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && i.default(this._element).toggleClass("active"));
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this),
              r = o.data("bs.button");
            r || ((r = new t(this)), o.data("bs.button", r)),
              (r.shouldAvoidTriggerChange = n),
              "toggle" === e && r[e]();
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
        n = e;
      if (
        (i.default(e).hasClass("btn") || (e = i.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = e.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          h._jQueryInterface.call(
            i.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var e = i.default(t.target).closest(".btn")[0];
        i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    i.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        "true" === s.getAttribute("aria-pressed")
          ? s.classList.add("active")
          : s.classList.remove("active");
      }
    }),
    (i.default.fn.button = h._jQueryInterface),
    (i.default.fn.button.Constructor = h),
    (i.default.fn.button.noConflict = function () {
      return (i.default.fn.button = c), h._jQueryInterface;
    });
  var p = "carousel",
    m = ".bs.carousel",
    g = i.default.fn[p],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    _ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    b = { TOUCH: "touch", PEN: "pen" },
    y = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide("next");
        }),
        (e.nextWhenVisible = function () {
          var t = i.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              i.default(this._element).one("slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var o = t > n ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (e.dispose = function () {
          i.default(this._element).off(m),
            i.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = a({}, v, t)), l.typeCheckConfig(p, t, _), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            i.default(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              i
                .default(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  b[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            i
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (i
                    .default(this._element)
                    .on("pointerdown.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("pointerup.bs.carousel", function (t) {
                      return n(t);
                    }),
                  this._element.classList.add("pointer-event"))
                : (i
                    .default(this._element)
                    .on("touchstart.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      return (function (e) {
                        e.originalEvent.touches &&
                        e.originalEvent.touches.length > 1
                          ? (t.touchDeltaX = 0)
                          : (t.touchDeltaX =
                              e.originalEvent.touches[0].clientX -
                              t.touchStartX);
                      })(e);
                    }),
                  i
                    .default(this._element)
                    .on("touchend.bs.carousel", function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === a
            ? this._items[this._items.length - 1]
            : this._items[a];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            r = i.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: o,
              to: n,
            });
          return i.default(this._element).trigger(r), r;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            i.default(e).removeClass("active");
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && i.default(n).addClass("active");
          }
        }),
        (e._slide = function (t, e) {
          var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(".active.carousel-item"),
            u = this._getItemIndex(s),
            f = e || (s && this._getItemByDirection(t, s)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);
          if (
            ("next" === t
              ? ((n = "carousel-item-left"),
                (o = "carousel-item-next"),
                (r = "left"))
              : ((n = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (r = "right")),
            f && i.default(f).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
            s &&
            f
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(f);
            var h = i.default.Event("slid.bs.carousel", {
              relatedTarget: f,
              direction: r,
              from: u,
              to: d,
            });
            if (i.default(this._element).hasClass("slide")) {
              i.default(f).addClass(o),
                l.reflow(f),
                i.default(s).addClass(n),
                i.default(f).addClass(n);
              var p = parseInt(f.getAttribute("data-interval"), 10);
              p
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = p))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = l.getTransitionDurationFromElement(s);
              i.default(s)
                .one(l.TRANSITION_END, function () {
                  i
                    .default(f)
                    .removeClass(n + " " + o)
                    .addClass("active"),
                    i.default(s).removeClass("active " + o + " " + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return i.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              i.default(s).removeClass("active"),
                i.default(f).addClass("active"),
                (this._isSliding = !1),
                i.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.carousel"),
              o = a({}, v, i.default(this).data());
            "object" == typeof e && (o = a({}, o, e));
            var r = "string" == typeof e ? e : o.slide;
            if (
              (n ||
                ((n = new t(this, o)), i.default(this).data("bs.carousel", n)),
              "number" == typeof e)
            )
              n.to(e);
            else if ("string" == typeof r) {
              if ("undefined" == typeof n[r])
                throw new TypeError('No method named "' + r + '"');
              n[r]();
            } else o.interval && o.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = l.getSelectorFromElement(this);
          if (n) {
            var o = i.default(n)[0];
            if (o && i.default(o).hasClass("carousel")) {
              var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (r.interval = !1),
                t._jQueryInterface.call(i.default(o), r),
                s && i.default(o).data("bs.carousel").to(s),
                e.preventDefault();
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      y._dataApiClickHandler
    ),
    i.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var o = i.default(t[e]);
        y._jQueryInterface.call(o, o.data());
      }
    }),
    (i.default.fn[p] = y._jQueryInterface),
    (i.default.fn[p].Constructor = y),
    (i.default.fn[p].noConflict = function () {
      return (i.default.fn[p] = g), y._jQueryInterface;
    });
  var w = "collapse",
    E = i.default.fn[w],
    T = { toggle: !0, parent: "" },
    C = { toggle: "boolean", parent: "(string|element)" },
    S = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = l.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (e) {
                return e === t;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          i.default(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            o = this;
          if (
            !this._isTransitioning &&
            !i.default(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (e = null),
            !(
              e &&
              (n = i.default(e).not(this._selector).data("bs.collapse")) &&
              n._isTransitioning
            ))
          ) {
            var r = i.default.Event("show.bs.collapse");
            if (
              (i.default(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  i.default(e).not(this._selector),
                  "hide"
                ),
                n || i.default(e).data("bs.collapse", null));
              var a = this._getDimension();
              i
                .default(this._element)
                .removeClass("collapse")
                .addClass("collapsing"),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  i
                    .default(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                u = l.getTransitionDurationFromElement(this._element);
              i
                .default(this._element)
                .one(l.TRANSITION_END, function () {
                  i
                    .default(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[a] = ""),
                    o.setTransitioning(!1),
                    i.default(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(u),
                (this._element.style[a] = this._element[s] + "px");
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            i.default(this._element).hasClass("show")
          ) {
            var e = i.default.Event("hide.bs.collapse");
            if (
              (i.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                l.reflow(this._element),
                i
                  .default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var a = this._triggerArray[r],
                    s = l.getSelectorFromElement(a);
                  if (null !== s)
                    i
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass("show") ||
                      i
                        .default(a)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var u = l.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(l.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    i
                      .default(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(u);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = a({}, T, t)).toggle = Boolean(t.toggle)),
            l.typeCheckConfig(w, t, C),
            t
          );
        }),
        (e._getDimension = function () {
          return i.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (e._getParent = function () {
          var e,
            n = this;
          l.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(e.querySelectorAll(o));
          return (
            i.default(r).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = i.default(t).hasClass("show");
          e.length &&
            i.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = l.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.collapse"),
              r = a({}, T, n.data(), "object" == typeof e && e ? e : {});
            if (
              (!o &&
                r.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), n.data("bs.collapse", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return T;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var e = i.default(this),
        n = l.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(n));
      i.default(o).each(function () {
        var t = i.default(this),
          n = t.data("bs.collapse") ? "toggle" : e.data();
        S._jQueryInterface.call(t, n);
      });
    }),
    (i.default.fn[w] = S._jQueryInterface),
    (i.default.fn[w].Constructor = S),
    (i.default.fn[w].noConflict = function () {
      return (i.default.fn[w] = E), S._jQueryInterface;
    });
  var D =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    N = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })();
  var k =
    D && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, N));
          };
        };
  function A(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function I(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function O(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function x(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = I(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t));
  }
  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var L = D && !(!window.MSInputMethodContext || !document.documentMode),
    P = D && /MSIE 10/.test(navigator.userAgent);
  function F(t) {
    return 11 === t ? L : 10 === t ? P : L || P;
  }
  function R(t) {
    if (!t) return document.documentElement;
    for (
      var e = F(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === I(n, "position")
        ? R(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function H(t) {
    return null !== t.parentNode ? H(t.parentNode) : t;
  }
  function M(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (s = (a = l).nodeName) ||
        ("HTML" !== s && R(a.firstElementChild) !== a)
        ? R(l)
        : l;
    var u = H(t);
    return u.host ? M(u.host, e) : M(t, H(e).host);
  }
  function B(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function q(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = B(e, "top"),
      o = B(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Q(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"]) +
      parseFloat(t["border" + i + "Width"])
    );
  }
  function W(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      F(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function U(t) {
    var e = t.body,
      n = t.documentElement,
      i = F(10) && getComputedStyle(n);
    return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
  }
  var V = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    Y = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    z = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    X =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function K(t) {
    return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function G(t) {
    var e = {};
    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        var n = B(t, "top"),
          i = B(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
      a = r.width || t.clientWidth || o.width,
      s = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - a,
      u = t.offsetHeight - s;
    if (l || u) {
      var f = I(t);
      (l -= Q(f, "x")), (u -= Q(f, "y")), (o.width -= l), (o.height -= u);
    }
    return K(o);
  }
  function $(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = F(10),
      o = "HTML" === e.nodeName,
      r = G(t),
      a = G(e),
      s = x(t),
      l = I(e),
      u = parseFloat(l.borderTopWidth),
      f = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var d = K({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height,
    });
    if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
      var c = parseFloat(l.marginTop),
        h = parseFloat(l.marginLeft);
      (d.top -= u - c),
        (d.bottom -= u - c),
        (d.left -= f - h),
        (d.right -= f - h),
        (d.marginTop = c),
        (d.marginLeft = h);
    }
    return (
      (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (d = q(d, e)),
      d
    );
  }
  function J(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = $(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      a = e ? 0 : B(n),
      s = e ? 0 : B(n, "left"),
      l = {
        top: a - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return K(l);
  }
  function Z(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === I(t, "position")) return !0;
    var n = O(t);
    return !!n && Z(n);
  }
  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === I(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function et(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      a = o ? tt(t) : M(t, j(e));
    if ("viewport" === i) r = J(a, o);
    else {
      var s = void 0;
      "scrollParent" === i
        ? "BODY" === (s = x(O(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = "window" === i ? t.ownerDocument.documentElement : i);
      var l = $(s, a, o);
      if ("HTML" !== s.nodeName || Z(a)) r = l;
      else {
        var u = U(t.ownerDocument),
          f = u.height,
          d = u.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = f + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = d + l.left);
      }
    }
    var c = "number" == typeof (n = n || 0);
    return (
      (r.left += c ? n : n.left || 0),
      (r.top += c ? n : n.top || 0),
      (r.right -= c ? n : n.right || 0),
      (r.bottom -= c ? n : n.bottom || 0),
      r
    );
  }
  function nt(t) {
    return t.width * t.height;
  }
  function it(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = et(n, i, r, o),
      s = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      l = Object.keys(s)
        .map(function (t) {
          return X({ key: t }, s[t], { area: nt(s[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      u = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      f = u.length > 0 ? u[0].key : l[0].key,
      d = t.split("-")[1];
    return f + (d ? "-" + d : "");
  }
  function ot(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? tt(e) : M(e, j(n));
    return $(n, o, i);
  }
  function rt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function at(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function st(t, e, n) {
    n = n.split("-")[0];
    var i = rt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      u = r ? "width" : "height";
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[at(s)]),
      o
    );
  }
  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ut(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = lt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          A(n) &&
          ((e.offsets.popper = K(e.offsets.popper)),
          (e.offsets.reference = K(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function ft() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = ot(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = it(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = st(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = ut(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function dt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function ct(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function ht() {
    return (
      (this.state.isDestroyed = !0),
      dt(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[ct("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function pt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function mt(t, e, n, i) {
    (n.updateBound = i),
      pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = x(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          a = r ? e.ownerDocument.defaultView : e;
        a.addEventListener(n, i, { passive: !0 }),
          r || t(x(a.parentNode), n, i, o),
          o.push(a);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function gt() {
    this.state.eventsEnabled ||
      (this.state = mt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function vt() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        pt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function _t(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        _t(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var yt = D && /Firefox/i.test(navigator.userAgent);
  function wt(t, e, n) {
    var i = lt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        a = "`" + n + "`";
      console.warn(
        a +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var Et = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Tt = Et.slice(3);
  function Ct(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Tt.indexOf(t),
      i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var St = "flip",
    Dt = "clockwise",
    Nt = "counterclockwise";
  function kt(t, e, n, i) {
    var o = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      a = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      s = a.indexOf(
        lt(a, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    a[s] &&
      -1 === a[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      u =
        -1 !== s
          ? [
              a.slice(0, s).concat([a[s].split(l)[0]]),
              [a[s].split(l)[1]].concat(a.slice(s + 1)),
            ]
          : [a];
    return (
      (u = u.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
          a = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (a = !0), t)
              : a
              ? ((t[t.length - 1] += e), (a = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                a = o[2];
              if (!r) return t;
              if (0 === a.indexOf("%")) {
                var s = void 0;
                switch (a) {
                  case "%p":
                    s = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    s = i;
                }
                return (K(s)[e] / 100) * r;
              }
              if ("vh" === a || "vw" === a) {
                return (
                  (("vh" === a
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  r
                );
              }
              return r;
            })(t, o, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      o
    );
  }
  var At = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                u = s ? "width" : "height",
                f = {
                  start: z({}, l, r[l]),
                  end: z({}, l, r[l] + r[u] - a[u]),
                };
              t.offsets.popper = X({}, a, f[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0;
            return (
              (l = _t(+n) ? [+n, 0] : kt(n, r, a, s)),
              "left" === s
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === s
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === s
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === s && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || R(t.instance.popper);
            t.instance.reference === n && (n = R(n));
            var i = ct("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = et(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
            var u = e.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var n = f[t];
                  return (
                    f[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(f[t], l[t])),
                    z({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = f[n];
                  return (
                    f[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        f[n],
                        l[t] - ("right" === t ? f.width : f.height)
                      )),
                    z({}, n, i)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                f = X({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              u = l ? "height" : "width",
              f = l ? "Top" : "Left",
              d = f.toLowerCase(),
              c = l ? "left" : "top",
              h = l ? "bottom" : "right",
              p = rt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = K(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = I(t.instance.popper),
              v = parseFloat(g["margin" + f]),
              _ = parseFloat(g["border" + f + "Width"]),
              b = m - t.offsets.popper[d] - v - _;
            return (
              (b = Math.max(Math.min(a[u] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (z((n = {}), d, Math.round(b)), z(n, c, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (dt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = et(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = at(i),
              r = t.placement.split("-")[1] || "",
              a = [];
            switch (e.behavior) {
              case St:
                a = [i, o];
                break;
              case Dt:
                a = Ct(i);
                break;
              case Nt:
                a = Ct(i, !0);
                break;
              default:
                a = e.behavior;
            }
            return (
              a.forEach(function (s, l) {
                if (i !== s || a.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = at(i));
                var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c =
                    ("left" === i && d(u.right) > d(f.left)) ||
                    ("right" === i && d(u.left) < d(f.right)) ||
                    ("top" === i && d(u.bottom) > d(f.top)) ||
                    ("bottom" === i && d(u.top) < d(f.bottom)),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  v =
                    ("left" === i && h) ||
                    ("right" === i && p) ||
                    ("top" === i && m) ||
                    ("bottom" === i && g),
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((_ && "start" === r && h) ||
                      (_ && "end" === r && p) ||
                      (!_ && "start" === r && m) ||
                      (!_ && "end" === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((_ && "start" === r && p) ||
                      (_ && "end" === r && h) ||
                      (!_ && "start" === r && g) ||
                      (!_ && "end" === r && m)),
                  w = b || y;
                (c || v || w) &&
                  ((t.flipped = !0),
                  (c || v) && (i = a[l + 1]),
                  w &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = X(
                    {},
                    t.offsets.popper,
                    st(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = ut(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);
            return (
              (o[a ? "left" : "top"] =
                r[n] - (s ? o[a ? "width" : "height"] : 0)),
              (t.placement = at(e)),
              (t.offsets.popper = K(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = lt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = lt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var a = void 0 !== r ? r : e.gpuAcceleration,
              s = R(t.instance.popper),
              l = G(s),
              u = { position: o.position },
              f = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ["left", "right"].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf("-"),
                  c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
                  h = e ? r : s;
                return {
                  left: c(
                    l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left
                  ),
                  top: h(i.top),
                  bottom: h(i.bottom),
                  right: c(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !yt),
              d = "bottom" === n ? "top" : "bottom",
              c = "right" === i ? "left" : "right",
              h = ct("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" === d
                  ? "HTML" === s.nodeName
                    ? -s.clientHeight + f.bottom
                    : -l.height + f.bottom
                  : f.top),
              (p =
                "right" === c
                  ? "HTML" === s.nodeName
                    ? -s.clientWidth + f.right
                    : -l.width + f.right
                  : f.left),
              a && h)
            )
              (u[h] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (u[d] = 0),
                (u[c] = 0),
                (u.willChange = "transform");
            else {
              var g = "bottom" === d ? -1 : 1,
                v = "right" === c ? -1 : 1;
              (u[d] = m * g), (u[c] = p * v), (u.willChange = d + ", " + c);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = X({}, _, t.attributes)),
              (t.styles = X({}, u, t.styles)),
              (t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = ot(o, e, t, n.positionFixed),
              a = it(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", a),
              bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    It = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        V(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = k(this.update.bind(this))),
          (this.options = X({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = X(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return X({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              A(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        Y(t, [
          {
            key: "update",
            value: function () {
              return ft.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return ht.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return gt.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return vt.call(this);
            },
          },
        ]),
        t
      );
    })();
  (It.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (It.placements = Et),
    (It.Defaults = At);
  var Ot = "dropdown",
    xt = i.default.fn[Ot],
    jt = new RegExp("38|40|27"),
    Lt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Pt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    Ft = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass("disabled")
          ) {
            var e = i.default(this._menu).hasClass("show");
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              i.default(this._element).hasClass("disabled") ||
              i.default(this._menu).hasClass("show")
            ))
          ) {
            var n = { relatedTarget: this._element },
              o = i.default.Event("show.bs.dropdown", n),
              r = t._getParentFromElement(this._element);
            if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof It)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var a = this._element;
                "parent" === this._config.reference
                  ? (a = r)
                  : l.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    i.default(r).addClass("position-static"),
                  (this._popper = new It(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === i.default(r).closest(".navbar-nav").length &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                i.default(this._menu).toggleClass("show"),
                i
                  .default(r)
                  .toggleClass("show")
                  .trigger(i.default.Event("shown.bs.dropdown", n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass("disabled") &&
            i.default(this._menu).hasClass("show")
          ) {
            var e = { relatedTarget: this._element },
              n = i.default.Event("hide.bs.dropdown", e),
              o = t._getParentFromElement(this._element);
            i.default(o).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass("show"),
                i
                  .default(o)
                  .toggleClass("show")
                  .trigger(i.default.Event("hidden.bs.dropdown", e)));
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.dropdown"),
            i.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          i.default(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              this.constructor.Default,
              i.default(this._element).data(),
              t
            )),
            l.typeCheckConfig(Ot, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = i.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = i.default(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : i.default(this._menu).hasClass("dropdown-menu-right") &&
                (e = "bottom-end"),
            e
          );
        }),
        (e._detectNavbar = function () {
          return i.default(this._element).closest(".navbar").length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.dropdown");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e ? e : null)),
                i.default(this).data("bs.dropdown", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                r = n.length;
              o < r;
              o++
            ) {
              var a = t._getParentFromElement(n[o]),
                s = i.default(n[o]).data("bs.dropdown"),
                l = { relatedTarget: n[o] };
              if ((e && "click" === e.type && (l.clickEvent = e), s)) {
                var u = s._menu;
                if (
                  i.default(a).hasClass("show") &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    i.default.contains(a, e.target)
                  )
                ) {
                  var f = i.default.Event("hide.bs.dropdown", l);
                  i.default(a).trigger(f),
                    f.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        i
                          .default(document.body)
                          .children()
                          .off("mouseover", null, i.default.noop),
                      n[o].setAttribute("aria-expanded", "false"),
                      s._popper && s._popper.destroy(),
                      i.default(u).removeClass("show"),
                      i
                        .default(a)
                        .removeClass("show")
                        .trigger(i.default.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = l.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    i.default(e.target).closest(".dropdown-menu").length))
              : !jt.test(e.which)) &&
            !this.disabled &&
            !i.default(this).hasClass("disabled")
          ) {
            var n = t._getParentFromElement(this),
              o = i.default(n).hasClass("show");
            if (o || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !o || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    i
                      .default(n.querySelector('[data-toggle="dropdown"]'))
                      .trigger("focus"),
                  void i.default(this).trigger("click")
                );
              var r = [].slice
                .call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return i.default(t).is(":visible");
                });
              if (0 !== r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--,
                  40 === e.which && a < r.length - 1 && a++,
                  a < 0 && (a = 0),
                  r[a].focus();
              }
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Lt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Pt;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      Ft._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ft._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Ft._jQueryInterface.call(i.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (i.default.fn[Ot] = Ft._jQueryInterface),
    (i.default.fn[Ot].Constructor = Ft),
    (i.default.fn[Ot].noConflict = function () {
      return (i.default.fn[Ot] = xt), Ft._jQueryInterface;
    });
  var Rt = i.default.fn.modal,
    Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Mt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    Bt = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            i.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0);
            var n = i.default.Event("show.bs.modal", { relatedTarget: t });
            i.default(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i
                  .default(this._element)
                  .on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                i
                  .default(this._dialog)
                  .on("mousedown.dismiss.bs.modal", function () {
                    i.default(e._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        i.default(t.target).is(e._element) &&
                          (e._ignoreBackdropClick = !0);
                      }
                    );
                  }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = i.default.Event("hide.bs.modal");
            if (
              (i.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = i.default(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(document).off("focusin.bs.modal"),
                i.default(this._element).removeClass("show"),
                i.default(this._element).off("click.dismiss.bs.modal"),
                i.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var r = l.getTransitionDurationFromElement(this._element);
                i.default(this._element)
                  .one(l.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return i.default(t).off(".bs.modal");
          }),
            i.default(document).off("focusin.bs.modal"),
            i.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = a({}, Ht, t)), l.typeCheckConfig("modal", t, Mt), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var e = i.default.Event("hidePrevented.bs.modal");
            if ((i.default(this._element).trigger(e), e.isDefaultPrevented()))
              return;
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var o = l.getTransitionDurationFromElement(this._dialog);
            i.default(this._element).off(l.TRANSITION_END),
              i
                .default(this._element)
                .one(l.TRANSITION_END, function () {
                  t._element.classList.remove("modal-static"),
                    n ||
                      i
                        .default(t._element)
                        .one(l.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, o);
                })
                .emulateTransitionEnd(o),
              this._element.focus();
          } else this.hide();
        }),
        (e._showElement = function (t) {
          var e = this,
            n = i.default(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            i.default(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && l.reflow(this._element),
            i.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
            a = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                i.default(e._element).trigger(r);
            };
          if (n) {
            var s = l.getTransitionDurationFromElement(this._dialog);
            i.default(this._dialog)
              .one(l.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (e._enforceFocus = function () {
          var t = this;
          i.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === i.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? i
                .default(this._element)
                .on("keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
            : this._isShown ||
              i.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : i.default(window).off("resize.bs.modal");
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              i.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger("hidden.bs.modal");
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (i.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = i.default(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              i.default(this._backdrop).appendTo(document.body),
              i
                .default(this._element)
                .on("click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      e._triggerBackdropTransition();
                }),
              n && l.reflow(this._backdrop),
              i.default(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!n) return void t();
            var o = l.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(l.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            i.default(this._backdrop).removeClass("show");
            var r = function () {
              e._removeBackdrop(), t && t();
            };
            if (i.default(this._element).hasClass("fade")) {
              var a = l.getTransitionDurationFromElement(this._backdrop);
              i.default(this._backdrop)
                .one(l.TRANSITION_END, r)
                .emulateTransitionEnd(a);
            } else r();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));
            i.default(e).each(function (e, n) {
              var o = n.style.paddingRight,
                r = i.default(n).css("padding-right");
              i.default(n)
                .data("padding-right", o)
                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
            }),
              i.default(n).each(function (e, n) {
                var o = n.style.marginRight,
                  r = i.default(n).css("margin-right");
                i.default(n)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(r) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              r = i.default(document.body).css("padding-right");
            i.default(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(r) + this._scrollbarWidth + "px"
              );
          }
          i.default(document.body).addClass("modal-open");
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          i.default(t).each(function (t, e) {
            var n = i.default(e).data("padding-right");
            i.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(".sticky-top"));
          i.default(e).each(function (t, e) {
            var n = i.default(e).data("margin-right");
            "undefined" != typeof n &&
              i.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = i.default(document.body).data("padding-right");
          i.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this).data("bs.modal"),
              r = a(
                {},
                Ht,
                i.default(this).data(),
                "object" == typeof e && e ? e : {}
              );
            if (
              (o || ((o = new t(this, r)), i.default(this).data("bs.modal", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](n);
            } else r.show && o.show(n);
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ht;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        o = l.getSelectorFromElement(this);
      o && (e = document.querySelector(o));
      var r = i.default(e).data("bs.modal")
        ? "toggle"
        : a({}, i.default(e).data(), i.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var s = i.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          s.one("hidden.bs.modal", function () {
            i.default(n).is(":visible") && n.focus();
          });
      });
      Bt._jQueryInterface.call(i.default(e), r, this);
    }),
    (i.default.fn.modal = Bt._jQueryInterface),
    (i.default.fn.modal.Constructor = Bt),
    (i.default.fn.modal.noConflict = function () {
      return (i.default.fn.modal = Rt), Bt._jQueryInterface;
    });
  var qt = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Qt = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ut =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Vt(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll("*")),
        a = function (t, n) {
          var i = r[t],
            a = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var s = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[a] || []);
          s.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === qt.indexOf(n) ||
                  Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        s = 0,
        l = r.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Yt = "tooltip",
    zt = i.default.fn[Yt],
    Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Kt = ["sanitize", "whiteList", "sanitizeFn"],
    Gt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    $t = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Jt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Qt,
      popperConfig: null,
    },
    Zt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    te = (function () {
      function t(t, e) {
        if ("undefined" == typeof It)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = i.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                i.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (i.default(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === i.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = i.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            i.default(this.element).trigger(e);
            var n = l.findShadowRoot(this.element),
              o = i.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              a = l.getUID(this.constructor.NAME);
            r.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && i.default(r).addClass("fade");
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              u = this._getAttachment(s);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            i.default(r).data(this.constructor.DATA_KEY, this),
              i.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i.default(r).appendTo(f),
              i.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new It(
                this.element,
                r,
                this._getPopperConfig(u)
              )),
              i.default(r).addClass("show"),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                i.default(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t);
            };
            if (i.default(this.tip).hasClass("fade")) {
              var c = l.getTransitionDurationFromElement(this.tip);
              i.default(this.tip)
                .one(l.TRANSITION_END, d)
                .emulateTransitionEnd(c);
            } else d();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
              "show" !== e._hoverState &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((i.default(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (i.default(n).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .off("mouseover", null, i.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              i.default(this.tip).hasClass("fade"))
            ) {
              var a = l.getTransitionDurationFromElement(n);
              i.default(n).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            i.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            i.default(t).removeClass("fade show");
        }),
        (e.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? i.default(e).parent().is(t) || t.empty().append(e)
            : t.text(i.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return a(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : l.isElement(this.config.container)
            ? i.default(this.config.container)
            : i.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return $t[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              i.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  "hover" === e
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === e
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              i.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            i
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = a({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            i.default(e.getTipElement()).hasClass("show") ||
            "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      "show" === e._hoverState && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = i.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Kt.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = a(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(Xt);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (i.default(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.tooltip"),
              r = "object" == typeof e && e;
            if (
              (o || !/dispose|hide/.test(e)) &&
              (o || ((o = new t(this, r)), n.data("bs.tooltip", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Yt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Zt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gt;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn[Yt] = te._jQueryInterface),
    (i.default.fn[Yt].Constructor = te),
    (i.default.fn[Yt].noConflict = function () {
      return (i.default.fn[Yt] = zt), te._jQueryInterface;
    });
  var ee = "popover",
    ne = i.default.fn[ee],
    ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    oe = a({}, te.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    re = a({}, te.DefaultType, { content: "(string|element|function)" }),
    ae = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    se = (function (t) {
      var e, n;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n);
      var a = o.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = i.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(ie);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }),
        (o._jQueryInterface = function (t) {
          return this.each(function () {
            var e = i.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e ||
                ((e = new o(this, n)), i.default(this).data("bs.popover", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        r(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return oe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return ee;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return ae;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return re;
            },
          },
        ]),
        o
      );
    })(te);
  (i.default.fn[ee] = se._jQueryInterface),
    (i.default.fn[ee].Constructor = se),
    (i.default.fn[ee].noConflict = function () {
      return (i.default.fn[ee] = ne), se._jQueryInterface;
    });
  var le = "scrollspy",
    ue = i.default.fn[le],
    fe = { offset: 10, method: "auto", target: "" },
    de = { offset: "number", method: "string", target: "(string|element)" },
    ce = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          i
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            o = "position" === n ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  r = l.getSelectorFromElement(t);
                if ((r && (e = document.querySelector(r)), e)) {
                  var a = e.getBoundingClientRect();
                  if (a.width || a.height)
                    return [i.default(e)[n]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.scrollspy"),
            i.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = a({}, fe, "object" == typeof t && t ? t : {}))
                .target &&
            l.isElement(t.target)
          ) {
            var e = i.default(t.target).attr("id");
            e || ((e = l.getUID(le)), i.default(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return l.typeCheckConfig(le, t, de), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = i.default(
              [].slice.call(document.querySelectorAll(e.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              n.addClass("active"))
            : (n.addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            i
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.scrollspy");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e && e)),
                i.default(this).data("bs.scrollspy", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return fe;
            },
          },
        ]),
        t
      );
    })();
  i.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = i.default(t[e]);
      ce._jQueryInterface.call(n, n.data());
    }
  }),
    (i.default.fn[le] = ce._jQueryInterface),
    (i.default.fn[le].Constructor = ce),
    (i.default.fn[le].noConflict = function () {
      return (i.default.fn[le] = ue), ce._jQueryInterface;
    });
  var he = i.default.fn.tab,
    pe = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                i.default(this._element).hasClass("active")) ||
              i.default(this._element).hasClass("disabled")
            )
          ) {
            var e,
              n,
              o = i.default(this._element).closest(".nav, .list-group")[0],
              r = l.getSelectorFromElement(this._element);
            if (o) {
              var a =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
            }
            var s = i.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              }),
              u = i.default.Event("show.bs.tab", { relatedTarget: n });
            if (
              (n && i.default(n).trigger(s),
              i.default(this._element).trigger(u),
              !u.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              r && (e = document.querySelector(r)),
                this._activate(this._element, o);
              var f = function () {
                var e = i.default.Event("hidden.bs.tab", {
                    relatedTarget: t._element,
                  }),
                  o = i.default.Event("shown.bs.tab", { relatedTarget: n });
                i.default(n).trigger(e), i.default(t._element).trigger(o);
              };
              e ? this._activate(e, e.parentNode, f) : f();
            }
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var o = this,
            r = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? i.default(e).children(".active")
                : i.default(e).find("> li > .active")
            )[0],
            a = n && r && i.default(r).hasClass("fade"),
            s = function () {
              return o._transitionComplete(t, r, n);
            };
          if (r && a) {
            var u = l.getTransitionDurationFromElement(r);
            i.default(r)
              .removeClass("show")
              .one(l.TRANSITION_END, s)
              .emulateTransitionEnd(u);
          } else s();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            i.default(e).removeClass("active");
            var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
            o && i.default(o).removeClass("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (i.default(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            l.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && i.default(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var r = i.default(t).closest(".dropdown")[0];
            if (r) {
              var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
              i.default(a).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.tab");
            if (
              (o || ((o = new t(this)), n.data("bs.tab", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), pe._jQueryInterface.call(i.default(this), "show");
      }
    ),
    (i.default.fn.tab = pe._jQueryInterface),
    (i.default.fn.tab.Constructor = pe),
    (i.default.fn.tab.noConflict = function () {
      return (i.default.fn.tab = he), pe._jQueryInterface;
    });
  var me = i.default.fn.toast,
    ge = { animation: "boolean", autohide: "boolean", delay: "number" },
    ve = { animation: !0, autohide: !0, delay: 500 },
    _e = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = i.default.Event("show.bs.toast");
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                i.default(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              l.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = l.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(l.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = i.default.Event("hide.bs.toast");
            i.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            i.default(this._element).off("click.dismiss.bs.toast"),
            i.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              ve,
              i.default(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            l.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          i.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add("hide"),
                i.default(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var n = l.getTransitionDurationFromElement(this._element);
            i.default(this._element)
              .one(l.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof e && e)),
                n.data("bs.toast", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](this);
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ge;
            },
          },
          {
            key: "Default",
            get: function () {
              return ve;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.toast = _e._jQueryInterface),
    (i.default.fn.toast.Constructor = _e),
    (i.default.fn.toast.noConflict = function () {
      return (i.default.fn.toast = me), _e._jQueryInterface;
    }),
    (t.Alert = d),
    (t.Button = h),
    (t.Carousel = y),
    (t.Collapse = S),
    (t.Dropdown = Ft),
    (t.Modal = Bt),
    (t.Popover = se),
    (t.Scrollspy = ce),
    (t.Tab = pe),
    (t.Toast = _e),
    (t.Tooltip = te),
    (t.Util = l),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  "use strict";
  var Slick = window.Slick || {};
  Slick = (function () {
    var instanceUid = 0;
    function Slick(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: false,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000,
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false,
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = "hidden";
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = "visibilitychange";
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data("slick") || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== "undefined") {
        _.hidden = "mozHidden";
        _.visibilityChange = "mozvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        _.hidden = "webkitHidden";
        _.visibilityChange = "webkitvisibilitychange";
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(true);
    }
    return Slick;
  })();
  Slick.prototype.activateADA = function () {
    var _ = this;
    _.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  };
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (
    markup,
    index,
    addBefore
  ) {
    var _ = this;
    if (typeof index === "boolean") {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }
    _.unload();
    if (typeof index === "number") {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === true &&
      _.options.vertical === false
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({ height: targetHeight }, _.options.speed);
    }
  };
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate(
          { left: targetLeft },
          _.options.speed,
          _.options.easing,
          callback
        );
      } else {
        _.$slideTrack.animate(
          { top: targetLeft },
          _.options.speed,
          _.options.easing,
          callback
        );
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }
        $({ animStart: _.currentLeft }).animate(
          { animStart: targetLeft },
          {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function (now) {
              now = Math.ceil(now);
              if (_.options.vertical === false) {
                animProps[_.animType] = "translate(" + now + "px, 0px)";
                _.$slideTrack.css(animProps);
              } else {
                animProps[_.animType] = "translate(0px," + now + "px)";
                _.$slideTrack.css(animProps);
              }
            },
            complete: function () {
              if (callback) {
                callback.call();
              }
            },
          }
        );
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === false) {
          animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
        } else {
          animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  };
  Slick.prototype.getNavTarget = function () {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }
    return asNavFor;
  };
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.getNavTarget();
    if (asNavFor !== null && typeof asNavFor === "object") {
      asNavFor.each(function () {
        var target = $(this).slick("getSlick");
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === false) {
      transition[_.transitionType] =
        _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
    } else {
      transition[_.transitionType] =
        "opacity " + _.options.speed + "ms " + _.options.cssEase;
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.autoPlay = function () {
    var _ = this;
    _.autoPlayClear();
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(
        _.autoPlayIterator,
        _.options.autoplaySpeed
      );
    }
  };
  Slick.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };
  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll;
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;
          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }
      _.slideHandler(slideTo);
    }
  };
  Slick.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
      _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow
          .removeClass("slick-hidden")
          .removeAttr("aria-hidden tabindex");
        _.$nextArrow
          .removeClass("slick-hidden")
          .removeAttr("aria-hidden tabindex");
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        }
      } else {
        _.$prevArrow
          .add(_.$nextArrow)
          .addClass("slick-hidden")
          .attr({ "aria-disabled": "true", tabindex: "-1" });
      }
    }
  };
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dot;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass("slick-dotted");
      dot = $("<ul />").addClass(_.options.dotsClass);
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
      }
      _.$dots = dot.appendTo(_.options.appendDots);
      _.$dots.find("li").first().addClass("slick-active");
    }
  };
  Slick.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider
      .children(_.options.slide + ":not(.slick-cloned)")
      .addClass("slick-slide");
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element)
        .attr("data-slick-index", index)
        .data("originalStyling", $(element).attr("style") || "");
    });
    _.$slider.addClass("slick-slider");
    _.$slideTrack =
      _.slideCount === 0
        ? $('<div class="slick-track"/>').appendTo(_.$slider)
        : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
    _.$slideTrack.css("opacity", 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
    if (_.options.draggable === true) {
      _.$list.addClass("draggable");
    }
  };
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement("div");
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement("div");
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target =
              a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.empty().append(newSlides);
      _.$slider
        .children()
        .children()
        .children()
        .css({
          width: 100 / _.options.slidesPerRow + "%",
          display: "inline-block",
        });
    }
  };
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === "window") {
      respondToWidth = windowWidth;
    } else if (_.respondTo === "slider") {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === "min") {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    if (
      _.options.responsive &&
      _.options.responsive.length &&
      _.options.responsive !== null
    ) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend(
                {},
                _.originalSettings,
                _.breakpointSettings[targetBreakpoint]
              );
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend(
              {},
              _.originalSettings,
              _.breakpointSettings[targetBreakpoint]
            );
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
      }
    }
  };
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.currentTarget),
      indexOffset,
      slideOffset,
      unevenOffset;
    if ($target.is("a")) {
      event.preventDefault();
    }
    if (!$target.is("li")) {
      $target = $target.closest("li");
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset
      ? 0
      : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case "previous":
        slideOffset =
          indexOffset === 0
            ? _.options.slidesToScroll
            : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
      case "next":
        slideOffset =
          indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
      case "index":
        var index =
          event.data.index === 0
            ? 0
            : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger("focus");
        break;
      default:
        return;
    }
  };
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  Slick.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $("li", _.$dots)
        .off("click.slick", _.changeSlide)
        .off("mouseenter.slick", $.proxy(_.interrupt, _, true))
        .off("mouseleave.slick", $.proxy(_.interrupt, _, false));
      if (_.options.accessibility === true) {
        _.$dots.off("keydown.slick", _.keyHandler);
      }
    }
    _.$slider.off("focus.slick blur.slick");
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
      _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
        _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
      }
    }
    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
    _.$list.off("click.slick", _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.cleanUpSlideEvents();
    if (_.options.accessibility === true) {
      _.$list.off("keydown.slick", _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off("click.slick", _.selectHandler);
    }
    $(window).off(
      "orientationchange.slick.slick-" + _.instanceUid,
      _.orientationChange
    );
    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
  };
  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;
    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
  };
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr("style");
      _.$slider.empty().append(originalSlides);
    }
  };
  Slick.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  Slick.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $(".slick-cloned", _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", "");
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", "");
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }
    if (_.$slides) {
      _.$slides
        .removeClass(
          "slick-slide slick-active slick-center slick-visible slick-current"
        )
        .removeAttr("aria-hidden")
        .removeAttr("data-slick-index")
        .each(function () {
          $(this).attr("style", $(this).data("originalStyling"));
        });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass("slick-slider");
    _.$slider.removeClass("slick-initialized");
    _.$slider.removeClass("slick-dotted");
    _.unslicked = true;
    if (!refresh) {
      _.$slider.trigger("destroy", [_]);
    }
  };
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = "";
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });
      _.$slides
        .eq(slideIndex)
        .animate({ opacity: 1 }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  };
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides
        .eq(slideIndex)
        .animate(
          { opacity: 0, zIndex: _.options.zIndex - 2 },
          _.options.speed,
          _.options.easing
        );
    } else {
      _.applyTransition(slideIndex);
      _.$slides
        .eq(slideIndex)
        .css({ opacity: 0, zIndex: _.options.zIndex - 2 });
    }
  };
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (
    filter
  ) {
    var _ = this;
    if (filter !== null) {
      _.$slidesCache = _.$slides;
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.focusHandler = function () {
    var _ = this;
    _.$slider
      .off("focus.slick blur.slick")
      .on("focus.slick blur.slick", "*", function (event) {
        event.stopImmediatePropagation();
        var $sf = $(this);
        setTimeout(function () {
          if (_.options.pauseOnFocus) {
            _.focussed = $sf.is(":focus");
            _.autoPlay();
          }
        }, 0);
      });
  };
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;
    return _.currentSlide;
  };
  Slick.prototype.getDotCount = function () {
    var _ = this;
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter +=
            _.options.slidesToScroll <= _.options.slidesToShow
              ? _.options.slidesToScroll
              : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty =
        1 +
        Math.ceil(
          (_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll
        );
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow
            ? _.options.slidesToScroll
            : _.options.slidesToShow;
      }
    }
    return pagerQty - 1;
  };
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide,
      coef;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;
        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }
        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (
          slideIndex + _.options.slidesToScroll > _.slideCount &&
          _.slideCount > _.options.slidesToShow
        ) {
          if (slideIndex > _.slideCount) {
            _.slideOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              _.slideWidth *
              -1;
            verticalOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              verticalHeight *
              -1;
          } else {
            _.slideOffset =
              (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1;
            verticalOffset =
              (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset =
          (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset =
          (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (
      _.options.centerMode === true &&
      _.slideCount <= _.options.slidesToShow
    ) {
      _.slideOffset =
        (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 -
        (_.slideWidth * _.slideCount) / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset +=
        _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }
    if (_.options.variableWidth === true) {
      if (
        _.slideCount <= _.options.slidesToShow ||
        _.options.infinite === false
      ) {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack
          .children(".slick-slide")
          .eq(slideIndex + _.options.slidesToShow);
      }
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft =
            (_.$slideTrack.width() -
              targetSlide[0].offsetLeft -
              targetSlide.width()) *
            -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      if (_.options.centerMode === true) {
        if (
          _.slideCount <= _.options.slidesToShow ||
          _.options.infinite === false
        ) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack
            .children(".slick-slide")
            .eq(slideIndex + _.options.slidesToShow + 1);
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft =
              (_.$slideTrack.width() -
                targetSlide[0].offsetLeft -
                targetSlide.width()) *
              -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (
    option
  ) {
    var _ = this;
    return _.options[option];
  };
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter +=
        _.options.slidesToScroll <= _.options.slidesToShow
          ? _.options.slidesToScroll
          : _.options.slidesToShow;
    }
    return indexes;
  };
  Slick.prototype.getSlick = function () {
    return this;
  };
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      centerOffset;
    centerOffset =
      _.options.centerMode === true
        ? _.slideWidth * Math.floor(_.options.slidesToShow / 2)
        : 0;
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        if (
          slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 >
          _.swipeLeft * -1
        ) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed =
        Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (
    slide,
    dontAnimate
  ) {
    var _ = this;
    _.changeSlide(
      { data: { message: "index", index: parseInt(slide) } },
      dontAnimate
    );
  };
  Slick.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass("slick-initialized")) {
      $(_.$slider).addClass("slick-initialized");
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();
    }
    if (creation) {
      _.$slider.trigger("init", [_]);
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
    if (_.options.autoplay) {
      _.paused = false;
      _.autoPlay();
    }
  };
  Slick.prototype.initADA = function () {
    var _ = this,
      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
      tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount;
      });
    _.$slides
      .add(_.$slideTrack.find(".slick-cloned"))
      .attr({ "aria-hidden": "true", tabindex: "-1" })
      .find("a, input, button, select")
      .attr({ tabindex: "-1" });
    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          role: "tabpanel",
          id: "slick-slide" + _.instanceUid + i,
          tabindex: -1,
        });
        if (slideControlIndex !== -1) {
          var ariaButtonControl =
            "slick-slide-control" + _.instanceUid + slideControlIndex;
          if ($("#" + ariaButtonControl).length) {
            $(this).attr({ "aria-describedby": ariaButtonControl });
          }
        }
      });
      _.$dots
        .attr("role", "tablist")
        .find("li")
        .each(function (i) {
          var mappedSlideIndex = tabControlIndexes[i];
          $(this).attr({ role: "presentation" });
          $(this)
            .find("button")
            .first()
            .attr({
              role: "tab",
              id: "slick-slide-control" + _.instanceUid + i,
              "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
              "aria-label": i + 1 + " of " + numDotGroups,
              "aria-selected": null,
              tabindex: "-1",
            });
        })
        .eq(_.currentSlide)
        .find("button")
        .attr({ "aria-selected": "true", tabindex: "0" })
        .end();
    }
    for (
      var i = _.currentSlide, max = i + _.options.slidesToShow;
      i < max;
      i++
    ) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({ tabindex: "0" });
      } else {
        _.$slides.eq(i).removeAttr("tabindex");
      }
    }
    _.activateADA();
  };
  Slick.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow
        .off("click.slick")
        .on("click.slick", { message: "previous" }, _.changeSlide);
      _.$nextArrow
        .off("click.slick")
        .on("click.slick", { message: "next" }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow.on("keydown.slick", _.keyHandler);
        _.$nextArrow.on("keydown.slick", _.keyHandler);
      }
    }
  };
  Slick.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("click.slick", { message: "index" }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$dots.on("keydown.slick", _.keyHandler);
      }
    }
    if (
      _.options.dots === true &&
      _.options.pauseOnDotsHover === true &&
      _.slideCount > _.options.slidesToShow
    ) {
      $("li", _.$dots)
        .on("mouseenter.slick", $.proxy(_.interrupt, _, true))
        .on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initSlideEvents = function () {
    var _ = this;
    if (_.options.pauseOnHover) {
      _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
      _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.initSlideEvents();
    _.$list.on(
      "touchstart.slick mousedown.slick",
      { action: "start" },
      _.swipeHandler
    );
    _.$list.on(
      "touchmove.slick mousemove.slick",
      { action: "move" },
      _.swipeHandler
    );
    _.$list.on(
      "touchend.slick mouseup.slick",
      { action: "end" },
      _.swipeHandler
    );
    _.$list.on(
      "touchcancel.slick mouseleave.slick",
      { action: "end" },
      _.swipeHandler
    );
    _.$list.on("click.slick", _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    if (_.options.accessibility === true) {
      _.$list.on("keydown.slick", _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }
    $(window).on(
      "orientationchange.slick.slick-" + _.instanceUid,
      $.proxy(_.orientationChange, _)
    );
    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };
  Slick.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };
  Slick.prototype.keyHandler = function (event) {
    var _ = this;
    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: { message: _.options.rtl === true ? "next" : "previous" },
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: { message: _.options.rtl === true ? "previous" : "next" },
        });
      }
    }
  };
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $("img[data-lazy]", imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr("data-lazy"),
          imageSrcSet = $(this).attr("data-srcset"),
          imageSizes =
            $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
          imageToLoad = document.createElement("img");
        imageToLoad.onload = function () {
          image.animate({ opacity: 0 }, 100, function () {
            if (imageSrcSet) {
              image.attr("srcset", imageSrcSet);
              if (imageSizes) {
                image.attr("sizes", imageSizes);
              }
            }
            image
              .attr("src", imageSource)
              .animate({ opacity: 1 }, 200, function () {
                image
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading");
              });
            _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
          });
        };
        imageToLoad.onerror = function () {
          image
            .removeAttr("data-lazy")
            .removeClass("slick-loading")
            .addClass("slick-lazyload-error");
          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(
          0,
          _.currentSlide - (_.options.slidesToShow / 2 + 1)
        );
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite
        ? _.options.slidesToShow + _.currentSlide
        : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
    if (_.options.lazyLoad === "anticipated") {
      var prevSlide = rangeStart - 1,
        nextSlide = rangeEnd,
        $slides = _.$slider.find(".slick-slide");
      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-slide");
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider
        .find(".slick-cloned")
        .slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider
        .find(".slick-cloned")
        .slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  Slick.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({ opacity: 1 });
    _.$slider.removeClass("slick-loading");
    _.initUI();
    if (_.options.lazyLoad === "progressive") {
      _.progressiveLazyLoad();
    }
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({ data: { message: "next" } });
  };
  Slick.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = true;
  };
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;
    _.autoPlay();
    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };
  Slick.prototype.postSlide = function (index) {
    var _ = this;
    if (!_.unslicked) {
      _.$slider.trigger("afterChange", [_, index]);
      _.animating = false;
      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }
      _.swipeLeft = null;
      if (_.options.autoplay) {
        _.autoPlay();
      }
      if (_.options.accessibility === true) {
        _.initADA();
        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr("tabindex", 0).focus();
        }
      }
    }
  };
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({ data: { message: "previous" } });
  };
  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };
  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;
    var _ = this,
      $imgsToLoad = $("img[data-lazy]", _.$slider),
      image,
      imageSource,
      imageSrcSet,
      imageSizes,
      imageToLoad;
    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr("data-lazy");
      imageSrcSet = image.attr("data-srcset");
      imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
      imageToLoad = document.createElement("img");
      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr("srcset", imageSrcSet);
          if (imageSizes) {
            image.attr("sizes", imageSizes);
          }
        }
        image
          .attr("src", imageSource)
          .removeAttr("data-lazy data-srcset data-sizes")
          .removeClass("slick-loading");
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
        _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
        _.progressiveLazyLoad();
      };
      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image
            .removeAttr("data-lazy")
            .removeClass("slick-loading")
            .addClass("slick-lazyload-error");
          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
          _.progressiveLazyLoad();
        }
      };
      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger("allImagesLoaded", [_]);
    }
  };
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      lastVisibleIndex;
    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    currentSlide = _.currentSlide;
    _.destroy(true);
    $.extend(_, _.initials, { currentSlide: currentSlide });
    _.init();
    if (!initializing) {
      _.changeSlide({ data: { message: "index", index: currentSlide } }, false);
    }
  };
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || "window";
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] =
            responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  Slick.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
    _.setPosition();
    _.focusHandler();
    _.paused = !_.options.autoplay;
    _.autoPlay();
    _.$slider.trigger("reInit", [_]);
  };
  Slick.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (
    index,
    removeBefore,
    removeAll
  ) {
    var _ = this;
    if (typeof index === "boolean") {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = "translate(" + x + ", " + y + ")";
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
        _.$slideTrack.css(positionProps);
      }
    }
  };
  Slick.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({ padding: "0px " + _.options.centerPadding });
      }
    } else {
      _.$list.height(
        _.$slides.first().outerHeight(true) * _.options.slidesToShow
      );
      if (_.options.centerMode === true) {
        _.$list.css({ padding: _.options.centerPadding + " 0px" });
      }
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(
        Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)
      );
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(
        Math.ceil(
          _.$slides.first().outerHeight(true) *
            _.$slideTrack.children(".slick-slide").length
        )
      );
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false)
      _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
  };
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === true) {
        $(element).css({
          position: "relative",
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        });
      } else {
        $(element).css({
          position: "relative",
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        });
      }
    });
    _.$slides
      .eq(_.currentSlide)
      .css({ zIndex: _.options.zIndex - 1, opacity: 1 });
  };
  Slick.prototype.setHeight = function () {
    var _ = this;
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === true &&
      _.options.vertical === false
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css("height", targetHeight);
    }
  };
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    var _ = this,
      l,
      item,
      option,
      value,
      refresh = false,
      type;
    if ($.type(arguments[0]) === "object") {
      option = arguments[0];
      refresh = arguments[1];
      type = "multiple";
    } else if ($.type(arguments[0]) === "string") {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];
      if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
        type = "responsive";
      } else if (typeof arguments[1] !== "undefined") {
        type = "single";
      }
    }
    if (type === "single") {
      _.options[option] = value;
    } else if (type === "multiple") {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === "responsive") {
      for (item in value) {
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }
            l--;
          }
          _.options.responsive.push(value[item]);
        }
      }
    }
    if (refresh) {
      _.unload();
      _.reinit();
    }
  };
  Slick.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger("setPosition", [_]);
  };
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === true ? "top" : "left";
    if (_.positionProp === "top") {
      _.$slider.addClass("slick-vertical");
    } else {
      _.$slider.removeClass("slick-vertical");
    }
    if (
      bodyStyle.WebkitTransition !== undefined ||
      bodyStyle.MozTransition !== undefined ||
      bodyStyle.msTransition !== undefined
    ) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === "number") {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = "OTransform";
      _.transformType = "-o-transform";
      _.transitionType = "OTransition";
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = "MozTransform";
      _.transformType = "-moz-transform";
      _.transitionType = "MozTransition";
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.MozPerspective === undefined
      )
        _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = "webkitTransform";
      _.transformType = "-webkit-transform";
      _.transitionType = "webkitTransition";
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = "msTransform";
      _.transformType = "-ms-transform";
      _.transitionType = "msTransition";
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = "transform";
      _.transformType = "transform";
      _.transitionType = "transition";
    }
    _.transformsEnabled =
      _.options.useTransform && _.animType !== null && _.animType !== false;
  };
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider
      .find(".slick-slide")
      .removeClass("slick-active slick-center slick-current")
      .attr("aria-hidden", "true");
    _.$slides.eq(index).addClass("slick-current");
    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides
            .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides
            .slice(
              indexOffset - centerOffset + 1 + evenCoef,
              indexOffset + centerOffset + 2
            )
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        }
        if (index === 0) {
          allSlides
            .eq(allSlides.length - 1 - _.options.slidesToShow)
            .addClass("slick-center");
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass("slick-center");
        }
      }
      _.$slides.eq(index).addClass("slick-center");
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides
          .slice(index, index + _.options.slidesToShow)
          .addClass("slick-active")
          .attr("aria-hidden", "false");
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass("slick-active").attr("aria-hidden", "false");
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset =
          _.options.infinite === true ? _.options.slidesToShow + index : index;
        if (
          _.options.slidesToShow == _.options.slidesToScroll &&
          _.slideCount - index < _.options.slidesToShow
        ) {
          allSlides
            .slice(
              indexOffset - (_.options.slidesToShow - remainder),
              indexOffset + remainder
            )
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        } else {
          allSlides
            .slice(indexOffset, indexOffset + _.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        }
      }
    }
    if (
      _.options.lazyLoad === "ondemand" ||
      _.options.lazyLoad === "anticipated"
    ) {
      _.lazyLoad();
    }
  };
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex])
            .clone(true)
            .attr("id", "")
            .attr("data-slick-index", slideIndex - _.slideCount)
            .prependTo(_.$slideTrack)
            .addClass("slick-cloned");
        }
        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex])
            .clone(true)
            .attr("id", "")
            .attr("data-slick-index", slideIndex + _.slideCount)
            .appendTo(_.$slideTrack)
            .addClass("slick-cloned");
        }
        _.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            $(this).attr("id", "");
          });
      }
    }
  };
  Slick.prototype.interrupt = function (toggle) {
    var _ = this;
    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = toggle;
  };
  Slick.prototype.selectHandler = function (event) {
    var _ = this;
    var targetElement = $(event.target).is(".slick-slide")
      ? $(event.target)
      : $(event.target).parents(".slick-slide");
    var index = parseInt(targetElement.attr("data-slick-index"));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);
      return;
    }
    _.slideHandler(index);
  };
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this,
      navTarget;
    sync = sync || false;
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    if (sync === false) {
      _.asNavFor(index);
    }
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (
      _.options.infinite === false &&
      _.options.centerMode === false &&
      (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (
      _.options.infinite === false &&
      _.options.centerMode === true &&
      (index < 0 || index > _.slideCount - _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    _.animating = true;
    _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick("getSlick");
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };
  Slick.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass("slick-loading");
  };
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round((r * 180) / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? "left" : "right";
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? "left" : "right";
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? "right" : "left";
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "down";
      } else {
        return "up";
      }
    }
    return "vertical";
  };
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount,
      direction;
    _.dragging = false;
    _.swiping = false;
    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }
    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
    if (_.touchObject.curX === undefined) {
      return false;
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger("edge", [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();
      switch (direction) {
        case "left":
        case "down":
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide + _.getSlideCount())
            : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;
        case "right":
        case "up":
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide - _.getSlideCount())
            : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;
        default:
      }
      if (direction != "vertical") {
        _.slideHandler(slideCount);
        _.touchObject = {};
        _.$slider.trigger("swipe", [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
  };
  Slick.prototype.swipeHandler = function (event) {
    var _ = this;
    if (
      _.options.swipe === false ||
      ("ontouchend" in document && _.options.swipe === false)
    ) {
      return;
    } else if (
      _.options.draggable === false &&
      event.type.indexOf("mouse") !== -1
    ) {
      return;
    }
    _.touchObject.fingerCount =
      event.originalEvent && event.originalEvent.touches !== undefined
        ? event.originalEvent.touches.length
        : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }
    switch (event.data.action) {
      case "start":
        _.swipeStart(event);
        break;
      case "move":
        _.swipeMove(event);
        break;
      case "end":
        _.swipeEnd(event);
        break;
    }
  };
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches,
      verticalSwipeLength;
    touches =
      event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || _.scrolling || (touches && touches.length !== 1)) {
      return false;
    }
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX =
      touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY =
      touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(
      Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
    );
    verticalSwipeLength = Math.round(
      Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
    );
    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }
    swipeDirection = _.swipeDirection();
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }
    positionOffset =
      (_.options.rtl === false ? 1 : -1) *
      (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;
    if (_.options.infinite === false) {
      if (
        (_.currentSlide === 0 && swipeDirection === "right") ||
        (_.currentSlide >= _.getDotCount() && swipeDirection === "left")
      ) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft =
        curLeft +
        swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    _.setCSS(_.swipeLeft);
  };
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    _.interrupted = true;
    if (
      _.touchObject.fingerCount !== 1 ||
      _.slideCount <= _.options.slidesToShow
    ) {
      _.touchObject = {};
      return false;
    }
    if (
      event.originalEvent !== undefined &&
      event.originalEvent.touches !== undefined
    ) {
      touches = event.originalEvent.touches[0];
    }
    _.touchObject.startX = _.touchObject.curX =
      touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY =
      touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.unload = function () {
    var _ = this;
    $(".slick-cloned", _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides
      .removeClass("slick-slide slick-active slick-visible slick-current")
      .attr("aria-hidden", "true")
      .css("width", "");
  };
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger("unslick", [_, fromBreakpoint]);
    _.destroy();
  };
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (
      _.options.arrows === true &&
      _.slideCount > _.options.slidesToShow &&
      !_.options.infinite
    ) {
      _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$nextArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false");
      } else if (
        _.currentSlide >= _.slideCount - _.options.slidesToShow &&
        _.options.centerMode === false
      ) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false");
      } else if (
        _.currentSlide >= _.slideCount - 1 &&
        _.options.centerMode === true
      ) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        _.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false");
      }
    }
  };
  Slick.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots.find("li").removeClass("slick-active").end();
      _.$dots
        .find("li")
        .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
        .addClass("slick-active");
    }
  };
  Slick.prototype.visibility = function () {
    var _ = this;
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == "object" || typeof opt == "undefined")
        _[i].slick = new Slick(_[i], opt);
      else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != "undefined") return ret;
    }
    return _;
  };
});
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w;
        },
        O = function () {
          (w = (0, h.default)()), j();
        },
        _ = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        S = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        z = function (e) {
          (x = i(x, e)), (w = (0, h.default)());
          var t = document.all && !window.atob;
          return S(x.disable) || t
            ? _()
            : (document
                .querySelector("body")
                .setAttribute("data-aos-easing", x.easing),
              document
                .querySelector("body")
                .setAttribute("data-aos-duration", x.duration),
              document
                .querySelector("body")
                .setAttribute("data-aos-delay", x.delay),
              "DOMContentLoaded" === x.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1
                ? j(!0)
                : "load" === x.startEvent
                ? window.addEventListener(x.startEvent, function () {
                    j(!0);
                  })
                : document.addEventListener(x.startEvent, function () {
                    j(!0);
                  }),
              window.addEventListener(
                "resize",
                (0, f.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                "orientationchange",
                (0, f.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                "scroll",
                (0, u.default)(function () {
                  (0, b.default)(w, x.once);
                }, x.throttleDelay)
              ),
              x.disableMutationObserver || (0, d.default)("[data-aos]", O),
              w);
        };
      e.exports = { init: z, refresh: j, refreshHard: O };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = "leading" in o ? !!o.leading : r),
              (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
          );
        }
        function a(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          f = "Expected a function",
          s = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            "object" == ("undefined" == typeof t ? "undefined" : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
          );
        }
        function r(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          f = NaN,
          s = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        var n = window.document,
          r =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver,
          a = new r(o);
        (i = t),
          a.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      }
      function o(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              n = Array.prototype.slice.call(e.removedNodes),
              o = t.concat(n).filter(function (e) {
                return e.hasAttribute && e.hasAttribute("data-aos");
              }).length;
            o && i();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = function () {};
      t.default = n;
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
      t.default = n;
    },
  ]);
});
jQuery(document).ready(function () {
  AOS.init({ once: true });
  jQuery(".toggle-menu").click(function () {
    jQuery("body").toggleClass("menuOn");
  });
  jQuery(
    ".drop_overlay, .toggle-menu.closeIcon, .header-bottom .bottom-bar .menu a"
  ).click(function () {
    jQuery("body").removeClass("menuOn");
  });
  jQuery(".menu span.toggle_sub_menu").click(function () {
    jQuery(this).parent("li").toggleClass("subMenuOn");
  });
  jQuery(".toggle_topBar").click(function () {
    jQuery(".header-primary").toggleClass("topbarToggle");
  });
  jQuery(".testimonials_wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button class="slick-prev slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-left-slick-1.png" /></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-right-slick-2.png" /></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: { slidesToShow: 1, centerPadding: "100px" },
      },
      { breakpoint: 991, settings: { slidesToShow: 1, centerPadding: "40px" } },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          adaptiveHeight: true,
        },
      },
    ],
  });
  jQuery(".services_wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button class="slick-prev slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-left-slick-1.png" /></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-right-slick-2.png" /></button>',
  });
  jQuery(".partners_logo_wrapper").slick({
    slidesToShow: 8,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button class="slick-prev slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-left-slick-1.png" /></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-right-slick-2.png" /></button>',
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 6, slidesToScroll: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 5, slidesToScroll: 5 } },
      { breakpoint: 767, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 575, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    ],
  });
  jQuery(".portfolios_wrapper.withSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button class="slick-prev slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-left-slick-1.png" /></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><img src="/wp-content/uploads/2021/01/arrow-right-slick-2.png" /></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "60px" },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "40px" },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" },
      },
    ],
  });
  jQuery(".services .slick-prev").appendTo(".nav_slick_append_custom");
  jQuery(".services .slick-dots").appendTo(".nav_slick_append_custom");
  jQuery(".services .slick-next").appendTo(".nav_slick_append_custom");
  jQuery(".clickToScrollSection").click(function () {
    jQuery("html, body").animate(
      { scrollTop: jQuery("#belowBannerSection").offset().top },
      1000
    );
  });
  jQuery(".expertise_scroll > a").click(function () {
    jQuery("html, body").animate(
      { scrollTop: jQuery("#expertise").offset().top },
      1000
    );
  });
  jQuery(".solutions_scroll > a").click(function () {
    jQuery("html, body").animate(
      { scrollTop: jQuery("#solutions").offset().top },
      1000
    );
  });
  jQuery(".testimonials_scroll > a").click(function () {
    jQuery("html, body").animate(
      { scrollTop: jQuery("#testimonials").offset().top },
      1000
    );
  });
  jQuery(".partners_scroll > a").click(function () {
    jQuery("html, body").animate(
      { scrollTop: jQuery("#partners").offset().top },
      1000
    );
  });
  jQuery(".digital_marketing_scroll > a").click(function () {
    jQuery("html, body").animate(
      { scrollTop: jQuery("#digital_marketing").offset().top },
      1000
    );
  });
  if (jQuery("#back-to-top").length) {
    var scrollTrigger = 100,
      backToTop = function () {
        var scrollTop = jQuery(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          jQuery("#back-to-top").addClass("show");
        } else {
          jQuery("#back-to-top").removeClass("show");
        }
      };
    backToTop();
    jQuery(window).on("scroll", function () {
      backToTop();
    });
    jQuery("#back-to-top").on("click", function (e) {
      e.preventDefault();
      jQuery("html,body").animate({ scrollTop: 0 }, 1200);
    });
  }
  jQuery('[data-dismiss="modal"]').click(function () {
    jQuery(".tnp-subscription form")[0].reset();
  });
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
      jQuery("header").addClass("headerFixed");
    } else {
      jQuery("header").removeClass("headerFixed");
    }
  });
});
!(function (n) {
  var r = {};
  function i(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = n),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 7));
})({
  0: function (sn, un, e) {
    var ln;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    !(function (e, t) {
      "use strict";
      "object" == typeof sn.exports
        ? (sn.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return t(e);
              })
        : t(e);
    })("undefined" != typeof window ? window : this, function (C, e) {
      "use strict";
      function g(e) {
        return null != e && e === e.window;
      }
      var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        v = t.flat
          ? function (e) {
              return t.flat.call(e);
            }
          : function (e) {
              return t.concat.apply([], e);
            },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        m = {},
        x = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function b(e, t, n) {
        var r,
          i,
          o = (n = n || E).createElement("script");
        if (((o.text = e), t))
          for (r in c)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function w(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? n[o.call(e)] || "object"
          : typeof e;
      }
      var f = "3.5.1",
        S = function (e, t) {
          return new S.fn.init(e, t);
        };
      function p(e) {
        var t = !!e && "length" in e && e.length,
          n = w(e);
        return (
          !x(e) &&
          !g(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && 0 < t && t - 1 in e))
        );
      }
      (S.fn = S.prototype =
        {
          jquery: f,
          constructor: S,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e
              ? s.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return S.each(this, e);
          },
          map: function (n) {
            return this.pushStack(
              S.map(this, function (e, t) {
                return n.call(e, t, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              S.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              S.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: u,
          sort: t.sort,
          splice: t.splice,
        }),
        (S.extend = S.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
            for (
              "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || x(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      a !== r &&
                      (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || S.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (a[t] = S.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        S.extend({
          expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== o.call(e)) &&
              (!(t = r(e)) ||
                ("function" ==
                  typeof (n = y.call(t, "constructor") && t.constructor) &&
                  a.call(n) === l))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            b(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (p(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (p(Object(e))
                  ? S.merge(n, "string" == typeof e ? [e] : e)
                  : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) != a && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (p(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return v(a);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var d =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (n) {
          function f(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(65536 + n)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          }
          function i() {
            T();
          }
          var e,
            d,
            b,
            o,
            a,
            h,
            p,
            g,
            w,
            u,
            l,
            T,
            C,
            s,
            E,
            v,
            c,
            y,
            m,
            S = "sizzle" + +new Date(),
            x = n.document,
            k = 0,
            r = 0,
            A = ue(),
            j = ue(),
            N = ue(),
            D = ue(),
            q = function (e, t) {
              return e === t && (l = !0), 0;
            },
            L = {}.hasOwnProperty,
            t = [],
            H = t.pop,
            O = t.push,
            P = t.push,
            R = t.slice,
            M = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            I =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            W = "[\\x20\\t\\r\\n\\f]",
            F =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              W +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B =
              "\\[" +
              W +
              "*(" +
              F +
              ")(?:" +
              W +
              "*([*^$|!~]?=)" +
              W +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              F +
              "))|)" +
              W +
              "*\\]",
            $ =
              ":(" +
              F +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              B +
              ")*)|.*)\\)|)",
            _ = new RegExp(W + "+", "g"),
            z = new RegExp(
              "^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$",
              "g"
            ),
            U = new RegExp("^" + W + "*," + W + "*"),
            X = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
            V = new RegExp(W + "|>"),
            G = new RegExp($),
            Y = new RegExp("^" + F + "$"),
            Q = {
              ID: new RegExp("^#(" + F + ")"),
              CLASS: new RegExp("^\\.(" + F + ")"),
              TAG: new RegExp("^(" + F + "|[*])"),
              ATTR: new RegExp("^" + B),
              PSEUDO: new RegExp("^" + $),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  W +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  W +
                  "*(?:([+-]|)" +
                  W +
                  "*(\\d+)|))" +
                  W +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + I + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  W +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  W +
                  "*((?:-\\d)?\\d*)" +
                  W +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            J = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            re = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "ï¿½"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ae = me(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            P.apply((t = R.call(x.childNodes)), x.childNodes),
              t[x.childNodes.length].nodeType;
          } catch (e) {
            P = {
              apply: t.length
                ? function (e, t) {
                    O.apply(e, R.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(t, e, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = e && e.ownerDocument,
              p = e ? e.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
              return n;
            if (!r && (T(e), (e = e || C), E)) {
              if (11 !== p && (u = te.exec(t)))
                if ((i = u[1])) {
                  if (9 === p) {
                    if (!(a = e.getElementById(i))) return n;
                    if (a.id === i) return n.push(a), n;
                  } else if (
                    f &&
                    (a = f.getElementById(i)) &&
                    m(e, a) &&
                    a.id === i
                  )
                    return n.push(a), n;
                } else {
                  if (u[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                  if (
                    (i = u[3]) &&
                    d.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return P.apply(n, e.getElementsByClassName(i)), n;
                }
              if (
                d.qsa &&
                !D[t + " "] &&
                (!v || !v.test(t)) &&
                (1 !== p || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((c = t), (f = e), 1 === p && (V.test(t) || X.test(t)))) {
                  for (
                    ((f = (ne.test(t) && ge(e.parentNode)) || e) === e &&
                      d.scope) ||
                      ((s = e.getAttribute("id"))
                        ? (s = s.replace(ie, oe))
                        : e.setAttribute("id", (s = S))),
                      o = (l = h(t)).length;
                    o--;

                  )
                    l[o] = (s ? "#" + s : ":scope") + " " + ye(l[o]);
                  c = l.join(",");
                }
                try {
                  return P.apply(n, f.querySelectorAll(c)), n;
                } catch (e) {
                  D(t, !0);
                } finally {
                  s === S && e.removeAttribute("id");
                }
              }
            }
            return g(t.replace(z, "$1"), e, n, r);
          }
          function ue() {
            var n = [];
            function r(e, t) {
              return (
                n.push(e + " ") > b.cacheLength && delete r[n.shift()],
                (r[e + " "] = t)
              );
            }
            return r;
          }
          function le(e) {
            return (e[S] = !0), e;
          }
          function ce(e) {
            var t = C.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              b.attrHandle[n[r]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function he(a) {
            return le(function (o) {
              return (
                (o = +o),
                le(function (e, t) {
                  for (var n, r = a([], e.length, o), i = r.length; i--; )
                    e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                })
              );
            });
          }
          function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (e in ((d = se.support = {}),
          (a = se.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !J.test(t || (n && n.nodeName) || "HTML");
            }),
          (T = se.setDocument =
            function (e) {
              var t,
                n,
                r = e ? e.ownerDocument || e : x;
              return (
                r != C &&
                  9 === r.nodeType &&
                  r.documentElement &&
                  ((s = (C = r).documentElement),
                  (E = !a(C)),
                  x != C &&
                    (n = C.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", i, !1)
                      : n.attachEvent && n.attachEvent("onunload", i)),
                  (d.scope = ce(function (e) {
                    return (
                      s.appendChild(e).appendChild(C.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (d.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (d.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(C.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (d.getElementsByClassName = ee.test(
                    C.getElementsByClassName
                  )),
                  (d.getById = ce(function (e) {
                    return (
                      (s.appendChild(e).id = S),
                      !C.getElementsByName || !C.getElementsByName(S).length
                    );
                  })),
                  d.getById
                    ? ((b.filter.ID = function (e) {
                        var t = e.replace(re, f);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (b.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && E) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((b.filter.ID = function (e) {
                        var n = e.replace(re, f);
                        return function (e) {
                          var t =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return t && t.value === n;
                        };
                      }),
                      (b.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && E) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (b.find.TAG = d.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : d.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }),
                  (b.find.CLASS =
                    d.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && E)
                        return t.getElementsByClassName(e);
                    }),
                  (c = []),
                  (v = []),
                  (d.qsa = ee.test(C.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (s.appendChild(e).innerHTML =
                        "<a id='" +
                        S +
                        "'></a><select id='" +
                        S +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + W + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + W + "*(?:value|" + I + ")"),
                        e.querySelectorAll("[id~=" + S + "-]").length ||
                          v.push("~="),
                        (t = C.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + S + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = C.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + W + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (s.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (d.matchesSelector = ee.test(
                    (y =
                      s.matches ||
                      s.webkitMatchesSelector ||
                      s.mozMatchesSelector ||
                      s.oMatchesSelector ||
                      s.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (d.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        c.push("!=", $);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (c = c.length && new RegExp(c.join("|"))),
                  (t = ee.test(s.compareDocumentPosition)),
                  (m =
                    t || ee.test(s.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (q = t
                    ? function (e, t) {
                        if (e === t) return (l = !0), 0;
                        var n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          n ||
                          (1 &
                            (n =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!d.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e == C || (e.ownerDocument == x && m(x, e))
                              ? -1
                              : t == C || (t.ownerDocument == x && m(x, t))
                              ? 1
                              : u
                              ? M(u, e) - M(u, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (l = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e == C
                            ? -1
                            : t == C
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : u
                            ? M(u, e) - M(u, t)
                            : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? pe(a[r], s[r])
                          : a[r] == x
                          ? -1
                          : s[r] == x
                          ? 1
                          : 0;
                      })),
                C
              );
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (T(e),
              d.matchesSelector &&
                E &&
                !D[t + " "] &&
                (!c || !c.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var n = y.call(e, t);
                if (
                  n ||
                  d.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return n;
              } catch (e) {
                D(t, !0);
              }
            return 0 < se(t, C, null, [e]).length;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), m(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
              r =
                n && L.call(b.attrHandle, t.toLowerCase())
                  ? n(e, t, !E)
                  : void 0;
            return void 0 !== r
              ? r
              : d.attributes || !E
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(ie, oe);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              n = [],
              r = 0,
              i = 0;
            if (
              ((l = !d.detectDuplicates),
              (u = !d.sortStable && e.slice(0)),
              e.sort(q),
              l)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (u = null), e;
          }),
          (o = se.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += o(t);
              return n;
            }),
          ((b = se.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(re, f)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(re, f)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return Q.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          G.test(n) &&
                          (t = h(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(re, f).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = A[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) &&
                      A(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (n, r, i) {
                  return function (e) {
                    var t = se.attr(e, n);
                    return null == t
                      ? "!=" === r
                      : !r ||
                          ((t += ""),
                          "=" === r
                            ? t === i
                            : "!=" === r
                            ? t !== i
                            : "^=" === r
                            ? i && 0 === t.indexOf(i)
                            : "*=" === r
                            ? i && -1 < t.indexOf(i)
                            : "$=" === r
                            ? i && t.slice(-i.length) === i
                            : "~=" === r
                            ? -1 < (" " + t.replace(_, " ") + " ").indexOf(i)
                            : "|=" === r &&
                              (t === i ||
                                t.slice(0, i.length + 1) === i + "-"));
                  };
                },
                CHILD: function (h, e, t, g, v) {
                  var y = "nth" !== h.slice(0, 3),
                    m = "last" !== h.slice(-4),
                    x = "of-type" === e;
                  return 1 === g && 0 === v
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (e, t, n) {
                        var r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l = y != m ? "nextSibling" : "previousSibling",
                          c = e.parentNode,
                          f = x && e.nodeName.toLowerCase(),
                          p = !n && !x,
                          d = !1;
                        if (c) {
                          if (y) {
                            for (; l; ) {
                              for (a = e; (a = a[l]); )
                                if (
                                  x
                                    ? a.nodeName.toLowerCase() === f
                                    : 1 === a.nodeType
                                )
                                  return !1;
                              u = l = "only" === h && !u && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((u = [m ? c.firstChild : c.lastChild]), m && p)
                          ) {
                            for (
                              d =
                                (s =
                                  (r =
                                    (i =
                                      (o = (a = c)[S] || (a[S] = {}))[
                                        a.uniqueID
                                      ] || (o[a.uniqueID] = {}))[h] ||
                                    [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                              (a =
                                (++s && a && a[l]) || (d = s = 0) || u.pop());

                            )
                              if (1 === a.nodeType && ++d && a === e) {
                                i[h] = [k, s, d];
                                break;
                              }
                          } else if (
                            (p &&
                              (d = s =
                                (r =
                                  (i =
                                    (o = (a = e)[S] || (a[S] = {}))[
                                      a.uniqueID
                                    ] || (o[a.uniqueID] = {}))[h] || [])[0] ===
                                  k && r[1]),
                            !1 === d)
                          )
                            for (
                              ;
                              (a =
                                (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                              ((x
                                ? a.nodeName.toLowerCase() !== f
                                : 1 !== a.nodeType) ||
                                !++d ||
                                (p &&
                                  ((i =
                                    (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                                    (o[a.uniqueID] = {}))[h] = [k, d]),
                                a !== e));

                            );
                          return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                        }
                      };
                },
                PSEUDO: function (e, o) {
                  var t,
                    a =
                      b.pseudos[e] ||
                      b.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return a[S]
                    ? a(o)
                    : 1 < a.length
                    ? ((t = [e, e, "", o]),
                      b.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, t) {
                            for (var n, r = a(e, o), i = r.length; i--; )
                              e[(n = M(e, r[i]))] = !(t[n] = r[i]);
                          })
                        : function (e) {
                            return a(e, 0, t);
                          })
                    : a;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var r = [],
                    i = [],
                    s = p(e.replace(z, "$1"));
                  return s[S]
                    ? le(function (e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                          (i = o[a]) && (e[a] = !(t[a] = i));
                      })
                    : function (e, t, n) {
                        return (
                          (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                        );
                      };
                }),
                has: le(function (t) {
                  return function (e) {
                    return 0 < se(t, e).length;
                  };
                }),
                contains: le(function (t) {
                  return (
                    (t = t.replace(re, f)),
                    function (e) {
                      return -1 < (e.textContent || o(e)).indexOf(t);
                    }
                  );
                }),
                lang: le(function (n) {
                  return (
                    Y.test(n || "") || se.error("unsupported lang: " + n),
                    (n = n.replace(re, f).toLowerCase()),
                    function (e) {
                      var t;
                      do {
                        if (
                          (t = E
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (t = t.toLowerCase()) === n ||
                            0 === t.indexOf(n + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var t = n.location && n.location.hash;
                  return t && t.slice(1) === e.id;
                },
                root: function (e) {
                  return e === s;
                },
                focus: function (e) {
                  return (
                    e === C.activeElement &&
                    (!C.hasFocus || C.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !b.pseudos.empty(e);
                },
                header: function (e) {
                  return Z.test(e.nodeName);
                },
                input: function (e) {
                  return K.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: he(function () {
                  return [0];
                }),
                last: he(function (e, t) {
                  return [t - 1];
                }),
                eq: he(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: he(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: he(function (e, t, n) {
                  for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                    e.push(r);
                  return e;
                }),
                gt: he(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = b.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = (function (t) {
              return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
              };
            })(e);
          for (e in { submit: !0, reset: !0 })
            b.pseudos[e] = (function (n) {
              return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
              };
            })(e);
          function ve() {}
          function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function me(s, e, t) {
            var u = e.dir,
              l = e.next,
              c = l || u,
              f = t && "parentNode" === c,
              p = r++;
            return e.first
              ? function (e, t, n) {
                  for (; (e = e[u]); )
                    if (1 === e.nodeType || f) return s(e, t, n);
                  return !1;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a = [k, p];
                  if (n) {
                    for (; (e = e[u]); )
                      if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                  } else
                    for (; (e = e[u]); )
                      if (1 === e.nodeType || f)
                        if (
                          ((i =
                            (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                            (o[e.uniqueID] = {})),
                          l && l === e.nodeName.toLowerCase())
                        )
                          e = e[u] || e;
                        else {
                          if ((r = i[c]) && r[0] === k && r[1] === p)
                            return (a[2] = r[2]);
                          if (((i[c] = a)[2] = s(e, t, n))) return !0;
                        }
                  return !1;
                };
          }
          function xe(i) {
            return 1 < i.length
              ? function (e, t, n) {
                  for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                  return !0;
                }
              : i[0];
          }
          function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function we(d, h, g, v, y, e) {
            return (
              v && !v[S] && (v = we(v)),
              y && !y[S] && (y = we(y, e)),
              le(function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s = [],
                  u = [],
                  l = t.length,
                  c =
                    e ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(h || "*", n.nodeType ? [n] : n, []),
                  f = !d || (!e && h) ? c : be(c, s, d, n, r),
                  p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                if ((g && g(f, p, n, r), v))
                  for (i = be(p, u), v(i, [], n, r), o = i.length; o--; )
                    (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                  if (y || d) {
                    if (y) {
                      for (i = [], o = p.length; o--; )
                        (a = p[o]) && i.push((f[o] = a));
                      y(null, (p = []), i, r);
                    }
                    for (o = p.length; o--; )
                      (a = p[o]) &&
                        -1 < (i = y ? M(e, a) : s[o]) &&
                        (e[i] = !(t[i] = a));
                  }
                } else (p = be(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : P.apply(t, p);
              })
            );
          }
          function Te(v, y) {
            function e(e, t, n, r, i) {
              var o,
                a,
                s,
                u = 0,
                l = "0",
                c = e && [],
                f = [],
                p = w,
                d = e || (x && b.find.TAG("*", i)),
                h = (k += null == p ? 1 : Math.random() || 0.1),
                g = d.length;
              for (
                i && (w = t == C || t || i);
                l !== g && null != (o = d[l]);
                l++
              ) {
                if (x && o) {
                  for (
                    a = 0, t || o.ownerDocument == C || (T(o), (n = !E));
                    (s = v[a++]);

                  )
                    if (s(o, t || C, n)) {
                      r.push(o);
                      break;
                    }
                  i && (k = h);
                }
                m && ((o = !s && o) && u--, e && c.push(o));
              }
              if (((u += l), m && l !== u)) {
                for (a = 0; (s = y[a++]); ) s(c, f, t, n);
                if (e) {
                  if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = H.call(r));
                  f = be(f);
                }
                P.apply(r, f),
                  i &&
                    !e &&
                    0 < f.length &&
                    1 < u + y.length &&
                    se.uniqueSort(r);
              }
              return i && ((k = h), (w = p)), c;
            }
            var m = 0 < y.length,
              x = 0 < v.length;
            return m ? le(e) : e;
          }
          return (
            (ve.prototype = b.filters = b.pseudos),
            (b.setFilters = new ve()),
            (h = se.tokenize =
              function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = j[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = b.preFilter; a; ) {
                  for (o in ((n && !(r = U.exec(a))) ||
                    (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                  (n = !1),
                  (r = X.exec(a)) &&
                    ((n = r.shift()),
                    i.push({ value: n, type: r[0].replace(z, " ") }),
                    (a = a.slice(n.length))),
                  b.filter))
                    !(r = Q[o].exec(a)) ||
                      (u[o] && !(r = u[o](r))) ||
                      ((n = r.shift()),
                      i.push({ value: n, type: o, matches: r }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : j(e, s).slice(0);
              }),
            (p = se.compile =
              function (e, t) {
                var n,
                  r = [],
                  i = [],
                  o = N[e + " "];
                if (!o) {
                  for (n = (t = t || h(e)).length; n--; )
                    (o = (function e(t) {
                      for (
                        var i,
                          n,
                          r,
                          o = t.length,
                          a = b.relative[t[0].type],
                          s = a || b.relative[" "],
                          u = a ? 1 : 0,
                          l = me(
                            function (e) {
                              return e === i;
                            },
                            s,
                            !0
                          ),
                          c = me(
                            function (e) {
                              return -1 < M(i, e);
                            },
                            s,
                            !0
                          ),
                          f = [
                            function (e, t, n) {
                              var r =
                                (!a && (n || t !== w)) ||
                                ((i = t).nodeType ? l : c)(e, t, n);
                              return (i = null), r;
                            },
                          ];
                        u < o;
                        u++
                      )
                        if ((n = b.relative[t[u].type])) f = [me(xe(f), n)];
                        else {
                          if (
                            (n = b.filter[t[u].type].apply(null, t[u].matches))[
                              S
                            ]
                          ) {
                            for (r = ++u; r < o && !b.relative[t[r].type]; r++);
                            return we(
                              1 < u && xe(f),
                              1 < u &&
                                ye(
                                  t
                                    .slice(0, u - 1)
                                    .concat({
                                      value: " " === t[u - 2].type ? "*" : "",
                                    })
                                ).replace(z, "$1"),
                              n,
                              u < r && e(t.slice(u, r)),
                              r < o && e((t = t.slice(r))),
                              r < o && ye(t)
                            );
                          }
                          f.push(n);
                        }
                      return xe(f);
                    })(t[n]))[S]
                      ? r.push(o)
                      : i.push(o);
                  (o = N(e, Te(i, r))).selector = e;
                }
                return o;
              }),
            (g = se.select =
              function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = "function" == typeof e && e,
                  c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                  if (
                    2 < (o = c[0] = c[0].slice(0)).length &&
                    "ID" === (a = o[0]).type &&
                    9 === t.nodeType &&
                    E &&
                    b.relative[o[1].type]
                  ) {
                    if (
                      !(t = (b.find.ID(a.matches[0].replace(re, f), t) ||
                        [])[0])
                    )
                      return n;
                    l && (t = t.parentNode),
                      (e = e.slice(o.shift().value.length));
                  }
                  for (
                    i = Q.needsContext.test(e) ? 0 : o.length;
                    i-- && ((a = o[i]), !b.relative[(s = a.type)]);

                  )
                    if (
                      (u = b.find[s]) &&
                      (r = u(
                        a.matches[0].replace(re, f),
                        (ne.test(o[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((o.splice(i, 1), !(e = r.length && ye(o))))
                        return P.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (l || p(e, c))(
                    r,
                    t,
                    !E,
                    n,
                    !t || (ne.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (d.sortStable = S.split("").sort(q).join("") === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (d.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(I, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(C);
      (S.find = d),
        (S.expr = d.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = d.uniqueSort),
        (S.text = d.getText),
        (S.isXMLDoc = d.isXML),
        (S.contains = d.contains),
        (S.escapeSelector = d.escape);
      function h(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
          }
        return r;
      }
      function T(e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      }
      var k = S.expr.match.needsContext;
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(e, n, r) {
        return x(n)
          ? S.grep(e, function (e, t) {
              return !!n.call(e, t, e) !== r;
            })
          : n.nodeType
          ? S.grep(e, function (e) {
              return (e === n) !== r;
            })
          : "string" != typeof n
          ? S.grep(e, function (e) {
              return -1 < i.call(n, e) !== r;
            })
          : S.filter(n, e, r);
      }
      (S.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? S.find.matchesSelector(r, e)
              ? [r]
              : []
            : S.find.matches(
                e,
                S.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        S.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                S(e).filter(function () {
                  for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(N(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(N(this, e || [], !0));
          },
          is: function (e) {
            return !!N(
              this,
              "string" == typeof e && k.test(e) ? S(e) : e || [],
              !1
            ).length;
          },
        });
      var D,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || D), "string" != typeof e))
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : x(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(S)
            : S.makeArray(e, this);
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : q.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof S ? t[0] : t),
            S.merge(
              this,
              S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
            ),
            j.test(r[1]) && S.isPlainObject(t))
          )
            for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
          this
        );
      }).prototype = S.fn),
        (D = S(E));
      var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      S.fn.extend({
        has: function (e) {
          var t = S(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && S(e);
          if (!k.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? -1 < a.index(n)
                    : 1 === n.nodeType && S.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? i.call(S(e), this[0])
              : i.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        S.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return h(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return h(e, "parentNode", n);
            },
            next: function (e) {
              return O(e, "nextSibling");
            },
            prev: function (e) {
              return O(e, "previousSibling");
            },
            nextAll: function (e) {
              return h(e, "nextSibling");
            },
            prevAll: function (e) {
              return h(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return h(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return h(e, "previousSibling", n);
            },
            siblings: function (e) {
              return T((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return T(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && r(e.contentDocument)
                ? e.contentDocument
                : (A(e, "template") && (e = e.content || e),
                  S.merge([], e.childNodes));
            },
          },
          function (r, i) {
            S.fn[r] = function (e, t) {
              var n = S.map(this, i, e);
              return (
                "Until" !== r.slice(-5) && (t = e),
                t && "string" == typeof t && (n = S.filter(t, n)),
                1 < this.length &&
                  (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                this.pushStack(n)
              );
            };
          }
        );
      var P = /[^\x20\t\r\n\f]+/g;
      function R(e) {
        return e;
      }
      function M(e) {
        throw e;
      }
      function I(e, t, n, r) {
        var i;
        try {
          e && x((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && x((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (S.Callbacks = function (r) {
        var e, n;
        r =
          "string" == typeof r
            ? ((e = r),
              (n = {}),
              S.each(e.match(P) || [], function (e, t) {
                n[t] = !0;
              }),
              n)
            : S.extend({}, r);
        function i() {
          for (s = s || r.once, a = o = !0; l.length; c = -1)
            for (t = l.shift(); ++c < u.length; )
              !1 === u[c].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((c = u.length), (t = !1));
          r.memory || (t = !1), (o = !1), s && (u = t ? [] : "");
        }
        var o,
          t,
          a,
          s,
          u = [],
          l = [],
          c = -1,
          f = {
            add: function () {
              return (
                u &&
                  (t && !o && ((c = u.length - 1), l.push(t)),
                  (function n(e) {
                    S.each(e, function (e, t) {
                      x(t)
                        ? (r.unique && f.has(t)) || u.push(t)
                        : t && t.length && "string" !== w(t) && n(t);
                    });
                  })(arguments),
                  t && !o && i()),
                this
              );
            },
            remove: function () {
              return (
                S.each(arguments, function (e, t) {
                  for (var n; -1 < (n = S.inArray(t, u, n)); )
                    u.splice(n, 1), n <= c && c--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? -1 < S.inArray(e, u) : 0 < u.length;
            },
            empty: function () {
              return (u = u && []), this;
            },
            disable: function () {
              return (s = l = []), (u = t = ""), this;
            },
            disabled: function () {
              return !u;
            },
            lock: function () {
              return (s = l = []), t || o || (u = t = ""), this;
            },
            locked: function () {
              return !!s;
            },
            fireWith: function (e, t) {
              return (
                s ||
                  ((t = [e, (t = t || []).slice ? t.slice() : t]),
                  l.push(t),
                  o || i()),
                this
              );
            },
            fire: function () {
              return f.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!a;
            },
          };
        return f;
      }),
        S.extend({
          Deferred: function (e) {
            var o = [
                [
                  "notify",
                  "progress",
                  S.Callbacks("memory"),
                  S.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  S.Callbacks("once memory"),
                  S.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  S.Callbacks("once memory"),
                  S.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              a = {
                state: function () {
                  return i;
                },
                always: function () {
                  return s.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return a.then(null, e);
                },
                pipe: function () {
                  var i = arguments;
                  return S.Deferred(function (r) {
                    S.each(o, function (e, t) {
                      var n = x(i[t[4]]) && i[t[4]];
                      s[t[1]](function () {
                        var e = n && n.apply(this, arguments);
                        e && x(e.promise)
                          ? e
                              .promise()
                              .progress(r.notify)
                              .done(r.resolve)
                              .fail(r.reject)
                          : r[t[0] + "With"](this, n ? [e] : arguments);
                      });
                    }),
                      (i = null);
                  }).promise();
                },
                then: function (t, n, r) {
                  var u = 0;
                  function l(i, o, a, s) {
                    return function () {
                      function e() {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = a.apply(n, r)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            x(t)
                              ? s
                                ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, R, s),
                                    l(u, o, M, s),
                                    l(u, o, R, o.notifyWith)
                                  ))
                              : (a !== R && ((n = void 0), (r = [e])),
                                (s || o.resolveWith)(n, r));
                        }
                      }
                      var n = this,
                        r = arguments,
                        t = s
                          ? e
                          : function () {
                              try {
                                e();
                              } catch (e) {
                                S.Deferred.exceptionHook &&
                                  S.Deferred.exceptionHook(e, t.stackTrace),
                                  u <= i + 1 &&
                                    (a !== M && ((n = void 0), (r = [e])),
                                    o.rejectWith(n, r));
                              }
                            };
                      i
                        ? t()
                        : (S.Deferred.getStackHook &&
                            (t.stackTrace = S.Deferred.getStackHook()),
                          C.setTimeout(t));
                    };
                  }
                  return S.Deferred(function (e) {
                    o[0][3].add(l(0, e, x(r) ? r : R, e.notifyWith)),
                      o[1][3].add(l(0, e, x(t) ? t : R)),
                      o[2][3].add(l(0, e, x(n) ? n : M));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? S.extend(e, a) : a;
                },
              },
              s = {};
            return (
              S.each(o, function (e, t) {
                var n = t[2],
                  r = t[5];
                (a[t[1]] = n.add),
                  r &&
                    n.add(
                      function () {
                        i = r;
                      },
                      o[3 - e][2].disable,
                      o[3 - e][3].disable,
                      o[0][2].lock,
                      o[0][3].lock
                    ),
                  n.add(t[3].fire),
                  (s[t[0]] = function () {
                    return (
                      s[t[0] + "With"](this === s ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (s[t[0] + "With"] = n.fireWith);
              }),
              a.promise(s),
              e && e.call(s, s),
              s
            );
          },
          when: function (e) {
            function t(t) {
              return function (e) {
                (i[t] = this),
                  (o[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || a.resolveWith(i, o);
              };
            }
            var n = arguments.length,
              r = n,
              i = Array(r),
              o = s.call(arguments),
              a = S.Deferred();
            if (
              n <= 1 &&
              (I(e, a.done(t(r)).resolve, a.reject, !n),
              "pending" === a.state() || x(o[r] && o[r].then))
            )
              return a.then();
            for (; r--; ) I(o[r], t(r), a.reject);
            return a.promise();
          },
        });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (S.Deferred.exceptionHook = function (e, t) {
        C.console &&
          C.console.warn &&
          e &&
          W.test(e.name) &&
          C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (S.readyException = function (e) {
          C.setTimeout(function () {
            throw e;
          });
        });
      var F = S.Deferred();
      function B() {
        E.removeEventListener("DOMContentLoaded", B),
          C.removeEventListener("load", B),
          S.ready();
      }
      (S.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            S.readyException(e);
          }),
          this
        );
      }),
        S.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) ||
              ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
              F.resolveWith(E, [S]);
          },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
          ? C.setTimeout(S.ready)
          : (E.addEventListener("DOMContentLoaded", B),
            C.addEventListener("load", B));
      var $ = function (e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === w(n))
            for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            x(r) || (a = !0),
            l &&
              (t = a
                ? (t.call(e, r), null)
                : ((l = t),
                  function (e, t, n) {
                    return l.call(S(e), n);
                  })),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
      function U(e, t) {
        return t.toUpperCase();
      }
      function X(e) {
        return e.replace(_, "ms-").replace(z, U);
      }
      function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }
      function G() {
        this.expando = S.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                V(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else for (r in t) i[X(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][X(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(X)
                  : (t = X(t)) in r
                  ? [t]
                  : t.match(P) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 !== t && !S.isEmptyObject(r)) ||
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t);
          },
        });
      var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
      function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n =
                "true" === (i = n) ||
                ("false" !== i &&
                  ("null" === i
                    ? null
                    : i === +i + ""
                    ? +i
                    : J.test(i)
                    ? JSON.parse(i)
                    : i));
            } catch (e) {}
            Q.set(e, t, n);
          } else n = void 0;
        return n;
      }
      S.extend({
        hasData: function (e) {
          return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        removeData: function (e, t) {
          Q.remove(e, t);
        },
        _data: function (e, t, n) {
          return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
          Y.remove(e, t);
        },
      }),
        S.fn.extend({
          data: function (n, e) {
            var t,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 !== n)
              return "object" == typeof n
                ? this.each(function () {
                    Q.set(this, n);
                  })
                : $(
                    this,
                    function (e) {
                      var t;
                      return o && void 0 === e
                        ? void 0 !== (t = Q.get(o, n)) ||
                          void 0 !== (t = Z(o, n))
                          ? t
                          : void 0
                        : void this.each(function () {
                            Q.set(this, n, e);
                          });
                    },
                    null,
                    e,
                    1 < arguments.length,
                    null,
                    !0
                  );
            if (
              this.length &&
              ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
            ) {
              for (t = a.length; t--; )
                a[t] &&
                  0 === (r = a[t].name).indexOf("data-") &&
                  ((r = X(r.slice(5))), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0);
            }
            return i;
          },
          removeData: function (e) {
            return this.each(function () {
              Q.remove(this, e);
            });
          },
        }),
        S.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = Y.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = Y.access(e, t, S.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = S._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    S.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Y.get(e, n) ||
              Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                  Y.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        S.fn.extend({
          queue: function (t, n) {
            var e = 2;
            return (
              "string" != typeof t && ((n = t), (t = "fx"), e--),
              arguments.length < e
                ? S.queue(this[0], t)
                : void 0 === n
                ? this
                : this.each(function () {
                    var e = S.queue(this, t, n);
                    S._queueHooks(this, t),
                      "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              S.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            function n() {
              --i || o.resolveWith(a, [a]);
            }
            var r,
              i = 1,
              o = S.Deferred(),
              a = this,
              s = this.length;
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (r = Y.get(a[s], e + "queueHooks")) &&
                r.empty &&
                (i++, r.empty.add(n));
            return n(), o.promise(t);
          },
        });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
          return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
      re.getRootNode &&
        (ie = function (e) {
          return (
            S.contains(e.ownerDocument, e) ||
            e.getRootNode(oe) === e.ownerDocument
          );
        });
      var ae = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
        );
      };
      function se(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return S.css(e, t, "");
              },
          u = s(),
          l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (S.cssNumber[t] || ("px" !== l && +u)) &&
            te.exec(S.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--; )
            S.style(e, t, c + l),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (c /= o);
          (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
          i
        );
      }
      var ue = {};
      function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
          (r = e[c]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((l[c] = Y.get(r, "display") || null),
                  l[c] || (r.style.display = "")),
                "" === r.style.display &&
                  ae(r) &&
                  (l[c] =
                    ((u = s = a = o = void 0),
                    (a = (i = r).ownerDocument),
                    (s = i.nodeName),
                    (u = ue[s]) ||
                      ((o = a.body.appendChild(a.createElement(s))),
                      (u = S.css(o, "display")),
                      o.parentNode.removeChild(o),
                      "none" === u && (u = "block"),
                      (ue[s] = u)))))
              : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
      }
      S.fn.extend({
        show: function () {
          return le(this, !0);
        },
        hide: function () {
          return le(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide();
              });
        },
      });
      var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
      (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (m.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (m.option = !!ce.lastChild);
      var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function ve(e, t) {
        var n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : [];
        return void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n;
      }
      function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
      }
      (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
        m.option ||
          (ge.optgroup = ge.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var me = /<|&#?\w+;/;
      function xe(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            l,
            c,
            f = t.createDocumentFragment(),
            p = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if ((o = e[d]) || 0 === o)
            if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
            else if (me.test(o)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                  u = ge[s] || ge._default,
                  a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; (o = p[d++]); )
          if (r && -1 < S.inArray(o, r)) i && i.push(o);
          else if (
            ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
          )
            for (c = 0; (o = a[c++]); ) he.test(o.type || "") && n.push(o);
        return f;
      }
      var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
      function Ce() {
        return !0;
      }
      function Ee() {
        return !1;
      }
      function Se(e, t) {
        return (
          (e ===
            (function () {
              try {
                return E.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            ke(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Ee;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function (e) {
              return S().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = S.guid++))),
          e.each(function () {
            S.event.add(this, t, i, r, n);
          })
        );
      }
      function Ae(e, i, o) {
        o
          ? (Y.set(e, i, !1),
            S.event.add(e, i, {
              namespace: !1,
              handler: function (e) {
                var t,
                  n,
                  r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                  if (r.length)
                    (S.event.special[i] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((r = s.call(arguments)),
                    Y.set(this, i, r),
                    (t = o(this, i)),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t
                      ? Y.set(this, i, !1)
                      : (n = {}),
                    r !== n)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), n.value
                    );
                } else
                  r.length &&
                    (Y.set(this, i, {
                      value: S.event.trigger(
                        S.extend(r[0], S.Event.prototype),
                        r.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
      }
      (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Y.get(t);
          if (V(t))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) ||
                  (a = v.handle =
                    function (e) {
                      return void 0 !== S && S.event.triggered !== e.type
                        ? S.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                l = (e = (e || "").match(P) || [""]).length;
              l--;

            )
              (d = g = (s = Te.exec(e[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d &&
                  ((f = S.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = S.event.special[d] || {}),
                  (c = S.extend(
                    {
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && S.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = u[d]) ||
                    (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                      (t.addEventListener && t.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  (S.event.global[d] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Y.hasData(e) && Y.get(e);
          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(P) || [""]).length; l--; )
              if (
                ((d = g = (s = Te.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  f = S.event.special[d] || {},
                    p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = p.length;
                  o--;

                )
                  (c = p[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (p.splice(o, 1),
                      c.selector && p.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    S.removeEvent(e, d, v.handle),
                  delete u[d]);
              } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
            S.isEmptyObject(u) && Y.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            u = S.event.fix(e),
            l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
            c = S.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              a = S.event.handlers.call(this, u, l), t = 0;
              (i = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== o.namespace &&
                  !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !==
                    (r = (
                      (S.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? -1 < S(i, this).index(l)
                      : S.find(i, this, null, [l]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: l, handlers: o });
              }
          return (
            (l = this),
            u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(S.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: x(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (e) {
          return e[S.expando] ? e : new S.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                pe.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  Ae(t, "click", Ce),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (pe.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  Y.get(t, "click")) ||
                A(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (S.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
          if (!(this instanceof S.Event)) return new S.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ce
                  : Ee),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && S.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
          constructor: S.Event,
          isDefaultPrevented: Ee,
          isPropagationStopped: Ee,
          isImmediatePropagationStopped: Ee,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ce),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ce),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ce),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        S.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && be.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && we.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          S.event.special[e] = {
            setup: function () {
              return Ae(this, e, Se), !1;
            },
            trigger: function () {
              return Ae(this, e), !0;
            },
            delegateType: t,
          };
        }),
        S.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, i) {
            S.event.special[e] = {
              delegateType: i,
              bindType: i,
              handle: function (e) {
                var t,
                  n = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (n && (n === this || S.contains(this, n))) ||
                    ((e.type = r.origType),
                    (t = r.handler.apply(this, arguments)),
                    (e.type = i)),
                  t
                );
              },
            };
          }
        ),
        S.fn.extend({
          on: function (e, t, n, r) {
            return ke(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return ke(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                S(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" != typeof e)
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Ee),
                this.each(function () {
                  S.event.remove(this, e, n, t);
                })
              );
            for (i in e) this.off(i, t, e[i]);
            return this;
          },
        });
      var je = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function qe(e, t) {
        return (
          (A(e, "table") &&
            A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            S(e).children("tbody")[0]) ||
          e
        );
      }
      function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function He(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
          if (Y.hasData(e) && (s = Y.get(e).events))
            for (i in (Y.remove(t, "handle events"), s))
              for (n = 0, r = s[i].length; n < r; n++)
                S.event.add(t, i, s[i][n]);
          Q.hasData(e) &&
            ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
      }
      function Pe(n, r, i, o) {
        r = v(r);
        var e,
          t,
          a,
          s,
          u,
          l,
          c = 0,
          f = n.length,
          p = f - 1,
          d = r[0],
          h = x(d);
        if (h || (1 < f && "string" == typeof d && !m.checkClone && Ne.test(d)))
          return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
          });
        if (
          f &&
          ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
          1 === e.childNodes.length && (e = t),
          t || o)
        ) {
          for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
            (u = e),
              c !== p &&
                ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
              i.call(n[c], u, c);
          if (s)
            for (
              l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0;
              c < s;
              c++
            )
              (u = a[c]),
                he.test(u.type || "") &&
                  !Y.access(u, "globalEval") &&
                  S.contains(l, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? S._evalUrl &&
                      !u.noModule &&
                      S._evalUrl(
                        u.src,
                        { nonce: u.nonce || u.getAttribute("nonce") },
                        l
                      )
                    : b(u.textContent.replace(De, ""), u, l));
        }
        return n;
      }
      function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode &&
              (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      S.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = e.cloneNode(!0),
            f = ie(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              S.isXMLDoc(e)
            )
          )
            for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
              (s = o[r]),
                (u = a[r]),
                (l = void 0),
                "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                  ? (u.checked = s.checked)
                  : ("input" !== l && "textarea" !== l) ||
                    (u.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (
                o = o || ve(e), a = a || ve(c), r = 0, i = o.length;
                r < i;
                r++
              )
                Oe(o[r], a[r]);
            else Oe(e, c);
          return (
            0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = S.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (V(n)) {
              if ((t = n[Y.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                n[Y.expando] = void 0;
              }
              n[Q.expando] && (n[Q.expando] = void 0);
            }
        },
      }),
        S.fn.extend({
          detach: function (e) {
            return Re(this, e, !0);
          },
          remove: function (e) {
            return Re(this, e);
          },
          text: function (e) {
            return $(
              this,
              function (e) {
                return void 0 === e
                  ? S.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Pe(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                qe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Pe(this, arguments, function (e) {
              var t;
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                (t = qe(this, e)).insertBefore(e, t.firstChild);
            });
          },
          before: function () {
            return Pe(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Pe(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (S.cleanData(ve(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return S.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return $(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !je.test(e) &&
                  !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = S.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var n = [];
            return Pe(
              this,
              arguments,
              function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 &&
                  (S.cleanData(ve(this)), t && t.replaceChild(e, this));
              },
              n
            );
          },
        }),
        S.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, a) {
            S.fn[e] = function (e) {
              for (
                var t, n = [], r = S(e), i = r.length - 1, o = 0;
                o <= i;
                o++
              )
                (t = o === i ? this : this.clone(!0)),
                  S(r[o])[a](t),
                  u.apply(n, t.get());
              return this.pushStack(n);
            };
          }
        );
      function Me(e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
        return r;
      }
      var Ie,
        We,
        Fe,
        Be,
        $e,
        _e,
        ze,
        Ue,
        Xe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ve = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        Ge = new RegExp(ne.join("|"), "i");
      function Ye() {
        var e;
        Ue &&
          ((ze.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (Ue.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(ze).appendChild(Ue),
          (e = C.getComputedStyle(Ue)),
          (Ie = "1%" !== e.top),
          (_e = 12 === Qe(e.marginLeft)),
          (Ue.style.right = "60%"),
          (Be = 36 === Qe(e.right)),
          (We = 36 === Qe(e.width)),
          (Ue.style.position = "absolute"),
          (Fe = 12 === Qe(Ue.offsetWidth / 3)),
          re.removeChild(ze),
          (Ue = null));
      }
      function Qe(e) {
        return Math.round(parseFloat(e));
      }
      function Je(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Ve(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              ie(e) ||
              (a = S.style(e, t)),
            !m.pixelBoxStyles() &&
              Xe.test(a) &&
              Ge.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Ke(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      (ze = E.createElement("div")),
        (Ue = E.createElement("div")).style &&
          ((Ue.style.backgroundClip = "content-box"),
          (Ue.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === Ue.style.backgroundClip),
          S.extend(m, {
            boxSizingReliable: function () {
              return Ye(), We;
            },
            pixelBoxStyles: function () {
              return Ye(), Be;
            },
            pixelPosition: function () {
              return Ye(), Ie;
            },
            reliableMarginLeft: function () {
              return Ye(), _e;
            },
            scrollboxSize: function () {
              return Ye(), Fe;
            },
            reliableTrDimensions: function () {
              var e, t, n, r;
              return (
                null == $e &&
                  ((e = E.createElement("table")),
                  (t = E.createElement("tr")),
                  (n = E.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (n.style.height = "9px"),
                  re.appendChild(e).appendChild(t).appendChild(n),
                  (r = C.getComputedStyle(t)),
                  ($e = 3 < parseInt(r.height)),
                  re.removeChild(e)),
                $e
              );
            },
          }));
      var Ze = ["Webkit", "Moz", "ms"],
        et = E.createElement("div").style,
        tt = {};
      function nt(e) {
        var t = S.cssProps[e] || tt[e];
        return (
          t ||
          (e in et
            ? e
            : (tt[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ze.length;
                    n--;

                  )
                    if ((e = Ze[n] + t) in et) return e;
                })(e) || e))
        );
      }
      var rt = /^(none|table(?!-c[ea]).+)/,
        it = /^--/,
        ot = { position: "absolute", visibility: "hidden", display: "block" },
        at = { letterSpacing: "0", fontWeight: "400" };
      function st(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function ut(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r
              ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
                "margin" !== n &&
                  (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
              : ((u += S.css(e, "padding" + ne[a], !0, i)),
                "padding" !== n
                  ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                  : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return (
          !r &&
            0 <= o &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function lt(e, t, n) {
        var r = Ve(e),
          i =
            (!m.boxSizingReliable() || n) &&
            "border-box" === S.css(e, "boxSizing", !1, r),
          o = i,
          a = Je(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Xe.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!m.boxSizingReliable() && i) ||
            (!m.reliableTrDimensions() && A(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
            (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            ut(e, t, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
      }
      function ct(e, t, n, r, i) {
        return new ct.prototype.init(e, t, n, r, i);
      }
      S.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Je(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = X(t),
              u = it.test(t),
              l = e.style;
            if (
              (u || (t = nt(s)),
              (a = S.cssHooks[t] || S.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : l[t];
            "string" === (o = typeof n) &&
              (i = te.exec(n)) &&
              i[1] &&
              ((n = se(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = X(t);
          return (
            it.test(t) || (t = nt(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Je(e, t, r)),
            "normal" === i && t in at && (i = at[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        S.each(["height", "width"], function (e, u) {
          S.cssHooks[u] = {
            get: function (e, t, n) {
              if (t)
                return !rt.test(S.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? lt(e, u, n)
                  : Me(e, ot, function () {
                      return lt(e, u, n);
                    });
            },
            set: function (e, t, n) {
              var r,
                i = Ve(e),
                o = !m.scrollboxSize() && "absolute" === i.position,
                a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                s = n ? ut(e, u, n, a, i) : 0;
              return (
                a &&
                  o &&
                  (s -= Math.ceil(
                    e["offset" + u[0].toUpperCase() + u.slice(1)] -
                      parseFloat(i[u]) -
                      ut(e, u, "border", !1, i) -
                      0.5
                  )),
                s &&
                  (r = te.exec(t)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[u] = t), (t = S.css(e, u))),
                st(0, t, s)
              );
            },
          };
        }),
        (S.cssHooks.marginLeft = Ke(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Je(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Me(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
          (S.cssHooks[i + o] = {
            expand: function (e) {
              for (
                var t = 0,
                  n = {},
                  r = "string" == typeof e ? e.split(" ") : [e];
                t < 4;
                t++
              )
                n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
              return n;
            },
          }),
            "margin" !== i && (S.cssHooks[i + o].set = st);
        }),
        S.fn.extend({
          css: function (e, t) {
            return $(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = Ve(e), i = t.length; a < i; a++)
                    o[t[a]] = S.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
              },
              e,
              t,
              1 < arguments.length
            );
          },
        }),
        ((S.Tween = ct).prototype = {
          constructor: ct,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || S.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (S.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ct.propHooks[this.prop];
            return e && e.get ? e.get(this) : ct.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ct.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    S.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ct.propHooks._default.set(this),
              this
            );
          },
        }),
        (ct.prototype.init.prototype = ct.prototype),
        (ct.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              S.fx.step[e.prop]
                ? S.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!S.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : S.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ct.propHooks.scrollTop = ct.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (S.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (S.fx = ct.prototype.init),
        (S.fx.step = {});
      var ft,
        pt,
        dt,
        ht,
        gt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
      function yt() {
        pt &&
          (!1 === E.hidden && C.requestAnimationFrame
            ? C.requestAnimationFrame(yt)
            : C.setTimeout(yt, S.fx.interval),
          S.fx.tick());
      }
      function mt() {
        return (
          C.setTimeout(function () {
            ft = void 0;
          }),
          (ft = Date.now())
        );
      }
      function xt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function bt(e, t, n) {
        for (
          var r,
            i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function wt(o, e, t) {
        var n,
          a,
          r = 0,
          i = wt.prefilters.length,
          s = S.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (a) return !1;
            for (
              var e = ft || mt(),
                t = Math.max(0, l.startTime + l.duration - e),
                n = 1 - (t / l.duration || 0),
                r = 0,
                i = l.tweens.length;
              r < i;
              r++
            )
              l.tweens[r].run(n);
            return (
              s.notifyWith(o, [l, n, t]),
              n < 1 && i
                ? t
                : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            );
          },
          l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(
              !0,
              { specialEasing: {}, easing: S.easing._default },
              t
            ),
            originalProperties: e,
            originalOptions: t,
            startTime: ft || mt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
              var n = S.Tween(
                o,
                l.opts,
                e,
                t,
                l.opts.specialEasing[e] || l.opts.easing
              );
              return l.tweens.push(n), n;
            },
            stop: function (e) {
              var t = 0,
                n = e ? l.tweens.length : 0;
              if (a) return this;
              for (a = !0; t < n; t++) l.tweens[t].run(1);
              return (
                e
                  ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                  : s.rejectWith(o, [l, e]),
                this
              );
            },
          }),
          c = l.props;
        for (
          !(function (e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = X(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = S.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, l.opts.specialEasing);
          r < i;
          r++
        )
          if ((n = wt.prefilters[r].call(l, o, c, l.opts)))
            return (
              x(n.stop) &&
                (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          S.map(c, bt, l),
          x(l.opts.start) && l.opts.start.call(o, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (S.Animation = S.extend(wt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return se(n.elem, e, te.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          for (
            var n, r = 0, i = (e = x(e) ? ((t = e), ["*"]) : e.match(P)).length;
            r < i;
            r++
          )
            (n = e[r]),
              (wt.tweeners[n] = wt.tweeners[n] || []),
              wt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && ae(e),
              v = Y.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = S._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), gt.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                d[r] = (v && v[r]) || S.style(e, r);
              }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) &&
                  (l
                    ? (c = l)
                    : (le([e], !0),
                      (l = e.style.display || l),
                      (c = S.css(e, "display")),
                      le([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === S.css(e, "float") &&
                  (u ||
                    (p.done(function () {
                      h.display = l;
                    }),
                    null == l &&
                      ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              d))
                u ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = Y.access(e, "fxshow", { display: l })),
                  o && (v.hidden = !g),
                  g && le([e], !0),
                  p.done(function () {
                    for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                      S.style(e, r, d[r]);
                  })),
                  (u = bt(g ? v[r] : 0, r, p)),
                  r in v ||
                    ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
        },
      })),
        (S.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? S.extend({}, e)
              : {
                  complete: n || (!n && t) || (x(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !x(t) && t),
                };
          return (
            S.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in S.fx.speeds
                  ? (r.duration = S.fx.speeds[r.duration])
                  : (r.duration = S.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              x(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
            }),
            r
          );
        }),
        S.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ae)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (t, e, n, r) {
            function i() {
              var e = wt(this, S.extend({}, t), a);
              (o || Y.get(this, "finish")) && e.stop(!0);
            }
            var o = S.isEmptyObject(t),
              a = S.speed(e, n, r);
            return (
              (i.finish = i),
              o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
            );
          },
          stop: function (i, e, o) {
            function a(e) {
              var t = e.stop;
              delete e.stop, t(o);
            }
            return (
              "string" != typeof i && ((o = e), (e = i), (i = void 0)),
              e && this.queue(i || "fx", []),
              this.each(function () {
                var e = !0,
                  t = null != i && i + "queueHooks",
                  n = S.timers,
                  r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else for (t in r) r[t] && r[t].stop && vt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                  n[t].elem !== this ||
                    (null != i && n[t].queue !== i) ||
                    (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                (!e && o) || S.dequeue(this, i);
              })
            );
          },
          finish: function (a) {
            return (
              !1 !== a && (a = a || "fx"),
              this.each(function () {
                var e,
                  t = Y.get(this),
                  n = t[a + "queue"],
                  r = t[a + "queueHooks"],
                  i = S.timers,
                  o = n ? n.length : 0;
                for (
                  t.finish = !0,
                    S.queue(this, a, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = i.length;
                  e--;

                )
                  i[e].elem === this &&
                    i[e].queue === a &&
                    (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
              })
            );
          },
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
          var i = S.fn[r];
          S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e
              ? i.apply(this, arguments)
              : this.animate(xt(r, !0), e, t, n);
          };
        }),
        S.each(
          {
            slideDown: xt("show"),
            slideUp: xt("hide"),
            slideToggle: xt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, r) {
            S.fn[e] = function (e, t, n) {
              return this.animate(r, e, t, n);
            };
          }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
          var e,
            t = 0,
            n = S.timers;
          for (ft = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || S.fx.stop(), (ft = void 0);
        }),
        (S.fx.timer = function (e) {
          S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
          pt || ((pt = !0), yt());
        }),
        (S.fx.stop = function () {
          pt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
          return (
            (r = (S.fx && S.fx.speeds[r]) || r),
            (e = e || "fx"),
            this.queue(e, function (e, t) {
              var n = C.setTimeout(e, r);
              t.stop = function () {
                C.clearTimeout(n);
              };
            })
          );
        }),
        (dt = E.createElement("input")),
        (ht = E.createElement("select").appendChild(E.createElement("option"))),
        (dt.type = "checkbox"),
        (m.checkOn = "" !== dt.value),
        (m.optSelected = ht.selected),
        ((dt = E.createElement("input")).value = "t"),
        (dt.type = "radio"),
        (m.radioValue = "t" === dt.value);
      var Tt,
        Ct = S.expr.attrHandle;
      S.fn.extend({
        attr: function (e, t) {
          return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            S.removeAttr(this, e);
          });
        },
      }),
        S.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? S.prop(e, t, n)
                : ((1 === o && S.isXMLDoc(e)) ||
                    (i =
                      S.attrHooks[t.toLowerCase()] ||
                      (S.expr.match.bool.test(t) ? Tt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void S.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : !(i && "get" in i && null !== (r = i.get(e, t))) &&
                      null == (r = S.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(P);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (Tt = {
          set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var a = Ct[t] || S.find.attr;
          Ct[t] = function (e, t, n) {
            var r,
              i,
              o = t.toLowerCase();
            return (
              n ||
                ((i = Ct[o]),
                (Ct[o] = r),
                (r = null != a(e, t, n) ? o : null),
                (Ct[o] = i)),
              r
            );
          };
        });
      var Et = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;
      function kt(e) {
        return (e.match(P) || []).join(" ");
      }
      function At(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function jt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(P)) || [];
      }
      S.fn.extend({
        prop: function (e, t) {
          return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[S.propFix[e] || e];
          });
        },
      }),
        S.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && S.isXMLDoc(e)) ||
                  ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = S.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : Et.test(e.nodeName) || (St.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (S.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        S.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            S.propFix[this.toLowerCase()] = this;
          }
        ),
        S.fn.extend({
          addClass: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (x(t))
              return this.each(function (e) {
                S(this).addClass(t.call(this, e, At(this)));
              });
            if ((e = jt(t)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = At(n)), (r = 1 === n.nodeType && " " + kt(i) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (s = kt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (x(t))
              return this.each(function (e) {
                S(this).removeClass(t.call(this, e, At(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = jt(t)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = At(n)), (r = 1 === n.nodeType && " " + kt(i) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    for (; -1 < r.indexOf(" " + o + " "); )
                      r = r.replace(" " + o + " ", " ");
                  i !== (s = kt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (i, t) {
            var o = typeof i,
              a = "string" == o || Array.isArray(i);
            return "boolean" == typeof t && a
              ? t
                ? this.addClass(i)
                : this.removeClass(i)
              : x(i)
              ? this.each(function (e) {
                  S(this).toggleClass(i.call(this, e, At(this), t), t);
                })
              : this.each(function () {
                  var e, t, n, r;
                  if (a)
                    for (t = 0, n = S(this), r = jt(i); (e = r[t++]); )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else
                    (void 0 !== i && "boolean" != o) ||
                      ((e = At(this)) && Y.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          (!e && !1 !== i && Y.get(this, "__className__")) || ""
                        ));
                });
          },
          hasClass: function (e) {
            for (var t, n = 0, r = " " + e + " "; (t = this[n++]); )
              if (1 === t.nodeType && -1 < (" " + kt(At(t)) + " ").indexOf(r))
                return !0;
            return !1;
          },
        });
      var Nt = /\r/g;
      S.fn.extend({
        val: function (n) {
          var r,
            e,
            i,
            t = this[0];
          return arguments.length
            ? ((i = x(n)),
              this.each(function (e) {
                var t;
                1 === this.nodeType &&
                  (null == (t = i ? n.call(this, e, S(this).val()) : n)
                    ? (t = "")
                    : "number" == typeof t
                    ? (t += "")
                    : Array.isArray(t) &&
                      (t = S.map(t, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((r =
                    S.valHooks[this.type] ||
                    S.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in r &&
                    void 0 !== r.set(this, t, "value")) ||
                    (this.value = t));
              }))
            : t
            ? (r =
                S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
              "get" in r &&
              void 0 !== (e = r.get(t, "value"))
              ? e
              : "string" == typeof (e = t.value)
              ? e.replace(Nt, "")
              : null == e
              ? ""
              : e
            : void 0;
        },
      }),
        S.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = S.find.attr(e, "value");
                return null != t ? t : kt(S.text(e));
              },
            },
            select: {
              get: function (e) {
                for (
                  var t,
                    n,
                    r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type,
                    a = o ? null : [],
                    s = o ? i + 1 : r.length,
                    u = i < 0 ? s : o ? i : 0;
                  u < s;
                  u++
                )
                  if (
                    ((n = r[u]).selected || u === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((t = S(n).val()), o)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        S.each(["radio", "checkbox"], function () {
          (S.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = -1 < S.inArray(S(e).val(), t));
            },
          }),
            m.checkOn ||
              (S.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (m.focusin = "onfocusin" in C);
      function Dt(e) {
        e.stopPropagation();
      }
      var qt = /^(?:focusinfocus|focusoutblur)$/;
      S.extend(S.event, {
        trigger: function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = [n || E],
            p = y.call(e, "type") ? e.type : e,
            d = y.call(e, "namespace") ? e.namespace.split(".") : [],
            h = (c = o = n = n || E);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !qt.test(p + S.event.triggered) &&
            (-1 < p.indexOf(".") &&
              ((p = (d = p.split(".")).shift()), d.sort()),
            (s = p.indexOf(":") < 0 && "on" + p),
            ((e = e[S.expando]
              ? e
              : new S.Event(p, "object" == typeof e && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = d.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : S.makeArray(t, [e])),
            (l = S.event.special[p] || {}),
            r || !l.trigger || !1 !== l.trigger.apply(n, t))
          ) {
            if (!r && !l.noBubble && !g(n)) {
              for (
                a = l.delegateType || p, qt.test(a + p) || (h = h.parentNode);
                h;
                h = h.parentNode
              )
                f.push(h), (o = h);
              o === (n.ownerDocument || E) &&
                f.push(o.defaultView || o.parentWindow || C);
            }
            for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
              (c = h),
                (e.type = 1 < i ? a : l.bindType || p),
                (u =
                  (Y.get(h, "events") || Object.create(null))[e.type] &&
                  Y.get(h, "handle")) && u.apply(h, t),
                (u = s && h[s]) &&
                  u.apply &&
                  V(h) &&
                  ((e.result = u.apply(h, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = p),
              r ||
                e.isDefaultPrevented() ||
                (l._default && !1 !== l._default.apply(f.pop(), t)) ||
                !V(n) ||
                (s &&
                  x(n[p]) &&
                  !g(n) &&
                  ((o = n[s]) && (n[s] = null),
                  (S.event.triggered = p),
                  e.isPropagationStopped() && c.addEventListener(p, Dt),
                  n[p](),
                  e.isPropagationStopped() && c.removeEventListener(p, Dt),
                  (S.event.triggered = void 0),
                  o && (n[s] = o))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
          S.event.trigger(r, null, t);
        },
      }),
        S.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              S.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
          S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
            function i(e) {
              S.event.simulate(r, e.target, S.event.fix(e));
            }
            S.event.special[r] = {
              setup: function () {
                var e = this.ownerDocument || this.document || this,
                  t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
              },
              teardown: function () {
                var e = this.ownerDocument || this.document || this,
                  t = Y.access(e, r) - 1;
                t
                  ? Y.access(e, r, t)
                  : (e.removeEventListener(n, i, !0), Y.remove(e, r));
              },
            };
          });
      var Lt = C.location,
        Ht = { guid: Date.now() },
        Ot = /\?/;
      S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            S.error("Invalid XML: " + e),
          t
        );
      };
      var Pt = /\[\]$/,
        Rt = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
      (S.param = function (e, t) {
        function n(e, t) {
          var n = x(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        }
        var r,
          i = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
          S.each(e, function () {
            n(this.name, this.value);
          });
        else
          for (r in e)
            !(function n(r, e, i, o) {
              var t;
              if (Array.isArray(e))
                S.each(e, function (e, t) {
                  i || Pt.test(r)
                    ? o(r, t)
                    : n(
                        r +
                          "[" +
                          ("object" == typeof t && null != t ? e : "") +
                          "]",
                        t,
                        i,
                        o
                      );
                });
              else if (i || "object" !== w(e)) o(r, e);
              else for (t in e) n(r + "[" + t + "]", e[t], i, o);
            })(r, e[r], t, n);
        return i.join("&");
      }),
        S.fn.extend({
          serialize: function () {
            return S.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = S.prop(this, "elements");
              return e ? S.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !S(this).is(":disabled") &&
                  It.test(this.nodeName) &&
                  !Mt.test(e) &&
                  (this.checked || !pe.test(e))
                );
              })
              .map(function (e, t) {
                var n = S(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? S.map(n, function (e) {
                      return { name: t.name, value: e.replace(Rt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Rt, "\r\n") };
              })
              .get();
          },
        });
      var Wt = /%20/g,
        Ft = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Ut = {},
        Xt = {},
        Vt = "*/".concat("*"),
        Gt = E.createElement("a");
      function Yt(o) {
        return function (e, t) {
          "string" != typeof e && ((t = e), (e = "*"));
          var n,
            r = 0,
            i = e.toLowerCase().match(P) || [];
          if (x(t))
            for (; (n = i[r++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
                : (o[n] = o[n] || []).push(t);
        };
      }
      function Qt(t, i, o, a) {
        var s = {},
          u = t === Xt;
        function l(e) {
          var r;
          return (
            (s[e] = !0),
            S.each(t[e] || [], function (e, t) {
              var n = t(i, o, a);
              return "string" != typeof n || u || s[n]
                ? u
                  ? !(r = n)
                  : void 0
                : (i.dataTypes.unshift(n), l(n), !1);
            }),
            r
          );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
      }
      function Jt(e, t) {
        var n,
          r,
          i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
      }
      (Gt.href = Lt.href),
        S.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Lt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Vt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": S.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Jt(Jt(e, S.ajaxSettings), t) : Jt(S.ajaxSettings, e);
          },
          ajaxPrefilter: Yt(Ut),
          ajaxTransport: Yt(Xt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var c,
              f,
              p,
              n,
              d,
              r,
              h,
              g,
              i,
              o,
              v = S.ajaxSetup({}, t),
              y = v.context || v,
              m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
              x = S.Deferred(),
              b = S.Callbacks("once memory"),
              w = v.statusCode || {},
              a = {},
              s = {},
              u = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (h) {
                    if (!n)
                      for (n = {}; (t = $t.exec(p)); )
                        n[t[1].toLowerCase() + " "] = (
                          n[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = n[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return h ? p : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == h &&
                      ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                      (a[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == h && (v.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (h) T.always(e[T.status]);
                    else for (t in e) w[t] = [w[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || u;
                  return c && c.abort(t), l(0, t), this;
                },
              };
            if (
              (x.promise(T),
              (v.url = ((e || v.url || Lt.href) + "").replace(
                zt,
                Lt.protocol + "//"
              )),
              (v.type = t.method || t.type || v.method || v.type),
              (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [
                "",
              ]),
              null == v.crossDomain)
            ) {
              r = E.createElement("a");
              try {
                (r.href = v.url),
                  (r.href = r.href),
                  (v.crossDomain =
                    Gt.protocol + "//" + Gt.host != r.protocol + "//" + r.host);
              } catch (e) {
                v.crossDomain = !0;
              }
            }
            if (
              (v.data &&
                v.processData &&
                "string" != typeof v.data &&
                (v.data = S.param(v.data, v.traditional)),
              Qt(Ut, v, t, T),
              h)
            )
              return T;
            for (i in ((g = S.event && v.global) &&
              0 == S.active++ &&
              S.event.trigger("ajaxStart"),
            (v.type = v.type.toUpperCase()),
            (v.hasContent = !_t.test(v.type)),
            (f = v.url.replace(Ft, "")),
            v.hasContent
              ? v.data &&
                v.processData &&
                0 ===
                  (v.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (v.data = v.data.replace(Wt, "+"))
              : ((o = v.url.slice(f.length)),
                v.data &&
                  (v.processData || "string" == typeof v.data) &&
                  ((f += (Ot.test(f) ? "&" : "?") + v.data), delete v.data),
                !1 === v.cache &&
                  ((f = f.replace(Bt, "$1")),
                  (o = (Ot.test(f) ? "&" : "?") + "_=" + Ht.guid++ + o)),
                (v.url = f + o)),
            v.ifModified &&
              (S.lastModified[f] &&
                T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
              S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            ((v.data && v.hasContent && !1 !== v.contentType) ||
              t.contentType) &&
              T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader(
              "Accept",
              v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                ? v.accepts[v.dataTypes[0]] +
                    ("*" !== v.dataTypes[0] ? ", " + Vt + "; q=0.01" : "")
                : v.accepts["*"]
            ),
            v.headers))
              T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
              return T.abort();
            if (
              ((u = "abort"),
              b.add(v.complete),
              T.done(v.success),
              T.fail(v.error),
              (c = Qt(Xt, v, t, T)))
            ) {
              if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
                return T;
              v.async &&
                0 < v.timeout &&
                (d = C.setTimeout(function () {
                  T.abort("timeout");
                }, v.timeout));
              try {
                (h = !1), c.send(a, l);
              } catch (e) {
                if (h) throw e;
                l(-1, e);
              }
            } else l(-1, "No Transport");
            function l(e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = t;
              h ||
                ((h = !0),
                d && C.clearTimeout(d),
                (c = void 0),
                (p = r || ""),
                (T.readyState = 0 < e ? 4 : 0),
                (i = (200 <= e && e < 300) || 304 === e),
                n &&
                  (s = (function (e, t, n) {
                    for (
                      var r, i, o, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                          o = i;
                          break;
                        }
                        a = a || i;
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(v, T, n)),
                !i &&
                  -1 < S.inArray("script", v.dataTypes) &&
                  (v.converters["text script"] = function () {}),
                (s = (function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (a in e.converters)
                      l[a.toLowerCase()] = e.converters[a];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = u;
                      else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                          for (i in l)
                            if (
                              (s = i.split(" "))[1] === o &&
                              (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = l[i])
                                : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(v, s, T, i)),
                i
                  ? (v.ifModified &&
                      ((u = T.getResponseHeader("Last-Modified")) &&
                        (S.lastModified[f] = u),
                      (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                    204 === e || "HEAD" === v.type
                      ? (l = "nocontent")
                      : 304 === e
                      ? (l = "notmodified")
                      : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                  : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                (T.status = e),
                (T.statusText = (t || l) + ""),
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                (w = void 0),
                g &&
                  m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g &&
                  (m.trigger("ajaxComplete", [T, v]),
                  --S.active || S.event.trigger("ajaxStop")));
            }
            return T;
          },
          getJSON: function (e, t, n) {
            return S.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return S.get(e, void 0, t, "script");
          },
        }),
        S.each(["get", "post"], function (e, i) {
          S[i] = function (e, t, n, r) {
            return (
              x(t) && ((r = r || n), (n = t), (t = void 0)),
              S.ajax(
                S.extend(
                  { url: e, type: i, dataType: r, data: t, success: n },
                  S.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        S.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
          return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              S.globalEval(e, t, n);
            },
          });
        }),
        S.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (x(e) && (e = e.call(this[0])),
                (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (n) {
            return x(n)
              ? this.each(function (e) {
                  S(this).wrapInner(n.call(this, e));
                })
              : this.each(function () {
                  var e = S(this),
                    t = e.contents();
                  t.length ? t.wrapAll(n) : e.append(n);
                });
          },
          wrap: function (t) {
            var n = x(t);
            return this.each(function (e) {
              S(this).wrapAll(n ? t.call(this, e) : t);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  S(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (S.expr.pseudos.hidden = function (e) {
          return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (S.ajaxSettings.xhr = function () {
          try {
            return new C.XMLHttpRequest();
          } catch (e) {}
        });
      var Kt = { 0: 200, 1223: 204 },
        Zt = S.ajaxSettings.xhr();
      (m.cors = !!Zt && "withCredentials" in Zt),
        (m.ajax = Zt = !!Zt),
        S.ajaxTransport(function (i) {
          var o, a;
          if (m.cors || (Zt && !i.crossDomain))
            return {
              send: function (e, t) {
                var n,
                  r = i.xhr();
                if (
                  (r.open(i.type, i.url, i.async, i.username, i.password),
                  i.xhrFields)
                )
                  for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in (i.mimeType &&
                  r.overrideMimeType &&
                  r.overrideMimeType(i.mimeType),
                i.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest"),
                e))
                  r.setRequestHeader(n, e[n]);
                (o = function (e) {
                  return function () {
                    o &&
                      ((o =
                        a =
                        r.onload =
                        r.onerror =
                        r.onabort =
                        r.ontimeout =
                        r.onreadystatechange =
                          null),
                      "abort" === e
                        ? r.abort()
                        : "error" === e
                        ? "number" != typeof r.status
                          ? t(0, "error")
                          : t(r.status, r.statusText)
                        : t(
                            Kt[r.status] || r.status,
                            r.statusText,
                            "text" !== (r.responseType || "text") ||
                              "string" != typeof r.responseText
                              ? { binary: r.response }
                              : { text: r.responseText },
                            r.getAllResponseHeaders()
                          ));
                  };
                }),
                  (r.onload = o()),
                  (a = r.onerror = r.ontimeout = o("error")),
                  void 0 !== r.onabort
                    ? (r.onabort = a)
                    : (r.onreadystatechange = function () {
                        4 === r.readyState &&
                          C.setTimeout(function () {
                            o && a();
                          });
                      }),
                  (o = o("abort"));
                try {
                  r.send((i.hasContent && i.data) || null);
                } catch (e) {
                  if (o) throw e;
                }
              },
              abort: function () {
                o && o();
              },
            };
        }),
        S.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return S.globalEval(e), e;
            },
          },
        }),
        S.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
          var r, i;
          if (n.crossDomain || n.scriptAttrs)
            return {
              send: function (e, t) {
                (r = S("<script>")
                  .attr(n.scriptAttrs || {})
                  .prop({ charset: n.scriptCharset, src: n.url })
                  .on(
                    "load error",
                    (i = function (e) {
                      r.remove(),
                        (i = null),
                        e && t("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  E.head.appendChild(r[0]);
              },
              abort: function () {
                i && i();
              },
            };
        });
      var en,
        tn = [],
        nn = /(=)\?(?=&|$)|\?\?/;
      S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = tn.pop() || S.expando + "_" + Ht.guid++;
          return (this[e] = !0), e;
        },
      }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
          var r,
            i,
            o,
            a =
              !1 !== e.jsonp &&
              (nn.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  nn.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback =
                x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(nn, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return o || S.error(r + " was not called"), o[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = C[r]),
              (C[r] = function () {
                o = arguments;
              }),
              n.always(function () {
                void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), tn.push(r)),
                  o && x(i) && i(o[0]),
                  (o = i = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((en = E.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === en.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((r = (t =
                      E.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = E.location.href),
                    t.head.appendChild(r))
                  : (t = E)),
              (o = !n && []),
              (i = j.exec(e))
                ? [t.createElement(i[1])]
                : ((i = xe([e], t, o)),
                  o && o.length && S(o).remove(),
                  S.merge([], i.childNodes)));
          var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            -1 < s && ((r = kt(e.slice(s))), (e = e.slice(0, s))),
            x(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            0 < a.length &&
              S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (S.expr.pseudos.animated = function (t) {
          return S.grep(S.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (S.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = S.css(e, "position"),
              c = S(e),
              f = {};
            "static" === l && (e.style.position = "relative"),
              (s = c.offset()),
              (o = S.css(e, "top")),
              (u = S.css(e, "left")),
              (i =
                ("absolute" === l || "fixed" === l) &&
                -1 < (o + u).indexOf("auto")
                  ? ((a = (r = c.position()).top), r.left)
                  : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
              x(t) && (t = t.call(e, n, S.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              "using" in t
                ? t.using.call(e, f)
                : ("number" == typeof f.top && (f.top += "px"),
                  "number" == typeof f.left && (f.left += "px"),
                  c.css(f));
          },
        }),
        S.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    S.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((e = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === S.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === S.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                  (i.left += S.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - S.css(r, "marginTop", !0),
                left: t.left - i.left - S.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === S.css(e, "position");

              )
                e = e.offsetParent;
              return e || re;
            });
          },
        }),
        S.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function (e) {
              return $(
                this,
                function (e, t, n) {
                  var r;
                  return (
                    g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === n
                      ? r
                        ? r[i]
                        : e[t]
                      : void (r
                          ? r.scrollTo(
                              o ? r.pageXOffset : n,
                              o ? n : r.pageYOffset
                            )
                          : (e[t] = n))
                  );
                },
                t,
                e,
                arguments.length
              );
            };
          }
        ),
        S.each(["top", "left"], function (e, n) {
          S.cssHooks[n] = Ke(m.pixelPosition, function (e, t) {
            if (t)
              return (t = Je(e, n)), Xe.test(t) ? S(e).position()[n] + "px" : t;
          });
        }),
        S.each({ Height: "height", Width: "width" }, function (a, s) {
          S.each(
            { padding: "inner" + a, content: s, "": "outer" + a },
            function (r, o) {
              S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                  i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(
                  this,
                  function (e, t, n) {
                    var r;
                    return g(e)
                      ? 0 === o.indexOf("outer")
                        ? e["inner" + a]
                        : e.document.documentElement["client" + a]
                      : 9 === e.nodeType
                      ? ((r = e.documentElement),
                        Math.max(
                          e.body["scroll" + a],
                          r["scroll" + a],
                          e.body["offset" + a],
                          r["offset" + a],
                          r["client" + a]
                        ))
                      : void 0 === n
                      ? S.css(e, t, i)
                      : S.style(e, t, n, i);
                  },
                  s,
                  n ? e : void 0,
                  n
                );
              };
            }
          );
        }),
        S.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            S.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        S.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        S.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, n) {
            S.fn[n] = function (e, t) {
              return 0 < arguments.length
                ? this.on(n, null, e, t)
                : this.trigger(n);
            };
          }
        );
      var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (S.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), x(e)))
          return (
            (r = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || S.guid++),
            i
          );
      }),
        (S.holdReady = function (e) {
          e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = x),
        (S.isWindow = g),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
          var t = S.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (S.trim = function (e) {
          return null == e ? "" : (e + "").replace(rn, "");
        }),
        void 0 ===
          (ln = function () {
            return S;
          }.apply(un, [])) || (sn.exports = ln);
      var on = C.jQuery,
        an = C.$;
      return (
        (S.noConflict = function (e) {
          return (
            C.$ === S && (C.$ = an), e && C.jQuery === S && (C.jQuery = on), S
          );
        }),
        void 0 === e && (C.jQuery = C.$ = S),
        S
      );
    });
  },
  7: function (e, t, n) {
    var r = n(0),
      i = n(0);
    i(document).ready(function () {
      "undefined" != typeof rtafr &&
        0 < rtafr.length &&
        "" != rtafr &&
        rtafr.forEach(function (e) {
          setTimeout(function () {
            i("body")
              .children()
              .each(function () {
                i(this).html(
                  r(this).html().replace(new RegExp(e.find, "g"), e.replace)
                );
              });
          }, 1e3 * e.delay);
        });
    });
  },
});
/*! This file is auto-generated */
!(function (d, l) {
  "use strict";
  var e = !1,
    o = !1;
  if (l.querySelector) if (d.addEventListener) e = !0;
  if (((d.wp = d.wp || {}), !d.wp.receiveEmbedMessage))
    if (
      ((d.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t)
          if (t.secret || t.message || t.value)
            if (!/[^a-zA-Z0-9]/.test(t.secret)) {
              var r,
                a,
                i,
                s,
                n,
                o = l.querySelectorAll(
                  'iframe[data-secret="' + t.secret + '"]'
                ),
                c = l.querySelectorAll(
                  'blockquote[data-secret="' + t.secret + '"]'
                );
              for (r = 0; r < c.length; r++) c[r].style.display = "none";
              for (r = 0; r < o.length; r++)
                if (((a = o[r]), e.source === a.contentWindow)) {
                  if ((a.removeAttribute("style"), "height" === t.message)) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                    else if (~~i < 200) i = 200;
                    a.height = i;
                  }
                  if ("link" === t.message)
                    if (
                      ((s = l.createElement("a")),
                      (n = l.createElement("a")),
                      (s.href = a.getAttribute("src")),
                      (n.href = t.value),
                      n.host === s.host)
                    )
                      if (l.activeElement === a) d.top.location.href = t.value;
                }
            }
      }),
      e)
    )
      d.addEventListener("message", d.wp.receiveEmbedMessage, !1),
        l.addEventListener("DOMContentLoaded", t, !1),
        d.addEventListener("load", t, !1);
  function t() {
    if (!o) {
      o = !0;
      var e,
        t,
        r,
        a,
        i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        s = !!navigator.userAgent.match(/Trident.*rv:11\./),
        n = l.querySelectorAll("iframe.wp-embedded-content");
      for (t = 0; t < n.length; t++) {
        if (!(r = n[t]).getAttribute("data-secret"))
          (a = Math.random().toString(36).substr(2, 10)),
            (r.src += "#?secret=" + a),
            r.setAttribute("data-secret", a);
        if (i || s)
          (e = r.cloneNode(!0)).removeAttribute("security"),
            r.parentNode.replaceChild(e, r);
      }
    }
  }
})(window, document);
var sbi_js_exists = void 0 !== sbi_js_exists;
sbi_js_exists ||
  (!(function (i) {
    function e() {
      var i,
        e,
        s,
        t = t || { VER: "0.9.944" };
      (t.bgs_Available = !1),
        (t.bgs_CheckRunned = !1),
        (function (i) {
          i.fn.extend({
            sbi_imgLiquid: function (e) {
              (this.defaults = {
                fill: !0,
                verticalAlign: "center",
                horizontalAlign: "center",
                useBackgroundSize: !0,
                useDataHtmlAttr: !0,
                responsive: !0,
                delay: 0,
                fadeInTime: 0,
                removeBoxBackground: !0,
                hardPixels: !0,
                responsiveCheckTime: 500,
                timecheckvisibility: 500,
                onStart: null,
                onFinish: null,
                onItemStart: null,
                onItemFinish: null,
                onItemError: null,
              }),
                (function () {
                  if (!t.bgs_CheckRunned) {
                    t.bgs_CheckRunned = !0;
                    var e = i('<span style="background-size:cover" />');
                    i("body").append(e),
                      (function () {
                        var i = e[0];
                        if (i && window.getComputedStyle) {
                          var s = window.getComputedStyle(i, null);
                          s &&
                            s.backgroundSize &&
                            (t.bgs_Available = "cover" === s.backgroundSize);
                        }
                      })(),
                      e.remove();
                  }
                })();
              var s = this;
              return (
                (this.options = e),
                (this.settings = i.extend({}, this.defaults, this.options)),
                this.settings.onStart && this.settings.onStart(),
                this.each(function (e) {
                  function n() {
                    (r.responsive || h.data("sbi_imgLiquid_oldProcessed")) &&
                      h.data("sbi_imgLiquid_settings") &&
                      ((r = h.data("sbi_imgLiquid_settings")),
                      (l.actualSize =
                        l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4),
                      l.sizeOld && l.actualSize !== l.sizeOld && o(),
                      (l.sizeOld = l.actualSize),
                      setTimeout(n, r.responsiveCheckTime));
                  }
                  function a() {
                    h.data("sbi_imgLiquid_error", !0),
                      l.addClass("sbi_imgLiquid_error"),
                      r.onItemError && r.onItemError(e, l, h),
                      d();
                  }
                  function o() {
                    var i,
                      s,
                      t,
                      n,
                      a,
                      o,
                      g,
                      c,
                      f = 0,
                      u = 0,
                      b = l.width(),
                      _ = l.height();
                    void 0 === h.data("owidth") && h.data("owidth", h[0].width),
                      void 0 === h.data("oheight") &&
                        h.data("oheight", h[0].height),
                      r.fill === b / _ >= h.data("owidth") / h.data("oheight")
                        ? ((i = "100%"),
                          (s = "auto"),
                          (t = Math.floor(b)),
                          (n = Math.floor(
                            b * (h.data("oheight") / h.data("owidth"))
                          )))
                        : ((i = "auto"),
                          (s = "100%"),
                          (t = Math.floor(
                            _ * (h.data("owidth") / h.data("oheight"))
                          )),
                          (n = Math.floor(_))),
                      (g = b - t),
                      "left" === (a = r.horizontalAlign.toLowerCase()) &&
                        (u = 0),
                      "center" === a && (u = 0.5 * g),
                      "right" === a && (u = g),
                      -1 !== a.indexOf("%") &&
                        (a = parseInt(a.replace("%", ""), 10)) > 0 &&
                        (u = g * a * 0.01),
                      (c = _ - n),
                      "left" === (o = r.verticalAlign.toLowerCase()) && (f = 0),
                      "center" === o && (f = 0.5 * c),
                      "bottom" === o && (f = c),
                      -1 !== o.indexOf("%") &&
                        (o = parseInt(o.replace("%", ""), 10)) > 0 &&
                        (f = c * o * 0.01),
                      r.hardPixels && ((i = t), (s = n)),
                      h.css({
                        width: i,
                        height: s,
                        "margin-left": Math.floor(u),
                        "margin-top": Math.floor(f),
                      }),
                      h.data("sbi_imgLiquid_oldProcessed") ||
                        (h.fadeTo(r.fadeInTime, 1),
                        h.data("sbi_imgLiquid_oldProcessed", !0),
                        r.removeBoxBackground &&
                          l.css("background-image", "none"),
                        l.addClass("sbi_imgLiquid_nobgSize"),
                        l.addClass("sbi_imgLiquid_ready")),
                      r.onItemFinish && r.onItemFinish(e, l, h),
                      d();
                  }
                  function d() {
                    e === s.length - 1 &&
                      s.settings.onFinish &&
                      s.settings.onFinish();
                  }
                  var r = s.settings,
                    l = i(this),
                    h = i("img:first", l);
                  return h.length
                    ? (h.data("sbi_imgLiquid_settings")
                        ? (l
                            .removeClass("sbi_imgLiquid_error")
                            .removeClass("sbi_imgLiquid_ready"),
                          (r = i.extend(
                            {},
                            h.data("sbi_imgLiquid_settings"),
                            s.options
                          )))
                        : (r = i.extend(
                            {},
                            s.settings,
                            (function () {
                              var i = {};
                              if (s.settings.useDataHtmlAttr) {
                                var e = l.attr("data-sbi_imgLiquid-fill"),
                                  n = l.attr(
                                    "data-sbi_imgLiquid-horizontalAlign"
                                  ),
                                  a = l.attr(
                                    "data-sbi_imgLiquid-verticalAlign"
                                  );
                                ("true" === e || "false" === e) &&
                                  (i.fill = Boolean("true" === e)),
                                  void 0 === n ||
                                    ("left" !== n &&
                                      "center" !== n &&
                                      "right" !== n &&
                                      -1 === n.indexOf("%")) ||
                                    (i.horizontalAlign = n),
                                  void 0 === a ||
                                    ("top" !== a &&
                                      "bottom" !== a &&
                                      "center" !== a &&
                                      -1 === a.indexOf("%")) ||
                                    (i.verticalAlign = a);
                              }
                              return (
                                t.isIE &&
                                  s.settings.ieFadeInDisabled &&
                                  (i.fadeInTime = 0),
                                i
                              );
                            })()
                          )),
                      h.data("sbi_imgLiquid_settings", r),
                      r.onItemStart && r.onItemStart(e, l, h),
                      void (t.bgs_Available && r.useBackgroundSize
                        ? (-1 ===
                            l
                              .css("background-image")
                              .indexOf(encodeURI(h.attr("src"))) &&
                            l.css({
                              "background-image":
                                'url("' + encodeURI(h.attr("src")) + '")',
                            }),
                          l.css({
                            "background-size": r.fill ? "cover" : "contain",
                            "background-position": (
                              r.horizontalAlign +
                              " " +
                              r.verticalAlign
                            ).toLowerCase(),
                            "background-repeat": "no-repeat",
                          }),
                          i("a:first", l).css({
                            display: "block",
                            width: "100%",
                            height: "100%",
                          }),
                          i("img", l).css({ display: "none" }),
                          r.onItemFinish && r.onItemFinish(e, l, h),
                          l.addClass("sbi_imgLiquid_bgSize"),
                          l.addClass("sbi_imgLiquid_ready"),
                          d())
                        : (function s() {
                            if (
                              h.data("oldSrc") &&
                              h.data("oldSrc") !== h.attr("src")
                            ) {
                              var t = h.clone().removeAttr("style");
                              return (
                                t.data(
                                  "sbi_imgLiquid_settings",
                                  h.data("sbi_imgLiquid_settings")
                                ),
                                h.parent().prepend(t),
                                h.remove(),
                                ((h = t)[0].width = 0),
                                void setTimeout(s, 10)
                              );
                            }
                            return h.data("sbi_imgLiquid_oldProcessed")
                              ? void o()
                              : (h.data("sbi_imgLiquid_oldProcessed", !1),
                                h.data("oldSrc", h.attr("src")),
                                i("img:not(:first)", l).css("display", "none"),
                                l.css({ overflow: "hidden" }),
                                h
                                  .fadeTo(0, 0)
                                  .removeAttr("width")
                                  .removeAttr("height")
                                  .css({
                                    visibility: "visible",
                                    "max-width": "none",
                                    "max-height": "none",
                                    width: "auto",
                                    height: "auto",
                                    display: "block",
                                  }),
                                h.on("error", a),
                                (h[0].onerror = a),
                                (function i() {
                                  h.data("sbi_imgLiquid_error") ||
                                    h.data("sbi_imgLiquid_loaded") ||
                                    h.data("sbi_imgLiquid_oldProcessed") ||
                                    (l.is(":visible") &&
                                    h[0].complete &&
                                    h[0].width > 0 &&
                                    h[0].height > 0
                                      ? (h.data("sbi_imgLiquid_loaded", !0),
                                        setTimeout(o, e * r.delay))
                                      : setTimeout(i, r.timecheckvisibility));
                                })(),
                                void n());
                          })()))
                    : void a();
                })
              );
            },
          });
        })(jQuery),
        (i = t.injectCss),
        (e = document.getElementsByTagName("head")[0]),
        ((s = document.createElement("style")).type = "text/css"),
        s.styleSheet
          ? (s.styleSheet.cssText = i)
          : s.appendChild(document.createTextNode(i)),
        e.appendChild(s);
    }
    function s() {
      (this.feeds = {}), (this.options = sb_instagram_js_options);
    }
    function t(i, e, s) {
      (this.el = i),
        (this.index = e),
        (this.settings = s),
        (this.minImageWidth = 0),
        (this.imageResolution = 150),
        (this.resizedImages = {}),
        (this.needsResizing = []),
        (this.outOfPages = !1),
        (this.isInitialized = !1);
    }
    function n(e, s) {
      i.ajax({ url: sbiajaxurl, type: "post", data: e, success: s });
    }
    (s.prototype = {
      createPage: function (e, s) {
        (void 0 !== window.sbiajaxurl &&
          -1 !== window.sbiajaxurl.indexOf(window.location.hostname)) ||
          (window.sbiajaxurl =
            location.protocol +
            "//" +
            window.location.hostname +
            "/wp-admin/admin-ajax.php"),
          i(".sbi_no_js_error_message").remove(),
          i(".sbi_no_js").removeClass("sbi_no_js"),
          e(s);
      },
      createFeeds: function (e) {
        e.whenFeedsCreated(
          i(".sbi").each(function (e) {
            i(this).attr("data-sbi-index", e + 1);
            var s = i(this),
              a =
                void 0 !== s.attr("data-sbi-flags")
                  ? s.attr("data-sbi-flags").split(",")
                  : [],
              o =
                void 0 !== s.attr("data-options")
                  ? JSON.parse(s.attr("data-options"))
                  : {};
            if (a.indexOf("testAjax") > -1) {
              window.sbi.triggeredTest = !0;
              n({ action: "sbi_on_ajax_test_trigger" }, function (i) {
                console.log("did test");
              });
            }
            var d = {
              cols: s.attr("data-cols"),
              colsmobile:
                void 0 !== s.attr("data-colsmobile") &&
                "same" !== s.attr("data-colsmobile")
                  ? s.attr("data-colsmobile")
                  : s.attr("data-cols"),
              num: s.attr("data-num"),
              imgRes: s.attr("data-res"),
              feedID: s.attr("data-feedid"),
              shortCodeAtts: s.attr("data-shortcode-atts"),
              resizingEnabled: -1 === a.indexOf("resizeDisable"),
              imageLoadEnabled: -1 === a.indexOf("imageLoadDisable"),
              debugEnabled: a.indexOf("debug") > -1,
              favorLocal: a.indexOf("favorLocal") > -1,
              ajaxPostLoad: a.indexOf("ajaxPostLoad") > -1,
              gdpr: a.indexOf("gdpr") > -1,
              overrideBlockCDN: a.indexOf("overrideBlockCDN") > -1,
              consentGiven: !1,
              autoMinRes: 1,
              general: o,
            };
            (window.sbi.feeds[e] = (function (i, e, s) {
              return new t(i, e, s);
            })(this, e, d)),
              window.sbi.feeds[e].setResizedImages(),
              window.sbi.feeds[e].init();
            var r = jQuery.Event("sbiafterfeedcreate");
            (r.feed = window.sbi.feeds[e]), jQuery(window).trigger(r);
          })
        );
      },
      afterFeedsCreated: function () {
        i(".sb_instagram_header").each(function () {
          var e = i(this);
          e.find(".sbi_header_link").hover(
            function () {
              e.find(".sbi_header_img_hover").addClass("sbi_fade_in");
            },
            function () {
              e.find(".sbi_header_img_hover").removeClass("sbi_fade_in");
            }
          );
        });
      },
      encodeHTML: function (i) {
        return void 0 === i
          ? ""
          : i
              .replace(/(>)/g, "&gt;")
              .replace(/(<)/g, "&lt;")
              .replace(/(&lt;br\/&gt;)/g, "<br>")
              .replace(/(&lt;br&gt;)/g, "<br>");
      },
      urlDetect: function (i) {
        return i.match(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g
        );
      },
    }),
      (t.prototype = {
        init: function () {
          var e = this;
          (e.settings.consentGiven = e.checkConsent()),
            i(this.el).find(".sbi_photo").parent("p").length &&
              i(this.el).addClass("sbi_no_autop"),
            i(this.el).find("#sbi_mod_error").length &&
              i(this.el).prepend(i(this.el).find("#sbi_mod_error")),
            this.settings.ajaxPostLoad
              ? this.getNewPostSet()
              : this.afterInitialImagesLoaded();
          var s,
            t =
              ((s = 0),
              function (i, e) {
                clearTimeout(s), (s = setTimeout(i, e));
              });
          jQuery(window).resize(function () {
            t(function () {
              e.afterResize();
            }, 500);
          }),
            i(this.el)
              .find(".sbi_item")
              .each(function () {
                e.lazyLoadCheck(i(this));
              });
        },
        initLayout: function () {},
        afterInitialImagesLoaded: function () {
          this.initLayout(),
            this.loadMoreButtonInit(),
            this.hideExtraImagesForWidth(),
            this.beforeNewImagesRevealed(),
            this.revealNewImages(),
            this.afterNewImagesRevealed();
        },
        afterResize: function () {
          this.setImageHeight(),
            this.setImageResolution(),
            this.maybeRaiseImageResolution(),
            this.setImageSizeClass();
        },
        afterLoadMoreClicked: function (i) {
          i.find(".sbi_loader").removeClass("sbi_hidden"),
            i.find(".sbi_btn_text").addClass("sbi_hidden"),
            i
              .closest(".sbi")
              .find(".sbi_num_diff_hide")
              .addClass("sbi_transition")
              .removeClass("sbi_num_diff_hide");
        },
        afterNewImagesLoaded: function () {
          var e = i(this.el),
            s = this;
          this.beforeNewImagesRevealed(),
            this.revealNewImages(),
            this.afterNewImagesRevealed(),
            setTimeout(function () {
              e.find(".sbi_loader").addClass("sbi_hidden"),
                e.find(".sbi_btn_text").removeClass("sbi_hidden"),
                s.maybeRaiseImageResolution();
            }, 500);
        },
        beforeNewImagesRevealed: function () {
          this.setImageHeight(),
            this.maybeRaiseImageResolution(!0),
            this.setImageSizeClass();
        },
        revealNewImages: function () {
          var e = i(this.el);
          e.find(".sbi-screenreader").each(function () {
            i(this).find("img").remove();
          }),
            "function" == typeof sbi_custom_js &&
              setTimeout(function () {
                sbi_custom_js();
              }, 100),
            this.applyImageLiquid(),
            e.find(".sbi_item").each(function (i) {
              jQuery(this)
                .find(".sbi_photo")
                .hover(
                  function () {
                    jQuery(this).fadeTo(200, 0.85);
                  },
                  function () {
                    jQuery(this).stop().fadeTo(500, 1);
                  }
                );
            }),
            setTimeout(function () {
              jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");
              var i = 10;
              e.find(".sbi_transition").each(function () {
                var e = jQuery(this);
                setTimeout(function () {
                  e.removeClass("sbi_transition");
                }, i),
                  (i += 10);
              });
            }, 500);
        },
        lazyLoadCheck: function (e) {
          if (
            e.find(".sbi_photo").length &&
            !e.closest(".sbi").hasClass("sbi-no-ll-check")
          ) {
            var s = this.getImageUrls(e),
              t =
                void 0 !== s[640]
                  ? s[640]
                  : e.find(".sbi_photo").attr("data-full-res");
            if (!this.settings.consentGiven && t.indexOf("scontent") > -1)
              return;
            e.find(".sbi_photo img").each(function () {
              t &&
                void 0 !== i(this).attr("data-src") &&
                i(this).attr("data-src", t),
                t &&
                  void 0 !== i(this).attr("data-orig-src") &&
                  i(this).attr("data-orig-src", t),
                i(this).on("load", function () {
                  !i(this).hasClass("sbi-replaced") &&
                    i(this).attr("src").indexOf("placeholder") > -1 &&
                    (i(this).addClass("sbi-replaced"),
                    t &&
                      (i(this).attr("src", t),
                      i(this).closest(".sbi_imgLiquid_bgSize").length &&
                        i(this)
                          .closest(".sbi_imgLiquid_bgSize")
                          .css("background-image", "url(" + t + ")")));
                });
            });
          }
        },
        afterNewImagesRevealed: function () {
          this.listenForVisibilityChange(),
            this.sendNeedsResizingToServer(),
            this.settings.imageLoadEnabled ||
              i(".sbi_no_resraise").removeClass("sbi_no_resraise");
          var e = i.Event("sbiafterimagesloaded");
          (e.el = i(this.el)), i(window).trigger(e);
        },
        setResizedImages: function () {
          i(this.el).find(".sbi_resized_image_data").length &&
            void 0 !==
              i(this.el).find(".sbi_resized_image_data").attr("data-resized") &&
            0 ===
              i(this.el)
                .find(".sbi_resized_image_data")
                .attr("data-resized")
                .indexOf('{"') &&
            ((this.resizedImages = JSON.parse(
              i(this.el).find(".sbi_resized_image_data").attr("data-resized")
            )),
            i(this.el).find(".sbi_resized_image_data").remove());
        },
        sendNeedsResizingToServer: function () {
          var e = this;
          if (e.needsResizing.length > 0 && e.settings.resizingEnabled) {
            var s = i(this.el).find(".sbi_item").length,
              t =
                void 0 !== e.settings.general.cache_all &&
                e.settings.general.cache_all;
            n(
              {
                action: "sbi_resized_images_submit",
                needs_resizing: e.needsResizing,
                offset: s,
                feed_id: e.settings.feedID,
                atts: e.settings.shortCodeAtts,
                cache_all: t,
              },
              function (i) {
                if (0 === i.trim().indexOf("{")) {
                  var s = JSON.parse(i);
                  for (var t in (e.settings.debugEnabled && console.log(s), s))
                    s.hasOwnProperty(t) && (e.resizedImages[t] = s[t]);
                  e.maybeRaiseImageResolution(),
                    setTimeout(function () {
                      e.afterResize();
                    }, 500);
                }
              }
            );
          }
        },
        loadMoreButtonInit: function () {
          var e = i(this.el),
            s = this;
          e.find("#sbi_load .sbi_load_btn")
            .off()
            .on("click", function () {
              s.afterLoadMoreClicked(jQuery(this)), s.getNewPostSet();
            });
        },
        getNewPostSet: function () {
          var e = i(this.el),
            s = this;
          n(
            {
              action: "sbi_load_more_clicked",
              offset: e.find(".sbi_item").length,
              feed_id: s.settings.feedID,
              atts: s.settings.shortCodeAtts,
              current_resolution: s.imageResolution,
            },
            function (t) {
              if (0 === t.trim().indexOf("{")) {
                var n = JSON.parse(t);
                s.settings.debugEnabled && console.log(n),
                  s.appendNewPosts(n.html),
                  s.addResizedImages(n.resizedImages),
                  s.settings.ajaxPostLoad
                    ? ((s.settings.ajaxPostLoad = !1),
                      s.afterInitialImagesLoaded())
                    : s.afterNewImagesLoaded(),
                  n.feedStatus.shouldPaginate
                    ? (s.outOfPages = !1)
                    : ((s.outOfPages = !0), e.find(".sbi_load_btn").hide()),
                  i(".sbi_no_js").removeClass("sbi_no_js");
              }
            }
          );
        },
        appendNewPosts: function (e) {
          var s = i(this.el);
          s.find("#sbi_images .sbi_item").length
            ? s.find("#sbi_images .sbi_item").last().after(e)
            : s.find("#sbi_images").append(e);
        },
        addResizedImages: function (i) {
          for (var e in i) this.resizedImages[e] = i[e];
        },
        setImageHeight: function () {
          var e = i(this.el),
            s = e.find(".sbi_photo").eq(0).innerWidth(),
            t = this.getColumnCount(),
            n =
              e.find("#sbi_images").innerWidth() -
              e.find("#sbi_images").width(),
            a = n / 2;
          (sbi_photo_width_manual = e.find("#sbi_images").width() / t - n),
            e.find(".sbi_photo").css("height", s),
            e.find(".sbi-owl-nav").length &&
              setTimeout(function () {
                var i = 2;
                e.find(".sbi_owl2row-item").length && (i = 1);
                var s = e.find(".sbi_photo").eq(0).innerWidth() / i;
                (s += parseInt(a) * (2 - i + 2)),
                  e.find(".sbi-owl-nav div").css("top", s);
              }, 100);
        },
        maybeRaiseSingleImageResolution: function (e, s, t) {
          var n = this,
            a = n.getImageUrls(e),
            o = e.find(".sbi_photo img").attr("src"),
            d = 150,
            r = e.find("img").get(0),
            l =
              o === window.sbi.options.placeholder
                ? 1
                : r.naturalWidth / r.naturalHeight;
          t = void 0 !== t && t;
          if (
            !(
              e.hasClass("sbi_no_resraise") ||
              e.hasClass("sbi_had_error") ||
              (e.find(".sbi_link_area").length &&
                e.find(".sbi_link_area").hasClass("sbi_had_error"))
            )
          )
            if (a.length < 1)
              e.find(".sbi_link_area").length &&
                e
                  .find(".sbi_link_area")
                  .attr(
                    "href",
                    window.sbi.options.placeholder.replace(
                      "placeholder.png",
                      "thumb-placeholder.png"
                    )
                  );
            else {
              ((e.find(".sbi_link_area").length &&
                e.find(".sbi_link_area").attr("href") ===
                  window.sbi.options.placeholder.replace(
                    "placeholder.png",
                    "thumb-placeholder.png"
                  )) ||
                !n.settings.consentGiven) &&
                e.find(".sbi_link_area").attr("href", a[a.length - 1]),
                void 0 !== a[640] &&
                  e.find(".sbi_photo").attr("data-full-res", a[640]),
                i.each(a, function (i, e) {
                  e === o && ((d = parseInt(i)), (t = !1));
                });
              var h = 640;
              switch (n.settings.imgRes) {
                case "thumb":
                  h = 150;
                  break;
                case "medium":
                  h = 320;
                  break;
                case "full":
                  h = 640;
                  break;
                default:
                  var g = Math.max(
                      n.settings.autoMinRes,
                      e.find(".sbi_photo").innerWidth()
                    ),
                    c = n.getBestResolutionForAuto(g, l, e);
                  switch (c) {
                    case 320:
                      h = 320;
                      break;
                    case 150:
                      h = 150;
                  }
              }
              if (h > d || o === window.sbi.options.placeholder || t) {
                if (n.settings.debugEnabled) {
                  var f =
                    o === window.sbi.options.placeholder
                      ? "was placeholder"
                      : "too small";
                  console.log("rais res for " + o, f);
                }
                var u = a[h].split("?ig_cache_key")[0];
                if (
                  (o !== u &&
                    (e.find(".sbi_photo img").attr("src", u),
                    e
                      .find(".sbi_photo")
                      .css("background-image", 'url("' + u + '")')),
                  (d = h),
                  "auto" === n.settings.imgRes)
                ) {
                  var b = !1;
                  e.find(".sbi_photo img").on("load", function () {
                    var s = i(this),
                      t = s.get(0).naturalWidth / s.get(0).naturalHeight;
                    if (1e3 !== s.get(0).naturalWidth && t > l && !b) {
                      switch (
                        (n.settings.debugEnabled &&
                          console.log(
                            "rais res again for aspect ratio change " + o
                          ),
                        (b = !0),
                        (g = e.find(".sbi_photo").innerWidth()),
                        (c = n.getBestResolutionForAuto(g, t, e)),
                        (h = 640),
                        c)
                      ) {
                        case 320:
                          h = 320;
                          break;
                        case 150:
                          h = 150;
                      }
                      h > d &&
                        ((u = a[h].split("?ig_cache_key")[0]),
                        s.attr("src", u),
                        s
                          .closest(".sbi_photo")
                          .css("background-image", 'url("' + u + '")')),
                        ("masonry" !== n.layout && "highlight" !== n.layout) ||
                          (i(n.el)
                            .find("#sbi_images")
                            .smashotope(n.isotopeArgs),
                          setTimeout(function () {
                            i(n.el)
                              .find("#sbi_images")
                              .smashotope(n.isotopeArgs);
                          }, 500));
                    } else if (n.settings.debugEnabled) {
                      var r = b ? "already checked" : "no aspect ratio change";
                      console.log("not raising res for replacement  " + o, r);
                    }
                  });
                }
              }
              e.find("img").on("error", function () {
                if (i(this).hasClass("sbi_img_error"))
                  console.log("unfixed error " + i(this).attr("src"));
                else {
                  var e;
                  if (
                    (i(this).addClass("sbi_img_error"),
                    !(
                      i(this).attr("src").indexOf("media/?size=") > -1 ||
                      i(this).attr("src").indexOf("cdninstagram") > -1 ||
                      i(this).attr("src").indexOf("fbcdn") > -1
                    ) && n.settings.consentGiven)
                  ) {
                    if (
                      "undefined" !==
                      i(this).closest(".sbi_photo").attr("data-img-src-set")
                    )
                      void 0 !==
                        (e = JSON.parse(
                          i(this)
                            .closest(".sbi_photo")
                            .attr("data-img-src-set")
                            .replace(/\\\//g, "/")
                        )).d &&
                        (i(this).attr("src", e.d),
                        i(this)
                          .closest(".sbi_photo")
                          .css("background-image", "url(" + e.d + ")"),
                        i(this)
                          .closest(".sbi_item")
                          .addClass("sbi_had_error")
                          .find(".sbi_link_area")
                          .attr("href", e[640])
                          .addClass("sbi_had_error"));
                  } else
                    (n.settings.favorLocal = !0),
                      void 0 !==
                        (e = n.getImageUrls(
                          i(this).closest(".sbi_item")
                        ))[640] &&
                        (i(this).attr("src", e[640]),
                        i(this)
                          .closest(".sbi_photo")
                          .css("background-image", "url(" + e[640] + ")"),
                        i(this)
                          .closest(".sbi_item")
                          .addClass("sbi_had_error")
                          .find(".sbi_link_area")
                          .attr("href", e[640])
                          .addClass("sbi_had_error"));
                  setTimeout(function () {
                    n.afterResize();
                  }, 1500);
                }
              });
            }
        },
        maybeRaiseImageResolution: function (e) {
          var s = this,
            t = void 0 !== e && !0 === e ? ".sbi_item.sbi_new" : ".sbi_item",
            n = !s.isInitialized;
          i(s.el)
            .find(t)
            .each(function (e) {
              !i(this).hasClass("sbi_num_diff_hide") &&
                i(this).find(".sbi_photo").length &&
                void 0 !==
                  i(this).find(".sbi_photo").attr("data-img-src-set") &&
                s.maybeRaiseSingleImageResolution(i(this), e, n);
            }),
            (s.isInitialized = !0);
        },
        getBestResolutionForAuto: function (e, s, t) {
          (isNaN(s) || s < 1) && (s = 1);
          var n = e * s,
            a = 10 * Math.ceil(n / 10),
            o = [150, 320, 640];
          if (
            (t.hasClass("sbi_highlighted") && (a *= 2),
            -1 === o.indexOf(parseInt(a)))
          ) {
            var d = !1;
            i.each(o, function (i, e) {
              e > parseInt(a) && !d && ((a = e), (d = !0));
            });
          }
          return a;
        },
        hideExtraImagesForWidth: function () {
          if ("carousel" !== this.layout) {
            var e = i(this.el),
              s =
                void 0 !== e.attr("data-num") && "" !== e.attr("data-num")
                  ? parseInt(e.attr("data-num"))
                  : 1,
              t =
                void 0 !== e.attr("data-nummobile") &&
                "" !== e.attr("data-nummobile")
                  ? parseInt(e.attr("data-nummobile"))
                  : s;
            i(window).width() < 480
              ? t < e.find(".sbi_item").length &&
                e
                  .find(".sbi_item")
                  .slice(t - e.find(".sbi_item").length)
                  .addClass("sbi_num_diff_hide")
              : s < e.find(".sbi_item").length &&
                e
                  .find(".sbi_item")
                  .slice(s - e.find(".sbi_item").length)
                  .addClass("sbi_num_diff_hide");
          }
        },
        setImageSizeClass: function () {
          var e = i(this.el);
          e.removeClass("sbi_small sbi_medium");
          var s = e.innerWidth(),
            t =
              parseInt(
                e.find("#sbi_images").outerWidth() -
                  e.find("#sbi_images").width()
              ) / 2,
            n = this.getColumnCount(),
            a = (s - t * (n + 2)) / n;
          a > 120 && a < 240
            ? e.addClass("sbi_medium")
            : a <= 120 && e.addClass("sbi_small");
        },
        setMinImageWidth: function () {
          i(this.el).find(".sbi_item .sbi_photo").first().length
            ? (this.minImageWidth = i(this.el)
                .find(".sbi_item .sbi_photo")
                .first()
                .innerWidth())
            : (this.minImageWidth = 150);
        },
        setImageResolution: function () {
          if ("auto" === this.settings.imgRes) this.imageResolution = "auto";
          else
            switch (this.settings.imgRes) {
              case "thumb":
                this.imageResolution = 150;
                break;
              case "medium":
                this.imageResolution = 320;
                break;
              default:
                this.imageResolution = 640;
            }
        },
        getImageUrls: function (i) {
          var e = JSON.parse(
              i
                .find(".sbi_photo")
                .attr("data-img-src-set")
                .replace(/\\\//g, "/")
            ),
            s = i.attr("id").replace("sbi_", "");
          if (
            (this.settings.consentGiven ||
              this.settings.overrideBlockCDN ||
              (e = []),
            void 0 !== this.resizedImages[s] &&
              "video" !== this.resizedImages[s] &&
              "pending" !== this.resizedImages[s] &&
              "error" !== this.resizedImages[s].id &&
              "video" !== this.resizedImages[s].id &&
              "pending" !== this.resizedImages[s].id)
          ) {
            if (void 0 !== this.resizedImages[s].sizes) {
              var t = [];
              void 0 !== this.resizedImages[s].sizes.full &&
                ((e[640] =
                  sb_instagram_js_options.resized_url +
                  this.resizedImages[s].id +
                  "full.jpg"),
                t.push(640)),
                void 0 !== this.resizedImages[s].sizes.low &&
                  ((e[320] =
                    sb_instagram_js_options.resized_url +
                    this.resizedImages[s].id +
                    "low.jpg"),
                  t.push(320)),
                void 0 !== this.resizedImages[s].sizes.thumb &&
                  (t.push(150),
                  (e[150] =
                    sb_instagram_js_options.resized_url +
                    this.resizedImages[s].id +
                    "thumb.jpg")),
                this.settings.favorLocal &&
                  (-1 === t.indexOf(640) &&
                    t.indexOf(320) > -1 &&
                    (e[640] =
                      sb_instagram_js_options.resized_url +
                      this.resizedImages[s].id +
                      "low.jpg"),
                  -1 === t.indexOf(320) &&
                    (t.indexOf(640) > -1
                      ? (e[320] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[s].id +
                          "full.jpg")
                      : t.indexOf(150) > -1 &&
                        (e[320] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[s].id +
                          "thumb.jpg")),
                  -1 === t.indexOf(150) &&
                    (t.indexOf(320) > -1
                      ? (e[150] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[s].id +
                          "low.jpg")
                      : t.indexOf(640) > -1 &&
                        (e[150] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[s].id +
                          "full.jpg")));
            }
          } else
            (void 0 === this.resizedImages[s] ||
              (void 0 !== this.resizedImages[s].id &&
                "pending" !== this.resizedImages[s].id &&
                "error" !== this.resizedImages[s].id)) &&
              this.addToNeedsResizing(s);
          return e;
        },
        getAvatarUrl: function (i, e) {
          if ("" === i) return "";
          var s = this.settings.general.avatars;
          return "local" === (e = void 0 !== e ? e : "local")
            ? void 0 !== s["LCL" + i] && 1 === parseInt(s["LCL" + i])
              ? sb_instagram_js_options.resized_url + i + ".jpg"
              : void 0 !== s[i]
              ? s[i]
              : ""
            : void 0 !== s[i]
            ? s[i]
            : void 0 !== s["LCL" + i] && 1 === parseInt(s["LCL" + i])
            ? sb_instagram_js_options.resized_url + i + ".jpg"
            : "";
        },
        addToNeedsResizing: function (i) {
          -1 === this.needsResizing.indexOf(i) && this.needsResizing.push(i);
        },
        applyImageLiquid: function () {
          var s = i(this.el);
          e(),
            "function" == typeof s.find(".sbi_photo").sbi_imgLiquid &&
              s.find(".sbi_photo").sbi_imgLiquid({ fill: !0 });
        },
        listenForVisibilityChange: function () {
          var e,
            s,
            t,
            n = this;
          (e = jQuery),
            (s = {
              callback: function () {},
              runOnLoad: !0,
              frequency: 100,
              sbiPreviousVisibility: null,
            }),
            (t = {
              sbiCheckVisibility: function (i, e) {
                if (jQuery.contains(document, i[0])) {
                  var s = e.sbiPreviousVisibility,
                    n = i.is(":visible");
                  (e.sbiPreviousVisibility = n),
                    null == s
                      ? e.runOnLoad && e.callback(i, n)
                      : s !== n && e.callback(i, n),
                    setTimeout(function () {
                      t.sbiCheckVisibility(i, e);
                    }, e.frequency);
                }
              },
            }),
            (e.fn.sbiVisibilityChanged = function (i) {
              var n = e.extend({}, s, i);
              return this.each(function () {
                t.sbiCheckVisibility(e(this), n);
              });
            }),
            "function" ==
              typeof i(this.el).filter(":hidden").sbiVisibilityChanged &&
              i(this.el)
                .filter(":hidden")
                .sbiVisibilityChanged({
                  callback: function (i, e) {
                    n.afterResize();
                  },
                  runOnLoad: !1,
                });
        },
        getColumnCount: function () {
          var e = i(this.el),
            s = this.settings.cols,
            t = this.settings.colsmobile,
            n = s;
          return (
            (sbiWindowWidth = window.innerWidth),
            e.hasClass("sbi_mob_col_auto")
              ? (sbiWindowWidth < 640 &&
                  parseInt(s) > 2 &&
                  parseInt(s) < 7 &&
                  (n = 2),
                sbiWindowWidth < 640 &&
                  parseInt(s) > 6 &&
                  parseInt(s) < 11 &&
                  (n = 4),
                sbiWindowWidth <= 480 && parseInt(s) > 2 && (n = 1))
              : sbiWindowWidth <= 480 && (n = t),
            parseInt(n)
          );
        },
        checkConsent: function () {
          if (this.settings.consentGiven || !this.settings.gdpr) return !0;
          if ("undefined" != typeof CLI_Cookie)
            null !== CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) &&
              (this.settings.consentGiven =
                "yes" ===
                CLI_Cookie.read("cookielawinfo-checkbox-non-necessary"));
          else if (void 0 !== window.cnArgs) {
            var i = ("; " + document.cookie).split("; cookie_notice_accepted=");
            if (2 === i.length) {
              var e = i.pop().split(";").shift();
              this.settings.consentGiven = "true" === e;
            }
          } else
            void 0 !== window.cookieconsent
              ? (this.settings.consentGiven =
                  "allow" ===
                  (function (i) {
                    for (
                      var e = i + "=",
                        s = window.document.cookie.split(";"),
                        t = 0;
                      t < s.length;
                      t++
                    ) {
                      var n = s[t].trim();
                      if (0 == n.indexOf(e))
                        return n.substring(e.length, n.length);
                    }
                    return "";
                  })("complianz_consent_status"))
              : void 0 !== window.Cookiebot
              ? (this.settings.consentGiven = Cookiebot.consented)
              : void 0 !== window.BorlabsCookie &&
                (this.settings.consentGiven =
                  window.BorlabsCookie.checkCookieConsent("instagram"));
          var s = jQuery.Event("sbicheckconsent");
          return (
            (s.feed = this),
            jQuery(window).trigger(s),
            this.settings.consentGiven
          );
        },
        afterConsentToggled: function () {
          if (this.checkConsent()) {
            var i = this;
            i.maybeRaiseImageResolution(),
              setTimeout(function () {
                i.afterResize();
              }, 500);
          }
        },
      }),
      (window.sbi_init = function () {
        (window.sbi = new s()),
          window.sbi.createPage(window.sbi.createFeeds, {
            whenFeedsCreated: window.sbi.afterFeedsCreated,
          });
      });
  })(jQuery),
  jQuery(document).ready(function (i) {
    void 0 === window.sb_instagram_js_options &&
      (window.sb_instagram_js_options = {
        font_method: "svg",
        resized_url:
          location.protocol +
          "//" +
          window.location.hostname +
          "/wp-content/uploads/sb-instagram-feed-images/",
        placeholder:
          location.protocol +
          "//" +
          window.location.hostname +
          "/wp-content/plugins/instagram-feed/img/placeholder.png",
      }),
      void 0 !== window.sb_instagram_js_options.resized_url &&
        -1 ===
          window.sb_instagram_js_options.resized_url.indexOf(
            location.protocol
          ) &&
        ("http:" === location.protocol
          ? (window.sb_instagram_js_options.resized_url =
              window.sb_instagram_js_options.resized_url.replace(
                "https:",
                "http:"
              ))
          : (window.sb_instagram_js_options.resized_url =
              window.sb_instagram_js_options.resized_url.replace(
                "http:",
                "https:"
              ))),
      sbi_init(),
      i("#cookie-notice a").click(function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            window.sbi.feeds[i].afterConsentToggled();
          });
        }, 1e3);
      }),
      i("#cookie-law-info-bar a").click(function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            window.sbi.feeds[i].afterConsentToggled();
          });
        }, 1e3);
      }),
      i(".cli-user-preference-checkbox").click(function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            (window.sbi.feeds[i].settings.consentGiven = !1),
              window.sbi.feeds[i].afterConsentToggled();
          });
        }, 1e3);
      }),
      i(window).on("CookiebotOnAccept", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !0),
            window.sbi.feeds[i].afterConsentToggled();
        });
      }),
      i(document).on("cmplzAcceptAll", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !0),
            window.sbi.feeds[i].afterConsentToggled();
        });
      }),
      i(document).on("cmplzRevoke", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !1),
            window.sbi.feeds[i].afterConsentToggled();
        });
      }),
      i(document).on("borlabs-cookie-consent-saved", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !1),
            window.sbi.feeds[i].afterConsentToggled();
        });
      });
  }));
