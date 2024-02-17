const About = () => {
    return (
        <div className='my-container my-20'>
            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                        <span className='relative inline-block'>
                            <svg
                                viewBox='0 0 50 21'
                                fill='currentColor'
                                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                            >
                                <defs>
                                    <pattern
                                        id='70326c9b-4a0f-429b-9c76-792941e326d5'
                                        x='0'
                                        y='0'
                                        width='.10'
                                        height='.3'
                                    >
                                        <circle cx='1' cy='1' r='.7' />
                                    </pattern>
                                </defs>
                                <rect
                                    fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                                    width='52'
                                    height='24'
                                />
                            </svg>
                            <span className='relative'>A</span>
                        </span>{' '}
                        Post-Disaster Community Health and Medical Supply Chain Platform
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                        In times of crisis and disaster, swift and coordinated responses are critical to safeguarding the health and well-being of affected communities. The "Post-Disaster Community Health and Medical Supply Chain Platform" serves as a robust digital infrastructure designed to facilitate efficient and effective distribution of essential medical supplies and healthcare services in the aftermath of natural disasters, pandemics, or other emergencies.
                    </p>
                </div>
            </div>
            <div className='max-w-screen-xl sm:mx-auto'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Real-Time Inventory Management
                            </p>
                            <p className='text-gray-700'>
                                A centralized system to monitor the availability and distribution of medical supplies across different locations.
                                <br />
                                <br />
                                This feature enables stakeholders to identify shortages, track deliveries, and prioritize allocation based on evolving needs.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Demand Forecasting and Planning
                            </p>
                            <p className='text-gray-700'>
                                Utilizing predictive analytics, the platform anticipates healthcare demands in affected areas, allowing for proactive resource allocation and strategic planning to mitigate shortages and ensure timely response.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Geospatial Mapping and Resource Allocation
                            </p>
                            <p className='text-gray-700'>
                                Interactive maps provide visual insights into the geographic distribution of resources, enabling efficient deployment of medical teams, mobile clinics, and emergency facilities to underserved communities.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Volunteer Coordination and Deployment
                            </p>
                            <p className='text-gray-700'>
                                A user-friendly interface facilitates the recruitment, training, and deployment of healthcare professionals and volunteers, optimizing their efforts in providing medical care and support to disaster-stricken areas.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Communication and Collaboration Tools
                            </p>
                            <p className='text-gray-700'>
                                Integrated communication channels enable seamless coordination and information sharing among stakeholders, fostering collaboration and ensuring a cohesive response effort.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Data Security and Privacy
                            </p>
                            <p className='text-gray-700'>
                                Robust security measures safeguard sensitive information and ensure compliance with privacy regulations, instilling trust and confidence in users and protecting the integrity of the platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;