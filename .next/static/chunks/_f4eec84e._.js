(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/component/FallingText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const FallingText = ({ text = '', highlightWords = [], highlightClass = "highlighted", trigger = "auto", backgroundColor = "transparent", wireframes = false, gravity = 1, mouseConstraintStiffness = 0.2, fontSize = "1rem" })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [effectStarted, setEffectStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingText.useEffect": ()=>{
            if (!textRef.current) return;
            const words = text.split(" ");
            const newHTML = words.map({
                "FallingText.useEffect.newHTML": (word)=>{
                    const isHighlighted = highlightWords.some({
                        "FallingText.useEffect.newHTML.isHighlighted": (hw)=>word.startsWith(hw)
                    }["FallingText.useEffect.newHTML.isHighlighted"]);
                    return `<span class="word ${isHighlighted ? highlightClass : ""}">${word}</span>`;
                }
            }["FallingText.useEffect.newHTML"]).join(" ");
            textRef.current.innerHTML = newHTML;
        }
    }["FallingText.useEffect"], [
        text,
        highlightWords,
        highlightClass
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingText.useEffect": ()=>{
            if (trigger === "auto") {
                setEffectStarted(true);
                return;
            }
            if (trigger === "scroll" && containerRef.current) {
                const observer = new IntersectionObserver({
                    "FallingText.useEffect": ([entry])=>{
                        if (entry.isIntersecting) {
                            setEffectStarted(true);
                            observer.disconnect();
                        }
                    }
                }["FallingText.useEffect"], {
                    threshold: 0.1
                });
                observer.observe(containerRef.current);
                return ({
                    "FallingText.useEffect": ()=>observer.disconnect()
                })["FallingText.useEffect"];
            }
        }
    }["FallingText.useEffect"], [
        trigger
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingText.useEffect": ()=>{
            if (!effectStarted) return;
            const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            const containerRect = containerRef.current.getBoundingClientRect();
            const width = containerRect.width;
            const height = containerRect.height;
            if (width <= 0 || height <= 0) {
                return;
            }
            const engine = Engine.create();
            engine.world.gravity.y = gravity;
            const render = Render.create({
                element: canvasContainerRef.current,
                engine,
                options: {
                    width,
                    height,
                    background: backgroundColor,
                    wireframes
                }
            });
            const boundaryOptions = {
                isStatic: true,
                render: {
                    fillStyle: "transparent"
                }
            };
            const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
            const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
            const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
            const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);
            const wordSpans = textRef.current.querySelectorAll(".word");
            const wordBodies = [
                ...wordSpans
            ].map({
                "FallingText.useEffect.wordBodies": (elem)=>{
                    const rect = elem.getBoundingClientRect();
                    const x = rect.left - containerRect.left + rect.width / 2;
                    const y = rect.top - containerRect.top + rect.height / 2;
                    const body = Bodies.rectangle(x, y, rect.width, rect.height, {
                        render: {
                            fillStyle: "transparent"
                        },
                        restitution: 0.8,
                        frictionAir: 0.01,
                        friction: 0.2
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setVelocity(body, {
                        x: (Math.random() - 0.5) * 5,
                        y: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
                    return {
                        elem,
                        body
                    };
                }
            }["FallingText.useEffect.wordBodies"]);
            wordBodies.forEach({
                "FallingText.useEffect": ({ elem, body })=>{
                    elem.style.position = "absolute";
                    elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
                    elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
                    elem.style.transform = "none";
                }
            }["FallingText.useEffect"]);
            const mouse = Mouse.create(containerRef.current);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: mouseConstraintStiffness,
                    render: {
                        visible: false
                    }
                }
            });
            render.mouse = mouse;
            World.add(engine.world, [
                floor,
                leftWall,
                rightWall,
                ceiling,
                mouseConstraint,
                ...wordBodies.map({
                    "FallingText.useEffect": (wb)=>wb.body
                }["FallingText.useEffect"])
            ]);
            const runner = Runner.create();
            Runner.run(runner, engine);
            Render.run(render);
            const updateLoop = {
                "FallingText.useEffect.updateLoop": ()=>{
                    wordBodies.forEach({
                        "FallingText.useEffect.updateLoop": ({ body, elem })=>{
                            const { x, y } = body.position;
                            elem.style.left = `${x}px`;
                            elem.style.top = `${y}px`;
                            elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
                        }
                    }["FallingText.useEffect.updateLoop"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.update(engine);
                    requestAnimationFrame(updateLoop);
                }
            }["FallingText.useEffect.updateLoop"];
            updateLoop();
            return ({
                "FallingText.useEffect": ()=>{
                    Render.stop(render);
                    Runner.stop(runner);
                    if (render.canvas && canvasContainerRef.current) {
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        canvasContainerRef.current.removeChild(render.canvas);
                    }
                    World.clear(engine.world);
                    Engine.clear(engine);
                }
            })["FallingText.useEffect"];
        }
    }["FallingText.useEffect"], [
        effectStarted,
        gravity,
        wireframes,
        backgroundColor,
        mouseConstraintStiffness
    ]);
    const handleTrigger = ()=>{
        if (!effectStarted && (trigger === "click" || trigger === "hover")) {
            setEffectStarted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "falling-text-container",
        onClick: trigger === "click" ? handleTrigger : undefined,
        onMouseOver: trigger === "hover" ? handleTrigger : undefined,
        style: {
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "falling-text-target",
                style: {
                    fontSize: fontSize,
                    lineHeight: 1.4
                }
            }, void 0, false, {
                fileName: "[project]/src/component/FallingText.js",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasContainerRef,
                className: "falling-text-canvas"
            }, void 0, false, {
                fileName: "[project]/src/component/FallingText.js",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/FallingText.js",
        lineNumber: 187,
        columnNumber: 5
    }, this);
};
_s(FallingText, "eHvFl6O29bOgs5Z9Y2zvcA3Wbb4=");
_c = FallingText;
const __TURBOPACK__default__export__ = FallingText;
var _c;
__turbopack_context__.k.register(_c, "FallingText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/lolipop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/lolipop.29a4a63b.png");}}),
"[project]/public/lolipop.png.mjs { IMAGE => \"[project]/public/lolipop.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lolipop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/lolipop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lolipop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 500,
    height: 500,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA10lEQVR42nXOPQsBcQDH8b+Upzx05SlPdVfCcNmUh+QukcGiDFLylIyOrivlBVhuo9zVbaYbdINIXHkBJosyKbNF4jKcRdcNfMZf3+EHwJfbZvXW8ESrU8K6SMAFa4AKZDLYmUZ5cZ0PpOOWes9YcufxOHxKEEf8uRPde1yWdXkvDuXJmpMyBaysBCjixUWauB+ErnzeNOUVP32lM+mSEhgNOlutijMs178J/Og5JgnBDkEu9Q1g0mvNxVSwXSkmKchqcYJfUlE4i8XCefBPKOBAI7AbVW8fN604NkH+414AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/about/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AboutPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$FallingText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/FallingText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lolipop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$lolipop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/lolipop.png.mjs { IMAGE => "[project]/public/lolipop.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
"use client";
;
;
;
;
function AboutPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-pink-50 rounded-2xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[280px] sm:h-[320px] flex justify-center items-start pt-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$FallingText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: `Hello, This is Fionnuala's page.`,
                    highlightWords: [
                        "Hello",
                        "Fionnuala's"
                    ],
                    highlightClass: "highlighted",
                    trigger: "hover",
                    backgroundColor: "transparent",
                    wireframes: false,
                    gravity: 0.56,
                    fontSize: "2rem",
                    mouseConstraintStiffness: 0.9
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[calc(100%-320px)] overflow-y-auto px-8 py-12 flex flex-col items-center text-center space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 max-w-xl leading-relaxed",
                        children: [
                            "我是一位熱愛創作的學生，擅長結合設計、美感與互動科技。",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            "喜歡用甜甜的視覺風格創造溫暖與療癒的數位體驗。",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            "正在嘗試把我的想像變成真實，像是糖果一樣，讓人快樂。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lolipop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$lolipop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: "Candy",
                        width: 60,
                        height: 60,
                        className: "animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-rose-300",
                        children: "要來一顆糖果嗎？🍭"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-xl space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                label: "UI 設計 (Figma)",
                                percent: 90,
                                color: "bg-pink-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                label: "3D建模 (Blender)",
                                percent: 75,
                                color: "bg-violet-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                label: "前端開發 (React/Next.js)",
                                percent: 70,
                                color: "bg-blue-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                label: "動畫設計 (AE/CSS)",
                                percent: 85,
                                color: "bg-rose-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-xl space-y-8 text-left mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl text-rose-400 font-semibold mb-2 text-center",
                                children: "創作旅程"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                year: "2023",
                                title: "開始接觸 UI/UX 設計",
                                icon: "🎨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                year: "2024",
                                title: "製作第一個 3D 互動網站專案",
                                icon: "🧊"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                year: "2025",
                                title: "策展《諧波》數位內容畢業展",
                                icon: "🎪"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AboutPage;
// 技能條元件
function SkillBar({ label, percent, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm mb-1 text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-4 bg-gray-200 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-full ${color}`,
                    style: {
                        width: `${percent}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/page.js",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c1 = SkillBar;
// 時間軸元件（進階版）
function TimelineItem({ year, title, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-start gap-4 pl-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-4 h-4 rounded-full bg-gradient-to-tr from-pink-300 to-rose-400 shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[2px] h-full bg-rose-200 mt-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-rose-400 font-semibold",
                                children: year
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base text-gray-700 font-medium",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/page.js",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c2 = TimelineItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AboutPage");
__turbopack_context__.k.register(_c1, "SkillBar");
__turbopack_context__.k.register(_c2, "TimelineItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_f4eec84e._.js.map