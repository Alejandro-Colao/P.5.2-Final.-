import videoCorporativo from "../assets/videos/video-corporativo.mp4";

const VideoSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Video Corporativo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo la tecnología y la creatividad impulsan la innovación.
          </p>
        </div>

        <div className="">
          <video src={videoCorporativo} autoPlay loop muted />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
