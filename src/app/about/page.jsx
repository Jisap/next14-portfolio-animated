"use client"

import Brain from "@/components/brain"
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          
          {/* Biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className="self-end scale-50">
              <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="347" 
                height="254" 
                viewBox="0 0 347 254"
                preserveAspectRatio="xMidYMid meet"
              >

                <g transform="translate(0.000000,254.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M1828 2526 c-48 -17 -118 -58 -200 -117 -82 -59 -91 -61 -498 -89
                    -452 -31 -640 -59 -819 -122 -103 -36 -172 -74 -232 -127 -44 -39 -88 -101
                    -71 -101 5 0 15 12 23 26 19 37 96 104 156 136 111 61 318 112 558 137 55 6
                    231 20 390 31 160 11 313 23 342 26 l51 7 -50 -54 c-97 -103 -164 -194 -353
                    -478 l-190 -286 -165 -21 c-433 -58 -657 -120 -700 -196 -13 -25 -13 -29 6
                    -55 27 -38 146 -96 280 -136 98 -29 110 -35 100 -50 -18 -29 7 -44 47 -28 17
                    8 46 14 62 14 30 0 742 -140 1185 -233 357 -75 525 -134 525 -185 0 -37 -84
                    -78 -320 -158 -299 -103 -355 -131 -355 -183 0 -51 103 -92 347 -138 221 -42
                    957 -146 967 -136 11 11 17 10 -409 70 -549 79 -749 117 -838 162 -101 50 -48
                    88 279 199 290 98 367 141 349 199 -24 76 -223 132 -1035 290 -256 50 -480 94
                    -498 98 -18 4 54 7 160 7 173 1 205 4 305 27 202 48 353 129 476 256 63 66
                    147 185 167 236 7 21 16 26 42 26 18 0 50 3 72 7 l38 6 -7 -41 c-6 -36 -3 -45
                    20 -68 24 -23 32 -26 72 -20 52 7 161 57 241 110 63 42 87 46 78 14 -20 -69
                    -29 -119 -23 -125 13 -12 57 17 132 88 l75 72 78 -7 c77 -6 170 7 203 28 12 8
                    -18 10 -113 7 l-130 -3 7 46 c4 26 3 46 -2 46 -17 0 -33 -24 -33 -50 0 -14 -5
                    -31 -12 -38 -11 -11 -128 -18 -128 -7 0 2 5 16 12 30 8 19 9 28 0 37 -8 8 -15
                    2 -27 -24 -10 -19 -26 -40 -36 -46 -12 -8 -81 -14 -184 -17 -160 -4 -165 -4
                    -155 15 14 27 64 60 90 60 29 0 21 -20 -20 -47 -18 -13 -27 -23 -19 -23 30 1
                    88 68 72 84 -3 3 -20 6 -38 6 -36 0 -91 -37 -118 -80 -11 -18 -28 -30 -40 -30
                    -12 0 -45 -3 -74 -6 l-51 -7 29 87 c74 221 76 419 6 525 -63 95 -219 121 -332
                    56 -93 -54 -224 -242 -213 -307 4 -22 5 -22 13 -3 62 156 139 256 231 301 46
                    22 64 26 123 22 55 -3 75 -9 104 -30 107 -82 117 -311 26 -562 l-31 -85 -42
                    -5 c-22 -3 -158 -15 -301 -26 -143 -12 -316 -27 -385 -34 -69 -7 -127 -12
                    -129 -10 -6 5 274 429 353 534 39 52 112 137 161 188 89 92 91 93 165 112 174
                    43 285 121 238 168 -15 15 -33 15 -80 -2z m67 -32 c0 -25 -84 -75 -175 -104
                    -39 -13 -73 -20 -76 -18 -7 7 137 105 188 128 49 22 63 21 63 -6z m747 -796
                    c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m136 -75 c-10 -2
                    -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m-258 -64 c-97 -91 -103 -92
                    -78 -17 12 35 26 66 32 70 6 4 34 8 61 7 l50 0 -65 -60z m-170 31 c-46 -36
                    -185 -100 -232 -106 -41 -6 -48 -4 -61 17 -18 27 -12 78 9 86 12 4 188 18 274
                    21 l35 2 -25 -20z m-566 -97 c-136 -218 -381 -373 -674 -424 -97 -17 -312 -17
                    -422 0 l-87 13 103 101 c85 85 225 251 254 303 5 9 59 18 167 30 196 20 699
                    61 704 58 2 -2 -18 -38 -45 -81z m-889 -40 c-162 -218 -309 -363 -368 -363
                    -42 0 -202 44 -296 82 -83 33 -126 60 -142 89 -26 49 114 113 351 159 136 27
                    401 68 449 69 l33 1 -27 -37z m-385 -388 c0 -2 -10 -10 -22 -16 -21 -11 -22
                    -11 -9 4 13 16 31 23 31 12z"/>
                  <path d="M3378 2030 c-48 -25 -206 -158 -216 -182 -11 -25 28 1 98 66 68 64
                  166 126 199 126 6 0 11 5 11 10 0 17 -33 10 -92 -20z"/>
                </g>
              </svg>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
          </svg>
          </div>

          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <h1 className="font-bold text-2xl">
              SKILLS
            </h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
          </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          {/* Experience Container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <h1 className="font-bold text-2xl">
              EXPERIENCE
            </h1>
            <div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 "></div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>

              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 "></div>
              </div>

            </div>

          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage