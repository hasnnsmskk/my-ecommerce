import React from 'react';
import hooliLogo from '../../assets/ShopPageİmg/hooli.png';
import lyftLogo from '../../assets/ShopPageİmg/lyft.png';
import leafLogo from '../../assets/ShopPageİmg/leaf.png';
import stripeLogo from '../../assets/ShopPageİmg/stripe.png';
import awsLogo from '../../assets/ShopPageİmg/aws.png';
import redditLogo from '../../assets/ShopPageİmg/reddit.png';

function MobileClient() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 py-10 bg-gray-50 md:gap-24">
            <img src={hooliLogo} alt="Hooli" className="w-20 h-20 object-contain" />
            <img src={lyftLogo} alt="Lyft" className="w-20 h-20 object-contain" />
            <img src={leafLogo} alt="Leaf" className="w-20 h-20 object-contain" />
            <img src={stripeLogo} alt="Stripe" className="w-20 h-20 object-contain" />
            <img src={awsLogo} alt="AWS" className="w-20 h-20 object-contain" />
            <img src={redditLogo} alt="Reddit" className="w-20 h-20 object-contain" />
        </div>
    );
}

export default MobileClient;
