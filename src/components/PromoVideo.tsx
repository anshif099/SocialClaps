import React, { useEffect, useRef } from 'react';

const PromoVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.play().catch((error) => {
                            console.log("Autoplay prevented:", error);
                        });
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.5 } // Play when 50% of the video is visible
        );

        observer.observe(videoElement);

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See It In Action</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Watch how our platform helps you grow your social media presence organically.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-5xl mt-12 overflow-hidden rounded-xl border bg-gray-100 shadow-xl">
                    <video
                        ref={videoRef}
                        className="w-full h-auto"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        poster="/placeholder.svg"
                    >
                        <source src="/promo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default PromoVideo;
