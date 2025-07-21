# CVision

CVision is a smart resume analysis and feedback platform powered by AI. It helps job seekers improve their resumes by providing actionable feedback, ATS (Applicant Tracking System) scores, and detailed suggestions for enhancement.

---

## Features

- **Resume Upload:** Easily upload your resume in PDF format.
- **AI-Powered Feedback:** Get detailed feedback on tone, style, content, structure, and skills.
- **ATS Score:** See how well your resume performs against Applicant Tracking Systems.
- **Score Badges & Gauges:** Visual indicators for resume strength.
- **Resume Gallery:** Track and review all your uploaded resumes.
- **Authentication:** Secure login/logout for personalized experience.
- **Data Storage:** Resumes and feedback are securely stored and retrievable.

---

## Usage

1. **Sign In:** Log in to your account to access personalized features.
2. **Upload Resume:** Go to the upload page and submit your resume along with job details.
3. **Get Feedback:** Receive instant AI-powered feedback and ATS score.
4. **Review Submissions:** Track all your resumes and feedback on the home page.
5. **Improve:** Apply suggestions to enhance your resume and re-upload for better scores.

---

## Use Cases

- **Job Seekers:** Improve resume quality and increase chances of passing ATS filters.
- **Students:** Get guidance on resume writing for internships and jobs.
- **Career Coaches:** Use feedback to help clients optimize their resumes.
- **Recruiters:** Evaluate candidate resumes for ATS compatibility.

---

## Data Flow

1. **User Authentication:**

   - User logs in via `/auth` route.
   - Auth state managed globally.

2. **Resume Upload:**

   - User uploads PDF via `/upload`.
   - PDF is converted to image for preview.
   - Resume and job details are stored in KV storage.

3. **AI Feedback:**

   - Resume is sent to AI for analysis.
   - Feedback is parsed and stored.

4. **Resume Review:**

   - Home page (`/`) lists all resumes.
   - Each resume links to `/resume/:id` for detailed feedback.

5. **Feedback Display:**
   - Summary, ATS score, and detailed tips shown using custom components.

---

## Routes Overview

| Route         | Purpose                                 |
| ------------- | --------------------------------------- |
| `/`           | Home page, resume gallery & feedback    |
| `/auth`       | Login/Logout authentication             |
| `/upload`     | Upload new resume and job details       |
| `/resume/:id` | Detailed feedback for a specific resume |
| `/wipe`       | Wipe all stored data (admin/debug)      |

---

## Getting Started

1. Clone the repository.
2. Install dependencies:  
   `npm install`
3. Start the development server:  
   `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Technologies Used

- React
- Zustand (state management)
- Tailwind CSS
- Puter.js (storage, AI, auth)
- PDF.js (PDF to image conversion)

---

## License

MIT

---

## Contributing

Feel free to open issues or submit pull requests for
