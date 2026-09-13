/* @ds-bundle: {"format":4,"namespace":"JeepUAEDesignSystem_9a8023","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"CategoryHeading","sourcePath":"components/data-display/CategoryHeading.jsx"},{"name":"FeatureItem","sourcePath":"components/data-display/FeatureItem.jsx"},{"name":"ModelCard","sourcePath":"components/data-display/ModelCard.jsx"},{"name":"SectionTitle","sourcePath":"components/data-display/SectionTitle.jsx"},{"name":"StepTile","sourcePath":"components/data-display/StepTile.jsx"},{"name":"UsedCarCard","sourcePath":"components/data-display/UsedCarCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"CarouselIndicators","sourcePath":"components/navigation/CarouselIndicators.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"InPageMenu","sourcePath":"components/navigation/InPageMenu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e972fc1ba7c5","components/core/Button.jsx":"2ad21114d44c","components/core/Icon.jsx":"a447de9eff66","components/data-display/CategoryHeading.jsx":"c12010e60d20","components/data-display/FeatureItem.jsx":"811e8df31761","components/data-display/ModelCard.jsx":"d282a281e302","components/data-display/SectionTitle.jsx":"bc949594d0ce","components/data-display/StepTile.jsx":"647340a7ed70","components/data-display/UsedCarCard.jsx":"1ae72a965de3","components/forms/Input.jsx":"a25c224b1c42","components/forms/Label.jsx":"3b7b122b454d","components/forms/Select.jsx":"b58aa7cc90de","components/navigation/CarouselIndicators.jsx":"04ddfc2b39c2","components/navigation/Footer.jsx":"9c5c093666a4","components/navigation/Header.jsx":"5923a27b5bef","components/navigation/InPageMenu.jsx":"077b251b474d","components/navigation/Tabs.jsx":"797dd0d25c65","ui_kits/jeep-uae-website/App.jsx":"61b93f8e29cb","ui_kits/jeep-uae-website/Finance.jsx":"bcef144a0c57","ui_kits/jeep-uae-website/HomeScreen.jsx":"20c743503c05","ui_kits/jeep-uae-website/MyJeep.jsx":"56f0a8b113b3","ui_kits/jeep-uae-website/PreOwned.jsx":"e0f31e9f9a08","ui_kits/jeep-uae-website/PreOwnedScreen.jsx":"c191f3ea494b","ui_kits/jeep-uae-website/data.js":"f4622cf2723e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JeepUAEDesignSystem_9a8023 = window.JeepUAEDesignSystem_9a8023 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  brand: {
    backgroundColor: "var(--surface-brand)",
    color: "var(--text-on-brand)"
  },
  dark: {
    backgroundColor: "var(--surface-inverse)",
    color: "var(--text-inverse)"
  },
  light: {
    backgroundColor: "var(--surface-card)",
    color: "var(--text-body)",
    boxShadow: "var(--shadow-pill)"
  }
};
function Badge({
  children,
  tone = "brand",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: "var(--font-size-xsmall)",
      fontWeight: 700,
      lineHeight: 1,
      textTransform: "uppercase",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      display: "inline-block",
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-brand)",
  fontWeight: 700,
  textTransform: "uppercase",
  border: 0,
  borderRadius: "var(--radius-none)",
  cursor: "pointer",
  transition: "var(--transition-cta)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  lineHeight: "23px"
};
const sizes = {
  sm: {
    fontSize: "0.875rem",
    padding: "5px 16px",
    minHeight: "var(--control-height-sm)"
  },
  md: {
    fontSize: "1rem",
    padding: "7px 16px 8px",
    minHeight: "var(--control-height)"
  },
  lg: {
    fontSize: "1.213rem",
    padding: "0.375rem 1.3rem",
    minHeight: "48px",
    lineHeight: "35px"
  }
};
const variants = {
  primary: {
    backgroundColor: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)"
  },
  secondary: {
    backgroundColor: "var(--action-secondary-bg)",
    color: "var(--action-secondary-fg)"
  },
  tertiary: {
    backgroundColor: "var(--action-tertiary-bg)",
    color: "var(--action-tertiary-fg)"
  },
  pill: {
    backgroundColor: "var(--action-tertiary-bg)",
    color: "var(--action-tertiary-fg)",
    borderRadius: "var(--radius-pill)",
    boxShadow: "var(--shadow-pill)",
    textTransform: "none"
  },
  link: {
    backgroundColor: "transparent",
    color: "var(--text-body)",
    padding: 0,
    minHeight: "auto",
    textTransform: "none"
  }
};
const hovers = {
  primary: {
    backgroundColor: "var(--action-primary-bg-hover)",
    color: "var(--action-primary-fg-hover)"
  },
  secondary: {
    backgroundColor: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)"
  },
  tertiary: {
    backgroundColor: "var(--brand-black)",
    color: "var(--brand-white)"
  },
  pill: {
    backgroundColor: "var(--surface-subtle)"
  },
  link: {
    color: "var(--brand-yellow)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconBefore,
  iconAfter,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href && !disabled ? "a" : "button";
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(disabled ? {
      backgroundColor: variant === "link" ? "transparent" : "var(--action-disabled-bg)",
      opacity: "var(--action-disabled-opacity)",
      cursor: "not-allowed"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...style
  };
  const iconStyle = {
    width: "var(--icon-size)",
    height: "var(--icon-size)",
    position: "relative",
    top: "1px"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconBefore ? /*#__PURE__*/React.createElement("img", {
    src: iconBefore,
    alt: "",
    style: iconStyle
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconAfter ? /*#__PURE__*/React.createElement("img", {
    src: iconAfter,
    alt: "",
    style: iconStyle
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  default: "none",
  brand: "var(--icon-filter-brand)",
  white: "var(--icon-filter-white)",
  invert: "var(--icon-filter-black)"
};
function Icon({
  src,
  alt = "",
  size = 24,
  tone = "default",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      objectFit: "contain",
      filter: tones[tone],
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data-display/CategoryHeading.jsx
try { (() => {
function CategoryHeading({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      borderBottom: "1px solid #e1dfdd",
      width: "80%",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.56,
      marginTop: "-14px",
      marginBottom: "46px",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 27px",
      background: "var(--surface-page)"
    }
  }, children)));
}
Object.assign(__ds_scope, { CategoryHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/CategoryHeading.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FeatureItem.jsx
try { (() => {
function FeatureItem({
  icon,
  title,
  children,
  layout = "stacked",
  iconTone = "default",
  style
}) {
  const inline = layout === "inline";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      display: inline ? "flex" : "block",
      alignItems: inline ? "flex-start" : undefined,
      gap: inline ? "9px" : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: inline ? 0 : "8px",
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: "var(--icon-size)",
      height: "var(--icon-size)",
      verticalAlign: "text-bottom",
      filter: iconTone === "brand" ? "var(--icon-filter-brand)" : "none"
    }
  }) : null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.313rem",
      fontWeight: 700,
      lineHeight: 1.52,
      color: "var(--text-primary)",
      textTransform: "capitalize"
    }
  }, title) : null), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.38,
      color: "var(--text-body)",
      margin: 0
    }
  }, children) : null);
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ModelCard.jsx
try { (() => {
function ModelCard({
  name,
  priceFrom,
  monthlyFrom,
  image,
  infoIcon,
  currency = "AED",
  viewHref,
  configureHref,
  onView,
  onConfigure,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      textAlign: "left",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand-medium)",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.56,
      margin: "0 0 8px"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#53565a",
      marginBottom: "15px",
      fontSize: "1rem",
      lineHeight: 1.38
    }
  }, /*#__PURE__*/React.createElement("div", null, "From ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, currency, " ", priceFrom)), /*#__PURE__*/React.createElement("div", null, "Monthly from ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, currency, " ", monthlyFrom), infoIcon ? /*#__PURE__*/React.createElement("img", {
    src: infoIcon,
    alt: "",
    style: {
      width: "14px",
      height: "14px",
      marginLeft: "4px",
      position: "relative",
      top: "-0.1em"
    }
  }) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      maxHeight: "200px",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "auto",
      paddingTop: "20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    href: viewHref,
    onClick: onView
  }, "View model"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: configureHref,
    onClick: onConfigure
  }, "Configure & buy")));
}
Object.assign(__ds_scope, { ModelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ModelCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SectionTitle.jsx
try { (() => {
function SectionTitle({
  children,
  align = "center",
  underline = false,
  tone = "dark",
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: "var(--font-size-section-title)",
      fontWeight: 700,
      lineHeight: 1.41,
      textAlign: align,
      textTransform: "uppercase",
      color: tone === "light" ? "var(--text-inverse)" : "var(--text-body)",
      margin: 0,
      paddingBottom: underline ? "18px" : 0,
      position: "relative",
      ...style
    }
  }, children, underline ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: align === "center" ? "50%" : 0,
      transform: align === "center" ? "translateX(-50%)" : "none",
      bottom: 0,
      width: "3.2em",
      borderBottom: "3px solid var(--border-accent-underline)",
      display: "block"
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StepTile.jsx
try { (() => {
const stepColors = ["var(--step-1)", "var(--step-2)", "var(--step-3)"];
function StepTile({
  index = 1,
  children,
  style
}) {
  const bg = stepColors[(index - 1) % 3];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      background: bg,
      color: index === 1 ? "var(--text-on-brand)" : "var(--text-inverse)",
      padding: "24px 20px",
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "2.313rem",
      fontWeight: 700
    }
  }, index), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--font-size-xsmall)",
      textTransform: "uppercase"
    }
  }, "Step")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "1rem",
      lineHeight: 1.38
    }
  }, children));
}
Object.assign(__ds_scope, { StepTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StepTile.jsx", error: String((e && e.message) || e) }); }

// components/data-display/UsedCarCard.jsx
try { (() => {
function UsedCarCard({
  title,
  price,
  monthly,
  image,
  meta = [],
  currency = "AED",
  badge,
  href,
  onView,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      position: "relative",
      padding: "0 15px",
      ...style
    }
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "5px",
      right: "20px",
      zIndex: 1
    }
  }, badge) : null, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 0 2px",
      fontSize: "1.125rem",
      lineHeight: 1.625,
      color: "var(--text-body)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 2,
      color: "var(--text-body)",
      margin: 0
    }
  }, currency, " ", price), monthly ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--font-size-xsmall)",
      lineHeight: 1.67
    }
  }, "From ", currency, " ", monthly) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "10px",
      padding: 0,
      margin: "10px 0 14px",
      listStyle: "none"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      flex: i === meta.length - 1 ? "1 1" : undefined
    }
  }, m.icon ? /*#__PURE__*/React.createElement("img", {
    src: m.icon,
    alt: "",
    style: {
      width: "13px",
      height: "13px",
      marginRight: "7px"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-meta)",
      color: "var(--text-body)"
    }
  }, m.label)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: href,
    onClick: onView,
    style: {
      padding: "10px 17px"
    }
  }, "View details"));
}
Object.assign(__ds_scope, { UsedCarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/UsedCarCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  bordered = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      width: "100%",
      height: "var(--control-height-field)",
      fontFamily: "var(--font-brand)",
      fontSize: "1rem",
      fontWeight: 400,
      color: "var(--text-body)",
      padding: "0 10px",
      borderRadius: "var(--radius-input)",
      backgroundColor: "var(--surface-card)",
      border: bordered ? "2px solid var(--border-input)" : "none",
      outline: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function Label({
  children,
  htmlFor,
  required = false,
  tone = "dark",
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 1.38,
      textTransform: "capitalize",
      color: tone === "light" ? "var(--text-inverse)" : "var(--text-body)",
      display: "block",
      marginBottom: "6px",
      ...style
    }
  }, children, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)",
      marginLeft: "3px"
    }
  }, "*") : null);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  children,
  bordered = false,
  placeholder,
  value,
  style,
  ...rest
}) {
  const isPlaceholder = value === "" || value === undefined;
  return /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    style: {
      width: "100%",
      height: "var(--control-height-field)",
      fontFamily: "var(--font-brand)",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: isPlaceholder ? "var(--text-placeholder)" : "var(--text-body)",
      padding: "0 10px",
      backgroundColor: "var(--surface-card)",
      border: bordered ? "2px solid var(--border-input)" : "none",
      borderRadius: "var(--radius-dropdown)",
      outline: "none",
      cursor: "pointer",
      appearance: "none",
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CarouselIndicators.jsx
try { (() => {
function CarouselIndicators({
  count = 3,
  active = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      width: "100%",
      ...style
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => onSelect && onSelect(i),
    style: {
      height: "3px",
      flex: "0 1 352px",
      backgroundColor: i === active ? "var(--brand-yellow)" : "rgba(255,255,255,.4)",
      boxShadow: i === active ? "1px 1px 2px rgba(255,186,0,.9)" : "none",
      cursor: "pointer",
      display: "block"
    }
  })));
}
Object.assign(__ds_scope, { CarouselIndicators });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CarouselIndicators.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  social = [],
  logos = [],
  legal = [],
  copyright,
  onBackToTop,
  backToTopIcon,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      width: "100%",
      backgroundColor: "var(--surface-footer)",
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--footer-padding)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      cursor: "pointer"
    },
    onClick: onBackToTop
  }, backToTopIcon ? /*#__PURE__*/React.createElement("img", {
    src: backToTopIcon,
    alt: "",
    style: {
      width: "29px",
      height: "29px"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "var(--text-inverse)"
    }
  }, "Back to top")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "15px"
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.href,
    href: s.href
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: "",
    width: "27",
    height: "27"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`,
      gap: "30px",
      borderTop: "1px solid var(--border-footer)",
      padding: "30px 0"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "var(--text-inverse)",
      textTransform: "uppercase",
      marginBottom: "16px"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--font-size-xsmall)",
      lineHeight: 1.67,
      color: "var(--text-footer-link)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "50px 0 0",
      flexWrap: "wrap",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "29px"
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("img", {
    key: l,
    src: l,
    alt: "",
    style: {
      maxHeight: "33px",
      objectFit: "contain"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      flexWrap: "wrap",
      fontSize: "var(--font-size-xsmall)",
      lineHeight: 1.67,
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-footer-link)",
      textDecoration: "none"
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  logo,
  items = [],
  activeItem,
  onSelect,
  actions = [],
  languageLabel = "عربي",
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      backgroundColor: "var(--surface-header)",
      padding: "0 var(--page-gutter-right) 0 var(--page-gutter)",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      minHeight: "72px",
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Jeep",
    style: {
      height: "var(--header-logo-height)",
      width: "auto"
    }
  }) : null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "28px",
      flex: 1
    }
  }, items.map(item => {
    const active = item === activeItem;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onSelect && onSelect(item),
      style: {
        background: "none",
        border: 0,
        padding: "24px 0",
        fontFamily: "var(--font-brand)",
        fontSize: "1rem",
        fontWeight: 700,
        color: "var(--text-inverse)",
        textTransform: "uppercase",
        cursor: "pointer",
        borderBottom: active ? "2px solid var(--border-brand)" : "2px solid transparent"
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-inverse)",
      opacity: 0.5,
      fontSize: "1rem",
      fontWeight: 700
    }
  }, languageLabel), actions.map(a => /*#__PURE__*/React.createElement("img", {
    key: a.icon,
    src: a.icon,
    alt: a.label || "",
    title: a.label,
    style: {
      width: "25px",
      height: "25px",
      filter: "var(--icon-filter-white)",
      cursor: "pointer"
    }
  }))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/InPageMenu.jsx
try { (() => {
function InPageMenu({
  label = "JEEP",
  items = [],
  activeItem,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      backgroundColor: "var(--surface-inpage-menu)",
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.313rem",
      fontWeight: 700,
      lineHeight: 1.52,
      color: "var(--text-inverse)",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: "var(--brand-white)",
      width: "1px",
      height: "25px",
      opacity: 0.5,
      marginLeft: "56px"
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "30px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map(item => {
    const active = item === activeItem;
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onSelect && onSelect(item),
      style: {
        background: "none",
        border: 0,
        borderBottom: active ? "2px solid var(--border-brand)" : "2px solid transparent",
        padding: "8px",
        minHeight: "55px",
        fontFamily: "var(--font-brand)",
        fontSize: "1rem",
        fontWeight: 700,
        color: "var(--text-inverse)",
        textTransform: "uppercase",
        cursor: "pointer"
      }
    }, item));
  }))));
}
Object.assign(__ds_scope, { InPageMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/InPageMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  activeItem,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, items.map((item, i) => {
    const active = item === activeItem;
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      onClick: () => onSelect && onSelect(item),
      style: {
        flex: 1,
        borderRight: i === items.length - 1 ? "none" : "1px solid var(--border-divider)",
        borderBottom: active ? "2px solid var(--border-brand)" : "2px solid transparent",
        fontSize: "1.125rem",
        fontWeight: 700,
        lineHeight: 1.78,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px 0 17px",
        cursor: "pointer",
        color: active ? "var(--text-body)" : "var(--text-primary)",
        textTransform: "uppercase"
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/App.jsx
try { (() => {
const {
  Header,
  Footer
} = window.JeepUAEDesignSystem_9a8023;
const AD = window.JeepData;
const AA = AD.A;
function App() {
  const [screen, setScreen] = React.useState("home");
  const go = s => {
    setScreen(s);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    logo: AA + "logo-jeep-white.png",
    items: AD.nav,
    activeItem: screen === "preowned" ? "Pre-owned" : "Buy",
    onSelect: item => go(item === "Pre-owned" ? "preowned" : "home"),
    actions: [{
      icon: AA + "icons/icon-person-line.svg",
      label: "Account"
    }, {
      icon: AA + "icons/icon-shopping-bag-line.svg",
      label: "Cart"
    }, {
      icon: AA + "icons/icon-phone-line.svg",
      label: "Call"
    }, {
      icon: AA + "icons/icon-menu-2.svg",
      label: "Menu"
    }]
  }), screen === "home" ? /*#__PURE__*/React.createElement(window.HomeScreen, {
    onNavigate: go
  }) : /*#__PURE__*/React.createElement(window.PreOwnedScreen, null), /*#__PURE__*/React.createElement("img", {
    src: AA + "icons/WhatsApp.png",
    alt: "Chat on WhatsApp",
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      width: 56,
      height: 56,
      cursor: "pointer",
      zIndex: 20
    }
  }), /*#__PURE__*/React.createElement(Footer, {
    columns: AD.footerColumns,
    social: [{
      icon: AA + "icons/icon-brand-facebook.svg",
      href: "https://facebook.com/JeepTradingEnterprises"
    }, {
      icon: AA + "icons/icon-brand-instagram.svg",
      href: "https://www.instagram.com/jeepuaete/"
    }],
    logos: [AA + "logo-jeep-white.png", AA + "logo-alfuttaim-te.png"],
    legal: AD.legal,
    copyright: AD.copyright,
    backToTopIcon: AA + "icons/icon-arrow-upward.svg",
    onBackToTop: () => window.scrollTo(0, 0)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/Finance.jsx
try { (() => {
const {
  Button,
  FeatureItem,
  StepTile,
  SectionTitle
} = window.JeepUAEDesignSystem_9a8023;
const FD = window.JeepData;
const FA = FD.A;
function JeepFinance() {
  const Container = window.Container;
  return /*#__PURE__*/React.createElement("div", {
    id: "finance",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: 64
    }
  }, "WAYS TO OWN YOUR NEW CAR"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 30,
      marginBottom: 54
    }
  }, FD.finance.map(o => /*#__PURE__*/React.createElement(FeatureItem, {
    key: o.title,
    icon: FA + o.icon,
    title: o.title
  }, o.desc))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 50
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconAfter: FA + "icons/arrow-circle-right-solid.svg"
  }, "COMPARE FINANCE TYPES"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-subtle)",
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: 40,
      fontSize: "1.625rem"
    }
  }, "CHECK YOUR LOAN ELIGIBILITY IN 30 SECONDS TO CHECK WHICH CAR FROM OUR RANGE BEST SUITES YOUR FINANCES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)"
    }
  }, FD.steps.map((s, i) => /*#__PURE__*/React.createElement(StepTile, {
    key: i,
    index: i + 1
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 49
    }
  }, /*#__PURE__*/React.createElement(Button, null, "MODEL ELIGIBILITY")))), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "60px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "444px 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: FA + "images/trade-in.jpg",
    alt: "TRADE IN OR SELL YOUR JEEP",
    width: "444",
    height: "247",
    style: {
      width: "100%",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "left",
    underline: true,
    style: {
      marginBottom: 24
    }
  }, "TRADE IN OR SELL YOUR JEEP"), /*#__PURE__*/React.createElement(Button, null, "VALUE MY TRADE-IN")))));
}
Object.assign(window, {
  JeepFinance
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/Finance.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/HomeScreen.jsx
try { (() => {
const {
  Header,
  InPageMenu,
  Tabs,
  CarouselIndicators,
  Footer,
  Button,
  Badge,
  Icon,
  ModelCard,
  UsedCarCard,
  FeatureItem,
  StepTile,
  SectionTitle,
  CategoryHeading,
  Input,
  Select,
  Label
} = window.JeepUAEDesignSystem_9a8023;
const D = window.JeepData;
const A = D.A;
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: "0 auto",
      padding: "0 20px",
      ...style
    }
  }, children);
}
function Hero() {
  const [i, setI] = React.useState(0);
  const slide = D.heroSlides[i];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + slide.image,
    alt: "Hero",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 18,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(CarouselIndicators, {
    count: D.heroSlides.length,
    active: i,
    onSelect: setI
  }))), /*#__PURE__*/React.createElement(Tabs, {
    items: D.heroSlides.map(s => s.tab),
    activeItem: slide.tab,
    onSelect: t => setI(D.heroSlides.findIndex(s => s.tab === t))
  }));
}
function ModelGrid() {
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 50
    }
  }, /*#__PURE__*/React.createElement(CategoryHeading, null, "SUV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 30
    }
  }, D.models.map(m => /*#__PURE__*/React.createElement(ModelCard, {
    key: m.name,
    name: m.name,
    priceFrom: m.priceFrom,
    monthlyFrom: m.monthlyFrom,
    image: A + m.image,
    infoIcon: A + "icons/icon-info-line.svg"
  }))));
}
function WhyJeep() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "50px 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 33,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "images/why-jeep.jpg",
    alt: "WHY CHOOSE A JEEP?",
    style: {
      width: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "left",
    underline: true,
    style: {
      marginBottom: 40
    }
  }, "WHY CHOOSE A JEEP?"), D.whyJeep.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + r.icon,
    alt: "",
    style: {
      width: 21,
      height: 29
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.313rem",
      fontWeight: 700,
      lineHeight: 1.52,
      color: "var(--text-primary)"
    }
  }, r.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.125rem",
      lineHeight: 1.44,
      color: "var(--text-primary)",
      margin: "6px 0 0 42px"
    }
  }, r.desc)))))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(InPageMenu, {
    items: ["NEW PASSENGER CARS", "FINANCE OPTIONS", "CERTIFIED PRE-OWNED CARS"],
    activeItem: "NEW PASSENGER CARS",
    onSelect: () => {}
  }), /*#__PURE__*/React.createElement(ModelGrid, null), /*#__PURE__*/React.createElement(window.JeepFinance, null), /*#__PURE__*/React.createElement(window.JeepPreOwned, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(window.JeepMyJeep, null), /*#__PURE__*/React.createElement(WhyJeep, null));
}
Object.assign(window, {
  HomeScreen,
  Container,
  Hero,
  ModelGrid,
  WhyJeep
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/MyJeep.jsx
try { (() => {
const {
  Button,
  SectionTitle,
  Icon
} = window.JeepUAEDesignSystem_9a8023;
const MD = window.JeepData;
const MA = MD.A;
function JeepMyJeep() {
  const Container = window.Container;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "60px 0 58px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      paddingBottom: 50
    }
  }, "MY JEEP"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 0,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 25px 0 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 700,
      lineHeight: 1.67,
      marginBottom: 8
    }
  }, "4 Saved cars in progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, MD.savedCars.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name
  }, /*#__PURE__*/React.createElement("img", {
    src: MA + c.image,
    alt: c.name,
    style: {
      width: "100%",
      height: 100,
      objectFit: "contain",
      margin: "10px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.063rem",
      fontWeight: 700,
      lineHeight: 1.52
    }
  }, c.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--border-default)",
      padding: "23px 0 0 27px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      marginBottom: 30,
      padding: "10px 20px"
    }
  }, "LOGIN TO MY JEEP"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1rem",
      lineHeight: 1.38,
      marginBottom: 6
    }
  }, "DON\u2019T HAVE AN ACCOUNT YET?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8rem",
      lineHeight: "18px"
    }
  }, "Register for an Al-Futtaim Jeep Account"), /*#__PURE__*/React.createElement("img", {
    src: MA + "icons/icon-arrow-circle-right-line.svg",
    alt: "",
    style: {
      height: 16,
      width: 16,
      marginLeft: 7
    }
  }))))));
}
Object.assign(window, {
  JeepMyJeep
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/MyJeep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/PreOwned.jsx
try { (() => {
const {
  Button,
  FeatureItem,
  SectionTitle,
  UsedCarCard,
  Label,
  Select,
  Icon
} = window.JeepUAEDesignSystem_9a8023;
const PD = window.JeepData;
const PA = PD.A;
function CpoCarousel({
  cars,
  columns = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: 10
    }
  }, cars.map((c, i) => /*#__PURE__*/React.createElement(UsedCarCard, {
    key: i,
    title: c.title,
    price: c.price,
    monthly: c.monthly,
    image: PA + c.image,
    meta: [{
      icon: PA + "icons/icon-dash.svg",
      label: c.km
    }, {
      icon: PA + "icons/icon-clipboard-line.svg",
      label: c.year
    }, {
      icon: PA + "icons/icon-pin-line.svg",
      label: c.branch
    }]
  })));
}
function SearchPanel({
  onSubmit
}) {
  const Container = window.Container;
  const [model, setModel] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-subtle)",
      padding: "60px 0 70px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: 51,
      fontSize: "1.625rem"
    }
  }, "SEARCH FOR YOUR CERTIFIED PRE-OWNED CAR"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cpo-model",
    required: true
  }, "Model Name"), /*#__PURE__*/React.createElement(Select, {
    id: "cpo-model",
    placeholder: "Select Model",
    value: model,
    onChange: e => setModel(e.target.value)
  }, PD.searchModels.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.name,
    value: m.name
  }, m.name, " (", m.count, ")")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cpo-from"
  }, "Price from"), /*#__PURE__*/React.createElement(Select, {
    id: "cpo-from",
    placeholder: "Select",
    value: from,
    onChange: e => setFrom(e.target.value)
  }, PD.prices.map(p => /*#__PURE__*/React.createElement("option", {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cpo-to"
  }, "Price to"), /*#__PURE__*/React.createElement(Select, {
    id: "cpo-to",
    placeholder: "Select",
    value: to,
    onChange: e => setTo(e.target.value)
  }, PD.prices.map(p => /*#__PURE__*/React.createElement("option", {
    key: p
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 49
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onSubmit && onSubmit({
      model,
      from,
      to
    }),
    style: {
      padding: "10px 23.5px 12px",
      textTransform: "capitalize"
    }
  }, "Show matches"))));
}
function JeepPreOwned({
  onNavigate
}) {
  const Container = window.Container;
  return /*#__PURE__*/React.createElement("div", {
    id: "preowned"
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "50px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: 40
    }
  }, "FIND QUALITY CERTIFIED PRE-OWNED CARS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 15,
      marginBottom: 66
    }
  }, PD.cpoPromises.map(p => /*#__PURE__*/React.createElement(FeatureItem, {
    key: p.title,
    layout: "inline",
    icon: PA + p.icon,
    title: p.title
  }))), /*#__PURE__*/React.createElement(CpoCarousel, {
    cars: PD.usedCars.slice(0, 4)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      margin: "30px 0 60px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "pill",
    onClick: () => onNavigate && onNavigate("preowned")
  }, "See all stock"))), /*#__PURE__*/React.createElement(SearchPanel, {
    onSubmit: () => onNavigate && onNavigate("preowned")
  }));
}
Object.assign(window, {
  JeepPreOwned,
  CpoCarousel,
  SearchPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/PreOwned.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/PreOwnedScreen.jsx
try { (() => {
const {
  Button,
  SectionTitle,
  FeatureItem,
  Badge
} = window.JeepUAEDesignSystem_9a8023;
const RD = window.JeepData;
const RA = RD.A;
function PreOwnedScreen() {
  const Container = window.Container;
  const SearchPanel = window.SearchPanel;
  const [cars, setCars] = React.useState(RD.usedCars);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchPanel, {
    onSubmit: ({
      model
    }) => setCars(model ? RD.usedCars.filter(c => c.title.toUpperCase().includes(model.toUpperCase().split(" ")[0])) : RD.usedCars)
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "50px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 15,
      marginBottom: 50
    }
  }, RD.cpoPromises.map(p => /*#__PURE__*/React.createElement(FeatureItem, {
    key: p.title,
    layout: "inline",
    icon: RA + p.icon,
    title: p.title
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "left",
    style: {
      fontSize: "1.625rem"
    }
  }, cars.length, " CERTIFIED PRE-OWNED CARS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)"
    }
  }, "Sorted by price, low to high")), /*#__PURE__*/React.createElement(window.CpoCarousel, {
    cars: cars,
    columns: 3
  })));
}
Object.assign(window, {
  PreOwnedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/PreOwnedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jeep-uae-website/data.js
try { (() => {
window.JeepData = {
  A: "../../assets/",
  nav: ["Buy", "Models", "Pre-owned", "Offers", "Business solutions", "Owners"],
  heroSlides: [{
    image: "images/hero-1.jpg",
    href: "/en/offers/new-model/commander",
    tab: "COMMANDER 2026"
  }, {
    image: "images/hero-2.jpg",
    href: "/en/offers/new-model/wrangler",
    tab: "WRANGLER"
  }, {
    image: "images/hero-3.jpg",
    href: "/en/offers/new-model/grand-cherokee",
    tab: "GRAND CHEROKEE"
  }],
  models: [{
    name: "GRAND CHEROKEE L 2025",
    priceFrom: "179,999",
    monthlyFrom: "2,820",
    image: "images/model-grand-cherokee-l.png"
  }, {
    name: "GRAND CHEROKEE 2025",
    priceFrom: "234,900",
    monthlyFrom: "3,680",
    image: "images/model-grand-cherokee.png"
  }, {
    name: "WRANGLER 2 DOOR 2026",
    priceFrom: "195,900",
    monthlyFrom: "3,069",
    image: "images/model-wrangler-2-door.png"
  }, {
    name: "WRANGLER 4 DOOR 2026",
    priceFrom: "210,900",
    monthlyFrom: "3,304",
    image: "images/model-wrangler-4-door.png"
  }, {
    name: "COMMANDER 2026",
    priceFrom: "149,900",
    monthlyFrom: "2,348",
    image: "images/model-commander.png"
  }],
  finance: [{
    icon: "icons/redo-alt-solid.svg",
    title: "FLEXI LEASE",
    desc: "Leasing is a hassle-free program offering customers the option to drive their desired vehicle and pay for the usage of it. It is an all-inclusive offering and will allow customers to keep driving new models based on their affordability."
  }, {
    icon: "icons/chart-pie-solid.svg",
    title: "HIRE PURCHASE",
    desc: "A conventional / Islamic finance method where customers buy their desired vehicle on loan and repay the total price with applicable interest and fees by equated monthly instalments"
  }, {
    icon: "icons/credit-card-solid.svg",
    title: "UP TO 4% CASHBACK",
    desc: "Blue FAB Credit Card - the card that gives you more! Earn up to AED 4,000 cashback in the form of Al-Futtaim FAB rewards on all your spends, plus more benefits."
  }],
  steps: ["Complete the short form including personal details, employment and finances", "Explore models matching your eligibility", "Speedy finance checkout with your pre-approval"],
  cpoPromises: [{
    icon: "icons/icon-shield-fill.svg",
    title: "Warranty – minimum 12 months/20,000 kms"
  }, {
    icon: "icons/icon-checkmark-square-2-fill.svg",
    title: "125 point check"
  }, {
    icon: "icons/icon-award-fill.svg",
    title: "Kilometers guaranteed"
  }, {
    icon: "icons/icon-book-fill.svg",
    title: "Full service history"
  }],
  usedCars: [{
    title: "2024 Grand Cherokee L 3.6L",
    price: "135,900",
    monthly: "2,174",
    km: "8,862 km",
    year: "2024",
    branch: "CJDR AV- Chrysler Used Ecomm",
    image: "images/used-grand-cherokee-l-2024.jpg"
  }, {
    title: "2023 Wrangler 2 Door 3.6L",
    price: "139,900",
    monthly: "2,238",
    km: "76,531 km",
    year: "2023",
    branch: "CJDR AV- Chrysler Used Ecomm",
    image: "images/used-wrangler-2-door-2023.jpg"
  }, {
    title: "2025 Grand Cherokee L 7",
    price: "139,900",
    monthly: "2,238",
    km: "45,877 km",
    year: "2025",
    branch: "Abu Dhabi Mina Zayed",
    image: "images/used-grand-cherokee-l-2025.jpg"
  }, {
    title: "2025 Grand Cherokee L 3.6L",
    price: "139,900",
    monthly: "2,238",
    km: "93 km",
    year: "2025",
    branch: "Ras Al Khaimah",
    image: "images/used-grand-cherokee-l-2025b.jpg"
  }, {
    title: "2023 GRAND CHEROKEE 3.6L",
    price: "142,900",
    monthly: "2,286",
    km: "64,220 km",
    year: "2023",
    branch: "Sharjah",
    image: "images/used-grand-cherokee-2023.jpg"
  }, {
    title: "2023 Grand Cherokee L 3.6L",
    price: "144,900",
    monthly: "2,318",
    km: "37,517 km",
    year: "2023",
    branch: "CJDR AV- Chrysler Used Ecomm",
    image: "images/used-grand-cherokee-l-2024.jpg"
  }],
  searchModels: [{
    name: "GRAND CHEROKEE",
    count: 15
  }, {
    name: "Grand Cherokee L",
    count: 28
  }, {
    name: "Grand Wagoneer",
    count: 1
  }, {
    name: "Wrangler 2 Door",
    count: 7
  }, {
    name: "Wrangler 4 Door",
    count: 47
  }],
  prices: ["10,000", "20,000", "30,000", "40,000", "50,000", "60,000", "70,000", "80,000", "90,000", "100,000", "110,000", "120,000", "130,000", "140,000", "150,000", "160,000", "170,000", "180,000", "190,000", "200,000", "300,000", "400,000", "500,000", "600,000", "700,000"],
  savedCars: [{
    name: "GRAND CHEROKEE L 2024",
    image: "images/model-grand-cherokee-l.png"
  }, {
    name: "GRAND CHEROKEE 2025",
    image: "images/model-grand-cherokee.png"
  }, {
    name: "WRANGLER 2 DOOR 2024",
    image: "images/model-wrangler-2-door.png"
  }, {
    name: "WRANGLER 4 DOOR 2024",
    image: "images/model-wrangler-4-door.png"
  }],
  whyJeep: [{
    icon: "icons/1.svg",
    title: "LEGENDARY HERITAGE",
    desc: "For 80 years the Jeep® Brand has been indelibly linked to freedom, adventure, authenticity, and passion. Our core values are embodied in every Jeep Brand Jeep’s DNA. Jeep owners have learned that Go Anywhere. Do Anything.® is a way of life, not just a slogan. The Jeep badge stands for more than a brand, it’s a badge of honor."
  }, {
    icon: "icons/2.svg",
    title: "EXCEPTIONAL 4x4 CAPABILITY",
    desc: "Not all 4x4s are created equally. Jeeps are designed and tested in some of the most inhospitable locations on the planet so you can feel confident when driving off-road with like-minded friends. With a host of capability features there is a Jeep® suited for your needs."
  }, {
    icon: "icons/3.svg",
    title: "EQUIPPED FOR YOUR SAFETY",
    desc: "Safety and security is top priority. Jeep® always you to keep your family secure as you go about your day with up to 110 available safety and security features including Adaptive Cruise Control with Stop and Go, Forward Collision Warning, Active Lane Management, Blind Spot Monitoring, and Rear Cross Path Detection. Peace of mind with every adventure."
  }, {
    icon: "icons/4.svg",
    title: "THE PEAK OF TECHNOLOGY",
    desc: "Jeeps now offer a new world of high-tech capabilities with plenty of optional features to help keep you connected and in command. The New 2024 Wrangler sets new standards. The legendary icon boasts exciting new features - greater capability, new technology, advanced safety, and refreshed exterior and interior features, including redesigned seven-slot grille and the advanced Uconnect® 5 System with its new 12.3-inch touchscreen."
  }],
  footerColumns: [{
    title: "BUY",
    links: ["MODELS", "PRE-OWNED", "OFFERS", "BUSINESS SOLUTIONS"]
  }, {
    title: "OWNERS",
    links: ["MAINTENANCE SCHEDULE", "RECALLS", "WARRANTY", "OWNER'S MANUAL", "BODY AND PAINT", "BOOK A SERVICE", "MOPAR SERVICE CENTER"]
  }, {
    title: "CONTACT US",
    links: ["OUR LOCATIONS", "PHONE (8005119)", "ENQUIRE NOW"]
  }, {
    title: "JEEP LIFE",
    links: ["JEEP COMMUNITY", "JEEP NEWS"]
  }],
  legal: ["Privacy Policy", "Terms and Conditions", "Cookie Policy", "Sitemap"],
  copyright: "© Al-Futtaim 2026. All rights reserved"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jeep-uae-website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CategoryHeading = __ds_scope.CategoryHeading;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.ModelCard = __ds_scope.ModelCard;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.StepTile = __ds_scope.StepTile;

__ds_ns.UsedCarCard = __ds_scope.UsedCarCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.CarouselIndicators = __ds_scope.CarouselIndicators;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.InPageMenu = __ds_scope.InPageMenu;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
