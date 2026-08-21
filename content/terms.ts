import type { PageIntro, ProseSection } from "./types";

export const TERMS_INTRO = {
  kicker: "Legal",
  title: "Terms of Service",
  lede: "The User Terms governing access to the GSX App and GSX Services by members, gym operators and trainers.",
  updated: "Effective date: May 1, 2026",
  metaTitle: "Terms of Service",
  metaDescription:
    "The User Terms governing access to the GymSciencX platform and services by members, gyms and trainers.",
} as const satisfies PageIntro;

export const TERMS_PREAMBLE = [
  "Welcome to GymSciencX (“GSX”), an AI-powered gym management platform owned and operated by GymSciencX Inc. (“GymSciencX,” “GSX,” “us,” or “we”). GSX facilitates Gym Operators (“Gyms”) and their Trainers (“Trainers”) to better communicate with and manage their interactions with you as their member or customer (“you” or “Member”), and to help you find, book, and make the most of their fitness offerings. Beyond the services provided on behalf of Gyms and Trainers, GSX also provides services directly to you — including AI-powered features, class reservations, check-in management, and community tools — that extend beyond any single Gym.",
] as const;

export const TERMS_SECTIONS = [
  {
    heading: "1. The service relationship between you, GSX, and Gyms",
    blocks: [
      "You may have downloaded and be using the GymSciencX platform (the “GSX App”) and related offerings (together with the GSX App, the “GSX Services”) because you found us on your own, or were invited by a Gym, Trainer, or friend. As a result, you may be using the GSX App to:",
      {
        list: [
          {
            term: "Manage your gym memberships and bookings.",
            detail:
              "GSX operates as an intermediary service provider between you and Gyms and their Trainers (including their vendors and booking platforms), allowing you to view your booking and attendance history, use existing memberships, series passes, gift cards, or account credits, and make new bookings and purchases.",
          },
          {
            term: "Use AI-powered fitness tools.",
            detail:
              "Access AI-generated class recommendations, retention insights, attendance tracking, check-in features (including Wi-Fi and geofenced auto-login), and other intelligent features designed to enhance your fitness experience.",
          },
          {
            term: "Connect with the GSX community.",
            detail:
              "Use social and communication tools within the GSX Services to interact with other members, Trainers, and Gyms.",
          },
          {
            term: "Access third-party offerings.",
            detail:
              "Discover and engage with third-party services and integrations (such as ClassPass, HeadsUp Health, or wearable device platforms) made available through the GSX App.",
          },
        ],
      },
      "When you use the GSX App to access a Gym's offerings, that Gym is a GSX customer and has authorized GSX and you to use the GSX App to communicate with and otherwise interact with that Gym and its Trainers. Our Gyms and their vendors (collectively, “Vendors”) and Trainers grant GSX the right to use and/or share information they have provided or we have collected through your use of the GSX App (“User Data”). You acknowledge that in certain instances, User Data may be owned or controlled by the Gym, and our agreement with such Gym may give them choices and control over how that User Data is processed, shared, or used — including provisioning or deprovisioning access, enabling or disabling integrations, managing retention and export settings, or deleting certain User Data.",
      {
        strong:
          "AS BETWEEN GSX AND ANY OF ITS GYMS, YOU AGREE THAT IT IS SOLELY THE GYM'S RESPONSIBILITY TO: (A) INFORM YOU OF ANY RELEVANT TERMS, PRIVACY POLICIES, AND PRACTICES, INCLUDING HOW THE GYM (OR ITS VENDORS OR TRAINERS) MAY USE YOUR USER DATA; (B) OBTAIN ANY RIGHTS, PERMISSIONS OR CONSENTS FROM YOU NECESSARY FOR THEIR (AND OUR) LAWFUL USE OF YOUR USER DATA; (C) ENSURE THAT THE STORAGE, TRANSFER OR PROCESSING OF YOUR USER DATA BY SUCH GYM, ITS TRAINERS, AND ANY OF ITS VENDORS IS LAWFUL; AND (D) RESPOND TO AND RESOLVE ANY DISPUTE YOU MAY HAVE RELATING TO SUCH GYM'S USE OF YOUR USER DATA OR THE GYM'S SERVICES OR OFFERINGS. GSX MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND TO YOU RELATING TO ANY GYM'S, TRAINER'S, OR VENDOR'S OFFERINGS.",
      },
      "GSX may also provide certain functionalities and services that span multiple Gyms or remain accessible after you have ended your association with a Gym. These User Terms and our Privacy Policy will apply when GSX is in control of those functionalities “above and beyond” what any individual Gym enables. GSX may, in its sole discretion, offer trial or beta services from time to time, provided “AS IS” with no warranties. GSX may discontinue any trial or beta services at any time without notice or liability.",
      "The availability of the GSX App is dependent on the third-party platform through which you received it (e.g., the Apple App Store or Google Play, each an “App Store”). You agree to comply with all applicable third-party terms when using the GSX App, including App Store terms. You acknowledge that App Store operators and their subsidiaries are third-party beneficiaries of these User Terms and may enforce them.",
      "GSX may also feature Third-Party Offerings (via integrations, sponsorship, advertising, or links). Third-Party Offerings are not GSX Services and are not subject to GSX's warranties or service commitments. GSX does not control Third-Party Offerings and will have no liability to you in connection with them. By using any Third-Party Offering, you expressly permit GSX to share your User Data to the extent necessary to enable that offering.",
      {
        strong:
          "IN ALL SUCH INSTANCES, YOUR USE OF ANY GYM'S, TRAINER'S, OR THIRD-PARTY OFFERINGS IS AT YOUR OWN RISK AND IS SUBJECT TO ANY ADDITIONAL TERMS AND POLICIES APPLICABLE TO SUCH OFFERINGS.",
      },
    ],
  },
  {
    heading: "2. Agreements between GSX and you",
    blocks: [
      "You must be eighteen (18) years of age or older to use the GSX Services and must not have been previously suspended or removed from the GSX Services. By using the GSX App and GSX Services, you confirm that you have read, understood, and accepted these User Terms and agree to be legally bound by them.",
      {
        strong:
          "ARBITRATION NOTICE: THESE USER TERMS CONTAIN AN ARBITRATION CLAUSE. YOU AND GSX AGREE THAT DISPUTES BETWEEN US WILL BE RESOLVED BY MANDATORY BINDING ARBITRATION, AND YOU AND GSX WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST US ON AN INDIVIDUAL BASIS; AND (2) YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW OR TO HAVE A JURY TRIAL ON YOUR CLAIMS.",
      },
      "We may, in our sole discretion, make changes to these User Terms, which will become effective when posted to the GSX App or our website at www.gymsciencx.com. If we make material changes, we will notify you via the GSX App and/or other contact methods. Your continued use of the GSX Services after any changes constitutes acceptance of the updated User Terms. If you do not agree with any changes, your sole remedy is to stop using the GSX Services and/or request deletion of your GSX Account by contacting support@gymsciencx.com.",
    ],
  },
  {
    heading: "3. GSX App registration and account activation",
    blocks: [
      "The GSX App allows you to create a universal member profile that enables you to manage memberships, book classes, track attendance, and use AI-powered fitness features across participating Gyms. You must complete registration (“GSX Account”) by providing accurate, current, and complete information as requested.",
      "You must notify GSX immediately of any breach of security or unauthorized use of your GSX Account. Your GSX Account is non-transferable and may not be sold, combined, or otherwise shared with any other person. GSX reserves the right to suspend or terminate your GSX Account if you provide inaccurate, untrue, or incomplete information, or if you use the GSX App for illegal or unethical activities.",
      "You may be able to register through or link a third-party social media account (e.g., Google or Facebook). By doing so, you allow GSX to access such accounts as permitted under the terms governing your use of those platforms. GSX disclaims any liability for personally identifiable information provided to us by such platforms in violation of your privacy settings.",
    ],
  },
  {
    heading: "4. Your authorization of purchases made through the GSX App",
    blocks: [
      "The GSX App may refer you to purchase services from Gyms using third-party payment services (such as Cliq, Razorpay, Stripe, or other payment processors, collectively “Payment Services”). By associating a payment method with your GSX Account and booking services, you authorize a charge to your payment method as necessary to complete the booking (including through the application of account credits, memberships, gift cards, or loyalty points).",
      "In the event you are entitled to a reversal, refund, chargeback, or other adjustment, you will generally need to engage the applicable Gym. If the charge was handled directly by GSX, you authorize GSX to apply a credit to your payment method to accomplish that transaction. Purchases may also be subject to terms and conditions set by the relevant Gym, Payment Service, or card issuer.",
      "GSX may increase fees from time to time upon notice to you through the GSX App. Fees may not include taxes, levies, duties, or similar governmental assessments (“Taxes”). You are responsible for paying all Taxes associated with your purchases and transactions through the GSX Services.",
    ],
  },
  {
    heading: "5. Bookings and service charges",
    blocks: [
      "When you book a session with a Gym, you agree to pay all charges applied by the Gym according to its terms and processed through its Payment Service and/or Vendor(s). In addition, GSX may charge a non-refundable service charge per booking as indicated in the GSX App. All service charges by GSX are non-refundable, except in limited circumstances at GSX's sole discretion, in which case GSX may grant a credit toward a future service charge.",
      "GSX reserves the right to change service fees at any time with prior notice. Fee changes will not affect bookings made before the effective date of the change. Upon receiving a booking confirmation, a contract for the Gym's services is formed directly between you and the Gym. The Gym's cancellation policy and other rules may form part of your contract with the Gym.",
    ],
  },
  {
    heading: "6. AI-powered features and beta services",
    blocks: [
      "GSX provides artificial intelligence features including class recommendations, member retention scoring, attendance analytics, AI check-in systems, and voice-based interactions (collectively, “AI Features”). By using the GSX App, you acknowledge that:",
      {
        list: [
          {
            detail:
              "AI Features are designed to assist Gyms and Members but do not replace professional fitness, medical, or nutritional advice.",
          },
          {
            detail:
              "AI-generated recommendations and insights are based on data you and your Gym provide and may not always be accurate or appropriate for your individual circumstances.",
          },
          {
            detail:
              "GSX may update, modify, or discontinue AI Features at any time.",
          },
        ],
      },
      "From time to time, GSX may offer new or updated beta features (“Beta Features”) at its sole discretion. Beta Features may have associated fees disclosed at the time of use. Beta Features are provided on an “AS IS” basis and may contain errors or inaccuracies. All use of Beta Features is at your sole risk. GSX may discontinue Beta Features at any time without notice or liability.",
    ],
  },
  {
    heading: "7. Restrictions on use",
    blocks: [
      "The GSX App and your GSX Account may only be used where applicable laws permit. By creating a GSX Account, you confirm that you will not use the GSX Services in connection with any of the following:",
      {
        list: [
          {
            detail:
              "Any illegal activity or violation of applicable laws or regulations.",
          },
          {
            detail:
              "Unauthorized access to GSX systems, data, or other users' accounts.",
          },
          {
            detail: "Collecting or harvesting user data without authorization.",
          },
          {
            detail:
              "Uploading or transmitting malware, viruses, or any harmful or disruptive code.",
          },
          { detail: "Direct marketing, unsolicited solicitation, or spam." },
          { detail: "Multi-level marketing or pyramid schemes." },
          {
            detail:
              "Inbound or outbound telemarketing unrelated to the GSX Services.",
          },
          {
            detail: "Adult entertainment, hate content, or drug paraphernalia.",
          },
          {
            detail:
              "Any activity constituting fraud, harassment, or other criminal acts.",
          },
          {
            detail:
              "Building competing products or services using GSX's platform, data, or infrastructure.",
          },
        ],
      },
      "GSX may decline to process any transaction or interaction that violates these User Terms, applicable laws, or that may expose you, other users, Gyms, or GSX to harm. If GSX reasonably suspects that your GSX Account has been used for unauthorized, illegal, or criminal activity, you expressly authorize GSX to share information about you and your account with law enforcement or other governmental authorities as required.",
    ],
  },
  {
    heading: "8. Gym promotions and loyalty programs",
    blocks: [
      "Gyms may offer individual promotions or loyalty programs (“Promotions”) to reward their members. These Promotions may be viewable or manageable through the GSX App. Any Promotion is offered by the Gym, not by GSX. Please contact the Gym directly for questions about any Promotion, including its terms and conditions. Benefits associated with Gym Promotions have no cash value, and a Gym may discontinue its Promotion at any time. GSX may block access to or disable tools related to any Promotion and will have no liability if you are unable to realize a benefit as a result.",
    ],
  },
  {
    heading: "9. Your privacy",
    blocks: [
      "Our Privacy Policy governs how we collect, use, and disclose personal information submitted through the GSX Services. By agreeing to these User Terms, you confirm that you have read, understood, and accepted GSX's Privacy Policy, available at www.gymsciencx.com/privacy-policy. If you have questions about your data, please contact support@gymsciencx.com.",
    ],
  },
  {
    heading: "10. Disclosures and notices",
    blocks: [
      "You acknowledge and agree that GSX may provide disclosures, notices, and other information about your GSX Account to you electronically — by posting them on the GSX App or by emailing the address associated with your GSX Account. Electronic disclosures and notices have the same meaning and effect as written paper copies. You are responsible for keeping your contact information current with GSX.",
    ],
  },
  {
    heading: "11. User content",
    blocks: [
      "The GSX App may require you and other users to submit text, photos, images, fitness preferences, feedback, or other information (“User Content”). For any User Content you upload, you grant GSX and its subsidiaries, affiliates, and successors a worldwide, perpetual, irrevocable, non-exclusive, royalty-free, fully-paid, transferable, and sublicensable right and license to use, reproduce, modify, adapt, publish, translate, distribute, and display that User Content throughout the world in any media, in order to provide and promote the GSX App and GSX's business. You retain all rights in your User Content, subject to the rights granted to GSX in these User Terms.",
      "You alone are responsible for User Content you post. You agree not to upload User Content that:",
      {
        list: [
          {
            detail:
              "Is false, misleading, unlawful, obscene, defamatory, harassing, hateful, or inflammatory.",
          },
          {
            detail:
              "Encourages conduct that would be considered a criminal offense or gives rise to civil liability.",
          },
          {
            detail:
              "Breaches any duty or right of any person or entity, including privacy or publicity rights.",
          },
          {
            detail:
              "Contains corrupted data or any harmful, disruptive, or destructive files.",
          },
          {
            detail:
              "Advertises products or services competitive with GSX's or its partners' products and services.",
          },
          {
            detail:
              "Is otherwise objectionable, restricts any person from using the GSX App, or exposes GSX or users to harm or liability.",
          },
        ],
      },
      "GSX has no obligation to pre-screen User Content but reserves the right to refuse, remove, or disable any User Content at any time and for any reason without notice. If User Content is deleted, it may still exist in backup copies. We retain our license to User Content regardless of any deletion.",
    ],
  },
  {
    heading: "12. Copyright infringement policy",
    blocks: [
      "GSX respects intellectual property rights and complies with the requirements of applicable copyright law. If you believe that content on the GSX Services infringes your copyright, please send a written notice to GSX's designated copyright agent:",
      {
        contacts: [
          { label: "Copyright agent", value: "GymSciencX" },
          {
            label: "Email",
            value: "support@gymsciencx.com",
            href: "mailto:support@gymsciencx.com",
          },
        ],
      },
      "Your notice must include:",
      {
        ordered: [
          "identification of the copyrighted work claimed to be infringed;",
          "identification of the infringing material and its location within the GSX Services;",
          "your contact information;",
          "a statement of good-faith belief that the use is unauthorized;",
          "a statement under penalty of perjury that the information is accurate and you are authorized to act on behalf of the copyright owner; and",
          "your physical or electronic signature.",
        ],
      },
      "When we receive a compliant notice, we will remove the identified material and inform the user who posted it. That user may submit a counter-notice if they believe the removal was erroneous. Upon receipt of a valid counter-notice, we will restore the material within 10 business days unless you inform us that you have filed a court action to restrain the infringing activity.",
    ],
  },
  {
    heading: "13. Termination",
    blocks: [
      "You may cease to use the GSX App at any time.",
      "GSX may terminate these User Terms and your access to the GSX App for any reason or no reason, at any time, including if you: (a) have violated these User Terms or any other agreement with GSX; (b) pose an unacceptable credit or fraud risk to GSX or its Gyms or Vendors; or (c) provide false, incomplete, or misleading information or engage in fraudulent or illegal conduct. GSX may also suspend or terminate the GSX Services at any time if it believes your activity violates these User Terms, infringes intellectual property rights, or violates applicable law.",
      "If your GSX Account is terminated, you agree: (a) to continue to be bound by these User Terms; (b) to immediately stop using the GSX App; (c) that GSX reserves the right to store or delete your information and account data; and (d) that GSX shall not be liable to you or any third party for termination of access or deletion of your account data. Termination does not relieve you of any obligation to pay any fees or costs accrued prior to termination.",
    ],
  },
  {
    heading: "14. License grant to you",
    blocks: [
      "Subject to your compliance with these User Terms, GSX grants you a personal, limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the GSX App on one or more mobile devices that you own or control, and to use the GSX Services in accordance with these User Terms. You will not:",
      {
        list: [
          {
            detail:
              "Modify, copy, or create derivative works based on the GSX App.",
          },
          {
            detail:
              "License, sublicense, sell, resell, rent, lease, transfer, assign, distribute, or otherwise make the GSX App available to any third party.",
          },
          {
            detail: "Reverse engineer or decompile any portion of the GSX App.",
          },
          {
            detail:
              "Access or use the GSX App for competitive analysis or to build competing products or services.",
          },
          {
            detail:
              "Copy any features, functions, integrations, interfaces, or graphics of the GSX App.",
          },
          {
            detail:
              "Otherwise exploit the GSX App in any manner not expressly permitted by these User Terms.",
          },
        ],
      },
    ],
  },
  {
    heading: "15. Ownership",
    blocks: [
      "The GSX App is licensed, not sold. GSX reserves all rights not expressly granted to you in these User Terms. The GSX App is protected by copyright, trade secret, and other intellectual property laws. Quibble AI Private Limited owns the title, copyright, and worldwide intellectual property rights in the GSX App and all copies of the GSX App. These User Terms do not grant you any rights to GSX's trademarks or service marks.",
    ],
  },
  {
    heading: "16. Feedback",
    blocks: [
      "You may choose, or we may invite you, to submit comments or ideas about the GSX App, including suggestions for improvement (“Feedback”). By submitting Feedback, you agree that your disclosure is gratuitous, unsolicited, and without restriction; it will not place GSX under any fiduciary or other obligation; and GSX is free to use the Feedback without any compensation to you, or to disclose it to anyone on a non-confidential basis. GSX has no obligation to review any Feedback or keep it confidential.",
    ],
  },
  {
    heading: "17. Indemnification",
    blocks: [
      "You agree to indemnify, defend, and hold harmless GSX and its affiliates, officers, directors, employees, contractors, agents, and successors (collectively, “GSX Parties”) from and against any and all third-party claims, damages, losses, costs, liabilities, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use or misuse of the GSX App or GSX Services; (b) User Content or other communications or uploads you make in relation to the GSX App; (c) any breach by you of these User Terms; (d) any violation by you of the intellectual property, privacy, or other rights of a third party; or (e) any dispute between you and another party regarding ownership of or access to your User Data or User Content. GSX reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with GSX in asserting any available defenses.",
    ],
  },
  {
    heading: "18. Representations and warranties",
    blocks: [
      "You represent and warrant to GSX that: (a) you are at least eighteen (18) years of age; (b) you are eligible to register and use the GSX App and have the right, power, and ability to enter into and perform under these User Terms; (c) the name identified by you when you registered is your name; (d) you and all transactions initiated by you will comply with all applicable laws and regulations, including applicable tax laws; (e) you will not use the GSX App or GSX Services, directly or indirectly, for any fraudulent undertaking or in any manner so as to interfere with the operation of the GSX App or GSX Services; and (f) your use of the GSX App will be in compliance with these User Terms.",
    ],
  },
  {
    heading: "19. Disclaimers",
    blocks: [
      {
        strong:
          "THE GSX APP AND GSX SERVICES (AND ALL GYM OFFERINGS AND THIRD-PARTY OFFERINGS ACCESSIBLE THEREBY) ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GSX MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, AND SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING WITHOUT LIMITATION ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE WITH RESPECT TO THE GSX APP OR GSX SERVICES. GSX DOES NOT WARRANT THAT YOUR USE OF THE GSX APP OR GSX SERVICES WILL BE SECURE, TIMELY, ERROR-FREE, OR UNINTERRUPTED, OR THAT THE SYSTEMS THAT MAKE THE GSX SERVICES AVAILABLE WILL BE UNINTERRUPTED OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.",
      },
      {
        strong:
          "GSX'S COMMITMENTS AND RESPONSIBILITIES EXTEND ONLY TO THE SPECIFIC FUNCTIONALITY AND FEATURES OF THE GSX APP AND ARE NOT INTENDED TO COVER FITNESS SERVICES AND OFFERINGS PROVIDED BY GYMS, TRAINERS, THEIR VENDORS, OR ANY THIRD-PARTY OFFERINGS. GSX TAKES NO RESPONSIBILITY AND ASSUMES NO LIABILITY FOR ANY CONTENT THAT YOU, ANOTHER USER, OR A THIRD PARTY CREATES, UPLOADS, POSTS, SENDS, RECEIVES, OR STORES ON OR THROUGH THE GSX SERVICES. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES, SO SOME OF THE ABOVE DISCLAIMERS MAY NOT APPLY TO YOU.",
      },
    ],
  },
  {
    heading: "20. Limitations of liability",
    blocks: [
      {
        strong:
          "TO THE MAXIMUM EXTENT PERMITTED BY LAW, GSX WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR MULTIPLE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE GSX APP OR GSX SERVICES; (B) THE CONDUCT OR CONTENT OF OTHER USERS OR THIRD PARTIES ON OR THROUGH THE SERVICES; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR CONTENT, EVEN IF GSX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE GSX PARTIES' AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE SUBSCRIPTION FEES ACTUALLY PAID BY YOU DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE OF THE INCIDENT. ALL LIMITATIONS OF LIABILITY APPLY WITH RESPECT TO BOTH GSX AND THE GSX PARTIES.",
      },
    ],
  },
  {
    heading: "21. Health and fitness disclaimer",
    blocks: [
      {
        strong:
          "YOU UNDERSTAND THAT GYMSCIENCX IS NOT A GYMNASIUM, HEALTH CLUB, FITNESS STUDIO, OR SIMILAR ESTABLISHMENT, AND THAT ALL CLASSES AND FITNESS SERVICES ARE OPERATED AND DELIVERED BY THE APPLICABLE GYM AND NOT BY GSX. GSX IS NOT RESPONSIBLE FOR THE QUALITY, SAFETY, OR APPROPRIATENESS OF ANY CLASS, PROGRAM, OR FITNESS SERVICE PROVIDED BY A GYM OR THIRD PARTY.",
      },
      {
        strong:
          "YOU UNDERSTAND THAT THERE ARE INHERENT RISKS AND DANGERS IN EXERCISING AND THAT CLASSES AND PROGRAMS AVAILABLE THROUGH THE GSX APP OFFER A RANGE OF ACTIVITY AND INTENSITY LEVELS. BY USING THE GSX SERVICES, YOU ACKNOWLEDGE THAT YOU ARE AWARE OF THESE RISKS — INCLUDING PROPERTY DAMAGE, ILLNESS, LOSS, BODILY INJURY, OR DEATH — AND THAT YOU SPECIFICALLY ASSUME THE RISK OF INJURY OR HARM.",
      },
      {
        strong:
          "IT IS YOUR RESPONSIBILITY TO CONSULT WITH YOUR PHYSICIAN OR OTHER HEALTHCARE PROFESSIONAL PRIOR TO USING THE GSX SERVICES OR ATTENDING ANY CLASS AND TO DETERMINE IF AND HOW PARTICIPATING IS APPROPRIATE FOR YOU. THE GSX APP AND GSX SERVICES OFFER FITNESS AND RELATED INFORMATION FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY AND ARE NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. DO NOT DISREGARD, AVOID, OR DELAY OBTAINING MEDICAL ADVICE BECAUSE OF SOMETHING YOU READ OR HEARD THROUGH THE GSX APP OR GSX SERVICES. USE OF ANY CONTENT, RECOMMENDATIONS, OR INFORMATION PROVIDED THROUGH GSX IS SOLELY AT YOUR OWN RISK.",
      },
      {
        strong:
          "TO THE FULLEST EXTENT PERMITTED BY LAW, YOU RELEASE, INDEMNIFY, AND HOLD HARMLESS (A) GSX, ITS INVESTORS, SUBSIDIARIES, AND AFFILIATED ENTITIES AND (B) THE GYMS YOU ACCESS VIA THE GSX APP OR GSX SERVICES AND THEIR RESPECTIVE AFFILIATED ENTITIES, AND IN EACH CASE EACH OF THEIR RESPECTIVE OFFICERS, DIRECTORS, MEMBERS, EMPLOYEES, CONSULTANTS, REPRESENTATIVES, AGENTS (INCLUDING TRAINERS WHO LEAD OR TEACH CLASSES YOU ATTEND), AND EACH OF THEIR RESPECTIVE SUCCESSORS AND ASSIGNS, FROM ANY AND ALL RESPONSIBILITY, CLAIMS, ACTIONS, SUITS, COSTS, EXPENSES, DAMAGES, AND LIABILITIES ARISING OUT OF OR IN ANY WAY RELATED TO YOUR PARTICIPATION IN OR USE OF THE GSX APP, ANY GSX SERVICE, OR ANY CLASS OR CLASSES, INCLUDING WITH RESPECT TO BODILY INJURY, PHYSICAL HARM, ILLNESS, DEATH, OR PROPERTY DAMAGE.",
      },
    ],
  },
  {
    heading: "22. Export controls",
    blocks: [
      "You will comply with all applicable export laws and restrictions and regulations of relevant authorities, and you will not use the GSX Services to export, or allow any export or re-export, in violation of any such restrictions, laws, or regulations. You represent and warrant that you are not a prohibited party or located in, under the control of, or a national or resident of any restricted country.",
    ],
  },
  {
    heading: "23. Your mobile carrier",
    blocks: [
      "By using the GSX App, you represent that you have authority to share any data transferred through your mobile carrier or other access provider. In the event you change or deactivate your mobile account, you must promptly update your account information with GSX to ensure that messages are not sent to the person who acquires your old number. You are responsible for all charges and necessary permissions related to accessing the GSX Services through your mobile access provider, including any charges related to push notifications or text messages.",
    ],
  },
  {
    heading: "24. Right to amend",
    blocks: [
      "We may, in our sole discretion, change or add to these User Terms at any time, and change, delete, discontinue, or impose conditions on any feature or aspect of the GSX App. We will update the “Effective Date” at the top of these User Terms. Any use of the GSX App after publication of such changes constitutes your acceptance of these User Terms as modified. If you do not agree to any changes, you must stop using the GSX App and may terminate your GSX Account by emailing support@gymsciencx.com.",
    ],
  },
  {
    heading: "25. Assignment",
    blocks: [
      "These User Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned or delegated by GSX without restriction. These User Terms are binding on the parties and their successors and permitted assigns.",
    ],
  },
  {
    heading: "26. Questions",
    blocks: [
      "If you have any questions, complaints, or claims with respect to the GSX App, please contact us at support@gymsciencx.com. We will do our best to address your concerns. If you feel your concerns have not been fully addressed, we invite you to let us know for further investigation.",
    ],
  },
  {
    heading: "27. Electronic communications",
    blocks: [
      "The communications between you and GSX use electronic means, whether you visit the GSX App, send GSX emails, or whether GSX posts notices or communicates with you via email. You consent to receive communications from GSX in electronic form, and you agree that all terms and conditions, agreements, notices, disclosures, and other communications that GSX provides to you electronically satisfy any legal requirement that such communications be in writing.",
    ],
  },
  {
    heading: "28. Governing law",
    blocks: [
      "These User Terms and any action related thereto will be governed and interpreted under the laws of the State of Delaware, consistent with the Federal Arbitration Act, without giving effect to any principles that provide for the application of the law of another jurisdiction. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these User Terms. To the extent the parties are permitted under these User Terms to initiate litigation in a court, both you and GSX agree that all claims and disputes arising out of or relating to these User Terms will be litigated exclusively in the state or federal courts located in Delaware, subject to the Arbitration Agreement in section 29 below.",
      "The GSX Services are intended for use by residents of the United States. GSX makes no representations that the GSX App is appropriate or available for use outside the United States. Those who access or use the GSX App from non-US jurisdictions do so at their own volition and are entirely responsible for compliance with all applicable local laws and regulations. You may not use the GSX App if you are a resident of a country embargoed by the United States, or are a foreign person or entity blocked or denied by the United States government.",
    ],
  },
  {
    heading: "29. Arbitration agreement",
    blocks: [
      "Please read this Arbitration Agreement carefully. It requires you to arbitrate disputes with GSX and limits the manner in which you can seek relief from us.",
      { heading: "Applicability" },
      "For any dispute that arises between you and a Gym, you agree to resolve that dispute directly with the applicable Gym. For any dispute you have with GSX, we will make every reasonable effort to resolve disagreements informally. If those efforts fail, by using the GSX App, you agree that ALL DISPUTES ARISING OUT OF OR RELATED TO THESE USER TERMS OR ANY ASPECT OF THE RELATIONSHIP BETWEEN YOU AND GSX — WHETHER BASED IN CONTRACT, TORT, STATUTE, FRAUD, MISREPRESENTATION, OR ANY OTHER LEGAL THEORY — will be resolved by binding arbitration, rather than in court, except that: (i) either party may assert claims in a small claims court or small causes court if the claims qualify; and (ii) either party may seek relief in court for infringement or misuse of intellectual property rights.",
      { heading: "Arbitration rules and forum" },
      "To begin an arbitration proceeding, you must send a written request to support@gymsciencx.com. The arbitration will be conducted by JAMS, an established alternative dispute resolution provider. Disputes involving claims and counterclaims under $250,000, not inclusive of attorneys' fees and interest, shall be subject to JAMS's most current Streamlined Arbitration Rules; all other claims shall be subject to JAMS's most current Comprehensive Arbitration Rules and Procedures (both available at www.jamsadr.com). If JAMS is not available to arbitrate, the parties will select an alternative arbitral forum. If you are a resident of the United States, arbitration may take place in the county where you reside at the time of filing. You and GSX agree to submit to the personal jurisdiction of any federal or state court in Delaware in order to compel arbitration, stay proceedings pending arbitration, or confirm, modify, vacate, or enter judgment on the award rendered by the arbitrator. You may choose to have the arbitration conducted by telephone, based on written submissions, or in person at a mutually agreed location. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.",
      { heading: "Authority of arbitrator" },
      "The arbitrator shall have exclusive authority to determine the scope and enforceability of this Arbitration Agreement and to resolve any dispute related to its interpretation, applicability, or formation. The arbitrator shall have authority to award monetary damages and to grant any non-monetary remedy or relief available under applicable law. The arbitrator shall issue a written award describing the essential findings and conclusions on which the award is based.",
      { heading: "Waiver of jury trial" },
      {
        strong:
          "YOU AND GSX HEREBY WAIVE ANY RIGHTS TO A TRIAL IN FRONT OF A JUDGE OR JURY FOR ANY CLAIMS OR DISPUTES COVERED BY THIS ARBITRATION AGREEMENT. ALL SUCH CLAIMS AND DISPUTES SHALL BE RESOLVED BY ARBITRATION UNDER THIS AGREEMENT.",
      },
      { heading: "Waiver of class actions or other non-individualized relief" },
      {
        strong:
          "ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS. ONLY INDIVIDUAL RELIEF IS AVAILABLE. CLAIMS OF MORE THAN ONE MEMBER OR USER CANNOT BE ARBITRATED OR CONSOLIDATED WITH THOSE OF ANY OTHER MEMBER OR USER.",
      },
      { heading: "30-day right to opt out" },
      "You have the right to opt out of this Arbitration Agreement by sending written notice of your decision to opt out to legal@gymsciencx.com within 30 days after first becoming subject to this Arbitration Agreement. Your notice must include your name, address, GSX username (if any), the email address you used to set up your GSX Account, and an unequivocal statement that you want to opt out. Opting out of this Arbitration Agreement does not affect any other part of these User Terms.",
      { heading: "Severability and survival" },
      "If any part of this Arbitration Agreement is found invalid or unenforceable, that specific part shall be of no force and effect and shall be severed; the remainder of the Arbitration Agreement shall continue in full force and effect. This Arbitration Agreement will survive the termination of your relationship with GSX.",
    ],
  },
  {
    heading: "30. General provisions",
    blocks: [
      "Except as expressly provided in these User Terms, these User Terms constitute the complete agreement between you and GSX and describe the entire liability of GSX and your exclusive remedy with respect to your access and use of the GSX App and GSX Services. GSX shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including acts of God, epidemic or pandemic, war, terrorism, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.",
      "In the event of a conflict between these User Terms and any other GSX agreement or policy, these User Terms shall prevail on the subject matter of these User Terms. If any provision of these User Terms is invalid or unenforceable under applicable law, it shall be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible, and the remaining provisions will continue in full force and effect.",
      "These User Terms do not create any partnership, joint venture, employer-employee, agency, or franchisor-franchisee relationship between you and GSX. GSX's failure to assert any right or provision under these User Terms shall not constitute a waiver of such right or provision. Any provision that is reasonably necessary to accomplish or enforce the purpose of these User Terms shall survive termination of these User Terms.",
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      "GymSciencX / Quibble AI Private Limited",
      {
        contacts: [
          {
            label: "General support",
            value: "support@gymsciencx.com",
            href: "mailto:support@gymsciencx.com",
          },
          {
            label: "Legal and privacy",
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
    ],
  },
] as const satisfies readonly ProseSection[];
