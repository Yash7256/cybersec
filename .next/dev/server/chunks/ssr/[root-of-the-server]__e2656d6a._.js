module.exports = [
"[project]/CyberSec-Main/components/ui/dot-shader-background.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DotScreenShader",
    ()=>DotScreenShader
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$fiber$29$__ = __turbopack_context__.i("[externals]/@react-three/fiber [external] (@react-three/fiber, cjs, [project]/CyberSec-Main/node_modules/@react-three/fiber)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$drei$29$__ = __turbopack_context__.i("[externals]/@react-three/drei [external] (@react-three/drei, cjs, [project]/CyberSec-Main/node_modules/@react-three/drei)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2d$themes$29$__ = __turbopack_context__.i("[externals]/next-themes [external] (next-themes, esm_import, [project]/CyberSec-Main/node_modules/next-themes)"); // lub twój provider
var __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__ = __turbopack_context__.i("[externals]/three [external] (three, esm_import, [project]/CyberSec-Main/node_modules/three)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2d$themes$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2d$themes$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const DotMaterial = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$drei$29$__["shaderMaterial"])({
    time: 0,
    resolution: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__["Vector2"](),
    dotColor: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__["Color"]('#FFFFFF'),
    bgColor: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__["Color"]('#121212'),
    mouseTrail: null,
    render: 0,
    rotation: 0,
    gridSize: 50,
    dotOpacity: 0.05
}, /* glsl */ `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `, /* glsl */ `
    uniform float time;
    uniform int render;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform sampler2D mouseTrail;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;

    vec2 rotate(vec2 uv, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        mat2 rotationMatrix = mat2(c, -s, s, c);
        return rotationMatrix * (uv - 0.5) + 0.5;
    }

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 rotatedUv = rotate(uv, rotation);

      // Create a grid
      vec2 gridUv = fract(rotatedUv * gridSize);
      vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

      // Calculate distance from the center of each cell
      float baseDot = sdfCircle(gridUv, 0.25);

      // Screen mask
      float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y); // 0 at the top, 1 at the bottom
      vec2 centerDisplace = vec2(0.7, 1.1);
      float circleMaskCenter = length(uv - centerDisplace);
      float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);
      
      float combinedMask = screenMask * circleMaskFromCenter;
      float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

      // Mouse trail effect
      float mouseInfluence = texture2D(mouseTrail, gridUvCenterInScreenCoords).r;
      
      float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);

      // Create dots with animated scale, influenced by mouse
      float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);

      float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

      float smoothDot = smoothstep(0.05, 0.0, sdfDot);

      float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);

      // Mix background color with dot color, using animated opacity to increase visibility
      vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));

      gl_FragColor = vec4(composition, 1.0);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `);
function Scene() {
    const size = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$fiber$29$__["useThree"])((s)=>s.size);
    const viewport = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$fiber$29$__["useThree"])((s)=>s.viewport);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2d$themes$29$__["useTheme"])();
    const rotation = 0;
    const gridSize = 100;
    const getThemeColors = ()=>{
        switch(theme){
            case 'dark':
                return {
                    dotColor: '#FFFFFF',
                    bgColor: '#121212',
                    dotOpacity: 0.025
                };
            case 'light':
                return {
                    dotColor: '#e1e1e1',
                    bgColor: '#F4F5F5',
                    dotOpacity: 0.15
                };
            default:
                return {
                    dotColor: '#FFFFFF',
                    bgColor: '#121212',
                    dotOpacity: 0.05
                };
        }
    };
    const themeColors = getThemeColors();
    const [trail, onMove] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useTrailTexture"])({
        size: 512,
        radius: 0.1,
        maxAge: 400,
        interpolate: 1,
        ease: function easeInOutCirc(x) {
            return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
        }
    });
    const dotMaterial = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return new DotMaterial();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        dotMaterial.uniforms.dotColor.value.setHex(themeColors.dotColor.replace('#', '0x'));
        dotMaterial.uniforms.bgColor.value.setHex(themeColors.bgColor.replace('#', '0x'));
        dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity;
    }, [
        theme,
        dotMaterial,
        themeColors
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$fiber$29$__["useFrame"])((state)=>{
        dotMaterial.uniforms.time.value = state.clock.elapsedTime;
    });
    const handlePointerMove = (e)=>{
        onMove(e);
    };
    const scale = Math.max(viewport.width, viewport.height) / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
        scale: [
            scale,
            scale,
            1
        ],
        onPointerMove: handlePointerMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    2,
                    2
                ]
            }, void 0, false, {
                fileName: "[project]/CyberSec-Main/components/ui/dot-shader-background.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("primitive", {
                object: dotMaterial,
                resolution: [
                    size.width * viewport.dpr,
                    size.height * viewport.dpr
                ],
                rotation: rotation,
                gridSize: gridSize,
                mouseTrail: trail,
                render: 0
            }, void 0, false, {
                fileName: "[project]/CyberSec-Main/components/ui/dot-shader-background.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CyberSec-Main/components/ui/dot-shader-background.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
const DotScreenShader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f40$react$2d$three$2f$fiber$29$__["Canvas"], {
        gl: {
            antialias: true,
            powerPreference: 'high-performance',
            outputColorSpace: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__["SRGBColorSpace"],
            toneMapping: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$three$29$__["NoToneMapping"]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Scene, {}, void 0, false, {
            fileName: "[project]/CyberSec-Main/components/ui/dot-shader-background.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/CyberSec-Main/components/ui/dot-shader-background.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/CyberSec-Main/components/ui/dot-shader-background.tsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/CyberSec-Main/components/ui/dot-shader-background.tsx [ssr] (ecmascript)"));
}),
"[externals]/@react-three/fiber [external] (@react-three/fiber, cjs, [project]/CyberSec-Main/node_modules/@react-three/fiber)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@react-three/fiber-71ffbd067a7bf2ee", () => require("@react-three/fiber-71ffbd067a7bf2ee"));

module.exports = mod;
}),
"[externals]/@react-three/drei [external] (@react-three/drei, cjs, [project]/CyberSec-Main/node_modules/@react-three/drei)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@react-three/drei-4b7e5a219c68f34d", () => require("@react-three/drei-4b7e5a219c68f34d"));

module.exports = mod;
}),
"[externals]/three [external] (three, esm_import, [project]/CyberSec-Main/node_modules/three)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("three-c9909201d83ce664");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2656d6a._.js.map