import { React } from "./deps.ts";
import { DenoConfig } from "./types.ts";

export const Deno = (dc: DenoConfig) => {
  return (
    <div className="border mx-auto">
      <DenoBase {...dc}/>
    </div>
  );
}
const DenoBase = (dc: DenoConfig) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={dc.width}
      height={dc.height}
      viewBox="-25 -25 1305.000000 946.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,899.000000) scale(0.100000,-0.100000)"
        fill={dc.fill}
        stroke={dc.stroke}
        strokeWidth="100"
      >
        <path
          d="M1081 9195 c-96 -22 -158 -43 -244 -86 -105 -52 -151 -85 -220 -158
    -68 -72 -103 -142 -112 -231 -14 -125 -52 -161 -232 -220 -199 -65 -232 -93
    -243 -213 -4 -40 -13 -100 -20 -135 -15 -79 -7 -137 29 -194 37 -57 109 -105
    265 -173 137 -59 178 -83 245 -139 102 -85 162 -98 315 -67 121 25 149 20 176
    -34 19 -38 19 -391 -1 -860 -16 -402 -17 -1103 -1 -1290 57 -652 146 -973 401
    -1439 105 -192 151 -373 151 -589 0 -71 -14 -248 -35 -431 -52 -467 -64 -618
    -75 -939 -6 -160 -13 -305 -16 -322 -11 -52 -33 -85 -122 -179 -161 -172 -273
    -338 -312 -465 -58 -185 13 -309 220 -386 71 -27 86 -28 295 -34 252 -7 258
    -8 295 -88 30 -65 65 -110 99 -128 16 -8 66 -17 112 -20 46 -4 179 -20 294
    -36 427 -61 613 -29 781 136 151 148 195 347 174 775 -15 287 -9 522 14 605 9
    32 19 61 21 63 3 3 28 -13 57 -36 290 -221 689 -352 1075 -352 102 0 311 23
    398 45 91 22 85 28 85 -92 0 -128 -15 -169 -81 -227 -219 -192 -341 -371 -356
    -521 -10 -98 32 -138 252 -234 66 -29 147 -72 180 -96 97 -69 121 -75 315 -87
    420 -24 704 34 859 178 67 62 99 111 133 204 23 64 23 69 20 432 -2 203 0 368
    3 368 4 0 99 -94 213 -208 219 -220 357 -338 537 -456 268 -176 439 -247 890
    -366 870 -230 1250 -308 1672 -340 76 -6 282 -24 458 -40 757 -69 1023 -84
    1505 -84 402 -1 536 6 745 40 265 42 438 123 486 229 94 207 -195 350 -850
    420 -292 31 -562 47 -1091 65 -408 14 -662 28 -735 41 -73 13 -532 118 -699
    160 -545 137 -904 278 -1206 474 -311 202 -536 471 -735 880 -82 169 -142 320
    -255 645 -275 791 -529 1287 -853 1668 -492 577 -1084 830 -1832 783 -387 -25
    -714 -94 -1280 -272 -277 -87 -458 -56 -634 107 -158 146 -276 386 -366 744
    -121 482 -180 916 -205 1520 -28 687 -39 804 -89 1002 -90 355 -263 560 -566
    665 -88 31 -214 39 -304 18z"
        />
      </g>
    </svg>
  );
};
