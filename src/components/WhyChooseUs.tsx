import React from "react";
import { Users, ShieldCheck, Zap, Receipt } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Authentic Engagement",
        description:
            "No fake accounts or automation – only real people engaging with your posts.",
    },
    {
        icon: ShieldCheck,
        title: "Safe and Secure",
        description:
            "We never require your password, and all actions comply with Instagram's guidelines.",
    },
    {
        icon: Zap,
        title: "Instant Results",
        description:
            "Campaigns start immediately, with engagements rolling in within 60 minutes.",
    },
    {
        icon: Receipt,
        title: "Transparent Pricing",
        description:
            "Pay only for what you need, per post, with no hidden fees.",
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background blobs similar to SocialProofHero but subtler */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black/90 tracking-tight">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                            Ben10Hits
                        </span>{" "}
                        for Instagram Engagement?
                    </h2>
                    <p className="text-lg text-black/70 leading-relaxed">
                        In today's competitive social media landscape, organic Instagram
                        growth is essential. Ben10Hits provides automated social proof
                        through real-time notifications and manual outreach. We connect your
                        content with a private network of verified and organic profiles,
                        delivering high-quality interactions that enhance credibility and
                        visibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                <feature.icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
