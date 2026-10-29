import {
    s as d,
    S as n
} from "./Navbar-tZ_uC8uT.js";
import {
    g as e
} from "./ScrollTrigger-0lJgtTtq.js";
import "./index-B581kjCa.js";

function c() {
    try {
        document.body.style.overflowY = "auto";
        if (d && typeof d.paused === "function") {
            try { d.paused(!1); } catch (err) {}
        }
        var m = document.getElementsByTagName("main")[0];
        if (m) m.classList.add("main-active");

        e.to("body", {
            backgroundColor: "#101114",
            duration: .5,
            delay: 1
        });

        try {
            var o = new n([".landing-info h3", ".landing-intro h2", ".landing-intro h1"], {
                type: "chars,lines",
                linesClass: "split-line"
            });
            if (o && o.chars && o.chars.length) {
                e.fromTo(o.chars, {
                    opacity: 0,
                    y: 80,
                    filter: "blur(5px)"
                }, {
                    opacity: 1,
                    duration: 1.2,
                    filter: "blur(0px)",
                    ease: "power3.inOut",
                    y: 0,
                    stagger: .025,
                    delay: .3
                });
            }
        } catch (err) {}

        let a = {
            type: "chars,lines",
            linesClass: "split-h2"
        };

        var i = null;
        try {
            i = new n(".landing-h2-info", a);
            if (i && i.chars && i.chars.length) {
                e.fromTo(i.chars, {
                    opacity: 0,
                    y: 80,
                    filter: "blur(5px)"
                }, {
                    opacity: 1,
                    duration: 1.2,
                    filter: "blur(0px)",
                    ease: "power3.inOut",
                    y: 0,
                    stagger: .025,
                    delay: .3
                });
            }
        } catch (err) {}

        try {
            e.fromTo(".landing-info-h2", {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                duration: 1.2,
                ease: "power1.inOut",
                y: 0,
                delay: .8
            });
        } catch (err) {}

        try {
            e.fromTo([".header", ".icons-section", ".nav-fade"], {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1.2,
                ease: "power1.inOut",
                delay: .1
            });
        } catch (err) {}

        try {
            var t = new n(".landing-h2-info-1", a),
                r = new n(".landing-h2-1", a),
                s = new n(".landing-h2-2", a);
            if (i && t) l(i, t);
            if (r && s) l(r, s);
        } catch (err) {}
    } catch (globalErr) {
        console.error("initialFX error:", globalErr);
    }
}

function l(o, a) {
    try {
        var i = e.timeline({
            repeat: -1,
            repeatDelay: 1
        });
        const t = 4,
            r = t * 2 + 1;
        if (!a || !a.chars || !o || !o.chars) return;
        i.fromTo(a.chars, {
            opacity: 0,
            y: 80
        }, {
            opacity: 1,
            duration: 1.2,
            ease: "power3.inOut",
            y: 0,
            stagger: .1,
            delay: t
        }, 0).fromTo(o.chars, {
            y: 80
        }, {
            duration: 1.2,
            ease: "power3.inOut",
            y: 0,
            stagger: .1,
            delay: r
        }, 1).fromTo(o.chars, {
            y: 0
        }, {
            y: -80,
            duration: 1.2,
            ease: "power3.inOut",
            stagger: .1,
            delay: t
        }, 0).to(a.chars, {
            y: -80,
            duration: 1.2,
            ease: "power3.inOut",
            stagger: .1,
            delay: r
        }, 1)
    } catch (err) {}
}

export {
    c as initialFX
};