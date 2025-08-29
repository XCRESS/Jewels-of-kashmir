import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Tour() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    const places = [
        {
            name: "Gulmarg",
            path: "/tour/gulmarg",
            img: "/images/gulmarg.jpg", // replace with your asset path
            blurb:
                "Snow-kissed meadows, pine forests, and the iconic Gulmarg Gondola. Perfect for skiing in winter and lush hikes in summer.",
            highlights: ["Gondola Ride", "Skiing", "Apharwat Peak"],
            rating: 4.8,
            days: "2–3 days ideal",
        },
        {
            name: "Pahalgam",
            path: "/tour/pahalgam",
            img: "/images/pahalgam.jpg",
            blurb:
                "Riverside charm along the Lidder, verdant valleys, and jaw-dropping trails to Betaab & Aru valleys.",
            highlights: ["Lidder River", "Betaab Valley", "Aru Valley"],
            rating: 4.7,
            days: "2 days ideal",
        },
        {
            name: "Sonmarg",
            path: "/tour/sonmarg",
            img: "/images/sonmarg.jpg",
            blurb:
                "‘Meadow of Gold’ with glaciers, turquoise streams, and routes that open the door to Ladakh.",
            highlights: ["Thajiwas Glacier", "Zoji La", "River Rafting"],
            rating: 4.6,
            days: "1–2 days ideal",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/kashmir-hero.jpg" // replace with your asset path
                        alt="Kashmir mountains and lake"
                        className="h-72 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="relative z-10 mx-auto flex h-72 max-w-6xl items-end px-4 pb-8 sm:px-6 lg:px-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white sm:text-4xl">
                            Explore Kashmir
                        </h1>
                        <p className="mt-2 max-w-2xl text-white/90">
                            Find detailed guides, highlights, and travel tips for the Valley’s
                            most-loved destinations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Select */}
            <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row">
                    <div className="text-center sm:text-left">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Start your journey
                        </h2>
                        <p className="text-sm text-gray-500">
                            Jump straight to a detailed page.
                        </p>
                    </div>
                    <div className="flex w-full items-center gap-3 sm:w-auto">
                        <select
                            onChange={(e) => e.target.value && navigate(e.target.value)}
                            defaultValue=""
                            className="w-full cursor-pointer rounded-full border border-gray-200 px-4 py-2 text-gray-700 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 sm:w-64"
                        >
                            <option value="" disabled>
                                Choose a tourist place
                            </option>
                            {places.map((p) => (
                                <option key={p.name} value={p.path}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                        <Link
                            to={places[0].path}
                            className="hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 sm:inline-block"
                        >
                            Explore
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {places.map((p) => (
                        <article
                            key={p.name}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
                        >
                            <div className="relative h-52 w-full">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                                    ⭐ {p.rating}
                                </div>
                                <h3 className="absolute bottom-3 left-3 text-xl font-bold text-white drop-shadow">
                                    {p.name}
                                </h3>
                            </div>
                            <div className="space-y-4 p-4">
                                <p className="text-sm text-gray-600">{p.blurb}</p>

                                <div className="flex flex-wrap gap-2">
                                    {p.highlights.map((h) => (
                                        <span
                                            key={h}
                                            className="rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{p.days}</span>
                                    <Link
                                        to={p.path}
                                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105"
                                    >
                                        View Guide →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Info strip */}
            <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                        <h4 className="text-sm font-semibold text-gray-800">Best Season</h4>
                        <p className="mt-1 text-sm text-gray-600">
                            Mar–Jun (pleasant), Dec–Feb (snow in Gulmarg).
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                        <h4 className="text-sm font-semibold text-gray-800">Top Activities</h4>
                        <p className="mt-1 text-sm text-gray-600">
                            Gondola rides, river walks, glacier viewpoints, skiing.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                        <h4 className="text-sm font-semibold text-gray-800">Quick Tips</h4>
                        <p className="mt-1 text-sm text-gray-600">
                            Layered clothing, early start for queues, pre-book permits/tickets.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <h3 className="text-lg font-bold text-gray-800">FAQs</h3>
                    <div className="mt-4 divide-y divide-gray-100">
                        {[
                            {
                                q: "How many days are enough to cover these three places?",
                                a: "Plan 5–6 days for a relaxed trip covering Gulmarg, Pahalgam, and Sonmarg with buffer time.",
                            },
                            {
                                q: "Do I need to pre-book the Gulmarg Gondola?",
                                a: "Highly recommended in peak season to avoid long queues and secure preferred time slots.",
                            },
                            {
                                q: "Are these routes family-friendly?",
                                a: "Yes. Choose moderate trails and check weather. Carry essentials for kids and seniors.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="py-3">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="flex w-full items-center justify-between text-left"
                                >
                                    <span className="font-medium text-gray-800">{item.q}</span>
                                    <span className="text-gray-400">
                                        {openFaq === idx ? "−" : "+"}
                                    </span>
                                </button>
                                {openFaq === idx && (
                                    <p className="mt-2 text-sm text-gray-600">{item.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
