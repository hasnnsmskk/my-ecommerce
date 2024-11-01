import React from 'react';
import hooliLogo from '../../assets/ShopPageİmg/hooli.png';
import lyftLogo from '../../assets/ShopPageİmg/lyft.png';
import leafLogo from '../../assets/ShopPageİmg/leaf.png';
import stripeLogo from '../../assets/ShopPageİmg/stripe.png'
import awsLogo from '../../assets/ShopPageİmg/aws.png';
import redditLogo from '../../assets/ShopPageİmg/reddit.png';

const CompaniesSection = () => {


    return (
        <div className="text-center py-8 bg-gray-50 mr-10 ml-10">
            <h3 className="text-4xl font-bold mb-12">Big Companies Are Here</h3>
            <p className="text-gray-500  text-center mb-16 lg:w-1/3 mx-auto">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-32 py-10">
                <img src={hooliLogo} alt="Hooli" className="w-20 h-20 object-contain" />
                <img src={lyftLogo} alt="Lyft" className="w-20 h-20 object-contain" />
                <img src={leafLogo} alt="Leaf" className="w-20 h-20 object-contain" />
                <img src={stripeLogo} alt="Stripe" className="w-20 h-20 object-contain" />
                <img src={awsLogo} alt="AWS" className="w-20 h-20 object-contain" />
                <img src={redditLogo} alt="Reddit" className="w-20 h-20 object-contain" />
            </div>
        </div>
    );
};

export default CompaniesSection;
