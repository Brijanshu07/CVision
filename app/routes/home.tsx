import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
// import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import {  Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "Smart feedback for your dream job" },
    { rel: "icon", href: "/favicon.ico" },
  ];
}

export default function Home() {

  const { auth, fs, kv } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState('')
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loadingResumes, setLoadingResumes] = useState(false);

  const navigate = useNavigate();
  useEffect(()=> {
      if(!auth.isAuthenticated) navigate('/auth?next=/');
    },[auth.isAuthenticated])

    useEffect(()=> {
      // console.log('hello')
      const loadResumes = async() => {
        setLoadingResumes(true);

        const resumes = (await kv.list('resume:*', true)) as KVItem[];

        const parsedResumes = resumes?.map((resume) => (
          JSON.parse(resume.value) as Resume
        ))
        // console.log('Parsed Resumes', parsedResumes)
        setResumes(parsedResumes || []);
        setLoadingResumes(false);
      }
      loadResumes();
    },[])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    
    
    
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>

        

        {!loadingResumes && resumes?.length===0 ? (
          <h2>No resumes found, upload your resume to get feedback.</h2>
        ): (
          <h2>
            Review your submissions and check AI-powered feedback.
          </h2>
        )}
      </div>
      {
        loadingResumes && (
          <div className="flex flex-col items-center justify-between">
            <img src="/images/resume-scan-2.gif" alt="" className="w-[200px]" />
          </div>
        )
      }
    
    {!loadingResumes && resumes.length>0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}

    {
      !loadingResumes && resumes?.length===0 && (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link to='/upload' className="primary-button w-fit text-xl font-semibold" >Upload Resume</Link>
        </div>
      )
    }
    
    </section>
  </main>;
}
