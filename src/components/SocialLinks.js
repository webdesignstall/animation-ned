import React from 'react';
import Image from "next/image";

const SocialLinks = ({ socialLinks = [] }) => {
    return (
        <>

                <div className="flex gap-5">
                    {
                        socialLinks?.map((item, index) => (
                            <a key={index} target={'_blank'} href={item?.link} className='menu-nav-link'>
                                <Image src={item?.icon?.node?.sourceUrl} alt={item?.link} width={'40'}
                                       height={'40'} objectFit={'cover'}/>
                            </a>

                        ))
                    }
                </div>

        </>
    );
};

export default SocialLinks;