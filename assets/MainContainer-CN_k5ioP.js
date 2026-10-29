const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/TechBalls-BC9FIaB3.js", "assets/index-B581kjCa.js", "assets/index-BahYYlp2.css", "assets/RGBELoader-BpI938Nj.js"]))) => i.map(i => d[i]);
import {
    j as e,
    R as x,
    r as o,
    _ as W
} from "./index-B581kjCa.js";
import {
    g as m,
    S as v
} from "./ScrollTrigger-0lJgtTtq.js";
import {
    S as k,
    a as I,
    N as B
} from "./Navbar-tZ_uC8uT.js";
const _ = () => e.jsx("div", {
        className: "about-section",
        id: "about",
        children: e.jsxs("div", {
            className: "about-me",
            children: [e.jsx("h3", {
                className: "title",
                children: "About Me"
            }), e.jsx("p", {
                className: "para",
                children: "Final-year CS & Business Systems student passionate about building intelligent applications, AI-powered solutions, and data-driven products. I combine software development, AI, and analytics to turn ideas into practical applications."
            })]
        })
    }),
    R = () => e.jsx("div", {
        className: "career-section section-container",
        children: e.jsxs("div", {
            className: "career-container",
            children: [e.jsxs("h2", {
                children: ["My journey ", e.jsx("span", {
                    children: "&"
                }), e.jsx("br", {}), " experience"]
            }), e.jsxs("div", {
                className: "career-info",
                children: [e.jsx("div", {
                    className: "career-timeline",
                    children: e.jsx("div", {
                        className: "career-dot"
                    })
                }), e.jsxs("div", {
                    className: "career-info-box",
                    children: [e.jsxs("div", {
                        className: "career-info-in",
                        children: [e.jsxs("div", {
                            className: "career-role",
                            children: [e.jsx("h4", {
                                children: "Data Analytics Intern"
                            }), e.jsx("h5", {
                                children: "Brainery Spot Technology"
                            })]
                        }), e.jsx("h3", {
                            children: "Jun–Jul 2024"
                        })]
                    }), e.jsx("p", {
                        children: "Analyzed real-world datasets, built dashboards, and delivered business insights using Python, Pandas, and data visualization tools during a one-month internship in Coimbatore."
                    })]
                }), e.jsxs("div", {
                    className: "career-info-box",
                    children: [e.jsxs("div", {
                        className: "career-info-in",
                        children: [e.jsxs("div", {
                            className: "career-role",
                            children: [e.jsxs("h4", {
                                children: "Cloud Computing Intern"
                            }), e.jsx("h5", {
                                children: "Brainery Spot Technology"
                            })]
                        }), e.jsx("h3", {
                            children: "Dec 2025–Jan 2026"
                        })]
                    }), e.jsx("p", {
                        children: "Gained hands-on experience with cloud infrastructure, deployment pipelines, and scalable architecture during a one-month cloud computing internship in Coimbatore."
                    })]
                }), e.jsxs("div", {
                    className: "career-info-box",
                    children: [e.jsxs("div", {
                        className: "career-info-in",
                        children: [e.jsxs("div", {
                            className: "career-role",
                            children: [e.jsx("h4", {
                                children: "B.Tech — CSBS"
                            }), e.jsx("h5", {
                                children: "VSB Engineering College"
                            })]
                        }), e.jsx("h3", {
                            children: "2023–2027"
                        })]
                    }), e.jsx("p", {
                        children: "Pursuing B.Tech in Computer Science & Business Systems at VSB Engineering College, Anna University (CGPA 7.70). Building AI applications, full-stack systems, and data-driven solutions alongside coursework."
                    })]
                })]
            })]
        })
    });
var C = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    T = x.createContext && x.createContext(C),
    q = ["attr", "size", "title"];

function F(s, r) {
    if (s == null) return {};
    var t, n, i = H(s, r);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(s);
        for (n = 0; n < a.length; n++) t = a[n], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(s, t) && (i[t] = s[t])
    }
    return i
}

function H(s, r) {
    if (s == null) return {};
    var t = {};
    for (var n in s)
        if ({}.hasOwnProperty.call(s, n)) {
            if (r.indexOf(n) !== -1) continue;
            t[n] = s[n]
        }
    return t
}

function f() {
    return f = Object.assign ? Object.assign.bind() : function(s) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)({}).hasOwnProperty.call(t, n) && (s[n] = t[n])
        }
        return s
    }, f.apply(null, arguments)
}

function P(s, r) {
    var t = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(s);
        r && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(s, i).enumerable
        })), t.push.apply(t, n)
    }
    return t
}

function w(s) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? P(Object(t), !0).forEach(function(n) {
            V(s, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
            Object.defineProperty(s, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return s
}

function V(s, r, t) {
    return (r = G(r)) in s ? Object.defineProperty(s, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[r] = t, s
}

function G(s) {
    var r = U(s, "string");
    return typeof r == "symbol" ? r : r + ""
}

function U(s, r) {
    if (typeof s != "object" || !s) return s;
    var t = s[Symbol.toPrimitive];
    if (t !== void 0) {
        var n = t.call(s, r);
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(s)
}

function z(s) {
    return s && s.map((r, t) => x.createElement(r.tag, w({
        key: t
    }, r.attr), z(r.child)))
}

function j(s) {
    return r => x.createElement(X, f({
        attr: w({}, s.attr)
    }, r), z(s.child))
}

function X(s) {
    var r = t => {
        var {
            attr: n,
            size: i,
            title: a
        } = s, c = F(s, q), d = i || t.size || "1em", l;
        return t.className && (l = t.className), s.className && (l = (l ? l + " " : "") + s.className), x.createElement("svg", f({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, t.attr, n, c, {
            className: l,
            style: w(w({
                color: s.color || t.color
            }, t.style), s.style),
            height: d,
            width: d,
            xmlns: "http://www.w3.org/2000/svg"
        }), a && x.createElement("title", null, a), s.children)
    };
    return T !== void 0 ? x.createElement(T.Consumer, null, t => r(t)) : r(C)
}

function Y(s) {
    return j({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            },
            child: []
        }]
    })(s)
}

function g(s) {
    return j({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
            },
            child: []
        }]
    })(s)
}
const J = () => e.jsx("div", {
        className: "contact-section section-container",
        id: "contact",
        children: e.jsxs("div", {
            className: "contact-container",
            children: [e.jsx("h3", {
                children: "Contact"
            }), e.jsxs("div", {
                className: "contact-flex",
                children: [e.jsxs("div", {
                    className: "contact-box",
                    children: [e.jsx("h4", {
                        children: "Email"
                    }), e.jsx("p", {
                        children: e.jsx("a", {
                            href: "mailto:shafiqhomelife@gmail.com",
                            "data-cursor": "disable",
                            children: "shafiqhomelife@gmail.com"
                        })
                    }), e.jsx("h4", {
                        children: "Location"
                    }), e.jsx("p", {
                        children: "Tiruppur, Tamil Nadu, India"
                    })]
                }), e.jsxs("div", {
                    className: "contact-box",
                    children: [e.jsx("h4", {
                        children: "Social"
                    }), e.jsxs("a", {
                        href: "https://github.com/Shafiq-456",
                        target: "_blank",
                        "data-cursor": "disable",
                        className: "contact-social",
                        children: ["Github ", e.jsx(g, {})]
                    }), e.jsxs("a", {
                        href: "https://linkedin.com/in/mdshafiq45/",
                        target: "_blank",
                        "data-cursor": "disable",
                        className: "contact-social",
                        children: ["Linkedin ", e.jsx(g, {})]
                    }), e.jsxs("a", {
                        href: "https://md-shafiq.netlify.app",
                        target: "_blank",
                        "data-cursor": "disable",
                        className: "contact-social",
                        children: ["Portfolio ", e.jsx(g, {})]
                    }), e.jsxs("a", {
                        href: "mailto:shafiqhomelife@gmail.com",
                        target: "_blank",
                        "data-cursor": "disable",
                        className: "contact-social",
                        children: ["Email ", e.jsx(g, {})]
                    })]
                }), e.jsxs("div", {
                    className: "contact-box",
                    children: [e.jsxs("h2", {
                        children: ["Designed and Developed ", e.jsx("br", {}), " by ", e.jsx("span", {
                            children: "Mohammed Shafiq"
                        })]
                    }), e.jsxs("h5", {
                        children: [e.jsx(Y, {}), " 2026"]
                    })]
                })]
            })]
        })
    }),
    K = () => {
        const s = o.useRef(null);
        return o.useEffect(() => {
            let r = !1;
            const t = s.current,
                n = {
                    x: 0,
                    y: 0
                },
                i = {
                    x: 0,
                    y: 0
                };
            document.addEventListener("mousemove", a => {
                n.x = a.clientX, n.y = a.clientY
            }), requestAnimationFrame(function a() {
                r || (i.x += (n.x - i.x) / 6, i.y += (n.y - i.y) / 6, m.to(t, {
                    x: i.x,
                    y: i.y,
                    duration: .1
                })), requestAnimationFrame(a)
            }), document.querySelectorAll("[data-cursor]").forEach(a => {
                const c = a;
                c.addEventListener("mouseover", d => {
                    const h = d.currentTarget.getBoundingClientRect();
                    c.dataset.cursor === "icons" && (t.classList.add("cursor-icons"), m.to(t, {
                        x: h.left,
                        y: h.top,
                        duration: .1
                    }), t.style.setProperty("--cursorH", `${h.height}px`), r = !0), c.dataset.cursor === "disable" && t.classList.add("cursor-disable")
                }), c.addEventListener("mouseout", () => {
                    t.classList.remove("cursor-disable", "cursor-icons"), r = !1
                })
            })
        }, []), e.jsx("div", {
            className: "cursor-main",
            ref: s
        })
    },
    $ = ({
        children: s
    }) => e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "landing-section",
            id: "landingDiv",
            children: [e.jsxs("div", {
                className: "landing-container",
                children: [e.jsxs("div", {
                    className: "landing-intro",
                    children: [e.jsx("h2", {
                        children: "Hello! I'm"
                    }), e.jsxs("h1", {
                        children: ["MOHAMMED", e.jsx("br", {}), e.jsx("span", {
                            children: "SHAFIQ"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "landing-info",
                    children: [e.jsx("h3", {
                        children: "AI & Full-Stack"
                    }), e.jsxs("h2", {
                        className: "landing-info-h2",
                        children: [e.jsx("div", {
                            className: "landing-h2-1",
                            children: "AI Engineer"
                        }), e.jsx("div", {
                            className: "landing-h2-2",
                            children: "Full-Stack Dev"
                        })]
                    }), e.jsxs("h2", {
                        children: [e.jsx("div", {
                            className: "landing-h2-info",
                            children: "AI Developer"
                        }), e.jsx("div", {
                            className: "landing-h2-info-1",
                            children: "Full-Stack Dev"
                        })]
                    })]
                })]
            }), s]
        })
    });

function Z(s) {
    return j({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            },
            child: []
        }]
    })(s)
}

function Q(s) {
    return j({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            },
            child: []
        }]
    })(s)
}

function ee(s) {
    return j({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(s)
}

function se(s) {
    return j({
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            },
            child: []
        }]
    })(s)
}
const te = () => (o.useEffect(() => {
        const soc = document.getElementById("social");
        if (soc) {
            soc.querySelectorAll("span").forEach(r => {
                const t = r,
                    n = t.querySelector("a");
                if (!n) return;
                const i = t.getBoundingClientRect();
                let a = i.width / 2,
                    c = i.height / 2,
                    d = 0,
                    l = 0;
                const h = () => {
                        d += (a - d) * .1, l += (c - l) * .1, n.style.setProperty("--siLeft", `${d}px`), n.style.setProperty("--siTop", `${l}px`), requestAnimationFrame(h)
                    },
                    E = S => {
                        const N = S.clientX - i.left,
                            b = S.clientY - i.top;
                        N < 40 && N > 10 && b < 40 && b > 5 ? (a = N, c = b) : (a = i.width / 2, c = i.height / 2)
                    };
                return document.addEventListener("mousemove", E), h(), () => {
                    document.removeEventListener("mousemove", E)
                }
            })
        }
    }, []), e.jsx("div", {
        className: "icons-section",
        children: e.jsxs("div", {
            className: "social-icons",
            "data-cursor": "icons",
            id: "social",
            children: [e.jsx("span", {
                children: e.jsx("a", {
                    href: "https://github.com/Shafiq-456",
                    target: "_blank",
                    children: e.jsx(se, {})
                })
            }), e.jsx("span", {
                children: e.jsx("a", {
                    href: "https://linkedin.com/in/mdshafiq45/",
                    target: "_blank",
                    children: e.jsx(Q, {})
                })
            }), e.jsx("span", {
                children: e.jsx("a", {
                    href: "https://md-shafiq.netlify.app",
                    target: "_blank",
                    children: e.jsx(Z, {})
                })
            }), e.jsx("span", {
                children: e.jsx("a", {
                    href: "mailto:shafiqhomelife@gmail.com",
                    target: "_blank",
                    children: e.jsx(ee, {})
                })
            })]
        })
    })),
    re = () => {
        const s = o.useRef([]),
            r = (t, n) => {
                s.current[n] = t
            };
        return o.useEffect(() => (v.isTouch && s.current.forEach(t => {
            t && (t.classList.remove("what-noTouch"), t.addEventListener("click", () => D(t)))
        }), () => {
            s.current.forEach(t => {
                t && t.removeEventListener("click", () => D(t))
            })
        }), []), e.jsxs("div", {
            className: "whatIDO",
            children: [e.jsx("div", {
                className: "what-box",
                children: e.jsxs("h2", {
                    className: "title",
                    children: ["W", e.jsx("span", {
                        className: "hat-h2",
                        children: "HAT"
                    }), e.jsxs("div", {
                        children: ["I", e.jsx("span", {
                            className: "do-h2",
                            children: " DO"
                        })]
                    })]
                })
            }), e.jsx("div", {
                className: "what-box",
                children: e.jsxs("div", {
                    className: "what-box-in",
                    children: [e.jsx("div", {
                        className: "what-border2",
                        children: e.jsxs("svg", {
                            width: "100%",
                            children: [e.jsx("line", {
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "100%",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeDasharray: "7,7"
                            }), e.jsx("line", {
                                x1: "100%",
                                y1: "0",
                                x2: "100%",
                                y2: "100%",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeDasharray: "7,7"
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "what-content what-noTouch",
                        ref: t => r(t, 0),
                        children: [e.jsx("div", {
                            className: "what-border1",
                            children: e.jsxs("svg", {
                                height: "100%",
                                children: [e.jsx("line", {
                                    x1: "0",
                                    y1: "0",
                                    x2: "100%",
                                    y2: "0",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeDasharray: "6,6"
                                }), e.jsx("line", {
                                    x1: "0",
                                    y1: "100%",
                                    x2: "100%",
                                    y2: "100%",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeDasharray: "6,6"
                                })]
                            })
                        }), e.jsx("div", {
                            className: "what-corner"
                        }), e.jsxs("div", {
                            className: "what-content-in",
                            children: [e.jsx("h3", {
                                children: "DEVELOP"
                            }), e.jsx("h4", {
                                children: "Description"
                            }), e.jsx("p", {
                                children: "Building AI-powered applications and full-stack systems using Python, React, FastAPI, and modern ML frameworks. From concept to deployment."
                            }), e.jsx("h5", {
                                children: "Skillset & tools"
                            }), e.jsxs("div", {
                                className: "what-content-flex",
                                children: [e.jsx("div", {
                                    className: "what-tags",
                                    children: "Python"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "React.js"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "FastAPI"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Node.js"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "PostgreSQL"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "MongoDB"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Tailwind CSS"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "JavaScript"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Pandas"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "SQL"
                                })]
                            }), e.jsx("div", {
                                className: "what-arrow"
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "what-content what-noTouch",
                        ref: t => r(t, 1),
                        children: [e.jsx("div", {
                            className: "what-border1",
                            children: e.jsx("svg", {
                                height: "100%",
                                children: e.jsx("line", {
                                    x1: "0",
                                    y1: "100%",
                                    x2: "100%",
                                    y2: "100%",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeDasharray: "6,6"
                                })
                            })
                        }), e.jsx("div", {
                            className: "what-corner"
                        }), e.jsxs("div", {
                            className: "what-content-in",
                            children: [e.jsx("h3", {
                                children: "AI & DATA"
                            }), e.jsx("h4", {
                                children: "Description"
                            }), e.jsx("p", {
                                children: "Transforming structured data into actionable insights and developing intelligent models using Machine Learning, NLP, Whisper ASR, and autonomous AI agents."
                            }), e.jsx("h5", {
                                children: "Skillset & tools"
                            }), e.jsxs("div", {
                                className: "what-content-flex",
                                children: [e.jsx("div", {
                                    className: "what-tags",
                                    children: "Machine Learning"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "NLP"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Whisper ASR"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Pandas"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Business Analytics"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "LLM Agents"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Microservices"
                                }), e.jsx("div", {
                                    className: "what-tags",
                                    children: "Cloud"
                                })]
                            }), e.jsx("div", {
                                className: "what-arrow"
                            })]
                        })]
                    })]
                })
            })]
        })
    };

function D(s) {
    s.classList.toggle("what-content-active"), s.classList.remove("what-sibling"), s.parentElement && Array.from(s.parentElement.children).forEach(t => {
        t !== s && (t.classList.remove("what-content-active"), t.classList.toggle("what-sibling"))
    })
}
const u = s => {
    const [r, t] = o.useState(!1), [n, i] = o.useState(""), a = async () => {
        if (s.video) {
            t(!0);
            const d = await (await fetch(`src/assets/${s.video}`)).blob(),
                l = URL.createObjectURL(d);
            i(l)
        }
    };
    return e.jsx("div", {
        className: "work-image",
        children: e.jsxs("a", {
            className: "work-image-in",
            href: s.link,
            onMouseEnter: a,
            onMouseLeave: () => t(!1),
            target: "_blank",
            "data-cursor": "disable",
            children: [s.link && e.jsx("div", {
                className: "work-link",
                children: e.jsx(g, {})
            }), e.jsx("img", {
                src: s.image,
                alt: s.alt,
                loading: "lazy"
            }), r && e.jsx("video", {
                src: n,
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                loop: !0
            })]
        })
    })
};
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
let L = typeof document < "u" ? o.useLayoutEffect : o.useEffect,
    M = s => s && !Array.isArray(s) && typeof s == "object",
    p = [],
    ne = {},
    A = m;
const y = (s, r = p) => {
    let t = ne;
    M(s) ? (t = s, s = null, r = "dependencies" in t ? t.dependencies : p) : M(r) && (t = r, r = "dependencies" in t ? t.dependencies : p), s && typeof s != "function" && console.warn("First parameter must be a function or config object");
    const {
        scope: n,
        revertOnUpdate: i
    } = t, a = o.useRef(!1), c = o.useRef(A.context(() => {}, n)), d = o.useRef(h => c.current.add(null, h)), l = r && r.length && !i;
    return l && L(() => (a.current = !0, () => c.current.revert()), p), L(() => {
        if (s && c.current.add(s, n), !l || !a.current) return () => c.current.revert()
    }, r), {
        context: c.current,
        contextSafe: d.current
    }
};
y.register = s => {
    A = s
};
y.headless = !0;
const ie = "/assets/antimatter-Dl6Rbdz6.jpg",
    ae = "/assets/bluetowergames-DH73ow1g.jpg",
    ce = "/assets/talitrix-DZvwUDEt.jpg",
    le = "/assets/catNFT-BdYMhzfV.webp",
    oe = "/assets/Mechlynq-B2DulpMJ.jpg",
    de = "/assets/crypto-BayKjg5a.jpg";
m.registerPlugin(y);
const he = () => {
    function s() {
        let r = 0;
        const t = document.getElementsByClassName("work-box"),
            wc = document.querySelector(".work-container");
        if (!wc || !t || !t.length || !t[0] || !t[0].parentElement) return 0;
        const n = wc.getBoundingClientRect().left,
            i = t[0].getBoundingClientRect(),
            a = t[0].parentElement.getBoundingClientRect().width;
        let c = (parseInt(window.getComputedStyle(t[0]).padding) || 0) / 2;
        return r = i.width * t.length - (n + a) + c, r
    }
    return y(() => {
        let r = s();

        function t() {
            let i = null;
            i && clearTimeout(i), i = setTimeout(() => {
                r = s()
            }, 200)
        }
        return m.timeline({
            scrollTrigger: {
                trigger: ".work-section",
                start: "top top",
                end: "+=1500",
                scrub: .5,
                pinSpacing: !0,
                pin: !0,
                pinType: v.isTouch ? "fixed" : "transform",
                id: "work"
            }
        }).to(".work-flex", {
            x: -r,
            duration: 500,
            delay: .2
        }), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
        }
    }, []), e.jsx("div", {
        className: "work-section",
        id: "work",
        children: e.jsxs("div", {
            className: "work-container section-container",
            children: [e.jsxs("h2", {
                children: ["My ", e.jsx("span", {
                    children: "Projects"
                })]
            }), e.jsxs("div", {
                className: "work-flex",
                children: [e.jsxs("div", {
                    className: "work-box",
                    children: [e.jsxs("div", {
                        className: "work-info",
                        children: [e.jsxs("div", {
                            className: "work-title",
                            children: [e.jsx("h3", {
                                children: "01"
                            }), e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    children: "TADA AI"
                                }), e.jsx("p", {
                                    children: "Autonomous Data Analyst & BI Agent"
                                })]
                            })]
                        }), e.jsx("h4", {
                            children: "Tools and features"
                        }), e.jsx("p", {
                            children: "React.js, FastAPI, Python, PostgreSQL, Pandas, ML"
                        })]
                    }), e.jsx(u, {
                        image: ie,
                        link: "https://tada-ai.vercel.app",
                        alt: "TADA AI - Autonomous Data Analyst"
                    })]
                }), e.jsxs("div", {
                    className: "work-box",
                    children: [e.jsxs("div", {
                        className: "work-info",
                        children: [e.jsxs("div", {
                            className: "work-title",
                            children: [e.jsx("h3", {
                                children: "02 "
                            }), e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    children: "JeduAI Connect"
                                }), e.jsx("p", {
                                    children: "Multilingual AI Education Platform"
                                })]
                            })]
                        }), e.jsx("h4", {
                            children: "Tools and features"
                        }), e.jsx("p", {
                            children: "Python, Whisper ASR, IndicTrans2, Microservices"
                        })]
                    }), e.jsx(u, {
                        image: le,
                        link: "https://jeduai-connect.netlify.app",
                        alt: "JeduAI Connect - Multilingual AI Education"
                    })]
                }), e.jsxs("div", {
                    className: "work-box",
                    children: [e.jsxs("div", {
                        className: "work-info",
                        children: [e.jsxs("div", {
                            className: "work-title",
                            children: [e.jsx("h3", {
                                children: "03 "
                            }), e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    children: "Cric-IQ"
                                }), e.jsx("p", {
                                    children: "AI Cricket Stats & Strategy Assistant"
                                })]
                            })]
                        }), e.jsx("h4", {
                            children: "Tools and features"
                        }), e.jsx("p", {
                            children: "Python, Pandas, Data Visualization, FastAPI"
                        })]
                    }), e.jsx(u, {
                        image: ce,
                        link: "https://cric-iq.netlify.app",
                        alt: "Cric-IQ - AI Cricket Stats & Strategy"
                    })]
                }), e.jsxs("div", {
                    className: "work-box",
                    children: [e.jsxs("div", {
                        className: "work-info",
                        children: [e.jsxs("div", {
                            className: "work-title",
                            children: [e.jsx("h3", {
                                children: "04"
                            }), e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    children: "SmartBiz ERP"
                                }), e.jsx("p", {
                                    children: "Business Management & ERP System"
                                })]
                            })]
                        }), e.jsx("h4", {
                            children: "Tools and features"
                        }), e.jsx("p", {
                            children: "React.js, Node.js, MongoDB, Express.js"
                        })]
                    }), e.jsx(u, {
                        image: ae,
                        link: "https://smart-biz-erp.vercel.app",
                        alt: "SmartBiz ERP - Business Management"
                    })]
                }), e.jsxs("div", {
                    className: "work-box",
                    children: [e.jsxs("div", {
                        className: "work-info",
                        children: [e.jsxs("div", {
                            className: "work-title",
                            children: [e.jsx("h3", {
                                children: "05 "
                            }), e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    children: "Comp-IQ"
                                }), e.jsx("p", {
                                    children: "Competitor Intelligence Agent"
                                })]
                            })]
                        }), e.jsx("h4", {
                            children: "Tools and features"
                        }), e.jsx("p", {
                            children: "Python, LLM, Web Scraping, FastAPI"
                        })]
                    }), e.jsx(u, {
                        image: oe,
                        link: "https://comp-iq-three.vercel.app",
                        alt: "Comp-IQ - Competitor Analysis Agent"
                    })]
                }), e.jsxs("div", {
                    className: "work-box",
                    children: [e.jsxs("div", {
                        className: "work-info",
                        children: [e.jsxs("div", {
                            className: "work-title",
                            children: [e.jsx("h3", {
                                children: "06 "
                            }), e.jsxs("div", {
                                children: [e.jsx("h4", {
                                    children: "Syrax AI"
                                }), e.jsx("p", {
                                    children: "Innovation Research & Project Intelligence"
                                })]
                            })]
                        }), e.jsx("h4", {
                            children: "Tools and features"
                        }), e.jsx("p", {
                            children: "Python, LLM, Autonomous Agents, FastAPI"
                        })]
                    }), e.jsx(u, {
                        image: de,
                        link: "https://github.com/Shafiq-456/Syrax-AI-",
                        alt: "Syrax AI - Innovation Research Platform"
                    })]
                })]
            })]
        })
    })
};
m.registerPlugin(v, I, k);

function O() {
    if (v.config({
            ignoreMobileResize: !0
        }), window.innerWidth < 900) return;
    const s = document.querySelectorAll(".para"),
        r = document.querySelectorAll(".title"),
        t = window.innerWidth <= 1024 ? "top 60%" : "20% 60%",
        n = "play pause resume reverse";
    s.forEach(i => {
        var a, c;
        i.classList.add("visible"), i.anim && (i.anim.progress(1).kill(), (a = i.split) == null || a.revert()), i.split = new k(i, {
            type: "lines,words",
            linesClass: "split-line"
        }), i.anim = m.fromTo(i.split.words, {
            autoAlpha: 0,
            y: 80
        }, {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: (c = i.parentElement) == null ? void 0 : c.parentElement,
                toggleActions: n,
                start: t
            },
            duration: 1,
            ease: "power3.out",
            y: 0,
            stagger: .02
        })
    }), r.forEach(i => {
        var a, c;
        i.anim && (i.anim.progress(1).kill(), (a = i.split) == null || a.revert()), i.split = new k(i, {
            type: "chars,lines",
            linesClass: "split-line"
        }), i.anim = m.fromTo(i.split.chars, {
            autoAlpha: 0,
            y: 80,
            rotate: 10
        }, {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: (c = i.parentElement) == null ? void 0 : c.parentElement,
                toggleActions: n,
                start: t
            },
            duration: .8,
            ease: "power2.inOut",
            y: 0,
            rotate: 0,
            stagger: .03
        })
    }), v.addEventListener("refresh", () => O())
}
const me = o.lazy(() => W(() =>
        import ("./TechBalls-BC9FIaB3.js"), __vite__mapDeps([0, 1, 2, 3]))),
    xe = () => e.jsxs("div", {
        className: "techstack",
        children: [e.jsx("h2", {
            children: " My Techstack"
        }), e.jsx(me, {})]
    }),
    ve = ({
        children: s
    }) => {
        const [r, t] = o.useState(window.innerWidth > 1024);
        return o.useEffect(() => {
            const n = () => {
                O(), t(window.innerWidth > 1024)
            };
            return n(), window.addEventListener("resize", n), () => {
                window.removeEventListener("resize", n)
            }
        }, [r]), e.jsxs("div", {
            className: "container-main",
            children: [e.jsx(K, {}), e.jsx(B, {}), e.jsx(te, {}), r && s, e.jsx("div", {
                id: "smooth-wrapper",
                children: e.jsx("div", {
                    id: "smooth-content",
                    children: e.jsxs("div", {
                        className: "container-main",
                        children: [e.jsx($, {
                            children: !r && s
                        }), e.jsx(_, {}), e.jsx(re, {}), e.jsx(R, {}), e.jsx(he, {}), e.jsx(xe, {}), e.jsx(J, {})]
                    })
                })
            })]
        })
    };
export {
    ve as
    default
};