import { useState } from "react";
import { PortfolioView } from "../displays/portfolio/Portfolio";

export function TogglePortfolioView(props: {
    setView: (view: PortfolioView) => void;
}) {
    const [view, setView] = useState(PortfolioView.Works);

    return (
        <div className='flex flex-row gap-2'>
            <button
                className={`${
                    view === PortfolioView.Works
                        ? "bg-zinc-200 border-t-2 border-black"
                        : "border-t-2 border-white hover:border-black transition-all duration-150"
                } px-8 py-2`}
                onClick={() => setView(PortfolioView.Works)}
            >
                Work Projects
            </button>
            <button
                className={`${
                    view === PortfolioView.Projects
                        ? "bg-zinc-200 border-t-2 border-black"
                        : "border-t-2 border-white hover:border-black transition-all duration-150"
                } px-8 py-2`}
                onClick={() => setView(PortfolioView.Projects)}
            >
                Indie Projects
            </button>
        </div>
    );
}
