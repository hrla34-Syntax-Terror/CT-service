import React from 'react';

var TermsAndConditions = (props) => {
  return (
    <div className='CTpopup'>
      <h2 className='CTQandA' style={{marginLeft:-20}}>Terms and Conditions</h2>
      <a href='#CTagreeToTCContainer'><span className='CTclose' onClick={() => props.hidePopup()}></span></a>
      <div id='CTrrAndTerms'>CUSTOMER RATINGS AND REVIEWS TERMS OF USE</div>
      <div id='CTtcBody'>
      <p>These Terms of Use govern your conduct associated with the Customer Ratings and Reviews and/or Questions and Answers service offered by Recreational Equipment, Inc. ("REI", the "CRR Service").</p>
      <p>By submitting any content to REI, you guarantee that:</p>
      <ul>
        <li><p>You are the sole author and owner of the intellectual property rights in the content;</p></li>
        <li><p>All "moral rights" that you may have in such content have been voluntarily waived by you;</p></li>
        <li><p>All content that you post is accurate;</p></li>
        <li><p>You are at least 18 years old;</p></li>
        <li><p>Use of the content you supply does not violate these Terms of Use and will not cause injury to any person or entity.</p></li>
      </ul>
      <p>You further agree that you may not submit any content:</p>
      <ul>
        <li><p>That is known by you to be false, inaccurate or misleading;</p></li>
        <li><p>That infringes any third party's copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy;</p></li>
        <li><p>That violates any law, statute, ordinance or regulation (including, but not limited to, those governing, consumer protection, unfair competition, anti-discrimination or false advertising);</p></li>
        <li><p>That is, or may reasonably be considered to be, defamatory, libelous, hateful, racially or religiously biased or offensive, unlawfully threatening or unlawfully harassing to any individual, partnership or corporation;</p></li>
        <li><p>For which you were compensated or granted any consideration by any third party;</p></li>
        <li><p>That includes any information that references other websites, addresses, email addresses, contact information or phone numbers;</p></li>
        <li><p>That contains any computer viruses, worms or other potentially damaging computer programs or files.</p></li>
      </ul>
      <p>You agree to indemnify and hold REI (and its officers, directors, agents, subsidiaries, joint ventures, employees and third-party service providers, including but not limited to Bazaarvoice, Inc.), harmless from all claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown including reasonable attorneys' fees, arising out of a breach of your representations and warranties set forth above, or your violation of any law or the rights of a third party.</p>
      <p>For any content that you submit, you grant REI a perpetual, irrevocable, royalty-free, transferable right and license to use, copy, modify, delete in its entirety, adapt, publish, translate, create derivative works from and/or sell and/or distribute such content and/or incorporate such content into any form, medium or technology throughout the world without compensation to you.</p>
      <p>All content that you submit may be used at REI's sole discretion. REI reserves the right to change, condense, withhold publication, remove or delete any content on REI's website that REI deems, in its sole discretion, to violate the content guidelines or any other provision of these Terms of Use. REI does not guarantee that you will have any recourse REI reserves the right to remove or to refuse to post any submission to the extent authorized by law. You acknowledge that you, not REI, are responsible for the contents of your submission. None of the content that you submit shall be subject to any obligation of confidence on the part of REI, its agents, subsidiaries, affiliates, partners or third party service providers and their respective directors, officers and employees.</p>
    </div>
    <a href='#CTagreeToTCContainer'><button className='CTacceptTC' style={{marginLeft:-20}} onClick={() => props.checkTCHidePopup()}>Accept</button></a>
    </div>
  )
}

export default TermsAndConditions;