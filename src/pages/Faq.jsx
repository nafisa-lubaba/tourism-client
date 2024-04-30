

const Faq = () => {
    return (
        <section className="card bg-opacity-30 mt-10 bg-[#434336] text-[#682018]">
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl mt-5">Travel Tips with JourneyGenie</h2>
        <p className="mt-4 mb-8 dark:text-gray-600">Welcome to JourneyGenie! Here are some valuable travel tips and advice to enhance your travel experience:</p>
        <div className="space-y-4">
            <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Pack Light and Smart</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 border">
                    Pack versatile clothing items that can be mixed and matched. Consider the weather and activities at your destination and pack accordingly. Roll your clothes to save space and use packing cubes to stay organized.
                </p>
            </details>
            <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Stay Safe with JourneyGenie</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Research local customs and safety tips before your trip. Be vigilant in crowded areas and avoid displaying valuable items. Keep important documents, such as passports and travel insurance, secure and make digital copies as backup. JourneyGenie recommends using a money belt or hidden pouch for added security.
                </p>
            </details>
            <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Respect Local Culture and Traditions</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Learn a few basic phrases in the local language and respect cultural norms and traditions. Dress modestly and be mindful of local customs, especially when visiting religious sites. Ask for permission before taking photos of people or sacred places. JourneyGenie encourages travelers to immerse themselves in the local culture for a more authentic experience.
                </p>
            </details>
            <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Budget Wisely with JourneyGenie</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Set a budget for your trip and track your expenses. Look for budget-friendly accommodations, such as hostels or guesthouses, and consider alternative transportation options like buses or trains. Eat where the locals eat to experience authentic cuisine at affordable prices. JourneyGenie also recommends using travel rewards programs and discount websites to save money on flights and accommodations.
                </p>
            </details>
            <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Stay Healthy on Your Journey</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Prioritize your health while traveling by staying hydrated, eating balanced meals, and getting enough rest. Pack a small first aid kit with essentials like bandages, pain relievers, and any necessary medications. Use sunscreen and insect repellent to protect yourself from sunburn and bug bites. JourneyGenie advises travelers to be cautious of local water and food to avoid stomach issues.
                </p>
            </details>
            {/* Additional travel tips can be added here */}
        </div>
    </div>
</section>

    
    );
};

export default Faq;