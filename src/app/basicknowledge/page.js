// "use client";
// import Head from 'next/head';
// import '../styles/warranty.css'; 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePathname } from 'next/navigation';

// export default function BasicKnowlegePage() {

//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         <title>Warranty Policy | BEYOND BIKES</title>
//         <meta name="description" content="Learn about the EBIKE100 product warranty, coverage terms, and how we handle repairs and replacements." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/warranty" />
//       </Head>

// <Header />
//       <div className="container py-4 px-4 warranty-page">
//         <h2 className="text-center fw-bold mb-4 mt-4" style={{color:'#1a3b19'}}>Privacy Policy</h2>
//         <hr />

//         <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Abstract</h5>
//         <p className='fs-6'>This section presents the privacy policy of Beyond Bikes Pty Ltd, outlining the companys approach to managing personal information. The policy is designed to ensure transparency and security in handling data collected from various stakeholders, including website visitors, mobile application users, members, job applicants, and service providers. The policy covers the types of data collected, the methods of data collection, purposes for data use, data sharing protocols, retention periods, data protection rights, security measures..</p>

//         <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Introduction</h5>
//         <p className='fs-6'>Beyond Bikes Pty Ltd is committed to protecting the privacy and personal information of its stakeholders. This privacy policy provides an in-depth overview of how personal data is collected, utilized, stored, shared, and protected when individuals engage with our company. The policy applies to all interactions, including visiting our website, using mobile applications, participating in promotions or contests, registering as a member, applying for a job, or offering services to us.

// The policy aims to ensure compliance with data protection regulations and to provide clarity on how personal information is managed. It also outlines the rights of individuals concerning their personal data and how they can exercise these rights.</p>
//         {/* <ul className='fw-bold fs-6'>
//             <li>Damage caused by accidents, misuse, neglect, stunt riding, or use in commercial or rental environments</li>
//             <li>Improper assembly, incorrect fitting, or insufficient maintenance</li>
//             <li>Labour charges associated with repair or replacement</li>
//             <li>Items that are beyond their warranty period</li>
//             <li>Pre-owned items (our warranty is non-transferable and only applies to the original purchaser)​​</li>
//         </ul> */}

//         <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Methods of Data Collection</h5>
//         <p className='fs-6'>Data collection methods vary depending on the type of interaction with Beyond Bikes:

// Website or App Visitors: Collection of Technical and Usage Information through cookies and similar tools, as well as Identity, Contact, and Marketing Information if provided voluntarily.

// Users: Data is collected through automated methods, direct interactions, and third-party sources to fulfill contractual obligations, comply with legal requirements, and support legitimate business interests.</p>
//         <p className='fs-6'>
//           {/* <span className="text-danger">My Company</span> will either repair the Product at no charge, using new or refurbished replacement parts. */}
//           Delivery Job Applicants: Data is collected when applying for employment through our platforms or third parties, based on consent and processing requirements for employment contracts.

// Service Providers: Data is obtained through direct interactions or automated processes, necessary for contract execution and legal obligations.
//         </p>

//         {/* <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Coverage Overview (excluding damage caused by misuse or external factors):</h5>
//         <ul className='fw-bold fs-6'>
//             <li>12 months for factory defects related to the main body frame, including structural elements <br />
//             <span className='text-danger'>Please note: The handlebar, headset, and fork are not included as part of the body frame in this section</span>
//             </li>
//             <li>12 months for manufacturing faults in the battery, charger, and motor hub</li>
//             <span className='text-danger'>Please be aware that natural battery performance deterioration over time is not covered.</span>
//         </ul> */}
//         <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Information Collected</h5>
//         <p className='fs-6'>Personal data refers to any information that can identify a specific individual. This policy does not include data that has been anonymized. Beyond Bikes collects, utilizes, stores, and shares various categories of personal data, as described below:</p>
//         {/* <ul>
//           <li className='fw-bold fs-6'>conditions, malfunctions or damage not resulting from defects in material or workmanship</li>
//         </ul> */}
//         <p className='fs-6'>Details such as names, ID numbers (e.g., drivers license, passport), and dates of birth uniquely identify a person.</p>
//         <p className='fs-6'>Mailing addresses, email addresses, and phone numbers used for communication and billing.

// Bank account details, BSB numbers, and credit/debit card information are used for processing payments.</p>
// <p className='fs-6'>Records of financial exchanges and transactions, including payments to and from Beyond Bikes.

// Data related to the devices and technology used to access our platforms—such as IP addresses, login details, browser specifics, time zones, locations, and, for members, GPS data tracking routes and trips with our bikes.</p>
// <p className='fs-6'>User-specific data, like usernames, passwords, contracts (e.g., rental or rent-to-own), preferences, and survey feedback.</p>
// <p className='fs-6'>Insights into how users interact with our services, including patterns and frequency of use.

// User preferences about receiving marketing messages and preferred communication channels.

// Generalized data derived from personal information, like statistics or demographic trends, does not directly identify individuals.</p>
// <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Information Collected</h5>
// <p className='fs-6'>Personal information is used strictly for the purposes for which it was collected, unless a new, related purpose arises. The primary purposes include:</p>
// <ul>
//   <li>Fulfilling contractual obligations.</li>
//   <li>Complying with legal and regulatory requirements.</li>
//   <li>Supporting legitimate business interests, such as improving services and engaging with customers.</li>
// </ul>
// <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Sharing Protocols</h5>
// <p>Beyond Bikes may share personal information with the following entities:</p>
// <ul>
//   <li>Within the organization and associated companies.</li>
//   <li>External Partners: Including customer service and engagement platforms, telematics service providers, payment processors, insurance companies, maintenance and repair partners, recruitment agencies, technology vendors, legal and financial advisors, delivery services, regulatory bodies, and potential partners in mergers or acquisitions.</li>
// </ul>
// <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Retention Policy</h5>
// <p className='fs-6'>Beyond Bikes retains personal data only for as long as necessary to achieve the purposes for which it was collected, including legal, regulatory, tax, accounting, or reporting obligations. Core customer information is typically kept for up to six years post-relationship, primarily for tax purposes. In some cases, data may be anonymized for research or statistical analysis.</p>
// <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Protection Rights</h5>    
// <p className='fs-6'>Data protection laws provide individuals with specific rights regarding their personal information, including:</p>
// <ul>
//   <li>Access to personal data.</li>
//   <li>Request for corrections.</li>
//   <li>Deletion of data.</li>
//   <li>Objection to processing.</li>
//   <li>Restriction of processing.</li>
//   <li>Data transfer requests.</li>
//   <li>Withdrawal of consent.</li>
//   <p>To exercise any of these rights, individuals can contact Beyond Bikes</p>
// </ul>   

// <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Security Measures</h5>
// <p className='fs-6'>Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs.</p>
        
// <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Security Measures</h5>
// <p className='fs-6'>Beyond Bikes remains committed to protecting personal information and ensuring transparency in its data management practices. This policy serves as a comprehensive guide for stakeholders on how their data is handled and the rights they have concerning their information.</p>

// <p className='mt-4 fs-6'>This Privacy Statement is regularly reviewed and was last updated on <strong>September 13, 2024.</strong></p>
//         {/* <h5 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>What do you have to do?</h5>
//         <p className='fw-bold fs-6'>
//           To obtain warranty service, you must first contact us to determine the problem and the most appropriate solution for you.
//         </p> */}
//       </div>
//       {pathname === '/basicknowledge' && <Footer />}
//     </>
//   );
// }

// SEO
// "use client";
// import Head from 'next/head';
// import '../styles/warranty.css'; 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePathname } from 'next/navigation';

// export default function BasicKnowlegePage() {
//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         <title>Privacy Policy | Beyond Bikes</title>
//         <meta name="description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta name="keywords" content="Beyond Bikes, privacy policy, warranty, data protection, e-bike, rental bike, user data, security measures" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://yourdomain.com/warranty" />
//         {/* Open Graph / Social Sharing */}
//         <meta property="og:title" content="Privacy & Warranty Policy | Beyond Bikes" />
//         <meta property="og:description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta property="og:url" content="https://yourdomain.com/warranty" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://yourdomain.com/images/beyond-bikes-og.png" />
//       </Head>

//       <Header />

//       <main className="container py-4 px-4 warranty-page" itemScope itemType="https://schema.org/WebPage">
//         <h1 className="text-center fw-bold mb-4 mt-4" style={{color:'#1a3b19'}} itemProp="name">Privacy Policy</h1>
//         <hr />

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Abstract</h2>
//           <p className='fs-6' itemProp="description">
//             This section presents the privacy policy of Beyond Bikes Pty Ltd, outlining the companys approach to managing personal information. The policy is designed to ensure transparency and security in handling data collected from various stakeholders, including website visitors, mobile application users, members, job applicants, and service providers. The policy covers the types of data collected, the methods of data collection, purposes for data use, data sharing protocols, retention periods, data protection rights, security measures.
//           </p>
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Introduction</h2>
//           <p className='fs-6'>
//             Beyond Bikes Pty Ltd is committed to protecting the privacy and personal information of its stakeholders. This privacy policy provides an in-depth overview of how personal data is collected, utilized, stored, shared, and protected when individuals engage with our company. The policy applies to all interactions, including visiting our website, using mobile applications, participating in promotions or contests, registering as a member, applying for a job, or offering services to us. The policy aims to ensure compliance with data protection regulations and to provide clarity on how personal information is managed. It also outlines the rights of individuals concerning their personal data and how they can exercise these rights.
//           </p>
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Methods of Data Collection</h2>
//           <p className='fs-6'>
//             Data collection methods vary depending on the type of interaction with Beyond Bikes: Website or App Visitors: Collection of Technical and Usage Information through cookies and similar tools, as well as Identity, Contact, and Marketing Information if provided voluntarily. Users: Data is collected through automated methods, direct interactions, and third-party sources to fulfill contractual obligations, comply with legal requirements, and support legitimate business interests.
//           </p>
//           <p className='fs-6'>
//            Delivery Job Applicants: Data is collected when applying for employment through our platforms or third parties, based on consent and processing requirements for employment contracts. Service Providers: Data is obtained through direct interactions or automated processes, necessary for contract execution and legal obligations.
//           </p>
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Information Collected</h2>
//           <p className='fs-6'>
//             {/* Beyond Bikes collects personal data including names, ID numbers, contact details, financial information, device and usage data, preferences, and user feedback. This information helps improve our services, ensure contractual compliance, and provide customer support. */}
//           Personal data refers to any information that can identify a specific individual. This policy does not include data that has been anonymized. Beyond Bikes collects, utilizes, stores, and shares various categories of personal data, as described below:
//           </p>
//           <p className='fs-6'>Details such as names, ID numbers (e.g., driver&apos;s license, passport), and dates of birth uniquely identify a person.</p>
//           <p className='fs-6'>Mailing addresses, email addresses, and phone numbers used for communication and billing.

// Bank account details, BSB numbers, and credit/debit card information are used for processing payments.</p>
// <p>Records of financial exchanges and transactions, including payments to and from Beyond Bikes.

// Data related to the devices and technology used to access our platforms—such as IP addresses, login details, browser specifics, time zones, locations, and, for members, GPS data tracking routes and trips with our bikes.</p>
// <p>User-specific data, like usernames, passwords, contracts (e.g., rental or rent-to-own), preferences, and survey feedback.</p>
// <p>Insights into how users interact with our services, including patterns and frequency of use.</p>
// <p>User preferences about receiving marketing messages and preferred communication channels.</p>
// <p>Generalized data derived from personal information, like statistics or demographic trends, does not directly identify individuals.</p>

//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Purposes for Data Use</h2>
//           <p className='fs-6'>
//             Personal information is used strictly for the purposes for which it was collected, unless a new, related purpose arises. The primary purposes include:
//           </p>
//           <ol>
//             <li>Fulfilling contractual obligations.</li>
//             <li>Complying with legal and regulatory requirements.</li>
//             <li>Supporting legitimate business interests, such as improving services and engaging with customers.</li>
//           </ol>
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Sharing Protocols</h2>
//           <p className='fs-6'>
//             {/* Personal data is retained only as long as necessary to achieve the purposes of collection, comply with legal obligations, or perform analytics. Core customer info is typically kept for up to six years. */}
//           Beyond Bikes may share personal information with the following entities:
//           </p>
//           <ul>
//             <li>
//               Within the organization and associated companies.
//             </li>
//             <li>
//               External Partners: Including customer service and engagement platforms, telematics service providers, payment processors, insurance companies, maintenance and repair partners, recruitment agencies, technology vendors, legal and financial advisors, delivery services, regulatory bodies, and potential partners in mergers or acquisitions.
//             </li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Retention Policy</h2>
//           <p className='fs-6'>
//             {/* Personal data is retained only as long as necessary to achieve the purposes of collection, comply with legal obligations, or perform analytics. Core customer info is typically kept for up to six years. */}
//           Beyond Bikes retains personal data only for as long as necessary to achieve the purposes for which it was collected, including legal, regulatory, tax, accounting, or reporting obligations. Core customer information is typically kept for up to six years post-relationship, primarily for tax purposes. In some cases, data may be anonymized for research or statistical analysis.
//           </p>
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Protection Rights</h2>
//           <p className='fs-6'>
//             {/* Individuals have rights including access, correction, deletion, objection, restriction, data portability, and withdrawal of consent. Contact Beyond Bikes to exercise these rights. */}
//           Data protection laws provide individuals with specific rights regarding their personal information, including:</p>
//           <ul>
//             <li>Access to personal data.</li>
//             <li>Request for corrections.</li>
//             <li>Deletion of data.</li>
//             <li>Objection to processing.</li>
//             <li>Restriction of processing.</li>
//             <li>Data transfer requests.</li>
//             <li>Withdrawal of consent.</li>
//           </ul>
//           <p>To exercise any of these rights, individuals can contact Lithium Bicycle at <a href='mailto:info.beyondbikes@gmail.com' style={{textDecoration:'none'}}>info.beyondbikes@gmail.com</a></p>        
          
//         </section>

//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Security Measures</h2>
//           <p className='fs-6'>
//             {/* Beyond Bikes implements robust security protocols, restricting access to employees, contractors, and authorized third parties only. We aim to protect your personal information and ensure transparency. */}
//           Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs.
//           </p>
//         </section>
// <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Conclusion</h2>
//           <p className='fs-6'>
//             {/* Beyond Bikes implements robust security protocols, restricting access to employees, contractors, and authorized third parties only. We aim to protect your personal information and ensure transparency. */}
//           {/* Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs. */}
//           Lithium Bicycle remains committed to protecting personal information and ensuring transparency in its data management practices. This policy serves as a comprehensive guide for stakeholders on how their data is handled and the rights they have concerning their information.
//           </p>
//           <p>This Privacy Statement is regularly reviewed and was last updated on <strong>September 13, 2024.</strong></p>
//         </section>
        
//       </main>

//       {pathname === '/basicknowledge' && <Footer />}
//     </>
//   );
// }

'use client';
import Head from 'next/head';
import '../styles/warranty.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const pathname = usePathname();
  const siteUrl = "https://www.beyondbikes.com.au";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Privacy Policy | Beyond Bikes</title>
        <meta name="description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
        <meta name="keywords" content="Beyond Bikes, privacy policy, warranty, data protection, e-bike, rental bike, user data, security measures" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${siteUrl}/warranty`} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Privacy & Warranty Policy | Beyond Bikes" />
        <meta property="og:description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
        <meta property="og:url" content={`${siteUrl}/warranty`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy & Warranty Policy | Beyond Bikes" />
        <meta name="twitter:description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
        <meta name="twitter:image" content={`${siteUrl}/images/beyond-bikes-og.png`} />

        {/* Structured Data for WebPage and Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy | Beyond Bikes",
              "url": `${siteUrl}/warranty`,
              "description": "Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information.",
              "publisher": {
                "@type": "Organization",
                "name": "Beyond Bikes",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}/images/beyond-bikes-og.png`
                }
              }
            })
          }}
        />
      </Head>

      <Header />

      <main className="container py-4 px-4 warranty-page" itemScope itemType="https://schema.org/WebPage">
        <h1 className="text-center fw-bold mb-4 mt-4" style={{color:'#1a3b19'}} itemProp="name">Privacy Policy</h1>
        <hr />

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Abstract</h2>
          <p className='fs-6' itemProp="description">
            This section presents the privacy policy of Beyond Bikes Pty Ltd, outlining the companys approach to managing personal information. The policy is designed to ensure transparency and security in handling data collected from various stakeholders, including website visitors, mobile application users, members, job applicants, and service providers. The policy covers the types of data collected, the methods of data collection, purposes for data use, data sharing protocols, retention periods, data protection rights, security measures.
          </p>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Introduction</h2>
          <p className='fs-6'>
            Beyond Bikes Pty Ltd is committed to protecting the privacy and personal information of its stakeholders. This privacy policy provides an in-depth overview of how personal data is collected, utilized, stored, shared, and protected when individuals engage with our company. The policy applies to all interactions, including visiting our website, using mobile applications, participating in promotions or contests, registering as a member, applying for a job, or offering services to us. The policy aims to ensure compliance with data protection regulations and to provide clarity on how personal information is managed. It also outlines the rights of individuals concerning their personal data and how they can exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Methods of Data Collection</h2>
          <p className='fs-6'>
            Data collection methods vary depending on the type of interaction with Beyond Bikes: Website or App Visitors: Collection of Technical and Usage Information through cookies and similar tools, as well as Identity, Contact, and Marketing Information if provided voluntarily. Users: Data is collected through automated methods, direct interactions, and third-party sources to fulfill contractual obligations, comply with legal requirements, and support legitimate business interests.
          </p>
          <p className='fs-6'>
           Delivery Job Applicants: Data is collected when applying for employment through our platforms or third parties, based on consent and processing requirements for employment contracts. Service Providers: Data is obtained through direct interactions or automated processes, necessary for contract execution and legal obligations.
          </p>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Information Collected</h2>
          <p className='fs-6'>Personal data refers to any information that can identify a specific individual. This policy does not include data that has been anonymized. Beyond Bikes collects, utilizes, stores, and shares various categories of personal data, as described below:</p>
          <p className='fs-6'>Details such as names, ID numbers (e.g., driver&apos;s license, passport), and dates of birth uniquely identify a person.</p>
          <p className='fs-6'>Mailing addresses, email addresses, and phone numbers used for communication and billing.</p>
          <p className='fs-6'>Bank account details, BSB numbers, and credit/debit card information are used for processing payments.</p>
          <p className='fs-6'>Records of financial exchanges and transactions, including payments to and from Beyond Bikes.</p>
          <p className='fs-6'>Data related to the devices and technology used to access our platforms—such as IP addresses, login details, browser specifics, time zones, locations, and, for members, GPS data tracking routes and trips with our bikes.</p>
          <p className='fs-6'>User-specific data, like usernames, passwords, contracts (e.g., rental or rent-to-own), preferences, and survey feedback.</p>
          <p className='fs-6'>Insights into how users interact with our services, including patterns and frequency of use.</p>
          <p className='fs-6'>User preferences about receiving marketing messages and preferred communication channels.</p>
          <p className='fs-6'>Generalized data derived from personal information, like statistics or demographic trends, does not directly identify individuals.</p>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Purposes for Data Use</h2>
          <p className='fs-6'>
            Personal information is used strictly for the purposes for which it was collected, unless a new, related purpose arises. The primary purposes include:
          </p>
          <ol>
            <li>Fulfilling contractual obligations.</li>
            <li>Complying with legal and regulatory requirements.</li>
            <li>Supporting legitimate business interests, such as improving services and engaging with customers.</li>
          </ol>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Sharing Protocols</h2>
          <p className='fs-6'>
          Beyond Bikes may share personal information with the following entities:
          </p>
          <ul>
            <li>
              Within the organization and associated companies.
            </li>
            <li>
              External Partners: Including customer service and engagement platforms, telematics service providers, payment processors, insurance companies, maintenance and repair partners, recruitment agencies, technology vendors, legal and financial advisors, delivery services, regulatory bodies, and potential partners in mergers or acquisitions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Retention Policy</h2>
          <p className='fs-6'>
          Beyond Bikes retains personal data only for as long as necessary to achieve the purposes for which it was collected, including legal, regulatory, tax, accounting, or reporting obligations. Core customer information is typically kept for up to six years post-relationship, primarily for tax purposes. In some cases, data may be anonymized for research or statistical analysis.
          </p>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Data Protection Rights</h2>
          <p className='fs-6'>
          Data protection laws provide individuals with specific rights regarding their personal information, including:</p>
          <ul>
            <li>Access to personal data.</li>
            <li>Request for corrections.</li>
            <li>Deletion of data.</li>
            <li>Objection to processing.</li>
            <li>Restriction of processing.</li>
            <li>Data transfer requests.</li>
            <li>Withdrawal of consent.</li>
          </ul>
          <p>To exercise any of these rights, individuals can contact Beyond Bikes at <a href='mailto:info.beyondbikes@gmail.com' style={{textDecoration:'none'}}>info.beyondbikes@gmail.com</a></p>        
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Security Measures</h2>
          <p className='fs-6'>
          Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs.
          </p>
        </section>

        <section>
          <h2 className="mt-4 fw-bold" style={{color:'#1a3b19'}}>Conclusion</h2>
          <p className='fs-6'>
          Beyond Bikes remains committed to protecting personal information and ensuring transparency in its data management practices. This policy serves as a comprehensive guide for stakeholders on how their data is handled and the rights they have concerning their information.
          </p>
          <p>This Privacy Statement is regularly reviewed and was last updated on <strong>September 13, 2024.</strong></p>
        </section>

      </main>

      <Footer />
    </>
  );
}
