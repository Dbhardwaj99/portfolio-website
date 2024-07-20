"use client";

import React, { useRef } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TiltCard from "@/components/tiltcard";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import Image from "next/image";
import Ye from "../../../public/ye.png";
import Me from "../../../public/me.png";
import Resume from "../../../public/resume.png";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    }
  };

  return (
    <div className="justify-center text-center gap-6 h-screen w-screen text-accent sm:leading-normal leading-loose">
      <div className="py-[40px] pt-[50px] sm:pt-[100px]">
        <p className="text-5xl sm:text-9xl py-[10px]">
          <span>Hello World!</span>
          <span className="wave">👋</span>
        </p>
        <p className="justify-center first-letter:text-2xl py-[10px] px-[20px] sm:px-[200px] sm:text-xl">
          I&#39;m Divyansh Bhardwaj, I am a 4th year Engineering Grad Student
          from India, I love tech and I love building and breaking code. I am
          originally from Bihar, India and I am pursuing my engineering degree
          from Sikkim Manipal Institute of Technology, Sikkim. I like
          <span> Comic-books 📖, </span>
          <span
            className="hover-kanye"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Kanye West
            <span id="hide">
              <Image
                src={Ye}
                alt="Kanye was supposed to be here"
                width={30}
                height={30}
              />
            </span>
          </span>
          <span>, Fighter Jets & </span>
          <span className="hover-space">
            Space
            <span id="hide">🌕</span>
          </span>
          .
        </p>
      </div>
      <div className="sm:px-[150px] flex justify-center gap-6 flex-wrap ">
        {/* <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center sm:px-[150px] px-[10px]'> */}
        <div onClick={() => router.push("/projects")}>
          <TiltCard cardTitle="My Projects" cardIcon="💼" />
        </div>
        <div onClick={() => router.push("/blogs")}>
          <TiltCard cardTitle="My Blogs" cardIcon="✍️" />
        </div>
        <div onClick={() => router.push("/notes")}>
          <TiltCard cardTitle="My Notes" cardIcon="📝" />
        </div>
        <div onClick={() => router.push("/music")}>
          <TiltCard cardTitle="My Music" cardIcon="🎧" />
        </div>
      </div>
      <footer className="w-full pt-[50px]">
        <div className="flex space-x-[40px] justify-center items-center mb-5 border-u border-gray-200">
          <a
            href="https://www.x.com/imdbeee"
            className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M17.5667 14.7386L24.072 7.33936H22.5305L16.8819 13.764L12.3704 7.33936H7.16699L13.9892 17.0546L7.16699 24.8139H8.70862L14.6736 18.0292L19.4381 24.8139H24.6415L17.5663 14.7386H17.5667ZM15.4552 17.1402L14.764 16.1728L9.2641 8.47491H11.632L16.0704 14.6873L16.7617 15.6548L22.5312 23.73H20.1633L15.4552 17.1406V17.1402Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/imdbeee"
            className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
          >
            <svg
              className="w-[1.688rem] h-[1.688rem] "
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/divyansh-bhardwaj"
            className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
          >
            <svg
              className="w-[1.5rem] h-[1.5rem]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 0H3.75C1.677 0 0 1.677 0 3.75V20.25C0 22.323 1.677 24 3.75 24H20.25C22.323 24 24 22.323 24 20.25V3.75C24 1.677 22.323 0 20.25 0ZM7.5 20.25H4.5V9H7.5V20.25ZM6 7.5C4.61929 7.5 3.5 6.38071 3.5 5C3.5 3.61929 4.61929 2.5 6 2.5C7.38071 2.5 8.5 3.61929 8.5 5C8.5 6.38071 7.38071 7.5 6 7.5ZM20.25 20.25H17.25V14.25C17.25 12.4551 16.5449 11 14.75 11C13.4551 11 12.75 11.9121 12.75 13V20.25H9.75V9H12.75V10.5C13.5449 9.45507 14.932 9 16.25 9C19.201 9 20.25 11.201 20.25 14.25V20.25Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://github.com/dbhardwaj99"
            className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
          >
            <svg
              className="w-[1.5rem] h-[1.5rem]"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 .198a8 8 0 00-2.534 15.602c.4.074.548-.174.548-.386v-1.35c-2.226.484-2.695-1.07-2.695-1.07-.365-.926-.89-1.17-.89-1.17-.727-.497.056-.487.056-.487.805.057 1.23.826 1.23.826.717 1.23 1.882.874 2.34.668.073-.52.28-.874.508-1.074-1.777-.2-3.644-.888-3.644-3.953 0-.87.31-1.58.824-2.14-.083-.2-.36-1.015.08-2.116 0 0 .67-.215 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.035 2.2-.82 2.2-.82.44 1.1.17 1.916.08 2.116.51.56.82 1.27.82 2.14 0 3.073-1.87 3.75-3.65 3.947.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 008 .198z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a 
            href="/resume.pdf"
            className="block text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
            <svg 
              className="w-[1.5rem] h-[1.5rem]"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 64 64">
              <g data-name="Download File">
                <path d="M51 14h-4V9a1.127 1.128 0 0 0-.293-.707l-8-8A1.111 1.111 0 0 0 38 0H18a1 1 0 0 0-1 1v11h-5a3 3 0 0 0-3 3v26a5.006 5.006 0 0 0 5 5h10a1 1 0 0 0 0-2H14a3 3 0 0 1-3-3V15a1 1 0 0 1 1-1h10.89a1.027 1.027 0 0 1 .852.471l4.41 7.059A1 1 0 0 0 29 22h21a1 1 0 0 0 0-2h-3v-4h4a2 2 0 0 1 2 2v23a3 3 0 0 1-3 3H40a1 1 0 0 0 0 2h10a5.006 5.006 0 0 0 5-5V18a4 4 0 0 0-4-4zm-7.414-6H39V3.414zM29.554 20l-4.121-6.6c-.056-.086-.131-.153-.193-.232A2.984 2.984 0 0 0 22.89 12H19V2h18v7a1 1 0 0 0 1 1h7v10z"/>
                <path d="M22 6h11a1 1 0 0 0 0-2H22a1 1 0 0 0 0 2zM34 9a1 1 0 0 0-1-1H22a1 1 0 0 0 0 2h11a1 1 0 0 0 1-1zM41 12H29a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zM41 16H31a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2zM42 52h-5V41a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1h3.586L32 61.586 24.414 54H28a1 1 0 0 0 1-1V41a1 1 0 0 0-2 0v11h-5a1 1 0 0 0-.707 1.707l10 10a1 1 0 0 0 1.414 0l10-10A1 1 0 0 0 42 52zM36 38a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1zM33 37v-9a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0zM28 38a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1z"/></g>
            </svg>
          </a>
        </div>
        <span className="text-lg text-center block">
          © 2024 Divyansh Bhardwaj, All rights reserved.
        </span>
      </footer>
      <audio ref={audioRef} src="/ye_song.mp3" />
    </div>
  );
};

export default HomePage;


