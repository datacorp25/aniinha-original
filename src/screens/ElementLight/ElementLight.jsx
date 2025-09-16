import React from "react";

const profileData = {
  name: "Ana lza",
  status: "Online agora",
  location: "Florianopolis, Santa Catarina",
  description: "Descubra TUDO que essa santinha é capaz de fazer\n😈",
  profileImage: "https://c.animaapp.com/eVXvmGHZ/img/foto-de-perfil@2x.png",
};

const promotionalBanners = [
  {
    id: 1,
    href: "https://tapthe.link/Aninhaads",
    bgColor: "#3fa9f5bf",
    borderColor: "#3fa9f5",
    bannerImage: "https://c.animaapp.com/eVXvmGHZ/img/banner.png",
    text: "PROMOÇÃO RELAMPAGO ACABA EM: 17:23",
  },
  {
    id: 2,
    href: "https://privacy.com.br/checkout/aniinhalza",
    bgColor: "#ff5b2ebf",
    borderColor: "#ff5b2e",
    bannerImage: "https://c.animaapp.com/eVXvmGHZ/img/banner-1.png",
    text: "RESTAM APENAS 3 VAGAS TERMINA EM: 15:19",
  },
];

const socialLinks = [
  {
    id: 1,
    href: "https://tapthe.link/Whats",
    bgColor: "#25d36626",
    borderColor: "#25d36680",
    icon: "https://c.animaapp.com/eVXvmGHZ/img/kamilinha-whatsapp@2x.png",
    title: "Aninha WhatsApp",
    description: "Vem conhecer meu privado",
    buttonText: "Online",
    buttonHref: "https://tapthe.link/K-whats-tw",
  },
  {
    id: 2,
    href: "https://tapthe.link/INSTA",
    bgColor:
      "linear-gradient(90deg,rgba(245,96,64,0.15)_0%,rgba(225,48,108,0.15)_100%)",
    borderColor: "#e1306c80",
    icon: "https://c.animaapp.com/eVXvmGHZ/img/instagram-principal@2x.png",
    title: "Instagram Principal",
    description: "@aniinhalza",
    buttonText: "Me Siga",
    buttonHref: "https://tapthe.link/INSTA",
  },
  {
    id: 3,
    href: "https://tapthe.link/BM5REWnoe",
    bgColor: "#00000040",
    borderColor: "#ffffff99",
    icon: "https://c.animaapp.com/eVXvmGHZ/img/twitter--x-@2x.png",
    title: "Tiktok",
    description: "Minha Rede Social Mais Quente",
    buttonText: "VEM VER",
    buttonHref: "https://tapthe.link/BM5REWnoe",
  },
  {
    id: 4,
    href: "https://tapthe.link/Aninhaads",
    bgColor: "#3fa9f533",
    borderColor: "#3fa9f58c",
    icon: "https://c.animaapp.com/eVXvmGHZ/img/pr-vias-vip-no-telegram@2x.png",
    title: "PRÉVIAS VIP no Telegram",
    description: "Conteúdos diários + sorteios",
    buttonText: "PROMOÇÃO",
    buttonHref: "https://tapthe.link/Aninhaads",
  },
  {
    id: 5,
    href: "https://privacy.com.br/checkout/aniinhalza",
    bgColor: "#ff5b2e33",
    borderColor: "#ff5b2e8c",
    icon: "https://c.animaapp.com/eVXvmGHZ/img/privacy---50--off@2x.png",
    title: "Privacy — 50% OFF",
    description: "Acesso completo + presente surpresa",
    buttonText: "Oferta",
    buttonHref: "https://privacy.com.br/checkout/aniinhalza",
  },
];

export const ElementLight = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full min-h-screen items-center justify-start px-4 py-0 relative bg-[url(https://c.animaapp.com/eVXvmGHZ/img/1920w-light.svg)] bg-cover bg-center"
      data-model-id="1:165"
    >
      <div className="flex w-full max-w-none md:max-w-[560px] items-start gap-2 pt-8 pb-20 px-4 flex-[0_0_auto] flex-col relative">
        <header className="flex flex-col sm:flex-row items-center gap-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
          <div
            className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-[55px] md:rounded-[65px] shadow-[0px_8px_24px_#00000070] bg-cover bg-[50%_50%] flex-shrink-0"
            style={{ backgroundImage: `url(${profileData.profileImage})` }}
            role="img"
            aria-label="Profile picture of Ana lza"
          />

          <div className="flex flex-1 items-start gap-px pt-[21.44px] pb-4 px-0 flex-col relative min-w-0">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] font-kamilydias-com-semantic-heading-1 font-[number:var(--kamilydias-com-semantic-heading-1-font-weight)] text-white text-[22px] md:text-[length:var(--kamilydias-com-semantic-heading-1-font-size)] tracking-[var(--kamilydias-com-semantic-heading-1-letter-spacing)] leading-[28px] md:leading-[var(--kamilydias-com-semantic-heading-1-line-height)] [font-style:var(--kamilydias-com-semantic-heading-1-font-style)]">
                {profileData.name}
              </h1>
            </div>

            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="relative w-3 h-3 z-[1] bg-[#31d277] rounded-md animate-status-pulse"
                aria-label="Online status indicator"
              />

              <div className="inline-flex items-start flex-[0_0_auto] z-0 flex-col relative">
                <p className="relative w-fit mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\'Inter\',Helvetica] font-bold text-white text-[13px] md:text-[15.8px] tracking-[0] leading-[18px] md:leading-[23.2px] whitespace-nowrap">
                  {profileData.status}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[18px] h-[18px]"
                alt="Location icon"
                src="https://c.animaapp.com/eVXvmGHZ/img/component-1.svg"
              />

              <div className="inline-flex items-start flex-[0_0_auto] flex-col relative">
                <p className="relative w-auto h-6 mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\'Inter\',Helvetica] font-bold text-white text-[12px] md:text-[15.9px] tracking-[0] leading-[18px] md:leading-[23.2px] truncate">
                  {profileData.location}
                </p>
              </div>
            </div>

            <div className="flex items-start self-stretch w-full flex-[0_0_auto] flex-col relative">
              <p className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\[\'Inter\',Helvetica] font-bold text-white text-[13px] md:text-[15.6px] tracking-[0] leading-[18px] md:leading-[23.2px]">
                {profileData.description.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < profileData.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </header>

        <section
          className="flex items-start gap-1.5 self-stretch w-full flex-[0_0_auto] flex-col relative"
          aria-label="Promotional banners"
        >
          {promotionalBanners.map((banner) => (
            <a
              key={banner.id}
              className="self-stretch w-full h-[150px] rounded-[14px] overflow-hidden border-[3px] border-solid shadow-[0px_6px_18px_#0000004c] relative animate-blink-continuous mx-auto max-w-full"
              style={{
                backgroundColor: banner.bgColor,
                borderColor: banner.borderColor,
              }}
              href={banner.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Promotional banner: ${banner.text}`}
            >
              <div className="relative w-[calc(100%-6px)] h-[141px] top-[3px] left-[3px]">
                <div
                  className="absolute w-full h-[117px] top-6 left-0 rounded-[10px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${banner.bannerImage})` }}
                />

                <div className="flex w-full h-[30px] items-center justify-center px-2.5 py-0 absolute top-0 left-0 bg-[#000000d9] rounded-[10px_10px_0px_0px]">
                  <p className="relative w-fit font-kamilydias-com-semantic-link font-[number:var(--kamilydias-com-semantic-link-font-weight)] text-white text-[length:var(--kamilydias-com-semantic-link-font-size)] text-center tracking-[var(--kamilydias-com-semantic-link-letter-spacing)] leading-[var(--kamilydias-com-semantic-link-line-height)] underline whitespace-nowrap [font-style:var(--kamilydias-com-semantic-link-font-style)]">
                    {banner.text}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </section>

        <nav
          className="flex flex-col items-start gap-2 pt-[26px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]"
          aria-label="Social media links"
        >
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className="flex items-center gap-2.5 px-4 py-3.5 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border-2 border-solid shadow-[0px_8px_26px_#00000040] backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)] transition-transform duration-300 ease-out hover:scale-105 mx-auto max-w-full"
              style={{
                background: link.bgColor,
                borderColor: link.borderColor,
              }}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Visit ${link.title}`}
            >
              <div
                className="relative w-[46px] h-[46px] rounded-xl border border-solid border-[#ffffff40] bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${link.icon})` }}
                role="img"
                aria-label={`${link.title} icon`}
              />

              <div className="flex items-start gap-px flex-col relative flex-1">
                <div className="flex items-start self-stretch w-full flex-[0_0_auto] flex-col relative">
                  {link.id === 1 ? (
                    <p className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\[\'Inter\',Helvetica] font-bold text-white text-[15.6px] tracking-[0] leading-[17.6px]">
                      <span className="[font-family:\[\'Inter\',Helvetica] font-bold text-white text-[15.6px] tracking-[0] leading-[17.6px]">
                        Aninha
                      </span>
                      <span className="underline"> WhatsApp</span>
                    </p>
                  ) : (
                    <h3
                      className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] font-bold text-white tracking-[0] leading-[17.6px] underline"
                      style={{
                        fontFamily:
                          link.id === 4
                            ? "var(--kamilydias-com-inter-bold-font-family)"
                            : "\'Inter\',Helvetica",
                        fontSize:
                          link.id === 3
                            ? "14.6px"
                            : link.id === 4
                              ? "var(--kamilydias-com-inter-bold-font-size)"
                              : link.id === 5
                                ? "var(--kamilydias-com-inter-bold-font-size)"
                                : "15.6px",
                        fontWeight:
                          link.id === 4
                            ? "var(--kamilydias-com-inter-bold-font-weight)"
                            : link.id === 5
                              ? "var(--kamilydias-com-inter-bold-font-weight)"
                              : "bold",
                        letterSpacing:
                          link.id === 4
                            ? "var(--kamilydias-com-inter-bold-letter-spacing)"
                            : link.id === 5
                              ? "var(--kamilydias-com-inter-bold-letter-spacing)"
                              : "0",
                        lineHeight:
                          link.id === 4
                            ? "var(--kamilydias-com-inter-bold-line-height)"
                            : link.id === 5
                              ? "var(--kamilydias-com-inter-bold-line-height)"
                              : "17.6px",
                        fontStyle:
                          link.id === 4
                            ? "var(--kamilydias-com-inter-bold-font-style)"
                            : link.id === 5
                              ? "var(--kamilydias-com-inter-bold-font-style)"
                              : "normal",
                      }}
                    >
                      {link.title}
                    </h3>
                  )}
                </div>

                <div className="flex items-start self-stretch w-full flex-[0_0_auto] opacity-95 flex-col relative">
                  {link.id === 2 ? (
                    <p className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\[\'Inter\',Helvetica] font-medium text-[#f1ece8] text-[11.2px] tracking-[0] leading-[17.4px]">
                      <span className="underline">@a</span>
                      <span className="[font-family:\[\'Inter\',Helvetica] font-medium text-[#f1ece8] text-[11.2px] tracking-[0] leading-[17.4px]">
                        niinhalza
                      </span>
                    </p>
                  ) : link.id === 4 ? (
                    <p className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] font-kamilydias-com-inter-medium font-[number:var(--kamilydias-com-inter-medium-font-weight)] text-[#f1ece8] text-[length:var(--kamilydias-com-inter-medium-font-size)] tracking-[var(--kamilydias-com-inter-medium-letter-spacing)] leading-[var(--kamilydias-com-inter-medium-line-height)] underline [font-style:var(--kamilydias-com-inter-medium-font-style)]">
                      {link.description}
                    </p>
                  ) : link.id === 5 ? (
                    <p className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\[\'Inter\',Helvetica] font-medium text-[#f1ece8] text-[11.1px] tracking-[0] leading-[17.4px] underline">
                      {link.description}
                    </p>
                  ) : (
                    <p
                      className="relative self-stretch mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\[\'Inter\',Helvetica] font-medium text-[#f1ece8] tracking-[0] leading-[17.4px] underline"
                      style={{
                        fontSize: link.id === 1 ? "11.1px" : "11.4px",
                      }}
                    >
                      {link.description}
                    </p>
                  )}
                </div>
              </div>

              <div
                className="flex flex-col items-start pt-1.5 pb-[7.39px] px-[11px] relative bg-[#00000038] rounded-[999px] border border-solid border-[#ffffff33]"
                style={{
                  width:
                    link.id === 1
                      ? "56.69px"
                      : link.id === 2
                        ? "72.7px"
                        : link.id === 3
                          ? "76.02px"
                          : link.id === 4
                            ? "93.34px"
                            : "55.36px",
                }}
              >
                <a
                  className="relative w-fit mt-[-1.00px] text-white tracking-[0] leading-[17.4px] underline whitespace-nowrap"
                  style={{
                    fontFamily:
                      link.id === 5
                        ? "var(--kamilydias-com-inter-medium-font-family)"
                        : "\'Inter\',Helvetica",
                    fontWeight:
                      link.id === 5
                        ? "var(--kamilydias-com-inter-medium-font-weight)"
                        : "medium",
                    fontSize:
                      link.id === 1
                        ? "11.4px"
                        : link.id === 2
                          ? "11.4px"
                          : link.id === 5
                            ? "var(--kamilydias-com-inter-medium-font-size)"
                            : "12px",
                    letterSpacing:
                      link.id === 5
                        ? "var(--kamilydias-com-inter-medium-letter-spacing)"
                        : "0",
                    lineHeight:
                      link.id === 5
                        ? "var(--kamilydias-com-inter-medium-line-height)"
                        : "17.4px",
                    fontStyle:
                      link.id === 5
                        ? "var(--kamilydias-com-inter-medium-font-style)"
                        : "normal",
                  }}
                  href={link.buttonHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.buttonText}
                </a>
              </div>
            </a>
          ))}
        </nav>

        <footer className="flex items-center justify-center gap-2.5 pt-10 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [text-shadow:0.5px_0.5px_1px_#000000] [font-family:\[\'Inter\',Helvetica] font-medium text-white text-[12.8px] text-center tracking-[0] leading-[17.4px] whitespace-nowrap">
            © Ana Luiza • Todos os direitos reservados
          </p>
        </footer>
      </div>
    </main>
  );
};


