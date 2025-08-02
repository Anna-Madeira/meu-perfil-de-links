"use client";
import { useState } from "react";
import React from "react";
import {Github, Linkedin, Mail, MapPin, ScrollText, Laptop, User} from "lucide-react";
interface LinkItem {
  name: string;
  url: string;
  icon: React.ElementType; }

const links: LinkItem[] = [
  { name: 'Github', url: "https://github.com/Anna-Madeira", icon: Github},
  {name: 'LinkedIn', url: "https://linkedin.com/in/anna-madeira", icon: Linkedin},
  {name: "Curriculo", url: "https://curriculo-anna.vercel.app/", icon: ScrollText},
  {name: "Contato", url: "mailto:anna.madeira@icloud.com", icon: Mail },

];

export default function App(){
const [profile] = useState ({
  name: "Anna Madeira",
  bio: "Desenvolvedora Frontend Junior",
  location: "São Paulo, SP"
});

return(
<div className="min-h-screen bg-black text-white flex flex-col items-center font-sans">
  <div className="bg-pink-300 p-8 my-10 mx-auto rounded-3xl shadow-2xl w-full max-w-lg">
      <header className="text-center mb-10 w-full max-w-md animate-fade-in"> 
      <div className="flex items-center justify-center space-x-2 text-pink-900 text-3xl font-extrabold font-serif  tracking-tight mb-2">
          <User className="w-8 h-8 text-black" />
          <h1>{profile.name}</h1>
        </div>
       <div className="flex items-center justify-center space-x-2 text-white font-serif italic font-semibold ">
          <MapPin className="w-4 h-4 text-black" />
          <p>{profile.location}</p>
        </div>
      <div className="flex items-center justify-center space-x-2 text-white font-serif italic font-semibold mb-1">
          <Laptop className="w-4 h-4 text-black" />
          <p>{profile.bio}</p>
        </div>
    </header>
    <main>
      <ul>
        {links.map((links, index) => (
          <li key={index}>
            <a href={links.url} target="_blank" rel="noopener noreferrer" className=" flex items-center justify-between transition-all
            duration-300 py-4 px-6 rounded-xl text-lg font-semibold text-pink-900 shadow-md hover:bg-pink-200
            transform hover:-translate-y-1 border border-slate-700"> 
            <div className="flex items-center space-x-4">
              <links.icon className="w-6 h-6 text-black"/>
              <span>{links.name}</span>
            </div>
            </a>

          </li>
        ))}
      </ul>
    </main>
    </div>
    <footer className="mt-10 text-center text-white text-sm">
        <p>Desenvolvido com React.js, Typescript e Tailwind CSS</p>
      </footer>
    </div>
  
);
}