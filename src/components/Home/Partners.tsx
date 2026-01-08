import React from "react";

const logos = [

    { name: "Wix", src: "https://cdn.brandfetch.io/id93wC1WMj/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759155953777" },
    { name: "Zoho", src: "https://cdn.brandfetch.io/idssig0_jY/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1687855848599" },

    { name: "Zapier", src: "https://cdn.brandfetch.io/idNMs_nMA0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667563370508" },

    { name: "ChatGPT", src: "https://cdn.brandfetch.io/id2UDPob7G/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1741663805615" },

    { name: "WordPress", src: "https://cdn.brandfetch.io/idbnlnCBDY/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668516065445" },

    { name: "Figma", src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1729268241679" },

    { name: "Hubspot", src: "https://cdn.brandfetch.io/idRt0LuzRf/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761193704935" },

    { name: "Odoo", src: "https://cdn.brandfetch.io/idWjsO6xZS/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668014818645" },

    { name: "Google Analytics", src: "https://cdn.brandfetch.io/idYpJMnlBx/w/192/h/192/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1760196629003" },

    { name: "CapCut", src: "https://cdn.brandfetch.io/idUmqKFgE3/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1743997751054" },

    { name: "Canva", src: "https://cdn.brandfetch.io/id9mVQlyB1/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1725863496299" },

];


export default function Partners() {
    return (
        <div className="w-full bg-linear-to-r from-[#253f82] to-[#4d6ab2] py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center gap-12 px-6">
                {/* Left Stat */}
                <div className="flex-shrink-0 text-white">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold">100+</div>
                    <div className="text-sm opacity-80">Tools We Teach</div>
                </div>

                {/* Divider */}
                <div className="h-8 md:h-10 lg:h-12 w-px bg-white/30" />

                {/* Carousel */}
                <div className="relative flex-1 overflow-hidden">
                    <div className="flex w-max animate-marquee gap-16">
                        {[...logos, ...logos].map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center transition"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-6 md:h-8 lg:h-10 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
