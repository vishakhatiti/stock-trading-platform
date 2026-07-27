import React from 'react';
import "./Style.css";

function Footer() {
    return ( 
        <footer style={{backgroundColor:"#f5f5f5"}}>
           <div className='container p-2 border-top'>
            <div className='row mt-5'>
                <div className='col p-5'>
                    <img src='media/images/logo.svg' style={{width:"70%", marginTop:"-80px"}}/>
                    <p style={{ fontSize: "12px", color: "#333", marginTop:"-20px" }}>&copy;2010 - 2026, Zerodha Broking Ltd. <br/> All rights reserved.</p>

                    <ul className='social'>
                        <li><a target="_blank" href=''>
                            <i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" href=''>
                            <i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" href=''>
                            <i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" href=''>
                            <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    <hr></hr>

                    <ul className='social'>
                        <li><a target="_blank" href=''>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" href=''>
                            <i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" href=''>
                            <i class="fa fa-telegram" aria-hidden="true"></i></a></li>
                    </ul>

                    <div className='app-badges'>
                        <a target='_blank' href=''>
                            <img src='media/images/google-play-badge-light.svg' style={{width:"55%", padding:"5px"}}/></a>
                            <a target='_blank' href=''>
                            <img src='media/images/appstore-badge-light.svg' style={{width:"45%", padding:"3px"}}/></a>
                    </div>
                </div>

                <div className='col'>
                    <h5>Account</h5>
                    <a href='' className='footer-btns'>Open demat account</a><br/>
                    <a href='' className='footer-btns'>Minor demat account</a><br/>
                    <a href='' className='footer-btns'>HUF demat account</a><br/>
                    <a href='' className='footer-btns'>Commodity</a><br/>
                    <a href='' className='footer-btns'>Dematerialisation</a><br/>
                    <a href='' className='footer-btns'>Fund transfer</a><br/>
                    <a href='' className='footer-btns'>MTF</a><br/>
                    <a href='' className='footer-btns'>NRI demat account</a><br/>
                </div>

                <div className='col'>
                    <h5>Support</h5>
                    <a href='' className='footer-btns'>Contact us</a><br/>
                    <a href='' className='footer-btns'>Support portal</a><br/>
                    <a href='' className='footer-btns'>How to file a complaint?</a><br/>
                    <a href='' className='footer-btns'>Status of your complaints</a><br/>
                    <a href='' className='footer-btns'>Bulletin</a><br/>
                    <a href='' className='footer-btns'>Circular</a><br/>
                    <a href='' className='footer-btns'>Z-Connect blog</a><br/>
                    <a href='' className='footer-btns'>Downloads</a><br/>
                </div>

                <div className='col'>
                    <h5>Company</h5>
                    <a href='' className='footer-btns'>About</a><br/>
                    <a href='' className='footer-btns'>Philosophy</a><br/>
                    <a href='' className='footer-btns'>Press & media</a><br/>
                    <a href='' className='footer-btns'>Careers</a><br/>
                    <a href='' className='footer-btns'>Zerodha Cares (CSR)</a><br/>
                    <a href='' className='footer-btns'>Zerodha.tech</a><br/>
                    <a href='' className='footer-btns'>Open source</a><br/>
                    <a href='' className='footer-btns'>Referral program</a><br/>
                </div>

                <div className='col'>
                    <h5>Quick links</h5>
                    <a href='' className='footer-btns'>Upcoming IPOs</a><br/>
                    <a href='' className='footer-btns'>Brokerage charges</a><br/>
                    <a href='' className='footer-btns'>Market holidays</a><br/>
                    <a href='' className='footer-btns'>Economic calendar</a><br/>
                    <a href='' className='footer-btns'>Calculators</a><br/>
                    <a href='' className='footer-btns'>Markets</a><br/>
                    <a href='' className='footer-btns'>Sectors</a><br/>
                    <a href='' className='footer-btns'>Gift Nifty</a><br/>
                </div>
                </div>
            
            <div className='mt-5 text-muted p-2' style={{fontSize:"12px"}}>
              <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

              <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing               complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication,               Speedy redressal of the grievances</p>

              <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

              <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

              <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of               pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with               your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or               mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account               statement issued by NSDL/CDSL every month.</p>

              <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

              <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your               stock brokers/depository participants. Receive information of your transactions directly from Exchange/              Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one               time exercise while dealing in securities markets - once KYC is done through a SEBI registered               intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you               approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to               issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your               bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank               account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of               others. If you find anyone claiming to be part of Zerodha and offering such services, please create a               ticket here.</p>

              <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private               Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the               exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.              </p>

              <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange               traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI               Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes               arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange               Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve               Bank of India (RBI).</p>
              
              <div className='footer-graveyard-links text-center'>
                <ul>
                <li><a rel='nofollow' href=''>NSE</a></li>
                <li><a rel='nofollow' href=''>BSE</a></li>
                <li><a rel='nofollow' href=''>MCX</a></li> 
                <li><a rel='nofollow' href=''>MSEI</a></li> 
                <li><a rel='nofollow' href=''>Terms & conditions</a></li> 
                <li><a rel='nofollow' href=''>Policies & procedures</a></li> 
                <li><a rel='nofollow' href=''>Privacy policy</a></li> 
                <li><a rel='nofollow' href=''>Disclosure</a></li> 
                <li><a rel='nofollow' href=''>For investor's attention</a></li> 
                <li><a rel='nofollow' href=''>Investor charter</a></li> 
                <li><a rel='nofollow' href=''>Sitemap</a></li>
              </ul>
              </div>

              </div>
        </div>
        </footer>
     );
}

export default Footer;