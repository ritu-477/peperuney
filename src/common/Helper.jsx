import Icon from '../common/Icons'
import strakeImg from '../assets/images/webp/stake-image.webp'
import meteoraImg from '../assets/images/webp/meteora-image.webp'
import kreatorImg from '../assets/images/webp/kreator-ai.webp'

export const NAV_DATA_LINK = [
    { icon: 'twitter', href: "https://x.com/i/flow/login" },
    { icon: "telegram", href: "https://web.telegram.org/a/" },
    { icon: "discord", href: "https://discord.com/" },
];

export const DROPDOWN_DATA = [
    { id: 1, label: "About", href: "#smart-routing" },
    { id: 2, label: "How To Buy", href: "#universal-api" },
    { id: 3, label: "Faq", href: "#llm-observability" }
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

export const OUR_PARTNERS = [
    {
        image: strakeImg,
    },
    {
        image: meteoraImg,
    },
    {
        image: kreatorImg,
    },
];

export const ACCORDION_ITEMS = [
    {
        title: 'How does the burn mechanism work?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },

    {
        title: 'How can I get ivolved in the community?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },

    {
        title: 'How does multi-chain aspect of $%Peperuney work',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },

    {
        title: 'What is the Pizzaruney Arcade?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },

    {
        title: 'Wen Airdrops?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
];