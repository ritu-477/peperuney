import Icon from "../common/Icons";

export const NAV_DATA_LINK = [
    { icon: 'twitter', href: "https://x.com/i/flow/login" },
    { icon: "telegram", href: "https://web.telegram.org/a/" },
    { icon: "discord", href: "https://discord.com/" },
];

export const DROPDOWN_DATA = [
    { id: 1, label: "Smart Routing", href: "#smart-routing" },
    { id: 2, label: "Universal API", href: "#universal-api" },
    { id: 3, label: "LLM Observability", href: "#llm-observability" },
    { id: 4, label: "AI Compliance", href: "#ai-compliance" },
];

 export const CARD_DATA_HOW = [
    {
        id: 1,
        title: "GET YOUR WALLET READY",
        description:
            "Set up Phantom Wallet and connect it to Solana. Make sure Solana’s locked and loaded as the active network.",
        width: "322px",
        extraContent: null,
    },
    {
        id: 2,
        title: "FUND YOUR WALLET",
        description:
            "Load up on SOL from Coinbase, Binance, or OKX. Double-check your wallet address—no room for slip-ups.",
        width: "342px",
        extraContent: (
            <div className="p-3 bg-white border-4 lg:flex hidden border-black mt-9 gap-3 items-center w-full max-w-[342px]">
                <p className="font-schoolbell text-lg text-nowrap">
                    CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0
                </p>
                <div className="size-8 bg-black flex items-center justify-center">
                    <Icon iconName="solarCopy" />
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: "GRAB THAT $PepeRuney",
        description:
            "Hit up a Solana DEX like Meteora or Jupiter, swap your SOL for $PepeRuney, and lock it in. Hell yeah!",
        width: "322px",
        extraContent: null,
    },
];

 export const HEADER_NAV_ITEMS = [
     { label: "ABOUT", href: "#about", textColor: "text-green" },
    { label: "HOW TO BUY", href: "#how-to-buy", textColor: "text-green" },
    { label: "ARCADE", href: "#arcade", textColor: "text-green" },
    { label: "MEME", href: "#meme", textColor: "text-green" },
    { label: "FAQ", href: "#faq", textColor: "text-green" },
];

export const SOCIAL_ICONS = [
    { name: "twitter", href: "https://x.com/i/flow/login" },
    { name: "telegram", href: "https://web.telegram.org/a/" },
    { name: "discord", href: "https://discord.com/" },
];