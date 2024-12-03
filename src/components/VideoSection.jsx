import { motion } from "framer-motion";

export default function VideoSection() {
  function hideSkeleton(event) {
    const skeleton = document.querySelector(".skeleton");
    const video = event.target;

    skeleton.style.display = "none"; // Oculta el skeleton
    video.style.display = "block"; // Muestra el video
  }

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="section2 overflow-hidden z-50"
    >
      <div className="video-container">
        <div className="skeleton"></div>
        <motion.video
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="/section 2.mp4"
          className="video"
          loop
          muted
          autoPlay
          onLoadedData={hideSkeleton}
        ></motion.video>
      </div>
    </motion.section>
  );
}
