import React from "react";

export default function Privacy() {

    const data = [
    { category: "A. Identifiers", examples: "A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.", collected: "YES" },
    { category: "B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).", examples: "A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.", collected: "YES" },
    { category: "C. Protected classification characteristics under California or federal law.", examples: "Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).", collected: "YES" },
    { category: "D. Commercial Information", examples: "Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.", collected: "YES" },
    { category: "E. Biometric Information", examples: "Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.", collected: "NO" },
    { category: "F. Internet or other similar network activity", examples: "Browsing history, search history, information on a consumer's interaction with a website, application, or advertisement.", collected: "YES" },
    { category: "G. Geolocation data", examples: "Physical location or movements.", collected: "YES" },
    { category: "H. Sensory data", examples: "Audio, electronic, visual, thermal, olfactory, or similar information.", collected: "YES" },
    { category: "I. Professional or employment-related information.", examples: "Current or past job history or performance evaluations.", collected: "YES" },
    { category: "J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).", examples: "Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.", collected: "NO" },
    { category: "K. Inferences drawn from other personal information.", examples: "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.", collected: "YES" },
  ];

  return (
    <div style={styles.container}>
        <p>Effective Date of this Policy: July 1, 2020</p>

      <h2>Introduction</h2>
      <p>Blue Spruce Concepts, Inc.; (“We” or “Us”) (“we,” “us,” or “our”) offer services and products (collectively, “Services”) to our customers, website visitors, and users (“you”). We also own this website, www.bluesprucecopymachines.com (the “Site”), to help us provide these Services to you. We sometimes collect Personal Information to provide information and Services that you request, and to better understand our customer’s wants and needs. Personal Information is information that specifically identifies an individual. Personal Information can include, but is not limited to, your name, address, e-mail address, phone number, and credit card information. Personal Information also includes the specific types of information defined under locally applicable law.</p>
      <p>This Policy applies only to Personal Information collected through the Site and does not apply to any other data or information collected by us online or offline except to the extent this Policy is expressly referenced or incorporated into such other Services, such as by internet link on a website or presentation or display to Users.</p>
      <p>We are committed to protecting the privacy of your information. Please take a moment to read this Privacy Policy (“Policy”) to understand how we collect, use, store, and delete Personal Information about you when you visit and/or use the Site; or use any of our Services.</p>

      <h2>Policy Integration</h2>
      <p>This Privacy Policy incorporates our Cookie Notice, which is accessible from a notice presented to users of the Site and/or Services and can be accessed at the bottom of the page</p>

      <h2>What Types of Information Do We Collect?</h2>

      <h3>Information You Voluntarily Provide</h3>
      <p>We collect Personal Information you and others voluntarily provide when you use the Site and the Services. This could include information when you create an account, sign up for news alerts or newsletters, or contact us with questions. There may also be optional functions of the Site that you must provide Personal Information to use. The ways we will use such information will be provided on the page where you provide that information. Such optional services may include:</p>
      <ul>
        <li>You opting in to location-based services;</li>
        <li>Use of integrated services with third parties (e.g., logging using credentials from a different platform, linking accounts from different platforms)</li>
        <li>Forum subscriptions after you create a forum registration;</li>
        <li>Submitting general contact forms; and</li>
        <li>Submitting inquiries in any form (e.g., e-mail, phone, mail, etc.).</li>
      </ul>
      <p>When you provide us with Personal Information, you agree to provide accurate, complete and true information. You agree to not use a false or misleading name that you are not authorized to use.</p>
      <p>In order to provide our Services and deliver products, we also need to collect and store Personal Information. The types of information we may collect from you may include name, physical address, email address, telephone number, date of birth, gender, geographic area, geolocation information (using your IP address, GPS, or sensors in nearby equipment, such as WiFi access points and cell towers), and any other information you choose to provide in connection with the Services.</p>
      <h3>Information Your Web Browser Provides</h3>
      <p>When you visit the Site, we automatically collect information provided by your web browser. This information includes, but is not limited to, your device’s unique identifiers and IP address, the pages within the Site that you visit, the number of visits you make to the Site and pages that you visit, any referring websites/URLs, the number of clicks you make while at the Site, the time that your device visited, the identity of your service provider, and the name and version of your operating system. This passively collected data is used to administer, operate, and improve the Site and Services, and to provide individualized advertising to you. We may use IP addresses and device data to identify a user who is noncompliant with our Terms of Use, or to protect the site or other users.</p>
      <p>We may also use information in the aggregate that has no personal identifying characteristics to understand aggregate user and customer behavior. Non-personally identifiable information is not treated the same as Personal Information and we may use and disclose such information for various purposes.</p>

      <h3>Cookies and Similar Technology</h3>
      <p>We use cookies and other technology to collect information, provide Services, and support features of the Site. Please see our Cookie Notice section, which is fully incorporated with this Privacy Policy.</p>

      <h3>Information from Other Sources</h3>
      <p>We may receive information about you, including Personal Information, from third parties. We may combine this information with other Personal Information we maintain about you and such information will be handled under the terms of this Privacy Policy.</p>

      <h2>How Do We Use and Share Personal Information?</h2>

      <h3>Use</h3>
      <p>We use collected Personal Information to authenticate your access and use of the Site; to respond to your e-mail inquiries (when we deem such response to be appropriate); to respond to your submission of “Contact Me,” “Register Now,” “Get Started,” “Message Provider,” or other forms which involve your requests for information from us; to send you notices about changes to the Site; to send you notices about our services (including service-related announcements): to send you marketing information through our CRM system; and to manage and improve the Site to optimize our products and services.</p>
      <p>To prevent fraudulent use of our systems; to enforce our Terms of Use or comply with laws; to maintain a record of how you use our platforms; for administrative purposes; and for any other purposes that we may disclose to you when we request Personal Information and your consent to use it.</p>
      <p>We may use Personal Information to send you marketing materials that we believe might match your interests. You are able to opt-out of these marketing materials by using a link within the materials themselves.</p>
      <p>We may use location or other information that you provide to better deliver personalized content to you.</p>
      <p>We may also use your Personal Information (such as search terms) to optimize our exposure and availability on external web search engines such as Google. More on this use may be found below.</p>

      <h3>Sharing</h3>
      <p>There may be times when we need to share your Personal Information with third parties to provide you Services, for the proper functioning of website features, to comply with the law, and for other lawful bases consistent with locally controlling laws and regulations. The occasions when we will share your Personal Information because of these reasons are explained below.</p>

      <h4>Service Providers</h4>
      <p>We may use third party data analytics services to maintain databases, distribute information, process transactions, and for hosting services. When we engage a Service Provider to provide such business-related functions, we limit the amount and types of Personal Information we share and insist upon reasonable measures on behalf of the Service Provider to safeguard such information.</p>

      <h4>Business Transfers</h4>
      <p>We may disclose and transfer Personal Information to a third party in the event that a merger, acquisition, debt financing transaction, sale of our assets, other similar transaction, bankruptcy, insolvency, or receivership occurs. The third party would thereafter be entitled to review and use such information (including Personal Information) in connection with its business activities, and in such case, the Privacy Policy of the third party may thereafter apply to such information, rather than this Privacy Policy.</p>

      <h4>Legal Protection</h4>
      <p>We may disclose Personal Information if we believe we must to comply with a law, or if disclosure is in our interest to protect property or other legal rights. This may include disclosing Personal Information to enforce contracts and agreements, to protect the rights or property of others, or to help protect the security of our Service and the information of other users.</p>

      <h4>Integrated Services</h4>
      <p>Our Services and Site may allow you to integrate accounts with a third party service. When you elect to integrate your accounts, you are electing to share your Personal Information with the third party for this purpose. Any Personal Information disclosed to a third party providing an integrated service is outside of our control and is subject to that third party’s own terms and policies.</p>

      <h4>Location Information</h4>
      <p>We may share aggregate, non-personally identifiable location information with third parties to assist in understanding our user’s interests and usage of our Site and Services.</p>
      <h2>Online Analytics</h2>
      <p>We may use third party data analytics services to help us improve our services.</p>
      <p>These include Google Analytics, which helps us understand how you use our Services. Google Analytics collects data about your traffic via Google advertising cookies and anonymous identifiers, as well as data collected through standard Google Analytics implementation. We strive to adhere to Google Analytics Advertising policies.</p>
      <p>We will not facilitate the merger of personally identifiable information with non-personally identifiable information collected through any Google Advertising product or feature.</p>
      <p>We reserve the right to test, turn-on, or turn-off any of the Google Analytics features from time-to-time without notice to you. By utilizing certain Google Analytics Advertising features, we are required to disclose the following information:</p>
      <p>We use the following Google Analytics Advertising Features: The Site may employ Google® Analytics Display Advertising features.</p>
      <p>The Site and other third-party vendors may use first-party cookies (such as the Google® Analytics cookie) or other first-party identifiers, and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together. Visitors to the Site can opt-out of the Google® Analytics Advertising Features used, including through Ads Settings, Ad Settings for mobile apps, or any other available means (for example, the NAI's consumer opt-out).</p>
      <p>Our use of cookies is detailed in our Cookie Notice section. You may revoke your consent to the use of web analysis at any time, either by downloading and installing the provided <a href='https://tools.google.com/dlpage/gaoptout?hl=en-GB'>Google Browser Plugin</a> or by following your internet browser’s instructions to enable, disable, or clear cookies.</p>
      <p>Further information on Google Analytics is available in the Google Analytics Terms of Use, the Privacy and Data Protection Guidelines of Google Analytics and in the Google Privacy Policy</p>

      <h2>Data Retention</h2>
      <p>We store the information we collect about you for as long as is necessary for the purpose(s) for which we collected it and in accordance with applicable law and legitimate business interests.</p>
      <p>When assessing the data retention period, we take into account the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure of the information, the purposes for which we process the data and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>

      <h2>Security of Information</h2>
      <p>We have reasonable and appropriate security measures in place to protect against the loss, misuse, and alteration of any personal information we receive about you. We maintain appropriate security standards to protect the personal information that we maintain.</p>
      <p>Unfortunately, no data transmission or storage can be guaranteed to be completely secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) we cannot control security and privacy indefinitely; (b) the security, integrity, and privacy of information or data exchanged between you and us cannot always be guaranteed; and (c) any such information and data may be viewed or compromised when in transit by a third party.</p>

      <h2>Accuracy of Information</h2>
      <p>We strive to keep our records accurate and will make appropriate corrections when you notify us. Please let us know if there is incorrect information in any statements or other communications that you receive from us. If you would like to correct or update your personal information, please contact us at BLUESPRUCE1986@msn.com.</p>

      <h2>Questions About Your Data</h2>
      <p>If you have questions about this Policy, or how we handle your Personal Information, please contact us at: BLUESPRUCE1986@msn.com.</p>

      <h2>Special Disclosures</h2>

      <h3>“Do Not Track” Disclosures</h3>
      <p>California and Delaware require websites accessible by users based in those states to indicate whether the website respects “Do Not Track” browser settings. We follow the standards explained in this Privacy Policy and do not interact with or implement “Do Not Track” requests.</p>

      <h3>Children</h3>
      <p>Our Services and Site are not directed at children under the age of 13, and we do not knowingly collect Personal Information from children under the age of 13 without obtaining parental consent. It is our procedure to promptly delete any Personal Information collected from a child under the age of 13 upon discovery of such a circumstance. If you believe that we may have collected Personal Information from a child under the age of 13, please contact us using the contact information at the end of this Policy and we will take appropriate steps to rectify this inadvertent collection.</p>

      <h2>Your California Privacy Rights</h2>
      <p>If you a consumer located in California and we collect your personal information, the California Consumer Privacy Act (CCPA) may apply to you. In such a case, our Supplemental CCPA Privacy Policy will apply and will control in the event of any conflict with this general Privacy Policy.</p>
      <p>Likewise, other California Privacy laws may apply to you in certain circumstances.</p>
      <p>Pursuant to California Business and Professions Code Section 1798.83 (or such successor provision), as amended and supplemented, residents of California have the right to request from a business with whom the California resident has an established business relationship certain information with respect to the types of Personal Information the business shares with third parties for those third parties’ direct marketing purposes and the identities of the third parties with whom the business has shared such information during the immediately preceding calendar year.</p>
      <p>In addition, an operator of a commercial website subject to California Business and Professions Code Section 22581 must allow California residents under age 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted. If this applies to you and you wish to make such a request, your request should include a detailed description of the specific content or information to be removed. Please be aware that your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.</p>
      <p>If you are a California resident, believe that one of the above code provisions applies to you, and would like to make such a request, you may submit a written request using the contact information located at the end of this Privacy Policy.</p>

      <h2>European Data Subjects</h2>
      <p>The European Union (“EU”) General Data Protection Regulation (“GDPR”) provides certain regulations for the processing of personal data of users who are located within the EU. The GDPR applies when an entity offers goods or services to a person located within the EU or monitors the behavior of a person if the behavior takes place in the EU.</p>
      <p>We are an entity based in the United States that provides personalized digital marketing services to local businesses in the United States. Although our Site may be accessible in some locations outside of the United States, it is not our intention to offer Services to individuals located outside of the United States. Any information we collect will be stored and processed in the United States and if you are located outside of the United States, the laws of the United States may offer less protection that the laws of your place of residence. We will collect and maintain any Personal Information only as long as we need it for the purposes outlined in this Privacy Policy. By providing your Personal Information to us through your use of the Services or Site, you agree to our transfer, storage, and processing procedures based in the United States. Please note that different regions and countries can have their own privacy and data security laws; some of which may be less protective of your Personal Information than the laws of your own region or country.</p>
      <p>In the event that we offer Services subject to the GDPR, we will comply with the requests of European data subject requests to: (1) access Personal Information, (2) have inaccurate or unnecessary Personal Information rectified or deleted, or (3) stop using your Personal Information in a certain way. If your use of our Services or Site is subject to GDPR you would also have a right to lodge a complaint with your local EU regulator.</p>

      <h2>Changes and Updates to this Policy</h2>
      <p>We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Site and update the notice's effective date. Your continued use of our Site following the posting of changes constitutes your acceptance of such changes.</p>

      <h2>Contact Information</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at: BLUESPRUCE1986@msn.com.</p>
      <h3>Blue Spruce Concepts, Inc. Privacy Notice for California Consumers</h3>
      <p>Effective Date: July 1, 2020</p>
      <p>Last Reviewed on: June 30, 2020</p>

      <p>This Privacy Notice for California Consumers supplements the information contained in the Privacy Statement of #Business Name# (“collectively, “we,” “us,” or “our) and applies solely to all visitors, users, and others who reside in the State of California ("consumers" or "you"). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA) and any terms defined in the CCPA have the same meaning when used in this Notice.</p>
      <p>To the extent temporarily exempted from application of the CCPA, this Notice does not apply to employment-related personal information collected from California-based employees, job applicants, contractors, or similar individuals (“employment information”) or to personal information reflecting a written or verbal business-to-business communication ("B2B personal information"). For clarity, to the extent required by Cal. Civ. Code 1798.100, this Notice does apply to employment information in so far as the law requires disclosure at or before the point of collection of the categories of personal information to be collected and the purposes for which the categories of personal information shall be used.</p>
      <p>This Policy applies only to Personal Information collected through the Site and does not apply to any other data or information collected by us online or offline except to the extent this Policy is expressly incorporated in connection with such other Services, such as by internet link on a website, reference within a contract, or other presentation or display to Users.</p>

      <h2>Information We Collect</h2>
      <p>We collect information that identifies, relates to, describes, references, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer, household, or device ("personal information"). Personal information does not include:</p>
      <ul>
        <li>Publicly available information from government records.</li>
        <li>Deidentified or aggregated consumer information.</li>
        <li>Information excluded from the CCPA's scope, like:
          <ul>
            <li>health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;</li>
            <li>personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FCRA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.</li>
          </ul>
        </li>
      </ul>
      <p>In particular, we have collected the following categories of personal information from its consumers within the last twelve (12) months:</p>
    <h2>Information We Collect</h2>
        <table style={styles.table}>
            <thead>
            <tr>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Examples</th>
                <th style={styles.th}>Collected</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index} style={styles.tr}>
                <td style={styles.td}>{item.category}</td>
                <td style={styles.td}>{item.examples}</td>
                <td style={styles.td}>{item.collected}</td>
                </tr>
            ))}
            </tbody>
        </table>
    <h2>Use of Personal Information</h2>
      <p>We may use or disclose the personal information we collect for one or more of the following purposes:</p>
      <ul>
        <li>To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to request a price quote or ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery.</li>
        <li>To provide, support, personalize, and develop our Site, products, and services.</li>
        <li>To create, maintain, customize, and secure your account with us.</li>
        <li>To process your requests, purchases, transactions, and payments and prevent transactional fraud.</li>
        <li>To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.</li>
        <li>To personalize your Site experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Site, third-party sites, and via email or text message (with your consent, where required by law).</li>
        <li>To help maintain the safety, security, and integrity of our Site, products and services, databases and other technology assets, and business.</li>
        <li>For testing, research, analysis, and product development, including to develop and improve our Site, products, and services.</li>
        <li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li>
        <li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</li>
        <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us about our [Website users/consumers] is among the assets transferred.</li>
      </ul>
      <p>We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.</p>

      <h2>Sharing Personal Information</h2>
      <p>We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.</p>

      <h3>Disclosures of Personal Information for a Business Purpose</h3>
      <p>In the preceding twelve (12) months, we have disclosed the following categories of personal information for a business purpose:</p>
      <ul>
        <li>Category A: Identifiers.</li>
        <li>Category B: California Customer Records personal information categories.</li>
        <li>Category C: Protected classification characteristics under California or federal law.</li>
        <li>Category D: Commercial information.</li>
        <li>Category F: Internet or other similar network activity.</li>
        <li>Category G: Geolocation data.</li>
        <li>Category H: Sensory data.</li>
        <li>Category I: Professional or employment-related information.</li>
        <li>Category K: Inferences drawn from other personal information.</li>
      </ul>

      <h3>Categories of Disclosures</h3>
      <p>We disclose your personal information for a business purpose to the following categories of third parties:</p>
      <ul>
        <li>Our affiliates.</li>
        <li>Service providers.</li>
        <li>Third parties to whom you or your agents authorize us to disclose your personal information in connection with products or services we provide to you.</li>
      </ul>

      <h3>Sales of Personal Information</h3>
      <p>In the preceding twelve (12) months, we have not sold any personal information.</p>

      <h2>Your Rights and Choices</h2>
      <p>The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.</p>

      <h3>Access to Specific Information and Data Portability Rights</h3>
      <p>You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</p>
      <ul>
        <li>The categories of personal information we collected about you.</li>
        <li>The categories of sources for the personal information we collected about you.</li>
        <li>Our business or commercial purpose for collecting or selling that personal information.</li>
        <li>The categories of third parties with whom we share that personal information.</li>
        <li>The specific pieces of personal information we collected about you (also called a data portability request).</li>
        <li>If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
          <ul>
            <li>sales, identifying the personal information categories that each category of recipient purchased; and</li>
            <li>disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.</li>
          </ul>
        </li>
      </ul>
      <p>We do not provide these access and data portability rights for employment or B2B information.</p>
       <h2>Deletion Request Rights</h2>
      <p>You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.</p>
      <p>We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:</p>
      <ul>
        <li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, or otherwise perform our contract with you.</li>
        <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
        <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
        <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
        <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).</li>
        <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.</li>
        <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
        <li>Comply with a legal obligation.</li>
        <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
      </ul>
      <p>We do not provide these deletion rights for B2B personal information.</p>

      <h2>Exercising Access, Data Portability, and Deletion Rights</h2>
      <p>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either:</p>
      <ul>
        <li>Emailing us at BLUESPRUCE1986@msn.com.</li>
        <li>Calling us at (303) 278-7211.</li>
      </ul>
      <p>Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.</p>
      <p>You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</p>
      <ul>
        <li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include:
          <ul>
            <li>We will use the data we have to match against data provided.</li>
          </ul>
        </li>
        <li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
      </ul>
      <p>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.</p>
      <p>Making a verifiable consumer request does not require you to create an account with us.</p>
      <p>We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.</p>

      <h2>Response Timing and Format</h2>
      <p>We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.</p>
      <p>If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will deliver our written response by mail or electronically, at your option.</p>
      <p>Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</p>
      <p>We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>
      <p>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:</p>
      <ul>
        <li>Deny you goods or services.</li>
        <li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
        <li>Provide you a different level or quality of goods or services.</li>
        <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
      </ul>
      <h2>Other California Privacy Rights</h2>
      <p>California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our Site that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to BLUESPRUCE1986@msn.com or write us at:</p>
      

      <h2>Changes to Our Privacy Notice</h2>
      <p>We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Website and update the notice's effective date. Your continued use of our Site following the posting of changes constitutes your acceptance of such changes.</p>

      <h2>Contact Information</h2>
      <p>If you have any questions or comments about this notice, the ways in which we collect and use your information described here and in the Privacy Policy, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:</p>
      <p>Phone: (303) 278-7211</p>
      <p>Email: BLUESPRUCE1986@msn.com</p>
      

      <h2>Cookie Notice</h2>
      <h3>1. About this Cookie Notice</h3>
      <p>This cookie notice applies when you use any of our Services that refer or link to this notice. This notice may be supplemented by additional cookie notices, or terms provided on certain areas of the Service or during our interactions with you. With the exception to the cookies that are set by third parties, the company that owns or administers the Service, as identified therein, is the primary controller of your personal information provide to, or collected by or for, the Service. This Cookie Notice is subject to our Privacy Policy and Terms of Use.</p>

      <h3>2. What are “Cookies” and Why Do we Use Them?</h3>
      <p>Cookies are small text files that are placed on your computer by websites that you visit. Cookies are widely used in order to make websites and applications work, or work more efficiently, and help them remember certain information about you, either for the duration of your visit (using a "session" cookie) or for repeat visits (using a "persistent" cookie). The cookies used on this website are as follows:</p>
      <ul>
        <li><strong>Strictly necessary cookies:</strong> These cookies are essential in order to enable you to move around the website. They are usually only set in response to actions made by you which amount to a request for service, such as setting your privacy preferences, logging in or filling in forms. For example, authentication and security cookies are used to identify and recognize registered users and to enable them to gain access to requested content or features. You can set your browser to block or alert you about these cookies, but without these cookies, services you have asked for cannot be provided. See below for more information on how to manage the collection of this information, or, refer to your email browser or device instructions.</li>
        <li><strong>Functionality cookies:</strong> These cookies allow our websites to remember the choices you make and your account preferences and to provide enhanced, more personal features. These are set by us or by our third party providers whose services we have added to our pages. For example, these cookies will remember your log-in details. You can set your browser to block or alert you about these cookies, but without these cookies, services you have asked for cannot be provided. See below for more information on how to manage the collection of this information, or, refer to your email browser or device instructions.</li>
        <li><strong>Performance cookies:</strong> These are analytics and research cookies that allow us to count visits and measure traffic, so we can measure and improve the performance of our site. They also help us to know which pages are the most and least popular, and see how visitors move around the site. This helps us to improve the way the website works and improve user experience. All information these cookies collect is aggregated and therefore anonymous. You can set your browser to block or alert you about these cookies. Blocking these cookies will not affect the service provided you. See below for more information on how to manage the collection of this information, or, refer to your email browser or device instructions.</li>
        <li><strong>Targeting cookies:</strong> These cookies are set by us and our advertising partners to record your visit to the website, the pages you have visited and the links you have followed. We, and our advertising partners, will use this information to make the website, and, the advertising displayed to you more relevant to your interests. You can set your browser to block or alert you about these cookies. Blocking these cookies will not affect the service provided you, but will limit the targeted advertising that you will see, or limit our ability to tailor the website experience to your needs. See below for more information on how to manage the collection of this information, or, refer to your email browser or device instructions.</li>
        <li><strong>Third Party and Social Media Cookies:</strong> These cookies are set by a range of social media services that we have added to our websites that enable you to share our content with your colleagues, friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages that you see on other websites that you visit. If you do not allow these cookies you may not be able to use of see the social media sharing tools. See below for more information on how to manage the collection of this information, or, refer to your email browser or device instructions.</li>
        <li><strong>Tracking Technologies Including Pixels, Script, Web Beacons/Gifs, Page Tags:</strong> These files, or, code may be included in our emails and mobile apps to record how you interact with us, to help us better analyze and improve our services to you. Again, you can block the cookies either through your browser or device settings, and these settings will apply to all cookies whether included on websites or in emails. However, in some instances, depending on your email or browser settings, the files may be automatically accepted (for example, when you've added an email address to your address book or safe senders list). See below for more information on how to manage the collection of this information, or, refer to your email browser or device instructions.</li>
      </ul>

      <h3>3. How to refuse the use of cookies</h3>
      <p>You can prevent your browser from accepting certain cookies, have the browser require your consent before a new cookie is placed in your browser, or block cookies altogether by selecting the appropriate settings on your browser privacy preferences menu.</p>
      <p>The links below will help you find the settings for some common browsers (please note that we are not responsible for the content of external websites):</p>
      <ul>
        <li>Manage cookie settings in <a href='https://support.google.com/chrome/answer/95647?hl=en'>Chrome</a> and <a href='https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DAndroid&oco=1'>Chrome Android</a> and <a href='https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DiOS&oco=1'>Chrome iOS</a></li>
        <li>Manage cookie settings in <a href='https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac'>Safari</a> and <a href='https://support.apple.com/en-gb/105082'>Safari iOS</a></li>
        <li>Manage cookie settings in <a href='https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US'>Firefox</a></li>
        <li>Manage cookie settings in <a href='https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d'>Internet Explorer</a></li>
        <li>Manage cookie settings in <a href='https://help.opera.com/en/latest/web-preferences/'>Opera</a></li>
      </ul>
      <p>For all other browsers, or, for alternative advice, help may be sought by visiting <a href='https://allaboutcookies.org/'>www.allaboutcookies.org</a>, or, via your device user manual, or, online help files. For information on how to opt-out of cookies set by our suppliers, please visit the applicable links listed in the table above.</p>

      <h3>4. Third Party Web Advertising Services</h3>
      <p>Our Services may use Google Analytics, particularly within our marketing or free content sites, for the purposes of analyzing visitor / customer site interactions including interactions with our online marketing campaigns. For information about how Google processes the data collected please refer to the <a href='https://policies.google.com/privacy'>Google Privacy Policy</a>.</p>
      <p>You may opt-out of third party web advertising services that provide personalized advertising based on your online activity. You can also configure your web browser to delete and / or block the use of cookies for any third party (see b for further information).</p>
      <p>The following sites may be used to register your 3rd party opt-out preferences:</p>
      <ul>
        <li>click <a href='https://optout.aboutads.info/'>here</a> or <a href='https://thenai.org/how-to-opt-out/'>here</a> for the U.S.</li>
        <li>click <a href='https://youradchoices.ca/en/tools'>here</a> for Canada</li>
        <li>click <a href='https://youronlinechoices.eu/'>here </a>for the EU</li>
      </ul>
      <p>Please note: Clicking the links above will redirect you to the appropriate third party website. We are not responsible for the content of external websites. Opting out of Advertising Cookies will not remove advertising from the pages you visit; instead it means the ads you will see may not be matched to your interests.</p>

      <h3>5. Changes</h3>
      <p>We reserve the right to amend this notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Site and update the notice's effective date. Your continued use of our Site following the posting of changes constitutes your acceptance of such changes.</p>

      <h3>6. Contact</h3>
      <p>If you have any questions, comments, complaints or requests regarding this cookie notice, or our processing of your information, you can contact us at: BLUESPRUCE1986@msn.com.</p>
      <p>You may also lodge a complaint with the data protection authority in the applicable jurisdiction.</p>
</div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 800,
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  },
  tr: {
    border: "1px solid #ddd",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
};