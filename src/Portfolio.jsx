import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Sahil Chandorkar</h1>
        <p className="text-lg">Full Stack Web Developer | AI Enthusiast | Tech Explorer</p>
      </header>

      <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">🚀 Projects</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
      <h3 className="text-xl font-bold">Travel Sarathi</h3>
      <p className="mt-2 text-sm">
        AI-powered Mumbai transport app combining trains, buses, metros with unified digital ticketing and real-time tracking.
      </p>
      {/* <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a> */}
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
      <h3 className="text-xl font-bold">Motionity</h3>
      <p className="mt-2 text-sm">
        An intuitive AI tool to generate custom videos using text prompts, voice input, and images.
      </p>
      {/* <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a> */}
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
      <h3 className="text-xl font-bold">Medwise</h3>
      <p className="mt-2 text-sm">
        Smart assistant analyzing symptoms and X-rays to provide diagnosis, risk scoring, and guidance for doctors.
      </p>
      {/* <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a> */}
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
      <h3 className="text-xl font-bold">Singly</h3>
      <p className="mt-2 text-sm">
        AI-powered Indian Sign Language interpreter converting real-time webcam gestures into English text using computer vision.
      </p>
      {/* <a href="#" className="text-blue-500 mt-2 inline-block">View Project</a> */}
    </div>
  </div>
</section>


<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">🛠️ Skills</h2>
  <ul className="flex flex-wrap gap-4">
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Python</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">JavaScript</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Java</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">React</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Bootstrap</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Express</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Git</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">GitHub</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">VS Code</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">IntelliJ IDEA</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">SQL</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">MongoDB</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Teamwork</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Time Management</li>
    <li className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full">Active Listening</li>
  </ul>
</section>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📄 Resume</h2>
        <a href="./Resume.pdf" className="text-blue-500">Download Resume</a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📬 Contact</h2>
        <p>Email: <a href="mailto:chandorkarsahil1@gmail.com" className="text-blue-500">chandorkarsahil1@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/CS21204" className="text-blue-500">CS21204</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sahil-chandorkar-717766262/" className="text-blue-500">/Sahil Chandorkar</a></p>
      </section>
    </div>
  );
}