'use client';

import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';

export const teamMembers = [
  {
    name: 'Nischal Pokharel',
    role: 'Principal Solicitor / Director',
    bio: `
      <section>
        <h2>About Nischal</h2>
        <p>Nischal is the Principal of Proficient Legal, with a focus on <strong>criminal law</strong>, <strong>family law</strong>, and <strong>immigration law</strong>.</p>
        <br>
        <h3>Education</h3>
        <ul>
          <li>Bachelor of Laws (LLB), Kathmandu School of Law, Nepal</li>
          <li>Master of Laws (LLM), International Law</li>
          <li>Master of Human Rights Law and Policy, University of New South Wales</li>
        </ul>
        <br>
        <h3>Experience</h3>
        <p>Prior to migrating to Australia, Nischal was admitted to practice in Nepal through the Nepal Bar Association, gaining extensive experience across civil and criminal jurisdictions.</p>
        <p>Since relocating to Australia, he has accumulated over 8 years of legal experience, regularly appearing in courts at all levels—from the Local Court through to the Federal Circuit and Family Court of Australia. He is known for his <strong>strategic approach</strong>, <strong>strong advocacy skills</strong>, and <strong>deep commitment</strong> to his clients.</p>
        <br>
        <h3>Leadership</h3>
        <p>At Proficient Legal, Nischal plays a key leadership role in mentoring and supervising junior solicitors, ensuring a high standard of service and professional development within the firm.</p>
        <br>
        <h3>Community & Values</h3>
        <p>Deeply empathetic and community-driven, Nischal is particularly passionate about assisting migrants and international students in navigating the Australian legal system. He has proudly supported clients from Nepal and across the globe and is an active member of Nepali community organisations within Australia.</p>
        <blockquote>"I am dedicated to empowering clients and guiding them through complex legal challenges with empathy and expertise."</blockquote>
        <br>
        <h3>Personal Life</h3>
        <ul>
          <li>Maintains a healthy lifestyle and is a dedicated spiritual practitioner</li>
          <li>Enjoys playing snooker, guitar, travelling, and practising eastern classical singing</li>
        </ul>
      </section>
    `,
    image: '/images/teams/nischal-pokharel.jpg',
  },
  {
    name: 'Steven Stefanic',
    role: 'Principal Director / Director',
    bio: "Bringing strategic leadership and deep legal expertise to drive our firm's vision and client-focused approach.",
    image: '/images/teams/steven-stefanic.jpg',
  },
  {
    name: 'Darren Ho',
    role: 'Solicitor',
    bio: `
      <section>
        <h2>About Darren</h2>
        <h3>Education</h3>
        <ul>
          <li>Bachelor of Laws (LLB), University of the Witwatersrand, South Africa</li>
          <li>Master of Laws (LLM), University of the Witwatersrand, South Africa</li>
        </ul>
        <br>
        <h3>Admissions</h3>
        <ul>
          <li>Attorney, Notary, and Conveyancer, South Africa</li>
          <li>Solicitor, England and Wales</li>
          <li>Solicitor, New South Wales, Australia (admitted 2015)</li>
        </ul>
        <br>
        <h3>Experience</h3>
        <p>Prior to relocating to Australia, Darren built his legal career in South Africa, where he practised as an attorney, notary, and conveyancer with a focus on <strong>property and business law</strong>.</p>
        <br>
        <h3>Migration Story</h3>
        <p>Motivated by personal reasons, Darren made the decision to migrate to Australia and successfully managed the entire migration process on his own. Now an Australian citizen, he draws on his own experience to assist clients in navigating the often complex and emotional journey of migration, and beyond.</p>
        <br>
        <h3>Personal Life</h3>
        <ul>
          <li>Enjoys exploring Australia</li>
          <li>Trains in Brazilian Jiu-Jitsu</li>
          <li>Dedicated to reading and continuous learning</li>
        </ul>
      </section>
    `,
    image: '/images/teams/darren-ho.jpg',
  },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function TeamMemberPage({
  params,
}: {
  params: Promise<{ 'team-member': string }>;
}) {
  const resolvedParams = use(params);
  const memberSlug = resolvedParams['team-member'];
  const member = teamMembers.find((m) => slugify(m.name) === memberSlug);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#f8fafc]">
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4 pt-[152px]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Image section */}
          <motion.div
            className="flex justify-center md:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-[#6366f1] to-[#60a5fa] p-1 shadow-xl">
              <div className="rounded-full overflow-hidden w-full h-full bg-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="rounded-full shadow-lg"
                  priority
                  suppressHydrationWarning={true}
                />
              </div>
            </div>
          </motion.div>
          {/* Details section */}
          <motion.div
            className="md:col-span-2 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          >
            <motion.h1
              className="text-4xl font-extrabold mb-2 text-center md:text-left text-[#1e293b] drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {member.name}
            </motion.h1>
            <motion.h2
              className="text-xl text-[#2563eb] font-semibold mb-4 text-center md:text-left tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {member.role}
            </motion.h2>
            <motion.div
              className="text-gray-700 text-center md:text-left mb-6 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: member.bio }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>
      </div>
      <ContactSection />
    </div>
  );
}
