export default function CardDataStats({totalAgents, totalCustomers, totalPolicies, totalAmountInsured, totalPremium}) {
    const cardItems = [
        {title: 'Total Agents', total: totalAgents},
        {title: 'Total Customers', total: totalCustomers},
        {title: 'Total Policies', total: totalPolicies},
        {title: 'Total Amount Insured', total: totalAmountInsured},
        {title: 'Total Premium', total: totalPremium},
    ];

    return (
        <section className="flex flex-wrap gap-4">
            {cardItems.map((item, index) => (
                <div key={index} className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default flex-1">
                    <div className="mt-4 px-5 flex justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-black">{item.total}</h4>
                            <span className="text-sm font-medium">{item.title}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}