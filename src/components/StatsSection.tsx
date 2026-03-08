import { stats } from "../data/site-data";

export const StatsSection = () => {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container px-4">
                <div className="grid gap-12 sm:grid-cols-3 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="text-primary-100 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
