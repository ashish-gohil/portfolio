import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <div className="absolute w-[100vw] h-[100vh] z-0 left-0 top-0 opacity-85">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-fill" // Ensures the video stretches to fit the entire viewport
          style={{
            opacity: 0.8,
          }}
        >
          <source src="/big_video.mp4" type="video/mp4" />
        </video>
      </div>

      <App />
    </>
  </StrictMode>
);
