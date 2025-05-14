import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">APNAपन – Your 2nd Family</h1>
        <p className="mt-2">
          Combating Loneliness & Mental Health Challenges in India
        </p>
      </header>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="mb-4">
          One in every two people will develop a mental health disorder in their
          lifetime. In India, 1 in 20 has suffered from depressive disorders.
          Suicide rates are rising.
        </p>
        <p className="mb-4">
          Our survey of 150+ people found many feel depressed but avoid therapy
          due to cost. A solution is urgently needed — affordable, accessible,
          and community-driven.
        </p>
      </section>

      <section className="bg-gray-100 p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Introducing: APNAपन</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>🤖 AI-Powered 24/7 Emotional Chatbot</li>
          <li>🧑‍🤝‍🧑 Peer Support & Group Therapy</li>
          <li>💰 Affordable 1-on-1 Therapy</li>
          <li>🎨 Skill Development & Hobby Classes</li>
          <li>🧘 Meditation, Journaling & Wellness</li>
          <li>🌍 Multilingual Support</li>
          <li>🚨 Emergency Helpline Integration</li>
        </ul>
      </section>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Execution Strategy</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Phase 1:</strong> Digital launch in metros
          </li>
          <li>
            <strong>Phase 2:</strong> Tier 2/3 cities with local languages
          </li>
          <li>
            <strong>Phase 3:</strong> Offline Wellness Centers
          </li>
          <li>
            <strong>Phase 4:</strong> Global Expansion via AI & VR
          </li>
        </ol>
      </section>

      <section className="bg-gray-100 p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Revenue Model</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Freemium Model: 45-day free, then ₹199/month</li>
          <li>Therapy Sessions: ₹499–₹799/session</li>
          <li>Corporate & College Partnerships</li>
          <li>CSR NGO Collaborations</li>
        </ul>
      </section>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why We Will Succeed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Holistic: Therapy + Community + Skill-building</li>
          <li>Affordable & Multilingual</li>
          <li>Real-World + Tech-Driven Support</li>
          <li>Competitors lack offline or community approach</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Be a part of this change</h2>
        <p className="mb-4">
          APNAपन is not just an app — it’s a movement. Help us build a mentally
          stronger India.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition"
        >
          Book Consultation with Doctor
        </button>
      </section>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 shadow-xl">
            <Dialog.Title className="text-xl font-semibold mb-2">
              Book a Consultation
            </Dialog.Title>
            <p className="mb-4 text-sm">
              Fill your details and we'll connect you with a mental health
              expert.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Describe your issue"
                className="w-full border p-2 rounded"
                rows="4"
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  Submit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-500 mt-4 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
