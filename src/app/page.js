"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">AI-Powered Resume Builder</h1>
      <p className="text-lg text-gray-600 mb-6">Create professional resumes with AI-generated suggestions!</p>

      {isSignedIn ? (
        <>
          <p className="text-xl font-semibold mb-4">Welcome, {user.fullName}!</p>
          <Link href="/resume-builder">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Build Your Resume
            </button>
          </Link>
        </>
      ) : (
        <Link href="/sign-in">
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Sign in to Get Started
          </button>
        </Link>
      )}
    </div>
  );
}
