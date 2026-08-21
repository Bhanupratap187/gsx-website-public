import type { PageIntro, ProseSection } from "./types";

export const PRIVACY_POLICY_INTRO = {
  kicker: "Legal",
  title: "Privacy Policy",
  lede: "How GymSciencX collects, uses and discloses information when gym operators, members, trainers and other users access the GSX Services.",
  updated: "Last updated: May 1, 2026",
  metaTitle: "Privacy Policy",
  metaDescription:
    "How GymSciencX collects, uses, shares and retains personal information across gyms, members, trainers and partners.",
} as const satisfies PageIntro;

export const PRIVACY_POLICY_PREAMBLE = [
  "Welcome to GymSciencX (“GSX”), an AI-powered gym management platform owned and operated by GymSciencX Inc. (referred to in this Privacy Policy as “GymSciencX,” “GSX,” “us,” or “we”). This Privacy Policy describes how we collect, use, and disclose information when gym operators, members, trainers, and other users (collectively, “Users”) access or use the GymSciencX platform, mobile application, and related services (together, the “GSX Services”).",
  "We will inform you of material updates to this Privacy Policy by email and/or via the GSX Services. We encourage you to periodically review this Privacy Policy. Your continued use of the GSX Services constitutes your agreement to this Privacy Policy and any updates.",
] as const;

export const PRIVACY_POLICY_SECTIONS = [
  {
    heading: "1. Personal information we collect",
    blocks: [
      "“Personal Information” means any information about an individual from which that person can be identified. It does not include anonymized or aggregated data where the identity has been removed.",
      "Personal Information we may collect includes:",
      {
        list: [
          {
            term: "Account information.",
            detail:
              "To create a GSX account, we collect information such as your name, email address, password, phone number, date of birth, gender, profile photo, and your gym or studio affiliation. Gym operators may also provide business name, address, tax ID, and bank account details for billing and payouts.",
          },
          {
            term: "Health and fitness data.",
            detail:
              "As part of providing AI-powered fitness management, we may collect fitness goals, workout history, class attendance records, membership status, biometric data (where you explicitly provide it), and other non-medical information related to your fitness activity.",
          },
          {
            term: "Marketing and communications data.",
            detail:
              "We collect communication preferences, survey responses, promotional interactions, and support inquiries you submit through the GSX Services.",
          },
          {
            term: "Technical data.",
            detail:
              "We automatically collect technical information such as your IP address, device identifiers, browser type, operating system, time zone, and app usage metadata when you access the GSX Services.",
          },
          {
            term: "Usage data.",
            detail:
              "We collect data about how you interact with the GSX Services, including class bookings, check-in records, payment history, messages exchanged through the platform, features accessed, and AI-generated recommendations or insights generated in connection with your account.",
          },
          {
            term: "Location data.",
            detail:
              "If you enable location services, we may collect precise or approximate location data to support features such as gym check-ins, geofenced access control (Wi-Fi auto-login), and finding nearby studios.",
          },
          {
            term: "Third-party linked accounts.",
            detail:
              "GSX may allow you to connect third-party services such as ClassPass, HeadsUp Health, payment processors (e.g., Cliq, Razorpay, Stripe), or wearable device platforms. When you connect such services, we may receive Personal Information shared by those third parties under their own privacy policies.",
          },
          {
            term: "Information from gym operators.",
            detail:
              "If you are a gym member, the gym or studio you are associated with may provide us with your Personal Information as part of their use of the GSX platform. In such cases, GSX acts as a data processor on behalf of the gym operator.",
          },
        ],
      },
    ],
  },
  {
    heading: "2. Sensitive personal information",
    blocks: [
      "We ask that you do not disclose sensitive Personal Information (such as racial or ethnic origin, political opinions, religious beliefs, genetic data, criminal history, or detailed medical or health conditions) through the GSX Services, except where explicitly required or consented to. Health and fitness data you voluntarily provide (e.g., injury notes, fitness limitations) is treated with heightened care and used only to deliver and improve your experience.",
    ],
  },
  {
    heading: "3. How we use your personal information",
    blocks: [
      "We use the Personal Information we collect for legitimate business purposes, including:",
      {
        list: [
          {
            term: "To provide and maintain the GSX Services.",
            detail:
              "We use your information to operate the platform, manage memberships, process class bookings and payments, enable check-ins (including geofenced and Wi-Fi-based access), and deliver AI-powered features such as member retention recommendations, automated scheduling, and performance analytics.",
          },
          {
            term: "To personalize your experience.",
            detail:
              "We use your data to tailor the GSX platform to your role (gym owner, trainer, or member), surface relevant classes and recommendations, and deliver AI-generated insights aligned with your fitness and operational goals.",
          },
          {
            term: "To improve and develop the GSX Services.",
            detail:
              "We analyze usage patterns and feedback to improve existing features, develop new capabilities, and refine our AI models. This may include using aggregated or de-identified data for research and product development.",
          },
          {
            term: "Communication.",
            detail:
              "We use your information to send transactional messages (booking confirmations, payment receipts, access notifications), product updates, class reminders, promotional communications, and support responses.",
          },
          {
            term: "AI-powered operations.",
            detail:
              "GSX uses artificial intelligence to power features including member retention scoring, automated class recommendations, attendance pattern analysis, and voice-based interactions. These AI features process your data to generate insights that help gym operators run their businesses more effectively.",
          },
          {
            term: "Marketing.",
            detail:
              "We may use your information to market the GSX platform and its features. You may opt out of marketing communications at any time (see section 8).",
          },
          {
            term: "Safety, security, and compliance.",
            detail:
              "We use your information to verify identities, detect fraud, enforce our Terms of Service, respond to legal requests, and maintain the security and integrity of the GSX platform.",
          },
        ],
      },
    ],
  },
  {
    heading: "4. Sharing and disclosure of information",
    blocks: [
      "We do not sell your Personal Information. We may share your information in the following circumstances:",
      {
        list: [
          {
            term: "Gym operators and trainers.",
            detail:
              "If you are a gym member, we share your information with the gym or studio operator and trainers associated with your account to facilitate class management, check-ins, and communication.",
          },
          {
            term: "Third-party service providers.",
            detail:
              "We share data with vendors who support the operation of GSX, including cloud hosting, data analytics, payment processing, SMS/communication infrastructure, and AI model providers. These providers are contractually required to protect your data.",
          },
          {
            term: "Integration partners.",
            detail:
              "When you connect third-party integrations (e.g., ClassPass, HeadsUp Health, Adentro, Cliq, Razorpay), we share relevant data with those partners to enable the connected functionality.",
          },
          {
            term: "Business transfers.",
            detail:
              "In the event of a merger, acquisition, sale, or reorganization of all or part of our business, your Personal Information may be transferred as part of that transaction.",
          },
          {
            term: "Legal obligations.",
            detail:
              "We may disclose your information when required by law, subpoena, court order, or to protect the rights, safety, or property of GSX, our users, or the public.",
          },
          {
            term: "With your consent.",
            detail:
              "We may share your information in other circumstances with your explicit consent.",
          },
        ],
      },
      "GSX may aggregate and anonymize data from users to publish insights, benchmarks, or reports about the fitness industry. Such aggregated data does not identify individual users.",
    ],
  },
  {
    heading: "5. Data retention",
    blocks: [
      "We retain your Personal Information for as long as your account is active or as needed to provide the GSX Services, comply with legal obligations, resolve disputes, and enforce our agreements. Gym operators may have their own data retention obligations that govern how member data is stored within their use of the GSX platform.",
      "Upon account termination or deletion request, we will delete or anonymize your Personal Information within a reasonable timeframe, except where retention is required by applicable law.",
    ],
  },
  {
    heading: "6. Your privacy rights",
    blocks: [
      { heading: "For California residents (CCPA)" },
      "California residents have the right to know the categories of Personal Information collected, used, and disclosed; the right to delete Personal Information; and the right to non-discrimination for exercising privacy rights. To submit a request, contact us at privacy@gymsciencx.com.",
      { heading: "For other U.S. residents (CO, CT, UT, VA)" },
      "Residents of Colorado, Connecticut, Utah, and Virginia have rights to access, delete, and correct their Personal Information, and to opt out of targeted advertising and the sale of personal data. Note that we do not sell Personal Information.",
      { heading: "Exercising your rights" },
      "To exercise any of the above rights, please email us at support@gymsciencx.com. We may need to verify your identity before processing your request. We will respond within the timeframe required by applicable law.",
    ],
  },
  {
    heading: "7. Security",
    blocks: [
      {
        list: [
          { detail: "Encryption of data in transit using TLS/HTTPS." },
          { detail: "Encryption of sensitive data at rest." },
          {
            detail:
              "Role-based access controls limiting data access to authorized personnel only.",
          },
          { detail: "Regular security assessments and vulnerability testing." },
          { detail: "Secure cloud infrastructure hosted on DigitalOcean." },
        ],
      },
      "While we strive to protect your data, no system is completely secure. We cannot guarantee that unauthorized access, data breaches, or data loss will never occur. In the event of a data breach affecting your rights, we will notify you as required by applicable law.",
    ],
  },
  {
    heading: "8. Marketing communications",
    blocks: [
      "You may receive marketing communications from us if you have opted in or not opted out. You can unsubscribe at any time by:",
      {
        list: [
          { detail: "Clicking the unsubscribe link in any marketing email." },
          { detail: "Contacting us at support@gymsciencx.com." },
        ],
      },
      "Opting out of marketing communications does not affect transactional messages such as booking confirmations, payment receipts, or security alerts. Opting out from GSX marketing does not affect communications from gym operators or their third-party providers.",
    ],
  },
  {
    heading: "9. International data transfers",
    blocks: [
      "GymSciencX is operated by Quibble AI Private Limited, incorporated in India. Your Personal Information may be stored and processed in India and, where we use cloud infrastructure or third-party service providers, in other countries. We take appropriate measures to ensure that cross-border transfers of Personal Information comply with applicable data protection laws, including through contractual safeguards with our service providers.",
    ],
  },
  {
    heading: "10. Children's privacy",
    blocks: [
      "The GSX Services are not directed to individuals under the age of 18. We do not knowingly collect Personal Information from minors. If we learn that a user is under 18, we will take steps to remove their information and restrict their access to the platform. If you believe a minor has provided us with Personal Information, please contact us at privacy@gymsciencx.com.",
    ],
  },
  {
    heading: "11. Third-party services and integrations",
    blocks: [
      "The GSX platform integrates with third-party services (e.g., ClassPass, HeadsUp Health, Adentro, Cliq, Razorpay, Twilio). This Privacy Policy does not cover the privacy practices of those third parties. We encourage you to review their privacy policies before connecting them to your GSX account. GSX is not responsible for the data practices of third-party services.",
    ],
  },
  {
    heading: "12. AI and automated decision-making",
    blocks: [
      "GSX uses AI agents and automated processing to deliver features such as member retention scoring, class recommendations, attendance analytics, and voice-based interactions. Where these automated processes produce decisions that significantly affect you (e.g., access restrictions or flagged activity), you may contact us to request human review or further information about the basis for such decisions.",
      "Our AI systems are designed to process data only for legitimate operational purposes and are not used to make employment, credit, or other high-stakes decisions without appropriate human oversight.",
    ],
  },
  {
    heading: "13. Updates to this Privacy Policy",
    blocks: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes via email and/or a prominent notice within the GSX platform prior to the change becoming effective. Your continued use of the GSX Services after the effective date of an updated Privacy Policy constitutes your acceptance of the changes.",
    ],
  },
  {
    heading: "14. Contact us",
    blocks: [
      "GymSciencX / Quibble AI Private Limited",
      {
        contacts: [
          {
            label: "Email",
            value: "support@gymsciencx.com",
            href: "mailto:support@gymsciencx.com",
          },
          {
            label: "Support",
            value: "support@gymsciencx.com",
            href: "mailto:support@gymsciencx.com",
          },
          {
            label: "Website",
            value: "www.gymsciencx.com",
            href: "https://www.gymsciencx.com",
          },
        ],
      },
      {
        address: {
          label: "Or you can write to us at:",
          lines: [
            "GYMSCIENCX INC",
            "30025 ALICIA PKWY NUM 7016",
            "LAGUNA NIGUEL, CA 92677",
          ],
        },
      },
      "We are committed to working with you to resolve any privacy concerns in a fair and timely manner.",
    ],
  },
] as const satisfies readonly ProseSection[];
