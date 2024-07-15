import React from 'react';
import { useNavigate } from 'react-router-dom';
import B02 from "../../../img/Blog-02.jpg";
import B03 from "../../../img/blog-03.jpg";
import B04 from "../../../img/blog-04.jpg";
import B05 from "../../../img/blog-05.jpg";
import B06 from "../../../img/blog-06.jpg";
import B07 from "../../../img/blog-07.jpg";

const items = [
    {
        title: "Edge Computing",
        description: "What is Edge Computing? Edge computing refers to a decentralized approach of processing and storing data closer to the source or the edge of the network, rather than relying solely on a centralized cloud infrastructure. In edge computing, computing resources, such as servers and data storage, are placed in close proximity to where the data is generated or needed, such as devices, sensors, or local networks. Purpose of edge computing The purpose of edge computing is to reduce latency, or the delay in data transmission, and enable faster processing and real-time analysis of data. By bringing computational capabilities closer to the edge devices, edge computing minimizes the need to send large amounts of data to a remote data center or the cloud for processing. Instead, data is processed locally, near its origin, allowing for quicker response times and more efficient use of network bandwidth.",
        imageUrl: B02,
        linkText: "Read More",
    },
    {
        title: "The Importance of Cybersecurity",
        description: "Cybersecurity refers to the practice of protecting computer systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. It involves the implementation of various measures, technologies, and best practices to safeguard digital information and mitigate the risks posed by cyber threats. A strong cybersecurity strategy can provide a good security posture against malicious attacks designed to access, alter, delete, destroy or extort an organization's or user's systems and sensitive data. Cybersecurity is also instrumental in preventing attacks that aim to disable or disrupt a system's or device's operations.",
        imageUrl: B03,
        linkText: "Read More",
    },
    {
        title: "WEB 2.0 Vs WEB 3.0",
        description: "Web 2.0 is a term that became popular in 2004 after a conference organized by Tim O'Reilly and Dale Dougherty. It means websites that focus on what users create, how easy they are to use, and how well they work with other websites. Web 2.0 is sometimes called the participative social web because it encourages people to interact and collaborate with each other. This new version of the web also allows for better communication between users in online communities. Many people think Web 2.0 is an improvement over the old way of doing things on the web, known as Web 1.0.",
        imageUrl: B04,
        linkText: "Read More",
    },
    {
        title: "BlockChain A Detailed Introduction",
        description: "All you need to know about blockchain technology History of blockchain - Blockchain isn’t just a database, its a new technology stack with digital trust that is revolutionizing the way we exchange value and information across the internet, by taking out the ‘gatekeepers’ from the process. For a complete and more detailed deep dive read our full article. Who Invented Blockchain? - The first blockchain-like protocol was proposed by cryptographer David Chaum in 1982. Later in 1991, Stuart Haber and W. Scott Stornetta wrote about their work on Consortiums. But it was Satoshi Nakamoto (presumed pseudonym for a person or group of people) who invented and implemented the first blockchain network after deploying the world’s first digital currency, Bitcoin.",
        imageUrl: B05,
        linkText: "Read More",
    },
    {
        title: "NFT's Introductory Overview",
        description: "An Overview of NFTs NFTs are currently taking the digital art and collectables world by storm. Just as everyone worldwide believed Bitcoin was the digital answer to currency, NFTs are now pitched as the digital answer to collectibles. As a result, digital artists are seeing their lives changing thanks to the massive sales to a new crypto audience. If you are interested in NFTs and want to explore more about what they are, you have come to the right place. Let’s dive in and see what all the fuss is about! What is NFT? An NFT (non-fungible token) is a unique digital item stored on a blockchain. NFTs can represent almost anything, and serve as a digital record of ownership. NFTs can represent a wide range of digital assets, such as artwork, music, videos, tweets, virtual real estate, and even memes. They are authenticated and verified through blockchain technology, which means that their ownership and provenance can be easily tracked and verified.",
        imageUrl: B06,
        linkText: "Read More",
    },
    {
        title: "Top 7 Flutter State Management Libraries In 2023",
        description: "Flutter State Management is one of the most important topics to consider while creating Flutter apps. Flutter is a popular mobile application development framework that comes with a variety of powerful tools and features, including robust state management capabilities. State management is a critical aspect of building scalable, maintainable, and efficient mobile applications. State management refers to the process of managing and updating the state of a widget or the entire application. State is the data that controls the behavior and appearance of an application. It can be as simple as a Boolean value or as complex as a custom object. In this article, we'll be diving into the best Flutter libraries out there. By exploring the most powerful and effective Flutter libraries available, you can take your app development skills to new heights.",
        imageUrl: B07,
        linkText: "Read More",
    },
];

function Bdetails() {
    const navigate = useNavigate();

    const handleClick = (imageUrl, title, description) => {
        navigate('/Blogmain', { state: { imageUrl, title, description } });
    };

    return (
        <div className="container px-4 pt-4 pb-[140px] max-lg:px-1">
            <div className="grid grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-36 gap-x-12">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-full cursor-pointer"
                        onClick={() => handleClick(item.imageUrl, item.title, item.description)}
                    >
                        <div className="rounded overflow-hidden shadow-lg w-full">
                            <div className="first-1">
                                <img src={item.imageUrl} alt={item.title} className="w-full" />
                            </div>
                            <div className="px-6 py-4 left-14 w-[80%] absolute bottom-[-98px] bg-white">
                                <h1 className="font-bold text-xl mb-2">{item.title}</h1>
                                <p className="text-gray-700 text-base line-clamp-3">{item.description}</p>
                                <div className="inline-flex text-[20px] items-center text-[#008fa8]">
                                    {item.linkText}
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bdetails;
