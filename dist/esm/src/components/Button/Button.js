import { __rest as e } from "../../../node_modules/tslib/tslib.es6.js";
import t from "react";
import s from "../../assets/loader-white.gif.js";
import n from "../../../node_modules/classnames/index.js";
import "./Button.scss.js";
const i = (s) => {
    const i = () =>
        n({
          "n-button-rounded": s.rounded,
          "n-button-primary": "primary" === s.theme,
          "n-button-primary-positive":
            "primary" === s.theme && "positive" === s.state,
          "n-button-primary-destructive":
            "primary" === s.theme && "destructive" === s.state,
          "n-button-secondary": "secondary" === s.theme,
          "n-button-secondary-positive":
            "secondary" === s.theme && "positive" === s.state,
          "n-button-secondary-destructive":
            "secondary" === s.theme && "destructive" === s.state,
          "n-button-tertiary": "tertiary" === s.theme,
          "n-button-tertiary-positive":
            "tertiary" === s.theme && "positive" === s.state,
          "n-button-tertiary-destructive":
            "tertiary" === s.theme && "destructive" === s.state,
          "n-button-large": "large" === s.size,
          "n-button-large_only_icon": !s.children,
          "n-button-mid": "medium" === s.size,
          "n-button-mid_only_icon": !s.children,
          "n-button-small": "small" === s.size,
          "n-button-small_only_icon": !s.children,
          "n-button-focused": s.focused,
          "n-button-disable": s.showProgress,
          "n-button-full-width": s.fullWidth,
        }),
      r = () => {
        if (s.href) {
          const t = e(s, [
            "rounded",
            "theme",
            "as",
            "size",
            "focused",
            "showProgress",
            "fullWidth",
            "onClick",
            "className",
            "children",
            "icon",
            "iconRight",
          ]);
          return Object.assign({}, t);
        }
        {
          const t = e(s, [
            "rounded",
            "theme",
            "as",
            "size",
            "href",
            "focused",
            "showProgress",
            "fullWidth",
            "className",
            "children",
            "icon",
            "iconRight",
          ]);
          return Object.assign({}, t);
        }
      };
    return s.href
      ? t.createElement(
          "a",
          Object.assign(
            {
              href: s.href,
              className: `n-button ripple ripple-anchor ${i()} ${
                s.className && s.className
              }`,
            },
            r()
          ),
          t.createElement(a, Object.assign({}, s))
        )
      : "div" == s.as
      ? t.createElement(
          "div",
          Object.assign(
            {
              className: `n-button ripple ${i()} ${s.className && s.className}`,
            },
            r()
          ),
          t.createElement(a, Object.assign({}, s))
        )
      : "span" == s.as
      ? t.createElement(
          "span",
          Object.assign(
            {
              className: `n-button ripple ${i()} ${s.className && s.className}`,
            },
            r()
          ),
          t.createElement(a, Object.assign({}, s))
        )
      : t.createElement(
          "button",
          Object.assign(
            {
              className: `n-button ripple ${i()} ${s.className && s.className}`,
            },
            r()
          ),
          t.createElement(a, Object.assign({}, s))
        );
  },
  a = (e) => {
    const i = e.icon,
      a = e.iconRight;
    return t.createElement(
      "div",
      { className: "n-button-content" },
      e.icon &&
        (e.children || !e.showProgress) &&
        t.createElement(
          "div",
          { className: "n-btn-social-icon" },
          t.createElement(i, {
            className: n({
              "n-icon-small": "small" === e.size,
              "n-icon": "medium" === e.size,
              "n-icon-large": "large" === e.size,
              "icon-padding-right": e.children,
            }),
          })
        ),
      e.children,
      e.showProgress &&
        t.createElement(
          "div",
          { className: "n-btn-spin" },
          t.createElement("img", {
            className: "n-btn-spinner",
            style: { width: "50px" },
            src: s,
          })
        ),
      !e.showProgress &&
        e.children &&
        e.iconRight &&
        t.createElement(
          "div",
          { className: "social-icon-right" },
          t.createElement(a, {
            className: n({
              "n-icon-small": "small" === e.size,
              "n-icon": "medium" === e.size,
              "n-icon-large": "large" === e.size,
              "icon-padding-left": e.children,
            }),
          })
        )
    );
  };
i.defaultProps = {
  href: null,
  disabled: !1,
  rounded: !0,
  theme: "primary",
  as: null,
  size: "medium",
  focused: !1,
  showProgress: !1,
  fullWidth: !1,
  children: null,
  onClick: null,
  className: null,
  id: null,
  icon: null,
  name: null,
};
var r = t.memo(i);
export { r as default };
//# sourceMappingURL=Button.js.map
